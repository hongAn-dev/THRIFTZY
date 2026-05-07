const app = {
    state: {
        version: '2.0', // Final Polish & Stability Fixes
        view: 'home',
        cart: [],
        orders: [], // Ensure empty initialization
        wishlist: [],
        products: [
            { id: 1, designer: 'Maison Luxe', name: 'Signature Leather Tote', price: 850, category: 'Bags', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80', description: 'Timeless luxury tote in premium calfskin.', sizes: ['One Size'] },
            { id: 2, designer: 'Maison Luxe', name: 'Heritage Shoulder Bag', price: 980, category: 'Bags', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80', description: 'Iconic silhouette with gold-tone hardware.', sizes: ['One Size'] },
            { id: 3, designer: 'Maison Luxe', name: 'Sleek Crossbody Purse', price: 560, category: 'Bags', image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80', description: 'Minimalist design for the modern curator.', sizes: ['One Size'] },
            { id: 4, designer: 'Maison Luxe', name: 'Structured Top Handle Bag', price: 1100, category: 'Bags', image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80', description: 'Sophisticated structure in pebbled leather.', sizes: ['One Size'] },
            { id: 5, designer: 'Maison Luxe', name: 'Mini Satchel', price: 450, category: 'Bags', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80', description: 'Compact and stylish for light travel.', sizes: ['One Size'] },
            { id: 6, designer: 'Maison Luxe', name: 'Plaid Pattern Handbag', price: 1250, category: 'Bags', image: 'https://images.unsplash.com/photo-1524289286702-f07229da36f5?auto=format&fit=crop&w=800&q=80', description: 'Iconic plaid with premium leather trim.', sizes: ['One Size'] },
            { id: 7, designer: 'Maison Luxe', name: 'Vibrant Yellow Clutch', price: 380, category: 'Bags', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80', description: 'Iconic silhouette with gold-tone hardware.', description: 'A pop of color for your evening ensemble.', sizes: ['One Size'] },
            { id: 8, designer: 'Maison Luxe', name: 'Editorial Handbag', price: 1350, category: 'Bags', image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80', description: 'As seen in the heritage archive editorials.', sizes: ['One Size'] },
            { id: 9, designer: 'Maison Luxe', name: 'Color-Block Tote', price: 790, category: 'Bags', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80', description: 'Modern black and white leather construction.', sizes: ['One Size'] },
            { id: 10, designer: 'Maison Luxe', name: 'Designer Satchel', price: 1100, category: 'Bags', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80', description: 'High-end structure with ample space.', sizes: ['One Size'] },
            { id: 11, designer: 'Aura Silk', name: 'Silk Editorial Gown', price: 1200, category: 'Apparel', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80', description: 'Flowing silk gown for high-fashion statements.', sizes: ['S', 'M', 'L'] },
            { id: 12, designer: 'Aura Silk', name: 'Velvet Evening Dress', price: 890, category: 'Apparel', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80', description: 'Deep velvet textures for elegant evenings.', sizes: ['S', 'M'] },
            { id: 13, designer: 'Aura Silk', name: 'Floral Silk Blouse', price: 340, category: 'Apparel', image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80', description: 'Intricate floral patterns on pure silk.', sizes: ['M', 'L'] },
            { id: 14, designer: 'Aura Silk', name: 'Classic Trench Coat', price: 950, category: 'Apparel', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80', description: 'The essential archive piece.', sizes: ['M', 'L', 'XL'] },
            { id: 15, designer: 'Aura Silk', name: 'Cashmere Oversized Sweater', price: 420, category: 'Apparel', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80', description: 'Iconic silhouette with gold-tone hardware.', description: 'Ultra-soft cashmere for cold luxury.', sizes: ['Freesize'] },
            { id: 16, designer: 'Aura Silk', name: 'Black Luxury Dress', price: 1400, category: 'Apparel', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80', description: 'The ultimate little black dress for the archive.', sizes: ['S', 'M', 'L'] },
            { id: 17, designer: 'Aura Silk', name: 'Embellished Abaya', price: 1600, category: 'Apparel', image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=800&q=80', description: 'Intricate silver work on premium dark fabric.', sizes: ['S', 'M', 'L', 'XL'] },
            { id: 18, designer: 'Aura Silk', name: 'Lace Evening Gown', price: 2200, category: 'Apparel', image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80', description: 'Delicate lace work on a stunning green silhouette.', sizes: ['S', 'M'] },
            { id: 19, designer: 'Aura Silk', name: 'Silk Midi Skirt', price: 480, category: 'Apparel', image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80', description: 'Lustrous finish with a bias-cut drape.', sizes: ['S', 'M', 'L'] },
            { id: 20, designer: 'Aura Silk', name: 'Editorial Fur Coat', price: 3500, category: 'Apparel', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80', description: 'Luxurious fur for ultimate high-fashion warmth.', sizes: ['M', 'L'] },
            { id: 21, designer: 'Step Noir', name: 'Classic Leather Loafers', price: 420, category: 'Shoes', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80', description: 'Handcrafted leather loafers with a polished finish.', sizes: ['38', '39', '40', '41', '42'] },
            { id: 22, designer: 'Step Noir', name: 'Editorial Stilettos', price: 650, category: 'Shoes', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80', description: 'Sharp lines and premium craftsmanship.', sizes: ['36', '37', '38', '39'] },
            { id: 23, designer: 'Step Noir', name: 'Minimalist White Sneakers', price: 290, category: 'Shoes', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80', description: 'Clean aesthetic for daily luxury wear.', sizes: ['40', '41', '42', '43', '44'] },
            { id: 24, designer: 'Step Noir', name: 'Patent Leather Pumps', price: 580, category: 'Shoes', image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80', description: 'High-shine finish for formal elegance.', sizes: ['37', '38', '39'] },
            { id: 25, designer: 'Step Noir', name: 'Suede Ankle Boots', price: 720, category: 'Shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', description: 'Premium suede with a modern silhouette.', sizes: ['39', '40', '41', '42'] },
            { id: 26, designer: 'Step Noir', name: 'Wingtip Oxford Shoes', price: 480, category: 'Shoes', image: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&w=800&q=80', description: 'Classic wingtip design in rich mahogany leather.', sizes: ['41', '42', '43'] },
            { id: 27, designer: 'Step Noir', name: 'Sparkling High Heels', price: 820, category: 'Shoes', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80', description: 'Bow detailing with shimmering crystal finish.', sizes: ['36', '37', '38'] },
            { id: 28, designer: 'Step Noir', name: 'Leather Loafers', price: 410, category: 'Shoes', image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80', description: 'Daily essential in premium black leather.', sizes: ['40', '41', '42', '43'] },
            { id: 29, designer: 'Step Noir', name: 'Two-Tone Dress Shoes', price: 540, category: 'Shoes', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80', description: 'Bold black and red leather for a statement.', sizes: ['42', '43', '44'] },
            { id: 30, designer: 'Step Noir', name: 'Suede Loafers', price: 450, category: 'Shoes', image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=800&q=80', description: 'Softest suede in a timeless design.', sizes: ['39', '40', '41', '42'] },
            { id: 31, designer: 'Aurum', name: 'Chronograph Timepiece', price: 2100, category: 'Accessories', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80', description: 'Precision engineered luxury watch in gold and steel.', sizes: ['One Size'] },
            { id: 32, designer: 'Aurum', name: 'Diamond Link Bracelet', price: 1500, category: 'Accessories', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80', description: 'Sparkling diamond accents on 18k gold links.', sizes: ['One Size'] },
            { id: 33, designer: 'Aurum', name: 'Vintage Gold Necklace', price: 1200, category: 'Accessories', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80', description: 'A timeless piece from the heritage collection.', sizes: ['One Size'] },
            { id: 34, designer: 'Aurum', name: 'Sapphire Drop Earrings', price: 890, category: 'Accessories', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80', description: 'Deep blue sapphires in white gold setting.', sizes: ['One Size'] },
            { id: 35, designer: 'Aurum', name: 'Silver Chrono Watch', price: 1800, category: 'Accessories', image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80', description: 'Sophisticated engineering in brushed steel.', sizes: ['One Size'] },
            { id: 36, designer: 'Aurum', name: 'Gold Signet Ring', price: 750, category: 'Accessories', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80', description: 'Iconic silhouette with gold-tone hardware.', description: 'Bold signet ring in solid 14k gold.', sizes: ['7', '8', '9', '10'] },
            { id: 37, designer: 'Aurum', name: 'Cartier Style Watch', price: 3200, category: 'Accessories', image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=80', description: 'Classic elegance with a leather strap.', sizes: ['One Size'] },
            { id: 38, designer: 'Aurum', name: 'Gemstone Bib Necklace', price: 1800, category: 'Accessories', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80', description: 'Ornate colors and masterful gem setting.', sizes: ['One Size'] },
            { id: 39, designer: 'Aurum', name: 'Gold Heart Pendant', price: 340, category: 'Accessories', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80', description: 'Elegant gold heart with silver accents.', sizes: ['One Size'] },
            { id: 40, designer: 'Aurum', name: 'Diamond Stud Earrings', price: 2800, category: 'Accessories', image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=800&q=80', description: 'Brilliant cut diamonds in platinum setting.', sizes: ['One Size'] },
            { id: 41, designer: 'Step Noir', name: 'Archive Desert Boots', price: 450, category: 'Shoes', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80', description: 'Timeless desert boots in premium tan suede.', sizes: ['40', '41', '42', '43'] },
            { id: 42, designer: 'Aura Silk', name: 'Monochrome Knit Sweater', price: 320, category: 'Apparel', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80', description: 'Heavyweight wool knit for a structural silhouette.', sizes: ['S', 'M', 'L'] },
            { id: 43, designer: 'Maison Luxe', name: 'Crocodile Effect Bag', price: 2100, category: 'Bags', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80', description: 'Embossed leather with a high-shine finish.', sizes: ['One Size'] },
            { id: 44, designer: 'Aurum', name: 'Onyx Signet Ring', price: 680, category: 'Accessories', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80', description: 'Deep black onyx set in sterling silver.', sizes: ['8', '9', '10'] },
            { id: 45, designer: 'Aura Silk', name: 'Tailored Wool Trousers', price: 550, category: 'Apparel', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80', description: 'Sharp pleats and a relaxed drape in virgin wool.', sizes: ['30', '32', '34'] },
            { id: 46, designer: 'Step Noir', name: 'Velvet Evening Slippers', price: 890, category: 'Shoes', image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80', description: 'Embroidered velvet for formal luxury.', sizes: ['41', '42', '43'] },
            { id: 47, designer: 'Maison Luxe', name: 'Duffle Weekender', price: 1450, category: 'Bags', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80', description: 'Spacious travel essential in canvas and leather.', sizes: ['One Size'] },
            { id: 48, designer: 'Aurum', name: 'Moon Phase Watch', price: 4200, category: 'Accessories', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80', description: 'Complex mechanical movement with stellar design.', sizes: ['One Size'] },
            { id: 49, designer: 'Aura Silk', name: 'Sheer Organza Blouse', price: 480, category: 'Apparel', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80', description: 'Light-as-air fabric for layered editorials.', sizes: ['S', 'M'] },
            { id: 50, designer: 'Step Noir', name: 'Chelsea Archive Boots', price: 780, category: 'Shoes', image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=800&q=80', description: 'Iconic silhouette in polished calfskin.', sizes: ['40', '41', '42', '43'] }
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
            p.name.toLowerCase().includes(query) ||
            p.designer.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
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
        // Pick one representative product from each category for the home page showcase
        const featuredProducts = [
            this.state.products.find(p => p.category === 'Apparel'),
            this.state.products.find(p => p.category === 'Bags'),
            this.state.products.find(p => p.category === 'Shoes'),
            this.state.products.find(p => p.category === 'Accessories')
        ].filter(p => p);

        this.appRoot.innerHTML = `
            <section style="position:relative; height:90vh; overflow:hidden; background:#f9f9f9; display:flex; align-items:center; justify-content:center">
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter:brightness(0.6)">
                <div style="position:relative; text-align:center; color:white; z-index:2; padding:20px" class="reveal">
                    <h1 style="font-family:var(--font-serif); font-size:clamp(48px, 10vw, 100px); text-transform:uppercase; letter-spacing:15px; margin-bottom:20px; text-shadow:0 10px 30px rgba(0,0,0,0.5)">Thriftzy</h1>
                    <p style="font-size:clamp(14px, 2vw, 20px); letter-spacing:5px; text-transform:uppercase; margin-bottom:40px">Curated Archives of Luxury</p>
                    <button class="btn btn--primary" style="background:white; color:black; border-radius:0; padding:18px 50px; font-weight:700; letter-spacing:2px" onclick="app.navigate('collection')">Shop The Archive</button>
                </div>
            </section>

            <section style="padding:150px 0" class="reveal">
                <div class="container">
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:100px; align-items:center">
                        <div>
                            <h2 style="font-family:var(--font-serif); font-size:54px; margin-bottom:30px; line-height:1.1">Heritage<br>Quality<br>Authenticity</h2>
                            <p style="color:var(--text-light); margin-bottom:40px; font-size:18px">Thriftzy is the premier destination for authenticated luxury resale. Every piece is hand-picked and verified for its heritage and craft.</p>
                            <a href="#" style="font-size:13px; font-weight:700; text-transform:uppercase; border-bottom:2px solid var(--accent); padding-bottom:8px; color:var(--accent); letter-spacing:2px" onclick="app.navigate('collection')">Discover The Collection</a>
                        </div>
                        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:30px">
                            <div style="aspect-ratio:3/4; overflow:hidden" class="reveal">
                                <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80" style="width:100%; height:100%; object-fit:cover; transition:1s ease-in-out" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                            </div>
                            <div style="aspect-ratio:3/4; overflow:hidden; margin-top:60px" class="reveal">
                                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" style="width:100%; height:100%; object-fit:cover; transition:1s ease-in-out" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style="background:#fcfcfc; padding:150px 0">
                <div class="container">
                    <div class="section-title reveal" style="text-align:center; margin-bottom:80px">
                        <h2 style="font-family:var(--font-serif); font-size:42px; text-transform:uppercase; letter-spacing:4px">Featured Archive</h2>
                    </div>
                    <div class="product-grid">
                        ${featuredProducts.map(p => this.createProductCard(p)).join('')}
                    </div>
                </div>
            </section>

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
            <div class="container">
                <div class="pdp-layout">
                    <div class="pdp-gallery">
                        <img src="${p.image}" alt="${p.name}">
                    </div>
                    <div class="pdp-info-sticky">
                        <div class="pdp-designer">${p.designer || 'Vibe Luxury'}</div>
                        <h1 class="pdp-name">${p.name}</h1>
                        <p class="pdp-price">$${p.price.toFixed(2)}</p>
                        
                        <div class="pdp-section">
                            <h4>Select Size</h4>
                            <div class="size-selector-container">
                                ${(p.sizes || ['One Size']).map(s => `
                                    <div class="size-option ${this.state.selectedSize === s ? 'active' : ''}" 
                                         onclick="app.selectSize('${s}')">${s}</div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="pdp-actions">
                            <button class="btn btn--primary" onclick="app.addToCart(${p.id})">Add To Bag</button>
                            <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="app.toggleWishlist(${p.id})">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78v0z"></path>
                                </svg>
                            </button>
                        </div>

                        <div class="pdp-details">
                            <details open>
                                <summary>
                                    Description <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </summary>
                                <div class="details-content">
                                    <p>${p.description}</p>
                                </div>
                            </details>
                            <details>
                                <summary>
                                    Size & Fit <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </summary>
                                <div class="details-content">
                                    <p>Fits true to size. For more information, please review the size guide.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>

                <section class="related-products">
                    <div class="section-title">
                        <h2>You May Also Like</h2>
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
            <div class="container view-header-space">
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

        let cartContent = `
            <div class="container" style="padding:100px 0; text-align:center">
                <h2 style="font-family:var(--font-serif); font-size:32px; margin-bottom:20px">Your Bag is Empty</h2>
                <p style="color:var(--text-light); margin-bottom:40px">Explore our curated archive to find your next piece.</p>
                <button class="btn btn--primary" onclick="app.navigate('collection')">Start Shopping</button>
            </div>
        `;

        if (this.state.cart.length > 0) {
            cartContent = `
                <div class="cart-layout">
                    <div>
                        <h2 class="cart-title">Shopping Bag</h2>
                        <div class="cart-items-list">
                            ${this.state.cart.map((item, index) => `
                                <div class="cart-item">
                                    <img src="${item.image}" alt="${item.name}">
                                    <div class="cart-item-info">
                                        <div class="cart-item-header">
                                            <div>
                                                <h3 class="cart-item-name">${item.name}</h3>
                                                <p class="cart-item-designer">${item.designer}</p>
                                                <p class="cart-item-size">Size: ${item.selectedSize || 'One Size'}</p>
                                            </div>
                                            <button class="remove-btn" onclick="app.removeFromCart(${index})">Remove</button>
                                        </div>
                                        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <aside class="cart-summary">
                        <h3 class="summary-title">Order Summary</h3>
                        <div class="summary-row">
                            <span>Subtotal</span>
                            <span>$${total.toFixed(2)}</span>
                        </div>
                        <div class="summary-row">
                            <span>Shipping</span>
                            <span>Complimentary</span>
                        </div>
                        <div class="summary-row total">
                            <span>Total</span>
                            <span>$${total.toFixed(2)}</span>
                        </div>
                        <button class="btn btn--primary" style="width:100%; margin-top:24px" onclick="app.handleCheckout()">Proceed to Checkout</button>
                    </aside>
                </div>
            `;
        }

        this.appRoot.innerHTML = `
            <div class="container view-header-space">
                ${cartContent}

                <!-- Order Tracking Section -->
                ${this.state.orders.length > 0 ? `
                <div id="order-tracking-section" style="margin-top:80px; border-top:1px solid var(--border); padding-top:60px; margin-bottom:100px">
                    <div class="section-title">
                        <h2 style="font-family:var(--font-serif); font-size:32px">Order Tracking</h2>
                        <p>Real-time status of your archive acquisitions.</p>
                    </div>
                    <div style="display:grid; gap:20px; max-width:900px">
                        ${this.state.orders.map(order => `
                            <div class="order-card" style="display:flex; align-items:center; gap:30px; padding:20px; border:1px solid var(--border); background:var(--white)">
                                <img src="${order.image}" style="width:100px; height:120px; object-fit:cover; background:#f9f9f9">
                                <div style="flex:1">
                                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px">
                                        <div>
                                            <span style="font-size:11px; font-weight:700; color:var(--text-light); text-transform:uppercase; letter-spacing:1px">${order.id}</span>
                                            <h3 style="font-size:18px; font-family:var(--font-serif); margin:4px 0">${order.productName}</h3>
                                            <p style="font-size:13px; color:var(--text-light)">Size: ${order.selectedSize} | Date: ${order.date}</p>
                                        </div>
                                        <div style="text-align:right">
                                            <span class="status-badge" style="background:${order.status === 'Shipping' ? '#E3F2FD' : '#F5F5F5'}; color:${order.status === 'Shipping' ? '#1976D2' : '#666'}; padding:4px 12px; border-radius:0; font-size:11px; font-weight:700; text-transform:uppercase">${order.status}</span>
                                            <p style="font-weight:700; margin-top:10px">$${order.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div style="height:2px; background:#f0f0f0; width:100%; position:relative; margin-top:20px">
                                        <div style="position:absolute; height:100%; background:var(--accent); width:${order.status === 'Shipping' ? '60%' : '30%'}"></div>
                                    </div>
                                    <div style="display:flex; justify-content:space-between; margin-top:10px; font-size:10px; text-transform:uppercase; font-weight:700; letter-spacing:1px; color:var(--text-light)">
                                        <span>Confirmed</span>
                                        <span style="color:var(--accent)">Shipping</span>
                                        <span>Delivered</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    },

    renderSellerDashboard() {
        const approved = this.state.sellerProducts.filter(p => p.status === 'Approved');
        const pending = this.state.sellerProducts.filter(p => p.status === 'Pending');
        const displayList = this.state.sellerTab === 'selling' ? approved : pending;

        this.appRoot.innerHTML = `
            <div class="container view-header-space">
                <div class="seller-header">
                    <div class="section-title" style="margin-bottom:0">
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
                    ${displayList.length === 0 ? '<p class="empty-state">No items to show.</p>' : displayList.map(p => `
                        <div class="product-card">
                            <div class="product-card__image">
                                <img src="${p.image}" alt="${p.name}">
                                <div class="status-badge-container">
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

                        <div class="form-row">
                            <div class="form-group">
                                <label>Item Name</label>
                                <input type="text" class="form-control" name="name" placeholder="e.g. Vintage Silk Shirt" required>
                            </div>
                            <div class="form-group">
                                <label>Price ($)</label>
                                <input type="number" class="form-control" name="price" placeholder="0.00" required>
                            </div>
                        </div>

                        <div class="form-row">
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
            <div class="container view-header-space">
                <div class="section-title">
                    <h2>Order Tracking</h2>
                    <p>Manage fulfillment for your sold items.</p>
                </div>
                
                <div style="max-width:900px">
                    ${this.state.orders.map(order => `
                        <div class="order-card">
                            <img src="${order.image}" class="order-card-img">
                            <div class="order-card-info">
                                <span class="order-id">${order.id}</span>
                                <h3 class="order-name">${order.productName}</h3>
                                <p class="order-details">Buyer: ${order.customer} | $${order.price.toFixed(2)}</p>
                            </div>
                            <div class="order-card-status">
                                <div class="status-badge-container">
                                    <span class="status-badge status--pending">${order.status}</span>
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
            <div class="container view-header-space">
                <div class="section-title">
                    <h2>Messages</h2>
                    <p>Chat with potential buyers.</p>
                </div>

                <div class="chat-layout">
                    <div class="chat-sidebar">
                        ${this.state.chats.map(chat => `
                            <div class="chat-contact ${activeChat.id === chat.id ? 'active' : ''}" onclick="app.selectChat(${chat.id})">
                                <div style="font-weight:600">${chat.name}</div>
                                <div style="font-size:12px; color:var(--text-light); white-space:nowrap; overflow:hidden; text-overflow:ellipsis">
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
