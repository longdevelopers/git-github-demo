# Demo Quản lý mã nguồn với Git & GitHub

Đây là project web đơn giản dùng cho bài báo cáo chủ đề **Quản lý mã nguồn với Git & GitHub**.

## 1. Nội dung project

Project gồm các file:

| File | Chức năng |
|---|---|
| `index.html` | Giao diện chính của website |
| `style.css` | Định dạng giao diện |
| `script.js` | Xử lý hiển thị lệnh Git |
| `.gitignore` | Loại bỏ file không cần đưa lên GitHub |
| `README.md` | Mô tả project |

## 2. Chức năng chính

- Giới thiệu Git và GitHub.
- Hiển thị danh sách các lệnh Git cơ bản.
- Mô tả quy trình làm việc với GitHub.
- Demo hiển thị ngẫu nhiên một lệnh Git.

## 3. Cách chạy project

Cách 1: Mở trực tiếp file:

```bash
index.html
```

Cách 2: Dùng Live Server trong Visual Studio Code.

## 4. Các lệnh Git sử dụng để đưa project lên GitHub

```bash
git init
git add .
git commit -m "Khoi tao project demo Git GitHub"
git branch -M main
git remote add origin https://github.com/ten-cua-ban/git-github-demo.git
git push -u origin main
```

## 5. Ý nghĩa bài demo

Project này minh họa cách quản lý mã nguồn bằng Git và lưu trữ mã nguồn trên GitHub. Sinh viên có thể sử dụng project để thực hành các thao tác như tạo repository, commit, push, tạo branch và quản lý phiên bản.
