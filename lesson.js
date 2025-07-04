{
  "version": 3.5,
  "changelog": [
    "Thêm Ghi Chú",
    "Cập nhật nội dung các bài chỉ 'import' để có ví dụ và giải thích thực tế hơn"
  ],
  "lessons": [
    {
      "id": 1,
      "difficulty": 1,
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
      "difficulty": 1,
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
      "difficulty": 1,
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
      "difficulty": 1,
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
      "difficulty": 1,
      "title": "Bài 5: Vòng lặp for",
      "desc": "### Khái niệm\nVòng lặp `for` được sử dụng để lặp qua một chuỗi các phần tử (như danh sách, hoặc một dãy số). Hàm `range(n)` tạo ra một dãy số từ 0 đến n-1.\n\n### Ví dụ mẫu\n```python\n# In các số từ 0 đến 2\nfor i in range(3):\n    print('Số:', i)\n```\n\n### Yêu cầu bài tập\nDùng vòng lặp `for` và hàm `range(5)` để in ra các số từ 0 đến 4, mỗi số trên một dòng , nhớ ấn phím [Tab] 1 cái hoặc ấn phím cách 4 lần nhaaa.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "0\n1\n2\n3\n4"
        }
      ]
    },
    {
      "id": 6,
      "difficulty": 1,
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
      "difficulty": 1,
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
      "difficulty": 1,
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
      "difficulty": 1,
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
      "difficulty": 1,
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
      "difficulty": 1,
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
      "difficulty": 1,
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
      "difficulty": 1,
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
      "difficulty": 1,
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
      "difficulty": 1,
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
      "difficulty": 1,
      "title": "Bài 16: Module turtle",
      "desc": "### Khái niệm\nThư viện `turtle` là một cách vui nhộn để học lập trình bằng cách điều khiển một 'con rùa' ảo để vẽ các hình ảnh đồ họa. Bạn có thể dùng các lệnh như `forward()`, `left()`, `right()` để vẽ hình vuông, tam giác, và nhiều hình phức tạp khác.\n\n### Vận dụng\n`turtle` thường được dùng để dạy lập trình cho người mới bắt đầu, minh họa các thuật toán đơn giản, hoặc tạo ra các hình ảnh nghệ thuật cơ bản. Các lệnh cơ bản bao gồm `turtle.forward(distance)` để tiến lên, `turtle.backward(distance)` để lùi, `turtle.right(angle)` và `turtle.left(angle)` để quay.\n\n*Lưu ý quan trọng:*\nMôi trường học tập này của chúng ta chạy trong môi trường văn bản, nó **không thể hiển thị cửa sổ đồ họa** của Turtle. Do đó, bạn sẽ không thấy con rùa di chuyển hay hình ảnh được vẽ. Mục tiêu của bài tập này là để bạn hiểu về sự tồn tại, khái niệm và cú pháp sử dụng cơ bản của thư viện này. Để thực sự chạy và nhìn thấy kết quả, bạn cần chạy code này trên máy tính cá nhân của mình, trong một môi trường phát triển Python đầy đủ.\n\n### Yêu cầu bài tập\nĐể bạn hiểu cú pháp và mục đích, hãy viết code để:\n1.  **Import** thư viện `turtle`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong lenh ve hinh vuong voi Turtle`.\n3.  **Viết các lệnh của Turtle** để vẽ một hình vuông cạnh 100 bước (tức là 4 lần tiến và 4 lần quay 90 độ), nhưng hãy **comment (ghi chú)** chúng lại để chúng không chạy lỗi trong môi trường này.\n4.  Cuối cùng, in ra chuỗi `Turtle da san sang` để xác nhận.",
      "test_cases": [
        {
          "input": "import turtle\nprint(\"Dang mo phong lenh ve hinh vuong voi Turtle\")\n\n# Cac lenh Turtle nay khong chay duoc trong moi truong van ban nay.\n# Neu ban chay tren may tinh ca nhan, ban se thay mot cua so do hoa hien ra.\n\n# tao doi tuong turtle\n# t = turtle.Turtle()\n\n# ve hinh vuong\n# t.forward(100)\n# t.left(90)\n# t.forward(100)\n# t.left(90)\n# t.forward(100)\n# t.left(90)\n# t.forward(100)\n# t.left(90)\n\n# Giu cua so mo (chi dung tren may tinh that)\n# turtle.done()\n\nprint(\"Turtle da san sang\")",
          "expected_output": "Dang mo phong lenh ve hinh vuong voi Turtle\nTurtle da san sang"
        }
      ]
    },
    {
      "id": 17,
      "difficulty": 2,
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
      "difficulty": 2,
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
      "difficulty": 1,
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
      "difficulty": 1,
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
      "difficulty": 2,
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
      "difficulty": 1,
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
      "difficulty": 2,
      "title": "Bài 23: Module csv",
      "desc": "### Khái niệm\nCSV là định dạng file văn bản đơn giản để lưu trữ dữ liệu dạng bảng. Module `csv` giúp việc đọc và ghi các file này trở nên dễ dàng và an toàn, tự động xử lý các dấu phẩy và dấu xuống dòng trong dữ liệu.\n\n### Vận dụng\n- `csv.writer`: Để ghi dữ liệu vào file CSV.\n- `csv.reader`: Để đọc dữ liệu từ file CSV.\n\nDo không thể kiểm tra file, chúng ta sẽ mô phỏng. `io.StringIO` tạo ra một 'file' trong bộ nhớ.\n\n### Yêu cầu bài tập\nSử dụng `csv` và `io.StringIO`, tạo một writer để ghi dòng `['ten', 'tuoi']` và `['An', '20']`. Sau đó, in ra chuỗi kết quả từ `io.StringIO`.",
      "test_cases": [
        {
          "input": "import csv\nimport io\n\noutput = io.StringIO()\nwriter = csv.writer(output)\n\nwriter.writerow(['ten', 'tuoi'])\nwriter.writerow(['An', '20'])\n\nprint(output.getvalue())",
          "expected_output": "ten,tuoi\r\nAn,20\r\n"
        }
      ]
    },
    {
      "id": 24,
      "difficulty": 1,
      "title": "Bài 24: Module os và sys",
      "desc": "### Khái niệm\n- `os`: Tương tác với hệ điều hành (OS). Ví dụ: `os.getcwd()` lấy đường dẫn hiện tại, `os.listdir()` liệt kê file, `os.sep` là dấu phân cách đường dẫn của HĐH (`\\` cho Windows, `/` cho Linux/Mac).\n- `sys`: Tương tác với trình thông dịch Python. Ví dụ: `sys.version` xem phiên bản Python, `sys.platform` xem tên HĐH.\n\n### Yêu cầu bài tập\nĐể đảm bảo code chạy trên mọi HĐH, hãy import `sys` và in ra tên kiểu dữ liệu của `sys.platform`. Kết quả sẽ luôn là 'str'.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "<class 'str'>"
        }
      ]
    },
    {
      "id": 25,
      "difficulty": 2,
      "title": "Bài 25: Module tkinter GUI",
      "desc": "### Khái niệm\n`tkinter` là thư viện giao diện đồ họa (GUI) tiêu chuẩn của Python. Nó cho phép bạn tạo các cửa sổ, nút bấm, ô nhập liệu và các thành phần đồ họa khác để tạo thành một ứng dụng desktop hoàn chỉnh. `tkinter` giúp bạn hiểu các khái niệm về lập trình hướng sự kiện (event-driven programming).\n\n### Vận dụng\nBạn có thể dùng `tkinter` để tạo các ứng dụng desktop đơn giản (máy tính, trình xem ảnh), công cụ nội bộ, hoặc ứng dụng giáo dục. Các thành phần chính bao gồm `Tk()` (cửa sổ chính), `Label` (nhãn), `Button` (nút), `Entry` (ô nhập liệu), và các phương thức sắp xếp như `pack()`.\n\n*Lưu ý quan trọng:*\nMôi trường bạn đang học **không thể hiển thị cửa sổ đồ họa** của `tkinter`. Do đó, bạn sẽ không thấy ứng dụng GUI hiện lên. Bài tập này chỉ mang tính giới thiệu về thư viện và cách bạn có thể bắt đầu xây dựng một ứng dụng GUI trên máy tính cá nhân của mình.\n\n### Yêu cầu bài tập\nĐể bạn nắm được cấu trúc cơ bản của một ứng dụng `tkinter`, hãy viết code để:\n1.  **Import** thư viện `tkinter`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong ung dung Tkinter co ban`.\n3.  **Viết các lệnh cơ bản** để tạo một cửa sổ và một nhãn, nhưng hãy **comment (ghi chú)** chúng lại để chúng không chạy lỗi trong môi trường này.\n4.  Cuối cùng, in ra chuỗi `tkinter da san sang` để xác nhận.",
      "test_cases": [
        {
          "input": "import tkinter\n\nprint(\"Dang mo phong ung dung Tkinter co ban\")\n\n# Cac lenh Tkinter nay khong chay duoc trong moi truong van ban nay.\n# Neu ban chay tren may tinh ca nhan, ban se thay mot cua so ung dung hien ra.\n\n# root = tkinter.Tk() # Tao cua so chinh\n# root.title(\"Ung dung cua toi\") # Dat tieu de cho cua so\n\n# label = tkinter.Label(root, text=\"Xin chao, day la Tkinter!\") # Tao mot nhan\n# label.pack() # Them nhan vao cua so\n\n# root.mainloop() # Khoi chay vong lap su kien\n\nprint(\"tkinter da san sang\")",
          "expected_output": "Dang mo phong ung dung Tkinter co ban\ntkinter da san sang"
        }
      ]
    },
    {
      "id": 26,
      "difficulty": 2,
      "title": "Bài 26: Module sqlite3",
      "desc": "### Khái niệm\n`sqlite3` là một thư viện tích hợp sẵn trong Python, cho phép bạn làm việc với cơ sở dữ liệu (CSDL) **SQLite**. SQLite là một CSDL quan hệ nhỏ gọn, **không yêu cầu một máy chủ riêng**. Toàn bộ CSDL được lưu trữ trong một **file duy nhất** trên đĩa hoặc trong bộ nhớ (RAM).\n\n### Vận dụng\n`sqlite3` cực kỳ tiện lợi cho các ứng dụng nhỏ, ứng dụng di động, các file cấu hình, hoặc làm CSDL tạm thời cho mục đích phát triển và kiểm thử. Các bước cơ bản: `sqlite3.connect()` để kết nối, tạo `cursor` để thực thi câu lệnh SQL (`CREATE TABLE`, `INSERT`, `SELECT`), `connection.commit()` để lưu thay đổi, và `connection.close()` để đóng kết nối. Sử dụng `with` statement là cách tốt nhất để đảm bảo kết nối được đóng tự động.\n\n### Yêu cầu bài tập\nHãy viết code để:\n1.  **Import** thư viện `sqlite3`.\n2.  **Kết nối** đến một cơ sở dữ liệu trong bộ nhớ (dùng `':memory:'`) để không tạo file thật.\n3.  **Tạo một bảng** tên là `students` với các cột `id` (INTEGER PRIMARY KEY), `name` (TEXT), và `grade` (INTEGER).\n4.  **Chèn (INSERT)** hai bản ghi vào bảng: `('Alice', 90)` và `('Bob', 85)`.\n5.  **Truy vấn (SELECT)** tất cả các sinh viên và in ra tên và điểm của sinh viên đầu tiên tìm được.\n6.  Đảm bảo kết nối được đóng một cách an toàn (sử dụng `try...finally` hoặc `with` statement).",
      "test_cases": [
        {
          "input": "import sqlite3\n\nconn = None\ntry:\n    conn = sqlite3.connect(':memory:') # Tao CSDL trong RAM\n    cursor = conn.cursor()\n\n    print(\"Đã kết nối SQLite và tạo cursor.\")\n\n    # Tao bang students\n    cursor.execute('''\n        CREATE TABLE students (\n            id INTEGER PRIMARY KEY AUTOINCREMENT,\n            name TEXT NOT NULL,\n            grade INTEGER\n        )\n    ''')\n    print(\"Đã tạo bảng 'students'.\")\n\n    # Chen du lieu\n    cursor.execute(\"INSERT INTO students (name, grade) VALUES ('Alice', 90)\")\n    cursor.execute(\"INSERT INTO students (name, grade) VALUES ('Bob', 85)\")\n    conn.commit() # Luu thay doi vao CSDL\n    print(\"Đã chèn dữ liệu vào bảng.\")\n\n    # Truy van du lieu\n    cursor.execute(\"SELECT name, grade FROM students ORDER BY id ASC\")\n    first_student = cursor.fetchone() # Lay ban ghi dau tien\n\n    if first_student:\n        print(f\"Sinh viên đầu tiên: {first_student[0]}, Điểm: {first_student[1]}\")\n    else:\n        print(\"Không tìm thấy sinh viên nào.\")\n\nexcept sqlite3.Error as e:\n    print(f\"Lỗi SQLite xảy ra: {e}\")\nfinally:\n    if conn:\n        conn.close()\n        print(\"Đã đóng kết nối CSDL.\")",
          "expected_output": "Đã kết nối SQLite và tạo cursor.\nĐã tạo bảng 'students'.\nĐã chèn dữ liệu vào bảng.\nSinh viên đầu tiên: Alice, Điểm: 90\nĐã đóng kết nối CSDL."
        }
      ]
    },
    {
      "id": 27,
      "difficulty": 2,
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
      "difficulty": 2,
      "title": "Bài 28: Module requests (GET)",
      "desc": "### Khái niệm\nThư viện `requests` là một trong những thư viện Python phổ biến nhất, cho phép bạn gửi các yêu cầu HTTP (ví dụ: GET, POST) đến các máy chủ web. Nó giúp chương trình Python của bạn 'giao tiếp' với các website và API (Application Programming Interface) một cách cực kỳ đơn giản.\n\n**API** là tập hợp các quy tắc và định dạng mà các phần mềm có thể sử dụng để giao tiếp với nhau. **Phương thức `GET`** dùng để **yêu cầu dữ liệu** từ một tài nguyên được chỉ định.\n\n### Vận dụng\nBạn sẽ dùng `requests.get()` để lấy dữ liệu từ API (thời tiết, tỷ giá), web scraping, hoặc tương tác với dịch vụ web. Các thuộc tính quan trọng của đối tượng `response` là `response.status_code` (mã trạng thái), `response.text` (nội dung văn bản), và `response.json()` (chuyển đổi sang dictionary/list Python).\n\n### Yêu cầu bài tập\nVì chúng ta không thể gọi API thực tế để tránh phụ thuộc vào mạng và API bên ngoài, chúng ta sẽ mô phỏng một phản hồi. Hãy viết code để:\n1.  **Tạo một class `MockResponse` đơn giản** để giả lập đối tượng phản hồi của `requests`, với các thuộc tính `text` và `status_code`.\n2.  Tạo một đối tượng `MockResponse` với `status_code = 200` và `text` chứa một chuỗi JSON đơn giản, ví dụ: `'{\"thong_bao\": \"Du lieu da duoc lay thanh cong!\"}'`.\n3.  Truy cập thuộc tính `text` của đối tượng `response` giả lập và in nó ra.\n4.  Sử dụng `json.loads()` (cần import `json`) để chuyển đổi chuỗi JSON đó thành dictionary Python và in ra giá trị của key `thong_bao`.\n5.  Cuối cùng, in ra thông báo `Da xu ly GET mo phong` để xác nhận.",
      "test_cases": [
        {
          "input": "import json\n\nclass MockResponse:\n    def __init__(self, text_content, status):\n        self.text = text_content\n        self.status_code = status\n\n    def json(self):\n        return json.loads(self.text)\n\n    def raise_for_status(self):\n        if 400 <= self.status_code < 600:\n            raise Exception(f\"HTTP Error: {self.status_code}\")\n\nprint(\"Đang mô phỏng yêu cầu GET.\")\n\nmock_data = '{\"thong_bao\": \"Du lieu da duoc lay thanh cong!\"}'\nresponse_mock = MockResponse(mock_data, 200)\n\nprint(f\"Nội dung phản hồi: {response_mock.text}\")\nprint(f\"Mã trạng thái: {response_mock.status_code}\")\n\ndata_from_json = json.loads(response_mock.text)\nprint(f\"Dữ liệu JSON sau khi chuyển đổi: {data_from_json['thong_bao']}\")\n\nprint(\"Da xu ly GET mo phong\")",
          "expected_output": "Đang mô phỏng yêu cầu GET.\nNội dung phản hồi: {\"thong_bao\": \"Du lieu da duoc lay thanh cong!\"}\nMã trạng thái: 200\nDữ liệu JSON sau khi chuyển đổi: Du lieu da duoc lay thanh cong!\nDa xu ly GET mo phong"
        }
      ]
    },
    {
      "id": 29,
      "difficulty": 2,
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
      "difficulty": 2,
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
      "difficulty": 2,
      "title": "Bài 31: Module Pandas",
      "desc": "### Khái niệm\n`Pandas` là một thư viện mã nguồn mở cung cấp các cấu trúc dữ liệu và công cụ phân tích dữ liệu hiệu suất cao. Cấu trúc dữ liệu chính là `DataFrame`, tương tự như một bảng tính Excel, cho phép bạn lọc, nhóm, và phân tích dữ liệu một cách mạnh mẽ.\n\n### Yêu cầu bài tập\nTạo một DataFrame đơn giản từ dictionary `{'col1': [1, 2], 'col2': [3, 4]}`. Sau đó, in ra giá trị ở hàng 0, cột 'col2'.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "3"
        }
      ]
    },
    {
      "id": 32,
      "difficulty": 2,
      "title": "Bài 32: Tương tác API (POST) - Gửi dữ liệu lên Server",
      "desc": "### Khái niệm\nNgoài `GET` để lấy dữ liệu, **phương thức `POST`** trong HTTP được dùng để **gửi dữ liệu mới** lên một máy chủ hoặc API. Dữ liệu thường được gửi trong phần thân (body) của yêu cầu. Ví dụ: khi bạn điền một form trên website (đăng ký tài khoản, gửi bình luận), dữ liệu đó thường được gửi bằng yêu cầu POST.\n\n### Vận dụng\nBạn sẽ dùng `requests.post()` khi đăng ký/đăng nhập, tạo tài nguyên mới (bài viết, sản phẩm), gửi form dữ liệu, hoặc tải file lên server. `requests.post(url, data=payload, json=json_payload)` cho phép bạn gửi dữ liệu dạng form hoặc JSON.\n\n### Yêu cầu bài tập\nVì không thể gửi yêu cầu POST thật trong môi trường này, chúng ta sẽ mô phỏng quá trình tạo dữ liệu để gửi. Hãy viết code để:\n1.  **Import** thư viện `json` (để chuyển đổi dictionary thành chuỗi JSON).\n2.  Tạo một dictionary Python đại diện cho dữ liệu bạn muốn gửi (ví dụ: `{'ten_nguoi_dung': 'Tester', 'mat_khau': '123456'}`).\n3.  Sử dụng `json.dumps()` để chuyển đổi dictionary này thành một chuỗi JSON. Đây là chuỗi mà `requests` (trong thực tế) sẽ gửi đi trong phần thân yêu cầu POST.\n4.  In ra chuỗi JSON đã tạo và thông báo `San sang gui POST mo phong`.",
      "test_cases": [
        {
          "input": "import json\n\nprint(\"Đang mô phỏng yêu cầu POST.\")\n\ndata_to_send = {\n    \"ten_nguoi_dung\": \"Tester\",\n    \"mat_khau\": \"123456\"\n}\n\njson_payload = json.dumps(data_to_send)\n\nprint(f\"Dữ liệu JSON sẽ được gửi đi: {json_payload}\")\nprint(\"San sang gui POST mo phong\")",
          "expected_output": "Đang mô phỏng yêu cầu POST.\nDữ liệu JSON sẽ được gửi đi: {\"ten_nguoi_dung\": \"Tester\", \"mat_khau\": \"123456\"}\nSan sang gui POST mo phong"
        }
      ]
    },
    {
      "id": 33,
      "difficulty": 2,
      "title": "Bài 33: Module pyttsx3",
      "desc": "### Khái niệm\n`pyttsx3` là một thư viện chuyển văn bản thành giọng nói (Text-to-Speech) hoạt động **ngoại tuyến** (offline). Nó cho phép chương trình của bạn 'nói' chuyện bằng cách sử dụng các công cụ TTS đã có trên hệ điều hành.\n\n### Vận dụng\nBạn có thể dùng `pyttsx3` để tạo trợ lý ảo, ứng dụng hỗ trợ người dùng (đọc văn bản), cảnh báo tự động, hoặc các ứng dụng giáo dục. Các bước cơ bản: `pyttsx3.init()` để khởi tạo, `engine.say(\"Nội dung\")` để nói, và `engine.runAndWait()` để chờ hoàn tất.\n\n*Lưu ý quan trọng:*\nMôi trường bạn đang học **không thể phát ra âm thanh** hoặc tương tác trực tiếp với các công cụ TTS của hệ điều hành. Do đó, bạn sẽ không nghe thấy giọng nói khi chạy code này. Bài tập này chỉ mang tính giới thiệu về thư viện và khả năng của nó. Để nghe được âm thanh, bạn cần chạy code này trên máy tính cá nhân của mình.\n\n### Yêu cầu bài tập\nHãy viết code để:\n1.  **Import** thư viện `pyttsx3`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong Text-to-Speech voi pyttsx3`.\n3.  **Viết các lệnh cơ bản** để khởi tạo engine và nói một câu, nhưng hãy **comment (ghi chú)** chúng lại để chúng không chạy lỗi hoặc gây ra lỗi trong môi trường này.\n4.  Cuối cùng, in ra chuỗi `Da import pyttsx3` để xác nhận.",
      "test_cases": [
        {
          "input": "import pyttsx3\n\nprint(\"Dang mo phong Text-to-Speech voi pyttsx3\")\n\n# Cac lenh pyttsx3 nay khong chay duoc va khong phat ra am thanh\n# trong moi truong van ban nay.\n# Neu ban chay tren may tinh ca nhan, ban se nghe thay am thanh.\n\n# Khoi tao bo doc\n# engine = pyttsx3.init()\n\n# Dat toc do noi (tuy chon)\n# current_rate = engine.getProperty('rate')\n# engine.setProperty('rate', 150) # Toc do mac dinh thuong la 200\n\n# Dat am luong (tuy chon, tu 0.0 den 1.0)\n# engine.setProperty('volume', 0.9)\n\n# Chon giong doc (tuy chon, cac giong co san tuy thuoc he dieu hanh)\n# voices = engine.getProperty('voices')\n# for voice in voices:\n#     # print(f\"ID: {voice.id}, Name: {voice.name}, Lang: {voice.languages[0] if voice.languages else 'N/A'}\")\n#     if 'vietnam' in voice.name.lower() or 'zira' in voice.name.lower(): # Vi du chon giong tieng Viet hoac Zira\n#         engine.setProperty('voice', voice.id)\n#         break\n\n# Noi mot cau\n# engine.say(\"Chào bạn, tôi là trợ lý ảo Python.\")\n\n# Doi cho den khi qua trinh noi hoan tat\n# engine.runAndWait()\n\n# print(\"Đã hoàn tất quá trình mô phỏng nói.\")\n\nprint(\"Da import pyttsx3\")",
          "expected_output": "Dang mo phong Text-to-Speech voi pyttsx3\nDa import pyttsx3"
        }
      ]
    },
    {
      "id": 34,
      "difficulty": 2,
      "title": "Bài 34: Module pytube",
      "desc": "### Khái niệm\n`pytube` là một thư viện nhẹ, không có sự phụ thuộc, dùng để **tải video và âm thanh từ YouTube**. Nó cho phép bạn truy cập các luồng (streams) khác nhau của video (độ phân giải, chỉ âm thanh) và tải về phiên bản mong muốn.\n\n### Vận dụng\nBạn có thể dùng `pytube` để tải video xem offline, tải nhạc, nghiên cứu dữ liệu video, hoặc xây dựng công cụ quản lý thư viện đa phương tiện. Các bước cơ bản: Tạo đối tượng `YouTube('URL')`, lọc các luồng với `yt.streams.filter(...)`, và dùng `stream.download()` để tải xuống.\n\n*Lưu ý quan trọng:*\nViệc tải video có thể tốn thời gian và băng thông. Hơn nữa, việc tải nội dung từ YouTube cần tuân thủ các điều khoản dịch vụ của YouTube và luật bản quyền. Môi trường bạn đang học **không thực hiện việc tải thật** để tránh các vấn đề về tài nguyên và pháp lý. Bài tập này chỉ mang tính giới thiệu về thư viện và cách nó hoạt động.\n\n### Yêu cầu bài tập\nHãy viết code để:\n1.  **Import** lớp `YouTube` từ thư viện `pytube`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong tai video YouTube voi pytube`.\n3.  **Viết các lệnh cơ bản** để tạo đối tượng YouTube và truy cập các luồng, nhưng hãy **comment (ghi chú)** chúng lại để chúng không chạy hoặc gây lỗi.\n4.  Cuối cùng, in ra chuỗi `Da import pytube` để xác nhận.",
      "test_cases": [
        {
          "input": "from pytube import YouTube\n\nprint(\"Dang mo phong tai video YouTube voi pytube\")\n\n# Cac lenh pytube nay khong thuc hien tai video that\n# trong moi truong van ban nay.\n# Neu ban chay tren may tinh ca nhan, ban se can dam bao URL video hop le\n# va co ket noi internet.\n\n# Thay the 'your_video_url' bang mot URL YouTube thuc te neu ban muon thu nghiem tren may cua minh\n# video_url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' # Rick Astley - Never Gonna Give You Up\n# try:\n#     yt = YouTube(video_url)\n\n#     print(f\"Tiêu đề video: {yt.title}\")\n#     print(\"Các luồng khả dụng:\")\n#     # for stream in yt.streams.order_by('resolution').desc():\n#     #     print(stream)\n\n#     # Ví dụ: chọn stream có độ phân giải cao nhất\n#     # stream_to_download = yt.streams.get_highest_resolution()\n#     # print(f\"Đang tải về: {stream_to_download.resolution} - {stream_to_download.mime_type}\")\n#     # stream_to_download.download() # Thuc hien tai ve\n#     # print(\"Tải xong!\")\n# except Exception as e:\n#     print(f\"Xảy ra lỗi khi mô phỏng pytube: {e}\")\n\n\nprint(\"Da import pytube\")",
          "expected_output": "Dang mo phong tai video YouTube voi pytube\nDa import pytube"
        }
      ]
    },
    {
      "id": 35,
      "difficulty": 2,
      "title": "Bài 35: Module OpenCV",
      "desc": "### Khái niệm\n`OpenCV` (Open Source Computer Vision Library, tên khi import là `cv2`) là một thư viện khổng lồ về **thị giác máy tính (Computer Vision)** và xử lý ảnh. Nó cung cấp hàng ngàn thuật toán để phân tích, biến đổi và hiểu nội dung của hình ảnh và video.\n\n### Vận dụng\n`OpenCV` được sử dụng rộng rãi trong nhận diện khuôn mặt/vật thể, phân tích video, robot, chỉnh sửa ảnh tự động, và tiền xử lý dữ liệu cho học máy. Các chức năng cơ bản: `cv2.imread()` để đọc ảnh, `cv2.imshow()` để hiển thị, `cv2.cvtColor()` để chuyển đổi màu sắc, `cv2.imwrite()` để lưu ảnh.\n\n*Lưu ý quan trọng:*\nXử lý ảnh và thị giác máy tính là một lĩnh vực phức tạp và thường **cần hiển thị cửa sổ đồ họa** để xem kết quả. Môi trường bạn đang học **không thể hiển thị hình ảnh hoặc video** do các giới hạn kỹ thuật. Bài tập này chỉ mang tính giới thiệu về thư viện và khả năng của nó. Để thực sự làm việc với `OpenCV`, bạn cần chạy code trên máy tính cá nhân của mình.\n\n### Yêu cầu bài tập\nHãy viết code để:\n1.  **Import** thư viện `cv2`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong xu ly anh voi OpenCV`.\n3.  **Viết các lệnh cơ bản** để đọc ảnh, chuyển đổi màu sắc, nhưng hãy **comment (ghi chú)** chúng lại để chúng không chạy lỗi hoặc gây ra lỗi.\n4.  Cuối cùng, in ra chuỗi `Da import cv2` để xác nhận.",
      "test_cases": [
        {
          "input": "import cv2\n\nprint(\"Dang mo phong xu ly anh voi OpenCV\")\n\n# Cac lenh OpenCV nay khong chay duoc va khong hien thi anh\n# trong moi truong van ban nay.\n# Neu ban chay tren may tinh ca nhan, ban se can co file anh\n# va cac cong cu hien thi hinh anh.\n\n# Vi du (khong chay):\n# doc_anh = cv2.imread('duong_dan_den_anh_cua_ban.jpg')\n# if doc_anh is not None:\n#     print(\"Đã đọc được ảnh (mô phỏng).\")\n#     # Chuyen doi sang anh xam (grayscale)\n#     # anh_xam = cv2.cvtColor(doc_anh, cv2.COLOR_BGR2GRAY)\n#     # print(\"Đã chuyển ảnh sang xám (mô phỏng).\")\n\n#     # Hien thi anh (chi tren may tinh ca nhan)\n#     # cv2.imshow('Anh Goc', doc_anh)\n#     # cv2.imshow('Anh Xam', anh_xam)\n#     # cv2.waitKey(0) # Cho bam phim bat ky de dong cua so\n#     # cv2.destroyAllWindows()\n# else:\n#     print(\"Không thể đọc ảnh. Đảm bảo đường dẫn file đúng.\")\n\nprint(\"Da import cv2\")",
          "expected_output": "Dang mo phong xu ly anh voi OpenCV\nDa import cv2"
        }
      ]
    },
    {
      "id": 36,
      "difficulty": 2,
      "title": "Bài 36: Module Selenium",
      "desc": "### Khái niệm\n`Selenium` là một công cụ mạnh mẽ để **tự động hóa các trình duyệt web** (như Chrome, Firefox). Nó cho phép bạn viết các kịch bản để điều khiển trình duyệt giống hệt như một người dùng thật: mở trang web, click vào nút, điền form, và trích xuất dữ liệu.\n\n### Vận dụng\n`Selenium` được sử dụng rộng rãi cho kiểm thử tự động, web scraping nâng cao (trang web động), và tự động hóa các tác vụ lặp đi lặp lại trên web. Các bước cơ bản: Khởi tạo `webdriver.Chrome()`, `driver.get('URL')`, `driver.find_element_by...()` để tìm phần tử, `element.click()` hoặc `element.send_keys()` để tương tác, và `driver.quit()` để đóng trình duyệt.\n\n*Lưu ý quan trọng:*\nSelenium yêu cầu **mở một cửa sổ trình duyệt thật** và cần cài đặt **WebDriver** phù hợp. Môi trường bạn đang học **không thể thực hiện việc này** do các giới hạn về hệ thống. Bài tập này chỉ mang tính giới thiệu về thư viện và vai trò của nó trong tự động hóa web.\n\n### Yêu cầu bài tập\nHãy viết code để:\n1.  **Import** lớp `webdriver` từ thư viện `selenium`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong tu dong hoa web voi Selenium`.\n3.  **Viết các lệnh cơ bản** để khởi tạo trình duyệt và mở một trang web, nhưng hãy **comment (ghi chú)** chúng lại để chúng không chạy lỗi hoặc gây ra lỗi.\n4.  Cuối cùng, in ra chuỗi `Da import selenium` để xác nhận.",
      "test_cases": [
        {
          "input": "from selenium import webdriver\n\nprint(\"Dang mo phong tu dong hoa web voi Selenium\")\n\n# Cac lenh Selenium nay khong chay duoc va khong mo trinh duyet that\n# trong moi truong van ban nay.\n# Neu ban chay tren may tinh ca nhan, ban se can:\n# 1. Cai dat thu vien selenium: pip install selenium\n# 2. WebDriver phu hop voi trinh duyet cua ban (Chrome, Firefox, Edge...) va dat no trong PATH.\n\n# Vi du (khong chay):\n# try:\n#     # driver = webdriver.Chrome() # Neu ChromeDriver da co trong PATH\n#     # driver.get(\"https://www.google.com\")\n#     # print(f\"Đã mở trang: {driver.title}\")\n#     # driver.quit() # Dong trinh duyet\n#     # print(\"Đã hoàn tất mô phỏng Selenium.\")\n# except Exception as e:\n#     print(f\"Xảy ra lỗi khi mô phỏng Selenium: {e}\")\n\nprint(\"Da import selenium\")",
          "expected_output": "Dang mo phong tu dong hoa web voi Selenium\nDa import selenium"
        }
      ]
    },
    {
      "id": 37,
      "difficulty": 2,
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
      "difficulty": 2,
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
      "difficulty": 3,
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
      "difficulty": 3,
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
      "difficulty": 3,
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
      "difficulty": 2,
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
      "difficulty": 2,
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
      "difficulty": 2,
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
      "difficulty": 1,
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
      "difficulty": 2,
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
      "id": 47,
      "difficulty": 2,
      "title": "Bài 47: Unit Testing",
      "desc": "### Khái niệm\nUnit testing là quá trình kiểm thử từng đơn vị (unit) nhỏ nhất của mã nguồn (thường là hàm hoặc phương thức) một cách riêng rẽ. Thư viện `unittest` tích hợp sẵn trong Python giúp bạn viết và chạy các kịch bản kiểm thử.\n\n### Ví dụ mẫu\n```python\nimport unittest\n\ndef add(a, b):\n    return a + b\n\nclass TestAdd(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(2, 3), 5)\n\n# Để chạy, cần chạy file với cờ -m unittest\n```\n\n### Yêu cầu bài tập\nViết một hàm `multiply(a, b)` trả về tích của a và b. Sau đó, in kết quả của `multiply(3, 4)` ra màn hình.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "12"
        }
      ]
    },
    {
      "id": 48,
      "difficulty": 2,
      "title": "Bài 48: Logging",
      "desc": "### Khái niệm\nThư viện `logging` là một công cụ mạnh mẽ để ghi lại các thông điệp theo dõi từ chương trình của bạn. So với `print()`, logging cho phép bạn phân loại thông điệp theo mức độ quan trọng (DEBUG, INFO, WARNING, ERROR, CRITICAL) và dễ dàng cấu hình để ghi ra file hoặc console.\n\n### Yêu cầu bài tập\nImport thư viện `logging`. Cấu hình cơ bản với `logging.basicConfig(level=logging.INFO)`. Sau đó, ghi lại một thông điệp ở mức INFO với nội dung `Hoc logging`. Vì `basicConfig` in ra console, hệ thống sẽ bắt được output này.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "INFO:root:Hoc logging"
        }
      ]
    },
    {
      "id": 49,
      "difficulty": 2,
      "title": "Bài 49: Flask - Web App",
      "desc": "### Khái niệm\n**Flask** là một 'micro' web framework cho Python, rất nhẹ và dễ bắt đầu để xây dựng các ứng dụng web nhỏ đến trung bình, hoặc các API. Nó hoạt động dựa trên các khái niệm định tuyến (routing) và phản hồi (response). Bạn định nghĩa các hàm Python và 'gắn' chúng vào các URL cụ thể bằng `@app.route('/')`.\n\n### Vận dụng\nBạn có thể dùng Flask để xây dựng API RESTful, phát triển các trang web đơn giản, tạo prototype nhanh chóng, hoặc học về phát triển web. Các thành phần chính: `Flask` class (đối tượng ứng dụng), `@app.route('/')` (định tuyến URL), `render_template()` (trả về HTML).\n\n*Lưu ý quan trọng:*\nĐể chạy một ứng dụng Flask, bạn cần có một **web server** để lắng nghe các yêu cầu đến từ trình duyệt. Môi trường bạn đang học **không thể khởi động một web server** và hiển thị kết quả trên trình duyệt. Bài tập này chỉ mang tính giới thiệu về Flask và cách nó được cấu trúc.\n\n### Yêu cầu bài tập\nHãy viết code để:\n1.  **Import** lớp `Flask` từ thư viện `flask`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong ung dung web Flask co ban`.\n3.  **Viết các lệnh cơ bản** để tạo một ứng dụng Flask và định nghĩa một route đơn giản, nhưng hãy **comment (ghi chú)** chúng lại để chúng không chạy lỗi hoặc gây ra lỗi.\n4.  Cuối cùng, in ra chuỗi `Da import Flask` để xác nhận.",
      "test_cases": [
        {
          "input": "from flask import Flask\n\nprint(\"Dang mo phong ung dung web Flask co ban\")\n\n# Cac lenh Flask nay khong chay duoc va khong khoi dong web server that\n# trong moi truong van ban nay.\n# Neu ban chay tren may tinh ca nhan, ban se can:\n# 1. Cai dat Flask: pip install Flask\n# 2. Chay file Python nay, sau do truy cap URL tren trinh duyet cua ban.\n\n# Vi du (khong chay):\n# app = Flask(__name__)\n\n# @app.route('/')\n# def hello_world():\n#     return 'Hello, World!'\n\n# if __name__ == '__main__':\n#     # De chay ung dung, su dung lenh: flask run\n#     # Hoac them app.run() vao cuoi file khi chay tren may tinh ca nhan\n#     # app.run(debug=True) # debug=True giup tu dong tai lai khi co thay doi code\n\nprint(\"Da import Flask\")",
          "expected_output": "Dang mo phong ung dung web Flask co ban\nDa import Flask"
        }
      ]
    },
    {
      "id": 50,
      "difficulty": 2,
      "title": "Bài 50: Pandas - Đọc CSV",
      "desc": "### Khái niệm\nMột trong những chức năng mạnh nhất của Pandas là đọc dữ liệu từ nhiều định dạng khác nhau. `pd.read_csv('ten_file.csv')` là hàm dùng để đọc một file CSV và chuyển nó thành một DataFrame.\n\n### Ví dụ mẫu\n```python\nimport pandas as pd\nimport io\n\n# Giả lập một file CSV\ndata = 'col1,col2\\n1,2\\n3,4'\ndf = pd.read_csv(io.StringIO(data))\nprint(df)\n```\n\n### Yêu cầu bài tập\nIn ra chuỗi `pandas.read_csv` để xác nhận bạn biết tên hàm.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "pandas.read_csv"
        }
      ]
    },
    {
      "id": 51,
      "difficulty": 2,
      "title": "Bài 51: Pandas - GroupBy",
      "desc": "### Khái niệm\nThao tác GroupBy trong Pandas cho phép bạn nhóm các hàng dữ liệu lại với nhau dựa trên một hoặc nhiều cột, sau đó thực hiện các phép tính tổng hợp (như `sum`, `mean`, `count`) trên mỗi nhóm.\n\n### Ví dụ mẫu\n```python\nimport pandas as pd\ndata = {'Team': ['A', 'B', 'A', 'B'], 'Points': [10, 15, 8, 12]}\ndf = pd.DataFrame(data)\ngrouped = df.groupby('Team').sum()\nprint(grouped)\n```\n\n### Yêu cầu bài tập\nCho DataFrame trong ví dụ mẫu. Hãy tính và in ra tổng điểm của đội 'A'.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "18"
        }
      ]
    },
    {
      "id": 52,
      "difficulty": 2,
      "title": "Bài 52: Matplotlib - Vẽ đồ thị",
      "desc": "### Khái niệm\n`Matplotlib` là thư viện vẽ đồ thị 2D phổ biến nhất của Python. Nó cung cấp một loạt các hàm để tạo ra các biểu đồ đường, cột, tròn, phân tán và nhiều hơn nữa.\n\n### Vận dụng\n`Matplotlib` được sử dụng để phân tích dữ liệu, báo cáo, trong khoa học kỹ thuật và học máy. Các hàm vẽ cơ bản: `plt.plot(x, y)` (đường), `plt.bar(x, height)` (cột), `plt.scatter(x, y)` (phân tán), và các hàm đặt nhãn như `plt.xlabel()`, `plt.ylabel()`, `plt.title()`.\n\n*Lưu ý quan trọng:*\nỨng dụng này **không thể hiển thị cửa sổ đồ họa** của Matplotlib. Do đó, bạn sẽ không thấy biểu đồ hiện lên khi chạy code. Bài tập này chỉ mang tính giới thiệu về thư viện và cú pháp của nó. Để xem trực quan hóa, bạn cần chạy code trên máy tính cá nhân của mình.\n\n### Yêu cầu bài tập\nHãy viết code để:\n1.  **Import** thư viện `matplotlib.pyplot` dưới dạng `plt`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong ve do thi voi Matplotlib`.\n3.  **Viết các lệnh cơ bản** để tạo dữ liệu, vẽ biểu đồ đường, và đặt tiêu đề, nhưng hãy **comment (ghi chú)** chúng lại.\n4.  Cuối cùng, in ra chuỗi `Plot da duoc ve` để xác nhận.",
      "test_cases": [
        {
          "input": "import matplotlib.pyplot as plt\n\nprint(\"Dang mo phong ve do thi voi Matplotlib\")\n\n# Cac lenh Matplotlib nay khong chay duoc va khong hien thi do thi that\n# trong moi truong van ban nay.\n# Neu ban chay tren may tinh ca nhan, ban se can:\n# 1. Cai dat Matplotlib: pip install matplotlib\n# 2. Cac do thi se hien len trong mot cua so rieng.\n\n# Vi du (khong chay):\n# x_values = [1, 2, 3, 4, 5]\n# y_values = [2, 4, 1, 5, 3]\n\n# plt.plot(x_values, y_values) # Ve bieu do duong\n# plt.xlabel('Trục X') # Dat nhan truc X\n# plt.ylabel('Trục Y') # Dat nhan truc Y\n# plt.title('Biểu đồ mẫu') # Dat tieu de do thi\n\n# plt.show() # Hien thi do thi (chi tren may tinh ca nhan)\n# print(\"Đã hoàn tất mô phỏng vẽ đồ thị.\")\n\nprint(\"Plot da duoc ve\")",
          "expected_output": "Dang mo phong ve do thi voi Matplotlib\nPlot da duoc ve"
        }
      ]
    },
    {
      "id": 53,
      "difficulty": 3,
      "title": "Bài 53: Threading",
      "desc": "### Khái niệm\n**`threading`** là một module tích hợp sẵn trong Python, cho phép bạn thực hiện **đa luồng (multithreading)**. Điều này có nghĩa là chương trình của bạn có thể chạy nhiều phần code khác nhau **gần như đồng thời** trong cùng một tiến trình. Mặc dù Python có Global Interpreter Lock (GIL) hạn chế việc chạy song song trên nhiều lõi CPU, đa luồng vẫn cực kỳ hữu ích cho các tác vụ bị chặn bởi **I/O (Input/Output)** (ví dụ: chờ mạng, đọc file).\n\n### Vận dụng\nBạn sẽ dùng `threading` khi tải nhiều file cùng lúc, gọi nhiều API đồng thời, xử lý các tác vụ nền, hoặc xây dựng server đa client. Các bước cơ bản: Import `threading`, định nghĩa hàm chạy trong luồng, tạo `threading.Thread(target=my_function)`, và `thread.start()` để khởi động.\n\n*Lưu ý quan trọng:*\nViệc kiểm thử đa luồng rất phức tạp vì thứ tự thực thi của các luồng có thể không cố định. Môi trường hiện tại không đủ để thực hiện và kiểm tra các kịch bản đa luồng phức tạp. Bài tập này chỉ mang tính giới thiệu về khái niệm và thư viện.\n\n### Yêu cầu bài tập\nHãy viết code để:\n1.  **Import** thư viện `threading` và `time`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong lap trinh da luong voi Threading`.\n3.  **Định nghĩa một hàm đơn giản** tên `task` để mô phỏng một tác vụ (in ra thông báo và `time.sleep()`). **Comment (ghi chú)** việc tạo và khởi động luồng.\n4.  Cuối cùng, in ra chuỗi `Da import threading` để xác nhận.",
      "test_cases": [
        {
          "input": "import threading\nimport time\n\nprint(\"Dang mo phong lap trinh da luong voi Threading\")\n\n# Ham nay se duoc chay trong mot luong rieng biet\ndef task(name, delay):\n    print(f\"Luồng {name}: Bắt đầu.\")\n    time.sleep(delay) # Gia lap mot tac vu ton thoi gian\n    print(f\"Luồng {name}: Kết thúc sau {delay} giây.\")\n\n# Vi du (khong chay tren moi truong nay vi no can thoi gian thuc thi):\n# print(\"Chương trình chính: Bắt đầu.\")\n\n# # Tạo và khởi động các luồng\n# thread1 = threading.Thread(target=task, args=(\"Luồng 1\", 2))\n# thread2 = threading.Thread(target=task, args=(\"Luồng 2\", 1))\n\n# thread1.start() # Khởi động luồng 1\n# thread2.start() # Khởi động luồng 2\n\n# # Chờ cho các luồng hoàn tất\n# thread1.join()\n# thread2.join()\n\n# print(\"Chương trình chính: Kết thúc.\")\n\nprint(\"Da import threading\")",
          "expected_output": "Dang mo phong lap trinh da luong voi Threading\nDa import threading"
        }
      ]
    },
    {
      "id": 54,
      "difficulty": 3,
      "title": "Bài 54: Asyncio",
      "desc": "### Khái niệm\n**`asyncio`** là một module mạnh mẽ trong Python để viết code **đồng thời (concurrent) bằng cách sử dụng bất đồng bộ (asynchronous) và awaitable syntax** (`async`/`await`). Nó hoạt động trên một **luồng đơn (single thread)**, chuyển đổi ngữ cảnh giữa các tác vụ khi một tác vụ bị 'chặn' (ví dụ: chờ I/O).\n\n### Vận dụng\n`asyncio` đặc biệt hiệu quả cho các ứng dụng có số lượng lớn các kết nối I/O (web server, bot, tác vụ mạng). Các khái niệm chính: `async def` (định nghĩa coroutine), `await` (tạm dừng chờ tác vụ), `asyncio.run()` (chạy coroutine chính và quản lý event loop).\n\n*Lưu ý quan trọng:*\nGiống như `threading`, việc kiểm tra code bất đồng bộ rất phức tạp và cần một môi trường hỗ trợ đầy đủ để chạy vòng lặp sự kiện. Môi trường hiện tại không thể thực hiện việc này. Bài tập này chỉ mang tính giới thiệu về khái niệm và thư viện.\n\n### Yêu cầu bài tập\nHãy viết code để:\n1.  **Import** thư viện `asyncio` và `time`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong lap trinh bat dong bo voi Asyncio`.\n3.  **Định nghĩa một hàm coroutine đơn giản** (dùng `async def`) tên `my_async_task` để mô phỏng một tác vụ bất đồng bộ (in ra thông báo và `await asyncio.sleep()`), và **comment (ghi chú)** việc gọi `asyncio.run()`.\n4.  Cuối cùng, in ra chuỗi `Da import asyncio` để xác nhận.",
      "test_cases": [
        {
          "input": "import asyncio\nimport time\n\nprint(\"Dang mo phong lap trinh bat dong bo voi Asyncio\")\n\n# Một coroutine đơn giản\nasync def my_async_task(name, delay):\n    print(f\"[{time.strftime('%H:%M:%S')}] Task {name}: Bắt đầu.\")\n    await asyncio.sleep(delay) # Mô phỏng tác vụ I/O bất đồng bộ\n    print(f\"[{time.strftime('%H:%M:%S')}] Task {name}: Kết thúc sau {delay} giây.\")\n\n# Vi du (khong chay tren moi truong nay vi no can chay event loop):\n# async def main():\n#     print(f\"[{time.strftime('%H:%M:%S')}] Chương trình chính: Bắt đầu các task.\")\n#     # Chạy các coroutine đồng thời\n#     await asyncio.gather(\n#         my_async_task(\"Task A\", 3),\n#         my_async_task(\"Task B\", 1)\n#     )\n#     print(f\"[{time.strftime('%H:%M:%S')}] Chương trình chính: Tất cả task đã hoàn thành.\")\n\n# Để chạy trên máy tính cá nhân, bạn sẽ dùng:\n# if __name__ == '__main__':\n#     asyncio.run(main())\n\nprint(\"Da import asyncio\")",
          "expected_output": "Dang mo phong lap trinh bat dong bo voi Asyncio\nDa import asyncio"
        }
      ]
    },
    {
      "id": 55,
      "difficulty": 3,
      "title": "Bài 55: Scikit-learn",
      "desc": "### Khái niệm\n**`Scikit-learn`** (thường được viết tắt là `sklearn`) là thư viện **học máy (Machine Learning - ML)** hàng đầu và dễ sử dụng nhất trong Python. Nó cung cấp một bộ công cụ toàn diện và hiệu quả cho nhiều nhiệm vụ học máy phổ biến như phân loại, hồi quy, phân cụm, giảm chiều, và tiền xử lý dữ liệu.\n\n### Vận dụng\nBạn sẽ dùng `Scikit-learn` khi xây dựng các mô hình học máy để dự đoán giá nhà, phân loại email, phân nhóm khách hàng, nhận dạng chữ viết tay, v.v. Các bước cơ bản: Tiền xử lý dữ liệu, chọn mô hình (ví dụ `LinearRegression`), **huấn luyện mô hình (`.fit(X, y)`)**, dự đoán (`.predict(X_new)`), và đánh giá mô hình.\n\n*Lưu ý quan trọng:*\nHọc máy là một lĩnh vực rộng lớn và phức tạp. Việc huấn luyện và dự đoán mô hình thực tế thường cần một lượng lớn dữ liệu và tài nguyên tính toán đáng kể. Môi trường bạn đang học chỉ có thể giới thiệu về thư viện và cú pháp của nó, không thực hiện được việc huấn luyện mô hình toàn diện.\n\n### Yêu cầu bài tập\nHãy viết code để:\n1.  **Import** một thành phần phổ biến từ `scikit-learn`, ví dụ: `train_test_split` từ `sklearn.model_selection`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong su dung Scikit-learn`.\n3.  **Viết các lệnh cơ bản** để tạo dữ liệu giả lập và mô phỏng việc chia dữ liệu và huấn luyện mô hình, nhưng hãy **comment (ghi chú)** chúng lại.\n4.  Cuối cùng, in ra chuỗi `Da import scikit-learn` để xác nhận.",
      "test_cases": [
        {
          "input": "from sklearn.model_selection import train_test_split\n# from sklearn.linear_model import LinearRegression # Vi du ve mo hinh\nimport numpy as np # Import NumPy de tao du lieu gia lap\n\nprint(\"Dang mo phong su dung Scikit-learn\")\n\n# Vi du (khong chay tren moi truong nay vi no can tap du lieu va tinh toan):\n\n# # 1. Tao du lieu gia lap\n# X = np.array([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])\n# y = np.array([2, 4, 5, 4, 5, 7, 8, 9, 10, 12])\n\n# # 2. Chia du lieu thanh tap huan luyen va kiem tra\n# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)\n# print(\"Đã chia dữ liệu thành tập huấn luyện và kiểm tra (mô phỏng).\")\n\n# # 3. Khoi tao mo hinh (Linear Regression la mot mo hinh hoi quy don gian)\n# # model = LinearRegression()\n\n# # 4. Huan luyen mo hinh\n# # model.fit(X_train, y_train)\n# # print(\"Đã huấn luyện mô hình (mô phỏng).\")\n\n# # 5. Du doan\n# # predictions = model.predict(X_test)\n# # print(f\"Dự đoán trên dữ liệu kiểm tra (mô phỏng): {predictions}\")\n\nprint(\"Da import scikit-learn\")",
          "expected_output": "Dang mo phong su dung Scikit-learn\nDa import scikit-learn"
        }
      ]
    },
    {
      "id": 56,
      "difficulty": 2,
      "title": "Bài 56: OOP - Phương thức __str__",
      "desc": "### Khái niệm\nPhương thức đặc biệt `__str__` được gọi khi bạn dùng hàm `print()` hoặc `str()` trên một đối tượng. Nó nên trả về một chuỗi 'thân thiện' với người dùng, mô tả về đối tượng đó.\n\n### Ví dụ mẫu\n```python\nclass Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    def __str__(self):\n        return f'{self.name}, {self.age} tuổi'\n\np = Person('An', 22)\nprint(p) # Sẽ gọi p.__str__()\n```\n\n### Yêu cầu bài tập\nTạo một class `Book` với `__init__` nhận `title`. Viết phương thức `__str__` để trả về chuỗi `Quyển sách: [tiêu đề]`. Tạo một đối tượng sách có tiêu đề là 'Lập trình Python' và in đối tượng đó ra.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "Quyển sách: Lập trình Python"
        }
      ]
    },
    {
      "id": 57,
      "difficulty": 2,
      "title": "Bài 57: Lập trình hàm - map",
      "desc": "### Khái niệm\nHàm `map()` áp dụng một hàm cho tất cả các mục trong một đối tượng lặp (iterable) như list. Cú pháp: `map(function, iterable)`.\n\n### Ví dụ mẫu\n```python\nnumbers = [1, 2, 3]\n\ndef square(n):\n    return n * n\n\nsquared_numbers = map(square, numbers)\nprint(list(squared_numbers)) # In ra [1, 4, 9]\n```\n\n### Yêu cầu bài tập\nCho danh sách `my_list = [1, 2, 3, 4]`. Dùng `map` và một hàm `lambda` để tạo ra một danh sách mới chứa các số trong `my_list` nhân với 10. In danh sách mới ra.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "[10, 20, 30, 40]"
        }
      ]
    },
    {
      "id": 58,
      "difficulty": 2,
      "title": "Bài 58: Lập trình hàm - filter",
      "desc": "### Khái niệm\nHàm `filter()` tạo ra một iterator từ các phần tử của một iterable mà hàm điều kiện trả về `True`. Cú pháp: `filter(function, iterable)`.\n\n### Ví dụ mẫu\n```python\nages = [5, 12, 17, 18, 24, 32]\n\ndef is_adult(age):\n    return age >= 18\n\nadults = filter(is_adult, ages)\nprint(list(adults)) # In ra [18, 24, 32]\n```\n\n### Yêu cầu bài tập\nCho danh sách `numbers = [1, 2, 3, 4, 5, 6]`. Dùng `filter` và một hàm `lambda` để lọc ra các số chẵn. In danh sách kết quả ra.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "[2, 4, 6]"
        }
      ]
    },
    {
      "id": 59,
      "difficulty": 2,
      "title": "Bài 59: os.path - Nối đường dẫn",
      "desc": "### Khái niệm\nLàm việc với đường dẫn file có thể phức tạp do sự khác biệt giữa các hệ điều hành (Windows dùng `\\`, Linux/macOS dùng `/`). `os.path.join()` là cách an toàn và đúng đắn để tạo ra các đường dẫn.\n\n### Vận dụng\nThay vì viết `path = 'folder' + '/' + 'file.txt'`, bạn nên viết `path = os.path.join('folder', 'file.txt')`. Nó sẽ tự động dùng đúng dấu phân cách.\n\n### Yêu cầu bài tập\nImport `os` và dùng `os.path.join()` để tạo và in ra đường dẫn từ các phần: `path1`, `path2`, và `file.txt`. Sau đó thay thế dấu phân cách của HĐH bằng dấu `/` để kết quả luôn giống nhau.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "path1/path2/file.txt"
        }
      ]
    },
    {
      "id": 60,
      "difficulty": 2,
      "title": "Bài 60: collections.namedtuple",
      "desc": "### Khái niệm\n`namedtuple` là một hàm factory để tạo ra các lớp con của tuple với các trường được đặt tên. Nó giúp code dễ đọc hơn vì bạn có thể truy cập phần tử bằng tên thay vì chỉ số.\n\n### Ví dụ mẫu\n```python\nfrom collections import namedtuple\n\nPoint = namedtuple('Point', ['x', 'y'])\np = Point(11, y=22)\nprint(p.x + p.y) # Dùng tên để truy cập\n```\n\n### Yêu cầu bài tập\nTạo một `namedtuple` tên là `Student` với các trường là `name` và `age`. Tạo một đối tượng `Student` với tên là 'An' và tuổi là 20. In ra tuổi của sinh viên đó.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "20"
        }
      ]
    },
    {
      "id": 61,
      "difficulty": 2,
      "title": "Bài 61: collections.deque",
      "desc": "### Khái niệm\n`deque` (phát âm là 'deck') là một danh sách được tối ưu hóa cho việc thêm và xóa phần tử ở cả hai đầu. Nó nhanh hơn nhiều so với `list.pop(0)`.\n\n### Vận dụng\nCực kỳ hữu ích để triển khai hàng đợi (queue) hoặc ngăn xếp (stack).\n\n### Yêu cầu bài tập\nTạo một `deque` từ list `[1, 2, 3]`. Dùng `appendleft()` để thêm số 0 vào đầu. Dùng `pop()` để xóa và lấy ra phần tử cuối cùng (số 3). Cuối cùng, in `deque` ra.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "deque([0, 1, 2])"
        }
      ]
    },
    {
      "id": 62,
      "difficulty": 3,
      "title": "Bài 62: OOP - @property",
      "desc": "### Khái niệm\nDecorator `@property` cho phép bạn định nghĩa một phương thức nhưng lại có thể truy cập nó như một thuộc tính (không cần dấu `()`). Điều này hữu ích khi bạn muốn thực hiện một số logic khi lấy hoặc đặt một giá trị.\n\n### Ví dụ mẫu\n```python\nclass Circle:\n    def __init__(self, radius):\n        self.radius = radius\n    @property\n    def diameter(self):\n        return 2 * self.radius\n\nc = Circle(5)\nprint(c.diameter) # Truy cập như thuộc tính\n```\n\n### Yêu cầu bài tập\nTạo class `Square` có thuộc tính `side`. Dùng `@property` để tạo thuộc tính `area` (diện tích) trả về `side * side`. Tạo hình vuông cạnh 4 và in ra diện tích của nó.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "16"
        }
      ]
    },
    {
      "id": 63,
      "difficulty": 2,
      "title": "Bài 63: OOP - @staticmethod",
      "desc": "### Khái niệm\n`@staticmethod` định nghĩa một phương thức tĩnh. Phương thức này thuộc về lớp chứ không thuộc về đối tượng. Nó không nhận `self` hay `cls` làm tham số đầu tiên. Nó giống như một hàm thông thường nằm bên trong không gian tên của lớp.\n\n### Vận dụng\nDùng cho các hàm tiện ích có liên quan logic đến lớp nhưng không cần truy cập đến trạng thái của đối tượng.\n\n### Yêu cầu bài tập\nTạo class `MathUtils` với một staticmethod tên `add` nhận vào 2 số và trả về tổng của chúng. Gọi phương thức này trực tiếp từ lớp và in kết quả của `MathUtils.add(5, 10)`.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "15"
        }
      ]
    },
    {
      "id": 64,
      "difficulty": 2,
      "title": "Bài 64: OOP - @classmethod",
      "desc": "### Khái niệm\n`@classmethod` định nghĩa một phương thức của lớp. Phương thức này nhận lớp (`cls`) làm tham số đầu tiên, thay vì đối tượng (`self`). Nó có thể truy cập và sửa đổi trạng thái của lớp.\n\n### Vận dụng\nThường được dùng làm các 'hàm khởi tạo' (factory method) thay thế, tạo ra các đối tượng theo những cách đặc biệt.\n\n### Yêu cầu bài tập\nTạo class `Car` có thuộc tính lớp `country = 'Vietnam'`. Viết một classmethod tên `get_country` trả về thuộc tính `country` của lớp. Gọi và in kết quả từ `Car.get_country()`.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "Vietnam"
        }
      ]
    },
    {
      "id": 65,
      "difficulty": 2,
      "title": "Bài 65: File - Di chuyển con trỏ",
      "desc": "### Khái niệm\nKhi làm việc với file, bạn có thể điều khiển vị trí của con trỏ đọc/ghi. `f.seek(offset)` di chuyển con trỏ đến vị trí `offset`. `f.tell()` cho biết vị trí hiện tại.\n\n### Yêu cầu bài tập\nViết code để: 1. Tạo file `b.txt` với nội dung `abcdef`. 2. Mở lại file, dùng `seek(3)` để di chuyển đến vị trí thứ 3. 3. Đọc phần còn lại của file (`read()`) và in ra.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "def"
        }
      ]
    },
    {
      "id": 66,
      "difficulty": 1,
      "title": "Bài 66: Module shutil",
      "desc": "### Khái niệm\nModule `shutil` (shell utilities) cung cấp các thao tác trên file và thư mục ở mức độ cao, tiện lợi hơn `os`.\n\n### Vận dụng\n- `shutil.copy(src, dst)`: Sao chép file.\n- `shutil.move(src, dst)`: Di chuyển file/thư mục.\n- `shutil.rmtree(path)`: Xóa một cây thư mục.\n\n### Yêu cầu bài tập\nDo không thể thao tác file thật, bài tập này yêu cầu bạn `import shutil` và in ra chuỗi `shutil da san sang`.",
      "test_cases": [
        {
          "input": "import shutil\nprint(\"shutil da san sang\")",
          "expected_output": "shutil da san sang"
        }
      ]
    },
    {
      "id": 67,
      "difficulty": 1,
      "title": "Bài 67: Set (Tập hợp)",
      "desc": "### Khái niệm\nSet là một tập hợp các phần tử *không có thứ tự* và *duy nhất*. Nó rất hiệu quả cho các phép toán tập hợp như hợp, giao, hiệu.\n\n### Ví dụ mẫu\n```python\nmy_list = [1, 2, 2, 3, 3, 3]\nunique_numbers = set(my_list)\nprint(unique_numbers) # In ra {1, 2, 3}\n```\n\n### Yêu cầu bài tập\nCho hai set `set1 = {1, 2, 3}` và `set2 = {3, 4, 5}`. Tìm và in ra các phần tử chung của hai set (phép giao).",
      "test_cases": [
        {
          "input": "",
          "expected_output": "{3}"
        }
      ]
    },
    {
      "id": 68,
      "difficulty": 1,
      "title": "Bài 68: Ternary Operator",
      "desc": "### Khái niệm\nToán tử ba ngôi là một cách viết gọn cho câu lệnh `if-else` trên một dòng. Cú pháp: `gia_tri_khi_dung if dieu_kien else gia_tri_khi_sai`.\n\n### Ví dụ mẫu\n```python\nage = 20\nstatus = 'adult' if age >= 18 else 'child'\nprint(status) # In ra 'adult'\n```\n\n### Yêu cầu bài tập\nDùng toán tử ba ngôi, kiểm tra xem biến `x = 10` có lớn hơn 5 không. Nếu có, gán chuỗi 'Lon' cho biến `result`, ngược lại gán 'Nho'. In biến `result` ra.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "Lon"
        }
      ]
    },
    {
      "id": 69,
      "difficulty": 2,
      "title": "Bài 69: Unpacking với *",
      "desc": "### Khái niệm\nToán tử `*` (splat operator) có thể được dùng để 'bung' (unpack) các phần tử của một iterable (như list, tuple) vào các biến riêng lẻ hoặc vào một lời gọi hàm.\n\n### Ví dụ mẫu\n```python\nnumbers = [1, 2, 3, 4, 5]\nfirst, *middle, last = numbers\nprint(middle) # In ra [2, 3, 4]\n```\n\n### Yêu cầu bài tập\nCho list `my_tuple = (10, 20, 30)`. Dùng `*` để unpack nó vào các tham số của hàm `print()` để in ra `10 20 30`.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "10 20 30"
        }
      ]
    },
    {
      "id": 70,
      "difficulty": 2,
      "title": "Bài 70: Hàm zip",
      "desc": "### Khái niệm\nHàm `zip()` nhận vào nhiều iterable và trả về một iterator của các tuple, trong đó tuple thứ i chứa phần tử thứ i từ mỗi iterable.\n\n### Ví dụ mẫu\n```python\nnames = ['An', 'Binh', 'Cuong']\nages = [20, 21, 22]\n\nfor name, age in zip(names, ages):\n    print(f'{name} - {age} tuổi')\n```\n\n### Yêu cầu bài tập\nCho 2 list `list1 = [1, 2]` và `list2 = ['a', 'b']`. Dùng `zip` và `list` để tạo và in ra danh sách các tuple kết quả.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "[(1, 'a'), (2, 'b')]"
        }
      ]
    },
    {
      "id": 71,
      "difficulty": 1,
      "title": "Bài 71: enumerate",
      "desc": "### Khái niệm\nHàm `enumerate()` thêm một bộ đếm vào một iterable và trả về nó dưới dạng một đối tượng enumerate. Thường dùng trong vòng lặp `for` khi bạn cần cả chỉ số và giá trị của phần tử.\n\n### Ví dụ mẫu\n```python\nfruits = ['táo', 'chuối', 'cam']\nfor index, fruit in enumerate(fruits):\n    print(index, fruit)\n```\n\n### Yêu cầu bài tập\nDùng `enumerate` với list `['A', 'B', 'C']` và in ra theo định dạng `Chỉ số 0: A`, `Chỉ số 1: B`, ... mỗi chuỗi trên một dòng.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "Chỉ số 0: A\nChỉ số 1: B\nChỉ số 2: C"
        }
      ]
    },
    {
      "id": 72,
      "difficulty": 3,
      "title": "Bài 72: API - Xử lý lỗi",
      "desc": "### Khái niệm\nKhi làm việc với API, không phải lúc nào yêu cầu cũng thành công. Bạn cần kiểm tra `response.status_code`. Một cách làm tốt hơn là dùng `response.raise_for_status()`, nó sẽ tự động gây ra một `HTTPError` nếu status code là lỗi (4xx hoặc 5xx).\n\n### Yêu cầu bài tập\nGiả sử bạn gọi một URL không tồn tại. `requests` sẽ trả về status code 404. Hãy viết khối `try...except` để bắt lỗi `requests.exceptions.HTTPError` khi gọi `raise_for_status()` và in ra chuỗi `URL khong ton tai`.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "URL khong ton tai"
        }
      ]
    },
    {
      "id": 73,
      "difficulty": 2,
      "title": "Bài 73: API - Gửi Headers",
      "desc": "### Khái niệm\nHTTP Headers là các cặp key-value được gửi cùng với yêu cầu hoặc phản hồi. Chúng chứa các thông tin meta như định dạng dữ liệu (`Content-Type`), thông tin xác thực (`Authorization`), loại trình duyệt (`User-Agent`).\n\n### Vận dụng\nNhiều API yêu cầu bạn gửi một `API Key` trong header `Authorization` để xác thực bạn là ai và có quyền truy cập hay không.\n\n### Yêu cầu bài tập\nĐể mô phỏng, hãy tạo một dictionary `headers = {'Authorization': 'my_secret_key'}`. Sau đó, in ra giá trị của key `Authorization`.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "my_secret_key"
        }
      ]
    },
    {
      "id": 74,
      "difficulty": 2,
      "title": "Bài 74: Môi trường ảo (venv)",
      "desc": "### Khái niệm\nMôi trường ảo là một thư mục chứa một bản cài đặt Python riêng biệt. Nó cho phép bạn cài đặt các thư viện cho một dự án mà không ảnh hưởng đến các dự án khác hoặc hệ thống chung. Đây là một thực hành cực kỳ quan trọng.\n\n### Vận dụng\n- Lệnh tạo: `python -m venv myenv`\n- Lệnh kích hoạt (Windows): `myenv\\Scripts\\activate`\n- Lệnh kích hoạt (Mac/Linux): `source myenv/bin/activate`\n\n### Yêu cầu bài tập\nIn ra chuỗi `python -m venv myenv` để xác nhận bạn biết lệnh tạo môi trường ảo.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "python -m venv myenv"
        }
      ]
    },
    {
      "id": 75,
      "difficulty": 2,
      "title": "Bài 75: requirements.txt",
      "desc": "### Khái niệm\n`requirements.txt` là một file văn bản liệt kê tất cả các thư viện bên ngoài mà dự án của bạn cần. Nó giúp người khác có thể dễ dàng cài đặt tất cả các phụ thuộc chỉ bằng một lệnh.\n\n### Vận dụng\n- Lệnh tạo file: `pip freeze > requirements.txt`\n- Lệnh cài đặt từ file: `pip install -r requirements.txt`\n\n### Yêu cầu bài tập\nIn ra chuỗi `pip install -r requirements.txt` để xác nhận bạn biết lệnh cài đặt từ file requirements.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "pip install -r requirements.txt"
        }
      ]
    },
    {
      "id": 76,
      "difficulty": 1,
      "title": "Bài 76: Cấu trúc Dự án",
      "desc": "### Khái niệm\nMột cấu trúc dự án tốt giúp code dễ tìm, dễ quản lý và dễ bảo trì. Một cấu trúc phổ biến thường chia code thành các module, tách biệt logic ứng dụng với các phần khác như test, tài liệu.\n\n### Ví dụ mẫu\n```\nmy_project/\n├── my_app/\n│   ├── __init__.py\n│   ├── main.py\n│   └── utils.py\n├── tests/\n│   └── test_main.py\n└── requirements.txt\n```\n\n### Yêu cầu bài tập\nIn ra `project/app/main.py` để thể hiện một cấu trúc file đơn giản.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "project/app/main.py"
        }
      ]
    },
    {
      "id": 77,
      "difficulty": 2,
      "title": "Bài 77: OOP - Phương thức __repr__",
      "desc": "### Khái niệm\nPhương thức `__repr__` (representation) cũng trả về một chuỗi, nhưng mục tiêu của nó là tạo ra một chuỗi 'chính thức', không mơ hồ, mà lý tưởng nhất là có thể dùng để tái tạo lại đối tượng.\n\n### Vận dụng\n`__str__` dành cho người dùng cuối (dễ đọc), `__repr__` dành cho lập trình viên (rõ ràng, chính xác).\n\n### Yêu cầu bài tập\nTạo class `Point` có `__init__` nhận `x, y`. Viết phương thức `__repr__` trả về chuỗi có dạng `Point(x=..., y=...)`. Tạo điểm `Point(3, 5)` và in `repr()` của nó.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "Point(x=3, y=5)"
        }
      ]
    },
    {
      "id": 78,
      "difficulty": 1,
      "title": "Bài 78: Dictionary Methods",
      "desc": "### Khái niệm\nDictionary có nhiều phương thức hữu ích:\n- `.keys()`: Trả về các key.\n- `.values()`: Trả về các value.\n- `.items()`: Trả về các cặp (key, value).\n- `.get(key, default)`: Lấy value của key, nếu không có thì trả về default.\n\n### Yêu cầu bài tập\nCho dictionary `d = {'a': 1, 'b': 2}`. Dùng `.get()` để lấy giá trị của key 'c', với giá trị mặc định là 0. In kết quả ra.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "0"
        }
      ]
    },
    {
      "id": 79,
      "difficulty": 1,
      "title": "Bài 79: String Methods",
      "desc": "### Khái niệm\nChuỗi trong Python có rất nhiều phương thức mạnh mẽ để xử lý văn bản.\n- `.upper()`/`.lower()`: Chuyển thành chữ hoa/thường.\n- `.strip()`: Xóa khoảng trắng ở hai đầu.\n- `.split(char)`: Tách chuỗi thành list dựa trên ký tự `char`.\n- `.replace(old, new)`: Thay thế.\n\n### Yêu cầu bài tập\nCho chuỗi `s = '   xin chao   '`. Dùng phương thức của chuỗi để xóa khoảng trắng hai đầu và viết hoa chữ cái đầu tiên. In kết quả.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "Xin chao"
        }
      ]
    },
    {
      "id": 80,
      "difficulty": 3,
      "title": "Bài 80: Pandas - Xử lý dữ liệu thiếu",
      "desc": "### Khái niệm\nDữ liệu trong thực tế thường không đầy đủ (có giá trị `NaN` - Not a Number). Pandas cung cấp các công cụ để xử lý chúng.\n\n### Vận dụng\n- `df.dropna()`: Xóa các hàng có chứa giá trị thiếu.\n- `df.fillna(value)`: Thay thế các giá trị thiếu bằng một giá trị `value` cụ thể (ví dụ: 0, hoặc giá trị trung bình).\n\n### Yêu cầu bài tập\nIn ra tên hàm dùng để xóa các hàng có giá trị thiếu trong Pandas.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "dropna"
        }
      ]
    },
    {
      "id": 81,
      "difficulty": 3,
      "title": "Bài 81: Pandas - Nối DataFrames",
      "desc": "### Khái niệm\nBạn có thể kết hợp nhiều DataFrame lại với nhau, tương tự như `JOIN` trong SQL.\n\n### Vận dụng\n- `pd.concat([df1, df2])`: Nối các DataFrame theo chiều dọc hoặc ngang.\n- `pd.merge(df_left, df_right, on='key')`: Nối các DataFrame dựa trên một cột chung ('key').\n\n### Yêu cầu bài tập\nIn ra tên hàm dùng để nối hai DataFrame dựa trên một cột chung trong Pandas.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "merge"
        }
      ]
    },
    {
      "id": 82,
      "difficulty": 2,
      "title": "Bài 82: Matplotlib - Biểu đồ cột",
      "desc": "### Khái niệm\nBiểu đồ cột (`bar chart`) rất hữu ích để so sánh số lượng giữa các danh mục khác nhau. Hàm `plt.bar(x, height)` được dùng để vẽ.\n\n### Ví dụ mẫu\n```python\nimport matplotlib.pyplot as plt\ncategories = ['A', 'B', 'C']\nvalues = [10, 25, 15]\nplt.bar(categories, values)\nplt.show()\n```\n\n### Yêu cầu bài tập\nDo không thể hiển thị đồ thị, hãy in ra tên hàm để vẽ biểu đồ cột trong Matplotlib.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "plt.bar"
        }
      ]
    },
    {
      "id": 83,
      "difficulty": 2,
      "title": "Bài 83: Matplotlib - Chú thích",
      "desc": "### Khái niệm\nMột biểu đồ tốt cần có các chú thích rõ ràng để người xem có thể hiểu được.\n\n### Vận dụng\n- `plt.xlabel('Tên trục X')`\n- `plt.ylabel('Tên trục Y')`\n- `plt.title('Tiêu đề biểu đồ')`\n- `plt.legend()`: Hiển thị chú giải cho các đường.\n\n### Yêu cầu bài tập\nIn ra tên hàm dùng để đặt tiêu đề cho biểu đồ trong Matplotlib.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "plt.title"
        }
      ]
    },
    {
      "id": 84,
      "difficulty": 2,
      "title": "Bài 84: Cấu trúc Stack (Ngăn xếp)",
      "desc": "### Khái niệm\nStack là một cấu trúc dữ liệu hoạt động theo nguyên tắc LIFO (Last-In, First-Out). Phần tử được thêm vào cuối cùng sẽ là phần tử được lấy ra đầu tiên. Tưởng tượng một chồng đĩa, bạn chỉ có thể lấy cái đĩa trên cùng.\n\n### Vận dụng\n- `list.append()`: để đẩy (push) một phần tử vào đỉnh stack.\n- `list.pop()`: để lấy (pop) một phần tử từ đỉnh stack.\n\n### Yêu cầu bài tập\nDùng list để mô phỏng stack. Bắt đầu với list rỗng. Push các số 1, 2, 3 vào. Sau đó pop một lần. In ra stack cuối cùng.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "[1, 2]"
        }
      ]
    },
    {
      "id": 85,
      "difficulty": 2,
      "title": "Bài 85: Cấu trúc Queue (Hàng đợi)",
      "desc": "### Khái niệm\nQueue là một cấu trúc dữ liệu hoạt động theo nguyên tắc FIFO (First-In, First-Out). Phần tử được thêm vào đầu tiên sẽ được lấy ra đầu tiên. Tưởng tượng một hàng người xếp hàng mua vé.\n\n### Vận dụng\n`collections.deque` là lựa chọn tốt nhất để triển khai queue vì `popleft()` rất hiệu quả.\n\n### Yêu cầu bài tập\nDùng `deque` để mô phỏng queue. Bắt đầu với queue rỗng. Thêm các số 1, 2, 3 vào. Sau đó lấy ra một phần tử. In ra queue cuối cùng.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "deque([2, 3])"
        }
      ]
    },
    {
      "id": 86,
      "difficulty": 3,
      "title": "Bài 86: Đệ quy (Recursion)",
      "desc": "### Khái niệm\nĐệ quy là một kỹ thuật lập trình trong đó một hàm tự gọi lại chính nó. Một hàm đệ quy cần có hai thành phần: trường hợp cơ sở (điểm dừng) và bước đệ quy (hàm gọi lại chính nó với một bài toán nhỏ hơn).\n\n### Ví dụ mẫu\n```python\n# Tính giai thừa\ndef factorial(n):\n    if n == 1:\n        return 1 # Trường hợp cơ sở\n    else:\n        return n * factorial(n - 1) # Bước đệ quy\n```\n\n### Yêu cầu bài tập\nSử dụng hàm đệ quy `factorial` trong ví dụ, tính và in ra giai thừa của 4.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "24"
        }
      ]
    },
    {
      "id": 87,
      "difficulty": 2,
      "title": "Bài 87: Global & Nonlocal",
      "desc": "### Khái niệm\n- `global`: Dùng bên trong một hàm để chỉ định rằng bạn muốn sửa đổi một biến đã được khai báo ở phạm vi toàn cục (ngoài tất cả các hàm).\n- `nonlocal`: Dùng trong một hàm lồng nhau để chỉ định bạn muốn sửa đổi một biến ở hàm gần nhất bên ngoài (không phải toàn cục).\n\n### Yêu cầu bài tập\nKhai báo biến `count = 0` ở phạm vi toàn cục. Viết một hàm `increment()` dùng từ khóa `global` để tăng `count` lên 1. Gọi hàm `increment()` hai lần, sau đó in ra giá trị của `count`.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "2"
        }
      ]
    },
    {
      "id": 88,
      "difficulty": 2,
      "title": "Bài 88: Shallow vs Deep Copy",
      "desc": "### Khái niệm\n- `copy()` (shallow copy): Tạo một đối tượng mới nhưng chỉ sao chép các tham chiếu đến các đối tượng con. Nếu sửa đối tượng con, cả bản gốc và bản sao đều thay đổi.\n- `deepcopy()` (cần `import copy`): Tạo một đối tượng mới và sao chép đệ quy tất cả các đối tượng con. Hai bản hoàn toàn độc lập.\n\n### Yêu cầu bài tập\nIn ra tên hàm dùng để tạo một bản sao độc lập hoàn toàn của một đối tượng phức tạp.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "deepcopy"
        }
      ]
    },
    {
      "id": 89,
      "difficulty": 3,
      "title": "Bài 89: Threading - Lock",
      "desc": "### Khái niệm\nTrong lập trình đa luồng (`threading`), khi nhiều luồng cùng cố gắng truy cập và sửa đổi một tài nguyên chung (ví dụ: một biến số), có thể xảy ra tình trạng gọi là **\"race condition\" (điều kiện tranh chấp)**. Để giải quyết, `threading.Lock` hoạt động như một \"khóa\" bảo vệ đoạn code quan trọng (critical section).\n\n- `lock.acquire()`: Luồng giành quyền kiểm soát khóa. Nếu khóa đang bị giữ, luồng sẽ chờ.\n- `lock.release()`: Giải phóng khóa khi hoàn tất.\n\nSử dụng `with lock:` là cách được khuyến nghị vì nó tự động quản lý việc khóa và mở khóa.\n\n### Vận dụng\nBạn sẽ dùng `threading.Lock` khi nhiều luồng cần ghi vào cùng một file, cập nhật một biến đếm chung, hoặc truy cập một phần của bộ nhớ chung để đảm bảo tính toàn vẹn của dữ liệu.\n\n*Lưu ý quan trọng:*\nViệc kiểm tra các vấn đề về điều kiện tranh chấp và cơ chế khóa rất khó trong môi trường hiện tại. Bài tập này chỉ tập trung vào việc giới thiệu cú pháp và khái niệm.\n\n### Yêu cầu bài tập\nHãy viết code để:\n1.  **Import** thư viện `threading`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong su dung threading.Lock`.\n3.  **Tạo một đối tượng `lock = threading.Lock()`**.\n4.  In ra **kiểu dữ liệu (type)** của đối tượng `lock` để xác nhận nó đã được tạo.\n5.  **Mô phỏng việc sử dụng lock** với một biến đếm toàn cục bằng cách **comment (ghi chú)** các lệnh liên quan đến `acquire` và `release` và tác vụ giả lập.",
      "test_cases": [
        {
          "input": "import threading\n\nprint(\"Dang mo phong su dung threading.Lock\")\n\nmy_lock = threading.Lock()\n\nprint(f\"Kiểu của đối tượng lock: {type(my_lock)}\")\n\nglobal_counter = 0\n\ndef increment_counter_safe():\n    global global_counter\n    print(f\"Luồng đang cố gắng khóa... (current_counter: {global_counter})\")\n    # with my_lock: # Cach tot nhat de su dung lock\n    #     # Doan code trong 'with' la critical section\n    #     # Chi mot luong duoc phep truy cap vao day tai mot thoi diem\n    #     current_value = global_counter\n    #     current_value += 1\n    #     time.sleep(0.01) # Gia lap viec xu ly ton thoi gian\n    #     global_counter = current_value\n    print(f\"Luồng đã hoàn tất việc cập nhật. (current_counter: {global_counter})\")\n\nprint(\"Đã mô phỏng xong threading.Lock.\")",
          "expected_output": "Dang mo phong su dung threading.Lock\nKiểu của đối tượng lock: <class '_thread.lock'>\nĐã mô phỏng xong threading.Lock."
        }
      ]
    },
    {
      "id": 90,
      "difficulty": 3,
      "title": "Bài 90: Asyncio - aiohttp",
      "desc": "### Khái niệm\n**`aiohttp`** là một thư viện Python mạnh mẽ để xây dựng cả **web client và web server bất đồng bộ** bằng cách sử dụng framework `asyncio`. Nó là lựa chọn tuyệt vời khi bạn cần thực hiện nhiều yêu cầu HTTP hoặc xử lý nhiều kết nối mạng đồng thời một cách hiệu quả, đặc biệt trong các ứng dụng I/O-bound.\n\n### Vận dụng\n`aiohttp` được dùng để xây dựng web crawler tốc độ cao, phát triển các bot, xây dựng microservice/API gateway, hoặc viết các tác vụ chạy nền cần giao tiếp mạng. Các khái niệm chính: `aiohttp.ClientSession` (phiên client), `await session.get(url)` (gửi GET bất đồng bộ), `await response.json()` (lấy JSON bất đồng bộ).\n\n*Lưu ý quan trọng:*\n`aiohttp` hoạt động dựa trên `asyncio` và cần chạy trong một vòng lặp sự kiện (event loop). Môi trường bạn đang học **không thể khởi tạo hoặc quản lý vòng lặp sự kiện** để thực hiện các yêu cầu mạng bất đồng bộ thật. Bài tập này chỉ mang tính giới thiệu về thư viện và vai trò của nó.\n\n### Yêu cầu bài tập\nHãy viết code để:\n1.  **Import** thư viện `aiohttp` và `asyncio`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong Client HTTP bat dong bo voi aiohttp`.\n3.  **Viết các lệnh cơ bản** để mô phỏng việc tạo `ClientSession` và gửi yêu cầu GET (dùng `async with`), nhưng hãy **comment (ghi chú)** chúng lại.\n4.  Cuối cùng, in ra chuỗi `Da import aiohttp` để xác nhận.",
      "test_cases": [
        {
          "input": "import aiohttp\nimport asyncio\n\nprint(\"Dang mo phong Client HTTP bat dong bo voi aiohttp\")\n\n# Cac lenh aiohttp nay khong chay duoc va khong thuc hien yeu cau HTTP that\n# trong moi truong van ban nay.\n# Neu ban muon chay thu, ban can:\n# 1. Cai dat aiohttp: pip install aiohttp\n# 2. Chay trong moi truong Python co ho tro asyncio (VD: tren may tinh ca nhan).\n\n# Vi du (khong chay):\n# async def fetch_data(url):\n#     async with aiohttp.ClientSession() as session:\n#         async with session.get(url) as response:\n#             print(f\"Đã nhận phản hồi từ {url} với status: {response.status}\")\n#             data = await response.json()\n#             return data\n\n# async def main():\n#     print(\"Chương trình chính: Bắt đầu lấy dữ liệu bất đồng bộ.\")\n#     # Thay the bang mot API cong khai neu ban muon thu nghiem that\n#     # data = await fetch_data(\"https://jsonplaceholder.typicode.com/todos/1\")\n#     # print(f\"Dữ liệu nhận được (mô phỏng): {data}\")\n#     print(\"Chương trình chính: Hoàn thành lấy dữ liệu bất đồng bộ (mô phỏng).\")\n\n# if __name__ == '__main__':\n#     # asyncio.run(main()) # Chi chay tren moi truong ho tro asyncio\n#     pass\n\nprint(\"Da import aiohttp\")",
          "expected_output": "Dang mo phong Client HTTP bat dong bo voi aiohttp\nDa import aiohttp"
        }
      ]
    },
    {
      "id": 91,
      "difficulty": 3,
      "title": "Bài 91: Scikit-learn - Huấn luyện Model",
      "desc": "### Khái niệm\nTrong học máy, sau khi bạn đã chuẩn bị dữ liệu và chọn một loại mô hình (ví dụ: hồi quy tuyến tính), bước tiếp theo là **huấn luyện (train) mô hình**. Quá trình huấn luyện này dạy cho mô hình cách \"học\" từ dữ liệu đã có để tìm ra các mẫu hoặc mối quan hệ ẩn.\n\nTrong `scikit-learn`, phương thức **`.fit(X, y)`** được sử dụng để thực hiện việc huấn luyện này.\n- **`X`**: Là dữ liệu đầu vào, còn gọi là **đặc trưng (features)**. Đây là những gì mô hình sẽ nhìn vào để học (ví dụ: kích thước nhà, số phòng). `X` thường là một mảng 2D (matrix) hoặc DataFrame của Pandas.\n- **`y`**: Là đầu ra mà mô hình cần dự đoán, còn gọi là **nhãn (labels)** hoặc giá trị mục tiêu. Đây là \"đáp án đúng\" mà mô hình cần học (ví dụ: giá nhà). `y` thường là một mảng 1D (vector).\n\nTrong quá trình `.fit()`, thuật toán học máy sẽ điều chỉnh các tham số nội bộ của mô hình để mô hình có thể tạo ra dự đoán tốt nhất dựa trên dữ liệu đầu vào.\n\n### Yêu cầu bài tập\nIn ra tên phương thức dùng để huấn luyện một mô hình trong Scikit-learn.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "fit"
        }
      ]
    },
    {
      "id": 92,
      "difficulty": 3,
      "title": "Bài 92: Scikit-learn - Dự đoán",
      "desc": "### Khái niệm\nSau khi mô hình đã được huấn luyện, bạn có thể dùng nó để dự đoán kết quả cho các dữ liệu mới. Phương thức `.predict(X_new)` được dùng cho việc này, trong đó `X_new` là dữ liệu mới mà mô hình chưa từng thấy.\n\n### Yêu cầu bài tập\nIn ra tên phương thức dùng để dự đoán kết quả từ một mô hình đã được huấn luyện trong Scikit-learn.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "predict"
        }
      ]
    },
    {
      "id": 93,
      "difficulty": 2,
      "title": "Bài 93: Pillow - Xử lý ảnh",
      "desc": "### Khái niệm\n`Pillow` là một nhánh (fork) thân thiện của thư viện PIL (Python Imaging Library). Nó là công cụ tiêu chuẩn để mở, xử lý và lưu các file ảnh với nhiều định dạng khác nhau trong Python.\n\n### Vận dụng\nBạn có thể dùng Pillow để mở ảnh (`Image.open()`), thay đổi kích thước (`image.resize()`), cắt ảnh (`image.crop()`), xoay ảnh (`image.rotate()`), áp dụng các bộ lọc, hoặc lưu ảnh (`image.save()`). Nó rất hữu ích cho các tác vụ tự động hóa xử lý ảnh, tạo thumbnail, hoặc thao tác ảnh cơ bản trong ứng dụng web/desktop.\n\n*Lưu ý quan trọng:*\nTương tự OpenCV, ứng dụng này **không thể hiển thị ảnh** trong môi trường văn bản. Bài tập chỉ mang tính giới thiệu về thư viện và các chức năng cơ bản của nó. Để thực sự làm việc và thấy kết quả, bạn cần chạy code trên máy tính cá nhân của mình.\n\n### Yêu cầu bài tập\nHãy viết code để:\n1.  **Import** lớp `Image` từ thư viện `PIL`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong xu ly anh voi Pillow`.\n3.  **Viết các lệnh cơ bản** để mô phỏng việc mở và xử lý ảnh (ví dụ: thay đổi kích thước), nhưng hãy **comment (ghi chú)** chúng lại.\n4.  Cuối cùng, in ra chuỗi `Da import Pillow` để xác nhận.",
      "test_cases": [
        {
          "input": "from PIL import Image\n\nprint(\"Dang mo phong xu ly anh voi Pillow\")\n\n# Cac lenh Pillow nay khong chay duoc va khong hien thi anh that\n# trong moi truong van ban nay.\n# Neu ban chay tren may tinh ca nhan, ban can cai dat Pillow: pip install Pillow\n# va co file anh de mo.\n\n# Vi du (khong chay):\n# try:\n#     # img = Image.open('duong_dan_den_anh_cua_ban.jpg')\n#     # print(f\"Đã mở ảnh (mô phỏng) với kích thước: {img.size}\")\n#     # resized_img = img.resize((100, 100)) # Thay doi kich thuoc\n#     # print(f\"Ảnh đã đổi kích thước (mô phỏng) thành: {resized_img.size}\")\n#     # resized_img.save('anh_nho.jpg') # Luu anh moi\n#     # print(\"Đã hoàn tất mô phỏng xử lý ảnh.\")\n# except FileNotFoundError:\n#     print(\"File ảnh không tìm thấy. Vui lòng cung cấp đường dẫn đúng.\")\n# except Exception as e:\n#     print(f\"Xảy ra lỗi khi mô phỏng Pillow: {e}\")\n\nprint(\"Da import Pillow\")",
          "expected_output": "Dang mo phong xu ly anh voi Pillow\nDa import Pillow"
        }
      ]
    },
    {
      "id": 94,
      "difficulty": 2,
      "title": "Bài 94: Docstrings và PEP 257",
      "desc": "### Khái niệm\nDocstring là một chuỗi văn bản xuất hiện ngay sau định nghĩa của một module, hàm, lớp, hoặc phương thức. Nó được dùng để tài liệu hóa code. PEP 257 là một quy ước về cách viết docstring cho dễ đọc và nhất quán.\n\n### Ví dụ mẫu\n```python\ndef add(a, b):\n    \"\"\"Hàm này nhận hai số và trả về tổng của chúng.\"\"\"\n    return a + b\n\nprint(add.__doc__)\n```\n\n### Yêu cầu bài tập\nViết một hàm `my_func` có docstring là `Day la docstring`. Sau đó, in ra `__doc__` của hàm đó.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "Day la docstring"
        }
      ]
    },
    {
      "id": 95,
      "difficulty": 3,
      "title": "Bài 95: Django - Web Framework",
      "desc": "### Khái niệm\n`Django` là một web framework cấp cao của Python, khuyến khích việc phát triển nhanh và thiết kế sạch sẽ, thực tế. So với Flask, Django lớn hơn, có nhiều tính năng tích hợp sẵn (pin đi kèm) như ORM (Object-Relational Mapping), admin panel, hệ thống xác thực. Django tuân theo kiến trúc MVT (Model-View-Template).\n\n### Vận dụng\nBạn sẽ dùng Django để xây dựng các ứng dụng web phức tạp, có quy mô lớn như các trang thương mại điện tử, mạng xã hội, hệ thống quản lý nội dung. Nó cung cấp đầy đủ công cụ để quản lý CSDL, URL, giao diện người dùng, và bảo mật.\n\n*Lưu ý quan trọng:*\nDjango là một framework lớn và không thể chạy một web server đầy đủ trong môi trường này. Bài tập này chỉ mang tính giới thiệu về sự tồn tại và vai trò của nó trong phát triển web.\n\n### Yêu cầu bài tập\nHãy viết code để:\n1.  **Import** thư viện `django`.\n2.  **In ra một chuỗi mô tả** bạn đang làm gì, ví dụ: `Dang mo phong su dung Django framework`.\n3.  **Viết các lệnh cơ bản** để mô phỏng cấu trúc một dự án Django (ví dụ: tạo project, app), nhưng hãy **comment (ghi chú)** chúng lại.\n4.  Cuối cùng, in ra chuỗi `Da import Django` để xác nhận.",
      "test_cases": [
        {
          "input": "import django\n\nprint(\"Dang mo phong su dung Django framework\")\n\n# Cac lenh Django nay khong chay duoc va khong khoi dong web server that\n# trong moi truong van ban nay.\n# Neu ban chay tren may tinh ca nhan, ban can cai dat Django: pip install django\n# va su dung cac lenh quan ly du an nhu 'django-admin startproject myproject'.\n\n# Vi du (khong chay):\n# from django.conf import settings\n# if not settings.configured:\n#     settings.configure(DEBUG=True, SECRET_KEY='your-secret-key')\n\n# print(\"Đã cấu hình Django settings (mô phỏng).\")\n\n# # from django.urls import path\n# # from django.http import HttpResponse\n\n# # def home_view(request):\n# #     return HttpResponse(\"Hello from Django!\")\n\n# # urlpatterns = [\n# #     path('', home_view),\n# # ]\n\nprint(\"Da import Django\")",
          "expected_output": "Dang mo phong su dung Django framework\nDa import Django"
        }
      ]
    },
    {
      "id": 96,
      "difficulty": 1,
      "title": "Bài 96: List Slicing",
      "desc": "### Khái niệm\nSlicing là kỹ thuật để lấy ra một phần của một chuỗi hoặc danh sách. Cú pháp: `list[start:stop:step]`.\n- `start`: chỉ số bắt đầu (bao gồm).\n- `stop`: chỉ số kết thúc (không bao gồm).\n- `step`: bước nhảy.\n\n### Ví dụ mẫu\n```python\nnumbers = [0, 1, 2, 3, 4, 5]\nprint(numbers[1:4]) # In ra [1, 2, 3]\nprint(numbers[::2]) # In ra [0, 2, 4]\n```\n\n### Yêu cầu bài tập\nCho list `my_list = [10, 20, 30, 40, 50]`. Dùng slicing để lấy ra các phần tử từ chỉ số 1 đến 3 và in kết quả.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "[20, 30, 40]"
        }
      ]
    },
    {
      "id": 97,
      "difficulty": 3,
      "title": "Bài 97: OOP - Abstract Base Classes",
      "desc": "### Khái niệm\nLớp cơ sở trừu tượng (Abstract Base Class - ABC) định nghĩa một giao diện chung cho các lớp con. Nó có thể định nghĩa các phương thức trừu tượng mà các lớp con bắt buộc phải triển khai. Không thể tạo đối tượng trực tiếp từ một ABC.\n\n### Ví dụ mẫu\n```python\nfrom abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n```\n\n### Yêu cầu bài tập\nImport `ABC` và `abstractmethod` từ module `abc`. Sau đó in ra chuỗi `Da import ABC`.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "Da import ABC"
        }
      ]
    },
    {
      "id": 98,
      "difficulty": 2,
      "title": "Bài 98: Walrus Operator (:=)",
      "desc": "### Khái niệm\nToán tử walrus `:=` (từ Python 3.8+) cho phép bạn gán giá trị cho một biến như một phần của một biểu thức lớn hơn. Nó hữu ích trong các vòng lặp `while` hoặc list comprehension để tránh tính toán lại giá trị.\n\n### Ví dụ mẫu\n```python\n# Thay vì:\nn = len(my_list)\nif n > 10:\n    print(f'List quá dài ({n} phần tử)')\n# Ta có thể viết:\nif (n := len(my_list)) > 10:\n    print(f'List quá dài ({n} phần tử)')\n```\n\n### Yêu cầu bài tập\nDùng toán tử walrus trong một câu lệnh `if` để gán giá trị 10 cho biến `x` và kiểm tra xem `x` có bằng 10 không. Nếu có, in ra giá trị của `x`.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "10"
        }
      ]
    },
    {
      "id": 99,
      "difficulty": 2,
      "title": "Bài 99: Đóng gói và Phân phối",
      "desc": "### Khái niệm\nSau khi hoàn thành dự án, bạn có thể đóng gói nó thành một 'package' để người khác có thể dễ dàng cài đặt bằng `pip`. Các công cụ như `setuptools` và `wheel` được dùng cho việc này. File `setup.py` sẽ chứa các thông tin về package của bạn.\n\n### Yêu cầu bài tập\nĐể mô phỏng, hãy in ra tên file cấu hình chính dùng để đóng gói một package Python.",
      "test_cases": [
        {
          "input": "",
          "expected_output": "setup.py"
        }
      ]
    },
    {
      "id": 100,
      "difficulty": 3,
      "title": "Bài 100: Hành trình Bắt đầu!",
      "desc": "### Chúc mừng!\nBạn đã hoàn thành 100 bài học, một cột mốc cực kỳ quan trọng! Bạn đã đi từ những khái niệm cơ bản nhất đến các thư viện mạnh mẽ và các chủ đề nâng cao trong lập trình. Đây không phải là điểm kết thúc, mà là điểm khởi đầu cho hành trình lập trình thực sự của bạn.\n\n### What's next?\nHãy dùng những kiến thức này để xây dựng một dự án của riêng bạn. Đó là cách tốt nhất để củng cố và biến kiến thức thành kỹ năng.\n\n### Yêu cầu bài tập\nĐể tốt nghiệp khóa học, hãy in ra chuỗi thể hiện quyết tâm của bạn: `Hanh trinh cua toi bat dau tu day!`",
      "test_cases": [
        {
          "input": "",
          "expected_output": "Hanh trinh cua toi bat dau tu day!"
        }
      ]
    }
  ]
}
