const app = {
    state: {
        version: '2.0', // Final Polish & Stability Fixes
        view: 'home',
        cart: [],
        orders: [], // Ensure empty initialization
        wishlist: [],
        products: [
            { id: 1, designer: 'Y2K Archival', name: 'Brown Lace Cami Blouse', price: 12.00, category: 'Apparel', image: 'https://i.postimg.cc/nhBhHmZd/a9a50ce2-eccb-4a82-a4f2-672c22cf18e8.jpg', description: 'Áo ren nâu phối viền kem phong cách Y2K, form ôm nhẹ tôn dáng. Chất vải co giãn tốt, phù hợp mặc đi chơi hoặc phối layer (125.000đ).', sizes: ['S-M'], faults: ['9/10, chỉ có vài dấu xù lông nhẹ không đáng kể.'] },
            { id: 2, designer: 'Vintage Clubwear', name: 'Shimmering Black A-Line Dress', price: 24.00, category: 'Apparel', image: 'https://i.postimg.cc/TYHtRyQX/baa34b38-c722-4518-9a45-b5c5dfb98fd8.jpg', description: 'Đầm đen ánh nhũ nhẹ, form ôm chữ A nữ tính, phù hợp đi tiệc hoặc chụp ảnh. Chất liệu mềm, lên form đẹp (235.000đ).', sizes: ['M'], faults: ['9/10, nhũ vẫn còn đẹp, có vài nếp gấp nhẹ do bảo quản.'] },
            { id: 3, designer: 'Linen Studio', name: 'Ashen Linen Halter Dress', price: 18.00, category: 'Apparel', image: 'https://i.postimg.cc/cJHvmHwB/59ac4af8-c980-438c-adf7-f6824666df2a.jpg', description: 'Váy cổ yếm chất liệu linen màu xám tro cá tính. Thiết kế thân áo ôm sát kết hợp tùng váy xếp tầng xòe nhẹ, điểm xuyết viền ren tua rua lạ mắt (180.000đ).', sizes: ['S'], faults: ['9.5/10, form dáng còn rất cứng cáp, vải linen đứng dáng.'] },
            { id: 4, designer: 'Denim Archive', name: 'Embroidered Denim Halter Dress', price: 21.00, category: 'Apparel', image: 'https://i.postimg.cc/MZyp1Rgn/add3a0e5-f3ea-48fd-812d-36d4abd803f8.jpg', description: 'Đầm jean cổ yếm phong cách vintage Y2K, phối chi tiết thêu nổi bật ở phần ngực. Form ôm eo và chân váy xòe nhẹ (210.000đ).', sizes: ['S'], faults: ['8.5/10, màu jean còn đẹp, có bạc màu nhẹ tự nhiên ở vài đường may.'] },
            { id: 5, designer: 'Retro Polka', name: 'Polka Dot Babydoll Slip Dress', price: 19.50, category: 'Apparel', image: 'https://i.postimg.cc/8cDDZKxk/0e1107ab-4489-4a66-97d1-a4a2451b8a47.jpg', description: 'Đầm hai dây chấm bi đen trắng, form babydoll rộng nhẹ, mặc thoải mái và dễ phối phụ kiện. Vải mỏng nhẹ phù hợp mùa hè (195.000đ).', sizes: ['M', 'L'], faults: ['9/10, có vài nếp nhăn nhẹ do gấp đồ nhưng không ảnh hưởng form.'] },
            { id: 6, designer: 'Street Denim', name: 'Light Wash Flared Jeans', price: 24.50, category: 'Apparel', image: 'https://i.postimg.cc/qvgrDCD1/cc11c067-afd2-4ccf-807b-2e2a988e42b3.jpg', description: 'Quần jeans ống loe nhẹ màu xanh sáng, wash nhẹ ở đùi tạo hiệu ứng chân dài (245.000đ).', sizes: ['M', '27-28', 'eo 56-58'], faults: ['9/10, gấu quần và đường may còn nguyên vẹn, không lỗi.'] },
            { id: 7, designer: 'Striped Chic', name: 'Red & White Striped Halter Top', price: 13.50, category: 'Apparel', image: 'https://i.postimg.cc/fyB4Bwxp/c4613ee8-8a19-460f-bdc9-1f61ad44c414.jpg', description: 'Áo cổ yếm họa tiết kẻ ngang đỏ trắng nổi bật. Thiết kế vắt chéo ngực tôn vòng một, chất thun co giãn ôm body cực tốt (135.000đ).', sizes: ['S', 'M'], faults: ['10/10, độ mới cao, màu sắc còn rất tươi.'] },
            { id: 8, designer: 'Retro Denim', name: 'Seamed Dark Wash Flared Jeans', price: 22.50, category: 'Apparel', image: 'https://i.postimg.cc/hGxHN8Lj/a6aea241-d8ab-4154-8e7e-3d6c9429a2ff.jpg', description: 'Quần jeans ống loe màu xanh đậm với đường gân dọc thân quần độc đáo (225.000đ).', sizes: ['M', '28-29', 'eo 57-59'], faults: ['8/10, ống quần có vết sứt nhẹ.'] },
            { id: 9, designer: 'Flora Slip', name: 'Chocolate Floral Slip Dress', price: 18.50, category: 'Apparel', image: 'https://i.postimg.cc/Gh26bnFz/62a2c4bc-9249-47d8-8163-7bb25f729e2c.jpg', description: 'Váy hai dây màu nâu chocolate họa tiết hoa nhí trắng tinh tế. Có dây rút điều chỉnh ở eo và viền ren ở ngực (185.000đ).', sizes: ['S', 'M'], faults: ['9.5/10, mặt vải mịn mát, không nhăn.'] },
            { id: 10, designer: 'Earth Tone', name: 'Olive Ruched Halter Top', price: 14.50, category: 'Apparel', image: 'https://i.postimg.cc/rmMYbBy9/9b8f1a4f-c025-437e-be00-1b16de25a310.jpg', description: 'Áo cổ yếm màu xanh olive với phần bo chun ở eo tôn dáng (145.000đ).', sizes: ['Freesize'], faults: ['8/10, phai màu nhẹ.'] },
            { id: 11, designer: 'Vintage Denim', name: 'Classic Wash Flared Jeans', price: 25.00, category: 'Apparel', image: 'https://i.postimg.cc/WbCYjFbm/f93c01e8-ddd6-47e6-9c13-9b5b91ddfdae.jpg', description: 'Quần jeans ống loe cơ bản màu xanh cổ điển. Form dáng ôm mông và đùi, loe rộng từ đầu gối (250.000đ).', sizes: ['S-M', '26-27', 'eo 55-57'], faults: ['9/10, màu wash tự nhiên, form quần cực chuẩn.'] },
            { id: 12, designer: 'Lingerie Archive', name: 'Black Lace Satin Slip Dress', price: 16.50, category: 'Apparel', image: 'https://i.postimg.cc/qR1QFg5J/bdb98908-291f-4d99-ac7d-2257e0f4da80.jpg', description: 'Đầm ngủ/Slip dress phối ren đen quyến rũ (165.000đ).', sizes: ['S-M'], faults: ['9.5/10, ren còn nguyên không bị rút sợi.'] }
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
            { id: 1, name: 'Alice Wong', lastMsg: 'Is the tweed jacket still available?', messages: [{ sender: 'other', text: 'Hi! Is the tweed jacket still available?' }] },
            { id: 2, name: 'Marco Rossi', lastMsg: 'Can you ship to London?', messages: [{ sender: 'other', text: 'Hello, do you offer international shipping to London?' }] }
        ]
    },

    toggleWishlist(productId) {
        const index = this.state.wishlist.indexOf(productId);
        if (index === -1) {
            this.state.wishlist.push(productId);
            this.showToast('Added to wishlist');
        } else {
            this.state.wishlist.splice(index, 1);
            this.showToast('Removed from wishlist');
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
                    <p>$${p.price}</p>
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
                    <p style="font-size: 11px; font-weight: 900; margin: 4px 0 0 0; color: #FF2D85;">$${p.price}</p>
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
            if (!this.state.selectedSize && p.sizes && p.sizes.length > 0) {
                this.showToast('Please select a size');
                return;
            }
            this.state.cart.push({
                ...p,
                selectedSize: this.state.selectedSize,
                cartId: Date.now()
            });
            this.showToast('Added to bag');
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

        this.showToast('Processing Payment...');
        setTimeout(() => {
            // Move cart items to orders
            this.state.cart.forEach(item => {
                this.state.orders.unshift({
                    id: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
                    productName: item.name,
                    price: item.price,
                    customer: 'Alice Wong',
                    status: 'Shipping', // Set initial status
                    image: item.image,
                    selectedSize: item.selectedSize || 'One Size',
                    date: new Date().toLocaleDateString()
                });
            });

            this.state.cart = [];
            this.saveState();
            this.updateCartCount();
            this.showToast('Order Placed Successfully!');
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
            <section class="hero reveal">
                <!-- Floating Y2K Stars -->
                <div class="hero__deco hero__deco--star-1" style="position:absolute; top:12%; left:8%; z-index:1">★</div>
                <div class="hero__deco hero__deco--star-2" style="position:absolute; bottom:18%; left:48%; z-index:1">✦</div>
                <div class="hero__deco hero__deco--star-3" style="position:absolute; top:20%; right:8%; z-index:1">★</div>

                <div class="container" style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; width:100%; gap:65px; position:relative; z-index:2">
                    <div class="hero__content" style="flex:1.1; min-width:300px">
                        <span class="hero__badge">★ Retro Thrift & Sustainable ★</span>
                        <h1 style="font-family:var(--font-heading); font-weight:900; line-height:1.1; margin-bottom:20px">THRIFTZY<br>STYLE</h1>
                        <p style="font-size:14px; margin-bottom:30px; font-weight:700; color:#333; line-height:1.6">Kênh ký gửi & mua sắm thời trang vintage tuyển chọn chất lượng cao. Độc bản - Bền vững - Đậm cá tính Y2K.</p>
                        <div class="hero__btns">
                            <button class="btn btn--primary" onclick="app.navigate('collection')">+ SHOP NOW</button>
                            <button class="btn btn--outline" onclick="app.navigate('seller-dashboard')">+ SELL AN ITEM</button>
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
                        <span class="hero__sticker" style="position:absolute; bottom:-12px; right:20px; background:#FF2D85; color:#fff; border:2.5px solid #000; padding:6px 14px; font-size:11px; font-weight:900; transform:rotate(-4deg); box-shadow:4px 4px 0px #000; text-transform:uppercase; z-index:3; letter-spacing:0.5px">★ Y2K ARCHIVAL ★</span>
                    </div>
                </div>
            </section>

            <section class="about-section reveal">
                <div class="container">
                    <div class="about-grid">
                        <div class="about-content">
                            <h2>ABOUT US</h2>
                            <p style="font-weight:700; font-size:14px; line-height:1.6; margin-bottom:12px">THRIFTZY là website thời trang second-hand dành cho Gen Z yêu thích phong cách Y2K, sáng tạo và bền vững. Nền tảng không chỉ giúp người dùng mua bán quần áo 2hand dễ dàng và thể hiện cá tính riêng.</p>
                            <p style="font-weight:700; font-size:14px; line-height:1.6; margin-bottom:12px">Với giao diện lấy cảm hứng từ internet và aesthetic đầu những năm 2000, THRIFTZY mang đến trải nghiệm mua sắm trẻ trung, độc đáo và phù hợp với văn hóa số của giới trẻ Việt Nam.</p>
                        </div>
                        <div class="sustainability-poster">
                            <span>RE-DUCE</span>
                            <span>RE-USE</span>
                            <span>RE-CYCLE</span>
                            <span>RE-WEAR</span>
                            <span>RE-REPEAT</span>
                        </div>
                    </div>
                </div>
            </section>

            <section style="padding:80px 0">
                <div class="container">
                    <div class="section-title reveal" style="margin-bottom:60px">
                        <h2 style="font-family:var(--font-heading); font-size:32px; font-weight:900; text-transform:uppercase; letter-spacing:1px">Marketplace</h2>
                        <p style="font-size:12px; font-weight:700">Khám phá các sản phẩm độc bản vừa được lên kệ</p>
                    </div>
                    <div class="product-grid">
                        ${featuredProducts.map(p => this.createProductCard(p)).join('')}
                    </div>

            <section style="padding:150px 0; text-align:center" class="reveal">
                <div class="container">
                    <h2 style="font-family:var(--font-serif); font-size:42px; margin-bottom:30px">Your Style, Reimagined</h2>
                    <p style="color:var(--text-light); max-width:700px; margin:0 auto 50px; font-size:18px">Join our community of conscious curators and give luxury a second life. Become a Thriftzy seller today.</p>
                    <button class="btn btn--primary" style="padding:20px 80px; border-radius:0; background:var(--primary)" onclick="app.navigate('seller-dashboard')">Start Selling</button>
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
                    <h4 class="designer-name">${p.designer || 'Thriftzy Archive'}</h4>
                    <p class="product-name-luxury">${p.name}</p>
                    <p class="product-price">$${p.price.toFixed(2)}</p>
                </div>
            </div>
        `;
    },

    renderCollection() {
        const root = document.getElementById('app-root');
        const categories = ['All', 'Apparel', 'Bags', 'Shoes', 'Accessories'];
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
                            ${cat}
                        </button>
                    `).join('')}
                </div>

                <div class="shop-controls">
                    <div class="filter-group">
                        <select class="filter-select" onchange="app.setFilter('designer', this.value)">
                            <option value="All">All Designers</option>
                            ${designers.filter(d => d !== 'All').map(d => `
                                <option value="${d}" ${this.state.filters.designer === d ? 'selected' : ''}>${d}</option>
                            `).join('')}
                        </select>
                    </div>
                    
                    <div class="filter-group">
                        <select class="filter-select" onchange="app.setFilter('sort', this.value)">
                            <option value="newest" ${this.state.filters.sort === 'newest' ? 'selected' : ''}>Newest First</option>
                            <option value="price-low" ${this.state.filters.sort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                            <option value="price-high" ${this.state.filters.sort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
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
                        <div class="pdp-designer">${p.designer || 'Vibe Luxury'}</div>
                        <h1 class="pdp-name" style="font-family:var(--font-heading); font-weight:900">${p.name}</h1>
                        <p class="pdp-price" style="font-weight:900; font-size:22px">$${p.price.toFixed(2)}</p>
                        
                        <div class="pdp-section">
                            <h4 style="font-weight:800; font-size:12px; margin-bottom:12px">SELECT SIZE</h4>
                            <div class="size-selector">
                                ${(p.sizes || ['One Size']).map(s => `
                                    <div class="size-option ${this.state.selectedSize === s ? 'active' : ''}" 
                                         onclick="app.selectSize('${s}')">${s}</div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="pdp-actions">
                            <button class="btn btn--primary" onclick="app.addToCart(${p.id})">+ ADD TO BAG</button>
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
                                TÌNH TRẠNG SẢN PHẨM / FAULTS & FLAWS
                            </div>
                            <ul class="fault-list">
                                ${(p.faults && p.faults.length > 0) ? p.faults.map(f => `<li>${f}</li>`).join('') : `<li>Không có lỗi đáng kể (Tuyển chọn cực đẹp)</li>`}
                            </ul>
                        </div>

                        <div class="pdp-details">
                            <details open>
                                <summary style="font-weight:800; font-size:12px">
                                    DESCRIPTION <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </summary>
                                <div class="details-content">
                                    <p>${p.description}</p>
                                </div>
                            </details>
                            <details>
                                <summary style="font-weight:800; font-size:12px">
                                    SIZE & FIT <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </summary>
                                <div class="details-content">
                                    <p>Fits true to size. For more information, please review the size guide.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>

                <section class="related-products" style="margin-top:80px; padding-bottom:80px">
                    <div class="section-title">
                        <h2 style="font-family:var(--font-heading); font-size:28px; font-weight:900; text-transform:uppercase">You May Also Like</h2>
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
                    <h1 style="font-family:var(--font-serif); font-size:32px; text-transform:uppercase; letter-spacing:2px">My Wishlist</h1>
                    <p>${items.length} items saved</p>
                </div>
                
                ${items.length === 0 ? `
                    <div style="text-align:center; padding:100px 0">
                        <p style="margin-bottom:30px">Your wishlist is currently empty.</p>
                        <button class="btn btn--primary" onclick="app.navigate('collection')">Start Shopping</button>
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
                    <p style="color:var(--text-light); margin-bottom:40px; font-size:12px; font-weight:700">Explore our curated archive to find your next piece.</p>
                    <button class="btn btn--primary" onclick="app.navigate('collection')">+ BẮT ĐẦU MUA SẮM / SHOP NOW</button>
                </div>
            `;
            return;
        }

        this.appRoot.innerHTML = `
            <div class="container" style="padding:60px 20px 100px; animation:fadeIn 0.8s ease">
                <div class="cart-layout">
                    <div>
                        <h2 class="cart-title" style="font-family:var(--font-heading); font-weight:900; text-transform:uppercase; margin-bottom:30px">GIỎ HÀNG / SHOPPING BAG</h2>
                        <div class="cart-items-list">
                            ${this.state.cart.map((item, index) => `
                                <div class="cart-item" style="border:3px solid #000; box-shadow:4px 4px 0px #000; border-radius:4px; padding:15px; background:var(--white); margin-bottom:20px; display:flex; gap:20px; align-items:center">
                                    <img src="${item.image}" alt="${item.name}" style="width:90px; height:110px; object-fit:cover; border:2px solid #000; box-shadow:2px 2px 0px #000; border-radius:2px">
                                    <div class="cart-item-info" style="flex:1">
                                        <div class="cart-item-header" style="display:flex; justify-content:space-between; align-items:flex-start">
                                            <div>
                                                <h3 class="cart-item-name" style="font-size:15px; font-family:var(--font-heading); font-weight:900; margin:0">${item.name}</h3>
                                                <p class="cart-item-designer" style="font-size:11px; font-weight:700; color:#555; text-transform:uppercase; margin:4px 0">${item.designer}</p>
                                                <p class="cart-item-size" style="font-size:11px; color:#777; font-weight:700; margin:0">Size: ${item.selectedSize || 'One Size'}</p>
                                            </div>
                                            <button class="remove-btn" style="background:none; border:none; color:#FF2D85; font-size:11px; font-weight:900; cursor:pointer; text-transform:uppercase; letter-spacing:0.5px" onclick="app.removeFromCart(${index})">[ XÓA ]</button>
                                        </div>
                                        <p class="cart-item-price" style="font-size:15px; font-weight:900; color:#000; margin-top:10px">$${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <aside class="cart-summary" style="border:3px solid #000; box-shadow:6px 6px 0px #000; border-radius:4px; padding:30px; background:var(--white); height:fit-content">
                        <h3 class="summary-title" style="font-family:var(--font-heading); font-weight:900; text-transform:uppercase; border-bottom:2px solid #000; padding-bottom:15px; margin-bottom:20px">TÓM TẮT ĐƠN HÀNG</h3>
                        <div class="summary-row" style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:12px; font-weight:700">
                            <span>Tạm tính (Subtotal)</span>
                            <span>$${total.toFixed(2)}</span>
                        </div>
                        <div class="summary-row" style="display:flex; justify-content:space-between; margin-bottom:20px; font-size:12px; font-weight:700">
                            <span>Vận chuyển (Shipping)</span>
                            <span style="color:#00B259; font-weight:800">Complimentary</span>
                        </div>
                        <div class="summary-row total" style="display:flex; justify-content:space-between; border-top:2px solid #000; padding-top:15px; font-weight:900; font-size:16px">
                            <span>Tổng cộng (Total)</span>
                            <span>$${total.toFixed(2)}</span>
                        </div>
                        <button class="btn btn--primary" style="width:100%; margin-top:30px; padding:15px 0" onclick="app.handleCheckout()">+ THANH TOÁN / CHECKOUT</button>
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
                    <p style="color:var(--text-light); margin-bottom:40px; font-size:12px; font-weight:700">Explore our curated collection to start tracking your purchases!</p>
                    <button class="btn btn--primary" onclick="app.navigate('collection')">+ BẮT ĐẦU MUA SẮM</button>
                </div>
            `;
            return;
        }

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
                                        <span class="status-badge" style="background:#000; color:${order.status === 'Delivered' ? '#ABF7B1' : 'var(--accent)'}; padding:6px 16px; border:2px solid #000; font-size:11px; font-weight:900; text-transform:uppercase; box-shadow:2px 2px 0px #000">${order.status}</span>
                                    </div>
                                </div>

                                <div style="display:flex; gap:25px; align-items:center; flex-wrap:wrap">
                                    <img src="${order.image}" style="width:100px; height:120px; object-fit:cover; border:2px solid #000; box-shadow:3px 3px 0px #000; border-radius:4px">
                                    <div style="flex:1; min-width:200px">
                                        <h3 style="font-size:18px; font-family:var(--font-heading); font-weight:900; margin-bottom:8px">${order.productName}</h3>
                                        <p style="font-size:12px; color:var(--text-light); font-weight:700; margin-bottom:8px">Kích cỡ / Size: ${order.selectedSize}</p>
                                        <p style="font-size:16px; font-weight:900; color:#000">Tổng cộng: $${order.price.toFixed(2)}</p>
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
                                        <span style="color:#000">Đã xác nhận<br>(Confirmed)</span>
                                        <span style="${order.status === 'Packing' ? 'color:#000' : ''}">Đang chuẩn bị<br>(Packing)</span>
                                        <span style="${order.status === 'Shipped' || order.status === 'Shipping' ? 'color:#000' : ''}">Đang giao<br>(Shipping)</span>
                                        <span style="${order.status === 'Delivered' ? 'color:#000' : ''}; text-align:right">Đã nhận<br>(Delivered)</span>
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
                        <h2>My Shop</h2>
                        <p>Manage your inventory and track sales.</p>
                    </div>
                    <div class="seller-actions">
                        <button class="btn btn--outline" onclick="app.navigate('messages')">Messages</button>
                        <button class="btn btn--outline" onclick="app.navigate('order-tracking')">Track Orders</button>
                    </div>
                </div>

                <div class="seller-tabs">
                    <div class="seller-tab ${this.state.sellerTab === 'selling' ? 'active' : ''}" onclick="app.setSellerTab('selling')">
                        Selling (${approved.length})
                    </div>
                    <div class="seller-tab ${this.state.sellerTab === 'pending' ? 'active' : ''}" onclick="app.setSellerTab('pending')">
                        Waiting (${pending.length})
                    </div>
                </div>

                <div class="product-grid">
                    ${displayList.length === 0 ? '<p style="grid-column:1/-1; text-align:center; padding:40px; color:#999">No items to show.</p>' : displayList.map(p => `
                        <div class="product-card">
                            <div class="product-card__image">
                                <img src="${p.image}" alt="${p.name}">
                                <div style="position:absolute; top:12px; right:12px">
                                    <span class="status-badge status--${p.status.toLowerCase()}">${p.status}</span>
                                </div>
                            </div>
                            <div class="product-card__info">
                                <h3>${p.name}</h3>
                                <p class="price">$${p.price.toFixed(2)}</p>
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
                        <h2>List New Item</h2>
                        <p>Share your style with the community.</p>
                    </div>
                    <form id="post-item-form" onsubmit="app.handlePostSubmit(event)">
                        <div class="form-group">
                            <label>Product Photos</label>
                            <input type="file" id="file-input" style="display:none" accept="image/*" onchange="app.handleImageSelect(event)">
                            <div class="image-upload-placeholder" id="image-preview" onclick="document.getElementById('file-input').click()">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                                <span style="font-size:12px; margin-top:8px">Upload Image</span>
                            </div>
                        </div>

                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px">
                            <div class="form-group">
                                <label>Item Name</label>
                                <input type="text" class="form-control" name="name" placeholder="e.g. Vintage Silk Shirt" required>
                            </div>
                            <div class="form-group">
                                <label>Price ($)</label>
                                <input type="number" class="form-control" name="price" placeholder="0.00" required>
                            </div>
                        </div>

                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px">
                            <div class="form-group">
                                <label>Category</label>
                                <select class="form-control" name="category" required>
                                    <option value="Apparel">Apparel</option>
                                    <option value="Bags">Bags</option>
                                    <option value="Shoes">Shoes</option>
                                    <option value="Accessories">Accessories</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Designer / Brand</label>
                                <input type="text" class="form-control" name="designer" placeholder="e.g. Chanel" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Size</label>
                            <select class="form-control" name="size">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>Freesize</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Condition / Faults</label>
                            <div class="fault-checkboxes">
                                <label class="fault-checkbox"><input type="checkbox"> Minor Stain</label>
                                <label class="fault-checkbox"><input type="checkbox"> Missing Button</label>
                                <label class="fault-checkbox"><input type="checkbox"> Small Tear</label>
                                <label class="fault-checkbox"><input type="checkbox"> Fabric Pilling</label>
                            </div>
                            <textarea class="form-control" style="margin-top:12px" placeholder="Describe any other details or faults..."></textarea>
                        </div>

                        <div class="form-group">
                            <label>Pickup Address</label>
                            <input type="text" class="form-control" placeholder="Enter your full address">
                        </div>

                        <button type="submit" class="btn btn--primary" style="width:100%" id="submit-post-btn">
                            Submit For Review
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
        this.appRoot.innerHTML = `
            <div class="container" style="padding-top:60px">
                <div class="section-title">
                    <h2>Order Tracking</h2>
                    <p>Manage fulfillment for your sold items.</p>
                </div>
                
                <div style="max-width:900px">
                    ${this.state.orders.map(order => `
                        <div class="order-card">
                            <img src="${order.image}" style="width:80px; height:80px; object-fit:cover; border-radius:4px">
                            <div>
                                <span style="font-size:12px; color:var(--primary); font-weight:700">${order.id}</span>
                                <h3 style="font-size:16px; margin:4px 0">${order.productName}</h3>
                                <p style="font-size:14px; color:var(--text-light)">Buyer: ${order.customer} | $${order.price.toFixed(2)}</p>
                            </div>
                            <div style="text-align:right">
                                <div style="margin-bottom:8px">
                                    <span class="status-badge" style="background:var(--primary-light); color:var(--primary)">${order.status}</span>
                                </div>
                                <div class="order-status-stepper">
                                    <button class="step-btn ${order.status === 'Packing' ? 'current' : ''}" onclick="app.updateOrderStatus('${order.id}', 'Packing')">Packing</button>
                                    <button class="step-btn ${order.status === 'Shipped' ? 'current' : ''}" onclick="app.updateOrderStatus('${order.id}', 'Shipped')">Shipped</button>
                                    <button class="step-btn ${order.status === 'Shipping' ? 'current' : ''}" onclick="app.updateOrderStatus('${order.id}', 'Shipping')">Shipping</button>
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

        btn.innerHTML = '<span class="spinner"></span> Processing...';
        btn.disabled = true;

        setTimeout(() => {
            const newItem = {
                id: Date.now(),
                name: formData.get('name'),
                price: parseFloat(formData.get('price')),
                designer: formData.get('designer'),
                category: formData.get('category'),
                sizes: [formData.get('size') || 'M'],
                description: formData.get('description') || 'Newly listed luxury item.',
                image: this.state.tempImage || 'https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&w=800&q=80',
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
                    <h2 style="font-family:var(--font-serif); font-size:32px; margin-bottom:20px">Listed Successfully</h2>
                    <p style="color:var(--text-light); margin-bottom:40px">Your item "${newItem.name}" is now pending review and will be live shortly.</p>
                    <div style="display:flex; gap:20px; justify-content:center">
                        <button class="btn btn--primary" onclick="app.navigate('collection')">View Marketplace</button>
                        <button class="btn btn--outline" onclick="app.navigate('seller-dashboard')">My Shop</button>
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
                    <h2>Messages</h2>
                    <p>Chat with potential buyers.</p>
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
                            <input type="text" id="msg-input" class="form-control" placeholder="Type a message...">
                            <button class="btn btn--primary" onclick="app.sendMessage()">Send</button>
                            <button class="btn btn--outline" onclick="app.autoReply()">Auto Reply</button>
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
            "Yes, it's still available!",
            "I can ship it tomorrow morning.",
            "The condition is exactly as described.",
            "I can give you a small discount if you buy 2 items."
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
