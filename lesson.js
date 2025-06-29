[
    {
        "id": 1,
        "title": "Bài 1: Hello World",
        "desc": "### Khái niệm\nHàm `print()` là lệnh cơ bản nhất trong Python, dùng để hiển thị thông tin ra màn hình (còn gọi là console).\n\nBạn có thể đặt một chuỗi văn bản (string) bên trong cặp dấu ngoặc đơn `()` và cặp dấu nháy `' '` hoặc `\" \"` để in nó ra.\n\n### Ví dụ mẫu\n```python\nprint('Xin chào thế giới!')\n```\n\n### Yêu cầu bài tập\nBây giờ, bạn hãy viết code để in ra màn hình chính xác chuỗi `Hello World`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Hello World"
            }
        ]
    },
    {
        "id": 2,
        "title": "Bài 2: Biến và Toán Tử",
        "desc": "### Khái niệm\nBiến là một cái tên bạn đặt để lưu trữ một giá trị (như số, văn bản,...). Toán tử là các ký hiệu dùng để thực hiện phép toán (ví dụ `+` để cộng, `-` để trừ).\n\n### Ví dụ mẫu\n```python\nso_thu_nhat = 10\nso_thu_hai = 20\ntong = so_thu_nhat + so_thu_hai\nprint(tong) # Sẽ in ra 30\n```\n\n### Yêu cầu bài tập\nTạo hai biến a = 5 và b = 3. Sau đó in ra tổng của chúng.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "8"
            }
        ]
    },
    {
        "id": 3,
        "title": "Bài 3: Nhập Tên Người Dùng",
        "desc": "### Khái niệm\nHàm `input()` cho phép chương trình dừng lại và chờ người dùng nhập dữ liệu từ bàn phím. Dữ liệu nhập vào luôn ở dạng chuỗi (string).\n\n### Ví dụ mẫu\n```python\nten_nguoi_dung = input('Vui lòng nhập tên của bạn: ')\nprint('Xin chào,', ten_nguoi_dung)\n```\n\n### Yêu cầu bài tập\nViết chương trình nhận một tên từ người dùng và in ra lời chào theo mẫu `Chào ` + tên người dùng. Ví dụ, nếu người dùng nhập `An`, chương trình phải in ra `Chào An`.",
        "test_cases": [
            {
                "input": "An",
                "expected_output": "Chào An"
            },
            {
                "input": "Dung",
                "expected_output": "Chào Dung"
            }
        ]
    },
    {
        "id": 4,
        "title": "Bài 4: Câu lệnh if",
        "desc": "### Khái niệm\nCâu lệnh `if` dùng để kiểm tra một điều kiện. Nếu điều kiện đúng (True), khối mã bên trong `if` sẽ được thực thi. Bạn có thể dùng `else` để chỉ định khối mã sẽ chạy nếu điều kiện sai (False).\nĐể chuyển chuỗi nhập vào thành số nguyên, ta dùng hàm `int()`.\n\n### Ví dụ mẫu\n```python\ntuoi = int(input('Nhập tuổi của bạn: '))\nif tuoi >= 18:\n    print('Bạn là người trưởng thành.')\nelse:\n    print('Bạn là trẻ em.')\n```\n\n### Yêu cầu bài tập\nViết chương trình nhận một số nguyên. Nếu số đó lớn hơn 10, in ra `Lớn`. Ngược lại, in ra `Nhỏ`.",
        "test_cases": [
            {
                "input": "15",
                "expected_output": "Lớn"
            },
            {
                "input": "5",
                "expected_output": "Nhỏ"
            }
        ]
    },
    {
        "id": 5,
        "title": "Bài 5: Vòng lặp for",
        "desc": "### Khái niệm\nVòng lặp `for` được sử dụng để lặp qua một chuỗi các phần tử (như danh sách, hoặc một dãy số). Hàm `range(n)` tạo ra một dãy số từ 0 đến n-1.\n\n### Ví dụ mẫu\n```python\n# In các số từ 0 đến 2\nfor i in range(3):\n    print('Số:', i)\n```\n\n### Yêu cầu bài tập\nDùng vòng lặp `for` và hàm `range(5)` để in ra các số từ 0 đến 4, mỗi số trên một dòng.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "0\n1\n2\n3\n4"
            }
        ]
    },
    {
        "id": 6,
        "title": "Bài 6: Vòng lặp while",
        "desc": "### Khái niệm\nVòng lặp `while` sẽ tiếp tục thực thi khối mã bên trong nó miễn là điều kiện cho trước còn đúng (True). Cần cẩn thận để tránh lặp vô hạn!\n\n### Ví dụ mẫu\n```python\n# Đếm ngược từ 3 về 1\nso_dem = 3\nwhile so_dem > 0:\n    print(so_dem)\n    so_dem = so_dem - 1 # Hoặc so_dem -= 1\n```\n\n### Yêu cầu bài tập\nDùng vòng lặp `while` để in ra các số từ 1 đến 5, mỗi số trên một dòng.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "1\n2\n3\n4\n5"
            }
        ]
    },
    {
        "id": 7,
        "title": "Bài 7: Danh sách (List)",
        "desc": "### Khái niệm\nDanh sách (List) là một tập hợp các phần tử có thứ tự và có thể thay đổi. Các phần tử được đặt trong cặp ngoặc vuông `[]` và cách nhau bởi dấu phẩy.\n\n### Ví dụ mẫu\n```python\ntraicay = ['táo', 'chuối', 'cam']\nprint(traicay[0]) # In ra 'táo'\n```\n\n### Yêu cầu bài tập\nCho danh sách `names = ['An', 'Bình', 'Cường']`. Dùng vòng lặp `for` để in ra mỗi tên trong danh sách trên một dòng.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "An\nBình\nCường"
            }
        ]
    },
    {
        "id": 8,
        "title": "Bài 8: Dictionary",
        "desc": "### Khái niệm\nDictionary là một tập hợp các cặp `key: value` (khóa: giá trị). Nó không có thứ tự và dùng để truy xuất giá trị nhanh chóng thông qua `key`.\n\n### Ví dụ mẫu\n```python\nthong_tin = {\n    'ten': 'Bảo',\n    'tuoi': 25\n}\nprint(thong_tin['ten']) # In ra 'Bảo'\n```\n\n### Yêu cầu bài tập\nCho dictionary `scores = {'An': 8, 'Bình': 9}`. In ra màn hình điểm số của 'An'.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "8"
            }
        ]
    },
    {
        "id": 9,
        "title": "Bài 9: Hàm (Function)",
        "desc": "### Khái niệm\nHàm là một khối mã được đặt tên và có thể được gọi lại nhiều lần. Dùng từ khóa `def` để định nghĩa một hàm. Điều này giúp tái sử dụng code và làm chương trình có tổ chức hơn.\n\n### Ví dụ mẫu\n```python\ndef tinh_tong(a, b):\n    print(a + b)\n\ntinh_tong(5, 10) # Gọi hàm, sẽ in ra 15\n```\n\n### Yêu cầu bài tập\nViết một hàm tên là `chao()` không có tham số, hàm này sẽ in ra chuỗi `Hello`. Sau đó, hãy gọi hàm `chao()` để thực thi nó.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Hello"
            }
        ]
    },
    {
        "id": 10,
        "title": "Bài 10: random",
        "desc": "### Khái niệm\nThư viện `random` cung cấp các hàm để tạo ra số giả ngẫu nhiên. Để sử dụng, bạn cần `import random`. Hàm `random.randint(a, b)` trả về một số nguyên ngẫu nhiên trong khoảng `[a, b]` (bao gồm cả a và b).\n\n### Ví dụ mẫu\n```python\nimport random\nxuc_xac = random.randint(1, 6)\nprint('Bạn đã tung được số:', xuc_xac)\n```\n\n### Yêu cầu bài tập\nĐể kết quả có thể kiểm tra được, hãy dùng `random.seed(42)` để cố định kết quả ngẫu nhiên. Sau đó, import thư viện `random` và in ra một số ngẫu nhiên trong khoảng từ 1 đến 10.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "10"
            }
        ]
    },
    {
        "id": 11,
        "title": "Bài 11: math",
        "desc": "### Khái niệm\nThư viện `math` cung cấp các hàm toán học nâng cao. Hàm `math.sqrt(x)` dùng để tính căn bậc hai của một số x.\n\n### Ví dụ mẫu\n```python\nimport math\n# Tính căn bậc 2 của 25\nket_qua = math.sqrt(25)\nprint(ket_qua)\n```\n\n### Yêu cầu bài tập\nDùng thư viện `math`, tính và in ra căn bậc hai của 16.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "4.0"
            }
        ]
    },
    {
        "id": 12,
        "title": "Bài 12: time",
        "desc": "### Khái niệm\nThư viện `time` cung cấp các hàm liên quan đến thời gian, ví dụ như `time.sleep(x)` để tạm dừng chương trình trong x giây, hoặc `time.time()` để lấy số giây tính từ một mốc thời gian chuẩn.\n\n### Ví dụ mẫu\n```python\nimport time\nprint('Bắt đầu')\ntime.sleep(2) # Dừng 2 giây\nprint('Kết thúc')\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra việc sử dụng thư viện, bạn chỉ cần `import time` và sau đó in ra chuỗi `Da import time`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import time"
            }
        ]
    },
    {
        "id": 13,
        "title": "Bài 13: datetime",
        "desc": "### Khái niệm\nThư viện `datetime` là công cụ mạnh mẽ để làm việc với ngày và giờ. `datetime.now()` là một hàm phổ biến để lấy ngày giờ hiện tại của hệ thống.\n\n### Ví dụ mẫu\n```python\nfrom datetime import datetime\nhien_tai = datetime.now()\nprint(hien_tai)\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra, bạn hãy `from datetime import datetime` và sau đó in ra chuỗi `Da import datetime`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import datetime"
            }
        ]
    },
    {
        "id": 14,
        "title": "Bài 14: Ghi file",
        "desc": "### Khái niệm\nĐể ghi nội dung vào một file, ta dùng hàm `open()` với chế độ `'w'` (write). Cú pháp `with open(...)` rất được khuyến khích vì nó sẽ tự động đóng file sau khi dùng xong.\n\n### Ví dụ mẫu\n```python\nwith open('nhatky.txt', 'w', encoding='utf-8') as f:\n    f.write('Hôm nay trời đẹp.')\n```\n\n### Yêu cầu bài tập\nHãy viết code để mở một file tên `a.txt` ở chế độ ghi, ghi chuỗi `xin chao` vào file, và sau khi hoàn tất, in ra chuỗi `Da ghi file`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da ghi file"
            }
        ]
    },
    {
        "id": 15,
        "title": "Bài 15: Đọc file",
        "desc": "### Khái niệm\nĐể đọc nội dung từ file, ta dùng hàm `open()` với chế độ `'r'` (read) hoặc không ghi chế độ (mặc định là đọc). Phương thức `.read()` sẽ đọc toàn bộ nội dung file.\n\n### Ví dụ mẫu\n```python\n# Giả sử file nhatky.txt đã có nội dung\nwith open('nhatky.txt', 'r', encoding='utf-8') as f:\n    noi_dung = f.read()\n    print(noi_dung)\n```\n\n### Yêu cầu bài tập\nHãy viết code để: 1. Tạo ra file `a.txt` có nội dung là `hello`. 2. Sau đó, mở lại file đó, đọc nội dung và in ra màn hình.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "hello"
            }
        ]
    },
    {
        "id": 16,
        "title": "Bài 16: vẽ với turtle",
        "desc": "### Khái niệm\nThư viện `turtle` là một cách vui nhộn để học lập trình bằng cách điều khiển một 'con rùa' ảo để vẽ các hình ảnh đồ họa. Bạn có thể dùng các lệnh như `forward()`, `left()`, `right()`.\n\n### Ví dụ mẫu\n```python\nimport turtle\nturtle.forward(100) # Đi thẳng 100 bước\nturtle.left(90)     # Quay trái 90 độ\nturtle.done()       # Giữ cửa sổ mở\n```\n\n### Yêu cầu bài tập\nDo không thể kiểm tra cửa sổ đồ họa, bạn chỉ cần `import turtle` và sau đó in ra chuỗi `Da import turtle`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import turtle"
            }
        ]
    },
    {
        "id": 17,
        "title": "Bài 17: List Comprehension",
        "desc": "### Khái niệm\nList Comprehension là một cách viết cực kỳ ngắn gọn và 'Pythonic' để tạo ra một list mới từ một list đã có. Cú pháp chung: `[bieu_thuc for phan_tu in danh_sach]`.\n\n### Ví dụ mẫu\n```python\nso = [1, 2, 3, 4]\nso_gap_doi = [x * 2 for x in so]\nprint(so_gap_doi) # In ra [2, 4, 6, 8]\n```\n\n### Yêu cầu bài tập\nDùng list comprehension để tạo một danh sách chứa bình phương của các số từ 1 đến 5. Sau đó in danh sách đó ra.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "[1, 4, 9, 16, 25]"
            }
        ]
    },
    {
        "id": 18,
        "title": "Bài 18: Lambda Function",
        "desc": "### Khái niệm\nHàm `lambda` là một hàm nhỏ, ẩn danh (không có tên). Nó có thể nhận bất kỳ số lượng tham số nào, nhưng chỉ có thể có một biểu thức duy nhất. Cú pháp: `lambda tham_so: bieu_thuc`.\n\n### Ví dụ mẫu\n```python\ntinh_tong = lambda a, b: a + b\nprint(tinh_tong(5, 3)) # In ra 8\n```\n\n### Yêu cầu bài tập\nTạo một hàm lambda để tính bình phương của một số. Dùng hàm đó để tính và in ra bình phương của số 5.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "25"
            }
        ]
    },
    {
        "id": 19,
        "title": "Bài 19: Xử lý ngoại lệ",
        "desc": "### Khái niệm\nKhi một lỗi xảy ra trong lúc chạy chương trình, Python sẽ tạo ra một ngoại lệ (exception). Nếu không được xử lý, nó sẽ làm chương trình dừng lại. Ta dùng khối lệnh `try...except` để 'bắt' và xử lý các lỗi này.\n\n### Ví dụ mẫu\n```python\ntry:\n    ket_qua = 10 / 0\nexcept ZeroDivisionError:\n    print('Lỗi: Không thể chia cho số 0!')\n```\n\n### Yêu cầu bài tập\nDùng khối `try-except` để thực hiện phép chia `10 / 0`. Trong khối `except ZeroDivisionError`, hãy in ra chuỗi `Khong the chia cho 0`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Khong the chia cho 0"
            }
        ]
    },
    {
        "id": 20,
        "title": "Bài 20: Class",
        "desc": "### Khái niệm\nClass (Lớp) là một bản thiết kế để tạo ra các đối tượng. Đối tượng có các thuộc tính (dữ liệu) và phương thức (hành vi). Hàm `__init__` là hàm khởi tạo đặc biệt, được gọi khi một đối tượng mới được tạo ra.\n\n### Ví dụ mẫu\n```python\nclass Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        print(self.name, 'says Woof!')\n\nmy_dog = Dog('Milo')\nmy_dog.bark()\n```\n\n### Yêu cầu bài tập\nTạo một class `Cat` với phương thức `meow()` in ra chuỗi `Meow`. Sau đó tạo một đối tượng từ class này và gọi phương thức `meow()`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Meow"
            }
        ]
    },
    {
        "id": 21,
        "title": "Bài 21: json",
        "desc": "### Khái niệm\nJSON là một định dạng lưu trữ và trao đổi dữ liệu rất phổ biến. Thư viện `json` của Python cho phép bạn làm việc với dữ liệu JSON. `json.dumps()` chuyển một đối tượng Python (như dictionary) thành chuỗi JSON.\n\n### Ví dụ mẫu\n```python\nimport json\ndata = {'thanh_pho': 'Hanoi', 'quoc_gia': 'Vietnam'}\njson_string = json.dumps(data, ensure_ascii=False)\nprint(json_string)\n```\n\n### Yêu cầu bài tập\nDùng thư viện `json`, chuyển dictionary `{\"name\": \"An\"}` thành một chuỗi JSON và in chuỗi đó ra.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "{\"name\": \"An\"}"
            }
        ]
    },
    {
        "id": 22,
        "title": "Bài 22: statistics",
        "desc": "### Khái niệm\nThư viện `statistics` cung cấp các hàm thống kê toán học. Hàm `statistics.mean()` dùng để tính giá trị trung bình cộng của một chuỗi các số.\n\n### Ví dụ mẫu\n```python\nimport statistics\ndiem_so = [8, 9, 7, 10, 8]\nprint(statistics.mean(diem_so))\n```\n\n### Yêu cầu bài tập\nDùng thư viện `statistics`, tính và in ra giá trị trung bình của danh sách `[10, 20, 30]`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "20"
            }
        ]
    },
    {
        "id": 23,
        "title": "Bài 23: Làm việc với CSV",
        "desc": "### Khái niệm\nCSV (Comma-Separated Values) là một định dạng file văn bản đơn giản để lưu trữ dữ liệu dạng bảng. Thư viện `csv` của Python giúp việc đọc và ghi các file này trở nên dễ dàng.\n\n### Ví dụ mẫu\n```python\nimport csv\nwith open('data.csv', 'w', newline='') as f:\n    writer = csv.writer(f)\n    writer.writerow(['Tên', 'Tuổi'])\n    writer.writerow(['An', 20])\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra, bạn chỉ cần `import csv` và sau đó in ra chuỗi `Da import csv`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import csv"
            }
        ]
    },
    {
        "id": 24,
        "title": "Bài 24: os và sys",
        "desc": "### Khái niệm\n- `os`: Cung cấp các hàm để tương tác với hệ điều hành, ví dụ như tạo thư mục (`os.mkdir`), lấy đường dẫn hiện tại (`os.getcwd`).\n- `sys`: Cung cấp quyền truy cập vào các biến và hàm được sử dụng hoặc duy trì bởi trình thông dịch Python, ví dụ như đường dẫn tìm kiếm module (`sys.path`).\n\n### Ví dụ mẫu\n```python\nimport os\nprint('Thư mục hiện tại:', os.getcwd())\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra, bạn hãy `import os` và `import sys`, sau đó in ra chuỗi `Da import os va sys`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import os va sys"
            }
        ]
    },
    {
        "id": 25,
        "title": "Bài 25: tkinter GUI",
        "desc": "### Khái niệm\n`tkinter` là thư viện giao diện đồ họa (GUI) tiêu chuẩn của Python. Nó cho phép bạn tạo các cửa sổ, nút bấm, ô nhập liệu và các thành phần đồ họa khác.\n\n### Ví dụ mẫu\n```python\nimport tkinter as tk\nwindow = tk.Tk()\nwindow.title('Cửa sổ của tôi')\nlabel = tk.Label(window, text='Chào bạn!')\nlabel.pack()\nwindow.mainloop()\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra, bạn hãy `import tkinter` và sau đó in ra chuỗi `Da import tkinter`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import tkinter"
            }
        ]
    },
    {
        "id": 26,
        "title": "Bài 26: SQLite cơ bản",
        "desc": "### Khái niệm\n`sqlite3` là một thư viện tích hợp sẵn trong Python cho phép bạn tạo và quản lý các cơ sở dữ liệu SQLite. SQLite là một hệ quản trị CSDL nhỏ gọn, không cần máy chủ riêng.\n\n### Ví dụ mẫu\n```python\nimport sqlite3\nconn = sqlite3.connect('mydatabase.db')\ncursor = conn.cursor()\n# Các thao tác khác...\nconn.close()\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra, bạn hãy `import sqlite3` và sau đó in ra chuỗi `Da import sqlite3`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import sqlite3"
            }
        ]
    },
    {
        "id": 27,
        "title": "Bài 27: Regular Expression (re)",
        "desc": "### Khái niệm\nBiểu thức chính quy (Regular Expression) là một chuỗi các ký tự tạo thành một mẫu tìm kiếm. Thư viện `re` của Python cho phép bạn sử dụng các mẫu này để tìm kiếm, khớp và thay thế trong văn bản. `re.findall()` tìm tất cả các chuỗi con khớp với mẫu.\n\n### Ví dụ mẫu\n```python\nimport re\ntext = 'Số điện thoại của tôi là 123-456-7890.'\nnumbers = re.findall(r'\\d+', text)\nprint(numbers) # In ra ['123', '456', '7890']\n```\n\n### Yêu cầu bài tập\nDùng thư viện `re`, tìm tất cả các số trong chuỗi `abc123def456` và in danh sách kết quả ra.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "['123', '456']"
            }
        ]
    },
    {
        "id": 28,
        "title": "Bài 28: requests (GET)",
        "desc": "### Khái niệm\nThư viện `requests` giúp việc gửi các yêu cầu HTTP trở nên cực kỳ đơn giản. `requests.get(url)` gửi một yêu cầu GET đến một URL và trả về một đối tượng Response chứa thông tin từ máy chủ, bao gồm nội dung và trạng thái.\n\n### Ví dụ mẫu\n```python\nimport requests\nresponse = requests.get('[https://api.github.com](https://api.github.com)')\nprint(response.status_code) # In ra 200 nếu thành công\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra, bạn hãy `import requests` và sau đó in ra chuỗi `Da import requests`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import requests"
            }
        ]
    },
    {
        "id": 29,
        "title": "Bài 29: BeautifulSoup",
        "desc": "### Khái niệm\n`BeautifulSoup` là một thư viện dùng để 'cào' dữ liệu (web scraping) từ các file HTML và XML. Nó tạo ra một cây phân tích cú pháp cho trang, giúp việc trích xuất dữ liệu trở nên dễ dàng.\n\n### Ví dụ mẫu\n```python\nfrom bs4 import BeautifulSoup\nhtml_doc = '<html><head><title>Trang web</title></head></html>'\nsoup = BeautifulSoup(html_doc, 'html.parser')\nprint(soup.title.text)\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra, bạn hãy `from bs4 import BeautifulSoup` và sau đó in ra chuỗi `Da import BeautifulSoup`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import BeautifulSoup"
            }
        ]
    },
    {
        "id": 30,
        "title": "Bài 30: NumPy cơ bản",
        "desc": "### Khái niệm\n`NumPy` (Numerical Python) là thư viện nền tảng cho tính toán khoa học trong Python. Nó cung cấp một đối tượng mảng đa chiều hiệu suất cao và các công cụ để làm việc với các mảng này.\n\n### Ví dụ mẫu\n```python\nimport numpy as np\narr = np.array([10, 20, 30])\nprint(arr.sum()) # In ra 60\n```\n\n### Yêu cầu bài tập\nDùng thư viện `numpy`, tạo một mảng chứa các số `[1, 2, 3]` và in ra tổng của mảng đó.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "6"
            }
        ]
    },
    {
        "id": 31,
        "title": "Bài 31: Pandas cơ bản",
        "desc": "### Khái niệm\n`Pandas` là một thư viện mã nguồn mở cung cấp các cấu trúc dữ liệu và công cụ phân tích dữ liệu hiệu suất cao, dễ sử dụng. Cấu trúc dữ liệu chính là DataFrame, tương tự như một bảng tính Excel.\n\n### Ví dụ mẫu\n```python\nimport pandas as pd\ndata = {'Ten': ['An', 'Binh'], 'Tuoi': [22, 25]}\ndf = pd.DataFrame(data)\nprint(df)\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra, bạn hãy `import pandas` và sau đó in ra chuỗi `Da import pandas`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import pandas"
            }
        ]
    },
    {
        "id": 32,
        "title": "Bài 32: Gửi dữ liệu Firebase",
        "desc": "### Khái niệm\nBạn có thể sử dụng thư viện `requests` để tương tác với Firebase Realtime Database thông qua REST API của nó. Yêu cầu `POST` thường được dùng để thêm dữ liệu mới.\n\n### Ví dụ mẫu\n```python\nimport requests, json\nurl = '[https://your-project.firebaseio.com/data.json](https://your-project.firebaseio.com/data.json)'\nnew_data = {'user': 'test', 'message': 'hello'}\nresponse = requests.post(url, data=json.dumps(new_data))\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra, bạn hãy `import requests` và sau đó in ra chuỗi `San sang gui data`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "San sang gui data"
            }
        ]
    },
    {
        "id": 33,
        "title": "Bài 33: Đọc văn bản pyttsx3",
        "desc": "### Khái niệm\n`pyttsx3` là một thư viện chuyển văn bản thành giọng nói (Text-to-Speech) hoạt động ngoại tuyến. Nó cho phép chương trình của bạn 'nói' chuyện.\n\n### Ví dụ mẫu\n```python\nimport pyttsx3\nengine = pyttsx3.init()\nengine.say('Tôi có thể nói chuyện')\nengine.runAndWait()\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra, bạn hãy `import pyttsx3` và sau đó in ra chuỗi `Da import pyttsx3`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import pyttsx3"
            }
        ]
    },
    {
        "id": 34,
        "title": "Bài 34: Tải video pytube",
        "desc": "### Khái niệm\n`pytube` là một thư viện nhẹ, không có sự phụ thuộc, dùng để tải video từ YouTube. Nó cho phép bạn truy cập các luồng video và âm thanh khác nhau.\n\n### Ví dụ mẫu\n```python\nfrom pytube import YouTube\nvideo_url = 'URL_CUA_VIDEO_YOUTUBE'\nYouTube(video_url).streams.first().download()\nprint('Tải xong!')\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra, bạn hãy `from pytube import YouTube` và sau đó in ra chuỗi `Da import pytube`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import pytube"
            }
        ]
    },
    {
        "id": 35,
        "title": "Bài 35: Xử lý ảnh OpenCV",
        "desc": "### Khái niệm\n`OpenCV` (Open Source Computer Vision Library) là một thư viện khổng lồ về thị giác máy tính và học máy. Nó cung cấp hàng ngàn thuật toán để đọc, xử lý và phân tích hình ảnh và video.\n\n### Ví dụ mẫu\n```python\nimport cv2\nimg = cv2.imread('image.jpg')\ncv2.imshow('Hinh anh', img)\ncv2.waitKey(0)\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra, bạn hãy `import cv2` và sau đó in ra chuỗi `Da import cv2`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import cv2"
            }
        ]
    },
    {
        "id": 36,
        "title": "Bài 36: Selenium cơ bản",
        "desc": "### Khái niệm\n`Selenium` là một công cụ mạnh mẽ để tự động hóa các trình duyệt web. Nó thường được sử dụng cho việc kiểm thử tự động các ứng dụng web và cào dữ liệu từ các trang web động (có JavaScript).\n\n### Ví dụ mẫu\n```python\nfrom selenium import webdriver\ndriver = webdriver.Chrome()\ndriver.get('[https://www.google.com](https://www.google.com)')\nprint(driver.title)\ndriver.quit()\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra, bạn hãy `from selenium import webdriver` và sau đó in ra chuỗi `Da import selenium`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import selenium"
            }
        ]
    }
]
