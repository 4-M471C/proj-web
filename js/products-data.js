/* Product Data */
const products = {
     1: {
          title: "White Satin Gloves with Bow and Pearl Detail",
          price: "$32.00",
          category: "Accessories, Women",
          shortDescription: "Elegant white satin gloves adorned with a delicate bow and pearl embellishment for a refined touch.",
          longDescription: "These luxurious gloves are crafted from smooth white satin, offering a sleek and polished look. The wrist-length design features a charming bow accent, further enhanced by a dangling pearl for a touch of sophistication. The soft fabric ensures a comfortable fit, making them ideal for formal occasions, vintage-inspired outfits, or elegant costume ensembles. Whether for a grand evening event, a wedding, or a stylish photoshoot, these gloves add grace and elegance to any attire.",
          material: "90% polyester, 10% spandex satin blend",
          availableSizes: "",
          length: "9\" from wrist to fingertip",
          weight: "Approximately 0.1 lbs",
          additionalFeatures: "Smooth, slightly stretchy fabric; secure fit with a soft inner lining",
          closure: "",
          brimWidth: "",
          crownHeight: "",
          heelHeight: "",
          toeShape: "",
          headCircumference: "",
          handleDrop: "",
          interior: "",
          waistFit: ""
     },
     2: {
          title: "Mustard Yellow Bow-Tie Blouse",
          price: "$49.00",
          category: "Tops, Women",
          shortDescription: "A fitted mustard yellow blouse featuring a statement bow tie and vintage-inspired button details.",
          longDescription: "This elegant blouse blends classic charm with modern sophistication. The structured fit flatters the waist, while the delicate pleats add a touch of refinement. The standout feature is the oversized bow tie, lending a vintage aesthetic perfect for formal and semi-formal settings. White buttons provide a crisp contrast, and the flutter sleeves enhance the blouse's feminine appeal. Made from soft and breathable fabric, it is comfortable for all-day wear. Style it with high-waisted skirts or tailored trousers for a polished and timeless ensemble.",
          material: "65% cotton, 30% rayon, 5% spandex",
          availableSizes: "S, M, L, XL",
          length: "22\" (size M)",
          weight: "Approximately 0.6 lbs",
          additionalFeatures: "Lightweight and breathable; structured collar with pleated accents",
          closure: "Front button-up with attached bow tie",
          brimWidth: "",
          crownHeight: "",
          heelHeight: "",
          toeShape: "",
          headCircumference: "",
          handleDrop: "",
          interior: "",
          waistFit: ""
     },
     3: {
          title: "Wide-Brimmed Straw Hat with Bow",
          price: "$55.00",
          category: "Accessories, Women",
          shortDescription: "A chic wide-brimmed straw hat with a soft bow accent, perfect for sun protection and effortless elegance.",
          longDescription: "Crafted from finely woven straw, this wide-brimmed hat is designed to provide both style and sun protection. Its natural beige hue complements a variety of outfits, making it a versatile accessory for warm-weather outings. The soft fabric bow adds a delicate and feminine touch, enhancing its vintage appeal. Lightweight and breathable, this hat is an essential piece for summer picnics, beach strolls, and garden parties. Pair it with a sundress and sandals for a timeless, sophisticated look.",
          material: "100% natural straw with a polyester bow",
          availableSizes: "",
          length: "",
          weight: "Approximately 0.8 lbs",
          additionalFeatures: "Internal sweatband; adjustable inner drawstring for a secure fit",
          closure: "",
          brimWidth: "4.5\"",
          crownHeight: "5\"",
          heelHeight: "",
          toeShape: "",
          headCircumference: "Adjustable (fits 21\"–23\" head sizes)",
          handleDrop: "",
          interior: "",
          waistFit: ""
     },
     4: {
          title: "Green Plaid A-Line Skirt",
          price: "$68.00",
          category: "Bottoms, Women",
          shortDescription: "A vintage-inspired green plaid A-line skirt with a high waist and a flowing silhouette.",
          longDescription: "This elegant A-line skirt features a timeless green plaid pattern, perfect for creating a vintage or academic aesthetic. The high-waisted design accentuates the figure while providing a comfortable fit. Made from high-quality fabric, it drapes beautifully, allowing for graceful movement. Subtle pleats add structure and volume, making it ideal for both casual outings and sophisticated ensembles. Pair it with a blouse and heels for a refined look or a cosy sweater for a more relaxed style.",
          material: "70% polyester, 25% viscose, 5% elastane",
          availableSizes: "S, M, L, XL",
          length: "32\" (midi length)",
          weight: "Approximately 1.4 lbs",
          additionalFeatures: "Fully lined for added comfort; concealed side zipper closure",
          closure: "Concealed side zipper",
          brimWidth: "",
          crownHeight: "",
          heelHeight: "",
          toeShape: "",
          headCircumference: "",
          handleDrop: "",
          interior: "",
          waistFit: "High-waisted fit with elastic backing"
     },
     5: {
          title: "Yellow and White Mary Jane Heels",
          price: "$78.00",
          category: "Footwear, Women",
          shortDescription: "Charming yellow and white Mary Jane heels featuring a vintage-inspired double-strap design and bow details.",
          longDescription: "These retro-style Mary Jane heels combine playful charm with classic elegance. The striking combination of white and sunny yellow adds a cheerful touch, while the double-strap design with gold-tone buckles ensures a secure and adjustable fit. Delicate bow embellishments and scalloped trim enhance their feminine appeal. The sturdy block heel provides comfort and stability, making them suitable for both daily wear and special occasions. Whether styled with a vintage dress or a contemporary outfit, these shoes add a unique flair to any look.",
          material: "Glossy patent faux leather upper, cushioned leather insole, rubber sole",
          availableSizes: "US 5 – 10",
          length: "",
          weight: "Approximately 1.7 lbs (per pair)",
          additionalFeatures: "Adjustable double-strap buckle closure; non-slip sole; soft inner lining",
          closure: "Adjustable buckle strap",
          brimWidth: "",
          crownHeight: "",
          heelHeight: "2.75\"",
          toeShape: "Rounded",
          headCircumference: "",
          handleDrop: "",
          interior: "",
          waistFit: ""
     },
     6: {
          title: "Black Lace Mesh Gloves",
          price: "$18.00",
          category: "Accessories, Women",
          shortDescription: "Delicate black lace gloves with ruffled cuffs, perfect for adding a vintage touch to any outfit.",
          longDescription: "These elegant lace mesh gloves are crafted from a fine, sheer fabric with an intricate lace pattern. The ruffled cuffs add a graceful finish, making them ideal for formal events or period-inspired fashion. Their lightweight design ensures comfort while maintaining a luxurious appearance. Whether worn for a special occasion or as a stylish statement, these gloves bring a sense of refinement to any ensemble.",
          material: "90% nylon, 10% spandex",
          availableSizes: "One size fits most (stretches to fit palm widths 6\"–8\")",
          length: "10\" from wrist to fingertip",
          weight: "Approximately 0.1 lbs",
          additionalFeatures: "Soft, breathable mesh fabric, slip-resistant palm grip",
          closure: "",
          brimWidth: "",
          crownHeight: "",
          heelHeight: "",
          toeShape: "",
          headCircumference: "",
          handleDrop: "",
          interior: "",
          waistFit: ""
     },
     7: {
          title: "Striped Puff-Sleeve Blouse",
          price: "$42.00",
          category: "Tops, Women",
          shortDescription: "A cropped vintage-style blouse with puffed sleeves, a sailor collar, and rust-red and cream stripes.",
          longDescription: "This retro-inspired blouse is a statement piece with its bold striped pattern in rust-red and cream. Designed with a wide sailor collar, short puffed sleeves, and a fitted waist, it offers a flattering and nostalgic silhouette. The fabric is lightweight and breathable, making it suitable for both casual and semi-formal occasions. The button-down front enhances its vintage appeal, allowing it to be styled effortlessly with high-waisted skirts or trousers.",
          material: "100% cotton",
          availableSizes: "S, M, L, XL",
          length: "19\" (size M)",
          weight: "Approximately 0.5 lbs",
          additionalFeatures: "Soft, breathable fabric, structured collar, fitted waist",
          closure: "Front button-up",
          brimWidth: "",
          crownHeight: "",
          heelHeight: "",
          toeShape: "",
          headCircumference: "",
          handleDrop: "",
          interior: "",
          waistFit: ""
     },
     8: {
          title: "Red and White Mary Jane Heels",
          price: "$55.00",
          category: "Footwear, Women",
          shortDescription: "Vintage-style red and white Mary Jane heels with a decorative bow and sturdy block heel.",
          longDescription: "These charming Mary Jane heels combine classic vintage aesthetics with modern comfort. The glossy red patent finish is complemented by white detailing, featuring delicate scalloped edges. A bold red bow on the toe adds a playful yet elegant touch. The adjustable strap ensures a secure fit, while the block heel provides stability and support. Perfect for retro-inspired outfits, these shoes are a stylish addition to any wardrobe.",
          material: "Patent faux leather upper, cushioned leather insole, rubber sole",
          availableSizes: "US 5 – 10",
          length: "",
          weight: "Approximately 1.6 lbs (per pair)",
          additionalFeatures: "Adjustable buckle strap, non-slip sole, soft inner lining",
          closure: "Adjustable buckle strap",
          brimWidth: "",
          crownHeight: "",
          heelHeight: "2.75\"",
          toeShape: "Rounded",
          headCircumference: "",
          handleDrop: "",
          interior: "",
          waistFit: ""
     },
     9: {
          title: "Black Velvet Handbag with Crystal Buckle",
          price: "$75.00",
          category: "Bags, Women",
          shortDescription: "A luxurious black velvet handbag featuring a crystal-encrusted buckle and a structured handle.",
          longDescription: "This sophisticated handbag is crafted from plush black velvet, offering an air of elegance and refinement. The structured design is enhanced by a dazzling square-shaped buckle adorned with sparkling crystals, serving as the focal point of the bag. The curved top handle, accented with gold-tone hardware, provides a comfortable grip while maintaining its sleek aesthetic. Perfect for evening events, formal occasions, or adding a touch of glamour to everyday wear, this handbag is a timeless accessory for those who appreciate classic luxury.",
          material: "Soft velvet exterior, satin lining, metal crystal-encrusted buckle",
          availableSizes: "",
          length: "9\" (L)",
          weight: "Approximately 1.4 lbs",
          additionalFeatures: "",
          closure: "Magnetic snap closure with decorative buckle",
          brimWidth: "",
          crownHeight: "",
          heelHeight: "",
          toeShape: "",
          headCircumference: "",
          handleDrop: "4\"",
          interior: "One main compartment with a zippered pocket",
          waistFit: ""
     },
     10: {
          title: "High-Waisted Pleated Skirt with Belt",
          price: "$65.00",
          category: "Bottoms, Women",
          shortDescription: "A vintage-inspired high-waisted pleated skirt in a deep rust shade, featuring a decorative belt.",
          longDescription: "This elegant pleated skirt is designed with a structured high waist, creating a sophisticated silhouette. The deep rust colour adds a timeless appeal, while the sharp pleats provide movement and grace. The skirt is accented with a stylish black belt with gold detailing, enhancing its refined aesthetic. Ideal for vintage and classic fashion enthusiasts, it pairs beautifully with fitted blouses and tailored jackets.",
          material: "65% polyester, 30% rayon, 5% spandex",
          availableSizes: "S, M, L, XL",
          length: "30\" (midi length)",
          weight: "Approximately 1.2 lbs",
          additionalFeatures: "Fully lined, removable belt, structured pleats",
          closure: "",
          brimWidth: "",
          crownHeight: "",
          heelHeight: "",
          toeShape: "",
          headCircumference: "",
          handleDrop: "",
          interior: "",
          waistFit: "High-waisted fit with elastic backing"
     },
     11: {
          title: "Mint Green Quilted Handbag with Pearl Handle",
          price: "$38.00",
          category: "Bags, Women",
          shortDescription: "A stylish mint green quilted handbag featuring a pearl handle and a gold-tone chain strap.",
          longDescription: "This charming handbag blends modern elegance with vintage-inspired details. Crafted from soft quilted synthetic leather, its compact structure is both practical and fashionable. The pearl-adorned handle adds a refined touch, while the gold-tone chain strap allows for versatile carrying options. The secure twist-lock closure ensures your essentials remain safe while maintaining a sleek aesthetic. Ideal for casual outings, afternoon tea, or complementing a pastel-themed ensemble, this handbag is a delightful addition to any collection.",
          material: "Quilted synthetic leather, faux pearl handle, metal chain strap",
          availableSizes: "",
          length: "8.5\" (L)",
          weight: "Approximately 1.2 lbs",
          additionalFeatures: "",
          closure: "Twist-lock",
          brimWidth: "",
          crownHeight: "",
          heelHeight: "",
          toeShape: "",
          headCircumference: "",
          handleDrop: "4\" (pearl handle), 22\" (chain strap)",
          interior: "One main compartment with a small inner pocket",
          waistFit: ""
     },
     12: {
          title: "Olive Green Wide-Brimmed Straw Hat with Ribbon",
          price: "$52.00",
          category: "Accessories, Women",
          shortDescription: "A timeless wide-brimmed straw hat in natural beige with an olive green ribbon and bow detail.",
          longDescription: "This sophisticated straw hat offers both sun protection and effortless style. The natural woven design is complemented by an elegant olive green ribbon, tied into a delicate bow at the side and secured with a soft under-chin tie for a vintage-inspired touch. Lightweight and breathable, this hat is ideal for summer outings, garden parties, or leisurely countryside walks. Pair it with a flowy dress or a tailored ensemble to enhance your refined look while staying comfortably shaded.",
          material: "100% natural straw, polyester ribbon",
          availableSizes: "",
          length: "",
          weight: "Approximately 0.4 lbs",
          additionalFeatures: "Internal sweatband, adjustable ribbon tie",
          closure: "",
          brimWidth: "4.5\"",
          crownHeight: "4\"",
          heelHeight: "",
          toeShape: "",
          headCircumference: "Adjustable (fits head sizes 21.5\" – 23\")",
          handleDrop: "",
          interior: "",
          waistFit: ""
     },
     13: {
          title: "Olive Green Suede Block Heel Shoes with Bow",
          price: "$65.00",
          category: "Footwear, Women",
          shortDescription: "Classic olive green suede block heel shoes with a soft bow embellishment for a touch of elegance.",
          longDescription: "These elegant block heel shoes offer a perfect balance of sophistication and comfort. Made from plush olive green suede, they feature a rounded toe and a delicately tied bow for a graceful aesthetic. The sturdy block heel provides support, making them ideal for long wear without compromising on style. Whether paired with a vintage dress, formal attire, or a casual yet polished look, these shoes elevate any outfit with their understated charm.",
          material: "Genuine suede upper, leather lining, rubber sole",
          availableSizes: "US 5 – 10",
          length: "",
          weight: "Approximately 1.8 lbs (per pair)",
          additionalFeatures: "Cushioned insole for comfort, slip-resistant sole",
          closure: "",
          brimWidth: "",
          crownHeight: "",
          heelHeight: "2.5\"",
          toeShape: "Rounded",
          headCircumference: "",
          handleDrop: "",
          interior: "",
          waistFit: ""
     },
     14: {
          title: "Vintage Floral Button-Up Blouse",
          price: "$68.00",
          category: "Tops, Women",
          shortDescription: "A fitted button-up blouse featuring a delicate yellow floral pattern on an off-white background.",
          longDescription: "This vintage-inspired blouse is crafted from lightweight, breathable fabric, making it an excellent choice for warm weather. The delicate floral print exudes a timeless charm, while the tailored fit and structured collar create a polished silhouette. Puff sleeves add a hint of femininity, and the full button-down front allows for easy styling. Whether worn with a high-waisted skirt or trousers, this blouse brings a classic elegance to any wardrobe.",
          material: "100% cotton",
          availableSizes: "S, M, L, XL",
          length: "23\" (size M)",
          weight: "Approximately 0.6 lbs",
          additionalFeatures: "Fitted waist, slightly sheer fabric, structured collar",
          closure: "Front button-up",
          brimWidth: "",
          crownHeight: "",
          heelHeight: "",
          toeShape: "",
          headCircumference: "",
          handleDrop: "",
          interior: "",
          waistFit: ""
     },
     15: {
          title: "Olive Green Asymmetrical Buttoned Skirt",
          price: "$74.00",
          category: "Bottoms, Women",
          shortDescription: "A chic olive green midi skirt featuring an asymmetrical buttoned design and a subtle side slit.",
          longDescription: "This sophisticated midi skirt combines structure and fluidity for a refined yet modern look. The high-waisted fit enhances the silhouette, while the asymmetrical button placement adds visual interest. A small side slit provides ease of movement without sacrificing elegance. Designed with a functional pocket detail, this skirt is both stylish and practical. Pair it with a fitted blouse for a professional setting or a relaxed top for a more casual yet polished outfit.",
          material: "65% polyester, 30% rayon, 5% spandex",
          availableSizes: "S, M, L, XL",
          length: "28\" (midi length)",
          weight: "Approximately 0.9 lbs",
          additionalFeatures: "Functional side pocket, fully lined, asymmetrical button detail",
          closure: "",
          brimWidth: "",
          crownHeight: "",
          heelHeight: "",
          toeShape: "",
          headCircumference: "",
          handleDrop: "",
          interior: "",
          waistFit: "High-waisted fit with concealed side zipper"
     }
};

/* Product Images */

const productsImages = {
     1: {
          A:"/img-clothing/glv-01.jpg",
          B:"/img-clothing/glv-02.jpg",
          C:"/img-clothing/glv-03.jpg",
     },
     2: {
          A:"/img-clothing/y-top-01.jpg",
          B:"/img-clothing/y-top-01.jpg",
          C:"/img-clothing/y-top-01.jpg",
          D:"/img-clothing/y-top-01.jpg",
     },
     3: {
          A:"/img-clothing/y-hat-feat-01.jpg",
     },
     4: {
          A:"/img-clothing/y-bot-01.jpg",
          B:"/img-clothing/y-bot-02.jpg",
          C:"/img-clothing/y-bot-03.jpg",
          D:"/img-clothing/y-bot-04.jpg",
     },
     5: {
          A:"/img-clothing/y-shoes-feat-01.jpg",
     },
     6: {
          A:"/img-clothing/r-glv-01.jpg",
          B:"/img-clothing/r-glv-02.jpg",
          C:"/img-clothing/r-glv-03.jpg",
     },
     7: {
          A:"/img-clothing/r-top-01.jpg",
          B:"/img-clothing/r-top-02.jpg",
          C:"/img-clothing/r-top-03.jpg",
          D:"/img-clothing/r-top-04.jpg",
     },
     8: {
          A:"/img-clothing/r-shoes-feat-01.jpg",
     },
     9: {
          A:"/img-clothing/r-bag-01.jpg",
          B:"/img-clothing/r-bag-02.jpg",
          C:"/img-clothing/r-bag-03.jpg",
     },
     10: {
          A:"/img-clothing/r-bot-01.jpg",
          B:"/img-clothing/r-bot-02.jpg",
          C:"/img-clothing/r-bot-03.jpg",
          D:"/img-clothing/r-bot-04.jpg",
          E:"/img-clothing/r-bot-05.jpg",
     },
     11: {
          A:"/img-clothing/g-bag-feat-01.jpg",
     },
     12: {
          A:"/img-clothing/g-hat-feat-01.jpg",
          B:"/img-clothing/g-hat-feat-02.jpg",
          C:"/img-clothing/g-hat-feat-03.jpg",
     },
     13: {
          A:"/img-clothing/g-shoes-feat-01.jpg",
     },
     14: {
          A:"/img-clothing/g-top-01.jpg",
          B:"/img-clothing/g-top-02.jpg",
          C:"/img-clothing/g-top-03.jpg",
     },
     15: {
          A:"/img-clothing/g-bot-01.jpg",
          B:"/img-clothing/g-bot-02.jpg",
          C:"/img-clothing/g-bot-03.jpg",
     },
};