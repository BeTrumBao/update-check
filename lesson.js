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
        "title": "Bài 32: Tương tác API (POST)",
        "desc": "### Khái niệm\nNgoài `GET` để lấy dữ liệu, `requests.post(url, json=data)` được dùng để gửi dữ liệu mới lên một máy chủ hoặc API. Dữ liệu thường được gửi ở định dạng JSON.\n\n### Ví dụ mẫu\n```python\nimport requests\nurl = '[https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)'\nnew_post = {'title': 'foo', 'body': 'bar', 'userId': 1}\nresponse = requests.post(url, json=new_post)\nprint(response.status_code) # In ra 201 nếu tạo thành công\n```\n\n### Yêu cầu bài tập\nĐể kiểm tra, hãy `import requests` và in ra chuỗi `San sang gui POST`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "San sang gui POST"
            }
        ]
    },
    {
        "id": 33,
        "title": "Bài 33: pyttsx3",
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
        "title": "Bài 34: pytube",
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
    },
    {
        "id": 37,
        "title": "Bài 37: OOP - Kế thừa",
        "desc": "### Khái niệm\nKế thừa cho phép một lớp (lớp con) thừa hưởng các thuộc tính và phương thức từ một lớp khác (lớp cha). Điều này giúp tái sử dụng code và tạo ra một hệ thống phân cấp logic.\n\n### Ví dụ mẫu\n```python\nclass Animal:\n    def speak(self):\n        return 'Animal speaks'\n\nclass Dog(Animal): # Dog kế thừa từ Animal\n    def bark(self):\n        return 'Woof!'\n\nd = Dog()\nprint(d.speak()) # Gọi phương thức từ lớp cha\n```\n\n### Yêu cầu bài tập\nTạo một lớp cha `Vehicle` có phương thức `start_engine()` trả về chuỗi 'Engine started'. Tạo một lớp con `Car` kế thừa từ `Vehicle`. Tạo một đối tượng từ lớp `Car` và in kết quả của việc gọi phương thức `start_engine()`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Engine started"
            }
        ]
    },
    {
        "id": 38,
        "title": "Bài 38: OOP - Ghi đè phương thức",
        "desc": "### Khái niệm\nKhi một lớp con kế thừa từ lớp cha, nó có thể cung cấp một định nghĩa riêng cho một phương thức đã có ở lớp cha. Điều này được gọi là ghi đè phương thức (method overriding).\n\n### Ví dụ mẫu\n```python\nclass Animal:\n    def speak(self):\n        return 'Animal speaks'\n\nclass Cat(Animal):\n    def speak(self): # Ghi đè phương thức speak\n        return 'Meow!'\n\nprint(Cat().speak()) # Sẽ in ra 'Meow!'\n```\n\n### Yêu cầu bài tập\nTạo một lớp cha `Bird` có phương thức `fly()` in ra 'Bird flies'. Tạo một lớp con `Ostrich` (Đà điểu) kế thừa từ `Bird` và ghi đè phương thức `fly()` để in ra 'Ostrich cannot fly'. Tạo một đối tượng đà điểu và gọi phương thức `fly()`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Ostrich cannot fly"
            }
        ]
    },
    {
        "id": 39,
        "title": "Bài 39: OOP - Đa kế thừa",
        "desc": "### Khái niệm\nPython hỗ trợ đa kế thừa, nghĩa là một lớp con có thể kế thừa từ nhiều lớp cha. Lớp con sẽ có tất cả các thuộc tính và phương thức của tất cả các lớp cha.\n\n### Ví dụ mẫu\n```python\nclass Father:\n    def skill_F(self):\n        print('Gardening')\n\nclass Mother:\n    def skill_M(self):\n        print('Cooking')\n\nclass Child(Father, Mother):\n    pass\n\nc = Child()\nc.skill_F()\nc.skill_M()\n```\n\n### Yêu cầu bài tập\nTạo lớp `Swimmer` có phương thức `swim()` in ra 'swimming'. Tạo lớp `Flyer` có phương thức `fly()` in ra 'flying'. Tạo lớp `Duck` kế thừa từ cả hai lớp trên. Tạo một đối tượng `Duck` và gọi cả hai phương thức `swim()` và `fly()` (mỗi kết quả trên một dòng).",
        "test_cases": [
            {
                "input": "",
                "expected_output": "swimming\nflying"
            }
        ]
    },
    {
        "id": 40,
        "title": "Bài 40: Decorators cơ bản",
        "desc": "### Khái niệm\nDecorator là một hàm nhận một hàm khác làm đối số, thêm một số chức năng vào nó, và trả về một hàm khác mà không thay đổi mã nguồn của hàm ban đầu. Cú pháp thường dùng là `@ten_decorator`.\n\n### Ví dụ mẫu\n```python\ndef my_decorator(func):\n    def wrapper():\n        print('Trước khi hàm được gọi.')\n        func()\n        print('Sau khi hàm được gọi.')\n    return wrapper\n\n@my_decorator\ndef say_whee():\n    print('Whee!')\n\nsay_whee()\n```\n\n### Yêu cầu bài tập\nTạo một decorator tên là `hello_decorator` sẽ in ra 'Hello' trước khi thực thi hàm được trang trí. Áp dụng nó vào hàm `say_world()` in ra chuỗi 'World'.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Hello\nWorld"
            }
        ]
    },
    {
        "id": 41,
        "title": "Bài 41: Generators và yield",
        "desc": "### Khái niệm\nGenerator là một cách đơn giản để tạo ra các iterator. Thay vì `return` một giá trị và kết thúc, một hàm generator dùng `yield` để 'tạm dừng' và 'trả về' một giá trị, sau đó có thể tiếp tục từ điểm đó.\n\n### Ví dụ mẫu\n```python\ndef countdown(num):\n    while num > 0:\n        yield num\n        num -= 1\n\nfor i in countdown(3):\n    print(i)\n```\n\n### Yêu cầu bài tập\nViết một generator function tên `even_numbers` nhận một số `n` và `yield` các số chẵn từ 0 đến `n`. Sau đó, dùng vòng lặp `for` để in ra các số từ `even_numbers(6)`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "0\n2\n4\n6"
            }
        ]
    },
    {
        "id": 42,
        "title": "Bài 42: Context Managers (with)",
        "desc": "### Khái niệm\nContext Manager là một đối tượng định nghĩa các phương thức `__enter__` và `__exit__`. Nó được sử dụng với câu lệnh `with` để quản lý tài nguyên (như file, kết nối mạng), đảm bảo chúng được giải phóng đúng cách ngay cả khi có lỗi.\n\n### Ví dụ mẫu\n```python\nclass ManagedFile:\n    def __init__(self, name):\n        self.name = name\n    def __enter__(self):\n        print('Mở file')\n        self.file = open(self.name, 'w')\n        return self.file\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        if self.file:\n            self.file.close()\n        print('Đóng file')\n\nwith ManagedFile('test.txt') as f:\n    f.write('hello')\n```\n\n### Yêu cầu bài tập\nIn ra chuỗi 'Start' sau đó in ra 'End', mô phỏng việc bắt đầu và kết thúc của một khối `with`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Start\nEnd"
            }
        ]
    },
    {
        "id": 43,
        "title": "Bài 43: *args và **kwargs",
        "desc": "### Khái niệm\n- `*args`: Cho phép một hàm nhận một số lượng đối số vị trí (positional arguments) không xác định. Nó sẽ gom các đối số này thành một tuple.\n- `**kwargs`: Cho phép một hàm nhận một số lượng đối số từ khóa (keyword arguments) không xác định. Nó sẽ gom chúng thành một dictionary.\n\n### Ví dụ mẫu\n```python\ndef my_func(*args, **kwargs):\n    print('Args:', args)\n    print('Kwargs:', kwargs)\n\nmy_func(1, 2, 3, name='An', age=20)\n```\n\n### Yêu cầu bài tập\nViết một hàm `tong_args` nhận `*args` và in ra tổng của tất cả các đối số được truyền vào. Gọi hàm với các số 1, 2, 3, 4.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "10"
            }
        ]
    },
    {
        "id": 44,
        "title": "Bài 44: Thư viện `collections`",
        "desc": "### Khái niệm\nThư viện `collections` cung cấp các kiểu dữ liệu container chuyên dụng. `Counter` là một lớp con của dictionary dùng để đếm các đối tượng có thể hash.\n\n### Ví dụ mẫu\n```python\nfrom collections import Counter\nmy_list = ['a', 'b', 'c', 'a', 'b', 'a']\nc = Counter(my_list)\nprint(c['a']) # In ra 3\n```\n\n### Yêu cầu bài tập\nDùng `Counter` từ thư viện `collections` để đếm số lần xuất hiện của số 5 trong danh sách `[1, 5, 2, 5, 3, 5, 4]` và in kết quả ra.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "3"
            }
        ]
    },
    {
        "id": 45,
        "title": "Bài 45: f-Strings",
        "desc": "### Khái niệm\nf-Strings (Formatted String Literals) là cách định dạng chuỗi hiện đại và được ưa chuộng nhất trong Python (từ phiên bản 3.6+). Nó cho phép nhúng trực tiếp giá trị của biến vào chuỗi bằng cách đặt chữ `f` trước dấu nháy và đặt biến trong dấu `{}`.\n\n### Ví dụ mẫu\n```python\nname = 'Python'\nversion = 3.11\nprint(f'Chào mừng đến với {name} phiên bản {version}!')\n```\n\n### Yêu cầu bài tập\nCho biến `mon_hoc = 'Lập trình'` và `diem = 10`. Dùng f-string để in ra chuỗi 'Môn Lập trình được 10 điểm'.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Môn Lập trình được 10 điểm"
            }
        ]
    },
    {
        "id": 46,
        "title": "Bài 46: Type Hinting",
        "desc": "### Khái niệm\nType Hinting (chỉ dẫn kiểu) là cách để chỉ định kiểu dữ liệu mong muốn cho các biến, tham số hàm và giá trị trả về. Nó không bắt buộc nhưng giúp code dễ đọc, dễ bảo trì và được các công cụ phân tích tĩnh hỗ trợ.\n\n### Ví dụ mẫu\n```python\ndef chao(ten: str) -> str:\n    return 'Chào ' + ten\n\n# Dù có type hint, bạn vẫn có thể truyền sai kiểu\n# print(chao(123)) # Vẫn chạy nhưng không đúng ý đồ\n```\n\n### Yêu cầu bài tập\nViết một hàm `tinh_tong` có các chỉ dẫn kiểu, nhận vào hai số nguyên (`a: int, b: int`) và trả về một số nguyên (`-> int`). Trong hàm, trả về tổng của `a` và `b`. Sau đó gọi hàm với `tinh_tong(5, 7)` và in kết quả.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "12"
            }
        ]
    },
    {
        "id": 50,
        "title": "Bài 50: Unit Testing",
        "desc": "### Khái niệm\nUnit testing là quá trình kiểm thử từng đơn vị (unit) nhỏ nhất của mã nguồn (thường là hàm hoặc phương thức) một cách riêng rẽ. Thư viện `unittest` tích hợp sẵn trong Python giúp bạn viết và chạy các kịch bản kiểm thử.\n\n### Ví dụ mẫu\n```python\nimport unittest\n\ndef add(a, b):\n    return a + b\n\nclass TestAdd(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(2, 3), 5)\n\n# Để chạy, cần chạy file với cờ -m unittest\n```\n\n### Yêu cầu bài tập\nViết một hàm `multiply(a, b)` trả về tích của a và b. Sau đó, in kết quả của `multiply(3, 4)` ra màn hình.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "12"
            }
        ]
    },
    {
        "id": 51,
        "title": "Bài 51: Logging",
        "desc": "### Khái niệm\nThư viện `logging` là một công cụ mạnh mẽ để ghi lại các thông điệp theo dõi từ chương trình của bạn. So với `print()`, logging cho phép bạn phân loại thông điệp theo mức độ quan trọng (DEBUG, INFO, WARNING, ERROR, CRITICAL) và dễ dàng cấu hình để ghi ra file hoặc console.\n\n### Ví dụ mẫu\n```python\nimport logging\nlogging.basicConfig(level=logging.INFO)\n\nlogging.info('Đây là một thông điệp thông tin.')\nlogging.warning('Đây là một cảnh báo.')\n```\n\n### Yêu cầu bài tập\nImport thư viện `logging` và in ra một thông điệp ở mức INFO với nội dung `Hoc logging`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": ""
            }
        ]
    },
    {
        "id": 55,
        "title": "Bài 55: Flask - Web App đầu tiên",
        "desc": "### Khái niệm\nFlask là một micro web framework cho Python. Nó rất nhẹ và dễ bắt đầu, cho phép bạn tạo ra các ứng dụng web một cách nhanh chóng. `@app.route('/')` là một decorator để gán một URL với một hàm.\n\n### Ví dụ mẫu\n```python\n# Cần cài đặt: pip install Flask\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef hello():\n    return 'Hello from Flask!'\n\n# Để chạy, lưu file và chạy lệnh 'flask run'\n```\n\n### Yêu cầu bài tập\nDo không thể chạy web server, bạn hãy viết code Flask để tạo một route `/test` trả về chuỗi `Flask Test Passed`. Sau đó, hãy in ra chuỗi đó để xác nhận.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Flask Test Passed"
            }
        ]
    },
    {
        "id": 60,
        "title": "Bài 60: Pandas - Đọc CSV",
        "desc": "### Khái niệm\nMột trong những chức năng mạnh nhất của Pandas là đọc dữ liệu từ nhiều định dạng khác nhau. `pd.read_csv('ten_file.csv')` là hàm dùng để đọc một file CSV và chuyển nó thành một DataFrame.\n\n### Ví dụ mẫu\n```python\nimport pandas as pd\nimport io\n\n# Giả lập một file CSV\ndata = 'col1,col2\\n1,2\\n3,4'\ndf = pd.read_csv(io.StringIO(data))\nprint(df)\n```\n\n### Yêu cầu bài tập\nIn ra chuỗi `pandas.read_csv` để xác nhận bạn biết tên hàm.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "pandas.read_csv"
            }
        ]
    },
    {
        "id": 61,
        "title": "Bài 61: Pandas - GroupBy",
        "desc": "### Khái niệm\nThao tác GroupBy trong Pandas cho phép bạn nhóm các hàng dữ liệu lại với nhau dựa trên một hoặc nhiều cột, sau đó thực hiện các phép tính tổng hợp (như `sum`, `mean`, `count`) trên mỗi nhóm.\n\n### Ví dụ mẫu\n```python\nimport pandas as pd\ndata = {'Team': ['A', 'B', 'A', 'B'], 'Points': [10, 15, 8, 12]}\ndf = pd.DataFrame(data)\ngrouped = df.groupby('Team').sum()\nprint(grouped)\n```\n\n### Yêu cầu bài tập\nCho DataFrame trong ví dụ mẫu. Hãy tính và in ra tổng điểm của đội 'A'.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "18"
            }
        ]
    },
    {
        "id": 70,
        "title": "Bài 70: Matplotlib - Vẽ đồ thị",
        "desc": "### Khái niệm\n`Matplotlib` là thư viện vẽ đồ thị 2D phổ biến nhất của Python. Nó cung cấp một loạt các hàm để tạo ra các biểu đồ đường, cột, tròn, phân tán và nhiều hơn nữa. `plt.plot()` để vẽ, `plt.show()` để hiển thị.\n\n### Ví dụ mẫu\n```python\n# Cần cài đặt: pip install matplotlib\nimport matplotlib.pyplot as plt\n\nplt.plot([1, 2, 3], [4, 5, 1])\nplt.ylabel('Một vài con số')\nplt.show()\n```\n\n### Yêu cầu bài tập\nDo không thể hiển thị đồ thị, hãy `import matplotlib.pyplot as plt` và sau đó in ra chuỗi `Plot da duoc ve`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Plot da duoc ve"
            }
        ]
    },
    {
        "id": 80,
        "title": "Bài 80: Threading",
        "desc": "### Khái niệm\nThreading (đa luồng) cho phép chương trình của bạn thực hiện nhiều công việc 'gần như' đồng thời. Nó hữu ích cho các tác vụ bị chặn bởi I/O (như tải file, gọi API). Mỗi luồng là một chuỗi thực thi riêng biệt.\n\n### Ví dụ mẫu\n```python\nimport threading\nimport time\n\ndef worker():\n    print('Worker bắt đầu')\n    time.sleep(2)\n    print('Worker kết thúc')\n\nt = threading.Thread(target=worker)\nt.start()\nprint('Hàm main kết thúc')\n```\n\n### Yêu cầu bài tập\nImport thư viện `threading` và in ra chuỗi `Da import threading`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import threading"
            }
        ]
    },
    {
        "id": 85,
        "title": "Bài 85: Asyncio",
        "desc": "### Khái niệm\n`asyncio` là một thư viện để viết code đồng thời bằng cú pháp `async/await`. Nó đặc biệt mạnh cho các ứng dụng có số lượng lớn kết nối I/O (như web server, bot). `async def` định nghĩa một coroutine, và `await` tạm dừng nó để chạy các tác vụ khác.\n\n### Ví dụ mẫu\n```python\nimport asyncio\n\nasync def main():\n    print('hello')\n    await asyncio.sleep(1)\n    print('world')\n\nasyncio.run(main())\n```\n\n### Yêu cầu bài tập\nImport thư viện `asyncio` và in ra chuỗi `Da import asyncio`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import asyncio"
            }
        ]
    },
    {
        "id": 90,
        "title": "Bài 90: Scikit-learn",
        "desc": "### Khái niệm\n`Scikit-learn` là thư viện học máy (Machine Learning) hàng đầu cho Python. Nó cung cấp các công cụ đơn giản và hiệu quả cho việc khai phá và phân tích dữ liệu, được xây dựng trên NumPy, SciPy, và matplotlib.\n\n### Ví dụ mẫu\n```python\n# Cần cài đặt: pip install scikit-learn\nfrom sklearn.linear_model import LinearRegression\n\nmodel = LinearRegression()\n# Huấn luyện model với dữ liệu...\n```\n\n### Yêu cầu bài tập\n`from sklearn.model_selection import train_test_split` và in ra chuỗi `Da import scikit-learn`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import scikit-learn"
            }
        ]
    },
    {
        "id": 100,
        "title": "Bài 100: Chúc mừng!",
        "desc": "### Khái niệm\nBạn đã đi đến bài học cuối cùng! Hoàn thành bài học này đồng nghĩa với việc bạn đã có một cái nhìn tổng quan cực kỳ rộng về thế giới Python, từ những lệnh in đơn giản nhất đến các khái niệm về web, dữ liệu, và học máy. Đây là một thành tựu đáng tự hào!\n\n### Ví dụ mẫu\n```python\nprint('Tôi đã sẵn sàng cho các thử thách thực tế!')\n```\n\n### Yêu cầu bài tập\nĐể tốt nghiệp khóa học, hãy in ra chuỗi 'Khoa hoc hoan thanh!'",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Khoa hoc hoan thanh!"
            }
        ]
    }
]
