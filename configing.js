{
  "version": 1.4,
  "is_mandatory": false,
  "changelog": [
    "Thêm hạng mới: Siêu Đăng Với Huyền Thoại.",
    "Rank Đã Được Phân Chia Công Bằng"
  ],
  [
  {
    "id": "x2_weekend_jul_1",
    "title": "Sự Kiện x2 Điểm Cuối Tuần",
    "description": "Nhân đôi số điểm nhận được từ tất cả các thử thách xếp hạng trong thời gian diễn ra sự kiện. Hãy tranh thủ leo hạng!",
    "type": "xp_multiplier",
    "value": 2,
    "start_time": "2025-07-05T00:00:00+07:00",
    "end_time": "2025-07-06T23:59:59+07:00",
    "icon": "🎉"
  },
  {
    "id": "ultimate_practice_jul",
    "title": "Tuần Lễ Thử Thách Tối Thượng",
    "description": "Trong tuần này, tất cả người chơi đều có thể tham gia 'Cuộc Chiến Tối Thượng' bất kể thứ hạng. Phần thưởng điểm sẽ được giảm một nửa.",
    "type": "unlock_feature",
    "value": "ultimate_battle",
    "start_time": "2025-07-07T00:00:00+07:00",
    "end_time": "2025-07-13T23:59:59+07:00",
    "icon": "⚔️"
  }
],
  "feature_flags": {
    "maintenance_mode": false,
    "maintenance_message": "Hệ thống đang bảo trì để fix lỗi trong cơ sở dữ liệu bài học . Tạm thời bạn sẽ không vô đc và thời gian dự kiến xong là từ 23g - 6g (UTC+7) Mong bạn thông cảm ạ ☺️",
    "enable_weekend_challenge": false,
    "enable_ranking_matches": false,
    "rank_maintenance_mode": false,
    "rank_maintenance_message": "Hệ thống xếp hạng đang được bảo trì để chuẩn bị cho mùa giải mới. Bạn có thể quay lại sau."
  },
  "app_config": {
    "window_title": "Học Python Vui Vẻ - Con Đường Chinh Phục Grandmaster",
    "window_size": [
      1100,
      750
    ],
    "pulse_timer_interval": 800,
    "score_animation_duration": 400
  },
  "points": {
    "lesson_complete": 5,
    "challenge_win": 10,
    "challenge_fail_penalty": -5,
    "challenge_quit_penalty": -15,
    "weekend_win": 150,
    "weekend_fail_penalty": -25
  },
  "messages": {
    "update_dialog_title": "Có cập nhật mới!",
    "update_success_title": "Thành công",
    "update_success_message": "Đã cập nhật bài học lên phiên bản {version} thành công!",
    "challenge_win_title": "✅ Thành công!",
    "challenge_fail_title": "❌ Kết quả sai!"
  },
  "settings": {
    "season_duration_days": 20,
    "weekend_attempts": 0,
    "advanced_lesson_threshold": 15
  },
  "ui_text": {
    "tabs": {
      "lessons": "📘 KHÓA HỌC",
      "practice": "🎯 LUYỆN TẬP (KHÔNG RANK)",
      "ranking": "🏅 XẾP HẠNG & THI ĐẤU"
    },
    "info_dialog": {
      "title": "Thông tin & Quy tắc",
      "rules_tab_title": "Quy tắc",
      "ranks_tab_title": "Các Cấp bậc Rank",
      "rules_title": "💡 Lưu ý về Xếp hạng",
      "rules_content_html": "<ul style=\"line-height: 160%; font-size: 14px;\"><li><b>Hoàn thành bài học:</b> Bạn cần hoàn thành đủ số lượng bài học yêu cầu để có thể thăng lên các hạng cao.</li><li><b>Chế độ Xếp hạng:</b> Chỉ có các thử thách trong tab \"Xếp hạng & Thi đấu\" mới cộng/trừ điểm rank.</li><li><b>Luyện tập:</b> Tab \"Luyện tập\" dùng để ôn bài và không ảnh hưởng đến điểm số.</li><li><b>Phạt thoát trận:</b> Thoát thử thách xếp hạng giữa chừng sẽ bị trừ 15 điểm.</li><li><b>Mùa giải:</b> Mỗi mùa giải kéo dài 90 ngày. Khi mùa giải mới bắt đầu, điểm của bạn sẽ được reset.</li></ul>"
    },
    "rank_up_dialog": {
      "main_title": "🎉 CHÚC MỪNG THĂNG HẠNG! 🎉",
      "body_text": "BẠN ĐÃ ĐẠT ĐƯỢC HẠNG MỚI!",
      "button_text": "Tuyệt vời!"
    }
  },
   "season_names": {
    "1": "Kỷ Nguyên Công Nghệ",
    "2": "Bão Tố Sa Mạc",
    "3": "Kỷ Băng Hà",
    "4": "Thời Đại Công Nghệ"
  },
   "ultimate_rank_data": [
    { "name": "Tiên Phong", "icon": "⚔️", "base_score": 0 },
    { "name": "Siêu Việt", "icon": "🛡️", "base_score": 500 },
    { "name": "Tối Thượng", "icon": "👑", "base_score": 1200 },
    { "name": "Vô Song", "icon": "🌟", "base_score": 2500 },
    { "name": "Truyền Thuyết", "icon": "🔥", "base_score": 5000 }
  ],
  "rank_data": [
    { "name": "Đồng", "icon": "🥉", "base_score": 0, "tier_span": 50, "subdivisions": 5, "lessons_required": 0 },
    { "name": "Bạc", "icon": "🥈", "base_score": 50, "tier_span": 70, "subdivisions": 5, "lessons_required": 0 },
    { "name": "Vàng", "icon": "🏅", "base_score": 120, "tier_span": 130, "subdivisions": 5, "lessons_required": 0 },
    { "name": "Bạch Kim", "icon": "💎", "base_score": 250, "tier_span": 200, "subdivisions": 5, "lessons_required": 0 },
    { "name": "Sao Băng", "icon": "⭐", "base_score": 450, "tier_span": 300, "subdivisions": 5, "lessons_required": 0 },
    { "name": "Ngôi Sao", "icon": "🎖️", "base_score": 750, "tier_span": 450, "subdivisions": 5, "lessons_required": 0 },
    { "name": "Siêu Đẳng", "icon": "✨", "base_score": 1200, "tier_span": 600, "subdivisions": 5, "lessons_required": 0 },
    { "name": "Huyền Thoại", "icon": "🏆", "base_score": 1800, "tier_span": 3600, "subdivisions": 5, "lessons_required": 0 }
  ]
}
