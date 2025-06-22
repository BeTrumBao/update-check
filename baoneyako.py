import sys, threading, psutil, os, zipfile, json, webbrowser, random, shutil, platform, re
from datetime import datetime, timedelta
import pyperclip
from time import sleep

# --- KHỐI IMPORT CỦA PYQT6 ---
from PyQt6 import QtWidgets, QtCore
from PyQt6.QtWidgets import (
    QApplication, QWidget, QMessageBox, QLabel, QVBoxLayout, QHBoxLayout, QGridLayout, QGroupBox, QFormLayout, QLineEdit,
    QSpinBox, QCheckBox, QPushButton, QSplitter,
    QTextEdit, QListWidget, QComboBox, QDialog, QDialogButtonBox, QMenuBar, QTabWidget, QTreeWidget, QTreeWidgetItem,
    QProgressDialog, QRadioButton, QFileDialog
)
from PyQt6.QtGui import QColor, QAction

# --- KHỐI IMPORT CỦA SELENIUM ---
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException, WebDriverException

# --- HÀM HELPER, EXCEPTION TÙY CHỈNH VÀ CÁC CLASS ---
class CheckpointException(Exception): pass
def create_proxy_extension(proxy_host, proxy_port, proxy_user, proxy_pass, zip_path):
    manifest_json = """{"version": "1.0.0","manifest_version": 2,"name": "Chrome Proxy","permissions": ["proxy","tabs","unlimitedStorage","storage","<all_urls>","webRequest","webRequestBlocking"],"background": {"scripts": ["background.js"]}}"""
    background_js = f"""var config={{mode:"fixed_servers",rules:{{singleProxy:{{scheme:"http",host:"{proxy_host}",port:parseInt({proxy_port})}},bypassList:["localhost"]}}}};chrome.proxy.settings.set({{value:config,scope:"regular"}},function(){{}});function callbackFn(details){{return{{authCredentials:{{username:"{proxy_user}",password:"{proxy_pass}"}}}}}}chrome.webRequest.onAuthRequired.addListener(callbackFn,{{urls:["<all_urls>"]}},['blocking']);"""
    with zipfile.ZipFile(zip_path, 'w') as zp: zp.writestr("manifest.json", manifest_json); zp.writestr("background.js", background_js)

class CreateProfileDialog(QDialog):
    def __init__(self, parent=None):
        super().__init__(parent); self.setWindowTitle("Tạo Profile Mới"); self.setMinimumWidth(400); self.layout = QVBoxLayout(self); self.form_layout = QFormLayout(); self.profile_name_input = QLineEdit(); self.email_input = QLineEdit(); self.password_input = QLineEdit(); self.password_input.setEchoMode(QLineEdit.EchoMode.Password); self.proxy_input = QLineEdit(); self.form_layout.addRow("Tên Profile (*):", self.profile_name_input); self.form_layout.addRow("Email Facebook:", self.email_input); self.form_layout.addRow("Mật khẩu Facebook:", self.password_input); self.form_layout.addRow("Proxy (nếu có):", self.proxy_input); self.layout.addLayout(self.form_layout); self.button_box = QDialogButtonBox(QDialogButtonBox.StandardButton.Ok | QDialogButtonBox.StandardButton.Cancel); self.button_box.accepted.connect(self.accept); self.button_box.rejected.connect(self.reject); self.layout.addWidget(self.button_box)
    def accept(self):
        if not self.profile_name_input.text().strip(): QMessageBox.warning(self, "Thiếu thông tin", "Tên Profile là bắt buộc."); return
        if not self.email_input.text().strip() or not self.password_input.text().strip(): QMessageBox.warning(self, "Thiếu thông tin", "Email và Mật khẩu là bắt buộc để xác minh profile."); return
        super().accept()

class HelpDialog(QDialog):
    def __init__(self, parent=None):
        super().__init__(parent); self.setWindowTitle("Hướng dẫn sử dụng chi tiết"); self.setMinimumSize(750, 600); main_layout = QVBoxLayout(self); self.tabs = QTabWidget()
        def _create_guide_tab(content_html):
            widget = QWidget(); layout = QVBoxLayout(widget); label = QLabel(content_html)
            label.setWordWrap(True); label.setTextFormat(QtCore.Qt.TextFormat.RichText); label.setAlignment(QtCore.Qt.AlignmentFlag.AlignTop); label.setOpenExternalLinks(True)
            layout.addWidget(label)
            return widget
        self.tabs.addTab(_create_guide_tab("<h2>Chào mừng!</h2><h4><b>1. Nguyên tắc vàng</b></h4><p><b>CHẬM VÀ AN TOÀN LÀ TRÊN HẾT.</b> Facebook ghét bot. Để tránh bị khóa, hãy hành động như người thật: dùng delay cao, chạy ít tài khoản cùng lúc và \"nuôi\" các tài khoản mới trước khi sử dụng.</p><h4><b>2. Quản lý Profile</b></h4><ul><li><b>Danh sách Profile:</b> Chọn một profile đã lưu từ đây. Tool sẽ tự động kiểm tra trạng thái và điền các thông tin liên quan.</li><li><b>Nút ➕ Tạo Profile:</b> Mở cửa sổ tạo profile mới. Tool sẽ tự động đăng nhập thử để xác minh tài khoản có hợp lệ không trước khi lưu.</li><li><b>Nút 🔄 Làm mới:</b> Tải lại danh sách profile từ file dữ liệu.</li><li><b>Proxy:</b> Định dạng <b>user:pass@ip:port</b>. Nếu không có user/pass thì dùng <b>ip:port</b>. Nên mua Proxy Dân Cư (Residential) để an toàn nhất.</li></ul>"), "📖 Tổng quan & Profile")
        self.tabs.addTab(_create_guide_tab("<h4><b>Chi tiết các chức năng trong Tab Đăng Bài:</b></h4><ul><li><b>Đăng hàng loạt:</b> Ô 'Link nhóm' giờ đây là một khung lớn, bạn có thể dán nhiều link vào (mỗi link một dòng) để đăng lần lượt.</li><li><b>Spintax:</b> Ô 'Nội dung bài' hỗ trợ cú pháp `{từ 1|từ 2}` để trộn chữ, giúp nội dung luôn mới mẻ.</li><li><b>Đường dẫn ảnh (tùy chọn):</b> Bấm nút 'Chọn ảnh...' để tìm file ảnh trên máy tính của bạn. Nếu để trống, tool sẽ chỉ đăng chữ.</li><li><b>Số tab:</b> Chạy N phiên đăng bài cùng lúc (chỉ áp dụng khi đăng lên tường nhà).</li><li><b>Delay (s):</b> Thời gian nghỉ (giây) giữa các hành động. Khi đăng hàng loạt, đây là thời gian nghỉ giữa các nhóm.</li></ul>"), "🚀 Đăng Bài")
        self.tabs.addTab(_create_guide_tab("<h4><b>Chi tiết các chức năng trong Tab Quét Dữ Liệu:</b></h4><ul><li><b>Sử dụng profile:</b> Tool sẽ dùng profile đang được chọn ở trên để tiến hành quét.</li><li><b>Link Profile:</b> Dán link của một trang cá nhân hoặc Fanpage vào đây.</li><li><b>Số lần cuộn:</b> Tool sẽ cuộn trang bao nhiêu lần để tải thêm bài viết.</li><li><b>Chỉ quét bài viết được gắn thẻ:</b> Chỉ lấy các bài mà profile này được người khác tag.</li><li><b>Bảng kết quả:</b> <b>Nháy đúp chuột</b> vào một dòng trong bảng để mở link gốc của bài viết.</li></ul>"), "🔍 Quét Dữ Liệu")
        self.tabs.addTab(_create_guide_tab("<h4><b>Chi tiết các chức năng trong Tab Auto Messenger:</b></h4><ul><li><b style='color:red;'>CẢNH BÁO:</b> Chức năng có rủi ro cao nhất. Hạn chế sử dụng tối đa.</li><li><b>Link người nhận:</b> Lấy từ trang <i>messenger.com</i>, có dạng <i>.../t/1000...</i>.</li></ul>"), "🤖 Auto Messenger")
        self.tabs.addTab(_create_guide_tab("<h4><b>Chi tiết các chức năng trong Tab Nuôi Account:</b></h4><ul><li><b>Mục đích:</b> Mô phỏng hành vi người dùng thật để xây dựng 'độ tin cậy' (trust score) cho tài khoản.</li><li><b>Thời gian lướt & Số bài Thích:</b> Tool sẽ lướt News Feed trong X phút, và trong quá trình đó, sẽ tìm và Thích ngẫu nhiên Y bài viết.</li></ul>"), "❤️ Nuôi Account")
        main_layout.addWidget(self.tabs); button_box = QDialogButtonBox(QDialogButtonBox.StandardButton.Ok); button_box.accepted.connect(self.accept); main_layout.addWidget(button_box)

# ==============================================================================
# LỚP GIAO DIỆN CHÍNH
# ==============================================================================
class FacebookTool(QtWidgets.QWidget):
    update_log_signal=QtCore.pyqtSignal(str);checkpoint_detected_signal=QtCore.pyqtSignal(str);post_finished_signal=QtCore.pyqtSignal();post_scraped_signal=QtCore.pyqtSignal(dict);scrape_finished_signal=QtCore.pyqtSignal(str);messenger_finished_signal=QtCore.pyqtSignal(str);warmup_status_update_signal=QtCore.pyqtSignal(dict);warmup_finished_signal=QtCore.pyqtSignal(str)
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Facebook Tool Pro (v19.0 - Group 1 Features)")
        self.resize(1280, 800)
        self.move(QApplication.primaryScreen().availableGeometry().center() - self.rect().center())
        self.running_drivers = []
        self.post_success_count = 0
        self.active_threads = 0
        self.thread_lock = threading.Lock()
        self.profiles_data = {}
        
        overall_layout = QVBoxLayout(self)
        menu_bar = QMenuBar()
        help_menu=menu_bar.addMenu("Trợ giúp");guide_action=QAction("Hướng dẫn sử dụng chi tiết",self);guide_action.triggered.connect(self.show_user_guide);error_guide_action=QAction("Bảng Mã Lỗi Thường Gặp",self);error_guide_action.triggered.connect(self.show_error_guide);reset_action=QAction("Reset Ứng Dụng...",self);reset_action.triggered.connect(self.reset_application);about_action=QAction("Thông tin tác giả",self);about_action.triggered.connect(self.show_about_dialog);help_menu.addAction(guide_action);help_menu.addAction(error_guide_action);help_menu.addSeparator();help_menu.addAction(reset_action);help_menu.addSeparator();help_menu.addAction(about_action);overall_layout.setMenuBar(menu_bar)

        self.tabs = QTabWidget()
        self.setup_poster_tab()
        self.setup_scraper_tab()
        self.setup_messenger_tab()
        self.setup_warmup_tab()
        overall_layout.addWidget(self.tabs)
        
        self.apply_theme()
        self.load_profiles()
        QtCore.QTimer.singleShot(100, self.show_disclaimer)

    def _create_warning_banner(self, text):
        banner=QLabel(text);banner.setStyleSheet("QLabel{color:#faa61a;font-weight:bold;background-color:#404249;padding:10px;border-radius:5px;font-size:13px;}");banner.setWordWrap(True);banner.setAlignment(QtCore.Qt.AlignmentFlag.AlignCenter);return banner

    def setup_poster_tab(self):
        poster_widget=QWidget();poster_layout=QVBoxLayout(poster_widget)
        poster_layout.addWidget(self._create_warning_banner("⚠️ Mọi hành vi tự động hóa đều có rủi ro. Hãy sử dụng delay hợp lý và proxy chất lượng cao để tăng độ an toàn."))
        
        top_splitter=QSplitter(QtCore.Qt.Orientation.Horizontal)
        form_group=QGroupBox("Thông tin bài đăng & Profile")
        form_layout=QFormLayout();form_layout.setSpacing(10)
        
        self.profile_input=QComboBox();self.profile_input.setPlaceholderText("Chọn một profile...")
        self.refresh_profiles_button=QPushButton("🔄");self.refresh_profiles_button.setToolTip("Tải lại danh sách")
        self.create_profile_button=QPushButton("➕ Tạo Profile");self.create_profile_button.setToolTip("Mở bảng tạo profile mới")
        profile_layout=QHBoxLayout();profile_layout.addWidget(self.profile_input, 1);profile_layout.addWidget(self.refresh_profiles_button);profile_layout.addWidget(self.create_profile_button)
        form_layout.addRow("Quản lý Profile:", profile_layout)

        self.email_input=QLineEdit();self.email_input.setReadOnly(True)
        self.password_input=QLineEdit();self.password_input.setEchoMode(QLineEdit.EchoMode.Password);self.password_input.setReadOnly(True)
        self.proxy_input=QLineEdit();self.proxy_input.setReadOnly(True)
        form_layout.addRow("Email:",self.email_input)
        form_layout.addRow("Mật khẩu:",self.password_input)
        form_layout.addRow("Proxy:",self.proxy_input)
        
        self.status_input=QTextEdit();self.status_input.setPlaceholderText("Nhập nội dung bài viết (hỗ trợ Spintax {a|b})...")
        self.status_input.setMaximumHeight(150)
        form_layout.addRow("Nội dung bài:",self.status_input)
        
        self.image_path_input = QLineEdit(); self.image_path_input.setPlaceholderText("Để trống nếu chỉ đăng chữ...")
        self.select_image_button = QPushButton("Chọn ảnh...")
        image_layout = QHBoxLayout(); image_layout.addWidget(self.image_path_input, 1); image_layout.addWidget(self.select_image_button)
        form_layout.addRow("Đường dẫn ảnh:", image_layout)

        self.post_on_timeline_radio=QRadioButton("Đăng lên Tường nhà");self.post_in_group_radio=QRadioButton("Đăng vào Nhóm")
        self.post_on_timeline_radio.setChecked(True)
        post_target_layout=QHBoxLayout();post_target_layout.addWidget(self.post_on_timeline_radio);post_target_layout.addWidget(self.post_in_group_radio);post_target_layout.addStretch()
        form_layout.addRow("Đăng tới:", post_target_layout)
        
        # === NEW FEATURE: BULK GROUP POST ===
        self.group_input=QTextEdit();self.group_input.setPlaceholderText("Dán danh sách link nhóm, mỗi link một dòng...")
        self.group_input.setMaximumHeight(100) # Giới hạn chiều cao
        self.group_input_label=QLabel("Link nhóm:")
        form_layout.addRow(self.group_input_label,self.group_input)
        
        form_group.setLayout(form_layout)
        self.post_on_timeline_radio.toggled.connect(self._update_post_target_widgets);self._update_post_target_widgets()

        result_group=QGroupBox("Log Hoạt Động")
        result_layout=QVBoxLayout()
        self.log_list_widget=QListWidget();self.log_list_widget.itemDoubleClicked.connect(self.copy_error)
        result_layout.addWidget(self.log_list_widget)
        
        # === NEW FEATURE: SAVE LOG BUTTON ===
        self.save_log_button = QPushButton("Lưu Log...")
        log_button_layout = QHBoxLayout()
        log_button_layout.addStretch()
        log_button_layout.addWidget(self.save_log_button)
        result_layout.addLayout(log_button_layout)
        
        result_group.setLayout(result_layout)
        
        top_splitter.addWidget(form_group);top_splitter.addWidget(result_group);top_splitter.setSizes([700,500])
        
        control_group=QGroupBox("Điều Khiển Đăng Bài")
        control_layout=QGridLayout()
        self.tab_count=QSpinBox();self.tab_count.setRange(1,100);self.tab_count.setValue(1)
        self.delay_input=QSpinBox();self.delay_input.setRange(5,600);self.delay_input.setValue(15) # Tăng max delay
        self.headless_checkbox=QCheckBox("Ẩn trình duyệt");self.headless_checkbox.setChecked(True)
        self.run_button=QPushButton("🚀 Bắt đầu Đăng")
        self.kill_button=QPushButton("❌ Tắt tất cả")
        control_layout.addWidget(QLabel("Số tab (chỉ cho tường nhà):"),0,0);control_layout.addWidget(self.tab_count,0,1)
        control_layout.addWidget(QLabel("Delay (s):"),0,2);control_layout.addWidget(self.delay_input,0,3)
        control_layout.addWidget(self.headless_checkbox,0,4)
        control_layout.addItem(QtWidgets.QSpacerItem(40,20,QtWidgets.QSizePolicy.Policy.Expanding,QtWidgets.QSizePolicy.Policy.Minimum),0,5)
        control_layout.addWidget(self.run_button,0,6);control_layout.addWidget(self.kill_button,0,7)
        control_group.setLayout(control_layout)
        
        poster_layout.addWidget(top_splitter);poster_layout.addWidget(control_group)
        self.tabs.addTab(poster_widget,"🚀 Đăng Bài")

        self.update_log_signal.connect(self.update_log_view)
        self.post_finished_signal.connect(self.show_post_completion_message)
        self.run_button.clicked.connect(self.confirm_run)
        self.kill_button.clicked.connect(self.confirm_kill)
        self.refresh_profiles_button.clicked.connect(self.load_profiles)
        self.create_profile_button.clicked.connect(self.open_create_profile_dialog)
        self.profile_input.currentTextChanged.connect(self.on_profile_selected)
        self.checkpoint_detected_signal.connect(self.handle_checkpoint)
        self.select_image_button.clicked.connect(self.open_image_selector)
        self.save_log_button.clicked.connect(self.save_log_to_file)

    def open_image_selector(self):
        file_name, _ = QFileDialog.getOpenFileName(self, "Chọn một file ảnh", "", "Image Files (*.png *.jpg *.jpeg *.bmp *.gif)")
        if file_name:
            self.image_path_input.setText(file_name)
            self.update_log_signal.emit(f"💡 Đã chọn ảnh: {os.path.basename(file_name)}")
            
    # === NEW FEATURE: SAVE LOG ===
    def save_log_to_file(self):
        log_content = []
        for i in range(self.log_list_widget.count()):
            log_content.append(self.log_list_widget.item(i).text())
        
        if not log_content:
            QMessageBox.warning(self, "Log rỗng", "Không có gì để lưu.")
            return

        file_name, _ = QFileDialog.getSaveFileName(self, "Lưu file log", f"log_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt", "Text Files (*.txt)")

        if file_name:
            try:
                with open(file_name, 'w', encoding='utf-8') as f:
                    f.write('\n'.join(log_content))
                self.update_log_signal.emit(f"✅ Đã lưu log thành công vào file: {file_name}")
            except Exception as e:
                QMessageBox.critical(self, "Lỗi", f"Không thể lưu file log: {e}")

    # === NEW FEATURE: SPINTAX PROCESSING ===
    def process_spintax(self, text):
        pattern = re.compile(r'{([^{}]*)}')
        while True:
            match = pattern.search(text)
            if not match:
                break
            options = match.group(1).split('|')
            replacement = random.choice(options)
            text = text[:match.start()] + replacement + text[match.end():]
        return text

    def _update_post_target_widgets(self):
        is_group_post=self.post_in_group_radio.isChecked()
        self.group_input_label.setVisible(is_group_post)
        self.group_input.setVisible(is_group_post)
    def setup_scraper_tab(self):
        # ... (Không thay đổi) ...
        scraper_widget=QWidget();scraper_layout=QVBoxLayout(scraper_widget);scraper_layout.addWidget(self._create_warning_banner("⚠️ Quét dữ liệu liên tục có thể bị coi là hành vi đáng ngờ. Nên có khoảng nghỉ giữa các lần quét."));self.active_profile_label_scraper=QLabel("Sử dụng profile: (Chưa chọn)");self.active_profile_label_scraper.setStyleSheet("font-style: italic; color: #989aa2;");scraper_control_group=QGroupBox("Điều Khiển Quét Dữ Liệu");scraper_control_layout=QGridLayout();self.scrape_profile_url_input=QLineEdit();self.scrape_profile_url_input.setText("https://www.facebook.com/");self.scrape_profile_url_input.setPlaceholderText("Dán username hoặc ID của profile vào đây...");self.scroll_count_input=QSpinBox();self.scroll_count_input.setRange(1,100);self.scroll_count_input.setValue(5);self.scrape_tagged_only_checkbox=QCheckBox("Chỉ quét bài viết được gắn thẻ");self.scrape_button=QPushButton("🔍 Bắt đầu Quét");scraper_control_layout.addWidget(QLabel("Link Profile:"),0,0);scraper_control_layout.addWidget(self.scrape_profile_url_input,0,1,1,3);scraper_control_layout.addWidget(QLabel("Số lần cuộn:"),1,0);scraper_control_layout.addWidget(self.scroll_count_input,1,1);scraper_control_layout.addWidget(self.scrape_tagged_only_checkbox,1,2);scraper_control_layout.addWidget(self.scrape_button,1,3);scraper_control_group.setLayout(scraper_control_layout);scrape_result_group=QGroupBox("Kết Quả Quét (nháy đúp để xem bài viết)");scrape_result_layout=QVBoxLayout();self.scrape_result_tree=QTreeWidget();self.scrape_result_tree.setHeaderLabels(["Nội dung","Thời gian","Reactions","Comments"]);self.scrape_result_tree.header().setSectionResizeMode(0,QtWidgets.QHeaderView.ResizeMode.Stretch);scrape_result_layout.addWidget(self.scrape_result_tree);scrape_result_group.setLayout(scrape_result_layout);scraper_layout.addWidget(self.active_profile_label_scraper);scraper_layout.addWidget(scraper_control_group);scraper_layout.addWidget(scrape_result_group);self.tabs.addTab(scraper_widget,"🔍 Quét Dữ Liệu");self.scrape_button.clicked.connect(self.start_scraping);self.post_scraped_signal.connect(self.add_scraped_post_to_tree);self.scrape_finished_signal.connect(self.on_scraping_finished);self.scrape_result_tree.itemDoubleClicked.connect(self.open_post_in_browser)
    def setup_messenger_tab(self):
        # ... (Không thay đổi) ...
        msg_widget=QWidget();msg_layout=QVBoxLayout(msg_widget);msg_layout.addWidget(self._create_warning_banner("⚠️ RỦI RO RẤT CAO! Tự động gửi tin nhắn hàng loạt là hành vi vi phạm nghiêm trọng và có thể khiến tài khoản bị khóa vĩnh viễn."));self.active_profile_label_msg=QLabel("Sử dụng profile: (Chưa chọn)");self.active_profile_label_msg.setStyleSheet("font-style: italic; color: #989aa2;");msg_control_group=QGroupBox("Điều Khiển Auto Messenger");msg_control_layout=QFormLayout();self.msg_target_url_input=QLineEdit();self.msg_target_url_input.setPlaceholderText("VD: https://www.messenger.com/t/1000...");self.msg_template_combo=QComboBox();self.msg_template_combo.addItem("Tự nhập nội dung...");self.msg_template_combo.addItems(["❤️ Em yêu anhhhh"," nhớ em không?"," đang làm gì đó?","Rep tin nhắn em đi :<","Ngủ ngon nhé tình yêu 🥰"]);self.msg_content_input=QTextEdit();self.msg_content_input.setPlaceholderText("Nội dung tin nhắn sẽ gửi...");self.msg_count_input=QSpinBox();self.msg_count_input.setRange(1,1000);self.msg_count_input.setValue(10);self.msg_delay_input=QSpinBox();self.msg_delay_input.setRange(1,300);self.msg_delay_input.setValue(5);self.msg_start_button=QPushButton("❤️ Bắt đầu gửi");msg_control_layout.addRow("Link người nhận:",self.msg_target_url_input);msg_control_layout.addRow("Chọn mẫu câu:",self.msg_template_combo);msg_control_layout.addRow("Hoặc tự nhập:",self.msg_content_input);msg_control_layout.addRow("Số lần gửi:",self.msg_count_input);msg_control_layout.addRow("Delay giữa các tin (giây):",self.msg_delay_input);msg_control_layout.addRow(self.msg_start_button);msg_control_group.setLayout(msg_control_layout);msg_layout.addWidget(self.active_profile_label_msg);msg_layout.addWidget(msg_control_group);msg_layout.addStretch();self.tabs.addTab(msg_widget,"🤖 Auto Messenger");self.msg_template_combo.currentTextChanged.connect(self.on_template_selected);self.msg_start_button.clicked.connect(self.start_messaging);self.messenger_finished_signal.connect(self.on_messaging_finished)
    def setup_warmup_tab(self):
        # ... (Không thay đổi) ...
        warmup_widget=QWidget();warmup_layout=QVBoxLayout(warmup_widget);warmup_layout.addWidget(self._create_warning_banner("💡 'Nuôi' account là hành động cần thiết để tăng độ tin cậy. Nên chạy 15-30 phút mỗi ngày cho các profile mới."));self.active_profile_label_warmup=QLabel("Sử dụng profile: (Chưa chọn)");self.active_profile_label_warmup.setStyleSheet("font-style: italic; color: #989aa2;");warmup_control_group=QGroupBox("Cấu hình Nuôi Account");form_layout=QFormLayout(warmup_control_group);self.warmup_scroll_duration_input=QSpinBox();self.warmup_scroll_duration_input.setRange(1,120);self.warmup_scroll_duration_input.setValue(5);self.warmup_like_count_input=QSpinBox();self.warmup_like_count_input.setRange(0,50);self.warmup_like_count_input.setValue(3);self.warmup_start_button=QPushButton("❤️ Bắt đầu Nuôi");form_layout.addRow("Thời gian lướt News Feed (phút):",self.warmup_scroll_duration_input);form_layout.addRow("Số bài viết sẽ Thích (like):",self.warmup_like_count_input);form_layout.addRow(self.warmup_start_button);status_group=QGroupBox("Trạng thái Nuôi Trực tiếp");status_layout=QFormLayout(status_group);self.warmup_status_label=QLabel("Chưa chạy");self.warmup_progress_label=QLabel("N/A");self.warmup_timer_label=QLabel("00:00");status_layout.addRow("Hành động:",self.warmup_status_label);status_layout.addRow("Tiến trình:",self.warmup_progress_label);status_layout.addRow("Thời gian:",self.warmup_timer_label);warmup_layout.addWidget(self.active_profile_label_warmup);warmup_layout.addWidget(warmup_control_group);warmup_layout.addWidget(status_group);warmup_layout.addStretch();self.tabs.addTab(warmup_widget,"❤️ Nuôi Account");self.warmup_start_button.clicked.connect(self.start_warmup);self.warmup_finished_signal.connect(self.on_warmup_finished);self.warmup_status_update_signal.connect(self.update_warmup_status)
    def apply_theme(self):self.setStyleSheet("""QWidget{font-size:14px;background-color:#313338;color:#dbdee1}QLabel{background-color:transparent;}QDialog{background-color:#383a40}QMenuBar{background-color:#313338;color:#dbdee1}QMenuBar::item:selected{background-color:#404249}QMenu{background-color:#2b2d31;color:#dbdee1;border:1px solid #1e1f22}QMenu::item:selected{background-color:#404249}QTabWidget::pane{border:none}QTabBar::tab{background:#2b2d31;color:#b5bac1;padding:10px 20px;border-top-left-radius:6px;border-top-right-radius:6px}QTabBar::tab:selected{background:#404249;color:#fff}QGroupBox{font-weight:bold;border:1px solid #404249;border-radius:8px;margin-top:10px;background-color:transparent}QGroupBox::title{subcontrol-origin:margin;subcontrol-position:top left;padding:0 5px;background-color:#313338}QPushButton{padding:8px 15px;border-radius:5px;border:none;color:#fff;font-weight:bold}QPushButton[text*="🚀"],QPushButton[text*="🔍"],QPushButton[text*="❤️"]{background-color:#248046}QPushButton[text*="🚀"]:hover,QPushButton[text*="🔍"]:hover,QPushButton[text*="❤️"]:hover{background-color:#1a6334}QPushButton[text*="➕"],QPushButton[text*="🔄"]{background-color:#4e5058}QPushButton[text*="➕"]:hover,QPushButton[text*="🔄"]:hover{background-color:#5d6069}QPushButton[text*="❌"]{background-color:#da373c}QPushButton[text*="❌"]:hover{background-color:#a5282e}QPushButton:disabled{background-color:#4e5058;color:#989aa2}QLineEdit,QTextEdit,QSpinBox,QListWidget,QComboBox,QTreeWidget{padding:8px;border:1px solid #222428;border-radius:5px;background-color:#383a40;color:#dbdee1}QLineEdit[readOnly=true]{background-color:#404249}QLineEdit:focus,QTextEdit:focus,QSpinBox:focus,QComboBox:focus,QTreeWidget:focus{border:1px solid #5865F2}QComboBox::drop-down{border:none}QSplitter::handle{background-color:#404249}QSplitter::handle:hover{background-color:#5865F2}""")
    def show_disclaimer(self):QMessageBox.warning(self,"Lưu ý quan trọng","<h2>Lưu ý quan trọng & Miễn trừ trách nhiệm</h2><p>Bằng việc sử dụng phần mềm này, bạn đồng ý với các điều khoản sau:</p><ol><li><b>Rủi ro tài khoản:</b> Việc tự động hóa có thể vi phạm Điều khoản Dịch vụ của Facebook và dẫn đến việc tài khoản bị khóa. <b>Người dùng hoàn toàn chịu trách nhiệm</b>.</li><li><b>Bảo mật dữ liệu:</b> Toàn bộ thông tin profile được lưu trong file <b>profiles_data.json</b>. Hãy tự bảo vệ file này.</li><li><b>Lời khuyên:</b> Để giảm thiểu rủi ro, hãy bắt đầu với số luồng thấp và delay cao.</li></ol><p>Nhấn OK để xác nhận bạn đã đọc và đồng ý.</p>")
    def show_user_guide(self):
        dialog = HelpDialog(self)
        dialog.exec()
    def show_error_guide(self):
        error_text="""<h2>Bảng Mã Lỗi Thường Gặp</h2><h4><b>Lỗi: 🔴 CHECKPOINT DETECTED!</b></h4><ul><li><b>Nguyên nhân:</b> Tài khoản của bạn đã bị Facebook yêu cầu xác minh danh tính.</li><li><b>Cách khắc phục:</b> Mở trình duyệt, đăng nhập vào tài khoản đó và làm theo hướng dẫn. Sau khi gỡ checkpoint, hãy dùng chức năng "Nuôi Account" vài ngày trước khi dùng các tính năng khác.</li></ul><h4><b>Lỗi: ...session not created: Chrome failed to start: crashed...</b></h4><ul><li><b>Nguyên nhân:</b> Thư mục lưu dữ liệu của profile bị hỏng, hoặc có xung đột giữa phiên bản Chrome và ChromeDriver.</li><li><b>Cách khắc phục:</b> Dùng chức năng "Reset Ứng Dụng" trong menu Trợ giúp. Hoặc vào thư mục <i>chrome_profiles</i> và xóa thư mục con của profile bị lỗi.</li></ul><h4><b>Lỗi: ...Read timed out...</b></h4><ul><li><b>Nguyên nhân:</b> Trình duyệt bị treo do mạng quá chậm, proxy không ổn định hoặc máy quá tải.</li><li><b>Cách khắc phục:</b> Thử lại với proxy khác, tăng Delay, và đóng các ứng dụng khác.</li></ul><h4><b>Lỗi: ...no such element... hoặc ...element is not clickable...</b></h4><ul><li><b>Nguyên nhân:</b> Facebook đã thay đổi giao diện (HTML) của họ.</li><li><b>Cách khắc phục:</b> Lỗi này cần cập nhật lại code. Hãy liên hệ người phát triển và gửi ảnh chụp màn hình lỗi.</li></ul>"""
        QMessageBox.information(self,"Bảng Mã Lỗi",error_text)
    def show_about_dialog(self):QMessageBox.information(self,"Thông tin tác giả","<h2>Facebook Tool Pro v19.0</h2><p><b>Ý tưởng và Chỉ đạo:</b> Bạn Neyako</p><p><b>Phát triển và Lập trình:</b> Trợ lý AI Gemini (Google)</p><p><b>Hỗ trợ & Feedback:</b> betrumbaodeptraivippro@gmail.com</p><hr><p>Cảm ơn bạn đã đồng hành trong suốt quá trình phát triển!</p>")
    def reset_application(self):
        reply=QMessageBox.warning(self,"Xác nhận Reset","Hành động này sẽ xóa **TOÀN BỘ** dữ liệu của ứng dụng:\n\n   - Tất cả các profile đã lưu (file profiles_data.json)\n   - Tất cả dữ liệu trình duyệt đã lưu (thư mục chrome_profiles)\n   - Tất cả file proxy đã tạo (thư mục proxy_extensions)\n\nHành động này **KHÔNG THỂ HOÀN TÁC**. Bạn chắc chắn muốn tiếp tục?",QMessageBox.StandardButton.Yes|QMessageBox.StandardButton.No,QMessageBox.StandardButton.No)
        if reply==QMessageBox.StandardButton.No:self.update_log_signal.emit("💡 Thao tác Reset đã được hủy.");return
        reply2=QMessageBox.critical(self,"XÁC NHẬN LẦN CUỐI","BẠN CÓ CHẮC CHẮN 100% MUỐN XÓA SẠCH MỌI THỨ KHÔNG?",QMessageBox.StandardButton.Yes|QMessageBox.StandardButton.No,QMessageBox.StandardButton.No)
        if reply2==QMessageBox.StandardButton.Yes:
            self.update_log_signal.emit("🔴 Bắt đầu quá trình Reset...");QApplication.processEvents()
            try:
                if os.path.exists("profiles_data.json"):os.remove("profiles_data.json")
                if os.path.exists("chrome_profiles"):shutil.rmtree("chrome_profiles")
                if os.path.exists("proxy_extensions"):shutil.rmtree("proxy_extensions")
                self.update_log_signal.emit("✅ Đã xóa tất cả dữ liệu. Ứng dụng sẽ khởi động lại...")
                QMessageBox.information(self,"Hoàn tất","Đã reset ứng dụng thành công. Tool sẽ tự khởi động lại ngay bây giờ.")
                self.close();QtCore.QProcess.startDetached(sys.executable,sys.argv)
            except Exception as e:QMessageBox.critical(self,"Lỗi",f"Quá trình reset xảy ra lỗi: {e}")
    @QtCore.pyqtSlot(str)
    def update_log_view(self,message):
        item=QtWidgets.QListWidgetItem(message);color=None
        if"✅"in message:color=QColor("#2dc770")
        elif"❌"in message:color=QColor("#f23f42")
        elif"💡"in message:color=QColor("#5865F2")
        elif"🔴"in message or"CHECKPOINT"in message.upper():color=QColor("#faa61a")
        elif"🖼️"in message:color=QColor("#b57edc")
        if color:item.setForeground(color)
        self.log_list_widget.addItem(item);self.log_list_widget.scrollToBottom()
    @QtCore.pyqtSlot(dict)
    def update_warmup_status(self,status_data):self.warmup_status_label.setText(status_data.get("status","..."));self.warmup_progress_label.setText(status_data.get("progress","N/A"));self.warmup_timer_label.setText(status_data.get("time","00:00"))
    def load_profiles(self):
        profile_file="profiles_data.json";self.profiles_data={};
        if os.path.exists(profile_file):
            try:
                with open(profile_file,'r',encoding='utf-8')as f:self.profiles_data=json.load(f)
            except json.JSONDecodeError:pass
        current_text=self.profile_input.currentText(); self.profile_input.blockSignals(True);self.profile_input.clear()
        profile_names=sorted(self.profiles_data.keys());self.profile_input.addItems(profile_names)
        if current_text in profile_names:self.profile_input.setCurrentText(current_text)
        else:self.profile_input.setCurrentIndex(-1)
        self.profile_input.blockSignals(False);self.update_log_signal.emit(f"✅ Đã tải {len(profile_names)} profiles.");self.on_profile_selected(self.profile_input.currentText())
    def on_profile_selected(self,profile_name):
        self.profile_input.currentTextChanged.disconnect(self.on_profile_selected)
        for label in[self.active_profile_label_scraper,self.active_profile_label_msg,self.active_profile_label_warmup]:label.setText(f"Sử dụng profile: {profile_name if profile_name else'(Chưa chọn)'}")
        if not profile_name:
            self.email_input.clear();self.password_input.clear();self.proxy_input.clear()
            self.profile_input.currentTextChanged.connect(self.on_profile_selected)
            return
        data=self.profiles_data.get(profile_name,{});self.email_input.setText(data.get("email",""));self.password_input.setText(data.get("password",""));self.proxy_input.setText(data.get("proxy",""))
        progress=QProgressDialog(f"Đang kiểm tra profile '{profile_name}'...","",0,0,self);progress.setWindowModality(QtCore.Qt.WindowModality.WindowModal);progress.setCancelButton(None);progress.show();QApplication.processEvents()
        try:
            self._verify_profile(profile_name,data.get("email"),data.get("password"),data.get("proxy"));self.update_log_signal.emit(f"✅ Profile '{profile_name}' hoạt động tốt.")
        except CheckpointException:self.handle_checkpoint(profile_name)
        except Exception as e:QMessageBox.critical(self,"Kiểm tra thất bại",f"Không thể đăng nhập với profile '{profile_name}'.\nLỗi: {e}")
        finally:progress.close()
        self.profile_input.currentTextChanged.connect(self.on_profile_selected)
    def open_create_profile_dialog(self):
        dialog=CreateProfileDialog(self)
        if dialog.exec()==QDialog.DialogCode.Accepted:
            profile_name=dialog.profile_name_input.text().strip();email=dialog.email_input.text();password=dialog.password_input.text();proxy=dialog.proxy_input.text()
            if profile_name in self.profiles_data:
                reply=QMessageBox.question(self,"Ghi đè Profile?",f"Profile '{profile_name}' đã tồn tại. Cập nhật?",QMessageBox.StandardButton.Yes|QMessageBox.StandardButton.No)
                if reply==QMessageBox.StandardButton.No:return
            progress=QProgressDialog(f"Đang xác minh profile mới '{profile_name}'...","",0,0,self);progress.setWindowModality(QtCore.Qt.WindowModality.WindowModal);progress.setCancelButton(None);progress.show();QApplication.processEvents()
            try:
                self._verify_profile(profile_name,email,password,proxy,is_new=True)
                new_data={"email":email,"password":password,"proxy":proxy};self.profiles_data[profile_name]=new_data
                self.save_profiles_to_file();self.load_profiles();self.profile_input.setCurrentText(profile_name)
                QMessageBox.information(self,"Thành công",f"Đã xác minh và lưu profile '{profile_name}'!")
            except Exception as e:QMessageBox.critical(self,"Xác minh thất bại",f"Không thể đăng nhập với profile '{profile_name}'.\nLỗi: {e}\n\nProfile sẽ không được lưu.")
            finally:progress.close()
    def _verify_profile(self,profile_name,email,password,proxy_str,is_new=False):
        driver=None
        try:
            driver=self._create_driver(profile_name,proxy_str,"Verify",headless=True)
            self._login_facebook(driver,email,password,"Xác minh")
        finally:
            if driver:driver.quit()
            if is_new:
                profile_path=os.path.join(os.getcwd(),"chrome_profiles",profile_name)
                if os.path.exists(profile_path):shutil.rmtree(profile_path)
    @QtCore.pyqtSlot(str)
    def handle_checkpoint(self,profile_name_with_tab):
        profile_name=profile_name_with_tab.split('_tab')[0]
        self.update_log_signal.emit(f"🔴 CHECKPOINT DETECTED on profile '{profile_name}'!")
        reply=QMessageBox.question(self,"Phát hiện Checkpoint",f"Profile '{profile_name}' đã bị checkpoint.\n\nBạn có muốn xóa profile này khỏi danh sách và thư mục không?",QMessageBox.StandardButton.Yes|QMessageBox.StandardButton.No)
        if reply==QMessageBox.StandardButton.Yes:
            if profile_name in self.profiles_data:del self.profiles_data[profile_name];self.save_profiles_to_file()
            profile_path=os.path.join(os.getcwd(),"chrome_profiles",profile_name)
            if os.path.exists(profile_path):
                try:shutil.rmtree(profile_path);self.update_log_signal.emit(f"✅ Đã xóa thư mục của profile '{profile_name}'.")
                except OSError as e:self.update_log_signal.emit(f"❌ Không thể xóa thư mục profile: {e}")
            self.load_profiles()
    def save_profiles_to_file(self):
        with open("profiles_data.json",'w',encoding='utf-8')as f:json.dump(self.profiles_data,f,indent=4,ensure_ascii=False)
    def confirm_run(self):
        profile_name=self.profile_input.currentText();
        if not profile_name:QMessageBox.warning(self,"Thiếu Profile","Vui lòng chọn một profile.");return
        reply=QMessageBox.question(self,"Xác nhận chạy",f"Bạn chắc chắn muốn chạy với profile '{profile_name}'?",QMessageBox.StandardButton.Yes|QMessageBox.StandardButton.No)
        if reply==QMessageBox.StandardButton.Yes:self.log_list_widget.clear();self.post_success_count=0;self.run_button.setEnabled(False);threading.Thread(target=self.run_threads).start()
    def confirm_kill(self):
        if QMessageBox.question(self,"Xác nhận","Tắt tất cả các trình duyệt đang chạy?",QMessageBox.StandardButton.Yes|QMessageBox.StandardButton.No)==QMessageBox.StandardButton.Yes:self.kill_all_tabs()
    def copy_error(self,item):pyperclip.copy(item.text());QMessageBox.information(self,"Đã sao chép","Đã sao chép nội dung.")
    def kill_all_tabs(self):
        for driver in self.running_drivers:
            try:driver.quit()
            except:pass
        self.running_drivers.clear();self.update_log_signal.emit("🔴 Đã tắt tất cả các trình duyệt.")
        self.run_button.setEnabled(True);self.scrape_button.setEnabled(True);self.msg_start_button.setEnabled(True);self.warmup_start_button.setEnabled(True)
    def show_post_completion_message(self):
        QMessageBox.information(self,"✅ Hoàn tất",f"Đã hoàn thành các tác vụ đăng bài.");self.run_button.setEnabled(True)
    def open_post_in_browser(self,item,column):
        post_url=item.data(0,QtCore.Qt.ItemDataRole.UserRole)
        if post_url and"facebook.com"in post_url:webbrowser.open_new_tab(post_url);self.update_log_signal.emit(f"💡 Đã mở bài viết trên trình duyệt.")
        else:self.update_log_signal.emit(f"🔴 Không có link hợp lệ cho mục này.")
    @QtCore.pyqtSlot(dict)
    def add_scraped_post_to_tree(self,post_data):
        tree_item=QTreeWidgetItem(self.scrape_result_tree);tree_item.setText(0,post_data.get("content","N/A"));tree_item.setText(1,post_data.get("timestamp","N/A"));tree_item.setText(2,post_data.get("reactions","N/A"));tree_item.setText(3,post_data.get("comments","N/A"));tree_item.setData(0,QtCore.Qt.ItemDataRole.UserRole,post_data.get("url"))
    def on_template_selected(self,text):
        if self.msg_template_combo.currentIndex()>0:self.msg_content_input.setText(text)
    def on_scraping_finished(self,message):self.scrape_button.setEnabled(True);QMessageBox.information(self,"Hoàn tất quét",message)
    def on_messaging_finished(self,message):self.msg_start_button.setEnabled(True);QMessageBox.information(self,"Hoàn tất gửi",message)
    def on_warmup_finished(self,message):self.warmup_start_button.setEnabled(True);QMessageBox.information(self,"Hoàn tất nuôi",message)
    def start_scraping(self):
        profile_name=self.profile_input.currentText();
        if not profile_name:QMessageBox.warning(self,"Thiếu Profile","Vui lòng chọn một profile để dùng cho việc quét.");return
        target_url=self.scrape_profile_url_input.text()
        if not target_url:QMessageBox.warning(self,"Thiếu Link","Vui lòng nhập link profile Facebook cần quét.");return
        scroll_count=self.scroll_count_input.value();scrape_tagged_only=self.scrape_tagged_only_checkbox.isChecked()
        self.scrape_button.setEnabled(False);self.scrape_result_tree.clear();self.log_list_widget.clear()
        email=self.email_input.text();password=self.password_input.text();proxy_str=self.proxy_input.text()
        threading.Thread(target=self.run_scraper,args=(profile_name,email,password,proxy_str,target_url,scroll_count,scrape_tagged_only)).start()
    def start_messaging(self):
        profile_name=self.profile_input.currentText()
        if not profile_name:QMessageBox.warning(self,"Thiếu Profile","Vui lòng chọn một profile để dùng gửi tin nhắn.");return
        target_url=self.msg_target_url_input.text()
        if not target_url or"messenger.com/t/"not in target_url:QMessageBox.warning(self,"Link không hợp lệ","Vui lòng nhập link Messenger hợp lệ của người nhận.");return
        message=self.msg_content_input.toPlainText()
        if not message:QMessageBox.warning(self,"Thiếu nội dung","Vui lòng nhập nội dung tin nhắn.");return
        count=self.msg_count_input.value();delay=self.msg_delay_input.value()
        self.msg_start_button.setEnabled(False);self.log_list_widget.clear()
        email=self.email_input.text();password=self.password_input.text();proxy_str=self.proxy_input.text()
        threading.Thread(target=self.run_messenger,args=(profile_name,email,password,proxy_str,target_url,message,count,delay)).start()
    def start_warmup(self):
        profile_name=self.profile_input.currentText()
        if not profile_name:QMessageBox.warning(self,"Thiếu Profile","Vui lòng chọn một profile để nuôi.");return
        scroll_duration=self.warmup_scroll_duration_input.value()
        like_count=self.warmup_like_count_input.value()
        self.warmup_start_button.setEnabled(False);self.log_list_widget.clear()
        email=self.email_input.text();password=self.password_input.text();proxy_str=self.proxy_input.text()
        threading.Thread(target=self.run_warmup,args=(profile_name,email,password,proxy_str,scroll_duration,like_count)).start()
    
    # === NEW FEATURE: RUN_THREADS ĐƯỢC CẬP NHẬT ĐỂ XỬ LÝ ĐĂNG HÀNG LOẠT ===
    def run_threads(self):
        profile_name=self.profile_input.currentText(); email=self.email_input.text(); password=self.password_input.text(); proxy_str=self.proxy_input.text()
        status_template =self.status_input.toPlainText() # Template gốc
        image_path = self.image_path_input.text().strip()
        delay=self.delay_input.value()
        headless=self.headless_checkbox.isChecked()
        
        # Logic đăng lên tường
        if self.post_on_timeline_radio.isChecked():
            num_tabs = self.tab_count.value()
            self.update_log_signal.emit(f"💡 Bắt đầu đăng lên tường nhà với {num_tabs} luồng...")
            for i in range(num_tabs):
                final_status = self.process_spintax(status_template)
                profile_name_for_tab=f"{profile_name}_tab{i+1}" if num_tabs > 1 else profile_name
                threading.Thread(target=self.run_browser,args=(profile_name_for_tab,email,password,proxy_str,final_status,"",image_path,delay,headless,i+1)).start()
        
        # Logic đăng vào nhóm (hàng loạt hoặc đơn lẻ)
        elif self.post_in_group_radio.isChecked():
            group_links_text = self.group_input.toPlainText()
            group_urls = [url.strip() for url in group_links_text.splitlines() if url.strip()]

            if not group_urls:
                QMessageBox.warning(self, "Thiếu link nhóm", "Vui lòng nhập ít nhất một link nhóm.")
                self.run_button.setEnabled(True)
                return

            self.update_log_signal.emit(f"💡 Bắt đầu đăng hàng loạt vào {len(group_urls)} nhóm...")
            for index, group_url in enumerate(group_urls):
                self.update_log_signal.emit(f"--- Chuẩn bị cho nhóm {index + 1}/{len(group_urls)}: {group_url} ---")
                final_status = self.process_spintax(status_template)
                profile_name_for_tab = f"{profile_name}_group{index+1}"
                
                # Chạy mỗi nhóm trong một luồng riêng biệt, tuần tự
                task_thread = threading.Thread(target=self.run_browser,args=(profile_name_for_tab,email,password,proxy_str,final_status,group_url,image_path,delay,headless,index+1))
                task_thread.start()
                task_thread.join() # Chờ cho luồng này hoàn thành trước khi bắt đầu luồng tiếp theo

                if index < len(group_urls) - 1:
                    self.update_log_signal.emit(f"💡 Đang nghỉ {delay} giây trước khi đăng vào nhóm tiếp theo...")
                    sleep(delay)
        
        # Thông báo hoàn thành sẽ được gọi ở cuối luồng chính
        self.post_finished_signal.emit()

    def _create_driver(self,profile_name,proxy_str,action_name,headless=False):
        options=Options();options.add_argument('--no-sandbox');options.add_argument('--disable-dev-shm-usage');options.add_argument('--disable-gpu');options.add_argument("--log-level=3");options.add_argument("--disable-infobars");options.add_argument("--disable-extensions")
        service=Service()
        if platform.system()=="Windows":from subprocess import CREATE_NO_WINDOW;service.creationflags=CREATE_NO_WINDOW
        if proxy_str:
            options.add_argument('--lang=en-US')
            try:
                user_pass,ip_port=proxy_str.split('@');user,pas=user_pass.split(':');host,port=ip_port.split(':')
                if not os.path.exists("proxy_extensions"): os.makedirs("proxy_extensions")
                proxy_zip_path=os.path.join("proxy_extensions",f"proxy_auth_{profile_name}_{action_name}.zip")
                if not os.path.exists(proxy_zip_path):create_proxy_extension(host,port,user,pas,proxy_zip_path)
                options.add_extension(proxy_zip_path)
            except:
                try:host,port=proxy_str.split(':');options.add_argument(f'--proxy-server={host}:{port}')
                except:raise Exception("Định dạng proxy sai.")
        else:options.add_argument('--lang=vi-VN')
        profile_path=os.path.join(os.getcwd(),"chrome_profiles",profile_name);options.add_argument(f"--user-data-dir={profile_path}");options.add_argument("--disable-blink-features=AutomationControlled");options.add_experimental_option("excludeSwitches",["enable-automation"]);options.add_experimental_option("useAutomationExtension",False);options.add_argument("--disable-notifications");options.add_argument("--window-size=1280,720")
        if headless:options.add_argument("--headless=new")
        driver=webdriver.Chrome(service=service,options=options);driver.set_page_load_timeout(60)
        return driver
        
    def _check_for_checkpoint(self,driver):
        if"checkpoint"in driver.current_url:raise CheckpointException("Phát hiện checkpoint!")
    def _login_facebook(self,driver,email,password,action_name):
        driver.get("https://www.facebook.com/");self._check_for_checkpoint(driver)
        wait=WebDriverWait(driver,7)
        try:
            wait.until(EC.presence_of_element_located((By.XPATH,"//a[@aria-label='Trang chủ' or @aria-label='Home']")))
            self.update_log_signal.emit(f"✅ ({action_name}): Đã đăng nhập sẵn bằng profile.")
        except TimeoutException:
            try:
                continue_as_button=wait.until(EC.element_to_be_clickable((By.XPATH,"//button[contains(., 'Continue as') or contains(., 'Tiếp tục')]")))
                self.update_log_signal.emit(f"💡 ({action_name}): Thấy nút 'Tiếp tục'. Đang bấm...");continue_as_button.click()
                WebDriverWait(driver,15).until(EC.presence_of_element_located((By.XPATH,"//a[@aria-label='Trang chủ' or @aria-label='Home']")))
                self.update_log_signal.emit(f"✅ ({action_name}): Đăng nhập bằng cách 'Tiếp tục'.")
            except TimeoutException:
                self.update_log_signal.emit(f"💡 ({action_name}): Profile chưa đăng nhập. Tiến hành đăng nhập...")
                if email and password:
                    try:
                        email_field=wait.until(EC.presence_of_element_located((By.ID,"email")));email_field.clear();email_field.send_keys(email)
                        pass_field=driver.find_element(By.ID,"pass");pass_field.clear();pass_field.send_keys(password)
                        driver.find_element(By.NAME,"login").click()
                        WebDriverWait(driver,15).until(EC.presence_of_element_located((By.XPATH,"//a[@aria-label='Trang chủ' or @aria-label='Home']")))
                        self.update_log_signal.emit(f"✅ ({action_name}): Đăng nhập lần đầu & lưu profile thành công!")
                    except TimeoutException:raise CheckpointException("Đăng nhập thất bại. Kiểm tra TK/MK hoặc dính checkpoint.")
                else:raise Exception(f"Profile chưa đăng nhập, vui lòng tạo profile với email và mật khẩu.")
        self._check_for_checkpoint(driver)

    def run_browser(self, profile_name, email, password, proxy_str, status_text, group_url, image_path, delay, headless, tab_id):
        # ... (Hàm này không thay đổi so với phiên bản trước) ...
        driver = None
        try:
            driver = self._create_driver(profile_name, proxy_str, f"Tab_{tab_id}", headless)
            with self.thread_lock: self.running_drivers.append(driver)
            
            self._login_facebook(driver, email, password, f"Tab {tab_id}")
            wait = WebDriverWait(driver, 20)
    
            if group_url:
                self.update_log_signal.emit(f"💡 Tab {tab_id}: Vào nhóm '{group_url}'...")
                driver.get(group_url)
            else:
                self.update_log_signal.emit(f"💡 Tab {tab_id}: Chuẩn bị đăng lên Tường nhà...")
                driver.get("https://www.facebook.com/")
                
            self._check_for_checkpoint(driver)
            sleep(random.uniform(3, 5))
            
            try:
                close_popup = WebDriverWait(driver, 3).until(EC.element_to_be_clickable((By.XPATH, "//div[@aria-label='Đóng' or @aria-label='Close']")))
                close_popup.click()
                sleep(1)
            except: pass

            self.update_log_signal.emit(f"💡 Tab {tab_id}: Tìm ô kích hoạt đăng bài...")
            post_box_trigger_xpath = "//div[contains(@role, 'button') and .//span[contains(text(), 'bạn đang nghĩ gì') or contains(text(), 'What') or contains(text(), 'Bạn viết gì đi')]] | //span[contains(text(),'Bạn viết gì đi')]"
            post_box_trigger = wait.until(EC.element_to_be_clickable((By.XPATH, post_box_trigger_xpath)))
            driver.execute_script("arguments[0].click();", post_box_trigger)
            self.update_log_signal.emit(f"✅ Tab {tab_id}: Đã mở hộp thoại đăng bài.")
            sleep(random.uniform(2, 4))
            
            if image_path:
                try:
                    self.update_log_signal.emit(f"💡 Tab {tab_id}: Đang tìm thẻ input[type=file] bị ẩn...")
                    file_input_xpath = "//div[@role='dialog']//input[@type='file']"
                    file_input = wait.until(EC.presence_of_element_located((By.XPATH, file_input_xpath)))
                    
                    self.update_log_signal.emit(f"🖼️ Tab {tab_id}: Đang tải lên ảnh: {os.path.basename(image_path)}...")
                    file_input.send_keys(image_path)
                    
                    wait.until(EC.presence_of_element_located((By.XPATH, "//div[@role='dialog']//img[contains(@src, 'blob:')] | //div[@role='dialog']//div[@aria-label='Xóa'] | //div[@role='dialog']//div[contains(@aria-label, 'Remove')]")))
                    self.update_log_signal.emit(f"✅ Tab {tab_id}: Đã tải ảnh lên thành công.")
                    sleep(2)
                except Exception as e:
                    self.update_log_signal.emit(f"❌ Tab {tab_id}: Không thể tải ảnh lên. Lỗi: {str(e).splitlines()[0]}")
            
            if status_text:
                self.update_log_signal.emit(f"💡 Tab {tab_id}: Tìm ô nhập chữ...")
                post_input_area_xpath = "//div[@role='dialog']//div[@contenteditable='true'] | //div[@role='dialog']//textarea"
                post_input_area = wait.until(EC.presence_of_element_located((By.XPATH, post_input_area_xpath)))
                driver.execute_script("arguments[0].click();", post_input_area)
                sleep(1)
                post_input_area.send_keys(status_text)
                self.update_log_signal.emit(f"💡 Tab {tab_id}: Đã nhập xong nội dung.")
                sleep(1)

            post_btn_xpath = "//div[@role='dialog']//div[(@aria-label='Đăng' or @aria-label='Post') and @role='button' and not(@aria-disabled='true')]"
            post_btn = wait.until(EC.element_to_be_clickable((By.XPATH, post_btn_xpath)))
            driver.execute_script("arguments[0].click();", post_btn)
            self.update_log_signal.emit(f"🚀 Tab {tab_id}: Đã click Đăng!")

            wait_time_for_post = 5 # Chờ 5 giây để hộp thoại biến mất
            self.update_log_signal.emit(f"💡 Tab {tab_id}: Chờ {wait_time_for_post} giây để xác nhận bài đăng...")
            WebDriverWait(driver, wait_time_for_post).until_not(EC.presence_of_element_located((By.XPATH, "//div[@role='dialog']")))

            screenshot_path = f"post_success_{datetime.now().strftime('%Y%m%d_%H%M%S')}_tab{tab_id}.png"
            driver.save_screenshot(screenshot_path)
            with self.thread_lock: self.post_success_count += 1
            self.update_log_signal.emit(f"✅ Tab {tab_id}: Đăng bài thành công! → {screenshot_path}")

        except CheckpointException:
            self.checkpoint_detected_signal.emit(profile_name)
        except (Exception, WebDriverException) as e:
            error_message = str(e).split('\n')[0]
            self.update_log_signal.emit(f"❌ Tab {tab_id} lỗi: {error_message}")
            if driver:
                error_screenshot_path = f"post_error_{datetime.now().strftime('%Y%m%d_%H%M%S')}_tab{tab_id}.png"
                driver.save_screenshot(error_screenshot_path)
                self.update_log_signal.emit(f"   → Ảnh lỗi: {error_screenshot_path}")
        finally:
            if driver: driver.quit()
            with self.thread_lock:
                if driver in self.running_drivers: self.running_drivers.remove(driver)

    def run_scraper(self,profile_name,email,password,proxy_str,target_url,scroll_count,scrape_tagged_only):
        # ... (Không thay đổi) ...
        driver=None
        try:
            driver=self._create_driver(profile_name,proxy_str,"Quét",self.headless_checkbox.isChecked());
            with self.thread_lock:self.running_drivers.append(driver)
            self._login_facebook(driver,email,password,"Quét")
            self.update_log_signal.emit(f"💡 Truy cập profile: {target_url}");driver.get(target_url);self._check_for_checkpoint(driver);sleep(3)
            if scrape_tagged_only:
                self.update_log_signal.emit("💡 Đang lọc các bài viết được gắn thẻ...")
                try:
                    filter_button=WebDriverWait(driver,10).until(EC.element_to_be_clickable((By.XPATH,"//span[text()='Bộ lọc' or text()='Filters']")));filter_button.click();sleep(1)
                    tagged_option=WebDriverWait(driver,10).until(EC.element_to_be_clickable((By.XPATH,"//div[@role='menuitem']//span[contains(text(),'bài viết bạn được gắn thẻ') or contains(text(),'Posts you')]")));tagged_option.click();self.update_log_signal.emit("✅ Đã lọc bài viết.");sleep(3)
                except:self.update_log_signal.emit(f"🔴 Không tìm thấy bộ lọc 'bài viết được gắn thẻ'.")
            self.update_log_signal.emit(f"💡 Bắt đầu cuộn trang {scroll_count} lần...");last_height=driver.execute_script("return document.body.scrollHeight")
            for i in range(scroll_count):
                driver.execute_script("window.scrollTo(0, document.body.scrollHeight);");self.update_log_signal.emit(f"   - Đã cuộn lần {i+1}/{scroll_count}");sleep(4)
                new_height=driver.execute_script("return document.body.scrollHeight")
                if new_height==last_height:self.update_log_signal.emit("💡 Đã cuộn đến cuối trang.");break
                last_height=new_height
            self.update_log_signal.emit("💡 Đã cuộn xong, bắt đầu trích xuất...");posts=driver.find_elements(By.XPATH,"//div[@data-ad-comet-preview='message' or @data-ad-preview='null']/ancestor::div[@role='article']")
            if not posts:posts=driver.find_elements(By.XPATH,"//div[@role='article']")
            if not posts:raise Exception("Không tìm thấy bài viết nào.")
            self.update_log_signal.emit(f"✅ Tìm thấy ~{len(posts)} bài viết. Bắt đầu xử lý...")
            post_count=0
            for post in posts:
                content=timestamp=reactions=comments=post_url="N/A"
                try:content=post.find_element(By.XPATH,".//div[@data-ad-preview='message' or @data-ad-preview='textdata' or contains(@style, 'text-align: start;')]").text
                except:content="[Chỉ có ảnh/video hoặc nội dung chia sẻ]"
                try:
                    timestamp_element=post.find_element(By.XPATH,".//span/a[contains(@href, '/posts/') or contains(@href, 'photo') or contains(@href, 'videos')]");post_url=timestamp_element.get_attribute('href');timestamp=timestamp_element.text
                except:pass
                try:reactions=post.find_element(By.XPATH,".//span[@aria-label and (contains(., 'like') or contains(., 'Thích'))]").get_attribute('aria-label')
                except:pass
                try:
                    comment_share_text=post.find_elements(By.XPATH,".//div[@role='toolbar']//span[contains(text(),'bình luận') or contains(text(),'comment')]")
                    if comment_share_text:comments=comment_share_text[0].text
                except:pass
                post_data={"content":content[:200]+'...'if len(content)>200 else content,"timestamp":timestamp,"reactions":reactions,"comments":comments,"url":post_url}
                self.post_scraped_signal.emit(post_data);post_count+=1
            self.scrape_finished_signal.emit(f"Hoàn tất! Đã xử lý {post_count} bài viết.")
        except CheckpointException:self.checkpoint_detected_signal.emit(profile_name)
        except(Exception,WebDriverException)as e:
            error_message=str(e).split('\n')[0];self.update_log_signal.emit(f"❌ Lỗi khi đang quét: {error_message}");self.scrape_finished_signal.emit("Quét thất bại.")
        finally:
            if driver:driver.quit()
            with self.thread_lock:
                if driver in self.running_drivers:self.running_drivers.remove(driver)
    def run_messenger(self,profile_name,email,password,proxy_str,target_url,message,count,delay):
        # ... (Không thay đổi) ...
        driver=None
        try:
            driver=self._create_driver(profile_name,proxy_str,"Nhắn tin",self.headless_checkbox.isChecked())
            with self.thread_lock:self.running_drivers.append(driver)
            self._login_facebook(driver,email,password,"Nhắn tin")
            self.update_log_signal.emit(f"💡 Truy cập link Messenger: {target_url}");driver.get(target_url);self._check_for_checkpoint(driver)
            wait=WebDriverWait(driver,20)
            message_box_xpath="//div[@aria-label='Tin nhắn' or @aria-label='Message']";message_box=wait.until(EC.presence_of_element_located((By.XPATH,message_box_xpath)))
            self.update_log_signal.emit("✅ Tìm thấy ô nhập tin nhắn. Bắt đầu gửi...")
            for i in range(count):
                self.update_log_signal.emit(f"   - Đang gửi tin {i+1}/{count}...");message_box.send_keys(message)
                send_button=driver.find_element(By.XPATH,"//div[@aria-label='Nhấn Enter để gửi' or @aria-label='Press Enter to send']");send_button.click();self.update_log_signal.emit(f"   - ✅ Đã gửi lần {i+1}")
                if i<count-1:self.update_log_signal.emit(f"   - ... chờ {delay} giây...");sleep(delay)
            self.messenger_finished_signal.emit(f"Hoàn tất! Đã gửi {count} tin nhắn.")
        except CheckpointException:self.checkpoint_detected_signal.emit(profile_name)
        except(Exception,WebDriverException)as e:
            error_message=str(e).split('\n')[0];self.update_log_signal.emit(f"❌ Lỗi khi đang gửi tin nhắn: {error_message}");self.messenger_finished_signal.emit("Gửi tin nhắn thất bại.")
        finally:
            if driver:driver.quit()
            with self.thread_lock:
                if driver in self.running_drivers:self.running_drivers.remove(driver)
    def run_warmup(self,profile_name,email,password,proxy_str,scroll_duration_min,like_count):
        # ... (Không thay đổi) ...
        self.update_log_signal.emit(f"💡 Bắt đầu luồng nuôi profile '{profile_name}'...")
        driver=None
        try:
            driver=self._create_driver(profile_name,proxy_str,"Nuôi",self.headless_checkbox.isChecked())
            with self.thread_lock:self.running_drivers.append(driver)
            self.warmup_status_update_signal.emit({"status":"Đang đăng nhập...","progress":"N/A","time":"..."})
            self._login_facebook(driver,email,password,"Nuôi")
            if scroll_duration_min>0:
                self._action_scroll_feed(driver,scroll_duration_min)
            if like_count>0:
                self._action_like_posts(driver,like_count)
            self.warmup_finished_signal.emit(f"✅ Hoàn tất nuôi profile '{profile_name}'.")
        except CheckpointException:self.checkpoint_detected_signal.emit(profile_name)
        except(Exception,WebDriverException)as e:
            error_message=str(e).split('\n')[0];self.update_log_signal.emit(f"❌ Lỗi khi đang nuôi profile: {error_message}");self.warmup_finished_signal.emit("Nuôi profile thất bại.")
        finally:
            if driver:driver.quit()
            with self.thread_lock:
                if driver in self.running_drivers:self.running_drivers.remove(driver)
            self.warmup_status_update_signal.emit({"status":"Đã dừng","progress":"N/A","time":"00:00"})
    def _action_scroll_feed(self,driver,duration_min):
        # ... (Không thay đổi) ...
        self.update_log_signal.emit(f"💡 Bắt đầu lướt News Feed trong {duration_min} phút...")
        end_time=datetime.now()+timedelta(minutes=duration_min)
        while datetime.now()<end_time:
            remaining_time=end_time-datetime.now()
            self.warmup_status_update_signal.emit({"status":"Đang lướt News Feed...","progress":"N/A","time":f"{int(remaining_time.total_seconds()//60):02}:{int(remaining_time.total_seconds()%60):02}"})
            driver.execute_script("window.scrollBy(0, window.innerHeight);");sleep(random.uniform(3,7))
            self._check_for_checkpoint(driver)
        self.update_log_signal.emit("✅ Đã lướt News Feed xong.")
    def _action_like_posts(self,driver,like_count):
        # ... (Không thay đổi) ...
        self.update_log_signal.emit(f"💡 Bắt đầu Thích {like_count} bài viết...");driver.get("https://www.facebook.com/");sleep(3);self._check_for_checkpoint(driver)
        liked_posts=0;scroll_attempts=0
        while liked_posts<like_count and scroll_attempts<20:
            self.warmup_status_update_signal.emit({"status":"Đang tìm & thích bài viết...","progress":f"{liked_posts}/{like_count}","time":"N/A"})
            like_buttons=driver.find_elements(By.XPATH,"//div[@aria-label='Thích' or @aria-label='Like']")
            random.shuffle(like_buttons)
            for button in like_buttons:
                if liked_posts>=like_count:break
                try:
                    driver.execute_script("arguments[0].scrollIntoView({block: 'center'});",button);sleep(1);button.click()
                    liked_posts+=1;self.update_log_signal.emit(f"   - ✅ Đã Thích bài viết thứ {liked_posts}/{like_count}");sleep(random.uniform(5,10))
                except:continue
            driver.execute_script("window.scrollBy(0, window.innerHeight * 2);");sleep(3);self._check_for_checkpoint(driver);scroll_attempts+=1
        self.update_log_signal.emit(f"✅ Đã Thích xong {liked_posts} bài viết.")

if __name__=='__main__':
    if not os.path.exists("chrome_profiles"):os.makedirs("chrome_profiles")
    if not os.path.exists("proxy_extensions"):os.makedirs("proxy_extensions")
    app=QApplication(sys.argv)
    tool=FacebookTool()
    tool.show()
    sys.exit(app.exec())
