/* Product Data */
const products = {
     1: {
          title: "White Satin Gloves with Bow and Pearl Detail",
          category: "Accessories, Women",
          shortDescription: "Elegant white satin gloves adorned with a delicate bow and pearl embellishment for a refined touch.",
          longDescription: "These luxurious gloves are crafted from smooth white satin, offering a sleek and polished look. The wrist-length design features a charming bow accent, further enhanced by a dangling pearl for a touch of sophistication. The soft fabric ensures a comfortable fit, making them ideal for formal occasions, vintage-inspired outfits, or elegant costume ensembles. Whether for a grand evening event, a wedding, or a stylish photoshoot, these gloves add grace and elegance to any attire.",
          material: "90% polyester, 10% spandex satin blend",
          additionalFeatures: "Smooth, slightly stretchy fabric; secure fit with a soft inner lining"
     },
     2: {
          title: "Mustard Yellow Bow-Tie Blouse",
          category: "Tops, Women",
          shortDescription: "A fitted mustard yellow blouse featuring a statement bow tie and vintage-inspired button details.",
          longDescription: "This elegant blouse blends classic charm with modern sophistication. The structured fit flatters the waist, while the delicate pleats add a touch of refinement. The standout feature is the oversized bow tie, lending a vintage aesthetic perfect for formal and semi-formal settings. White buttons provide a crisp contrast, and the flutter sleeves enhance the blouse's feminine appeal. Made from soft and breathable fabric, it is comfortable for all-day wear. Style it with high-waisted skirts or tailored trousers for a polished and timeless ensemble.",
          material: "65% cotton, 30% rayon, 5% spandex",
          additionalFeatures: "Lightweight and breathable; structured collar with pleated accents"
     },
     3: {
          title: "Wide-Brimmed Straw Hat with Bow",
          category: "Accessories, Women",
          shortDescription: "A chic wide-brimmed straw hat with a soft bow accent, perfect for sun protection and effortless elegance.",
          longDescription: "Crafted from finely woven straw, this wide-brimmed hat is designed to provide both style and sun protection. Its natural beige hue complements a variety of outfits, making it a versatile accessory for warm-weather outings. The soft fabric bow adds a delicate and feminine touch, enhancing its vintage appeal. Lightweight and breathable, this hat is an essential piece for summer picnics, beach strolls, and garden parties. Pair it with a sundress and sandals for a timeless, sophisticated look.",
          material: "100% natural straw with a polyester bow",
          additionalFeatures: "Internal sweatband; adjustable inner drawstring for a secure fit"
     },
     4: {
          title: "Green Plaid A-Line Skirt",
          category: "Bottoms, Women",
          shortDescription: "A vintage-inspired green plaid A-line skirt with a high waist and a flowing silhouette.",
          longDescription: "This elegant A-line skirt features a timeless green plaid pattern, perfect for creating a vintage or academic aesthetic. The high-waisted design accentuates the figure while providing a comfortable fit. Made from high-quality fabric, it drapes beautifully, allowing for graceful movement. Subtle pleats add structure and volume, making it ideal for both casual outings and sophisticated ensembles. Pair it with a blouse and heels for a refined look or a cosy sweater for a more relaxed style.",
          material: "70% polyester, 25% viscose, 5% elastane",
          additionalFeatures: "Fully lined for added comfort; concealed side zipper closure"
     },
     5: {
          title: "White Block Heel Mary Jane Shoes",
          category: "Footwear, Women",
          shortDescription: "Elegant white Mary Jane heels featuring a minimalist design with a single strap and gold-tone button detail.",
          longDescription: "These classic Mary Jane heels offer a sophisticated blend of vintage charm and modern simplicity. Designed with a sleek, glossy white finish, they feature a single strap with a gold-tone button accent for a refined touch. The block heel provides stability and comfort, making them ideal for everyday wear or special occasions. Their versatile design pairs effortlessly with dresses, skirts, or tailored outfits, adding a timeless elegance to any look.",
          material: "Glossy faux leather upper, cushioned inner sole, rubber outsole",
          additionalFeatures: "Single-strap closure with gold-tone button; non-slip sole; soft inner lining"
     },
     6: {
          title: "Black Lace Mesh Gloves",
          category: "Accessories, Women",
          shortDescription: "Delicate black lace gloves with ruffled cuffs, perfect for adding a vintage touch to any outfit.",
          longDescription: "These elegant lace mesh gloves are crafted from a fine, sheer fabric with an intricate lace pattern. The ruffled cuffs add a graceful finish, making them ideal for formal events or period-inspired fashion. Their lightweight design ensures comfort while maintaining a luxurious appearance. Whether worn for a special occasion or as a stylish statement, these gloves bring a sense of refinement to any ensemble.",
          material: "90% nylon, 10% spandex",
          additionalFeatures: "Soft, breathable mesh fabric, slip-resistant palm grip"
     },
     7: {
          title: "Striped Puff-Sleeve Blouse",
          category: "Tops, Women",
          shortDescription: "A cropped vintage-style blouse with puffed sleeves, a sailor collar, and rust-red and cream stripes.",
          longDescription: "This retro-inspired blouse is a statement piece with its bold striped pattern in rust-red and cream. Designed with a wide sailor collar, short puffed sleeves, and a fitted waist, it offers a flattering and nostalgic silhouette. The fabric is lightweight and breathable, making it suitable for both casual and semi-formal occasions. The button-down front enhances its vintage appeal, allowing it to be styled effortlessly with high-waisted skirts or trousers.",
          material: "100% cotton",
          additionalFeatures: "Soft, breathable fabric, structured collar, fitted waist"
     },
     8: {
          title: "Red and White Mary Jane Heels",
          category: "Footwear, Women",
          shortDescription: "Charming red Mary Jane heels with white scalloped trim, a decorative bow, and a sturdy block heel.",
          longDescription: "These elegant Mary Jane heels feature a vibrant red faux leather exterior with delicate white detailing along the edges. The classic round-toe design is adorned with a soft white bow, adding a touch of vintage charm. An adjustable red buckle strap provides a secure and customizable fit, while the sturdy block heel offers both style and stability. Perfect for retro-inspired looks, cosplay, or adding a playful yet sophisticated touch to your wardrobe.",
          material: "Faux leather upper, cushioned insole, rubber outsole",
          additionalFeatures: "Adjustable buckle strap, non-slip rubber sole, soft inner lining"
     },
     9: {
          title: "Black Velvet Handbag with Crystal Buckle",
          category: "Bags, Women",
          shortDescription: "A luxurious black velvet handbag featuring a crystal-encrusted buckle and a structured handle.",
          longDescription: "This sophisticated handbag is crafted from plush black velvet, offering an air of elegance and refinement. The structured design is enhanced by a dazzling square-shaped buckle adorned with sparkling crystals, serving as the focal point of the bag. The curved top handle, accented with gold-tone hardware, provides a comfortable grip while maintaining its sleek aesthetic. Perfect for evening events, formal occasions, or adding a touch of glamour to everyday wear, this handbag is a timeless accessory for those who appreciate classic luxury.",
          material: "Soft velvet exterior, satin lining, metal crystal-encrusted buckle",
          additionalFeatures: ""
     },
     10: {
          title: "High-Waisted Pleated Skirt with Belt",
          category: "Bottoms, Women",
          shortDescription: "A vintage-inspired high-waisted pleated skirt in a deep rust shade, featuring a decorative belt.",
          longDescription: "This elegant pleated skirt is designed with a structured high waist, creating a sophisticated silhouette. The deep rust colour adds a timeless appeal, while the sharp pleats provide movement and grace. The skirt is accented with a stylish black belt with gold detailing, enhancing its refined aesthetic. Ideal for vintage and classic fashion enthusiasts, it pairs beautifully with fitted blouses and tailored jackets.",
          material: "65% polyester, 30% rayon, 5% spandex",
          additionalFeatures: "Fully lined, removable belt, structured pleats"
     },
     11: {
          title: "Mint Green Quilted Handbag with Pearl Handle",
          category: "Bags, Women",
          shortDescription: "A stylish mint green quilted handbag featuring a pearl handle and a gold-tone chain strap.",
          longDescription: "This charming handbag blends modern elegance with vintage-inspired details. Crafted from soft quilted synthetic leather, its compact structure is both practical and fashionable. The pearl-adorned handle adds a refined touch, while the gold-tone chain strap allows for versatile carrying options. The secure twist-lock closure ensures your essentials remain safe while maintaining a sleek aesthetic. Ideal for casual outings, afternoon tea, or complementing a pastel-themed ensemble, this handbag is a delightful addition to any collection.",
          material: "Quilted synthetic leather, faux pearl handle, metal chain strap",
          additionalFeatures: ""
     },
     12: {
          title: "Olive Green Wide-Brimmed Straw Hat with Ribbon",
          category: "Accessories, Women",
          shortDescription: "A timeless wide-brimmed straw hat in natural beige with an olive green ribbon and bow detail.",
          longDescription: "This sophisticated straw hat offers both sun protection and effortless style. The natural woven design is complemented by an elegant olive green ribbon, tied into a delicate bow at the side and secured with a soft under-chin tie for a vintage-inspired touch. Lightweight and breathable, this hat is ideal for summer outings, garden parties, or leisurely countryside walks. Pair it with a flowy dress or a tailored ensemble to enhance your refined look while staying comfortably shaded.",
          material: "100% natural straw, polyester ribbon",
          additionalFeatures: "Internal sweatband, adjustable ribbon tie"
     },
     13: {
          title: "Olive Green Suede Block Heel Shoes with Bow",
          category: "Footwear, Women",
          shortDescription: "Classic olive green suede block heel shoes with a soft bow embellishment for a touch of elegance.",
          longDescription: "These elegant block heel shoes offer a perfect balance of sophistication and comfort. Made from plush olive green suede, they feature a rounded toe and a delicately tied bow for a graceful aesthetic. The sturdy block heel provides support, making them ideal for long wear without compromising on style. Whether paired with a vintage dress, formal attire, or a casual yet polished look, these shoes elevate any outfit with their understated charm.",
          material: "Genuine suede upper, leather lining, rubber sole",
          additionalFeatures: "Cushioned insole for comfort, slip-resistant sole"
     },
     14: {
          title: "Vintage Floral Button-Up Blouse",
          category: "Tops, Women",
          shortDescription: "A fitted button-up blouse featuring a delicate yellow floral pattern on an off-white background.",
          longDescription: "This vintage-inspired blouse is crafted from lightweight, breathable fabric, making it an excellent choice for warm weather. The delicate floral print exudes a timeless charm, while the tailored fit and structured collar create a polished silhouette. Puff sleeves add a hint of femininity, and the full button-down front allows for easy styling. Whether worn with a high-waisted skirt or trousers, this blouse brings a classic elegance to any wardrobe.",
          material: "100% cotton",
          additionalFeatures: "Fitted waist, slightly sheer fabric, structured collar"
     },
     15: {
          title: "Olive Green Asymmetrical Buttoned Skirt",
          category: "Bottoms, Women",
          shortDescription: "A chic olive green midi skirt featuring an asymmetrical buttoned design and a subtle side slit.",
          longDescription: "This sophisticated midi skirt combines structure and fluidity for a refined yet modern look. The high-waisted fit enhances the silhouette, while the asymmetrical button placement adds visual interest. A small side slit provides ease of movement without sacrificing elegance. Designed with a functional pocket detail, this skirt is both stylish and practical. Pair it with a fitted blouse for a professional setting or a relaxed top for a more casual yet polished outfit.",
          material: "65% polyester, 30% rayon, 5% spandex",
          additionalFeatures: "Functional side pocket, fully lined, asymmetrical button detail"
     },
     16: {
          title: "Gold Bow and Pearl Stud Earrings",
          category: "Jewellery, Women",
          shortDescription: "Delicate gold-plated stud earrings featuring a sparkling bow design with a dangling faux pearl accent.",
          longDescription: "These exquisite earrings combine classic elegance with a touch of modern glamour. The gold-plated bow is adorned with tiny crystals, adding a refined sparkle, while the faux pearl drop enhances their timeless appeal. The stud backing ensures a secure fit, making them suitable for both daily wear and special occasions. Whether paired with a sophisticated dress or a chic blouse, these earrings bring a graceful finishing touch to any outfit.",
          material: "Gold-plated alloy, faux pearl, rhinestones",
          additionalFeatures: "Lightweight design; hypoallergenic stud closure; polished finish"
     },
     17: {
          title: "Black Tote Bag with Monochrome Scarf Detail",
          category: "Accessories, Women",
          shortDescription: "A sleek black tote bag featuring a stylish monochrome scarf accent for a sophisticated finish.",
          longDescription: "This versatile tote bag is crafted from smooth faux leather, offering both durability and elegance. Its spacious interior provides ample room for everyday essentials, making it perfect for work, shopping trips, or casual outings. The attached black and white scarf adds a touch of chic refinement, while the sturdy shoulder straps ensure comfort and reliability. Designed for practicality without compromising on style, this tote is an essential addition to any wardrobe.",
          material: "Faux leather exterior, polyester lining",
          additionalFeatures: "Spacious interior; structured silhouette; removable decorative scarf"
     },
     18: {
          title: "Blush Pink Blouse with White Peter Pan Collar",
          category: "Clothing, Women",
          shortDescription: "A vintage-inspired blush pink blouse featuring a classic white Peter Pan collar and elegant puff sleeves.",
          longDescription: "This charming blouse is crafted from soft, breathable fabric, designed to provide both comfort and sophistication. The tailored silhouette enhances the figure, while the delicate Peter Pan collar adds a timeless vintage aesthetic. The puffed three-quarter sleeves with fitted white cuffs create a balanced, elegant look suitable for office wear, casual outings, or special occasions. A back zipper ensures ease of wear, making this blouse a graceful addition to any wardrobe.",
          material: "65% polyester, 35% cotton",
          additionalFeatures: "Soft-touch fabric; concealed back zip closure; non-stretch fit"
     },
     19: {
          title: "Black T-Strap Heeled Shoes with Bow Detail",
          category: "Footwear, Women",
          shortDescription: "Elegant black T-strap heels featuring a bow embellishment and a comfortable block heel for vintage charm.",
          longDescription: "These classic black heels are designed with a vintage-inspired T-strap, secured with an adjustable buckle for a snug fit. The rounded toe shape and bow detail add a playful yet refined touch, while the block heel provides stability and comfort for all-day wear. The cushioned insole enhances comfort, making these shoes perfect for formal events, retro-inspired outfits, or everyday elegance. The subtle scalloped trim adds a feminine finish, elevating these heels into a versatile wardrobe staple.",
          material: "Faux leather upper, rubber outsole",
          additionalFeatures: "Padded insole for comfort; slip-resistant sole; secure buckle fastening"
     },
     20: {
          title: "Black and Grey Vintage Midi Dress with Lace-Up Bodice",
          category: "Clothing, Women",
          shortDescription: "A vintage-style midi dress featuring a black lace-up bodice and a flowing grey skirt for a timeless silhouette.",
          longDescription: "This retro-inspired dress blends elegance with a touch of drama. The structured black bodice, designed with a lace-up front, creates a flattering, corset-like effect, while the adjustable spaghetti straps ensure a customisable fit. The full grey midi skirt flows gracefully, adding movement and sophistication to the look. Crafted from soft yet durable fabric, this dress is ideal for formal events, vintage-themed outings, or elegant everyday wear. Pair it with classic heels and accessories to complete the look.",
          material: "Polyester blend fabric",
          additionalFeatures: "Adjustable straps; zip closure at the back; flared A-line skirt"
     },
     21: {
          title: "Chiffon Cherry Print Petticoat",
          category: "Tops, Women",
          shortDescription: "A vintage-inspired sheer chiffon Petticoat featuring a playful cherry print.",
          longDescription: "This lightweight chiffon blouse is designed with a fresh mint green base and a vibrant cherry print. It has a semi-sheer texture, button-down front, and a relaxed fit, making it perfect for layering or wearing on its own. The delicate collar and subtle pleating add a touch of elegance, making it suitable for both casual and dressy occasions.",
          material: "100% Chiffon",
          additionalFeatures: "Breathable and lightweight, buttoned front, slightly transparent for a delicate look."
     },

     22: {
          title: "Elegant White Satin Clutch Bag",
          category: "Bags, Women",
          shortDescription: "A vintage-inspired white satin clutch with a rhinestone clasp.",
          longDescription: "This sophisticated clutch bag features a luxurious white satin exterior adorned with an elegant bow design. The structured silver-tone metal frame adds durability, while the ornate rhinestone clasp closure provides a refined finishing touch. It is compact yet spacious enough to hold essential items, making it a perfect accessory for evening events or weddings.",
          material: "Satin with metal frame",
          additionalFeatures: "Interior slip pocket, secure kiss-lock closure, detachable chain strap for versatile styling."
     },

     23: {
          title: "Retro Cat-Eye Sunglasses",
          category: "Accessories, Women",
          shortDescription: "Oversized mint green cat-eye sunglasses with gradient lenses.",
          longDescription: "These stylish sunglasses blend retro glamour with modern flair. The oversized frame in a soft mint green hue complements a variety of outfits, while the gradient brown lenses provide excellent UV protection. The sturdy yet lightweight design ensures comfort, making them an ideal accessory for sunny days.",
          material: "Polycarbonate frame, UV400 protection lenses",
          additionalFeatures: "Scratch-resistant lenses, lightweight and durable construction, comfortable nose pads."
     },

     24: {
          title: "Vintage-Inspired T-Strap Heels",
          category: "Shoes, Women",
          shortDescription: "Patent leather T-strap heels in mint and white with bow details.",
          longDescription: "These vintage-style heels offer a charming blend of retro and modern design. The glossy patent leather upper features a two-tone mint and white colour scheme with scalloped edges and a delicate bow detail. A sturdy block heel provides comfortable elevation, while the T-strap and adjustable buckle ensure a secure fit. Perfect for adding a playful yet elegant touch to any outfit.",
          material: "Patent leather upper, rubber sole",
          additionalFeatures: "Cushioned insole for comfort, non-slip outsole, adjustable ankle strap."
     },

     25: {
          title: "Mint Green Buttoned Playsuit",
          category: "Clothing, Women",
          shortDescription: "A sleeveless mint green playsuit with front button details.",
          longDescription: "Designed for effortless elegance, this structured playsuit features a fitted bodice with a sweetheart neckline and wide shoulder straps. The high-waisted shorts offer a flattering silhouette, while the button-front detail adds a subtle vintage touch. Crafted from a breathable fabric with a hint of stretch, this piece is ideal for warm weather outings.",
          material: "Cotton blend with slight stretch",
          additionalFeatures: "Side zipper closure, functional front buttons, tailored fit for a sleek appearance."
     }
}

/* Product Images */

const productsImages = {
     1: {
          A: "/img-products/y-glv-01.jpg",
          B: "/img-products/y-glv-02.jpg",
          C: "/img-products/y-glv-03.jpg",
     },
     2: {
          A: "/img-products/y-top-01.jpg",
          B: "/img-products/y-top-02.jpg",
          C: "/img-products/y-top-03.jpg",
          D: "/img-products/y-top-04.jpg",
     },
     3: {
          A: "/img-products/y-hat-feat-01.jpg",
     },
     4: {
          A: "/img-products/y-bot-01.jpg",
          B: "/img-products/y-bot-02.jpg",
          C: "/img-products/y-bot-03.jpg",
          D: "/img-products/y-bot-04.jpg",
     },
     5: {
          A: "/img-products/y-shoes-feat-01.jpg",
          B: "/img-products/y-shoes-feat-02.jpg",
          C: "/img-products/y-shoes-feat-03.jpg",
          D: "/img-products/y-shoes-feat-04.jpg",
          E: "/img-products/y-shoes-feat-05.jpg",
     },
     6: {
          A: "/img-products/r-glv-01.jpg",
          B: "/img-products/r-glv-02.jpg",
          C: "/img-products/r-glv-03.jpg",
     },
     7: {
          A: "/img-products/r-top-01.jpg",
          B: "/img-products/r-top-02.jpg",
          C: "/img-products/r-top-03.jpg",
          D: "/img-products/r-top-04.jpg",
     },
     8: {
          A: "/img-products/r-shoes-feat-01.jpg",
          B: "/img-products/r-shoes-feat-02.jpg",
          C: "/img-products/r-shoes-feat-03.jpg",
          D: "/img-products/r-shoes-feat-04.jpg",
          E: "/img-products/r-shoes-feat-05.jpg",
     },
     9: {
          A: "/img-products/r-bag-01.jpg",
          B: "/img-products/r-bag-02.jpg",
          C: "/img-products/r-bag-03.jpg",
     },
     10: {
          A: "/img-products/r-bot-01.jpg",
          B: "/img-products/r-bot-02.jpg",
          C: "/img-products/r-bot-03.jpg",
          D: "/img-products/r-bot-04.jpg",
          E: "/img-products/r-bot-05.jpg",
     },
     11: {
          A: "/img-products/g-bag-feat-01.jpg",
     },
     12: {
          A: "/img-products/g-hat-feat-01.jpg",
          B: "/img-products/g-hat-feat-02.jpg",
          C: "/img-products/g-hat-feat-03.jpg",
     },
     13: {
          A: "/img-products/g-shoes-feat-01.jpg",
     },
     14: {
          A: "/img-products/g-top-01.jpg",
          B: "/img-products/g-top-02.jpg",
          C: "/img-products/g-top-03.jpg",
     },
     15: {
          A: "/img-products/g-bot-01.jpg",
          B: "/img-products/g-bot-02.jpg",
          C: "/img-products/g-bot-03.jpg",
     },
     16: {
          A: "/img-products/b-earrings-01.jpg",
          B: "/img-products/b-earrings-02.jpg",
          C: "/img-products/b-earrings-03.jpg",
     },
     17: {
          A: "/img-products/b-bag-01.jpg",
          B: "/img-products/b-bag-02.jpg",
          C: "/img-products/b-bag-03.jpg",
     },
     18: {
          A: "/img-products/b-top-01.jpg",
          B: "/img-products/b-top-02.jpg",
          C: "/img-products/b-top-03.jpg",
          D: "/img-products/b-top-04.jpg",
          E: "/img-products/b-top-05.jpg",
     },
     19: {
          A: "/img-products/b-shoes-feat-01.jpg",
          B: "/img-products/b-shoes-feat-02.jpg",
          C: "/img-products/b-shoes-feat-03.jpg",
     },
     20: {
          A: "/img-products/b-bot-01.jpg",
          B: "/img-products/b-bot-02.jpg",
          C: "/img-products/b-bot-03.jpg",
          D: "/img-products/b-bot-04.jpg",
          E: "/img-products/b-bot-05.jpg",
     },
     21: {
          A: "/img-products/c-bot-01.jpg",
          B: "/img-products/c-bot-02.jpg",
     },
     22: {
          A: "/img-products/c-bag-01.jpg",
          B: "/img-products/c-bag-02.jpg",
          C: "/img-products/c-bag-03.jpg",
     },
     23: {
          A: "/img-products/c-sunglasses-01.jpg",
     },
     24: {
          A: "/img-products/c-shoes-feat-01.jpg",
          B: "/img-products/c-shoes-feat-02.jpg",
          C: "/img-products/c-shoes-feat-03.jpg",
     },
     25: {
          A: "/img-products/c-top-01.jpg",
          B: "/img-products/c-top-02.jpg",
          C: "/img-products/c-top-03.jpg",
          D: "/img-products/c-top-04.jpg",
     }
};