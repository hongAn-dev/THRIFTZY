# 👑 Cập Nhật Danh Mục Chỉ Bán Quần Áo - THRIFTZY Walkthrough

Chúng tôi đã thực hiện cập nhật toàn diện cho ứng dụng web **THRIFTZY** để chuyển đổi sang mô hình chuyên biệt chỉ bán quần áo (váy, đầm, áo, quần, áo khoác), loại bỏ hoàn toàn các danh mục không liên quan như túi xách, giày dép và phụ kiện theo đúng yêu cầu của bạn.

---

## 🛠️ Các thay đổi chi tiết đã thực hiện

### 1. Cập Nhật Hệ Thống Danh Mục (Categories) chuyên quần áo
Trong file `app.js`, chúng tôi đã định nghĩa lại danh sách danh mục và nhãn hiển thị:
- **Trước đây:** `Tất cả`, `Quần áo`, `Túi xách`, `Giày dép`, `Phụ kiện`
- **Hiện tại:**
  - `All`: **Tất cả sản phẩm**
  - `Dresses`: **Váy**
  - `Tops`: **Áo**
  - `Pants`: **Quần**
  - `Outerwear`: **Áo khoác**

### 2. Cập Nhật Dữ Liệu 12 Sản Phẩm Mặc Định
Toàn bộ 12 sản phẩm mặc định (đều là quần áo) đã được phân loại chính xác vào các danh mục thời trang mới thay vì nhãn chung `Apparel`:
- **Áo Hai Dây Ren Nâu Y2K**, **Áo Cổ Yếm Sọc Đỏ Trắng**, **Áo Cổ Yếm Nhún Bèo Màu Rêu** -> Phân loại vào danh mục `Tops` (Áo).
- **Đầm Chữ A Ánh Nhũ Đen**, **Đầm Cổ Yếm Linen Xám Tro**, **Đầm Cổ Yếm Denim Thêu Họa Tiết**, **Đầm Chấm Bi Dáng Babydoll**, **Đầm Hai Dây Hoa Nhí Nâu Chocolate**, **Đầm Ngủ Satin Phối Ren Đen** -> Phân loại vào danh mục `Dresses` (Váy).
- **Quần Jean Ống Loe Wash Sáng**, **Quần Jean Ống Loe Gân Giữa Wash Tối**, **Quần Jean Ống Loe Wash Điển Hình** -> Phân loại vào danh mục `Pants` (Quần).

### 3. Đồng Bộ Trình Chọn Khi Đăng Bán Sản Phẩm Mới (Post Form)
Trình chọn danh mục ở trang **Đăng bán sản phẩm mới** đã được cập nhật đồng bộ giúp người bán dễ dàng chọn đúng loại trang phục:
```html
<select class="form-control" name="category" required>
    <option value="Dresses">Váy</option>
    <option value="Tops">Áo các loại</option>
    <option value="Pants">Quần</option>
    <option value="Outerwear">Áo khoác</option>
</select>
```

### 4. Tối Ưu Link Điều Hướng Tại Footer
Trong file `index.html`, các đường link điều hướng nhanh tại footer đã được chuyển từ túi xách/giày dép sang các danh mục quần áo:
- **Túi xách Hàng hiệu** -> **Váy Vintage** (Tự động lọc danh mục `Dresses`)
- **Giày Vintage** -> **Áo Retro** (Tự động lọc danh mục `Tops`)
- **Trang phục Lưu trữ** -> **Quần & Denim** (Tự động lọc danh mục `Pants`)

### 5. Khởi Động Lại Bộ Nhớ Cache Trình Duyệt (Version Bump)
Chúng tôi đã nâng cấp phiên bản bộ nhớ state của ứng dụng lên `'2.6'` trong `app.js`. Điều này giúp trình duyệt tự động xóa bộ nhớ cache cũ (localStorage) của người dùng cũ để nạp ngay cấu trúc danh mục và phân loại sản phẩm mới mà không bị lỗi hiển thị.

---

## 📂 Các File Đã Chỉnh Sửa

1. **[app.js](file:///d:/Torrent_Doc/Job/Web%202hand/app.js):** Cập nhật dữ liệu sản phẩm, cấu trúc danh mục lọc, bộ chọn trong form đăng bán, nâng version ứng dụng.
2. **[index.html](file:///d:/Torrent_Doc/Job/Web%202hand/index.html):** Cập nhật menu liên kết nhanh ở phần Footer đồng bộ với các danh mục quần áo mới.
