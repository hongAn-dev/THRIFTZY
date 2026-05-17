# 📋 BÁO CÁO PHÂN TÍCH KHOẢNG CÁCH & KẾ HOẠCH HÀNH ĐỘNG (GAP ANALYSIS)
## Dự án: THRIFTZY - Premium Thrift Resale Platform

Chào bạn! Dưới đây là phân tích chi tiết dựa trên hình ảnh yêu cầu chỉnh sửa từ khách hàng (Brand Guide mới) đối chiếu với mã nguồn hiện tại của dự án (`index.html`, `style.css`, `app.js`). 

Tôi đã lập bảng so sánh và chỉ ra các điểm **cần sửa đổi ngay lập tức** để khớp 100% với yêu cầu thiết kế mới của khách hàng.

---

## 🔍 BẢNG SO SÁNH & CÁC ĐIỂM CẦN CHỈNH SỬA

| Hạng mục thiết kế | Hiện trạng trong Code | Yêu cầu của Khách hàng (Mockup) | Điểm cần chỉnh sửa & giải pháp kỹ thuật |
| :--- | :--- | :--- | :--- |
| **🎨 Tone màu chủ đạo** | <ul><li>Màu hồng đậm cánh sen (`--accent: #FF2D85`)</li><li>Nền trắng tinh (`--bg: #FFFFFF`)</li></ul> | <ul><li>**Hồng Pastel:** `#F3CDDC`</li><li>**Trắng Hồng (Nền):** `#FCF6FA`</li></ul> | **Cần sửa trong `style.css`:**<br>1. Thay đổi giá trị biến `--accent` và các shade liên quan thành `#F3CDDC`.<br>2. Cập nhật nền trang chủ (`body` hoặc container chính) thành `#FCF6FA`. |
| **🔤 Phông chữ (Typography)** | Sử dụng bộ font sang trọng cổ điển:<br><ul><li>`Inter` (Không chân)</li><li>`Playfair Display` (Có chân - Serif)</li></ul> | **Lexend Exa** làm phông chữ chủ đạo duy nhất (phong cách hiện đại, nét đều, hình khối). | **Cần sửa trong `index.html` & `style.css`:**<br>1. Thêm link Google Font `Lexend Exa` vào `<head>` của `index.html`.<br>2. Đặt `font-family: 'Lexend Exa', sans-serif;` làm mặc định cho toàn bộ website trong `style.css`. |
| **🔳 Kiểu dáng nút (Buttons)** | Nút dạng Luxury tối giản: phẳng, góc vuông hoặc bo nhẹ, có hiệu ứng chuyển màu mượt mà. | **Phong cách Neobrutalism (Retro Pop):**<br><ul><li>**Nút chính (+ SHOP NOW):** Nền hồng `#F3CDDC`, viền đen dày nổi bật, có đổ bóng khối đen lệch góc (`box-shadow` dạng solid phẳng), text viết hoa, có dấu cộng `+`.</li><li>**Nút phụ (+ SELL AN ITEM):** Nền trắng `#FFFFFF`, viền đen dày, đổ bóng khối đen lệch góc tương tự.</li><li>**Nút phân loại (Filter):** Bo tròn góc (Pill-shape), viền đen. Nút được chọn (`ALL`) có nền hồng `#F3CDDC`, nút không chọn (`TOPS`, `BOTTOMS`,...) có nền trắng và viền đen.</li></ul> | **Cần sửa trong `style.css` & `app.js`:**<br>1. Viết lại CSS cho `.btn--primary` và `.btn--outline` để có viền đen `border: 2px solid #000` và đổ bóng phẳng `box-shadow: 4px 4px 0px #000;`. Thêm hiệu ứng di chuột (hover) dịch chuyển nút (`transform: translate(-2px, -2px); box-shadow: 6px 6px 0px #000;`).<br>2. Thiết kế lại lớp `.filter-dropdown` thành dạng pill với viền đen, đổi màu nền hồng `#F3CDDC` khi active.<br>3. Thêm ký tự `+` vào trước nội dung nút trong HTML và hàm render của JS. |
| **🛍️ Icon Giỏ hàng & Yêu thích** | Sử dụng các icon nét mảnh (Feather Icons SVG) tối giản màu đen. | Icon dạng **Pixelated / Retro đáng yêu màu hồng pastel** (Giỏ hàng siêu thị pixel hồng và Trái tim pixel hồng). | **Cần sửa trong `index.html` & `app.js`:**<br>1. Thay thế mã SVG hiện tại của giỏ hàng và trái tim yêu thích bằng SVG pixelated hoặc custom CSS/hình ảnh retro màu hồng pastel để tạo cảm giác Y2K/Retro đáng yêu. |
| **🏷️ Logo chính** | Dạng text đơn giản "THRIFTZY" viết hoa, font serif cao cấp. | Đổi thành Logo **THRIFTZY STYLE** kiểu chữ bong bóng (bubble text) viền đen 3D retro, có ngôi sao trang trí phía trên và banner chữ "STYLE" kẹp giữa các ngôi sao. | **Cần sửa trong `index.html` & `app.js`:**<br>1. Thiết kế một cụm SVG logo hoặc CSS logo Y2K/Bubble chân thực để tái hiện chính xác logo **THRIFTZY STYLE** mới ở Header và Footer. |
| **🏡 Bố cục Trang chủ (Homepage)** | <ul><li>Banner Hero ảnh lớn chiếm 90% chiều cao màn hình.</li><li>Phần giới thiệu About Us có 2 cột ảnh và chữ đen nền trắng.</li><li>Chỉ hiển thị 4 sản phẩm tiêu biểu.</li><li>Có phần kêu gọi đăng ký bán hàng "Start Selling" chiếm diện tích lớn.</li></ul> | <ul><li>**Thanh tìm kiếm:** Nền màu hồng `#F3CDDC`.</li><li>**Nền trang:** Màu trắng hồng `#FCF6FA`.</li><li>**Phần About Us:** Nền màu hồng `#F3CDDC` toàn bộ chiều ngang. Trái là chữ "ABOUT US" và các dòng mô tả gạch đầu dòng, phải là bức ảnh Poster dọc tuyên truyền tái chế "RE-DUCE, RE-USE, RE-CYCLE, RE-WEAR, RE-REPEAT".</li><li>**Dãy sản phẩm (Marketplace):** Hiển thị khoảng 3 hàng sản phẩm, mỗi hàng 4 sản phẩm (tổng cộng 12 hình sản phẩm kèm giá ngay dưới).</li><li>**Xem thêm:** Thay vì nút kêu gọi to, dùng nút dấu 3 chấm `...` hoặc nút "Xem thêm" đơn giản ở dưới dãy sản phẩm.</li></ul> | **Cần sửa trong `app.js` (hàm `renderHome`):**<br>1. Thay đổi cấu trúc HTML sinh ra trong `renderHome()`. Cài đặt thanh tìm kiếm header luôn có màu nền hồng `#F3CDDC`.<br>2. Cập nhật phần "About Us" sử dụng container nền hồng `#F3CDDC`, căn chỉnh văn bản bên trái và ảnh Poster Y2K Y2K tái chế bên phải.<br>3. Điều chỉnh danh sách hiển thị sản phẩm ở trang chủ thành 12 sản phẩm thay vì 4.<br>4. Thêm nút `...` hoặc "Xem thêm" phong cách Neobrutalist ở cuối dãy sản phẩm. |
| **📄 Trang Chi tiết Sản phẩm** | Hiện tại hiển thị ảnh bên trái, thông tin giá, kích thước bên phải và phần Description gấp mở dạng `<details>`. Không có mục lỗi sản phẩm hay nút liên hệ người bán trực quan. | <ul><li>Hiển thị chi tiết mô tả sản phẩm và giá cả rõ ràng.</li><li>**Hiển thị các lỗi/khuyết điểm mà sản phẩm có** (vì là đồ 2hand tuyển chọn).</li><li>**Có nút nhắn tin** hình phong thư đáng yêu ✉ (chỉ cần là nút giả lập "nhắn tin cho người bán", click vào không cần chuyển trang chat thật).</li></ul> | **Cần sửa trong `app.js` (hàm `renderProduct`):**<br>1. Thêm một khu vực hiển thị **"Tình trạng sản phẩm / Khuyết điểm (Faults & Flaws)"** như vết ố nhỏ, sờn vải, mất cúc để người mua dễ theo dõi.<br>2. Bổ sung nút **"Nhắn tin cho người bán"** có biểu tượng phong thư hồng đáng yêu ✉ gần nút "Add to Bag". Khi click sẽ hiển thị thông báo toast giả lập dễ thương ("Tính năng nhắn tin đang được kết nối với người bán!"). |

---

## 🛠️ KẾ HOẠCH HÀNH ĐỘNG CHI TIẾT (ACTION PLAN)

Để hiện thực hóa yêu cầu của khách hàng và đạt được độ hoàn thiện cao nhất, tôi sẽ tiến hành sửa đổi mã nguồn theo các bước sau:

### Bước 1: Cập nhật `index.html`
* Tích hợp Google Font **Lexend Exa** để thiết lập font chữ chủ đạo mới.
* Tích hợp bộ thư viện Font hoặc các mã SVG retro pixel cho Giỏ hàng & Trái tim yêu thích.

### Bước 2: Tái cấu trúc Hệ thống CSS (`style.css`)
* Đặt lại các biến màu sắc: `--accent: #F3CDDC;` (Hồng pastel), `--bg: #FCF6FA;` (Trắng hồng).
* Áp dụng font `Lexend Exa` cho toàn bộ văn bản (`body`, `button`, `input`).
* Thiết lập phong cách **Neobrutalism** cho các nút (`.btn--primary`, `.btn--outline`) với viền đen đậm, không bo góc (hoặc bo rất nhẹ) và đổ bóng phẳng `box-shadow: 4px 4px 0px #000`.
* Tạo phong cách pill cho bộ lọc `.filter-dropdown` (viền đen, nền hồng khi active).
* Thiết kế CSS cho Logo Y2K **THRIFTZY STYLE** (chữ bong bóng nổi bật).

### Bước 3: Sửa đổi logic hiển thị trong `app.js`
* **Cập nhật dữ liệu sản phẩm:** Thêm thuộc tính `faults` (các lỗi nhỏ) vào danh sách sản phẩm mẫu để hiển thị trực quan trên trang chi tiết.
* **Hàm `renderHome()` (Trang chủ mới):**
  * Thiết kế lại cấu trúc: Banner tối giản -> Phần About Us nền hồng `#F3CDDC` kèm Poster tái chế Y2K -> Grid 12 sản phẩm (3 hàng x 4 cột) hiển thị đầy đủ tên, giá -> Nút "Xem thêm" dạng `...`.
  * Đổi màu nền thanh tìm kiếm sang hồng `#F3CDDC`.
* **Hàm `renderProduct()` (Trang chi tiết mới):**
  * Bổ sung hiển thị danh sách khuyết điểm (`Faults & Conditions`).
  * Thêm nút nhắn tin ✉ hình phong bì hồng cực xinh xắn kèm hiệu ứng thông báo toast giả lập.

---

> [!NOTE]
> **Cam kết thẩm mỹ Y2K & Neobrutalism**: Tôi sẽ tạo nên một giao diện cực kỳ bắt mắt, cá tính và "WOW" đúng chất Thrift thời thượng. Màu hồng pastel kết hợp viền đen dày nổi loạn sẽ biến Thriftzy thành một trang web cực kỳ độc đáo và chuyên nghiệp.

Bạn có đồng ý với bảng phân tích và kế hoạch sửa đổi này không? Hãy cho tôi biết để tôi bắt đầu thực hiện chỉnh sửa trực tiếp vào mã nguồn của dự án nhé!
