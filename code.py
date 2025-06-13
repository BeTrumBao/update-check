import sys
import subprocess
import re
import warnings
import webbrowser
from PyQt6.QtWidgets import (
    QApplication, QWidget, QVBoxLayout, QLabel, QPushButton,
    QFileDialog, QComboBox, QTextEdit, QHBoxLayout, QProgressBar, QDialog,
    QTableWidget, QTableWidgetItem, QHeaderView, QGroupBox, QFormLayout,
    QDialogButtonBox, QTextBrowser, QMessageBox, QMenuBar
)
from PyQt6.QtCore import QThread, pyqtSignal, Qt, QTimer
from PyQt6.QtGui import QTextCursor, QAction

warnings.filterwarnings("ignore", category=DeprecationWarning)
import serial.tools.list_ports

# --- CỬA SỔ HƯỚNG DẪN SONG NGỮ ---
class InstructionsDialog(QDialog):
    # ... (Nội dung không đổi)
    def __init__(self, parent=None):
        super().__init__(parent)
        self.setWindowTitle("Welcome & Instructions / Chào mừng & Hướng dẫn")
        self.setMinimumSize(650, 500)
        layout = QVBoxLayout(self)
        text_browser = QTextBrowser()
        text_browser.setOpenExternalLinks(True)
        bilingual_content = """<div style='font-family: Segoe UI, sans-serif; font-size: 14px;'>
            <h2>Welcome to ESP Utility!</h2>
            <p>To ensure a successful download, please check the following steps:</p>
            <ul>
                <li><b>Install Driver:</b> If you have connection issues, use the 'Tools' -> 'Install Drivers' menu to open the official driver download pages.</li>
                <li><b>Connect Board & Select Port:</b> Plug in your ESP board and select the correct COM Port.</li>
                <li><b>Select Board Type:</b> Correctly select ESP32 or ESP8266 to get the appropriate suggested flash address.</li>
                <li><b>Download Mode:</b> Most boards enter download mode automatically. If not, do it manually:
                    <br/>- Press and hold <b>BOOT</b>, press and release <b>RESET</b>, then release <b>BOOT</b>.</li>
            </ul><hr>
            <h2>Chào mừng bạn đến với Tiện Ích ESP!</h2>
            <p>Để đảm bảo quá trình download thành công, vui lòng kiểm tra các bước sau:</p>
            <ul>
                <li><b>Cài đặt Driver:</b> Nếu gặp vấn đề kết nối, hãy dùng menu 'Công cụ' -> 'Cài đặt Drivers' để mở trang tải driver chính thức.</li>
                <li><b>Kết nối Board & Chọn Cổng:</b> Cắm board ESP và chọn đúng cổng COM.</li>
                <li><b>Chọn đúng loại Board:</b> Chọn chính xác ESP32 hoặc ESP8266 để có địa chỉ nạp gợi ý phù hợp.</li>
                <li><b>Chế độ Download:</b> Hầu hết các board sẽ tự động vào chế độ download. Nếu không, hãy làm thủ công:
                    <br/>- Nhấn và giữ nút <b>BOOT</b>, nhấn rồi thả nút <b>RESET</b>, sau đó thả nút <b>BOOT</b>.</li>
            </ul></div>"""
        text_browser.setHtml(bilingual_content)
        layout.addWidget(text_browser)
        button_box = QDialogButtonBox(QDialogButtonBox.StandardButton.Ok)
        button_box.accepted.connect(self.accept)
        layout.addWidget(button_box)

# --- CỬA SỔ HỖ TRỢ CÀI DRIVER ---
class DriverHelperDialog(QDialog):
    # ... (Nội dung không đổi)
    def __init__(self, translations, language, parent=None):
        super().__init__(parent)
        self.tr = translations[language]
        self.setWindowTitle(self.tr["driver_title"])
        self.setMinimumWidth(500)
        layout = QVBoxLayout(self); layout.addWidget(QLabel(self.tr["driver_intro"]))
        cp_group = QGroupBox("CP210x (for most newer ESP32 boards)"); cp_layout = QHBoxLayout(cp_group)
        cp_layout.addWidget(QLabel(self.tr["driver_cp210x_desc"])); cp_layout.addStretch()
        btn_cp = QPushButton(self.tr["driver_download_button"]); btn_cp.clicked.connect(self.download_cp210x)
        cp_layout.addWidget(btn_cp); layout.addWidget(cp_group)
        ch_group = QGroupBox("CH340/CH341 (for many ESP8266 & older boards)"); ch_layout = QHBoxLayout(ch_group)
        ch_layout.addWidget(QLabel(self.tr["driver_ch340_desc"])); ch_layout.addStretch()
        btn_ch = QPushButton(self.tr["driver_download_button"]); btn_ch.clicked.connect(self.download_ch340)
        ch_layout.addWidget(btn_ch); layout.addWidget(ch_group)
        button_box = QDialogButtonBox(QDialogButtonBox.StandardButton.Close); button_box.rejected.connect(self.reject)
        layout.addWidget(button_box)
    def download_cp210x(self):
        url = "https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers"; webbrowser.open(url)
        QMessageBox.information(self, self.tr["driver_popup_title"], self.tr["driver_popup_text"].format(driver="CP210x"))
    def download_ch340(self):
        url = "https://learn.sparkfun.com/tutorials/how-to-install-ch340-drivers/all"; webbrowser.open(url)
        QMessageBox.information(self, self.tr["driver_popup_title"], self.tr["driver_popup_text"].format(driver="CH340"))

# --- CÁC CLASS THREAD ---
class FlashThread(QThread):
    # ... (Nội dung không đổi)
    output_signal = pyqtSignal(str); progress_signal = pyqtSignal(int); finished_signal = pyqtSignal(bool)
    def __init__(self, port, baudrate, flash_files): super().__init__(); self.port, self.baudrate, self.flash_files = port, baudrate, flash_files
    def run(self):
        cmd = [sys.executable, "-m", "esptool", "--port", self.port, "--baud", str(self.baudrate), "write_flash", "-z"]
        for address, path in self.flash_files: cmd.extend([address, path])
        self.output_signal.emit(f"Running command:\n{' '.join(cmd)}\n\n")
        process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, universal_newlines=True, bufsize=1, encoding='utf-8')
        progress_pattern = re.compile(r'\((\d+)%\)');
        for line in iter(process.stdout.readline, ''):
            self.output_signal.emit(line)
            if (match := progress_pattern.search(line)): self.progress_signal.emit(int(match.group(1)))
        process.stdout.close(); process.wait(); self.finished_signal.emit(process.returncode == 0)

class EraseThread(QThread):
    # ... (Nội dung không đổi)
    output_signal = pyqtSignal(str); finished_signal = pyqtSignal(bool)
    def __init__(self, port): super().__init__(); self.port = port
    def run(self):
        cmd = [sys.executable, "-m", "esptool", "--port", self.port, "erase_flash"]
        self.output_signal.emit(f"Running command:\n{' '.join(cmd)}\n\n")
        process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, universal_newlines=True, bufsize=1, encoding='utf-8')
        for line in iter(process.stdout.readline, ''): self.output_signal.emit(line)
        process.stdout.close(); process.wait(); self.finished_signal.emit(process.returncode == 0)

# --- THREAD ĐỂ KHỞI ĐỘNG LẠI (ĐÃ SỬA LẠI CHO ĐÚNG) ---
class ResetThread(QThread):
    output_signal = pyqtSignal(str)
    finished_signal = pyqtSignal(bool)
    def __init__(self, port):
        super().__init__()
        self.port = port
    def run(self):
        # THAY ĐỔI DUY NHẤT Ở ĐÂY: từ "reset" thành "run"
        cmd = [sys.executable, "-m", "esptool", "--port", self.port, "run"]
        
        self.output_signal.emit(f"Running command:\n{' '.join(cmd)}\n\n")
        process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, universal_newlines=True, bufsize=1, encoding='utf-8')
        for line in iter(process.stdout.readline, ''):
            self.output_signal.emit(line)
        process.stdout.close()
        process.wait()
        self.finished_signal.emit(process.returncode == 0)

# --- MAINWINDOW ---
class MainWindow(QWidget):
    def __init__(self):
        super().__init__()
        self.language = "en"
        self.setup_translations()
        self.init_ui()
        self.update_ui_texts()
        self.timer = QTimer(self); self.timer.timeout.connect(self.auto_refresh_com_ports); self.timer.start(3000)
        self.auto_refresh_com_ports()

    def setup_translations(self):
        self.translations = {
            "vi": {
                "window_title": "Tiện Ích ESP - By Bao Neyako", "lang_label": "Ngôn ngữ:",
                "menu_tools": "&Công cụ", "action_install_drivers": "&Cài đặt Drivers...",
                "instructions_button": "Hướng dẫn 💡",
                "driver_title": "Hỗ trợ Cài đặt Driver", "driver_intro": "Hầu hết các board ESP sử dụng một trong hai driver dưới đây.", "driver_cp210x_desc": "Driver cho các board Silicon Labs (CP210x).", "driver_ch340_desc": "Driver cho các board WCH (CH340/CH341).", "driver_download_button": "Mở trang Download", "driver_popup_title": "Đang mở Trình duyệt", "driver_popup_text": "Trình duyệt của bạn đã được mở tới trang download driver {driver}.",
                "group_connection": "Kết nối", "board_type_label": "Loại Board:", "com_port_label": "Cổng COM:", "baud_rate_label": "Tốc độ Baud:",
                "group_files": "Các file Firmware",
                "address_tooltip": ( "<h3>Địa chỉ Flash là gì?</h3><p>Hãy tưởng tượng bộ nhớ flash của ESP là một con đường rất dài. <b>Địa chỉ</b> chính là 'số nhà' để báo cho trình nạp biết chính xác nơi để ghi dữ liệu.</p><p>Mỗi file chương trình (binary) có một chức năng riêng và phải được đặt đúng 'nhà' để không ghi đè lên nhau. Các 'nhà' quan trọng bao gồm:</p><ul><li><code>Bootloader</code>: Chương trình khởi động đầu tiên.</li><li><code>Partition Table</code>: 'Bản đồ' chia các khu vực trong bộ nhớ.</li><li><code>Application</code>: Chương trình chính của bạn.</li></ul><h4>Gợi ý phổ biến:</h4><b>ESP32:</b><br/>- <code>0x1000</code>: bootloader.bin<br/>- <code>0x8000</code>: partitions.bin<br/>- <code>0x10000</code>: application.bin<br/><b>ESP8266:</b><br/>- <code>0x00000</code>: cho file firmware đã được gộp sẵn.<p>Ứng dụng này sẽ gợi ý địa chỉ mặc định an toàn cho bạn dựa trên loại board đã chọn.</p>"),
                "add_button": "Thêm File ➕", "remove_button": "Xóa ➖", "address_header": "Địa chỉ", "path_header": "Đường dẫn",
                "group_actions": "Hành động", "download_button": "Download ⚡️", "erase_button": "Xóa Flash 🗑️", "restart_button": "Khởi động lại 🔄",
                "log_label": "Nhật ký:", "no_com_found": "Không có cổng COM", "new_com_detected": "Danh sách cổng COM đã được cập nhật!\n", "browse_title": "Chọn file Firmware",
                "reminder_title": "Thông báo", "error_title": "Lỗi", "confirm_title": "Xác nhận",
                "no_valid_com": "Vui lòng chọn cổng COM hợp lệ.\n", "no_files_to_download": "Vui lòng thêm ít nhất một file để download.\n", "invalid_address": "Địa chỉ không hợp lệ tại hàng {row}: '{address}'.\n",
                "download_confirm": "Xác nhận download {count} file tới cổng {port}?", "download_cancelled": "Đã hủy quá trình download.\n", "download_start": "Bắt đầu download...\n", "download_success": "\nDownload thành công!", "download_fail": "\nDownload thất bại. Vui lòng thử lại.\n",
                "erase_confirm": "CẢNH BÁO: Xóa toàn bộ dữ liệu trên cổng {port}?", "erase_cancelled": "Đã hủy quá trình xóa.\n", "erase_start": "Bắt đầu xóa flash...\n", "erase_success": "\nXóa flash thành công!", "erase_fail": "\nXóa flash thất bại.\n",
                "restart_confirm": "Bạn có chắc muốn khởi động lại mạch tại cổng {port}?", "restart_cancelled": "Đã hủy khởi động lại.\n", "restart_start": "Đang gửi tín hiệu khởi động lại...\n", "restart_success": "\nKhởi động lại thành công!", "restart_fail": "\nKhởi động lại thất bại."
            },
            "en": {
                "window_title": "ESP Utility - By Bao Neyako", "lang_label": "Language:",
                "menu_tools": "&Tools", "action_install_drivers": "&Install Drivers...",
                "instructions_button": "Instructions 💡",
                "driver_title": "Driver Installation Helper", "driver_intro": "Most ESP boards use one of the two drivers below.", "driver_cp210x_desc": "Driver for Silicon Labs (CP210x) boards.", "driver_ch340_desc": "Driver for WCH (CH340/CH341) boards.", "driver_download_button": "Open Download Page", "driver_popup_title": "Opening Browser", "driver_popup_text": "Your browser has been opened to the {driver} driver download page.\n\nPlease download and run the installer.",
                "group_connection": "Connection", "board_type_label": "Board Type:", "com_port_label": "COM Port:", "baud_rate_label": "Baud Rate:",
                "group_files": "Firmware Files",
                "address_tooltip": ("<h3>What is a Flash Address?</h3><p>Imagine the ESP's flash memory is a very long street. The <b>Address</b> is the 'house number' that tells the flasher tool exactly where to write data.</p><p>Each program file (binary) has a specific function and must be placed in the correct 'house' to avoid overwriting others. Important 'houses' include:</p><ul><li><code>Bootloader</code>: The very first program that runs.</li><li><code>Partition Table</code>: The 'map' that divides the memory into sections.</li><li><code>Application</code>: Your main program.</li></ul><h4>Common Suggestions:</h4><b>ESP32:</b><br/>- <code>0x1000</code>: bootloader.bin<br/>- <code>0x8000</code>: partitions.bin<br/>- <code>0x10000</code>: application.bin<br/><b>ESP8266:</b><br/>- <code>0x00000</code>: for a pre-merged firmware file.<p>This application will suggest a safe default address for you based on the selected board type.</p>"),
                "add_button": "Add File ➕", "remove_button": "Remove ➖", "address_header": "Address", "path_header": "File Path",
                "group_actions": "Actions", "download_button": "Download ⚡️", "erase_button": "Erase Flash 🗑️", "restart_button": "Restart Device 🔄",
                "log_label": "Log:", "no_com_found": "No COM ports found", "new_com_detected": "COM Port list has been updated!\n", "browse_title": "Select Firmware File(s)",
                "reminder_title": "Reminder", "error_title": "Error", "confirm_title": "Confirmation",
                "no_valid_com": "Please select a valid COM port.\n", "no_files_to_download": "Please add at least one file to download.\n", "invalid_address": "Invalid address at row {row}: '{address}'.\n",
                "download_confirm": "Confirm download of {count} file(s) to port {port}?", "download_cancelled": "Download process cancelled.\n", "download_start": "Starting download...\n", "download_success": "\nDownload successful!", "download_fail": "\nDownload failed. Please try again.\n",
                "erase_confirm": "WARNING: Erase all data on port {port}?", "erase_cancelled": "Erase process cancelled.\n", "erase_start": "Starting flash erase...\n", "erase_success": "\nFlash erased successfully!", "erase_fail": "\nFlash erase failed.\n",
                "restart_confirm": "Are you sure you want to restart the device at port {port}?", "restart_cancelled": "Restart cancelled.\n", "restart_start": "Sending restart signal...\n", "restart_success": "\nDevice restarted successfully!", "restart_fail": "\nFailed to restart device."
            }
        }

    def init_ui(self):
        self.setWindowTitle("ESP Utility"); self.setMinimumSize(850, 600)
        main_layout = QVBoxLayout(self)
        
        # --- Menu Bar ---
        self.menu_bar = QMenuBar()
        main_layout.setMenuBar(self.menu_bar)
        self.tools_menu = self.menu_bar.addMenu("") # Sẽ được đặt tên trong update_ui_texts
        self.install_driver_action = QAction(self)
        self.install_driver_action.triggered.connect(self.open_driver_helper)
        self.tools_menu.addAction(self.install_driver_action)

        # --- Top Bar ---
        top_bar_layout = QHBoxLayout(); main_layout.addLayout(top_bar_layout)
        self.label_language = QLabel()
        self.combo_language = QComboBox(); self.combo_language.addItem("English", "en"); self.combo_language.addItem("Tiếng Việt", "vi")
        self.combo_language.setCurrentIndex(0 if self.language == "en" else 1)
        self.combo_language.currentIndexChanged.connect(self.change_language)
        self.btn_instructions = QPushButton(); self.btn_instructions.clicked.connect(self.show_instructions)
        top_bar_layout.addWidget(self.label_language); top_bar_layout.addWidget(self.combo_language)
        top_bar_layout.addStretch(); top_bar_layout.addWidget(self.btn_instructions)

        # --- Central Layout ---
        central_layout = QHBoxLayout(); main_layout.addLayout(central_layout, 1)
        left_column_layout = QVBoxLayout()
        self.connection_group = QGroupBox()
        connection_layout = QFormLayout(self.connection_group)
        self.combo_board_type = QComboBox(); self.combo_board_type.addItems(["ESP32", "ESP8266"])
        self.combobox_com = QComboBox()
        self.combobox_baud = QComboBox(); self.combobox_baud.addItems(["9600", "115200", "230400", "460800", "921600"])
        self.combobox_baud.setCurrentText("115200")
        self.label_board_type = QLabel(); self.label_com = QLabel(); self.label_baud = QLabel()
        connection_layout.addRow(self.label_board_type, self.combo_board_type)
        connection_layout.addRow(self.label_com, self.combobox_com); connection_layout.addRow(self.label_baud, self.combobox_baud)
        left_column_layout.addWidget(self.connection_group)

        self.actions_group = QGroupBox()
        actions_layout = QVBoxLayout(self.actions_group)
        actions_btn_layout = QHBoxLayout()
        self.btn_download = QPushButton(); self.btn_download.setMinimumHeight(38); self.btn_download.clicked.connect(self.flash_firmware)
        self.btn_erase = QPushButton(); self.btn_erase.setMinimumHeight(38); self.btn_erase.clicked.connect(self.erase_flash)
        self.btn_restart = QPushButton(); self.btn_restart.setMinimumHeight(38); self.btn_restart.clicked.connect(self.restart_device)
        actions_btn_layout.addWidget(self.btn_download); actions_btn_layout.addWidget(self.btn_erase); actions_btn_layout.addWidget(self.btn_restart)
        self.progress_bar = QProgressBar(); self.progress_bar.setMinimumHeight(32)
        actions_layout.addLayout(actions_btn_layout); actions_layout.addWidget(self.progress_bar)
        left_column_layout.addWidget(self.actions_group)
        left_column_layout.addStretch()
        
        self.files_group = QGroupBox()
        files_layout = QVBoxLayout(self.files_group)
        self.table_files = QTableWidget(); self.table_files.setColumnCount(2); self.table_files.verticalHeader().setVisible(False)
        self.table_files.horizontalHeader().setSectionResizeMode(1, QHeaderView.ResizeMode.Stretch)
        files_layout.addWidget(self.table_files)
        files_btn_layout = QHBoxLayout()
        self.btn_add_file = QPushButton(); self.btn_add_file.clicked.connect(self.add_file_row)
        self.btn_remove_file = QPushButton(); self.btn_remove_file.clicked.connect(self.remove_file_row)
        files_btn_layout.addStretch()
        files_btn_layout.addWidget(self.btn_add_file); files_btn_layout.addWidget(self.btn_remove_file)
        files_layout.addLayout(files_btn_layout)
        central_layout.addLayout(left_column_layout, 1); central_layout.addWidget(self.files_group, 2)

        self.label_log = QLabel(); self.text_log = QTextEdit(); self.text_log.setReadOnly(True)
        main_layout.addWidget(self.label_log); main_layout.addWidget(self.text_log, 1)

        self.flash_thread = None; self.erase_thread = None; self.reset_thread = None
        self.previous_ports = set()

    def update_ui_texts(self):
        tr = self.translations[self.language]
        self.setWindowTitle(tr["window_title"]); self.label_language.setText(tr["lang_label"])
        self.tools_menu.setTitle(tr["menu_tools"]); self.install_driver_action.setText(tr["action_install_drivers"])
        self.btn_instructions.setText(tr["instructions_button"])
        self.connection_group.setTitle(tr["group_connection"])
        self.label_board_type.setText(tr["board_type_label"]); self.label_com.setText(tr["com_port_label"]); self.label_baud.setText(tr["baud_rate_label"])
        self.files_group.setTitle(f'{tr["group_files"]} [?]'); self.files_group.setToolTip(tr["address_tooltip"])
        self.table_files.setHorizontalHeaderLabels([tr["address_header"], tr["path_header"]])
        self.btn_add_file.setText(tr["add_button"]); self.btn_remove_file.setText(tr["remove_button"])
        self.actions_group.setTitle(tr["group_actions"])
        self.btn_download.setText(tr["download_button"]); self.btn_erase.setText(tr["erase_button"]); self.btn_restart.setText(tr["restart_button"])
        self.label_log.setText(tr["log_label"])

    def show_instructions(self): InstructionsDialog(self).exec()
    def open_driver_helper(self): DriverHelperDialog(self.translations, self.language, self).exec()
    def change_language(self): self.language = self.combo_language.currentData(); self.update_ui_texts()
    
    def auto_refresh_com_ports(self):
        current_selection = self.combobox_com.currentText(); tr = self.translations[self.language]
        ports = sorted([p.device for p in serial.tools.list_ports.comports()])
        if set(ports) != self.previous_ports:
            self.log(tr["new_com_detected"]); self.combobox_com.clear()
            if ports: self.combobox_com.addItems(ports)
            if current_selection in ports: self.combobox_com.setCurrentText(current_selection)
            else: self.combobox_com.addItem(tr["no_com_found"])
            self.previous_ports = set(ports)
    
    def add_file_row(self):
        tr = self.translations[self.language]; paths, _ = QFileDialog.getOpenFileNames(self, tr["browse_title"], "", "Binary Files (*.bin);;All Files (*)")
        default_address = "0x10000" if self.combo_board_type.currentText() == "ESP32" else "0x00000"
        for path in paths:
            row_pos = self.table_files.rowCount(); self.table_files.insertRow(row_pos)
            self.table_files.setItem(row_pos, 0, QTableWidgetItem(default_address))
            path_item = QTableWidgetItem(path); path_item.setFlags(path_item.flags() & ~Qt.ItemFlag.ItemIsEditable)
            self.table_files.setItem(row_pos, 1, path_item)

    def remove_file_row(self):
        if (row := self.table_files.currentRow()) >= 0: self.table_files.removeRow(row)

    def set_controls_enabled(self, enabled):
        self.menu_bar.setEnabled(enabled)
        for widget in [self.connection_group, self.files_group, self.actions_group, self.combo_language, self.btn_instructions]:
            widget.setEnabled(enabled)

    def log(self, text):
        cursor = self.text_log.textCursor(); cursor.movePosition(QTextCursor.MoveOperation.End)
        cursor.insertText(text); self.text_log.ensureCursorVisible()
    
    def get_files_from_table(self):
        files_to_flash = []; tr = self.translations[self.language]
        for row in range(self.table_files.rowCount()):
            address = self.table_files.item(row, 0).text().strip()
            if not re.match(r"^0x[0-9a-fA-F]+$", address):
                QMessageBox.critical(self, tr["error_title"], tr["invalid_address"].format(row=row + 1, address=address)); return None
            files_to_flash.append((address, self.table_files.item(row, 1).text()))
        return files_to_flash

    def flash_firmware(self):
        tr = self.translations[self.language]
        if self.combobox_com.currentText() == tr["no_com_found"]:
            QMessageBox.warning(self, tr["error_title"], tr["no_valid_com"]); return
        files_to_flash = self.get_files_from_table()
        if files_to_flash is None or not files_to_flash:
            if files_to_flash is not None: QMessageBox.warning(self, tr["reminder_title"], tr["no_files_to_download"])
            return
        port = self.combobox_com.currentText(); baud = self.combobox_baud.currentText()
        if QMessageBox.question(self, tr["confirm_title"], tr["download_confirm"].format(count=len(files_to_flash), port=port), 
                                     QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No, QMessageBox.StandardButton.No) == QMessageBox.StandardButton.Yes:
            self.log(tr["download_start"]); self.set_controls_enabled(False); self.progress_bar.setValue(0)
            self.flash_thread = FlashThread(port, baud, files_to_flash); self.flash_thread.output_signal.connect(self.log)
            self.flash_thread.progress_signal.connect(self.progress_bar.setValue); self.flash_thread.finished_signal.connect(self.flash_finished)
            self.flash_thread.start()
        else: self.log(tr["download_cancelled"])

    def flash_finished(self, success):
        tr = self.translations[self.language]; self.progress_bar.setValue(100)
        if success: self.log(tr["download_success"]); QMessageBox.information(self, tr["reminder_title"], tr["download_success"].strip())
        else: self.log(tr["download_fail"]); QMessageBox.critical(self, tr["error_title"], tr["download_fail"].strip())
        self.set_controls_enabled(True)

    def erase_flash(self):
        tr = self.translations[self.language]; port = self.combobox_com.currentText()
        if port == tr["no_com_found"]:
            QMessageBox.warning(self, tr["error_title"], tr["no_valid_com"]); return
        if QMessageBox.question(self, tr["confirm_title"], tr["erase_confirm"].format(port=port),
                                     QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No, QMessageBox.StandardButton.No) == QMessageBox.StandardButton.Yes:
            self.log(tr["erase_start"]); self.set_controls_enabled(False); self.progress_bar.setValue(0)
            self.erase_thread = EraseThread(port); self.erase_thread.output_signal.connect(self.log)
            self.erase_thread.finished_signal.connect(self.erase_finished); self.erase_thread.start()
        else: self.log(tr["erase_cancelled"])

    def erase_finished(self, success):
        tr = self.translations[self.language]; self.progress_bar.setValue(100)
        if success: self.log(tr["erase_success"]); QMessageBox.information(self, tr["reminder_title"], tr["erase_success"].strip())
        else: self.log(tr["erase_fail"]); QMessageBox.critical(self, tr["error_title"], tr["erase_fail"].strip())
        self.set_controls_enabled(True)

    def restart_device(self):
        tr = self.translations[self.language]; port = self.combobox_com.currentText()
        if port == tr["no_com_found"]:
            QMessageBox.warning(self, tr["error_title"], tr["no_valid_com"]); return
        if QMessageBox.question(self, tr["confirm_title"], tr["restart_confirm"].format(port=port),
                                     QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No, QMessageBox.StandardButton.No) == QMessageBox.StandardButton.Yes:
            self.log(tr["restart_start"]); self.set_controls_enabled(False)
            self.reset_thread = ResetThread(port); self.reset_thread.output_signal.connect(self.log)
            self.reset_thread.finished_signal.connect(self.restart_finished); self.reset_thread.start()
        else: self.log(tr["restart_cancelled"])

    def restart_finished(self, success):
        tr = self.translations[self.language]
        if success: self.log(tr["restart_success"])
        else: self.log(tr["restart_fail"])
        self.set_controls_enabled(True)

# --- KHỐI THỰC THI CHÍNH ---
if __name__ == "__main__":
    app = QApplication(sys.argv)
    startup_dialog = InstructionsDialog()
    startup_dialog.exec()
    window = MainWindow()
    window.show()
    sys.exit(app.exec())
