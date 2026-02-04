/* ---------- PRODUCT DATA ---------- */
const products = [
    // { name: "Handmade Vase", price: 25, category: "pottery", image: "images/vase.jpg" },

    // { name: "Clay Pot", price: 20, category: "pottery", image: "images/clay-pot.jpg" },

    // { name: "Handloom Saree", price: 55, category: "handloom", image: "images/saree.jpg" },

    // { name: "Wooden Toy", price: 18, category: "wooden", image: "images/wooden-toy.jpg" },

    // { name: "Terracotta Lamp", price: 30, category: "terracotta", image: "images/lamp.jpg" },

    /* ---------- HANDMADE GIFTS ---------- */
    { id: 1, name: "Knight Horse Black", price: 120, category: "handmade_gifts", image: "images/handmade_gifts/5-58-3-81-knight-horse-black-artarium-9-9-original.jpg" },
    { id: 2, name: "Knight Horse White", price: 120, category: "handmade_gifts", image: "images/handmade_gifts/5-58-3-81-knight-horse-white-artarium-9-9-original.jpg" },
    { id: 3, name: "Art Designer Wooden Wall Hanging", price: 150, category: "handmade_gifts", image: "images/handmade_gifts/art-designer-wooden-wall-hanging-decoration-items-2-original.jpg" },
    { id: 4, name: "ASC Iron Amishi Blissful Decor", price: 180, category: "handmade_gifts", image: "images/handmade_gifts/asc-iron-amishi-blissful-decor-original.jpg" },
    { id: 5, name: "Best Friends Beautiful Wooden Wall Hanging", price: 200, category: "handmade_gifts", image: "images/handmade_gifts/best-friends-beautiful-wooden-wall-hanging-walldecorcat-original.jpg" },
    { id: 6, name: "Car Dashboard Deadpool Car Accessories ", price: 250, category: "handmade_gifts", image: "images/handmade_gifts/car-dashboard-accessories-deadpool-car-accessories-classics-original.jpg" },
    { id: 7, name: "Combo of Copper Pooja Utensil ", price: 280, category: "handmade_gifts", image: "images/handmade_gifts/combo-of-handmade-copper-pooja-utensil-lota-kalash-and-brass-original.jpg" },
    { id: 8, name: "Couples Decorative Wall Decoration Item", price: 300, category: "handmade_gifts", image: "images/handmade_gifts/couples-decorative-wall-hanging-wooden-art-decoration-item-for-original.jpg" },
    { id: 9, name: "CWPoooo33 Love Greeting Crafted with Passion", price: 320, category: "handmade_gifts", image: "images/handmade_gifts/cwpoooo33-love-greeting-crafted-with-passion-original.jpg" },
    { id: 10, name: "Dancing Wall Hanging Decor Item", price: 340, category: "handmade_gifts", image: "images/handmade_gifts/dancing-design-wooden-wall-hanging-decor-item-for-home-office-original.jpg" },
    { id: 11, name: "Designer Wall Hanging Item for Home Gifts", price: 360, category: "handmade_gifts", image: "images/handmade_gifts/designer-wooden-wall-hanging-decoration-items-for-home-gifts-original.jpg" },
    { id: 12, name: "Explosion Box", price: 350, category: "handmade_gifts", image: "images/handmade_gifts/explosion-box-birthday-gift-chocolate-heart-box-greeting-original.jpg" },
    { id: 13, name: "Explosion Box Love Us Ideal Craft", price: 350, category: "handmade_gifts", image: "images/handmade_gifts/explosion-box-love-us-ideal-craft-original.jpg" },
    { id: 14, name: "Explosion Card Love Gift Greeting Miamoreart", price: 350, category: "handmade_gifts", image: "images/handmade_gifts/explosion-card-love-gift-greeting-miamoreart-original.jpg" },
    { id: 15, name: "Gifts Handmade Mrittika 10", price: 350, category: "handmade_gifts", image: "images/handmade_gifts/gifts-handmade-mrittika-10-original.jpg" },
    { id: 16, name: "Handdrum Damroo002 Wooden Cave 12", price: 250, category: "handmade_gifts", image: "images/handmade_gifts/handdrum-damroo002-wooden-cave-12-original.jpg" },
    { id: 17, name: "Handwear Evileye Cultured Stone Riyansh", price: 450, category: "handmade_gifts", image: "images/handmade_gifts/handwear-evileye-cultured-stone-riyansh-original.jpg" },
    { id: 18, name: "Kerala Wooden Wall Art ", price: 350, category: "handmade_gifts", image: "images/handmade_gifts/kerala-wooden-wall-art-festival-cultural-item-living-room-home-original.jpg" },
    { id: 19, name: "Keychain Crochet Icecream ", price: 300, category: "handmade_gifts", image: "images/handmade_gifts/keychain-crochet-icecream-theyarnstories-1-original.jpg" },
    { id: 20, name: "Lord Gautam Buddha Decorative Gift Framed", price: 150, category: "handmade_gifts", image: "images/handmade_gifts/lord-gautam-buddha-home-decorative-gift-item-framed-original.jpg" },
    { id: 21, name: "Cotton Macrame Wall Hanging Shelf for Living", price: 300, category: "handmade_gifts", image: "images/handmade_gifts/luxurious-handmade-cotton-macrame-wall-hanging-shelf-for-living-original.jpg" },
    { id: 22, name: "Premium Cheetah Showpiece 24 K Gold Plated Shyam Lalla", price: 400, category: "handmade_gifts", image: "images/handmade_gifts/premium-luxurious-cheetah-showpiece-24-k-gold-plated-shyam-lalla-original.jpg" },
    { id: 23, name: "Rakano Macarme Wall Hanging Kitchen Tier", price: 650, category: "handmade_gifts", image: "images/handmade_gifts/rakano-macarme-wall-hanging-kitchen-tier-original.jpg" },
    { id: 24, name: "Stick Holder Wooden Vigeeyan", price: 300, category: "handmade_gifts", image: "images/handmade_gifts/stick-holder-wooden-vigeeyan-original.jpg" },
    { id: 25, name: "Heart with Love Wall Decor Wall", price: 600, category: "handmade_gifts", image: "images/handmade_gifts/stylish-wooden-wall-decor-item-heart-with-love-wall-decor-wall-original.jpg" },
    { id: 26, name: "Wall Hanging for Home Decoration ", price: 350, category: "handmade_gifts", image: "images/handmade_gifts/wall-hanging-for-home-decoration-wall-decor-gift-1-wh2418-wall-original.jpg" },
    { id: 27, name: "Wall Hanging Wall", price: 450, category: "handmade_gifts", image: "images/handmade_gifts/wall-hanging-wall-hanging-decorative-items-wall-decor-items-original.jpg" },
    // { id : ,name:"",price:,category:"handmade_gifts" ,image:""}

    /* ---------- LEATHER CRAFTS ---------- */
    { id: 28, name: "Leather Laptop Bag", price: 200, category: "leather_crafts", image: "images/leather_crafts/16-inch-16-inch-leather-laptop-bag-brown-bl144-laptop-original.jpg" },
    { id: 29, name: "Leather Card Holder", price: 650, category: "leather_crafts", image: "images/leather_crafts/100-genuine-leather-card-holder-for-men-and-women-card-holder.jpg" },
    { id: 30, name: "Leather Belt", price: 300, category: "leather_crafts", image: "images/leather_crafts/belt-non-reversible-tommy-leather-original.jpg" },
    { id: 31, name: "Leather Messenger Bag", price: 450, category: "leather_crafts", image: "images/leather_crafts/genuine-leather-bombay-maroon-laptop-messenger-bag-ilbs001-original.jpg" },
    { id: 32, name: "Leather Cross Body Bag", price: 250, category: "leather_crafts", image: "images/leather_crafts/genuine-leather-handmade-girls-and-women-s-small-cross-body-bag-original.jpg" },
    { id: 33, name: "Diary", price: 150, category: "leather_crafts", image: "images/leather_crafts/jaipuri-tol-handmade-leather-diary-antique-original.jpg" },
    { id: 34, name: "Kolhapuri Leather", price: 200, category: "leather_crafts", image: "images/leather_crafts/kolhapuri-6-stepfox-leather.jpg" },
    { id: 35, name: "Leather Belts", price: 180, category: "leather_crafts", image: "images/leather_crafts/leather-belts-for-men-belts-for-men-original.jpg" },
    { id: 36, name: "Antique Key Lock Diary", price: 120, category: "leather_crafts", image: "images/leather_crafts/leather-handmade-antique-key-lock-diary.jpg" },
    { id: 37, name: "Men Casual Sandles", price: 220, category: "leather_crafts", image: "images/leather_crafts/men-casual-sandle-leather.jpg" },
    { id: 38, name: "Slim Key Pouch", price: 90, category: "leather_crafts", image: "images/leather_crafts/leather-handmade-unisex-slim-key-pouch-key-case-with-original.jpg" },
    { id: 39, name: "Leather Wallet", price: 100, category: "leather_crafts", image: "images/leather_crafts/leather-protected-credit-debit-id-card-wallet-for-original.jpg" },
    { id: 40, name: "Men Sandles", price: 150, category: "leather_crafts", image: "images/leather_crafts/men-sandle-leather-shoes.jpg" },
    { id: 41, name: "Black Ankle Shoes", price: 200, category: "leather_crafts", image: "images/leather_crafts/pure-leather-black-ankle-shoes.jpg" },
    { id: 42, name: "Teakwood Leather Shoes", price: 250, category: "leather_crafts", image: "images/leather_crafts/teakwood-leathers-brown-shoes.jpg" },
    { id: 43, name: "Wallet Purse", price: 180, category: "leather_crafts", image: " images/leather_crafts/wallet-purse-women-men-leather.jpg" },
    { id: 44, name: "Women Shoe Lab Brown", price: 220, category: "leather_crafts", image: "images/leather_crafts/women-shoe-lab-brown-original-leather.jpg" },
    { id: 45, name: "Women Flats Brown", price: 180, category: "leather_crafts", image: "images/leather_crafts/womenflats-brown-original-leather.jpg" },
    // { id: , name: "", price: , category: "leather_crafts", image: "" },

    /* ---------- HOME DECOR ---------- */
    { id: 46, name: "Wooden Krishna Print Key Holder", price: 150, category: "home_decor", image: "images/home_decor/5-wooden-krishna-print-key-holder-wall-mounted-key-stand-rack-original.jpg" },
    { id: 47, name: "Hanging Wind Chimes", price: 200, category: "home_decor", image: "images/home_decor/9-hanging-wind-chimes07-craftfobia-original.jpg" },
    { id: 48, name: "Tulshi Gift Flower", price: 180, category: "home_decor", image: "images/home_decor/12-12-tulshi-gift-flower-akp-original.jpg" },
    { id: 49, name: "HD 04 Gpy Wedone 7", price: 250, category: "home_decor", image: "images/home_decor/27-7-hd-04-gpy-wedone-7-original.jpg" },
    { id: 50, name: "Beautiful Rajasthani Door Hanging ", price: 300, category: "home_decor", image: "images/home_decor/beautiful-handmade-rajasthani-door-hanging-decorative-showpiece-g-original.jpg" },
    { id: 51, name: "Rajasthani Door Hanging Showpiece", price: 350, category: "home_decor", image: "images/home_decor/beautiful-handmade-rajasthani-door-hanging-decorative-showpiece-original.jpg" },
    { id: 52, name: "Beautiful Wall D Cor Hanger", price: 280, category: "home_decor", image: "images/home_decor/beautiful-wall-d-cor-hanger-handmade-green-and-yellow-1-wall-original.jpg" },
    { id: 53, name: "Macram Wall Hanging ", price: 220, category: "home_decor", image: "images/home_decor/macram-wall-hanging-is-handmade-and-gift-room-decor-decoration-original.jpg" },
    { id: 54, name: "Bless This Home Wall Decoration Living", price: 260, category: "home_decor", image: "images/home_decor/bless-this-home-decoration-wall-hanging-wall-decoration-living-original.jpg" },
    { id: 55, name: "Home Wall Hanging Inspiration Decorative", price: 320, category: "home_decor", image: "images/home_decor/in-this-home-wooden-wall-hanging-inspiration-decorative-home-original.jpg" },
    { id: 56, name: "Multicolored Floral Tassel Beaded Wall Hanging ", price: 340, category: "home_decor", image: "images/home_decor/homedecor-wall-hanging-multicolored-floral-tassel-beaded-original.jpg" },
    { id: 57, name: "Medium Tile Decals Sticker 48 Tilesroll", price: 120, category: "home_decor", image: "images/home_decor/medium-decorative-wall-tile-decals-sticker-48-tilesroll-01-decor-original.jpg" },
    { id: 58, name: "Macrame 100 Cotton Handmade Boho Style ", price: 180, category: "home_decor", image: "images/home_decor/macrame-100-cotton-handmade-boho-style-wall-hanging-large-size-original.jpg" },
    { id: 59, name: "Macrame Purely Handcrafted Key Utility Holder", price: 90, category: "home_decor", image: "images/home_decor/macrame-purely-handcrafted-key-utility-holder-1-macrme-key-original.jpg" },
    { id: 60, name: "Colorful Butterfly Wall Hanging", price: 150, category: "home_decor", image: "images/home_decor/colorful-butterfly-wall-hanging-1-colorful-butterfly-wall-original.jpg" },
    { id: 61, name: "Wall Decor In Round Shape", price: 200, category: "home_decor", image: "images/home_decor/wall-decor-in-round-shape-1-wall-hanging-item-handmade-wall-original.jpg" },
    { id: 62, name: "Macrame Plant Hanger Indoor Organic", price: 250, category: "home_decor", image: "images/home_decor/macrame-plant-hanger-indoor-handmade-weaving-natural-organic-original.jpg" },
    { id: 63, name: "Mushroom Sajaosore", price: 300, category: "home_decor", image: "images/home_decor/mushroom-sajaosore-10-original.jpg" },
    { id: 64, name: "Pre Marked Pine Shapes Crafts Work", price: 280, category: "home_decor", image: "images/home_decor/pre-marked-pine-mdf-shapes-cutout-for-crafts-work-10-base3mm-1-original.jpg" },
    { id: 65, name: "Bedroom Decoration Jharokha Wall", price: 200, category: "home_decor", image: "images/home_decor/wall-hanging-decorative-items-bedroom-decoration-jharokha-wall-original.jpg" },
    { id: 66, name: "Colorful Meditating Buddha With Lotus", price: 280, category: "home_decor", image: "images/home_decor/wooden-wall-art-colorful-meditating-buddha-with-lotus-home-decor-original.jpg" },
    { id: 67, name: "Jharokha Wall Decor Decoration", price: 250, category: "home_decor", image: "images/home_decor/wall-hanging-decorative-items-jharokha-wall-decor-decoration-original.jpg" },
    // { id: , name: "", price: , category: "home_decor", image: "" },


    /* ---------- METAL CRAFTS ---------- */
    { id: 68, name: "Murti 34uspoon", price: 120, category: "metal_crafts", image: "images/metal_crafts/1-3-murti34uspoon-utsavicraft-12-original.jpg" },
    { id: 69, name: "75 2 Sa060", price: 150, category: "metal_crafts", image: "images/metal_crafts/2-75-2-sa060-sancheti-art-13-original.jpg" },
    { id: 70, name: "5 5 1 Krishna B 02", price: 180, category: "metal_crafts", image: "images/metal_crafts/5-5-1-krishna-b-02-dartistry-10-original.jpg" },
    { id: 71, name: "Antique Tealight Candle and Dhop Holder ", price: 90, category: "metal_crafts", image: "images/metal_crafts/6-1-antique-tealight-candle-holder-dhop-holder-decorative-table-original.jpg" },
    { id: 72, name: "Gold E Handicrafts", price: 200, category: "metal_crafts", image: "images/metal_crafts/6-5-1-gold-e-handicrafts-15-original.jpg" },
    { id: 73, name: "Big Kumkum Pack Of 2 Real Craft", price: 80, category: "metal_crafts", image: "images/metal_crafts/6-6-big-kumkum-pack-of-2-real-craft-7-original.jpg" },
    { id: 74, name: "Dw Bcan 11cm Decowill", price: 120, category: "metal_crafts", image: "images/metal_crafts/6-6-dw-bcan-11cm-decowill-11-original.jpg" },
    { id: 75, name: "Rm Urli Ramanuj", price: 150, category: "metal_crafts", image: "images/metal_crafts/6-16-rm-urli-ramanuj-7-original.jpg" },
    { id: 76, name: "Tsl 693 The Spiritual Living", price: 200, category: "metal_crafts", image: "images/metal_crafts/10-2-tsl-693-the-spiritual-living-1-3-original.jpg" },
    { id: 77, name: "Decor Asha Enchant Decor", price: 250, category: "metal_crafts", image: "images/metal_crafts/10-30-decor-asha-enchant-decor-15-original.jpg" },
    { id: 78, name: "Bh06250 Kalarambh", price: 300, category: "metal_crafts", image: "images/metal_crafts/11-68-22-86-bh06250-kalarambh-6-35-original.jpg" },
    { id: 79, name: "D Brasso 5 Original", price: 40, category: "metal_crafts", image: "images/metal_crafts/32-5-10-d-1848000-d-brasso-5-original.jpg" },
    { id: 80, name: "Assw22 Real Craft Original", price: 300, category: "metal_crafts", image: "images/metal_crafts/assw22-real-craft-original.jpg" },
    { id: 81, name: "Brass Plain Tangerine Original", price: 100, category: "metal_crafts", image: "images/metal_crafts/brass-plain-tangerine-original.jpg" },
    { id: 82, name: "Pure Copper Panchpatra Dokchan Original", price: 150, category: "metal_crafts", image: "images/metal_crafts/no-handcrafted-pure-copper-panchpatra-dokchan-original.jpg" },
    { id: 83, name: "Pure Copper Small Kalash Lota ", price: 120, category: "metal_crafts", image: "images/metal_crafts/pure-copper-small-kalash-lota-for-temple-and-pooja-purpose-brown-original.jpg" },
    { id: 84, name: "Copper Panch Patra Kalash Glass With Spoon", price: 250, category: "metal_crafts", image: "images/metal_crafts/copper-panch-patra-kalash-glass-with-spoon-panchapatra-set-for-original.jpg" },
    { id: 85, name: "sancheti srt original", price: 400, category: "metal_crafts", image: "images/metal_crafts/s1291-sancheti-art-original.jpg" },
    { id: 86, name: "Hanging Incenseburner Kalarambh", price: 250, category: "metal_crafts", image: "images/metal_crafts/hd0656-mozo-hub-original.jpg" },
    { id: 87, name: "Uruli Bowl Flower Design Shri Anand", price: 150, category: "metal_crafts", image: "images/metal_crafts/uruli-decorative-bowl-flower-design-shri-anand-original.jpg" },
    { id: 88, name: "Copper Surya Bhakti Sringar", price: 200, category: "metal_crafts", image: "images/metal_crafts/copper-surya-bhakti-sringar-original.jpg" },
    { id: 89, name: "Woodex 01 Brass World", price: 180, category: "metal_crafts", image: "images/metal_crafts/woodex-01-brass-world-original.jpg" },
    { id: 90, name: "Small Lota For Puja Shivjal No", price: 120, category: "metal_crafts", image: "images/metal_crafts/small-lota-for-puja-shivjal-no-original.jpg" },
    { id: 91, name: "Kapoor Burner Brass Karpuram Arati Stand", price: 300, category: "metal_crafts", image: "images/metal_crafts/no-kapoor-burner-brass-karpuram-arati-stand-for-dhoop-puja-original.jpg" },
    { id: 92, name: "Riddhi Kalas Spoon Riddhi Eenterprises No", price: 150, category: "metal_crafts", image: "images/metal_crafts/riddhi-kalas-spoon-riddhi-eenterprises-no-original.jpg" },
    // { id:, name:, price:, category:, image:"" },


    /* ---------- BAMBOO CANE ---------- */
    { id: 93, name: "Bamboo Hand Fan Hardia", price: 100, category: "bamboo_cane", image: "images/bamboo_cane/bamboo-hand-fan-hardia-original.jpg" },
    { id: 94, name: "Brown Cushion Rattan Chair CCHC Craftcane", price: 250, category: "bamboo_cane", image: "images/bamboo_cane/brown-cushion-rattan-chair-cchc-craftcane-82-varnish-original.jpg" },
    { id: 95, name: "Cane Laundry Basket A Stylish And Durable", price: 150, category: "bamboo_cane", image: "images/bamboo_cane/cane-laundry-basket-a-stylish-and-durable-storage-original.jpg" },
    { id: 96, name: "Chair Bamboo outdoor", price: 200, category: "bamboo_cane", image: "images/bamboo_cane/chairbamboo-cotton-harishch001-harish-handmakers-85-beige-original.jpg" },
    { id: 97, name: "Chair Bamboo ", price: 220, category: "bamboo_cane", image: "images/bamboo_cane/chairbamboo-cotton-harishhandch8901-harish-handmakers-34-beige-original.jpg" },
    { id: 98, name: "Bamboo Rack Grass Brown Evra", price: 180, category: "bamboo_cane", image: "images/bamboo_cane/bamboo-rack-grass-brown-evra-75-brown-original.jpg" },
    { id: 99, name: "Cane Made Bowl For Dinning Table", price: 120, category: "bamboo_cane", image: "images/bamboo_cane/cane-made-bowl-for-dinning-table-das-departmental-store-original.jpg" },
    { id: 100, name: "Chair Thali With Cushion Quees", price: 280, category: "bamboo_cane", image: "images/bamboo_cane/chairbamboo-thali-chair-with-cushion-quees-86-brown-original.jpg" },
    { id: 101, name: "Flower Bamboo Basket Craft", price: 160, category: "bamboo_cane", image: "images/bamboo_cane/flower-bamboo-basket-craft-original.jpg" },
    { id: 102, name: "Bamboo Hat Free Size ", price: 90, category: "bamboo_cane", image: "images/bamboo_cane/bamboohat-free-size-hat-traditoonal-90-mathyel-original.jpg" },
    { id: 103, name: "Jug-Mug Bamboo Craft", price: 140, category: "bamboo_cane", image: "images/bamboo_cane/jug-mug-bamboo-craft-10-original.jpg" },
    { id: 104, name: "Kashmiri Cane Basket Quees", price: 200, category: "bamboo_cane", image: "images/bamboo_cane/kashmiri-cane-basket-quees-original.jpg" },
    { id: 105, name: "Laundry Basket ", price: 180, category: "bamboo_cane", image: "images/bamboo_cane/laundrybasket-trg-pyw-yuvivaa-45-75-original.jpg" },
    { id: 106, name: "Flower Basket Bamboo Craft", price: 160, category: "bamboo_cane", image: "images/bamboo_cane/flowerbasket-bamboo-craft-10-original.jpg" },
    { id: 107, name: "Hanging Lamp Lamp Bamboo Craft", price: 220, category: "bamboo_cane", image: "images/bamboo_cane/hanginglamp-lamp-bamboo-craft-10-original.jpg" },
    { id: 108, name: "Kodai1F Das Departmental Store", price: 240, category: "bamboo_cane", image: "images/bamboo_cane/kodai1f-das-departmental-store-original.jpg" },
    { id: 109, name: "Laundry Basket Kuber Industries ", price: 260, category: "bamboo_cane", image: "images/bamboo_cane/laundry-basket-kuber-industries-50-61-original.jpg" },
    { id: 110, name: "Quickoo Bamboo Supa", price: 280, category: "bamboo_cane", image: "images/bamboo_cane/quickoo-bamboo-supa-original.jpg" },
    { id: 111, name: "Thali Chair With Cushion Quees Light", price: 320, category: "bamboo_cane", image: "images/bamboo_cane/thali-chair-with-cushion-quees-86-0-light-original.jpg" },
    { id: 112, name: "Chata Traditional Puja and Wedding Material", price: 340, category: "bamboo_cane", image: "images/bamboo_cane/traditional-handwoven-bamboo-dala-kulo-puja-wedding-material-original.jpg" },
    { id: 113, name: "Orange Blue Stool Kismat Collection", price: 150, category: "bamboo_cane", image: "images/bamboo_cane/orenge-blue-stool-kismat-collection-15-original.jpg" },
    { id: 114, name: "Penholder Das Departmental Store", price: 25, category: "bamboo_cane", image: "images/bamboo_cane/penholder-das-departmental-store-25-original.jpg" },
    { id: 115, name: "Wood Coaster Hokipo", price: 30, category: "bamboo_cane", image: "images/bamboo_cane/woodcoaster-bmb-cstr-rnd-ar2925-hokipo-original.jpg" },
    // { id:, name:, price:, category:, image:"" },


    /* ---------- TERRACOTTA ---------- */
    { id: 116, name: "Mitti Ka Oil Lamp Buner 1pcs Ceramic", price: 100, category: "terracotta", image: "images/terracotta/1-mitti-ka-oil-lamp-buner-1pcs-for-home-decoration-ceramic-table-original.jpg" },
    { id: 117, name: "Vasu8006 Aathi Traders 3 5", price: 200, category: "terracotta", image: "images/terracotta/4-vasu8006-aathi-traders-3-5-original.jpg" },
    { id: 118, name: "Clay Glasses Water,Lassi,Chai Pack Of 6", price: 150, category: "terracotta", image: "images/terracotta/clay-glasses-for-drinking-water-juice-lassi-chai-pack-of-6-original.jpg" },
    { id: 119, name: "Karthika Deepam Tskutty 1", price: 250, category: "terracotta", image: "images/terracotta/karthikadeepam-tskutty-1-original.jpg" },
    { id: 120, name: "Clay Chimney With Clay Lid", price: 300, category: "terracotta", image: "images/terracotta/2-clay-chimney-with-clay-lid-po2-arsa-lifestyle-5-5-original.jpg" },
    { id: 121, name: "Fragrances Clay Air Freshener", price: 350, category: "terracotta", image: "images/terracotta/7-1-invert-fragrances-clay-aroma-diffuser-air-freshener-with-original.jpg" },
    { id: 122, name: "Combo Cppr Panndpot Kichera", price: 400, category: "terracotta", image: "images/terracotta/combo-cppr-panndpot-kichera-original.jpg" },
    { id: 123, name: "Traditional Reusable Mitti Clay Diya Oil Lamps", price: 450, category: "terracotta", image: "images/terracotta/12-traditional-handmade-reusable-mitti-clay-diya-oil-lamps-for-original.jpg" },
    { id: 124, name: "Eco Birds Diya Lamps", price: 500, category: "terracotta", image: "images/terracotta/2-eco-birds-diya-lamps-hanspanti-ecocourage-1-original.jpg" },
    { id: 125, name: "Matipraywaxdeepam", price: 550, category: "terracotta", image: "images/terracotta/matipraywaxdeepam-original.jpg" },
    { id: 126, name: "Plain Red Sml Petrong Greenfinityy", price: 600, category: "terracotta", image: "images/terracotta/10-16-3-81-plainredsmallpetrong-greenfinityy-10-16-original.jpg" },
    { id: 127, name: "Traditional Pure Mud Baked Clay Diyas", price: 650, category: "terracotta", image: "images/terracotta/2-sarai-diya-handmade-traditional-pure-mud-baked-clay-diyas-for-original.jpg" },
    { id: 128, name: "Claydiya 30 Ramananda Pottery", price: 700, category: "terracotta", image: "images/terracotta/claydiya-30-ramananda-pottery-original.jpg" },
    { id: 129, name: "Matki Diyawaxfilled deepam", price: 750, category: "terracotta", image: "images/terracotta/matkidiyawaxfilled-indianecraft-1-original.jpg" },
    { id: 130, name: "Mitti Diya 12 Hndb 1", price: 800, category: "terracotta", image: "images/terracotta/12-mitti-diya-12-hndb-1-original.jpg" },
    { id: 131, name: "T M 4 Mukherjee Handicrafts", price: 850, category: "terracotta", image: "images/terracotta/t-m-4-mukherjee-handicrafts-original.jpg" },
    { id: 132, name: "Shivshaplombakalo Greenfinityy", price: 900, category: "terracotta", image: "images/terracotta/shivshaplombakalo-greenfinityy-10-16-original.jpg" },
    { id: 133, name: "Mitti Ke Diya Lumarr", price: 950, category: "terracotta", image: "images/terracotta/mitti ke diya-lumarr-original.jpg" },
    // { name: "", price: , category: "terracotta", image: "" },


    /* ---------- JEWELRY ---------- */
    { id: 134, name: "Tulsi Beads Mala Necklace Locket", price: 1000, category: "jewelry", image: "images/jewelry/1-original-tulsi-beads-mala-necklace-with-radha-naam-locket-for-original.jpg" },
    { id: 135, name: "Mala Na Sm1 1032 Maroon ", price: 1100, category: "jewelry", image: "images/jewelry/2-4-2-4-na-sm1-1032-maroon-2-4-nmii-original.jpg" },
    { id: 136, name: "Bohemian Earrings Multicolored Triyama", price: 1200, category: "jewelry", image: "images/jewelry/bohemian-earrings-multicolored-triyama-original.jpg" },
    { id: 137, name: "Dev Samagri 117 Fw Chain Dev Samagri", price: 1300, category: "jewelry", image: "images/jewelry/dev-samagri-117-fw-chain-dev-samagri-original.jpg" },
    { id: 138, name: "Diamond Desi Stone Chain", price: 1400, category: "jewelry", image: "images/jewelry/diamonddesistone-chain-set-priyanshu-industries-original.jpg" },
    { id: 139, name: "Banglewood Original", price: 1500, category: "jewelry", image: "images/jewelry/banglewood-original.jpg" },
    { id: 140, name: "Gems Chain Kundli Gems", price: 1600, category: "jewelry", image: "images/jewelry/gems-chain-kundli-gems-original.jpg" },
    { id: 141, name: "Bangle Set Silver ", price: 1700, category: "jewelry", image: "images/jewelry/2-6-bangle-set-silver-2-6-sm-ry-shopsy-navmav-original.jpg" },
    { id: 142, name: "Oval Kundan Bangles Metal", price: 1800, category: "jewelry", image: "images/jewelry/oval-kundan-bangles-metaldiamond-goldmulti-2-6-nmii-original.jpg" },
    { id: 143, name: "Bohemian Earrings Multcolored Triyama", price: 1900, category: "jewelry", image: "images/jewelry/bohemian-earrings-multcolored-triyama-original.jpg" },
    { id: 144, name: "Stonechain Set Gokulshoppe", price: 2000, category: "jewelry", image: "images/jewelry/stonechain-set-gokulshoppe-original.jpg" },
    { id: 145, name: "Jhumkaearrings Thequeenvibes", price: 2100, category: "jewelry", image: "images/jewelry/jhumkaearrings-thequeenvibes-original.jpg" },
    { id: 146, name: "Floweryearring Muccasacra", price: 2200, category: "jewelry", image: "images/jewelry/floweryearring-muccasacra-original.jpg" },
    { id: 147, name: "Dori Bracelet Original", price: 2300, category: "jewelry", image: "images/jewelry/dori-bracelet-original.jpg" },
    { id: 148, name: "Jewl Set Bamboo Kula Black", price: 2400, category: "jewelry", image: "images/jewelry/na-na-1-jewl-set-bamboo-kula-black-loknath-handctaft-original.jpg" },
    { id: 149, name: "Jute Jewellery Blue ", price: 2500, category: "jewelry", image: "images/jewelry/na-na-1-jute-sqr-jewellery-blue-loknath-handcraft-original.jpg" },
    { id: 150, name: "My Little Princess Earrings", price: 2600, category: "jewelry", image: "images/jewelry/na-mlp-cr-earings042c-my-little-princess-original.jpg" },
    { id: 151, name: "Metal Kada Gold 2 4 Nmii", price: 2700, category: "jewelry", image: "images/jewelry/metalkada-gold-2-4-nmii-original.jpg" },
    { id: 152, name: "Jute Sqr Jewellery Yellow Loknath Handcraft", price: 2800, category: "jewelry", image: "images/jewelry/na-na-1-jute-sqr-jewellery-yellow-loknath-handcraft-original.jpg" },
    { id: 153, name: "Terracotta Jewellery Fashion", price: 2900, category: "jewelry", image: "images/jewelry/na-na-1-terracottajewelleryl080102-1-lisma-fashion-original.jpg" },
    { id: 154, name: "Yellow Tieanddye Earrings", price: 3000, category: "jewelry", image: "images/jewelry/yellow-tieanddye-earrings-original.jpg" },
    { id: 155, name: "Woodnecklce Hearts And Crafts", price: 3100, category: "jewelry", image: "images/jewelry/woodnecklce-hearts-and-crafts-original.jpg" },
    { id: 156, name: "Woodenamelbangle Craft Original", price: 3200, category: "jewelry", image: "images/jewelry/woodenamelbangle-craft-original.jpg" },
    // { name:"", price:, category:"jewelry", image:"design project/images/jewelry/" },


    /* ---------- PAINTINGS ---------- */
    { id: 157, name: "3 Paint Diy Oil Painting Gift", price: 3300, category: "paintings", image: "images/paintings/3-paint-by-numbers-for-adults-and-kids-diy-oil-painting-gift-original.jpg" },
    { id: 158, name: "Mushroom Paint ", price: 3400, category: "paintings", image: "images/paintings/20-1-mushroom-paint-by-numbers-kit-for-adults-beginner-mushrooms-original.jpg" },
    { id: 159, name: "Oil Paint ", price: 3500, category: "paintings", image: "images/paintings/20-1-paint-by-number-for-adults-paint-by-numbers-for-adults-original.jpg" },
    { id: 160, name: "Black Billedmagpie Be You", price: 3600, category: "paintings", image: "images/paintings/black-billedmagpie-be-you-original.jpg" },
    { id: 161, name: "Dancer Framedpainting Paf", price: 3700, category: "paintings", image: "images/paintings/dancer-framedpainting-paf-original.jpg" },
    { id: 162, name: "Easternbluebird Be You", price: 3800, category: "paintings", image: "images/paintings/easternbluebird-be-you-original.jpg" },
    { id: 163, name: "Flowers Mad Masters", price: 3900, category: "paintings", image: "images/paintings/flowers-mad-masters-original.jpg" },
    { id: 164, name: "Handpainted Nature Landscape Poster", price: 4000, category: "paintings", image: "images/paintings/handpainted-nature-landscape-poster-n-frames-original.jpg" },
    { id: 165, name: "Handpainted Landscape Poster", price: 4100, category: "paintings", image: "images/paintings/handpaintedlandscape-handpainted-poster-n-frames-original.jpg" },
    { id: 166, name: "Kingfisher Bird Be You", price: 4200, category: "paintings", image: "images/paintings/kingfisher-bird-be-you-original.jpg" },
    { id: 167, name: "Ladiessangeet Mad Masters", price: 4300, category: "paintings", image: "images/paintings/ladiessangeet-mad-masters-original.jpg" },
    { id: 168, name: "Large Yoga Lady God poster", price: 4400, category: "paintings", image: "images/paintings/large-yoga-lady-51-yoga-lady-god-god-s-original.jpg" },
    { id: 169, name: "Lovehandsign Mad Masters", price: 4500, category: "paintings", image: "images/paintings/lovehandsign-mad-masters-original.jpg" },
    { id: 170, name: "Medium Killer Smile Joker", price: 4600, category: "paintings", image: "images/paintings/medium-killer-smile-joker-design-58x57-1-99-tdh-flip-ts115-the-original.jpg" },
    { id: 171, name: "Mickymouse Mad Masters", price: 4700, category: "paintings", image: "images/paintings/mickymouse-mad-masters-original.jpg" },
    { id: 172, name: "Oldman Rhino", price: 4800, category: "paintings", image: "images/paintings/oldman-rhino-original.jpg" },
    { id: 173, name: "Paris Framed painting ", price: 4900, category: "paintings", image: "images/paintings/paris-framedpainting-mad-masters-original.jpg" },
    { id: 174, name: "Peacock Cherry blossam", price: 5000, category: "paintings", image: "images/paintings/peacock-cherryblossam-mad-masters-original.jpg" },
    { id: 175, name: "Psychedelic Headcolor Illusion", price: 5100, category: "paintings", image: "images/paintings/psychedelic-headcolor-illusion-original.jpg" },
    { id: 176, name: "Royal decorated elephant", price: 5200, category: "paintings", image: "images/paintings/royaldecoratedelephant-be-you-original.jpg" },
    { id: 177, name: "Ship Nature Mad Masters", price: 5300, category: "paintings", image: "images/paintings/ship-nature-mad-masters-original.jpg" },
    { id: 178, name: "Shivajimaharaj Original", price: 5400, category: "paintings", image: "images/paintings/shivajimaharaj-original.jpg" },
    { id: 179, name: "Skullwithbeard Mustachemad ", price: 5500, category: "paintings", image: "images/paintings/skullwithbeard-mustachemad-original.jpg" },
    { id: 180, name: "Zombiwalking Mad Masters", price: 5600, category: "paintings", image: "images/paintings/zombiwalking-mad-masters-original.jpg" },
    // { id: , name: "", price:, category:"paintings", image:"design project/images/paintings/" },

    /* ---------- WOODEN PRODUCTS ---------- */
    { id: 181, name: "Wooden Small Return Gifts Box", price: 1000, category: "wooden", image: "images/wooden/1-wooden-small-return-gifts-box-empty-wood-container-for-dry-original.jpg" },
    { id: 182, name: "Bookstand Mfs Craft World", price: 1200, category: "wooden", image: "images/wooden/bookstand-mfs-craft-world-original.jpg" },
    { id: 183, name: "Beautiful Wooden Road Roller Toy Showpiece", price: 1400, category: "wooden", image: "images/wooden/beautiful-wooden-classical-road-roller-toy-cum-showpiece-original.jpg" },
    { id: 184, name: "Classic Wooden Rabbit Toy Cum Showpiece", price: 1600, category: "wooden", image: "images/wooden/classic-wooden-rabbit-toy-cum-showpiece-buzykart-original.jpg" },
    { id: 185, name: "Golden Round Swastika Wall Art", price: 1800, category: "wooden", image: "images/wooden/mdf-wooden-golden-round-swastika-wall-art-for-temple-room-office-original.jpg" },
    { id: 186, name: "Brass And Carving Jewellery Vanity Box", price: 2000, category: "wooden", image: "images/wooden/brass-and-carving-jewellery-vanity-box-brown-brass-carving-original.jpg" },
    { id: 187, name: "Desk Organizer Remote Stand", price: 2200, category: "wooden", image: "images/wooden/desk-organizer-remote-stand-for-office-table-accessories-all-in-original.jpg" },
    { id: 188, name: "Holderkey Dont Hive Up Houseofwood", price: 2400, category: "wooden", image: "images/wooden/holderkey-dont-hive-up-houseofwood-original.jpg" },
    { id: 189, name: "Keyholder World Wide Kart", price: 2600, category: "wooden", image: "images/wooden/keyholder-world-wide-kart-original.jpg" },
    { id: 190, name: "Boat showpiece", price: 2800, category: "wooden", image: "images/wooden/2-25-mn-wd-sp-boat-25-flk-mn-krafts-13-original.jpg" },
    { id: 191, name: "Banglebox All Craft", price: 3000, category: "wooden", image: "images/wooden/banglebox-all-craft-exim-7-5-original.jpg" },
    { id: 192, name: "Incenseholder Msinteriors", price: 3200, category: "wooden", image: "images/wooden/wooden incenseholder-msinteriors-original.jpg" },
    { id: 193, name: "Moneybox Cashbox Box", price: 3400, category: "wooden", image: "images/wooden/moneybox-cashbox-box-the-spiritual-living-7-6-original.jpg" },
    { id: 194, name: "Wooden Box Ganpati", price: 3600, category: "wooden", image: "images/wooden/wooden-box-ganpati-enterprises-original.jpg" },
    { id: 195, name: "Incense Holder", price: 3800, category: "wooden", image: "images/wooden/wooden-incense-holder-i-fill-laaltane-for-home-ranacreation-original.jpg" },
    { id: 196, name: "Positive Vibe Wall Hanging ", price: 4000, category: "wooden", image: "images/wooden/positive-vibe-wall-hanging-for-home-decoration-gift-living-room-original.jpg" },
    { id: 197, name: "Money Box Square Carved", price: 4200, category: "wooden", image: "images/wooden/wooden-money-box-square-carved-handicraft-gift-item-timberkart-original.jpg" },
    { id: 198, name: "Tabletop Palki Regular", price: 4400, category: "wooden", image: "images/wooden/3-18-wooden-tabletop-palki-regular-mn-retails-10-original.jpg" },
    { id: 199, name: "Elephant Decorative Item", price: 4600, category: "wooden", image: "images/wooden/wooden-elephant-decorative-item-for-kids-and-play-game-fashion-original.jpg" },
    { id: 200, name: "Jewelry Makeup Organizer Box For Multipurpose Usage", price: 4800, category: "wooden", image: "images/wooden/wooden-jewelry-makeup-organizer-box-for-multipurpose-usage-original.jpg" },
    { id: 201, name: "Dices Building Bricks Stacking", price: 5000, category: "wooden", image: "images/wooden/48-pcs-blocks-4-dices-wooden-numbered-building-bricks-stacking-original.jpg" },
    { id: 202, name: "Wooden Moving Toy Road Roller Toy", price: 5200, category: "wooden", image: "images/wooden/wooden-moving-toy-for-kids-wooden-road-roller-classic-wooden-toy-original.jpg" },
    { id: 203, name: "Wall Hanging ", price: 5400, category: "wooden", image: "images/wooden/wall-hanging-for-home-decoration-wall-decor-gift-1-wh2418-wall-original.jpg" },
    { id: 204, name: "Sindur Kumkum Shringar Box", price: 5600, category: "wooden", image: "images/wooden/wooden-sindur-kumkum-shringar-box-sindoor-dibbi-for-women-original.jpg" },
    { id: 205, name: "Shubh Sathiya Labh 3pcs Wall Door decor", price: 5800, category: "wooden", image: "images/wooden/4-4-wooden-decor-shubh-sathiya-labh-3pcs-wall-door-wood-brown-original.jpg" },
    { id: 206, name: "Money Saving Box With Counting", price: 6000, category: "wooden", image: "images/ wood/ wooden-money-saving-box-cash-saver-money-box-with-counting-original.jpg" },
    { id: 207, name: "Remote Stand", price: 6200, category: "wooden", image: "images/wooden/wooden-wooden-remote-stand-for-living-room-remote-holder-remote-original.jpg" },
    { id: 208, name: "Word Alphabet Laminated Tracing Board Slate With Dummy Pencil", price: 6400, category: "wooden", image: "images/wooden/wooden-alphabet-laminated-tracing-board-slate-with-dummy-pencil-original.jpg" },
    { id: 209, name: "Wooden Road Engine Toy For Kids", price: 6600, category: "wooden", image: "images/wooden/wooden-road-engine-toy-for-kids-wooden-road-roller-kids-toys-original.jpg" },
    { id: 210, name: "Compartments Wooden Pen Pencil Other Multi Functional Storage", price: 6800, category: "wooden", image: "images/wooden/4-compartments-wooden-pen-pencil-other-multi-functional-storage-original.jpg" },
    { id: 211, name: "Showpiece Mampi Enterprise", price: 7000, category: "wooden", image: "images/wooden/showpiece-mampi-enterprise-29-original.jpg" },
    { id: 212, name: "Showpiece Living Room Table Lookat", price: 7200, category: "wooden", image: "images/wooden/showpiece-for-decoration-living-room-table-lookat-original.jpg" },
    // { name: "", price: , category: "wooden", image: "" },


    /* ---------- HANDLOOM PRODUCTS ---------- */
    { id: 213, name: "bath towel yellow men soft quick dry 1 31", price: 800, category: "handloom", image: "images/handloom/bath-towel-yellow-men-soft-quick-dry-1-31-original.jpg" },
    { id: 214, name: "cottonblend saree printed unstitched ", price: 1200, category: "handloom", image: "images/handloom/cottonblend-saree-printed-unstitched-manikant-handloom-original.jpg" },
    { id: 215, name: "cottonblend saree unstitched handprinted ", price: 1400, category: "handloom", image: "images/handloom/cottonblend-saree-unstitched-handmade-printed-manikant-handloom-original.jpg" },
    { id: 216, name: "cottonblend unstitched printed ", price: 1600, category: "handloom", image: "images/handloom/cottonblend-unstitched-printed-manikant-handloom-original.jpg" },
    { id: 217, name: "cottonblend unstitched printed saree ", price: 1800, category: "handloom", image: "images/handloom/cottonblend-unstitched-printed-saree-manikant-handloom-original.jpg" },
    { id: 218, name: "cottonblendsaree unstitched", price: 2000, category: "handloom", image: "images/handloom/cottonblendsaree-unstitched-saree-manikant-handloom-original.jpg" },
    { id: 219, name: "Cotton 250 gsm bath gamcha", price: 1000, category: "handloom", image: "images/handloom/free-madras-cotton-250-gsm-bath-face-hair-hand-gamcha-pack-of-1-original.jpg" },
    { id: 220, name: "Mens dhoti white smart sewingers", price: 1200, category: "handloom", image: "images/handloom/free-mens-dhoti-white-smart-sewingers-original.jpg" },
    { id: 221, name: "Premium quality mens white golden jari cotton dhoti", price: 1400, category: "handloom", image: "images/handloom/free-premium-quality-men-s-white-golden-jari-cotton-dhoti-shyam-original.jpg" },
    { id: 222, name: "free tmmcsmp9x5 dothi", price: 1600, category: "handloom", image: "images/handloom/free-tmmcsmp9x5-dothi-tuni-mani-original.jpg" },
    { id: 223, name: "unstitched na melody jai dhanop", price: 1800, category: "handloom", image: "images/handloom/no-na-unstitched-na-melody-jai-dhanop-maa-textile-original.jpg" },
    { id: 224, name: "organic cotton baby towel", price: 2000, category: "handloom", image: "images/handloom/organic-cotton-babytowel-men-gwmhmustowelp1blue-mom-s-home-40-original.jpg" },
    { id: 225, name: "pancha tuni mani", price: 2200, category: "handloom", image: "images/handloom/pancha-tuni-mani-original.jpg" },
    { id: 226, name: "stylish desi pure cotton khadi white", price: 2400, category: "handloom", image: "images/handloom/stylish-desi-banarasi-pure-cotton-hand-face-hair-khadi-white-original.jpg" },
    // { name: "", price:, category:"handloom"}, image:"" },

    /* ---------- POTTERY PRODUCTS ---------- */
    { id: 227, name: "clay curd pot with lid dahi handi", price: 900, category: "pottery", image: "images/pottery/1-clay-curd-pot-with-lid-dahi-handi-brown-unlglazed-teracotta-1-original.jpg" },
    { id: 228, name: "clay bottle 1000 ml bottle pack of 2", price: 1200, category: "pottery", image: "images/pottery/1000-clay-bottle331-1000-ml-bottle-pack-of-2-brown-clay-2-bottel-original.jpg" },
    { id: 229, name: "Flower pot round shape metal indoor outdoor garden plant flower", price: 850, category: "pottery", image: "images/pottery/1-flwer-pot-round-shape-metal-indoor-outdoor-garden-plant-flower-original.jpg" },
    { id: 230, name: "present handcrafted water bottle ", price: 750, category: "pottery", image: "images/pottery/1000-present-handcrafted-terracotta-water-bottle-1-bs-t-b-3-original.jpg" },
    { id: 231, name: "self cooling clay pure and natural handmade water bottle", price: 650, category: "pottery", image: "images/pottery/1000-self-cooling-clay-pure-and-natural-handmade-water-bottle-1-original.jpg" },
    { id: 232, name: "natural earthen fine crafts pot", price: 450, category: "pottery", image: "images/pottery/bs-natural-earthen-fine-crafts-earthen-fine-crafts-pot-pen-500-original.jpg" },
    { id: 233, name: "clay gullak pack of 2 ", price: 600, category: "pottery", image: "images/pottery/clay-gullak-pack-of-2-hc-the-crafts-original.jpg" },
    { id: 234, name: "clay curd bowl", price: 300, category: "pottery", image: "images/pottery/claycurdbowl-bowl-cpv-crafts-original.jpg" },
    { id: 235, name: "clay pot", price: 400, category: "pottery", image: "images/pottery/claypot-pot-vedaspot-original.jpg" },
    { id: 236, name: "combo clay&mudpot kadai", price: 800, category: "pottery", image: "images/pottery/combo-clay&mudpot-kadai-kichera-original.jpg" },
    { id: 237, name: "combo claypot red kadai", price: 750, category: "pottery", image: "images/pottery/combo-claypot-red-kadai-clay-mud-kichera-original.jpg" },
    { id: 238, name: "container cooking vessle", price: 550, category: "pottery", image: "images/pottery/container-cookingpot-stylemyway-original.jpg" },
    { id: 239, name: "Glass mitti", price: 400, category: "pottery", image: "images/pottery/glass-traditional-mitti-glass-small-coffee-glass-300ml-pack-of-2-original.jpg" },
    { id: 240, name: "Glazed curd pot dahi handi terracotta brown", price: 500, category: "pottery", image: "images/pottery/handcrafted-earthen-glazed-curd-pot-dahi-handi-terracotta-brown-original.jpg" },
    { id: 241, name: "heavy matka stand with tray holder stainless steel pot stand", price: 650, category: "pottery", image: "images/pottery/heavy-matka-stand-with-tray-holder-stainless-steel-pot-stand-original.jpg" },
    { id: 242, name: "Dinner set 12 inch plate with combo", price: 850, category: "pottery", image: "images/pottery/no-1-dinner-set-12-inch-plate-with-combo-all-desi-original.jpg" },
    { id: 243, name: "organic clay dahi handi 1l", price: 700, category: "pottery", image: "images/pottery/organic-clay-dahi-handi-1l-prakrtya-original.jpg" },
    { id: 244, name: "organic clay glass brown 300 ml pack of 6", price: 550, category: "pottery", image: "images/pottery/organic-clay-glass-brown-300-ml-pack-of-6-funloof-original.jpg" },
    { id: 245, name: "self cooling water clay jug 1to5 litres", price: 600, category: "pottery", image: "images/pottery/self-cooling-water-jug-clay-jug-earthenware-jug-1-5-litres-ksi-original.jpg" },
    { id: 246, name: "teacup claycup", price: 350, category: "pottery", image: "images/pottery/teacup-claycup-original.jpg" },
    // { name: "", price: , category: "pottery", image: "" },

];

/* ---------- GLOBAL STATE ---------- */
let currentProducts = products;

/* ---------- RANDOM PRODUCTS ---------- */
function getRandomProducts(list, count) {
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

/* ---------- DISPLAY PRODUCTS ---------- */
function displayProducts(list) {
    const productList = document.getElementById("productList");
    if (!productList) return;

    productList.innerHTML = "";

    if (list.length === 0) {
        productList.innerHTML = "<p>No products found.</p>";
        return;
    }

    list.forEach(product => {
        productList.innerHTML += `
            <div class="product-card">

                <!-- CLICKABLE AREA (GO TO PRODUCT PAGE) -->
                <div class="product-click"
                     onclick="openProduct(${product.id})">

                    <img src="${product.image}"
                         alt="${product.name}"
                         loading="lazy"
                         onerror="this.src='images/placeholder.jpg'">

                    <h3 title="${product.name}">
                        ${product.name}
                    </h3>

                    <p>₹${product.price.toLocaleString()}</p>
                </div>

                <!-- ADD TO CART (NO REDIRECT) -->
                <button onclick="addToCart(event, ${product.id})">
                    Add to Cart
                </button>

            </div>
        `;
    });
}

/* ---------- FILTER PRODUCTS BY CATEGORY ---------- */
function filterByCategory(event, categoryName) {
    document.querySelectorAll('.category-card')
        .forEach(card => card.classList.remove('active'));

    event.currentTarget.classList.add('active');

    currentProducts = products.filter(
        product => product.category === categoryName
    );

    displayProducts(currentProducts);

    document.getElementById("productList")
        .scrollIntoView({ behavior: "smooth" });
}

/* ---------- SHOW ALL PRODUCTS ---------- */
function showAllProducts() {
    document.querySelectorAll('.category-card')
        .forEach(card => card.classList.remove('active'));

    currentProducts = products;
    displayProducts(products);
}

/* ---------- ADD TO CART ---------- */
function addToCart(event, productId) {
  event.stopPropagation();

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 }); // FIXED
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

/* ---------- UPDATE CART COUNT (HEADER SYNC) ---------- */
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((sum, item) => sum + item.qty, 0);

    const cartCountEl = document.getElementById("cartCount");
    if (cartCountEl) {
        cartCountEl.innerText = count;
    }
}

/* ---------- SEARCH PRODUCTS ---------- */
function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    displayProducts(filteredProducts);

    document.getElementById("productList") 
        // .scrollIntoView({ behavior: "smooth" });
}

/* ---------- OPEN PRODUCT PAGE ---------- */
function openProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

/* ---------- INITIAL LOAD ---------- */
displayProducts(getRandomProducts(products, 18));
updateCartCount();


