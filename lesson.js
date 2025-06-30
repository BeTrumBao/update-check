{
  "version": 2.0,
  "lessons": [
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
        "desc": "### Khái niệm\nHàm `input()` cho phép chương trình dừng lại và chờ người dùng nhập dữ liệu từ bàn phím. Dữ liệu nhập vào luôn ở dạng chuỗi (string).\n\n### Ví dụ mẫu\n```python\n# Chương trình sẽ chờ bạn nhập tên rồi mới chạy tiếp\nten_nguoi_dung = input()\nprint('Xin chào,', ten_nguoi_dung)\n```\n\n### Yêu cầu bài tập\nViết chương trình đọc một dòng từ input (sử dụng hàm `input()` không có đối số) và in ra lời chào theo mẫu `Chào ` + tên người dùng. Ví dụ, nếu input là `An`, chương trình phải in ra `Chào An`.",
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
        "title": "Bài 10: Module random",
        "desc": "### Khái niệm\nModule là một file Python chứa các hàm và biến, giúp tổ chức code. Thư viện `random` là một module có sẵn, cung cấp các hàm để tạo ra số giả ngẫu nhiên. Để sử dụng, bạn phải `import random`.\n\n### Vận dụng\n- `random.randint(a, b)`: Lấy một số nguyên ngẫu nhiên từ a đến b.\n- `random.choice(list)`: Chọn một phần tử ngẫu nhiên từ một danh sách.\n\nTrong lập trình game, `random` dùng để quyết định vật phẩm rơi ra. Trong phân tích dữ liệu, nó dùng để lấy mẫu ngẫu nhiên.\n\n### Yêu cầu bài tập\nĐể kết quả có thể kiểm tra được, hãy dùng `random.seed(42)` để cố định kết quả ngẫu nhiên. Sau đó, import thư viện `random` và in ra một số ngẫu nhiên trong khoảng từ 1 đến 10.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "10"
            }
        ]
    },
    {
        "id": 11,
        "title": "Bài 11: Module math",
        "desc": "### Khái niệm\nModule `math` cung cấp các hằng số và hàm toán học nâng cao mà các toán tử cơ bản (`+`, `-`, `*`, `/`) không có.\n\n### Vận dụng\n- `math.sqrt(x)`: Tính căn bậc hai.\n- `math.pi`: Hằng số Pi (3.14159...).\n- `math.ceil(x)`: Làm tròn lên số nguyên gần nhất.\n- `math.floor(x)`: Làm tròn xuống số nguyên gần nhất.\n\nModule `math` không thể thiếu trong các ứng dụng khoa học, kỹ thuật, đồ họa 3D.\n\n### Yêu cầu bài tập\nDùng thư viện `math`, tính và in ra căn bậc hai của 16.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "4.0"
            }
        ]
    },
    {
        "id": 12,
        "title": "Bài 12: Module time",
        "desc": "### Khái niệm\nModule `time` cung cấp các hàm liên quan đến thời gian. Chức năng quan trọng nhất của nó là đo lường thời gian thực thi và tạm dừng chương trình.\n\n### Vận dụng\n- `time.sleep(x)`: Tạm dừng chương trình trong x giây. Rất hữu ích khi bạn muốn chương trình chạy chậm lại, hoặc chờ một tác vụ khác hoàn thành.\n- `time.time()`: Trả về số giây tính từ một mốc thời gian chuẩn (Epoch). Thường dùng để đo thời gian chạy của một đoạn code.\n\n### Yêu cầu bài tập\nĐể mô phỏng việc đo thời gian, hãy import thư viện `time`. Sau đó in ra chuỗi `Start`, rồi đến chuỗi `End`. (Trong thực tế, bạn sẽ đặt `time.sleep()` vào giữa hai lệnh in này).",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Start\nEnd"
            }
        ]
    },
    {
        "id": 13,
        "title": "Bài 13: Module datetime",
        "desc": "### Khái niệm\nNếu `time` tập trung vào 'khoảng thời gian', thì `datetime` là công cụ mạnh mẽ để làm việc với ngày, tháng, năm, giờ, phút, giây cụ thể. Nó cho phép bạn thực hiện các phép toán trên ngày tháng.\n\n### Vận dụng\n- `datetime.now()`: Lấy ngày giờ hiện tại.\n- `datetime(year, month, day)`: Tạo một đối tượng ngày cụ thể.\n- `strftime('%d/%m/%Y')`: Định dạng lại cách hiển thị ngày tháng.\n\n### Yêu cầu bài tập\nSử dụng `datetime`, tạo một đối tượng đại diện cho ngày 30 tháng 6 năm 2025. Sau đó, dùng `strftime` để định dạng và in nó ra dưới dạng `30/06/2025`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "30/06/2025"
            }
        ]
    },
    {
        "id": 14,
        "title": "Bài 14: Ghi file",
        "desc": "### Khái niệm\nĐể ghi nội dung vào một file, ta dùng hàm `open()` với chế độ `'w'` (write). Cú pháp `with open(...)` rất được khuyến khích vì nó sẽ tự động đóng file sau khi dùng xong, tránh gây lỗi.\n\n### Ví dụ mẫu\n```python\nwith open('nhatky.txt', 'w', encoding='utf-8') as f:\n    f.write('Hôm nay trời đẹp.')\n```\n\n### Yêu cầu bài tập\nHãy viết code để mở một file tên `a.txt` ở chế độ ghi, ghi chuỗi `xin chao` vào file, và sau khi hoàn tất, in ra chuỗi `Da ghi file`.",
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
        "title": "Bài 16: Module turtle",
        "desc": "### Khái niệm\nThư viện `turtle` là một cách vui nhộn để học lập trình bằng cách điều khiển một 'con rùa' ảo để vẽ các hình ảnh đồ họa. Bạn có thể dùng các lệnh như `forward()`, `left()`, `right()` để vẽ hình vuông, tam giác, và nhiều hình phức tạp khác.\n\n*Lưu ý quan trọng:* Vì ứng dụng học tập này của chúng ta chạy trong môi trường văn bản, nó không thể hiển thị cửa sổ đồ họa của Turtle. Do đó, bài tập chỉ mang tính giới thiệu.\n\n### Yêu cầu bài tập\nĐể xác nhận bạn đã hiểu về sự tồn tại của thư viện này, hãy `import turtle` và sau đó in ra chuỗi `Turtle da san sang`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Turtle da san sang"
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
        "title": "Bài 21: Module json",
        "desc": "### Khái niệm\nJSON là một định dạng lưu trữ và trao đổi dữ liệu rất phổ biến. Module `json` của Python cho phép bạn làm việc với dữ liệu JSON.\n\n### Vận dụng\n- `json.dumps(dict)`: Chuyển một dictionary của Python thành một chuỗi JSON. Dùng khi bạn cần gửi dữ liệu đi qua mạng.\n- `json.loads(string)`: Chuyển một chuỗi JSON thành một dictionary của Python. Dùng khi bạn nhận dữ liệu từ một API.\n\n### Yêu cầu bài tập\nDùng thư viện `json`, chuyển dictionary `{\"name\": \"An\"}` thành một chuỗi JSON và in chuỗi đó ra.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "{\"name\": \"An\"}"
            }
        ]
    },
    {
        "id": 22,
        "title": "Bài 22: Module statistics",
        "desc": "### Khái niệm\nThư viện `statistics` cung cấp các hàm thống kê toán học đơn giản, dễ sử dụng.\n\n### Vận dụng\n- `statistics.mean(list)`: Tính giá trị trung bình cộng.\n- `statistics.median(list)`: Tìm giá trị trung vị (số ở giữa sau khi sắp xếp).\n- `statistics.mode(list)`: Tìm giá trị xuất hiện nhiều nhất.\n\n### Yêu cầu bài tập\nDùng thư viện `statistics`, tính và in ra giá trị trung bình của danh sách `[10, 20, 30]`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "20"
            }
        ]
    },
    {
        "id": 23,
        "title": "Bài 23: Module csv",
        "desc": "### Khái niệm\nCSV là định dạng file văn bản đơn giản để lưu trữ dữ liệu dạng bảng. Module `csv` giúp việc đọc và ghi các file này trở nên dễ dàng và an toàn, tự động xử lý các dấu phẩy và dấu xuống dòng trong dữ liệu.\n\n### Vận dụng\n- `csv.writer`: Để ghi dữ liệu vào file CSV.\n- `csv.reader`: Để đọc dữ liệu từ file CSV.\n\nDo không thể kiểm tra file, chúng ta sẽ mô phỏng. `io.StringIO` tạo ra một 'file' trong bộ nhớ.\n\n### Yêu cầu bài tập\nSử dụng `csv` và `io.StringIO`, tạo một writer để ghi dòng `['ten', 'tuoi']` và `['An', '20']`. Sau đó, in ra chuỗi kết quả từ `io.StringIO`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "ten,tuoi\r\nAn,20\r\n"
            }
        ]
    },
    {
        "id": 24,
        "title": "Bài 24: Module os và sys",
        "desc": "### Khái niệm\n- `os`: Tương tác với hệ điều hành (OS). Ví dụ: `os.getcwd()` lấy đường dẫn hiện tại, `os.listdir()` liệt kê file, `os.sep` là dấu phân cách đường dẫn của HĐH (`\\` cho Windows, `/` cho Linux/Mac).\n- `sys`: Tương tác với trình thông dịch Python. Ví dụ: `sys.version` xem phiên bản Python, `sys.platform` xem tên HĐH.\n\n### Yêu cầu bài tập\nImport `sys` và in ra giá trị của `sys.platform`. Kết quả sẽ là 'win32', 'linux', hoặc 'darwin' (cho macOS).",
        "test_cases": [
            {
                "input": "",
                "expected_output": "win32"
            }
        ]
    },
    {
        "id": 25,
        "title": "Bài 25: Module tkinter GUI",
        "desc": "### Khái niệm\n`tkinter` là thư viện giao diện đồ họa (GUI) tiêu chuẩn của Python. Nó cho phép bạn tạo các cửa sổ, nút bấm, ô nhập liệu và các thành phần đồ họa khác để tạo thành một ứng dụng desktop hoàn chỉnh.\n\n*Lưu ý quan trọng:* Giống như Turtle, ứng dụng này không thể hiển thị cửa sổ đồ họa của tkinter. Bài tập chỉ mang tính giới thiệu.\n\n### Yêu cầu bài tập\nĐể xác nhận bạn biết về tkinter, `import tkinter` và sau đó in ra chuỗi `tkinter da san sang`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "tkinter da san sang"
            }
        ]
    },
    {
        "id": 26,
        "title": "Bài 26: Module sqlite3",
        "desc": "### Khái niệm\n`sqlite3` là một thư viện tích hợp sẵn cho phép bạn tạo và quản lý các cơ sở dữ liệu SQLite. SQLite là một CSDL quan hệ nhỏ gọn, không cần máy chủ riêng, lưu toàn bộ dữ liệu vào một file duy nhất. Chính ứng dụng này cũng đang dùng `sqlite3`!\n\n### Vận dụng\n- `sqlite3.connect('ten_file.db')`: Kết nối hoặc tạo một file CSDL.\n- `cursor.execute('SQL query')`: Thực thi một câu lệnh SQL.\n\n### Yêu cầu bài tập\nImport thư viện `sqlite3` và in ra phiên bản của nó bằng cách truy cập biến `sqlite3.sqlite_version`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "3.45.3"
            }
        ]
    },
    {
        "id": 27,
        "title": "Bài 27: Module re",
        "desc": "### Khái niệm\nBiểu thức chính quy (Regular Expression) là một chuỗi các ký tự tạo thành một mẫu tìm kiếm. Module `re` của Python cho phép bạn dùng các mẫu này để tìm kiếm, khớp và thay thế trong văn bản.\n\n### Vận dụng\n- `re.findall(mau, chuoi)`: Tìm tất cả các chuỗi con khớp với mẫu.\n- `re.search(mau, chuoi)`: Tìm lần xuất hiện đầu tiên.\n- `re.sub(mau, thay_the, chuoi)`: Tìm và thay thế.\n\n### Yêu cầu bài tập\nDùng thư viện `re`, tìm tất cả các số trong chuỗi `abc123def456` và in danh sách kết quả ra.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "['123', '456']"
            }
        ]
    },
    {
        "id": 28,
        "title": "Bài 28: Module requests (GET)",
        "desc": "### Khái niệm\nThư viện `requests` (cần cài đặt) giúp việc gửi các yêu cầu HTTP trở nên cực kỳ đơn giản. Nó là công cụ tiêu chuẩn để tương tác với các API và website.\n\n### Vận dụng\n- `requests.get(url)`: Gửi yêu cầu lấy dữ liệu từ một URL.\n- `response.status_code`: Kiểm tra mã trạng thái (200 là OK, 404 là Not Found).\n- `response.json()`: Chuyển đổi nội dung trả về từ JSON thành dictionary.\n\n### Yêu cầu bài tập\nĐể kiểm tra, bạn hãy `import requests` và sau đó in ra chuỗi `Da import requests`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import requests"
            }
        ]
    },
    {
        "id": 29,
        "title": "Bài 29: Module BeautifulSoup",
        "desc": "### Khái niệm\n`BeautifulSoup` là một thư viện dùng để 'cào' dữ liệu (web scraping) từ các file HTML và XML. Nó tạo ra một cây phân tích cú pháp cho trang, giúp việc trích xuất dữ liệu trở nên dễ dàng.\n\n### Vận dụng\nThường được dùng kết hợp với `requests`. Bạn dùng `requests` để tải mã HTML của trang web, sau đó đưa mã HTML đó cho `BeautifulSoup` để xử lý và lấy ra các thông tin cần thiết như tiêu đề, giá sản phẩm, các đường link...\n\n### Yêu cầu bài tập\nCho một chuỗi HTML đơn giản: `html = '<h1>Đây là tiêu đề</h1>'`. Hãy dùng `BeautifulSoup` để lấy ra và in nội dung text bên trong thẻ `<h1>`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Đây là tiêu đề"
            }
        ]
    },
    {
        "id": 30,
        "title": "Bài 30: Module NumPy",
        "desc": "### Khái niệm\n`NumPy` (Numerical Python) là thư viện nền tảng cho tính toán khoa học. Nó cung cấp một đối tượng mảng đa chiều hiệu suất cao và các công cụ để làm việc với các mảng này, nhanh hơn nhiều so với list thông thường.\n\n### Vận dụng\n- `np.array(list)`: Tạo một mảng NumPy.\n- `arr.sum()`: Tính tổng.\n- `arr.mean()`: Tính trung bình.\n- Các phép toán trên mảng được thực hiện trên từng phần tử.\n\n### Yêu cầu bài tập\nDùng thư viện `numpy`, tạo một mảng chứa các số `[10, 20, 30]` và in ra tổng của mảng đó.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "60"
            }
        ]
    },
    {
        "id": 31,
        "title": "Bài 31: Module Pandas",
        "desc": "### Khái niệm\n`Pandas` là thư viện mã nguồn mở cung cấp các cấu trúc dữ liệu và công cụ phân tích dữ liệu hiệu suất cao. Cấu trúc dữ liệu chính là `DataFrame`, tương tự như một bảng tính Excel, cho phép bạn lọc, nhóm, và phân tích dữ liệu một cách mạnh mẽ.\n\n### Yêu cầu bài tập\nTạo một DataFrame đơn giản từ dictionary `{'col1': [1, 2], 'col2': [3, 4]}`. Sau đó, in ra giá trị ở hàng 0, cột 'col2'.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "3"
            }
        ]
    },
    {
        "id": 32,
        "title": "Bài 32: Tương tác API (POST)",
        "desc": "### Khái niệm\nNgoài `GET` để lấy dữ liệu, `requests.post(url, json=data)` được dùng để gửi dữ liệu mới lên một máy chủ hoặc API. Dữ liệu thường được gửi ở định dạng JSON.\n\n### Vận dụng\nKhi bạn đăng ký một tài khoản mới trên website, trình duyệt sẽ gửi một yêu cầu POST chứa tên đăng nhập và mật khẩu của bạn đến server.\n\n### Yêu cầu bài tập\nĐể kiểm tra, hãy `import requests` và in ra chuỗi `San sang gui POST`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "San sang gui POST"
            }
        ]
    },
    {
        "id": 33,
        "title": "Bài 33: Module pyttsx3",
        "desc": "### Khái niệm\n`pyttsx3` là một thư viện chuyển văn bản thành giọng nói (Text-to-Speech) hoạt động ngoại tuyến. Nó cho phép chương trình của bạn 'nói' chuyện. Rất hữu ích cho việc tạo ra các trợ lý ảo hoặc các ứng dụng hỗ trợ người dùng.\n\n*Lưu ý quan trọng:* Ứng dụng này không thể phát âm thanh. Bài tập chỉ mang tính giới thiệu.\n\n### Yêu cầu bài tập\nĐể xác nhận bạn đã hiểu về thư viện này, hãy `import pyttsx3` và sau đó in ra chuỗi `Da import pyttsx3`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import pyttsx3"
            }
        ]
    },
    {
        "id": 34,
        "title": "Bài 34: Module pytube",
        "desc": "### Khái niệm\n`pytube` là một thư viện nhẹ, không có sự phụ thuộc, dùng để tải video từ YouTube. Nó cho phép bạn truy cập các luồng video và âm thanh khác nhau để tải về với chất lượng mong muốn.\n\n*Lưu ý quan trọng:* Việc tải video có thể tốn thời gian và băng thông. Ứng dụng này không thực hiện tải thật. Bài tập chỉ mang tính giới thiệu.\n\n### Yêu cầu bài tập\nĐể xác nhận bạn đã hiểu về thư viện này, hãy `from pytube import YouTube` và sau đó in ra chuỗi `Da import pytube`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import pytube"
            }
        ]
    },
    {
        "id": 35,
        "title": "Bài 35: Module OpenCV",
        "desc": "### Khái niệm\n`OpenCV` (tên khi import là `cv2`) là một thư viện khổng lồ về thị giác máy tính. Nó cung cấp hàng ngàn thuật toán để đọc, xử lý, nhận dạng vật thể, theo dõi chuyển động, và phân tích hình ảnh/video.\n\n*Lưu ý quan trọng:* Xử lý ảnh là một tác vụ phức tạp và thường cần hiển thị cửa sổ đồ họa. Ứng dụng này không thể làm vậy. Bài tập chỉ mang tính giới thiệu.\n\n### Yêu cầu bài tập\nĐể xác nhận bạn đã hiểu về thư viện này, hãy `import cv2` và sau đó in ra chuỗi `Da import cv2`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import cv2"
            }
        ]
    },
    {
        "id": 36,
        "title": "Bài 36: Module Selenium",
        "desc": "### Khái niệm\n`Selenium` là một công cụ mạnh mẽ để tự động hóa các trình duyệt web. Nó có thể tự mở Chrome/Firefox, click vào các nút, điền vào form, và lấy dữ liệu, giống hệt như một người dùng thật. Nó thường được sử dụng cho việc kiểm thử tự động và cào dữ liệu từ các trang web phức tạp.\n\n*Lưu ý quan trọng:* Selenium cần cài đặt thêm WebDriver cho trình duyệt, và sẽ mở một cửa sổ trình duyệt thật. Ứng dụng này không thể làm vậy. Bài tập chỉ mang tính giới thiệu.\n\n### Yêu cầu bài tập\nĐể xác nhận bạn đã hiểu về thư viện này, hãy `from selenium import webdriver` và sau đó in ra chuỗi `Da import selenium`.",
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
        "desc": "### Khái niệm\nThư viện `logging` là một công cụ mạnh mẽ để ghi lại các thông điệp theo dõi từ chương trình của bạn. So với `print()`, logging cho phép bạn phân loại thông điệp theo mức độ quan trọng (DEBUG, INFO, WARNING, ERROR, CRITICAL) và dễ dàng cấu hình để ghi ra file hoặc console.\n\n### Yêu cầu bài tập\nImport thư viện `logging`. Cấu hình cơ bản với `logging.basicConfig(level=logging.INFO)`. Sau đó, ghi lại một thông điệp ở mức INFO với nội dung `Hoc logging`. Vì `basicConfig` in ra console, hệ thống sẽ bắt được output này.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "INFO:root:Hoc logging"
            }
        ]
    },
    {
        "id": 55,
        "title": "Bài 55: Flask - Web App đầu tiên",
        "desc": "### Khái niệm\nFlask là một micro web framework cho Python. Nó rất nhẹ và dễ bắt đầu, cho phép bạn tạo ra các ứng dụng web một cách nhanh chóng. `@app.route('/')` là một decorator để gán một URL với một hàm.\n\n*Lưu ý quan trọng:* Ứng dụng này không thể chạy một web server. Bài tập chỉ mang tính giới thiệu.\n\n### Yêu cầu bài tập\nĐể xác nhận bạn đã hiểu về thư viện này, `from flask import Flask` và sau đó in ra chuỗi `Da import Flask`.",
        "test_cases": [
            {
                "input": "",
                "expected_output": "Da import Flask"
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
        "desc": "### Khái niệm\n`Matplotlib` là thư viện vẽ đồ thị 2D phổ biến nhất của Python. Nó cung cấp một loạt các hàm để tạo ra các biểu đồ đường, cột, tròn, phân tán và nhiều hơn nữa.\n\n*Lưu ý quan trọng:* Ứng dụng này không thể hiển thị cửa sổ đồ họa. Bài tập chỉ mang tính giới thiệu.\n\n### Yêu cầu bài tập\nĐể xác nhận bạn đã hiểu về thư viện này, `import matplotlib.pyplot as plt` và sau đó in ra chuỗi `Plot da duoc ve`.",
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
        "desc": "### Khái niệm\nThreading (đa luồng) cho phép chương trình của bạn thực hiện nhiều công việc 'gần như' đồng thời. Nó hữu ích cho các tác vụ bị chặn bởi I/O (như tải file, gọi API). Mỗi luồng là một chuỗi thực thi riêng biệt.\n\n*Lưu ý quan trọng:* Việc kiểm tra đa luồng rất phức tạp. Bài tập chỉ mang tính giới thiệu.\n\n### Yêu cầu bài tập\nImport thư viện `threading` và in ra chuỗi `Da import threading`.",
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
        "desc": "### Khái niệm\n`asyncio` là một thư viện để viết code đồng thời bằng cú pháp `async/await`. Nó đặc biệt mạnh cho các ứng dụng có số lượng lớn kết nối I/O (như web server, bot). `async def` định nghĩa một coroutine, và `await` tạm dừng nó để chạy các tác vụ khác.\n\n*Lưu ý quan trọng:* Giống như threading, kiểm tra code bất đồng bộ rất phức tạp. Bài tập chỉ mang tính giới thiệu.\n\n### Yêu cầu bài tập\nImport thư viện `asyncio` và in ra chuỗi `Da import asyncio`.",
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
        "desc": "### Khái niệm\n`Scikit-learn` là thư viện học máy (Machine Learning) hàng đầu cho Python. Nó cung cấp các công cụ đơn giản và hiệu quả cho việc khai phá và phân tích dữ liệu, được xây dựng trên NumPy, SciPy, và matplotlib.\n\n*Lưu ý quan trọng:* Học máy là một lĩnh vực lớn và phức tạp. Bài tập chỉ mang tính giới thiệu.\n\n### Yêu cầu bài tập\n`from sklearn.model_selection import train_test_split` và in ra chuỗi `Da import scikit-learn`.",
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
}
