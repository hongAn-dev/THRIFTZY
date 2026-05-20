const app = {
    state: {
        version: '2.4', // Bumping version for location feature addition
        view: 'aboutUs',
        cart: [],
        orders: [], // Ensure empty initialization
        wishlist: [],
        products: [
            { id: 1, designer: 'Kho Lưu Trữ Y2K', name: 'Áo Hai Dây Ren Nâu Y2K', price: 125000, category: 'Apparel', image: 'https://i.postimg.cc/nhBhHmZd/a9a50ce2-eccb-4a82-a4f2-672c22cf18e8.jpg', description: 'Áo ren nâu phối viền kem phong cách Y2K, form ôm nhẹ tôn dáng. Chất vải co giãn tốt, phù hợp mặc đi chơi hoặc phối layer.', sizes: ['S-M'], fit: 'Áo ren nâu phối viền kem phong cách Y2K, form ôm nhẹ tôn dáng. Chất vải co giãn tốt, phù hợp mặc đi chơi hoặc phối layer.', faults: ['9/10, chỉ có vài dấu xù lông nhẹ không đáng kể.'], location: 'Hồ Chí Minh' },
            { id: 2, designer: 'Đồ Tiệc Vintage', name: 'Đầm Chữ A Ánh Nhũ Đen', price: 165000, category: 'Apparel', image: 'https://i.postimg.cc/TYHtRyQX/baa34b38-c722-4518-9a45-b5c5dfb98fd8.jpg', description: 'Đầm đen ánh nhũ nhẹ, form ôm chữ A nữ tính, phù hợp đi tiệc hoặc chụp ảnh. Chất liệu mềm, lên form đẹp.', sizes: ['M'], fit: 'Đầm đen ánh nhũ nhẹ, form ôm chữ A nữ tính, phù hợp đi tiệc hoặc chụp ảnh. Chất liệu mềm, lên form đẹp.', faults: ['9/10, nhũ vẫn còn đẹp, có vài nếp gấp nhẹ do bảo quản.'], location: 'Hà Nội' },
            { id: 3, designer: 'Xưởng Linen', name: 'Đầm Cổ Yếm Linen Xám Tro', price: 180000, category: 'Apparel', image: 'https://i.postimg.cc/cJHvmHwB/59ac4af8-c980-438c-adf7-f6824666df2a.jpg', description: 'Váy cổ yếm chất liệu linen màu xám tro cá tính. Thiết kế thân áo ôm sát kết hợp tùng váy xếp tầng xòe nhẹ, điểm xuyết viền ren tua rua lạ mắt.', sizes: ['S'], fit: 'Váy cổ yếm chất liệu linen màu xám tro cá tính. Thiết kế thân áo ôm sát kết hợp tùng váy xếp tầng xòe nhẹ, điểm xuyết viền ren tua rua lạ mắt. Form dáng còn rất cứng cáp, vải linen đứng dáng.', faults: ['9.5/10, form dáng còn rất cứng cáp, vải linen đứng dáng.'], location: 'Đà Nẵng' },
            { id: 4, designer: 'Kho Denim', name: 'Đầm Cổ Yếm Denim Thêu Họa Tiết', price: 150000, category: 'Apparel', image: 'https://i.postimg.cc/MZyp1Rgn/add3a0e5-f3ea-48fd-812d-36d4abd803f8.jpg', description: 'Đầm jean cổ yếm phong cách vintage Y2K, phối chi tiết thêu nổi bật ở phần ngực. Form ôm eo và chân váy xòe nhẹ.', sizes: ['S'], fit: 'Đầm jean cổ yếm phong cách vintage Y2K, phối chi tiết thêu nổi bật ở phần ngực. Form ôm eo và chân váy xòe nhẹ.', faults: ['8.5/10, màu jean còn đẹp, có bạc màu nhẹ tự nhiên ở vài đường may.'], location: 'Hồ Chí Minh' },
            { id: 5, designer: 'Chấm Bi Retro', name: 'Đầm Chấm Bi Dáng Babydoll', price: 135000, category: 'Apparel', image: 'https://i.postimg.cc/8cDDZKxk/0e1107ab-4489-4a66-97d1-a4a2451b8a47.jpg', description: 'Đầm hai dây chấm bi đen trắng, form babydoll rộng nhẹ, mặc thoải mái và dễ phối phụ kiện. Vải mỏng nhẹ phù hợp mùa hè.', sizes: ['M-L'], fit: 'Đầm hai dây chấm bi đen trắng, form babydoll rộng nhẹ, mặc thoải mái và dễ phối phụ kiện. Vải mỏng nhẹ phù hợp mùa hè.', faults: ['9/10, có vài nếp nhăn nhẹ do gấp đồ nhưng không ảnh hưởng form.'], location: 'Hà Nội' },
            { id: 6, designer: 'Denim Phố', name: 'Quần Jean Ống Loe Wash Sáng', price: 190000, category: 'Apparel', image: 'https://i.postimg.cc/qvgrDCD1/cc11c067-afd2-4ccf-807b-2e2a988e42b3.jpg', description: 'Quần jeans ống loe nhẹ màu xanh sáng, wash nhẹ ở đùi tạo hiệu ứng chân dài.', sizes: ['M (27-28, eo 56-58)'], fit: 'Quần jeans ống loe nhẹ màu xanh sáng, wash nhẹ ở đùi tạo hiệu ứng chân dài.', faults: ['9/10, gấu quần và đường may còn nguyên vẹn, không lỗi.'], location: 'Hồ Chí Minh' },
            { id: 7, designer: 'Kẻ Ngang Thời Thượng', name: 'Áo Cổ Yếm Sọc Đỏ Trắng', price: 115000, category: 'Apparel', image: 'https://i.postimg.cc/fyB4Bwxp/c4613ee8-8a19-460f-bdc9-1f61ad44c414.jpg', description: 'Áo cổ yếm họa tiết kẻ ngang đỏ trắng nổi bật. Thiết kế vắt chéo ngực tôn vòng một, chất thun co giãn ôm body cực tốt.', sizes: ['S-M'], fit: 'Áo cổ yếm họa tiết kẻ ngang đỏ trắng nổi bật. Thiết kế vắt chéo ngực tôn vòng một, chất thun co giãn ôm body cực tốt.', faults: ['10/10, độ mới cao, màu sắc còn rất tươi.'], location: 'Hà Nội' },
            { id: 8, designer: 'Denim Retro', name: 'Quần Jean Ống Loe Gân Giữa Wash Tối', price: 175000, category: 'Apparel', image: 'https://i.postimg.cc/hGxHN8Lj/a6aea241-d8ab-4154-8e7e-3d6c9429a2ff.jpg', description: 'Quần jeans ống loe màu xanh đậm với đường gân dọc thân quần độc đáo.', sizes: ['M (28-29, eo 57-59)'], fit: 'Quần jeans ống loe màu xanh đậm với đường gân dọc thân quần độc đáo.', faults: ['8/10, ống quần có vết sứt nhẹ.'], location: 'Đà Nẵng' },
            { id: 9, designer: 'Váy Hai Dây Hoa', name: 'Đầm Hai Dây Hoa Nhí Nâu Chocolate', price: 140000, category: 'Apparel', image: 'https://i.postimg.cc/Gh26bnFz/62a2c4bc-9249-47d8-8163-7bb25f729e2c.jpg', description: 'Váy hai dây màu nâu chocolate họa tiết hoa nhí trắng tinh tế. Có dây rút điều chỉnh ở eo và viền ren ở ngực.', sizes: ['S-M'], fit: 'Váy hai dây màu nâu chocolate họa tiết hoa nhí trắng tinh tế. Có dây rút điều chỉnh ở eo và viền ren ở ngực.', faults: ['9.5/10, mặt vải mịn mát, không nhăn.'], location: 'Hồ Chí Minh' },
            { id: 10, designer: 'Màu Đất Mộc', name: 'Áo Cổ Yếm Nhún Bèo Màu Rêu', price: 89000, category: 'Apparel', image: 'https://i.postimg.cc/rmMYbBy9/9b8f1a4f-c025-437e-be00-1b16de25a310.jpg', description: 'Áo cổ yếm màu xanh olive với phần bo chun ở eo tôn dáng.', sizes: ['Freesize (S-L)'], fit: 'Áo cổ yếm màu xanh olive với phần bo chun ở eo tôn dáng.', faults: ['8/10, phai màu nhẹ.'], location: 'Hồ Chí Minh' },
            { id: 11, designer: 'Denim Cổ Điển', name: 'Quần Jean Ống Loe Wash Điển Hình', price: 185000, category: 'Apparel', image: 'https://i.postimg.cc/WbCYjFbm/f93c01e8-ddd6-47e6-9c13-9b5b91ddfdae.jpg', description: 'Quần jeans ống loe cơ bản màu xanh cổ điển. Form dáng ôm mông và đùi, loe rộng từ đầu gối.', sizes: ['S-M (26-27, eo 55-57)'], fit: 'Quần jeans ống loe cơ bản màu xanh cổ điển. Form dáng ôm mông và đùi, loe rộng từ đầu gối.', faults: ['9/10, màu wash tự nhiên, form quần cực chuẩn.'], location: 'Hà Nội' },
            { id: 12, designer: 'Kho Đồ Ngủ', name: 'Đầm Ngủ Satin Phối Ren Đen', price: 79000, category: 'Apparel', image: 'https://i.postimg.cc/qR1QFg5J/bdb98908-291f-4d99-ac7d-2257e0f4da80.jpg', description: 'Đầm ngủ/Slip dress phối ren đen quyến rũ.', sizes: ['S-M'], fit: 'Đầm ngủ/Slip dress phối ren đen quyến rũ.', faults: ['9.5/10, ren còn nguyên không bị rút sợi.'], location: 'Hồ Chí Minh' }
        ],
        currentProduct: null,
        selectedSize: null,
        filters: {
            category: 'All',
            size: 'All',
            color: 'All',
            designer: 'All',
            sort: 'newest'
        },
        showSearch: false,
        searchQuery: '',
        sellerProducts: [],
        sellerTab: 'selling',
        messages: [],
        orders: [],
        tempImage: null,
        chats: [
            { id: 1, name: 'Minh Thư', lastMsg: 'Chào bạn! Áo khoác dạ tweed còn hàng không ạ?', messages: [{ sender: 'other', text: 'Chào bạn! Áo khoác dạ tweed còn hàng không ạ?' }] },
            { id: 2, name: 'Hồng Phúc', lastMsg: 'Chào bạn, bạn có ship COD đi tỉnh không ạ?', messages: [{ sender: 'other', text: 'Chào bạn, bạn có ship COD đi tỉnh không ạ?' }] }
        ]
    },

    formatPrice(price) {
        if (typeof price === 'string') return price;
        return price.toLocaleString('vi-VN') + 'đ';
    },

    toggleWishlist(productId) {
        const index = this.state.wishlist.indexOf(productId);
        if (index === -1) {
            this.state.wishlist.push(productId);
            this.showToast('Đã thêm vào danh sách yêu thích');
        } else {
            this.state.wishlist.splice(index, 1);
            this.showToast('Đã xóa khỏi danh sách yêu thích');
        }
        this.saveState();
        this.render();
    },

    isInWishlist(productId) {
        return this.state.wishlist.includes(productId);
    },

    toggleSearch() {
        this.state.showSearch = !this.state.showSearch;
        const overlay = document.getElementById('search-overlay');
        if (this.state.showSearch) {
            overlay.classList.add('active');
            document.getElementById('search-input').focus();
        } else {
            overlay.classList.remove('active');
            this.state.searchQuery = '';
            document.getElementById('search-input').value = '';
            document.getElementById('search-results').innerHTML = '';
        }
    },

    handleSearchInput(e) {
        const query = e.target.value.toLowerCase();
        this.state.searchQuery = query;
        const resultsContainer = document.getElementById('search-results');

        if (query.length < 2) {
            resultsContainer.innerHTML = '';
            return;
        }

        const filtered = this.state.products.filter(p =>
            (p.name || '').toLowerCase().includes(query) ||
            (p.designer || '').toLowerCase().includes(query) ||
            (p.category || '').toLowerCase().includes(query)
        ).slice(0, 6);

        resultsContainer.innerHTML = filtered.map(p => `
            <div class="search-result-item" onclick="app.viewProduct(${p.id}); app.toggleSearch();">
                <img src="${p.image}" alt="${p.name}">
                <div class="search-result-info">
                    <h4>${p.designer}</h4>
                    <p>${p.name}</p>
                    <p>${app.formatPrice(p.price)}</p>
                </div>
            </div>
        `).join('');
    },

    handleHeaderSearchInput(e) {
        const query = e.target.value.toLowerCase();
        const resultsContainer = document.getElementById('header-search-results');

        if (query.length < 2) {
            resultsContainer.innerHTML = '';
            resultsContainer.style.display = 'none';
            return;
        }

        const filtered = this.state.products.filter(p =>
            (p.name || '').toLowerCase().includes(query) ||
            (p.designer || '').toLowerCase().includes(query) ||
            (p.category || '').toLowerCase().includes(query)
        ).slice(0, 6);

        if (filtered.length === 0) {
            resultsContainer.innerHTML = '<div style="padding: 15px; font-size: 11px; font-weight: 700; text-align: center;">KHÔNG TÌM THẤY SẢN PHẨM</div>';
            resultsContainer.style.display = 'block';
            return;
        }

        resultsContainer.innerHTML = filtered.map(p => `
            <div class="search-result-item" onclick="app.viewProduct(${p.id}); document.getElementById('header-search-results').innerHTML = ''; document.getElementById('header-search-results').style.display = 'none'; document.getElementById('header-search-input').value = '';">
                <img src="${p.image}" alt="${p.name}" style="width: 40px; height: 50px; object-fit: cover; border-radius: 4px; border: 1.5px solid #000; box-shadow: 2px 2px 0px #000;">
                <div class="search-result-info" style="display: flex; flex-direction: column; justify-content: center; text-align: left; margin-left: 12px;">
                    <h4 style="font-size: 10px; font-weight: 900; text-transform: uppercase; margin: 0; letter-spacing: 0.5px;">${p.designer}</h4>
                    <p style="font-size: 11px; margin: 4px 0 0 0; color: #444; font-weight: 700;">${p.name}</p>
                    <p style="font-size: 11px; font-weight: 900; margin: 4px 0 0 0; color: #FF2D85;">${app.formatPrice(p.price)}</p>
                </div>
            </div>
        `).join('');
        resultsContainer.style.display = 'block';
    },

    viewProduct(id) {
        this.navigate('product', { id });
    },

    init() {
        this.loadState();
        this.cacheDOM();
        this.bindEvents();
        this.render();
        this.initObserver();
        this.initToastContainer();
    },

    initToastContainer() {
        const container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = `
            position: fixed;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
        `;
        document.body.appendChild(container);
    },

    showToast(message) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            background: var(--primary);
            color: white;
            padding: 12px 30px;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            animation: slideUpFadeIn 0.5s ease forwards;
            pointer-events: auto;
        `;
        toast.textContent = message;
        document.getElementById('toast-container').appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideDownFadeOut 0.5s ease forwards';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    },

    saveState() {
        const data = {
            cart: this.state.cart,
            wishlist: this.state.wishlist,
            sellerProducts: this.state.sellerProducts,
            products: this.state.products,
            orders: this.state.orders,
            chats: this.state.chats
        };
        localStorage.setItem('thriftzy_state', JSON.stringify(data));
    },

    loadState() {
        const saved = localStorage.getItem('thriftzy_state');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                if (data && data.version === this.state.version) {
                    Object.assign(this.state, data);
                } else {
                    console.warn('Version mismatch. Local storage cleared.');
                    localStorage.removeItem('thriftzy_state');
                }
            } catch (e) {
                localStorage.removeItem('thriftzy_state');
            }
        }
    },

    initObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
            observer.observe(el);
        });
    },

    cacheDOM() {
        this.appRoot = document.getElementById('app-root');
        this.cartCount = document.querySelector('.cart-count');
    },

    bindEvents() {
        window.addEventListener('popstate', (e) => {
            if (e.state) {
                this.state.view = e.state.view;
                this.render();
            }
        });
    },

    navigate(view, params = {}) {
        this.state.view = view;
        if (view === 'product') {
            this.state.currentProduct = this.state.products.find(p => p.id === params.id);
            this.state.selectedSize = null;
        }
        if (params.category) {
            this.state.filters.category = params.category;
        } else {
            this.state.filters.category = 'All';
        }

        history.pushState({ view, params }, '', `#${view}`);
        this.render();
        window.scrollTo(0, 0);
    },

    addToCart(productId) {
        const p = this.state.products.find(prod => prod.id === productId);
        if (p) {
            this.state.cart.push({
                ...p,
                selectedSize: p.sizes ? p.sizes[0] : 'Một kích cỡ',
                cartId: Date.now()
            });
            this.showToast('Đã thêm vào giỏ hàng');
            this.saveState();
            this.updateCartCount();
        }
    },

    selectSize(size) {
        this.state.selectedSize = size;
        this.renderProduct();
    },

    handleCheckout() {
        if (this.state.cart.length === 0) return;

        this.showToast('Đang xử lý thanh toán...');
        setTimeout(() => {
            // Move cart items to orders
            this.state.cart.forEach(item => {
                this.state.orders.unshift({
                    id: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
                    productName: item.name,
                    price: item.price,
                    customer: 'Minh Thư',
                    status: 'Shipping', // Set initial status
                    image: item.image,
                    selectedSize: item.selectedSize || 'Một kích cỡ',
                    date: new Date().toLocaleDateString()
                });
            });

            this.state.cart = [];
            this.saveState();
            this.updateCartCount();
            this.showToast('Đặt hàng thành công!');
            this.render(); // Re-render to show tracking if user is on cart view
        }, 2000);
    },

    removeFromCart(index) {
        this.state.cart.splice(index, 1);
        this.saveState();
        this.render();
    },

    updateCartCount() {
        const count = this.state.cart.length;
        if (this.cartCount) {
            this.cartCount.textContent = count;
            this.cartCount.style.display = count > 0 ? 'flex' : 'none';
        }
    },

    setFilter(key, value) {
        this.state.filters[key] = value;
        if (this.state.view === 'collection') this.renderCollection();
    },

    render() {
        switch (this.state.view) {
            case 'aboutUs':
            case 'home':
                this.renderHome();
                break;
            case 'collection':
                this.renderCollection();
                break;
            case 'product':
                this.renderProduct();
                break;
            case 'cart':
                this.renderCart();
                break;
            case 'buyer-tracking':
                this.renderBuyerTracking();
                break;
            case 'seller-dashboard':
                this.renderSellerDashboard();
                break;
            case 'post-form':
                this.renderPostForm();
                break;
            case 'order-tracking':
                this.renderOrderTracking();
                break;
            case 'messages':
                this.renderMessages();
                break;
            case 'wishlist':
                this.renderWishlist();
                break;
        }
        this.updateCartCount();
    },

    renderHome() {
        const featuredProducts = this.state.products.slice(0, 12);

        this.appRoot.innerHTML = `
            <section class="aboutUs hero reveal">
                <!-- Floating Y2K Stars -->
                <div class="hero__deco hero__deco--star-1" style="position:absolute; top:12%; left:8%; z-index:1">★</div>
                <div class="hero__deco hero__deco--star-2" style="position:absolute; bottom:18%; left:48%; z-index:1">✦</div>
                <div class="hero__deco hero__deco--star-3" style="position:absolute; top:20%; right:8%; z-index:1">★</div>

                <div class="container" style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; width:100%; gap:65px; position:relative; z-index:2">
                    <div class="hero__content" style="flex:1.1; min-width:300px">
                        <h1 style="font-family:var(--font-heading); font-weight:900; line-height:1.1; margin-bottom:20px">ABOUT US</h1>
                        <p style="font-size:14px; margin-bottom:12px; font-weight:700; color:#333; line-height:1.6">THRIFTZY là website thời trang second-hand dành cho Gen Z yêu thích phong cách Y2K, sáng tạo và bền vững. Nền tảng không chỉ giúp người dùng mua bán quần áo 2hand dễ dàng và thể hiện cá tính riêng.</p>
                        <p style="font-size:14px; margin-bottom:30px; font-weight:700; color:#333; line-height:1.6">Với giao diện lấy cảm hứng từ internet và aesthetic đầu những năm 2000, THRIFTZY mang đến trải nghiệm mua sắm trẻ trung, độc đáo và phù hợp với văn hóa số của giới trẻ Việt Nam.</p>
                        <div class="hero__btns">
                            <button class="btn btn--primary" onclick="app.navigate('collection')">+ MUA NGAY</button>
                            <button class="btn btn--outline" onclick="app.navigate('seller-dashboard')">+ ĐĂNG BÁN SẢN PHẨM</button>
                        </div>
                    </div>
                    
                    <div class="hero__divider-container">
                        <div class="hero__divider"></div>
                        <div class="hero__cut-line">
                            <span class="hero__scissors">✂</span>
                        </div>
                        <!-- Additional floating icons in the center -->
                        <div class="hero__divider-star hero__divider-star--1">✦</div>
                        <div class="hero__divider-star hero__divider-star--2">★</div>
                        <div class="hero__divider-star hero__divider-star--3">✿</div>
                    </div>

                    <div class="hero__image" style="flex:0.9; min-width:300px; display:flex; justify-content:center; position:relative">
                        <img src="assets/canva/hero-pic.jpg" alt="Thriftzy Y2K Model" style="max-height:510px; width:auto; border:3.5px solid #000; box-shadow:8px 8px 0px #000; border-radius:4px">
                        <span class="hero__sticker" style="position:absolute; bottom:-12px; right:20px; background:#FF2D85; color:#fff; border:2.5px solid #000; padding:6px 14px; font-size:11px; font-weight:900; transform:rotate(-4deg); box-shadow:4px 4px 0px #000; text-transform:uppercase; z-index:3; letter-spacing:0.5px">★ KHO LƯU TRỮ Y2K ★</span>
                    </div>
                </div>
            </section>

            <section style="padding:80px 0">
                <div class="container">
                    <div class="section-title reveal" style="margin-bottom:60px">
                        <h2 style="font-family:var(--font-heading); font-size:32px; font-weight:900; text-transform:uppercase; letter-spacing:1px">CHỢ ĐỒ CŨ</h2>
                        <p style="font-size:12px; font-weight:700">Khám phá các sản phẩm độc bản vừa được lên kệ</p>
                    </div>
                    <div class="product-grid">
                        ${featuredProducts.map(p => this.createProductCard(p)).join('')}
                    </div>

            <section style="padding:150px 0; text-align:center" class="reveal">
                <div class="container">
                    <h2 style="font-family:var(--font-serif); font-size:42px; margin-bottom:30px">Định Hình Phong Cách Riêng</h2>
                    <p style="color:var(--text-light); max-width:700px; margin:0 auto 50px; font-size:18px">Gia nhập cộng đồng yêu thời trang bền vững và trao cơ hội thứ hai cho trang phục yêu thích của bạn. Trở thành người bán trên Thriftzy ngay hôm nay.</p>
                    <button class="btn btn--primary" style="padding:20px 80px; border-radius:0; background:var(--primary)" onclick="app.navigate('seller-dashboard')">Bắt đầu Bán hàng</button>
                </div>
            </section>
        `;
    },

    createProductCard(p) {
        const isWishlisted = this.isInWishlist(p.id);
        return `
            <div class="product-card reveal">
                <div class="product-image-container">
                    <img src="${p.image}" alt="${p.name}" onclick="app.navigate('product', {id: ${p.id}})">
                    <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); app.toggleWishlist(${p.id})">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0z"></path>
                        </svg>
                    </button>
                </div>
                <div class="product-info" onclick="app.navigate('product', {id: ${p.id}})">
                    <h4 class="designer-name">${p.designer || 'Kho Lưu Trữ Thriftzy'}</h4>
                    <p class="product-name-luxury">${p.name}</p>
                    <p class="product-price">${this.formatPrice(p.price)}</p>
                    <p class="product-location" style="margin-top: 6px; font-size: 11px; color: #888888; display: flex; align-items: center; justify-content: center; gap: 4px; font-weight: 500; font-family: var(--font-sans);">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #999999; flex-shrink: 0;">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        ${p.location || 'Hồ Chí Minh'}
                    </p>
                </div>
            </div>
        `;
    },

    renderCollection() {
        const root = document.getElementById('app-root');
        const categories = ['All', 'Apparel', 'Bags', 'Shoes', 'Accessories'];
        const categoryLabels = {
            'All': 'Tất cả sản phẩm',
            'Apparel': 'Quần áo',
            'Bags': 'Túi xách',
            'Shoes': 'Giày dép',
            'Accessories': 'Phụ kiện'
        };
        const designers = ['All', ...new Set(this.state.products.map(p => p.designer))];

        let filteredProducts = this.state.products.filter(p => {
            const catMatch = this.state.filters.category === 'All' || p.category === this.state.filters.category;
            const designerMatch = this.state.filters.designer === 'All' || p.designer === this.state.filters.designer;
            return catMatch && designerMatch;
        });

        // Sorting
        if (this.state.filters.sort === 'price-low') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (this.state.filters.sort === 'price-high') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else {
            filteredProducts.sort((a, b) => b.id - a.id); // Newest
        }

        root.innerHTML = `
            <section class="collection-page reveal">
                <div class="filter-bar">
                    ${categories.map(cat => `
                        <button class="filter-dropdown ${this.state.filters.category === cat ? 'active' : ''}" 
                                onclick="app.setFilter('category', '${cat}')">
                            ${categoryLabels[cat] || cat}
                        </button>
                    `).join('')}
                </div>

                <div class="shop-controls">
                    <div class="filter-group">
                        <select class="filter-select" onchange="app.setFilter('designer', this.value)">
                            <option value="All">Tất cả nhà thiết kế</option>
                            ${designers.filter(d => d !== 'All').map(d => `
                                <option value="${d}" ${this.state.filters.designer === d ? 'selected' : ''}>${d}</option>
                            `).join('')}
                        </select>
                    </div>
                    
                    <div class="filter-group">
                        <select class="filter-select" onchange="app.setFilter('sort', this.value)">
                            <option value="newest" ${this.state.filters.sort === 'newest' ? 'selected' : ''}>Mới nhất</option>
                            <option value="price-low" ${this.state.filters.sort === 'price-low' ? 'selected' : ''}>Giá: Từ thấp đến cao</option>
                            <option value="price-high" ${this.state.filters.sort === 'price-high' ? 'selected' : ''}>Giá: Từ cao đến thấp</option>
                        </select>
                    </div>
                </div>

                <div class="container">
                    <div class="product-grid">
                        ${filteredProducts.map(p => this.createProductCard(p)).join('')}
                    </div>
                </div>
            </section>
        `;
        window.scrollTo(0, 0);
        this.initObserver();
    },

    renderProduct() {
        const p = this.state.currentProduct;
        if (!p) return this.navigate('home');
        const isWishlisted = this.isInWishlist(p.id);

        this.appRoot.innerHTML = `
            <div class="container" style="padding-top:40px">
                <div class="pdp-layout">
                    <div class="pdp-gallery">
                        <img src="${p.image}" alt="${p.name}" style="border:3px solid #000; box-shadow:6px 6px 0px #000; border-radius:4px">
                    </div>
                    <div class="pdp-info-sticky">
                        <div class="pdp-designer">${p.designer || 'Kho Lưu Trữ'}</div>
                        <h1 class="pdp-name" style="font-family:var(--font-heading); font-weight:900">${p.name}</h1>
                        <p class="pdp-price" style="font-weight:900; font-size:22px; margin-bottom: 10px">${this.formatPrice(p.price)}</p>
                        <p class="pdp-location" style="font-size: 13px; color: #888888; display: flex; align-items: center; gap: 6px; margin-top: -5px; margin-bottom: 20px; font-weight: 500; font-family: var(--font-sans);">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #999999; flex-shrink: 0;">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            Khu vực: ${p.location || 'Hồ Chí Minh'}
                        </p>

                        <div class="pdp-size" style="font-size: 13px; font-weight: 800; margin-bottom: 25px; font-family: var(--font-sans); text-transform: uppercase; display: flex; align-items: center; gap: 8px;">
                            <span>KÍCH CỠ:</span>
                            <span style="background: var(--accent); color: #000; padding: 6px 12px; border: 3px solid #000; box-shadow: 3px 3px 0px #000; font-size: 13px; font-weight: 900; border-radius: 4px; display: inline-block;">
                                ${p.sizes ? p.sizes.join(', ') : 'Một kích cỡ'}
                            </span>
                        </div>

                        <div class="pdp-actions">
                            <button class="btn btn--primary" onclick="app.addToCart(${p.id})">+ THÊM VÀO GIỎ HÀNG</button>
                            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="app.toggleWishlist(${p.id})">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0z"></path>
                                </svg>
                            </button>
                        </div>

                        <button class="msg-seller-btn" style="width:100%; margin-bottom:30px" onclick="app.showToast('✉ Tính năng nhắn tin đang được kết nối với người bán!')">
                            ✉ NHẮN TIN CHO NGƯỜI BÁN
                        </button>

                        <div class="faults-section">
                            <div class="faults-title">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                                TÌNH TRẠNG SẢN PHẨM / KHUYẾT ĐIỂM
                            </div>
                            <ul class="fault-list">
                                ${(p.faults && p.faults.length > 0) ? p.faults.map(f => `<li>${f}</li>`).join('') : `<li>Không có lỗi đáng kể (Tuyển chọn cực đẹp)</li>`}
                            </ul>
                        </div>

                        <div class="pdp-details">
                            <details open>
                                <summary style="font-weight:800; font-size:12px">
                                    MÔ TẢ SẢN PHẨM <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </summary>
                                <div class="details-content">
                                    <p>${p.description}</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>

                <section class="related-products" style="margin-top:80px; padding-bottom:80px">
                    <div class="section-title">
                        <h2 style="font-family:var(--font-heading); font-size:28px; font-weight:900; text-transform:uppercase">CÓ THỂ BẠN CŨNG THÍCH</h2>
                    </div>
                    <div class="product-grid">
                        ${this.state.products.slice(0, 4).map(p => this.createProductCard(p)).join('')}
                    </div>
                </section>
            </div>
        `;
    },

    renderWishlist() {
        const items = this.state.products.filter(p => this.state.wishlist.includes(p.id));
        this.appRoot.innerHTML = `
            <div class="container" style="padding-top:60px">
                <div class="section-title">
                    <h1 style="font-family:var(--font-serif); font-size:32px; text-transform:uppercase; letter-spacing:2px">DANH SÁCH YÊU THÍCH</h1>
                    <p>Đã lưu ${items.length} sản phẩm</p>
                </div>
                
                ${items.length === 0 ? `
                    <div style="text-align:center; padding:100px 0">
                        <p style="margin-bottom:30px">Danh sách yêu thích của bạn hiện đang trống.</p>
                        <button class="btn btn--primary" onclick="app.navigate('collection')">Bắt đầu mua sắm</button>
                    </div>
                ` : `
                    <div class="product-grid">
                        ${items.map(p => this.createProductCard(p)).join('')}
                    </div>
                `}
            </div>
        `;
    },

    renderCart() {
        const total = this.state.cart.reduce((sum, item) => sum + item.price, 0);

        if (this.state.cart.length === 0) {
            this.appRoot.innerHTML = `
                <div class="container" style="padding:100px 20px; text-align:center; animation:fadeIn 0.8s ease">
                    <h2 style="font-family:var(--font-heading); font-size:32px; font-weight:900; margin-bottom:20px">GIỎ HÀNG TRỐNG</h2>
                    <p style="color:var(--text-light); margin-bottom:40px; font-size:12px; font-weight:700">Khám phá bộ sưu tập tuyển chọn để tìm món đồ tiếp theo của bạn.</p>
                    <button class="btn btn--primary" onclick="app.navigate('collection')">+ BẮT ĐẦU MUA SẮM</button>
                </div>
            `;
            return;
        }

        this.appRoot.innerHTML = `
            <div class="container" style="padding:60px 20px 100px; animation:fadeIn 0.8s ease">
                <div class="cart-layout">
                    <div>
                        <h2 class="cart-title" style="font-family:var(--font-heading); font-weight:900; text-transform:uppercase; margin-bottom:30px">GIỎ HÀNG</h2>
                        <div class="cart-items-list">
                            ${this.state.cart.map((item, index) => `
                                <div class="cart-item" style="border:3px solid #000; box-shadow:4px 4px 0px #000; border-radius:4px; padding:15px; background:var(--white); margin-bottom:20px; display:flex; gap:20px; align-items:center">
                                    <img src="${item.image}" alt="${item.name}" style="width:90px; height:110px; object-fit:cover; border:2px solid #000; box-shadow:2px 2px 0px #000; border-radius:2px">
                                    <div class="cart-item-info" style="flex:1">
                                        <div class="cart-item-header" style="display:flex; justify-content:space-between; align-items:flex-start">
                                            <div>
                                                <h3 class="cart-item-name" style="font-size:15px; font-family:var(--font-heading); font-weight:900; margin:0">${item.name}</h3>
                                                <p class="cart-item-designer" style="font-size:11px; font-weight:700; color:#555; text-transform:uppercase; margin:4px 0">${item.designer}</p>
                                            </div>
                                            <button class="remove-btn" style="background:none; border:none; color:#FF2D85; font-size:11px; font-weight:900; cursor:pointer; text-transform:uppercase; letter-spacing:0.5px" onclick="app.removeFromCart(${index})">[ XÓA ]</button>
                                        </div>
                                        <p class="cart-item-price" style="font-size:15px; font-weight:900; color:#000; margin-top:10px">${this.formatPrice(item.price)}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <aside class="cart-summary" style="border:3px solid #000; box-shadow:6px 6px 0px #000; border-radius:4px; padding:30px; background:var(--white); height:fit-content">
                        <h3 class="summary-title" style="font-family:var(--font-heading); font-weight:900; text-transform:uppercase; border-bottom:2px solid #000; padding-bottom:15px; margin-bottom:20px">TÓM TẮT ĐƠN HÀNG</h3>
                        <div class="summary-row" style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:12px; font-weight:700">
                            <span>Tạm tính</span>
                            <span>${this.formatPrice(total)}</span>
                        </div>
                        <div class="summary-row" style="display:flex; justify-content:space-between; margin-bottom:20px; font-size:12px; font-weight:700">
                            <span>Phí vận chuyển</span>
                            <span style="color:#00B259; font-weight:800">Miễn phí</span>
                        </div>
                        <div class="summary-row total" style="display:flex; justify-content:space-between; border-top:2px solid #000; padding-top:15px; font-weight:900; font-size:16px">
                            <span>Tổng cộng</span>
                            <span>${this.formatPrice(total)}</span>
                        </div>
                        <button class="btn btn--primary" style="width:100%; margin-top:30px; padding:15px 0" onclick="app.handleCheckout()">+ THANH TOÁN</button>
                    </aside>
                </div>
            </div>
        `;
    },

    renderBuyerTracking() {
        const root = document.getElementById('app-root');

        if (this.state.orders.length === 0) {
            root.innerHTML = `
                <div class="container" style="padding:100px 20px; text-align:center; animation:fadeIn 0.8s ease">
                    <div style="font-size:60px; margin-bottom:20px">📦</div>
                    <h2 style="font-family:var(--font-heading); font-size:32px; font-weight:900; margin-bottom:20px">CHƯA CÓ ĐƠN HÀNG NÀO</h2>
                    <p style="color:var(--text-light); margin-bottom:40px; font-size:12px; font-weight:700">Khám phá bộ sưu tập tuyển chọn của chúng tôi để bắt đầu theo dõi các đơn hàng của bạn!</p>
                    <button class="btn btn--primary" onclick="app.navigate('collection')">+ BẮT ĐẦU MUA SẮM</button>
                </div>
            `;
            return;
        }

        const statusLabels = {
            'Packing': 'Đang chuẩn bị',
            'Shipped': 'Đang giao',
            'Shipping': 'Đang giao',
            'Delivered': 'Đã nhận',
            'Confirmed': 'Đã xác nhận',
            'Pending': 'Chờ duyệt',
            'Approved': 'Đã duyệt'
        };

        root.innerHTML = `
            <div class="container" style="padding:60px 20px 100px; animation:fadeIn 0.8s ease">
                <div class="section-title reveal" style="margin-bottom:60px">
                    <h2 style="font-family:var(--font-heading); font-size:32px; font-weight:900; text-transform:uppercase; letter-spacing:1px">THEO DÕI ĐƠN HÀNG</h2>
                    <p style="font-size:12px; font-weight:700">Trạng thái vận chuyển các đơn hàng của bạn</p>
                </div>

                <div style="display:grid; gap:40px; max-width:900px; margin:0 auto">
                    ${this.state.orders.map(order => {
            let progressWidth = '10%';
            if (order.status === 'Packing') progressWidth = '40%';
            if (order.status === 'Shipped') progressWidth = '70%';
            if (order.status === 'Shipping') progressWidth = '70%';
            if (order.status === 'Delivered') progressWidth = '100%';

            return `
                            <div class="order-card reveal" style="border:3px solid #000; box-shadow:6px 6px 0px #000; background:var(--white); padding:30px; display:flex; flex-direction:column; gap:25px; border-radius:4px">
                                <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; border-bottom:2px solid #000; padding-bottom:15px; gap:15px">
                                    <div>
                                        <span style="font-size:11px; font-weight:900; background:var(--accent); color:#000; padding:4px 8px; border:1.5px solid #000; box-shadow:2px 2px 0px #000; text-transform:uppercase">${order.id}</span>
                                        <span style="font-size:11px; font-weight:700; color:#666; margin-left:15px">Ngày đặt: ${order.date}</span>
                                    </div>
                                    <div>
                                        <span class="status-badge" style="background:#000; color:${order.status === 'Delivered' ? '#ABF7B1' : 'var(--accent)'}; padding:6px 16px; border:2px solid #000; font-size:11px; font-weight:900; text-transform:uppercase; box-shadow:2px 2px 0px #000">${statusLabels[order.status] || order.status}</span>
                                    </div>
                                </div>

                                <div style="display:flex; gap:25px; align-items:center; flex-wrap:wrap">
                                    <img src="${order.image}" style="width:100px; height:120px; object-fit:cover; border:2px solid #000; box-shadow:3px 3px 0px #000; border-radius:4px">
                                    <div style="flex:1; min-width:200px">
                                        <h3 style="font-size:18px; font-family:var(--font-heading); font-weight:900; margin-bottom:8px">${order.productName}</h3>
                                        <p style="font-size:16px; font-weight:900; color:#000">Tổng cộng: ${this.formatPrice(order.price)}</p>
                                    </div>
                                </div>

                                <div style="margin-top:15px">
                                    <div style="height:4px; background:#f0f0f0; border:1.5px solid #000; width:100%; position:relative; border-radius:2px">
                                        <div style="position:absolute; height:100%; background:var(--accent); width:${progressWidth}; transition: width 0.5s ease"></div>
                                        
                                        <div style="position:absolute; top:-6px; left:10%; width:16px; height:16px; border-radius:50%; border:2px solid #000; background:${progressWidth !== '10%' ? 'var(--accent)' : '#fff'}; box-shadow:1px 1px 0px #000"></div>
                                        <div style="position:absolute; top:-6px; left:40%; width:16px; height:16px; border-radius:50%; border:2px solid #000; background:${progressWidth === '40%' || progressWidth === '70%' || progressWidth === '100%' ? 'var(--accent)' : '#fff'}; box-shadow:1px 1px 0px #000"></div>
                                        <div style="position:absolute; top:-6px; left:70%; width:16px; height:16px; border-radius:50%; border:2px solid #000; background:${progressWidth === '70%' || progressWidth === '100%' ? 'var(--accent)' : '#fff'}; box-shadow:1px 1px 0px #000"></div>
                                        <div style="position:absolute; top:-6px; left:100%; width:16px; height:16px; border-radius:50%; border:2px solid #000; background:${progressWidth === '100%' ? 'var(--accent)' : '#fff'}; box-shadow:1px 1px 0px #000; transform:translateX(-8px)"></div>
                                    </div>
                                    <div style="display:flex; justify-content:space-between; margin-top:15px; font-size:9px; text-transform:uppercase; font-weight:800; letter-spacing:0.5px; color:var(--text-light)">
                                        <span style="color:#000">Đã xác nhận</span>
                                        <span style="${order.status === 'Packing' ? 'color:#000' : ''}">Đang chuẩn bị</span>
                                        <span style="${order.status === 'Shipped' || order.status === 'Shipping' ? 'color:#000' : ''}">Đang giao</span>
                                        <span style="${order.status === 'Delivered' ? 'color:#000' : ''}; text-align:right">Đã nhận</span>
                                    </div>
                                </div>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    },

    renderSellerDashboard() {
        const approved = this.state.sellerProducts.filter(p => p.status === 'Approved');
        const pending = this.state.sellerProducts.filter(p => p.status === 'Pending');
        const displayList = this.state.sellerTab === 'selling' ? approved : pending;

        this.appRoot.innerHTML = `
            <div class="container" style="padding-top:60px">
                <div class="seller-header">
                    <div class="section-title">
                        <h2>Cửa Hàng Của Tôi</h2>
                        <p>Quản lý kho hàng và theo dõi doanh thu.</p>
                    </div>
                    <div class="seller-actions">
                        <button class="btn btn--outline" onclick="app.navigate('messages')">Tin nhắn</button>
                        <button class="btn btn--outline" onclick="app.navigate('order-tracking')">Theo dõi đơn</button>
                    </div>
                </div>

                <div class="seller-tabs">
                    <div class="seller-tab ${this.state.sellerTab === 'selling' ? 'active' : ''}" onclick="app.setSellerTab('selling')">
                        Đang bán (${approved.length})
                    </div>
                    <div class="seller-tab ${this.state.sellerTab === 'pending' ? 'active' : ''}" onclick="app.setSellerTab('pending')">
                        Chờ duyệt (${pending.length})
                    </div>
                </div>

                <div class="product-grid">
                    ${displayList.length === 0 ? '<p style="grid-column:1/-1; text-align:center; padding:40px; color:#999">Không có sản phẩm nào.</p>' : displayList.map(p => `
                        <div class="product-card">
                            <div class="product-card__image">
                                <img src="${p.image}" alt="${p.name}">
                                <div style="position:absolute; top:12px; right:12px">
                                    <span class="status-badge status--${p.status.toLowerCase()}">${p.status === 'Approved' ? 'Đã duyệt' : 'Chờ duyệt'}</span>
                                </div>
                            </div>
                            <div class="product-card__info">
                                <h3>${p.name}</h3>
                                <p class="price">${this.formatPrice(p.price)}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    renderPostForm() {
        this.state.tempImage = null; // Reset
        this.appRoot.innerHTML = `
            <div class="container">
                <div class="post-form-container">
                    <div class="section-title">
                        <h2>Đăng Bán Sản Phẩm Mới</h2>
                        <p>Chia sẻ phong cách của bạn với cộng đồng.</p>
                    </div>
                    <form id="post-item-form" onsubmit="app.handlePostSubmit(event)">
                        <div class="form-group">
                            <label>Hình ảnh sản phẩm</label>
                            <input type="file" id="file-input" style="display:none" accept="image/*" onchange="app.handleImageSelect(event)">
                            <div class="image-upload-placeholder" id="image-preview" onclick="document.getElementById('file-input').click()">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                                <span style="font-size:12px; margin-top:8px">Tải ảnh lên</span>
                            </div>
                        </div>

                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px">
                            <div class="form-group">
                                <label>Tên sản phẩm</label>
                                <input type="text" class="form-control" name="name" placeholder="Ví dụ: Áo lụa Vintage" required>
                            </div>
                            <div class="form-group">
                                <label>Giá bán (VND)</label>
                                <input type="number" class="form-control" name="price" placeholder="Ví dụ: 150000" required>
                            </div>
                        </div>

                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px">
                            <div class="form-group">
                                <label>Danh mục</label>
                                <select class="form-control" name="category" required>
                                    <option value="Apparel">Quần áo</option>
                                    <option value="Bags">Túi xách</option>
                                    <option value="Shoes">Giày dép</option>
                                    <option value="Accessories">Phụ kiện</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Nhà thiết kế / Thương hiệu</label>
                                <input type="text" class="form-control" name="designer" placeholder="Ví dụ: Chanel" required>
                            </div>
                        </div>



                        <div class="form-group">
                            <label>Tình trạng / Khuyết điểm</label>
                            <div class="fault-checkboxes">
                                <label class="fault-checkbox"><input type="checkbox"> Vết bẩn nhỏ</label>
                                <label class="fault-checkbox"><input type="checkbox"> Thiếu nút</label>
                                <label class="fault-checkbox"><input type="checkbox"> Rách nhỏ</label>
                                <label class="fault-checkbox"><input type="checkbox"> Sờn / xù lông vải</label>
                            </div>
                            <textarea class="form-control" style="margin-top:12px" placeholder="Mô tả chi tiết hoặc các khuyết điểm khác..."></textarea>
                        </div>

                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px">
                            <div class="form-group">
                                <label>Khu vực / Tỉnh thành</label>
                                <select class="form-control" name="location" required>
                                    <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                    <option value="Hà Nội">Hà Nội</option>
                                    <option value="Đà Nẵng">Đà Nẵng</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Địa chỉ lấy hàng chi tiết</label>
                                <input type="text" class="form-control" placeholder="Nhập địa chỉ đầy đủ của bạn">
                            </div>
                        </div>

                        <button type="submit" class="btn btn--primary" style="width:100%" id="submit-post-btn">
                            Gửi duyệt
                        </button>
                    </form>
                </div>
            </div>
        `;
    },

    handleImageSelect(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            this.state.tempImage = event.target.result;
            const preview = document.getElementById('image-preview');
            preview.innerHTML = `<img src="${this.state.tempImage}" style="width:100%; height:100%; object-fit:cover; border-radius:8px">`;
            preview.style.border = 'none';
        };
        reader.readAsDataURL(file);
    },

    renderOrderTracking() {
        const statusLabels = {
            'Packing': 'Đang chuẩn bị',
            'Shipped': 'Đang giao',
            'Shipping': 'Đang giao',
            'Delivered': 'Đã nhận',
            'Confirmed': 'Đã xác nhận',
            'Pending': 'Chờ duyệt',
            'Approved': 'Đã duyệt'
        };

        this.appRoot.innerHTML = `
            <div class="container" style="padding-top:60px">
                <div class="section-title">
                    <h2>Theo Dõi Đơn Hàng</h2>
                    <p>Quản lý quá trình hoàn thành đơn hàng cho các sản phẩm đã bán của bạn.</p>
                </div>
                
                <div style="max-width:900px">
                    ${this.state.orders.map(order => `
                        <div class="order-card">
                            <img src="${order.image}" style="width:80px; height:80px; object-fit:cover; border-radius:4px">
                            <div>
                                <span style="font-size:12px; color:var(--primary); font-weight:700">${order.id}</span>
                                <h3 style="font-size:16px; margin:4px 0">${order.productName}</h3>
                                <p style="font-size:14px; color:var(--text-light)">Người mua: ${order.customer} | ${this.formatPrice(order.price)}</p>
                            </div>
                            <div style="text-align:right">
                                <div style="margin-bottom:8px">
                                    <span class="status-badge" style="background:var(--primary-light); color:var(--primary)">${statusLabels[order.status] || order.status}</span>
                                </div>
                                <div class="order-status-stepper">
                                    <button class="step-btn ${order.status === 'Packing' ? 'current' : ''}" onclick="app.updateOrderStatus('${order.id}', 'Packing')">Đang chuẩn bị</button>
                                    <button class="step-btn ${order.status === 'Shipped' ? 'current' : ''}" onclick="app.updateOrderStatus('${order.id}', 'Shipped')">Đã gửi hàng</button>
                                    <button class="step-btn ${order.status === 'Shipping' ? 'current' : ''}" onclick="app.updateOrderStatus('${order.id}', 'Shipping')">Đang giao hàng</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    setSellerTab(tab) {
        this.state.sellerTab = tab;
        this.renderSellerDashboard();
    },

    handlePostSubmit(e) {
        e.preventDefault();
        const btn = document.getElementById('submit-post-btn');
        const formData = new FormData(e.target);

        btn.innerHTML = '<span class="spinner"></span> Đang xử lý...';
        btn.disabled = true;

        setTimeout(() => {
            const newItem = {
                id: Date.now(),
                name: formData.get('name'),
                price: parseFloat(formData.get('price')),
                designer: formData.get('designer'),
                category: formData.get('category'),
                sizes: ['Một kích cỡ'],
                description: formData.get('description') || 'Sản phẩm mới đăng bán.',
                image: this.state.tempImage || 'https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&w=800&q=80',
                location: formData.get('location') || 'Hồ Chí Minh',
                status: 'Pending'
            };

            this.state.sellerProducts.push(newItem);
            this.state.products.unshift(newItem);
            this.state.tempImage = null;
            this.saveState();

            // Show Success Feedback
            const container = document.querySelector('.post-form-container');
            container.innerHTML = `
                <div style="text-align:center; padding:100px 20px; animation:fadeIn 0.8s ease">
                    <div style="width:80px; height:80px; background:var(--primary); color:white; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 30px; font-size:40px">✓</div>
                    <h2 style="font-family:var(--font-serif); font-size:32px; margin-bottom:20px">Đăng Bán Thành Công</h2>
                    <p style="color:var(--text-light); margin-bottom:40px">Sản phẩm "${newItem.name}" của bạn hiện đang chờ kiểm duyệt và sẽ sớm được hiển thị.</p>
                    <div style="display:flex; gap:20px; justify-content:center">
                        <button class="btn btn--primary" onclick="app.navigate('collection')">Xem Cửa Hàng</button>
                        <button class="btn btn--outline" onclick="app.navigate('seller-dashboard')">Cửa Hàng Của Tôi</button>
                    </div>
                </div>
            `;

            // Simulate auto-approval
            setTimeout(() => {
                const item = this.state.sellerProducts.find(p => p.id === newItem.id);
                if (item) {
                    item.status = 'Approved';
                    this.saveState();
                }
            }, 5000);
        }, 1500);
    },

    updateOrderStatus(orderId, newStatus) {
        const order = this.state.orders.find(o => o.id === orderId);
        if (order) {
            order.status = newStatus;
            this.renderOrderTracking();
        }
    },

    renderMessages() {
        const activeChat = this.state.currentChat || this.state.chats[0];
        this.state.currentChat = activeChat;

        this.appRoot.innerHTML = `
            <div class="container" style="padding-top:60px">
                <div class="section-title">
                    <h2>Tin Nhắn</h2>
                    <p>Trò chuyện với khách hàng tiềm năng.</p>
                </div>

                <div class="chat-layout">
                    <div class="chat-sidebar">
                        ${this.state.chats.map(chat => `
                            <div class="chat-contact ${activeChat.id === chat.id ? 'active' : ''}" onclick="app.selectChat(${chat.id})">
                                <div class="chat-contact-name">${chat.name}</div>
                                <div class="chat-contact-last">
                                    ${chat.lastMsg}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="chat-main">
                        <div class="chat-header">
                            ${activeChat.name}
                        </div>
                        <div class="chat-messages" id="chat-window">
                            ${activeChat.messages.map(m => `
                                <div class="message ${m.sender === 'me' ? 'message--sent' : 'message--received'}">
                                    ${m.text}
                                </div>
                            `).join('')}
                        </div>
                        <div class="chat-input">
                            <input type="text" id="msg-input" class="form-control" placeholder="Nhập tin nhắn...">
                            <button class="btn btn--primary" onclick="app.sendMessage()">Gửi</button>
                            <button class="btn btn--outline" onclick="app.autoReply()">Tự động trả lời</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        this.scrollToBottom();
    },

    selectChat(id) {
        this.state.currentChat = this.state.chats.find(c => c.id === id);
        this.renderMessages();
    },

    sendMessage() {
        const input = document.getElementById('msg-input');
        const text = input.value.trim();
        if (!text) return;

        this.state.currentChat.messages.push({ sender: 'me', text });
        this.state.currentChat.lastMsg = text;
        input.value = '';
        this.renderMessages();
    },

    autoReply() {
        const replies = [
            "Vâng, sản phẩm vẫn còn ạ!",
            "Mình có thể gửi hàng đi vào sáng mai nhé.",
            "Tình trạng sản phẩm hoàn toàn giống như mô tả.",
            "Mình có thể giảm giá một chút nếu bạn mua từ 2 món trở lên."
        ];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];

        setTimeout(() => {
            this.state.currentChat.messages.push({ sender: 'other', text: randomReply });
            this.state.currentChat.lastMsg = randomReply;
            this.renderMessages();
        }, 800);
    },

    scrollToBottom() {
        const win = document.getElementById('chat-window');
        if (win) win.scrollTop = win.scrollHeight;
    },

    updateCartCount() {
        const count = this.state.cart.length;
        if (this.cartCount) {
            this.cartCount.textContent = count;
            this.cartCount.style.display = count > 0 ? 'flex' : 'none';
        }
    }
};

app.init();
