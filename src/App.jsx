import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { Search, Menu, X, User, ShoppingBag, Heart, ChevronLeft, Star, Check, Plus, Minus, Trash2, Instagram, Twitter, Facebook, ArrowRight, LogOut, MapPin, Shield } from 'lucide-react';

// --- AUTHENTICATION CONTEXT ---
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => setIsLoggedIn(true);
    const logout = () => setIsLoggedIn(false);
    return <AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);

// --- ASSETS & CONFIGURATION (Aetheria Brand) ---
const AetheriaLogo = ({ isWhite = true, large = false }) => (
  <svg width={large ? "240" : "120"} height={large ? "60" : "30"} viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="22" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="bold" fill={isWhite ? "white" : "#1A1A1A"}>
      AETHERIA
    </text>
    {!large && <circle cx="115" cy="15" r="4" fill="#007BFF"/>}
  </svg>
);

const PaymentIcons = () => (
    <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" role="img" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M28.8 12.9c-.1-.1-.3-.1-.5 0l-3 3.1c-.1.1-.1.2-.1.3l.1.4c0 .1.1.2.3.2h.4c.1 0 .2-.1.3-.2l3-3.1c.1-.1.1-.2.1-.3l-.1-.4c.1-.1.1-.2-.1-.2zM32 10.4c-.1-.1-.3-.1-.5 0l-3 3.1c-.1.1-.1.2-.1.3l.1.4c0 .1.1.2.3.2h.4c.1 0 .2-.1.3-.2l3-3.1c.1-.1.1-.2.1-.3l-.1-.4c.1-.1.1-.2-.1-.2zM25.1 16l-3-3.1c-.1-.1-.1-.2-.1-.3l.1-.4c0-.1.1-.2.3-.2h.4c.1 0 .2.1.3.2l3 3.1c.1.1.1.2.1.3l-.1.4c0 .1-.1.2-.3.2h-.4c-.1 0-.2-.1-.3-.2z" fill="#142688"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" role="img" aria-labelledby="pi-mastercard"><title id="pi-mastercard">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><circle fill="#EB001B" cx="15" cy="12" r="7"/><circle fill="#F79E1B" cx="23" cy="12" r="7"/><path fill="#FF5F00" d="M22 12c0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7 7-3.1 7-7z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" role="img" aria-labelledby="pi-rupay"><title id="pi-rupay">Rupay</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"/><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"/><path d="M11.6 8.1H9.3l2.8 5.7-.9 1.6H8l-.7-1.2h-.1c-.1.4-.2.8-.3 1.2h-2L4.2 8.1h2.4l1.2 3.6c.1-.5.3-1 .4-1.5l1-2.1h2.4zM24 15.4h-1.3l.6-1.1h1.5l.6 1.1h-1.4zM24.7 8.1h-2.3l-3.3 7.3h2.3l.5-1.2h2.9l.3 1.2h2.1L24.7 8.1zm-1.3 5.4h-1.3c.2-.5.4-1.1.6-1.7.2-.6.3-1.1.4-1.6h.1l.4 1.6.5 1.7zM33.8 8.1h-2.3l-3.3 7.3h2.3l.5-1.2h2.9l.3 1.2h2.1l-2.5-7.3zm-1.3 5.4h-1.3c.2-.5.4-1.1.6-1.7.2-.6.3-1.1.4-1.6h.1l.4 1.6.5 1.7z" fill="#252525"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" role="img" aria-labelledby="pi-upi"><title id="pi-upi">UPI</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M22.9 8.2h-1.2v7.1h1.2V8.2zM25.9 8.2H24v7.1h1.2l2.3-3.6v3.6h1.2V8.2h-1.2L25.9 12v-3.8zM19.1 11.4c0-1.8-1.4-3.2-3.2-3.2s-3.2 1.4-3.2 3.2 1.4 3.2 3.2 3.2c1.7.1 3.2-1.3 3.2-3.2zm-1.2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM33.7 8.2h-2.1L30 11.1c-.1.2-.2.4-.3.6h-.1c-.1-.2-.2-.4-.3-.6L27.7 8.2h-2.1v7.1h1.2v-4.5l1.5 3.3h.6l1.5-3.3v4.5h1.2V8.2zM11.2 8.2H4.2v7.1h1.2V9.3h5.7v6h1.2V9.3c.1-1.1-.8-2-1.9-2z" fill="#202020"></path></svg>
    </div>
);


// --- EXPANDED MOCK DATA with NEW PRODUCTS ---
const CATEGORIES = ['All', 'New Arrivals', 'Outerwear', 'Tops', 'Bottoms', 'Accessories', 'Sale'];
const PRODUCTS_DATA = [
  // Existing Products
  { id: 1, title: "Aetheria Flow Linen Shirt", brand: "Aetheria Wear", price: 8500, originalPrice: 11000, rating: 4.8, reviewCount: 782, badge: "top_pick", category: "Tops", description: "Experience the pinnacle of summer comfort with the Aetheria Flow Linen Shirt. Made from 100% premium European flax, this shirt is exceptionally breathable and lightweight, becoming softer with every wash. Its tailored fit offers a sharp silhouette that's perfect for both casual outings and sophisticated evening events.", details: ["100% European Flax Linen", "Mother of pearl buttons", "Pre-washed for softness", "Regular fit"], care: ["Machine wash cold", "Tumble dry low", "Warm iron if needed", "Do not bleach"], sizes: ["S", "M", "L", "XL", "XXL"], colors: [ { name: 'Crimson', image: "https://i.postimg.cc/L85JVCx4/100-Pure-Linen-Crimson-Shirt-5.jpg", bgColor: '#DC143C' }, { name: 'Dark Beige', image: "https://i.postimg.cc/yNSWMJqw/100-Pure-Linen-Dark-Beige-Shirt-6.jpg", bgColor: '#A98C7B' }, { name: 'Dark Brown', image: "https://i.postimg.cc/nhWCS4W4/100-Pure-Linen-Dark-Brown-Shirt-5.jpg", bgColor: '#5C4033' }, ], reviews: [ { author: 'Rohan M.', rating: 5, text: "Absolutely fantastic shirt. The linen is top quality and it feels amazing on the skin. Perfect for Goa's weather!" }, { author: 'Priya S.', rating: 4, text: "Great fit and beautiful color. It wrinkles a bit, but that's expected with linen. Very stylish." }, ] },
  { id: 2, title: "Stratus Merino Wool Crewneck", brand: "Aetheria Wear", price: 12500, originalPrice: 15000, rating: 4.9, reviewCount: 1245, badge: "hot_deal", category: "Outerwear", description: "The Stratus Crewneck is your ultimate companion for cooler climates. Woven from ultra-fine merino wool, it provides exceptional warmth without the bulk. Its natural moisture-wicking and odor-resistant properties make it a versatile piece for travel or daily wear.", details: ["100% Ultra-fine Merino Wool", "Ribbed cuffs and hem", "Classic crewneck design", "Thermoregulating fabric"], care: ["Hand wash cold", "Lay flat to dry", "Cool iron", "Or dry clean"], sizes: ["S", "M", "L", "XL"], colors: [ { name: 'Midnight Plum', image: "https://i.postimg.cc/DwjNbZMp/Midnightplum-f4fe0e16-de76-438b-a885-197bf0d445bb.jpg", bgColor: '#4E2A3A' }, { name: 'Black', image: "https://i.postimg.cc/SN43BH9d/black-4b00523a-e3c9-42e1-a88f-b55636df25de.jpg", bgColor: '#000000' }, { name: 'Navy Blue', image: "https://i.postimg.cc/sgD8XSwZ/navy-blue-976ff43c-09d9-43e0-83a2-9a1689e71c07.jpg", bgColor: '#000080' }, { name: 'Pink Clay', image: "https://i.postimg.cc/RVTy4GQB/pink-clay-b86a68ce-5ab0-4c80-87b3-f20e0972a967.jpg", bgColor: '#E0B5A6' }, { name: 'Powder Blue', image: "https://i.postimg.cc/c1wP5dv6/powder-blue-6d58416e-5cf2-4349-a6a9-2063365436ee.jpg", bgColor: '#B0E0E6' }, ], reviews: [ { author: 'Vikram K.', rating: 5, text: "Incredibly soft and warm. Worth every penny. The fit is perfect." }, ] },
  { id: 3, title: "Ascend Performance Chinos", brand: "Aetheria Motion", price: 9800, rating: 4.7, reviewCount: 988, badge: "limited", category: "Bottoms", description: "Engineered for the man on the move, the Ascend Performance Chinos blend classic style with modern fabric technology. The four-way stretch material offers unrestricted movement, while the water-repellent finish keeps you protected from unexpected spills or light rain.", details: ["90% Polyester, 10% Spandex", "4-way stretch fabric", "Water-repellent finish", "Slim-tapered fit"], care: ["Machine wash cold with like colors", "Tumble dry low", "Do not iron"], sizes: ["30", "32", "34", "36", "38"], colors: [ { name: 'Light Khaki', image: "https://i.postimg.cc/dVynvGbS/Light-khaki.jpg", bgColor: '#F0E68C' }, { name: 'Dark Green', image: "https://i.postimg.cc/YCGD95WR/dark-green.jpg", bgColor: '#006400' }, { name: 'Dark Khaki', image: "https://i.postimg.cc/ncM0Ry0x/dark-khaki.jpg", bgColor: '#BDB76B' }, ], reviews: [ { author: 'Anil D.', rating: 5, text: "Best chinos I've ever owned. Super comfortable and they look sharp." }, ] },
  { id: 4, title: "Solstice Silk Scarf", brand: "Aetheria Accents", price: 4400, originalPrice: 5500, rating: 4.9, reviewCount: 2041, badge: null, category: "Accessories", description: "Add a touch of artistry to any outfit with the Solstice Silk Scarf. Crafted from 100% pure Mulberry silk, this scarf features a vibrant, abstract pattern inspired by twilight skies. Its lightweight feel and luxurious drape make it an elegant accessory for all seasons.", details: ["100% Mulberry Silk", "Hand-rolled edges", "Generous 90x90cm size", "Exclusive Aetheria print"], care: ["Dry clean only", "Store flat and untied"], sizes: ["One Size"], colors: [ { name: 'Midnight Glaze', image: "https://i.postimg.cc/6QsK5Ly7/midnight-glaze.jpg", bgColor: '#191970' }, { name: 'Marble Glaze', image: "https://i.postimg.cc/Bvx08LKm/marble-glaze.jpg", bgColor: '#D8BFD8' }, ], reviews: [ { author: 'Sunita V.', rating: 5, text: "The silk is so smooth and the pattern is even more beautiful in person." }, ] },
  { id: 5, title: "Nomad Traveler's Jacket", brand: "Aetheria Wear", price: 22500, originalPrice: 26000, rating: 4.6, reviewCount: 560, badge: "top_pick", category: "Outerwear", description: "The Nomad is the quintessential jacket for the modern adventurer. Constructed from a durable, weather-resistant technical fabric, it features multiple secure pockets for all your essentials. The sleek, minimalist design ensures you look stylish whether you're navigating city streets or exploring the great outdoors.", details: ["Water-resistant nylon shell", "Lightweight insulation", "Multiple zip-pockets", "Adjustable hood and cuffs"], care: ["Machine wash cold", "Hang to dry", "Do not use fabric softener"], sizes: ["M", "L", "XL", "XXL"], colors: [ { name: 'Dark Red', image: "https://i.postimg.cc/JzK1KBnt/HENRONDARKRED00240-edit-1290432147197.jpg", bgColor: '#8B0000' }, { name: 'Black', image: "https://i.postimg.cc/FKRh6sdp/Henron-black-0201-edit-1325248053441.jpg", bgColor: '#000000' }, { name: 'Yellow', image: "https://i.postimg.cc/3x38gZ3P/henron-yellow-0345-edit-1332952934690.jpg", bgColor: '#FFD700' }, ], reviews: [ { author: 'Arjun P.', rating: 5, text: "Perfect travel jacket. Lightweight, warm, and looks great." }, ] },
  { id: 6, title: "Eon Italian Leather Belt", brand: "Aetheria Accents", price: 6200, rating: 4.8, reviewCount: 1533, badge: null, category: "Accessories", description: "The Eon belt is a testament to timeless craftsmanship. Made in Italy from full-grain vegetable-tanned leather, it will develop a unique patina over time. The solid brass buckle is both durable and elegant, making this the perfect finishing touch for any outfit.", details: ["100% Italian Full-Grain Leather", "Solid brass buckle", "3.5cm width", "Handcrafted in Italy"], care: ["Wipe clean with a damp cloth", "Condition with leather cream periodically"], sizes: ["30", "32", "34", "36", "38", "40"], colors: [ { name: 'Tan', image: "https://i.postimg.cc/k4y3M0bG/tan.jpg", bgColor: '#D2B48C' }, { name: 'Black', image: "https://i.postimg.cc/26YNDk3g/Black.jpg", bgColor: '#000000' }, { name: 'Grey', image: "https://i.postimg.cc/yxYqDLmP/grey.jpg", bgColor: '#808080' }, ], reviews: [ { author: 'Karan T.', rating: 5, text: "The quality of the leather is outstanding. You can tell it will last for years." }, ] },
  { id: 7, title: "Aura Tech Joggers", brand: "Aetheria Motion", price: 11200, originalPrice: null, rating: 4.9, reviewCount: 654, badge: "new_arrival", category: "Bottoms", description: "The Aura Tech Joggers are the ultimate fusion of performance and leisure. Crafted from a premium, moisture-wicking fabric with four-way stretch, they provide unparalleled comfort and freedom of movement, whether you're at the gym or on the go.", details: ["4-way stretch performance fabric", "Moisture-wicking & quick-dry", "Secure zippered pockets", "Tapered athletic fit"], care: ["Machine wash cold", "Tumble dry low"], sizes: ["S", "M", "L", "XL"], colors: [ { name: 'Graphite', image: "https://i.postimg.cc/P5gL5z2Q/graphite-jogger.jpg", bgColor: '#3A3B3C' }, { name: 'Olive', image: "https://i.postimg.cc/qR0103Jj/olive-jogger.jpg", bgColor: '#556B2F' } ], reviews: [ { author: 'Sameer P.', rating: 5, text: "Literally the most comfortable joggers I own. Great for travel." } ] },
  { id: 8, title: "Nimbus Light Bomber", brand: "Aetheria Wear", price: 18500, originalPrice: null, rating: 4.7, reviewCount: 432, badge: "new_arrival", category: "Outerwear", description: "A modern take on a classic silhouette. The Nimbus Bomber is made from a water-resistant technical shell, making it the perfect transitional piece for unpredictable weather. Sleek, minimal, and versatile.", details: ["Water-resistant nylon shell", "Lightweight and breathable", "Rib-knit collar, cuffs, and hem", "Two-way front zipper"], care: ["Machine wash cold on gentle cycle", "Hang to dry"], sizes: ["S", "M", "L", "XL", "XXL"], colors: [ { name: 'Stone Blue', image: "https://i.postimg.cc/C1H5z7kL/stone-blue-bomber.jpg", bgColor: '#6A8094' }, { name: 'Classic Black', image: "https://i.postimg.cc/bN9fL5bM/black-bomber.jpg", bgColor: '#1C1C1C' } ], reviews: [ { author: 'Aditi R.', rating: 5, text: "Looks incredibly sharp and fits perfectly. Great quality." } ] },
  { id: 9, title: "Horizon Selvedge Denim", brand: "Aetheria Wear", price: 14500, originalPrice: 18000, rating: 4.8, reviewCount: 1102, badge: null, category: "Bottoms", description: "Crafted from premium Japanese selvedge denim, the Horizon jeans are built to last and get better with age. The raw denim will fade beautifully over time, creating a unique pattern that tells your story. A timeless wardrobe staple.", details: ["13.5oz Japanese Selvedge Denim", "Raw, unwashed finish", "Classic 5-pocket styling", "Slim-straight fit"], care: ["Wash as little as possible", "Soak in cold water, hang dry"], sizes: ["30", "31", "32", "33", "34", "36"], colors: [ { name: 'Indigo', image: "https://i.postimg.cc/8z9f6Dcf/indigo-denim.jpg", bgColor: '#4B0082' } ], reviews: [ { author: 'Ravi G.', rating: 5, text: "Fantastic denim. Breaking them in has been a joy. The quality is top-notch." } ] },
  { id: 10, title: "Apex Leather Backpack", brand: "Aetheria Accents", price: 29500, originalPrice: null, rating: 4.9, reviewCount: 389, badge: "limited", category: "Accessories", description: "The Apex Backpack combines minimalist design with luxurious materials. Made from full-grain Italian leather, it features a padded laptop compartment and multiple interior pockets to keep your essentials organized. An elegant companion for the modern professional.", details: ["Full-grain Italian leather", "Padded 15-inch laptop sleeve", "Solid brass hardware", "Adjustable leather straps"], care: ["Wipe with a soft, dry cloth", "Use leather conditioner"], sizes: ["One Size"], colors: [ { name: 'Cognac', image: "https://i.postimg.cc/L5KqHwYJ/cognac-backpack.jpg", bgColor: '#9A4620' }, { name: 'Onyx', image: "https://i.postimg.cc/135zP2H6/onyx-backpack.jpg", bgColor: '#222222' } ], reviews: [ { author: 'Nisha K.', rating: 5, text: "Stunning backpack. The leather is beautiful and it's surprisingly spacious." } ] },
  { id: 11, title: "Vector Aviator Sunglasses", brand: "Aetheria Accents", price: 9500, originalPrice: null, rating: 4.6, reviewCount: 887, badge: null, category: "Accessories", description: "A timeless design reimagined with modern materials. The Vector Aviators feature a lightweight titanium frame and polarized lenses that offer 100% UV protection. They provide exceptional clarity and style.", details: ["Lightweight titanium frame", "Polarized lenses with UVA/UVB protection", "Adjustable nose pads", "Includes hard case and cleaning cloth"], care: ["Clean with lens cloth", "Store in case when not in use"], sizes: ["One Size"], colors: [ { name: 'Chrome Green', image: "https://i.postimg.cc/d1Q6Q84p/chrome-green-sunglasses.jpg", bgColor: '#C0C0C0' } ], reviews: [ { author: 'Karan J.', rating: 4, text: "Very lightweight and comfortable. The polarized lenses are great for driving." } ] },
  
  // --- NEWLY ADDED PRODUCTS ---
  
  // New Arrivals
  { id: 12, title: "Helios Performance Tee", brand: "Aetheria Motion", price: 4500, originalPrice: null, rating: 4.9, reviewCount: 312, badge: "new_arrival", category: "Tops", description: "Engineered for peak performance and ultimate comfort, the Helios Tee is crafted from a proprietary moisture-wicking fabric that keeps you cool and dry. Its athletic fit and minimalist design make it a versatile staple for workouts or casual wear.", details: ["Ultra-lightweight performance fabric", "Moisture-wicking and quick-drying", "Anti-odor technology", "Reflective logo for visibility"], care: ["Machine wash cold with like colors", "Tumble dry low", "Do not use fabric softener"], sizes: ["S", "M", "L", "XL", "XXL"], colors: [ { name: 'Maroon', image: "https://i.postimg.cc/mgYTSdnT/file-000000006bf461fab426d316e3b900c4.png", bgColor: '#800000' }, { name: 'Black', image: "https://i.postimg.cc/vmPTWq1c/file-00000000e50461faa28ff84fe3c314f7.png", bgColor: '#1C1C1C' } ], reviews: [ { author: 'Jay R.', rating: 5, text: "The perfect workout shirt. Breathes well and feels amazing." } ] },
  { id: 13, title: "Cirrus Quilted Vest", brand: "Aetheria Wear", price: 13500, originalPrice: null, rating: 4.8, reviewCount: 289, badge: "new_arrival", category: "Outerwear", description: "The Cirrus Vest offers core warmth without restricting movement. Featuring a lightweight, eco-friendly insulation and a water-resistant shell, it's the ideal layering piece for transitional weather, providing both style and functionality.", details: ["100% recycled nylon shell", "Lightweight synthetic insulation", "Zippered hand pockets", "Packs into its own pocket"], care: ["Machine wash cold, gentle cycle", "Tumble dry low with tennis balls to restore fluff"], sizes: ["S", "M", "L", "XL"], colors: [ { name: 'Black', image: "https://i.postimg.cc/VN0pR5vn/navy-blue.jpg", bgColor: '#1C1C1C' }, { name: 'Navy Blue', image: "https://i.postimg.cc/NMhVPY2V/Picsart-25-09-07-21-41-12-553.jpg", bgColor: '#000080' } ], reviews: [ { author: 'Alok S.', rating: 5, text: "Incredibly light and surprisingly warm. My new go-to for chilly mornings." } ] },
  { id: 14, title: "Momentum Tech Shorts", brand: "Aetheria Motion", price: 6800, originalPrice: null, rating: 4.7, reviewCount: 450, badge: "new_arrival", category: "Bottoms", description: "Designed for life in motion, these stylish shorts are made from a high-performance, four-way stretch fabric. They offer a clean, modern silhouette suitable for everything from a morning run to a casual weekend brunch.", details: ["4-way stretch technical fabric", "Durable water-repellent (DWR) finish", "Hidden zip pocket for essentials", "7-inch inseam"], care: ["Machine wash cold", "Tumble dry low"], sizes: ["30", "32", "34", "36", "38"], colors: [ { name: 'Pink', image: "https://i.postimg.cc/DwvB001n/pink.jpg", bgColor: '#FFC0CB' }, { name: 'Black', image: "https://i.postimg.cc/J4WTwPny/Black.png", bgColor: '#1C1C1C' }, { name: 'Green', image: "https://i.postimg.cc/3xt9vhZp/green.jpg", bgColor: '#228B22' }, { name: 'Brown', image: "https://i.postimg.cc/L6BxmLYx/Picsart-25-09-07-21-47-05-955.jpg", bgColor: '#A0522D' } ], reviews: [ { author: 'Rahul V.', rating: 5, text: "Super versatile shorts. Look great and feel even better." } ] },

  // Outerwear
  { id: 15, title: "Zenith Parka", brand: "Aetheria Wear", price: 28000, originalPrice: null, rating: 4.9, reviewCount: 355, badge: null, category: "Outerwear", description: "The Zenith Parka is engineered to withstand the harshest conditions. It features a fully waterproof, breathable shell and premium down insulation for exceptional warmth. Multiple pockets and an adjustable hood add to its superior functionality.", details: ["3-layer waterproof breathable shell", "750-fill-power responsibly sourced down", "Fully seam-sealed", "Fleece-lined pockets"], care: ["Machine wash cold on a gentle cycle", "Tumble dry low with wool dryer balls", "Do not bleach"], sizes: ["M", "L", "XL", "XXL"], colors: [ { name: 'Beige', image: "https://i.postimg.cc/ydmLWZp6/beige.jpg", bgColor: '#F5F5DC' }, { name: 'Black', image: "https://i.postimg.cc/Xqxxk00T/Picsart-25-09-07-21-29-31-030.jpg", bgColor: '#1C1C1C' } ], reviews: [ { author: 'Manoj K.', rating: 5, text: "This is a serious winter coat. Kept me warm and dry through a snowstorm. Worth the investment." } ] },
  { id: 16, title: "Equinox Trench Coat", brand: "Aetheria Wear", price: 24500, originalPrice: null, rating: 4.8, reviewCount: 602, badge: "top_pick", category: "Outerwear", description: "A timeless silhouette reimagined for the modern era. The Equinox Trench Coat is crafted from a high-density, water-repellent cotton gabardine. Its streamlined fit and minimal detailing make it a sophisticated choice for any occasion.", details: ["Water-repellent cotton gabardine", "Classic double-breasted closure", "Adjustable waist belt", "Horn buttons"], care: ["Dry clean only", "Cool iron"], sizes: ["S", "M", "L", "XL"], colors: [ { name: 'Brown', image: "https://i.postimg.cc/zD4jCpWt/brown.jpg", bgColor: '#8B4513' }, { name: 'Black', image: "https://i.postimg.cc/GhkkkRbt/black.jpg", bgColor: '#1C1C1C' }, { name: 'Grey', image: "https://i.postimg.cc/BbF279Dh/grey.jpg", bgColor: '#808080' }, { name: 'Navy Blue', image: "https://i.postimg.cc/W1T08y4n/navy.jpg", bgColor: '#000080' } ], reviews: [ { author: 'Anjali P.', rating: 5, text: "An absolutely beautiful coat. The craftsmanship is impeccable and the fit is perfect." } ] },

  // Bottoms
  { id: 17, title: "Orion Linen Trousers", brand: "Aetheria Wear", price: 9200, originalPrice: null, rating: 4.7, reviewCount: 521, badge: null, category: "Bottoms", description: "Effortlessly elegant and exceptionally comfortable, the Orion Trousers are made from 100% Irish linen. With a relaxed, straight-leg cut and a comfortable drawstring waist, they are the perfect choice for warm-weather sophistication.", details: ["100% premium Irish linen", "Drawstring waist with zip fly", "Relaxed straight-leg fit", "Side and back pockets"], care: ["Machine wash cold", "Hang to dry", "Warm iron"], sizes: ["30", "32", "34", "36", "38"], colors: [ { name: 'Khaki Green', image: "https://i.postimg.cc/ZnjvMbnx/khaki-green.jpg", bgColor: '#8F9779' }, { name: 'Black', image: "https://i.postimg.cc/W1dq5Pv0/balckk.jpg", bgColor: '#1C1C1C' }, { name: 'Light Beige', image: "https://i.postimg.cc/4xj7MFfq/Light-beige.jpg", bgColor: '#F5F5DC' } ], reviews: [ { author: 'Rajat S.', rating: 5, text: "The best linen pants I've found. They drape beautifully and are so breathable." } ] },
  { id: 18, title: "Terra Chino Shorts", brand: "Aetheria Wear", price: 5500, originalPrice: null, rating: 4.6, reviewCount: 915, badge: null, category: "Bottoms", description: "A summer essential, perfected. The Terra Chino Shorts are cut from a soft yet durable cotton twill with a hint of stretch for comfort. Their versatile design and ideal length make them a reliable choice for any casual occasion.", details: ["98% Cotton, 2% Elastane", "Garment-dyed for a soft, lived-in feel", "9-inch inseam", "Classic four-pocket design"], care: ["Machine wash warm", "Tumble dry medium"], sizes: ["30", "32", "34", "36", "38", "40"], colors: [ { name: 'Brown', image: "https://i.postimg.cc/Xv6cRvxw/brown.jpg", bgColor: '#964B00' }, { name: 'Charcoal', image: "https://i.postimg.cc/KzZ7Ys6j/charcoal.jpg", bgColor: '#36454F' }, { name: 'Sage Green', image: "https://i.postimg.cc/2yy4QL8f/sage-green.jpg", bgColor: '#87AE73' }, { name: 'Black', image: "https://i.postimg.cc/rpGCMLY7/Screenshot-20250907-220358-edit-9041211393931.jpg", bgColor: '#1C1C1C' } ], reviews: [ { author: 'Amit D.', rating: 4, text: "Solid pair of shorts. Comfortable and the color is great. A bit pricey but the quality is there." } ] },

  // Accessories
  { id: 19, title: "Orbit Crossbody Bag", brand: "Aetheria Accents", price: 8900, originalPrice: null, rating: 4.8, reviewCount: 488, badge: null, category: "Accessories", description: "The Orbit Crossbody is a compact, highly functional bag for your daily essentials. It's constructed from durable ballistic nylon with premium leather accents and features a thoughtfully organized interior to keep you moving with ease.", details: ["Durable ballistic nylon body", "Full-grain leather trim", "Multiple interior and exterior pockets", "Adjustable shoulder strap"], care: ["Spot clean with a damp cloth"], sizes: ["One Size"], colors: [ { name: 'Black', image: "https://i.postimg.cc/hvRXjJzr/bailey-crossbody-bag-751270.jpg", bgColor: '#1C1C1C' }, { name: 'Beige', image: "https://i.postimg.cc/mk3tFb7G/bailey-crossbody-bag-218290.jpg", bgColor: '#D2B48C' } ], reviews: [ { author: 'Neha B.', rating: 5, text: "Perfect size for my phone, wallet, and keys. Looks sleek and the quality is amazing." } ] },
  { id: 20, title: "Strata Cashmere Beanie", brand: "Aetheria Accents", price: 7500, originalPrice: null, rating: 4.9, reviewCount: 680, badge: null, category: "Accessories", description: "Experience unparalleled softness and warmth with the Strata Beanie. Knitted from 100% Grade-A cashmere, this beanie has a classic ribbed design that offers a snug, comfortable fit. A true touch of everyday luxury.", details: ["100% Grade-A Cashmere", "Rib-knit construction", "Classic fold-over cuff", "One size fits most"], care: ["Hand wash cold or dry clean", "Lay flat to dry"], sizes: ["One Size"], colors: [ { name: 'Beige', image: "https://i.postimg.cc/x81WL5zT/Picsart-25-09-07-22-23-33-030.png", bgColor: '#D2B48C' }, { name: 'Black', image: "https://i.postimg.cc/HkrdqYjs/Picsart-25-09-07-22-25-01-674.jpg", bgColor: '#1C1C1C' } ], reviews: [ { author: 'Priya K.', rating: 5, text: "So incredibly soft! It feels like a cloud. Worth every rupee." } ] },

  // Sale
  { id: 21, title: "Nova Pima Polo", brand: "Aetheria Wear", price: 4200, originalPrice: 6000, rating: 4.7, reviewCount: 1150, badge: null, category: "Tops", description: "The Nova Polo elevates a timeless classic. It's made from ultra-soft Pima cotton, known for its durability and brilliant color retention. The perfect fit and subtle details like mother-of-pearl buttons make it a wardrobe essential.", details: ["100% Pima Cotton", "Mother-of-pearl buttons", "Classic pique knit", "Modern tailored fit"], care: ["Machine wash cold", "Tumble dry low"], sizes: ["S", "M", "L", "XL", "XXL"], colors: [ { name: 'Wisdom Wine', image: "https://i.postimg.cc/TPxNrQ8M/wisdom-wine.jpg", bgColor: '#8B0000' }, { name: 'Garden Green', image: "https://i.postimg.cc/XJ72PJ7s/garden-green.jpg", bgColor: '#006400' }, { name: 'Shady Teal', image: "https://i.postimg.cc/N0xJbTYy/shady-teal.jpg", bgColor: '#008080' } ], reviews: [ { author: 'Siddharth R.', rating: 5, text: "The fabric on this polo is incredible. So much softer than any other polo I own." } ] },
];

const BANNER_IMAGES = ["https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1500&auto=format&fit=crop", "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1500&auto=format&fit=crop", "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1500&auto=format&fit=crop"];
const CATEGORY_BANNERS = { "New Arrivals": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1740&auto=format&fit=crop", "Outerwear": "https://images.unsplash.com/photo-1542841791-19756bace878?q=80&w=1740&auto=format&fit=crop", "Tops": "https://images.unsplash.com/photo-1603252109360-704952e5a6b8?q=80&w=1740&auto=format&fit=crop", "Bottoms": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop", "Accessories": "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1740&auto=format&fit=crop", "Sale": "https://images.unsplash.com/photo-1572584642822-60a0a73546a2?q=80&w=1740&auto=format&fit=crop", "All": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1740&auto=format&fit=crop" };
const MOCK_ORDERS = [ { id: '#AE-98341', date: 'August 15, 2025', status: 'Delivered', total: 18300, items: [PRODUCTS_DATA[1], PRODUCTS_DATA[5]] }, { id: '#AE-82195', date: 'July 2, 2025', status: 'Delivered', total: 9800, items: [PRODUCTS_DATA[2]] }, { id: '#AE-75501', date: 'May 12, 2025', status: 'Delivered', total: 28000, items: [PRODUCTS_DATA[4], PRODUCTS_DATA[0]] }, ];

const GST_RATE = 0.18; const SHIPPING_COST = 150; const FREE_SHIPPING_THRESHOLD = 5000;

// --- CART CONTEXT ---
const CartContext = createContext();
export const CartProvider = ({ children }) => { const [cart, setCart] = useState([]); const [toast, setToast] = useState({ show: false, message: '' }); const showToast = (message) => { setToast({ show: true, message }); setTimeout(() => setToast({ show: false, message: '' }), 3000); }; const addToCart = (product, color, size) => { const cartItemId = `${product.id}-${color.name}-${size}`; const existingItem = cart.find(item => item.cartItemId === cartItemId); if (existingItem) { setCart(cart.map(item => item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item)); } else { setCart([...cart, { ...product, color, size, quantity: 1, cartItemId }]); } showToast(`'${product.title}' added to your bag`); }; const updateQuantity = (cartItemId, newQuantity) => { if (newQuantity <= 0) { const itemToRemove = cart.find(item => item.cartItemId === cartItemId); removeFromCart(cartItemId, itemToRemove.title); } else { setCart(cart.map(item => item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item)); } }; const removeFromCart = (cartItemId, title) => { showToast(`'${title}' removed from your bag`); setCart(cart.filter(item => item.cartItemId !== cartItemId)); }; const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0); const estimatedGst = subtotal * GST_RATE; const shipping = subtotal > FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_COST; const grandTotal = subtotal + estimatedGst + shipping; const value = { cart, addToCart, updateQuantity, removeFromCart, itemCount: cart.reduce((sum, item) => sum + item.quantity, 0), subtotal, estimatedGst, shipping, grandTotal, toast, showToast }; return <CartContext.Provider value={value}>{children}</CartContext.Provider>; };
export const useCart = () => useContext(CartContext);


// --- UI Components ---
const StarRating = ({ rating, size = 'h-4 w-4' }) => ( <div className="flex items-center"> {[...Array(5)].map((_, i) => <Star key={i} className={`${size} ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />)} </div> );
const ProductBadge = ({ badge }) => { if (!badge) return null; const badgeText = badge.replace(/_/g, ' '); const styles = { top_pick: "bg-[#007BFF] text-white", hot_deal: "bg-[#FF6B6B] text-white", limited: "bg-gray-200 text-[#1A1A1A]", new_arrival: "bg-teal-500 text-white" }; return <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${styles[badge]}`}>{badgeText}</span>; };
const AccordionItem = ({ title, children, defaultOpen = false }) => { const [isOpen, setIsOpen] = useState(defaultOpen); return ( <div className="border-b border-gray-200 py-4"> <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left text-lg font-medium"> <span>{title}</span> <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${isOpen ? '-rotate-90' : ''}`} /> </button> <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}> <div className="text-gray-600 space-y-2 prose prose-sm max-w-none">{children}</div> </div> </div> ); };
const ToastNotification = () => { const { toast } = useCart(); return ( <div className={`fixed bottom-5 right-5 z-[100] transition-all duration-300 ${toast.show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}> <div className="flex items-center bg-gray-900 text-white py-3 px-5 rounded-lg shadow-2xl"> <Check className="w-5 h-5 text-green-400 mr-3" /> <span className="text-sm font-medium">{toast.message}</span> </div> </div> ); };
const ProductCardSkeleton = () => ( <div className="bg-white rounded-lg shadow-sm overflow-hidden group relative"> <div className="relative overflow-hidden h-80 bg-gray-200 animate-pulse"></div> <div className="p-5"> <div className="h-4 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div> <div className="flex items-center justify-between"> <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div> <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div> </div> </div> </div> );
const ImageZoom = ({ src, alt }) => { const [mousePos, setMousePos] = useState({ x: 0, y: 0 }); const [showZoom, setShowZoom] = useState(false); const imgRef = useRef(); const handleMouseMove = (e) => { if (!imgRef.current) return; const { left, top, width, height } = imgRef.current.getBoundingClientRect(); const x = ((e.pageX - left) / width) * 100; const y = ((e.pageY - top - window.scrollY) / height) * 100; setMousePos({ x, y }); }; return ( <div ref={imgRef} onMouseMove={handleMouseMove} onMouseEnter={() => setShowZoom(true)} onMouseLeave={() => setShowZoom(false)} className="relative overflow-hidden cursor-zoom-in rounded-lg shadow-xl" > <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-300" /> {showZoom && ( <div className="absolute inset-0 pointer-events-none rounded-lg" style={{ backgroundImage: `url(${src})`, backgroundPosition: `${mousePos.x}% ${mousePos.y}%`, backgroundSize: '200%', backgroundRepeat: 'no-repeat', }} /> )} </div> ); };


// --- Page & View Components ---

const ProductCard = ({ product, onProductSelect, toggleWishlist, wishlist }) => (
    <div onClick={() => onProductSelect(product)} className="cursor-pointer bg-white rounded-lg shadow-sm overflow-hidden group relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        <div className="absolute top-4 left-4 z-10"><ProductBadge badge={product.badge} /></div>
        <button onClick={(e) => toggleWishlist(e, product.id)} className="absolute top-4 right-4 z-10 p-2 bg-white/60 backdrop-blur-sm rounded-full text-gray-600 hover:text-[#FF6B6B] transition-colors">
            <Heart size={20} className={`${wishlist && wishlist.has(product.id) ? 'fill-[#FF6B6B] text-[#FF6B6B]' : ''}`} />
        </button>
        <div className="relative overflow-hidden h-80">
            <img src={product.colors[0].image} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
        </div>
        <div className="p-5">
            <h3 className="text-base font-semibold text-gray-800 mb-2 truncate">{product.title}</h3>
            <div className="flex items-center justify-between">
                <div className="flex items-baseline">
                    <span className="text-xl font-bold text-[#212529]">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice && <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice.toLocaleString('en-IN')}</span>}
                </div>
                <div className="flex items-center"><StarRating rating={product.rating} /><span className="text-xs text-gray-500 ml-1.5">({product.reviewCount})</span></div>
            </div>
        </div>
    </div>
);

const LoginPage = ({ onNavigate }) => {
    const { login } = useAuth();
    const [isLoginView, setIsLoginView] = useState(true);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideTimer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % BANNER_IMAGES.length), 5000);
        return () => clearInterval(slideTimer);
    }, []);

    const handleAuthAction = (e) => {
        e.preventDefault();
        login();
        onNavigate('home');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black relative">
            <div className="absolute inset-0 transition-all duration-1000 ease-in-out" style={{ backgroundImage: `url(${BANNER_IMAGES[currentSlide]})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.4)' }}></div>
            <div className="relative z-10 w-full max-w-md p-8 bg-black/50 backdrop-blur-lg rounded-2xl text-white border border-white/20 shadow-2xl animate-fade-in-fast">
                <div className="text-center mb-8">
                    <AetheriaLogo isWhite={true} large={true} />
                </div>
                <div className="flex justify-center border-b border-white/20 mb-6">
                    <button onClick={() => setIsLoginView(true)} className={`px-6 py-3 text-lg font-semibold transition-colors ${isLoginView ? 'border-b-2 border-[#007BFF] text-white' : 'text-gray-400'}`}>Sign In</button>
                    <button onClick={() => setIsLoginView(false)} className={`px-6 py-3 text-lg font-semibold transition-colors ${!isLoginView ? 'border-b-2 border-[#007BFF] text-white' : 'text-gray-400'}`}>Sign Up</button>
                </div>
                <form onSubmit={handleAuthAction} className="space-y-6">
                    {!isLoginView && <input type="text" placeholder="Full Name" className="w-full h-12 px-4 bg-white/10 placeholder-gray-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#007BFF]"/>}
                    <input type="email" placeholder="Email Address" className="w-full h-12 px-4 bg-white/10 placeholder-gray-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#007BFF]"/>
                    <input type="password" placeholder="Password" className="w-full h-12 px-4 bg-white/10 placeholder-gray-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#007BFF]"/>
                    <button type="submit" className="w-full bg-[#007BFF] hover:bg-blue-600 font-bold py-3 rounded-lg text-lg transition-transform hover:scale-105 shadow-lg">{isLoginView ? 'Sign In' : 'Create Account'}</button>
                    <p className="text-center text-sm text-gray-400">{isLoginView ? "Don't have an account?" : "Already have an account?"} <button type="button" onClick={() => setIsLoginView(!isLoginView)} className="font-semibold hover:underline text-[#007BFF]">{isLoginView ? "Sign up" : "Sign in"}</button></p>
                </form>
            </div>
        </div>
    );
};

const HomePage = ({ onProductSelect, onNavigate }) => { const [currentSlide, setCurrentSlide] = useState(0); const [wishlist, setWishlist] = useState(new Set([2, 5, 16])); const [isLoading, setIsLoading] = useState(true); useEffect(() => { const timer = setTimeout(() => setIsLoading(false), 1500); return () => clearTimeout(timer); }, []); useEffect(() => { const slideTimer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % BANNER_IMAGES.length), 5000); return () => clearInterval(slideTimer); }, []); const toggleWishlist = (e, productId) => { e.stopPropagation(); setWishlist(prev => { const newSet = new Set(prev); if (newSet.has(productId)) newSet.delete(productId); else newSet.add(productId); return newSet; }); }; return ( <main> <div className="relative h-[75vh] min-h-[500px] max-h-[720px]"> <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out" style={{ backgroundImage: `url(${BANNER_IMAGES[currentSlide]})` }}></div> <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div> <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-20 text-white text-center"> <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg">Timeless Style, Modern Craft</h1> <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200 drop-shadow-md">Explore our collection of thoughtfully designed apparel.</p> <button onClick={() => onNavigate('category/All')} className="mt-8 inline-block mx-auto bg-[#007BFF] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 shadow-lg">Shop The Collection</button> </div> </div> <section className="bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> <div className="rounded-lg overflow-hidden shadow-lg"><img src={PRODUCTS_DATA[0].colors[0].image} alt="Lifestyle shot" className="w-full h-full object-cover"/></div> <div> <span className="text-sm font-bold uppercase tracking-widest text-[#007BFF]">AETHERIA ESSENTIALS</span> <h2 className="text-4xl font-bold tracking-tight my-4">{PRODUCTS_DATA[0].title}</h2> <p className="text-gray-600 text-lg leading-relaxed">{PRODUCTS_DATA[0].description.split('.')[0]}.</p> <button onClick={() => onProductSelect(PRODUCTS_DATA[0])} className="mt-8 inline-block bg-[#1A1A1A] hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md">Discover The Shirt</button> </div> </div> </div> </section> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Featured Apparel</h2> <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {isLoading ? Array.from({ length: 6 }).map((_, i) => <ProductCardSkeleton key={i} />) : PRODUCTS_DATA.slice(11, 17).map(product => ( <ProductCard key={product.id} product={product} onProductSelect={onProductSelect} toggleWishlist={toggleWishlist} wishlist={wishlist} /> ))} </div> </div> </main> ); };

const ProductPage = ({ product, onBack, onProductSelect }) => { const { addToCart } = useCart(); const [selectedColor, setSelectedColor] = useState(product.colors[0]); const [selectedSize, setSelectedSize] = useState(product.sizes[0]); const similarProducts = PRODUCTS_DATA.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4); return ( <div className="bg-white animate-fade-in"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <button onClick={onBack} className="flex items-center text-sm font-medium text-gray-600 hover:text-[#007BFF] mb-8"> <ChevronLeft className="w-4 h-4 mr-2" /> Back </button> <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> <div className="flex flex-col-reverse md:flex-row gap-4"> <div className="flex md:flex-col gap-2 justify-center"> {product.colors.map(color => ( <button key={color.name} onClick={() => setSelectedColor(color)} className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${selectedColor.name === color.name ? 'border-[#007BFF] shadow-lg' : 'border-transparent hover:border-gray-300'}`}> <img src={color.image} alt={color.name} className="w-full h-full object-cover" /> </button> ))} </div> <ImageZoom src={selectedColor.image} alt={`${product.title} in ${selectedColor.name}`} /> </div> <div> <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1A1A]">{product.title}</h1> <div className="mt-4 flex items-center"><StarRating rating={product.rating} size="w-5 h-5"/><span className="text-gray-600 ml-2 text-sm">({product.reviewCount} reviews)</span></div> <div className="mt-6"><span className="text-3xl font-bold text-[#1A1A1A]">₹{product.price.toLocaleString('en-IN')}</span>{product.originalPrice && <span className="text-lg text-gray-500 line-through ml-3">₹{product.originalPrice.toLocaleString('en-IN')}</span>}</div> <div className="mt-8"><h3 className="text-sm font-medium text-gray-900">Color: <span className="font-bold">{selectedColor.name}</span></h3><div className="flex items-center space-x-3 mt-2">{product.colors.map(color => <button key={color.name} onClick={() => setSelectedColor(color)} style={{backgroundColor: color.bgColor}} className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${selectedColor.name === color.name ? 'ring-2 ring-offset-2 ring-[#007BFF]' : 'border-gray-200'}`} aria-label={`Select color ${color.name}`}></button>)}</div></div> <div className="mt-8"><h3 className="text-sm font-medium text-gray-900">Size</h3><div className="flex flex-wrap gap-3 mt-2">{product.sizes.map(size => <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${selectedSize === size ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}>{size}</button>)}</div></div> <div className="mt-10"><button onClick={() => addToCart(product, selectedColor, selectedSize)} className="w-full bg-[#007BFF] hover:bg-blue-600 text-white font-bold py-4 rounded-lg text-lg transition-transform hover:scale-105 shadow-lg">Add to Bag</button></div> <div className="mt-10"> <AccordionItem title="Description" defaultOpen={true}><p>{product.description}</p></AccordionItem> <AccordionItem title="Product Details & Care"><ul className="list-disc pl-5">{product.details.map((item, i) => <li key={i}>{item}</li>)}</ul><h4 className="font-semibold mt-4">Care Instructions</h4><ul className="list-disc pl-5">{product.care.map((item, i) => <li key={i}>{item}</li>)}</ul></AccordionItem> <AccordionItem title={`Reviews (${product.reviewCount})`}><div className="space-y-6">{product.reviews.map((review, i) => (<div key={i}><div className="flex items-center mb-1"><StarRating rating={review.rating} /><p className="ml-3 font-semibold text-gray-800">{review.author}</p></div><p className="text-gray-600">{review.text}</p></div>))}</div></AccordionItem> </div> </div> </div> <div className="mt-24"> <h2 className="text-2xl font-bold tracking-tight text-center mb-12">You Might Also Like</h2> <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> {similarProducts.map(p => ( <div key={p.id} onClick={() => onProductSelect(p)} className="cursor-pointer bg-white rounded-lg shadow-sm overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"> <div className="relative overflow-hidden h-64"><img src={p.colors[0].image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /></div> <div className="p-4"><h3 className="text-sm font-semibold text-gray-800 mb-1 truncate">{p.title}</h3><span className="text-lg font-bold text-[#212529]">₹{p.price.toLocaleString('en-IN')}</span></div> </div> ))} </div> </div> </div> </div> ); };

const CheckoutPage = ({ onBack, onNavigate }) => { const { subtotal, estimatedGst, shipping, grandTotal, cart } = useCart(); if (cart.length === 0) { return ( <div className="bg-gray-50 animate-fade-in text-center py-24"> <h1 className="text-2xl font-bold">Your Cart is Empty</h1> <p className="text-gray-600 mt-2">Add some products before proceeding to checkout.</p> <button onClick={() => onNavigate('home')} className="mt-6 bg-[#1A1A1A] text-white font-bold py-3 px-6 rounded-lg">Return to Shop</button> </div> ); } return ( <div className="bg-gray-50 animate-fade-in"> <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <button onClick={onBack} className="flex items-center text-sm font-medium text-gray-600 hover:text-[#007BFF] mb-8"> <ChevronLeft className="w-4 h-4 mr-2" /> Back to Cart </button> <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mb-8">Checkout</h1> <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> <div> <h2 className="text-xl font-semibold mb-4">Shipping Details</h2> <form className="space-y-4"> <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#007BFF]"/> <div className="flex gap-4"><input type="text" placeholder="First Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#007BFF]"/><input type="text" placeholder="Last Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#007BFF]"/></div> <input type="text" placeholder="Address" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#007BFF]"/> <div className="flex gap-4"><input type="text" placeholder="City" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#007BFF]"/><input type="text" placeholder="Pincode" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#007BFF]"/></div> </form> <h2 className="text-xl font-semibold mt-8 mb-4">Payment Method</h2> <div className="space-y-3"> <div className="border p-4 rounded-lg flex items-center justify-between bg-white shadow-sm"><label className="flex items-center"><input type="radio" name="payment" className="mr-3" defaultChecked/><span>Credit/Debit Card</span></label><PaymentIcons/></div> <div className="border p-4 rounded-lg bg-white shadow-sm"><label className="flex items-center"><input type="radio" name="payment" className="mr-3"/><span>Cash on Delivery</span></label></div> </div> </div> <div className="bg-white p-6 rounded-lg shadow-lg"> <h2 className="text-xl font-semibold mb-4">Order Summary</h2> <div className="space-y-3 max-h-48 overflow-y-auto pr-2"> {cart.map(item => ( <div key={item.cartItemId} className="flex justify-between items-center text-sm"> <div className="flex items-center flex-1 min-w-0"><img src={item.color.image} className="w-12 h-12 rounded-md mr-3 object-cover flex-shrink-0"/><span className="font-medium text-gray-800 truncate">{item.title} (x{item.quantity})</span></div> <span className="text-gray-600 ml-2">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span> </div> ))} </div> <div className="border-t my-4"></div> <div className="space-y-2 text-sm"> <div className="flex justify-between"><span className="text-gray-600">Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div> <div className="flex justify-between"><span className="text-gray-600">GST (18%)</span><span>₹{estimatedGst.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span></div> <div className="flex justify-between"><span className="text-gray-600">Shipping</span><span>{shipping === 0 ? 'FREE' : `₹${shipping.toLocaleString('en-IN')}`}</span></div> </div> <div className="border-t my-4"></div> <div className="flex justify-between font-bold text-lg"><span>Grand Total</span><span>₹{grandTotal.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</span></div> <button onClick={() => onNavigate('order-confirmation')} className="w-full mt-6 bg-[#007BFF] hover:bg-blue-600 text-white font-bold py-3 rounded-lg text-base transition-transform hover:scale-105 shadow-md">Place Order</button> </div> </div> </div> </div> ); };

const OrderConfirmationPage = ({ onNavigate }) => (
    <div className="bg-white animate-fade-in">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <Check className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full p-3 mb-6"/>
            <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">Thank You For Your Order!</h1>
            <p className="text-gray-600 mt-4 text-lg">Your order `#AE-10258` has been placed successfully. A confirmation email has been sent to you with the full details.</p>
            <button onClick={() => onNavigate('home')} className="mt-8 bg-[#1A1A1A] text-white font-bold py-3 px-8 rounded-lg transition-colors">Continue Shopping</button>
        </div>
    </div>
);

const CategoryPage = ({ category, onProductSelect, toggleWishlist, wishlist }) => {
    const products = category === 'All' ? PRODUCTS_DATA : 
                     category === 'New Arrivals' ? PRODUCTS_DATA.filter(p => p.badge === 'new_arrival') :
                     category === 'Sale' ? PRODUCTS_DATA.filter(p => p.originalPrice) :
                     PRODUCTS_DATA.filter(p => p.category === category);
    
    return (
        <div className="animate-fade-in">
            <div className="relative h-64 bg-gray-900">
                <img src={CATEGORY_BANNERS[category]} alt={category} className="w-full h-full object-cover opacity-40"/>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">{category}</h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <p className="text-center text-gray-500 mb-12">{products.length} products found</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map(p => <ProductCard key={p.id} product={p} onProductSelect={onProductSelect} toggleWishlist={toggleWishlist} wishlist={wishlist} />)}
                </div>
            </div>
        </div>
    );
};

const WishlistPage = ({ onProductSelect, onNavigate }) => {
    const MOCK_WISHLIST_IDS = [2, 10, 16, 13, 19];
    const [wishlistItems, setWishlistItems] = useState(PRODUCTS_DATA.filter(p => MOCK_WISHLIST_IDS.includes(p.id)));
    
    const removeFromWishlist = (e, productId) => {
        e.stopPropagation();
        setWishlistItems(wishlistItems.filter(item => item.id !== productId));
    };
    
    return(
        <div className="bg-white animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mb-8">My Wishlist ({wishlistItems.length})</h1>
                {wishlistItems.length === 0 ? (
                     <div className="text-center py-16 bg-gray-50 rounded-lg">
                        <Heart size={48} className="text-gray-300 mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold">Your wishlist is empty</h3>
                        <p className="text-gray-500 mt-2">Add your favorite items to your wishlist to keep track of them.</p>
                        <button onClick={() => onNavigate('category/All')} className="mt-6 bg-[#1A1A1A] text-white font-bold py-3 px-6 rounded-lg">Explore Products</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {wishlistItems.map(p => (
                             <ProductCard key={p.id} product={p} onProductSelect={onProductSelect} toggleWishlist={removeFromWishlist} wishlist={new Set(wishlistItems.map(i => i.id))} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const OrderHistoryPage = () => (
    <div className="bg-white animate-fade-in">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mb-8">Order History</h1>
            <div className="space-y-8">
                {MOCK_ORDERS.map(order => (
                    <div key={order.id} className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex flex-wrap justify-between items-start mb-4">
                            <div><p className="font-bold text-lg">{order.id}</p><p className="text-sm text-gray-500">Date: {order.date}</p></div>
                            <div><p className="font-semibold">Total: ₹{order.total.toLocaleString('en-IN')}</p><p className={`text-sm font-medium ${order.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'}`}>{order.status}</p></div>
                        </div>
                        <div className="flex space-x-4 mb-4">
                            {order.items.map(item => <img key={item.id} src={item.colors[0].image} alt={item.title} className="w-20 h-20 rounded-md object-cover"/>)}
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-[#1A1A1A] text-white font-semibold py-2 px-4 rounded-lg text-sm">View Details</button>
                            <button className="border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg text-sm">Track Order</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AccountPage = ({ onNavigate, subpage }) => {
    const [activeTab, setActiveTab] = useState(subpage || 'profile');
    
    useEffect(() => {
        setActiveTab(subpage || 'profile');
    }, [subpage]);

    const renderContent = () => {
        switch(activeTab) {
            case 'profile': return <div><h2 className="text-2xl font-bold mb-6">Personal Information</h2><form className="space-y-4 max-w-lg"><div className="flex gap-4"><input defaultValue="Rohan" className="w-full p-3 border rounded-lg"/><input defaultValue="Verma" className="w-full p-3 border rounded-lg"/></div><input defaultValue="rohan.verma@example.com" className="w-full p-3 border rounded-lg"/><button className="bg-[#1A1A1A] text-white font-bold py-3 px-6 rounded-lg">Save Changes</button></form></div>;
            case 'addresses': return <div><h2 className="text-2xl font-bold mb-6">Saved Addresses</h2><div className="bg-gray-100 p-4 rounded-lg"><p className="font-semibold">Default Address</p><p>123, Ocean View, Panjim, Goa - 403001</p></div></div>;
            case 'security': return <div><h2 className="text-2xl font-bold mb-6">Change Password</h2><form className="space-y-4 max-w-lg"><input type="password" placeholder="Current Password" className="w-full p-3 border rounded-lg"/><input type="password" placeholder="New Password" className="w-full p-3 border rounded-lg"/><input type="password" placeholder="Confirm New Password" className="w-full p-3 border rounded-lg"/><button className="bg-[#1A1A1A] text-white font-bold py-3 px-6 rounded-lg">Update Password</button></form></div>;
            default: return null;
        }
    };

    return (
        <div className="bg-white animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mb-8">My Account</h1>
                <div className="flex flex-col md:flex-row gap-12">
                    <aside className="md:w-1/4">
                        <nav className="flex flex-col space-y-2">
                            <button onClick={() => onNavigate('account/profile')} className={`flex items-center p-3 rounded-lg text-left ${activeTab === 'profile' ? 'bg-gray-100 font-bold' : 'hover:bg-gray-50'}`}><User className="mr-3 w-5 h-5"/>Profile</button>
                            <button onClick={() => onNavigate('orders')} className={`flex items-center p-3 rounded-lg text-left hover:bg-gray-50`}><ShoppingBag className="mr-3 w-5 h-5"/>My Orders</button>
                            <button onClick={() => onNavigate('wishlist')} className={`flex items-center p-3 rounded-lg text-left hover:bg-gray-50`}><Heart className="mr-3 w-5 h-5"/>My Wishlist</button>
                            <button onClick={() => onNavigate('account/addresses')} className={`flex items-center p-3 rounded-lg text-left ${activeTab === 'addresses' ? 'bg-gray-100 font-bold' : 'hover:bg-gray-50'}`}><MapPin className="mr-3 w-5 h-5"/>Addresses</button>
                            <button onClick={() => onNavigate('account/security')} className={`flex items-center p-3 rounded-lg text-left ${activeTab === 'security' ? 'bg-gray-100 font-bold' : 'hover:bg-gray-50'}`}><Shield className="mr-3 w-5 h-5"/>Security</button>
                        </nav>
                    </aside>
                    <main className="flex-1">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </div>
    );
};


// --- Core Layout Components ---

const Header = ({ onMenuClick, onNavigate, onCartClick }) => {
    const { itemCount } = useCart();
    const { isLoggedIn, logout } = useAuth();
    const [isProfileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => { if (profileRef.current && !profileRef.current.contains(event.target)) { setProfileOpen(false); } };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [profileRef]);

    const handleLogout = () => {
        logout();
        setProfileOpen(false);
        onNavigate('login');
    };

    return (
        <header className="sticky top-0 z-40 bg-[#1A1A1A]/80 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-6">
                        <button onClick={onMenuClick} className="lg:hidden p-2 -ml-2 text-white"><Menu size={24} /></button>
                        <button onClick={() => onNavigate('home')} aria-label="Aetheria Home"><AetheriaLogo /></button>
                        <nav className="hidden lg:flex space-x-6">
                            {CATEGORIES.slice(1, 7).map(cat => (<button onClick={() => onNavigate(`category/${cat}`)} key={cat} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">{cat}</button>))}
                        </nav>
                    </div>
                    <div className="flex-1 max-w-lg mx-8 hidden sm:block"><div className="relative"><input type="text" placeholder="Search products..." className="w-full h-10 px-4 pr-10 bg-white/10 text-white placeholder-gray-400 rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:bg-white/5 transition-all" /><button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"><Search size={20} /></button></div></div>
                    <div className="flex items-center space-x-4">
                        {isLoggedIn ? (
                            <div className="relative" ref={profileRef}>
                                <button onClick={() => setProfileOpen(!isProfileOpen)} className="p-2 text-gray-300 hover:text-white transition-colors"><User size={22} /></button>
                                {isProfileOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-fade-in-fast">
                                        <button onClick={() => { onNavigate('account/profile'); setProfileOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</button>
                                        <button onClick={() => { onNavigate('orders'); setProfileOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Order History</button>
                                        <button onClick={() => { onNavigate('wishlist'); setProfileOpen(false); }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Wishlist</button>
                                        <div className="border-t my-1"></div>
                                        <button onClick={handleLogout} className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"><LogOut size={16} className="mr-2"/>Log Out</button>
                                    </div>
                                )}
                            </div>
                        ) : (
                             <button onClick={() => onNavigate('login')} className="hidden sm:inline-block text-sm font-medium text-gray-300 hover:text-white transition-colors">Login</button>
                        )}
                        <button onClick={onCartClick} className="relative p-2 text-gray-300 hover:text-white transition-colors"><ShoppingBag size={22} />{itemCount > 0 && <span className="absolute top-0 right-0 block h-5 w-5 flex items-center justify-center text-xs font-bold rounded-full bg-[#FF6B6B] text-white border-2 border-[#1A1A1A]">{itemCount}</span>}</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

const Footer = () => ( <footer className="bg-[#1A1A1A] text-white"> <div className="max-w-7xl mx-auto px-8 py-16"> <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8"> <div className="col-span-2 lg:col-span-1 mb-6 lg:mb-0"><AetheriaLogo /> <p className="text-gray-400 text-sm mt-4">Crafting timeless apparel for the modern world.</p></div> <div><h4 className="font-bold mb-4">Shop</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white">New Arrivals</a></li><li><a href="#" className="hover:text-white">Tops</a></li><li><a href="#" className="hover:text-white">Outerwear</a></li><li><a href="#" className="hover:text-white">Sale</a></li></ul></div> <div><h4 className="font-bold mb-4">Company</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white">About Us</a></li><li><a href="#" className="hover:text-white">Careers</a></li><li><a href="#" className="hover:text-white">Press</a></li><li><a href="#" className="hover:text-white">Store Locator</a></li></ul></div> <div><h4 className="font-bold mb-4">Support</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white">FAQ</a></li><li><a href="#" className="hover:text-white">Shipping & Returns</a></li><li><a href="#" className="hover:text-white">Size Guide</a></li><li><a href="#" className="hover:text-white">Contact Us</a></li></ul></div> <div className="col-span-2 md:col-span-4 lg:col-span-1"><h4 className="font-bold mb-4">Follow Us</h4><div className="flex space-x-4"><a href="#" className="text-gray-400 hover:text-white"><Instagram/></a><a href="#" className="text-gray-400 hover:text-white"><Twitter/></a><a href="#" className="text-gray-400 hover:text-white"><Facebook/></a></div><h4 className="font-bold mt-8 mb-4">We Accept</h4><PaymentIcons/></div> </div> <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500"><p>&copy; {new Date().getFullYear()} Aetheria.com. All Rights Reserved. A new standard in premium e-commerce.</p></div> </div> </footer> );
const MobileMenu = ({ isOpen, onClose, onNavigate }) => ( <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}> <div onClick={onClose} className={`absolute inset-0 bg-black transition-opacity ${isOpen ? 'opacity-60' : 'opacity-0'}`}></div> <div className={`absolute top-0 left-0 h-full w-4/5 max-w-sm bg-[#1A1A1A] text-white p-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}> <div className="flex justify-between items-center mb-8"><AetheriaLogo/><button onClick={onClose}><X/></button></div> <nav className="flex flex-col space-y-4"> {CATEGORIES.map(cat => <button key={cat} onClick={()=>{onNavigate(`category/${cat}`); onClose();}} className="text-left text-lg font-medium text-gray-300 hover:text-white">{cat}</button>)} </nav> </div> </div> );
const CartModal = ({ isOpen, onClose, onNavigate }) => { const { cart, updateQuantity, removeFromCart, subtotal } = useCart(); return ( <div className={`fixed inset-0 z-[60] transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}> <div onClick={onClose} className={`absolute inset-0 bg-black transition-opacity ${isOpen ? 'opacity-60' : 'opacity-0'}`}></div> <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-white text-gray-800 flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}> <div className="flex justify-between items-center p-6 border-b"><h2 className="text-2xl font-bold">Your Bag</h2><button onClick={onClose}><X/></button></div> {cart.length === 0 ? ( <div className="flex-1 flex flex-col items-center justify-center text-center p-6"> <ShoppingBag size={48} className="text-gray-300 mb-4"/> <h3 className="text-xl font-semibold">Your bag is empty</h3> <p className="text-gray-500 mt-2">Looks like you haven't added anything yet.</p> <button onClick={() => {onClose(); onNavigate('category/All');}} className="mt-6 bg-[#1A1A1A] text-white font-bold py-3 px-6 rounded-lg">Continue Shopping</button> </div> ) : ( <> <div className="flex-1 overflow-y-auto p-6 space-y-6"> {cart.map(item => ( <div key={item.cartItemId} className="flex items-start"> <img src={item.color.image} alt={item.title} className="w-24 h-24 object-cover rounded-md mr-4"/> <div className="flex-1"> <h4 className="font-semibold">{item.title}</h4> <p className="text-sm text-gray-500">Color: {item.color.name}</p> <p className="text-sm text-gray-500">Size: {item.size}</p> <div className="flex items-center mt-2"> <button onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)} className="p-1 border rounded-md"><Minus size={16}/></button> <span className="w-10 text-center font-semibold">{item.quantity}</span> <button onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)} className="p-1 border rounded-md"><Plus size={16}/></button> </div> </div> <div className="text-right"> <p className="font-bold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p> <button onClick={() => removeFromCart(item.cartItemId, item.title)} className="text-xs text-red-500 hover:underline mt-2 flex items-center ml-auto"><Trash2 size={14} className="inline mr-1"/>Remove</button> </div> </div> ))} </div> <div className="p-6 border-t bg-gray-50"> <div className="flex justify-between font-bold text-lg mb-4"><span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div> <p className="text-sm text-gray-500 mb-4">Shipping & taxes calculated at checkout.</p> <button onClick={() => {onClose(); onNavigate('checkout');}} className="w-full bg-[#007BFF] hover:bg-blue-600 text-white font-bold py-4 rounded-lg text-lg transition-colors flex items-center justify-center"> Proceed to Checkout <ArrowRight className="ml-2"/> </button> </div> </> )} </div> </div> ); };


// --- Main App Component ---
function AppContent() {
  const [view, setView] = useState({ page: 'home', data: null });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  
  useEffect(() => { 
    // A more robust scroll-to-top that handles asynchronous page loads
    const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer);
  }, [view, selectedProduct]);

  // Wishlist state now lives here to be passed down
  const [wishlist, setWishlist] = useState(new Set([2, 10, 16, 13, 19]));
  const toggleWishlist = (e, productId) => {
      e.stopPropagation();
      setWishlist(prev => {
          const newSet = new Set(prev);
          if (newSet.has(productId)) {
              newSet.delete(productId);
          } else {
              newSet.add(productId);
          }
          return newSet;
      });
  };

  const handleNavigate = (route) => {
    const [page, data] = route.split('/');
    if (!isLoggedIn && (page === 'account' || page === 'orders' || page === 'wishlist')) {
        setView({ page: 'login', data: null });
    } else {
        setSelectedProduct(null);
        setView({ page, data });
    }
  };

  const handleProductSelect = (product) => { setSelectedProduct(product); };
  const handleBack = () => { setSelectedProduct(null); };

  const renderView = () => {
    if (selectedProduct) return <ProductPage product={selectedProduct} onBack={handleBack} onProductSelect={handleProductSelect} />;
    
    switch (view.page) {
        case 'login': return <LoginPage onNavigate={handleNavigate} />;
        case 'category': return <CategoryPage category={view.data || 'All'} onProductSelect={handleProductSelect} toggleWishlist={toggleWishlist} wishlist={wishlist} />;
        case 'checkout': return <CheckoutPage onBack={() => setIsCartOpen(true)} onNavigate={handleNavigate} />;
        case 'account': return <AccountPage onNavigate={handleNavigate} subpage={view.data} />;
        case 'orders': return <OrderHistoryPage />;
        case 'wishlist': return <WishlistPage onProductSelect={handleProductSelect} onNavigate={handleNavigate}/>;
        case 'order-confirmation': return <OrderConfirmationPage onNavigate={handleNavigate} />;
        default: return <HomePage onProductSelect={handleProductSelect} onNavigate={handleNavigate} />;
    }
  };

  const showHeaderFooter = view.page !== 'login';

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-['Inter',_sans-serif] text-[#212529]">
      <style>{` @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'); @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } } .animate-fade-in { animation: fade-in 0.5s ease-in-out; } @keyframes fade-in-fast { 0% { opacity: 0; transform: translateY(-10px); } 100% { opacity: 1; transform: translateY(0); } } .animate-fade-in-fast { animation: fade-in-fast 0.2s ease-in-out; } `}</style>
      {showHeaderFooter && <Header onMenuClick={() => setIsMenuOpen(true)} onNavigate={handleNavigate} onCartClick={() => setIsCartOpen(true)} />}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onNavigate={handleNavigate} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onNavigate={handleNavigate} />
      <ToastNotification />
      <main>{renderView()}</main>
      {showHeaderFooter && <Footer />}
    </div>
  );
}

export default function AetheriaClone() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}
