/* CONTAINER */
document.addEventListener("DOMContentLoaded", function () {
     function initializeProducts() {
          document.querySelectorAll(".prod-slide").forEach(slide => {
               let productKey = slide.getAttribute("data-product"); // e.g., "6A"
               if (!productKey) return;
               let productNumber = productKey.slice(0, -1); // Extracts "6"
               let productVariant = productKey.slice(-1); // Extracts "A"

               if (products[productNumber] && productsImages[productNumber] && productsImages[productNumber][productVariant]) {
                    // Left Column
                    let imgElement = slide.querySelector(".prod-left-column img");
                    if (imgElement) {
                         imgElement.src = productsImages[productNumber][productVariant];
                         imgElement.alt = products[productNumber].title;
                    }

                    // Right Column
                    let titleElement = slide.querySelector(".prod-title");
                    let shortDescElement = slide.querySelector(".prod-shortDesc");
                    let categoryElement = slide.querySelector(".prod-category");
                    if (titleElement) titleElement.textContent = products[productNumber].title;
                    if (shortDescElement) shortDescElement.textContent = products[productNumber].shortDescription;
                    if (categoryElement) categoryElement.textContent = products[productNumber].category;

                    // Bottom Column
                    let bottomColumn = slide.querySelector(".prod-bottom-column");
                    if (bottomColumn) {
                         bottomColumn.setAttribute("data-product", productNumber);
                         let tabContent = bottomColumn.querySelector(".prod-tab-content p");
                         if (tabContent) tabContent.textContent = products[productNumber].longDescription;
                    }

                    // Additional Information Tab
                    document.querySelector(".prod-tab:nth-child(2)").addEventListener("click", function () {
                         if (tabContent) tabContent.innerHTML = `<strong>Material:</strong> ${products[productNumber].material}<br><strong>Additional Features:</strong> ${products[productNumber].additionalFeatures}`;
                    });

                    // Description Tab
                    document.querySelector(".prod-tab:nth-child(1)").addEventListener("click", function () {
                         if (tabContent) tabContent.textContent = products[productNumber].longDescription;
                    });
               }
          });
     }
     initializeProducts();
});

/* TAB */
document.addEventListener("DOMContentLoaded", function () {
     document.querySelectorAll(".prod-tab").forEach(tab => {
          tab.addEventListener("click", function () {
               // Remove active class from all tabs
               document.querySelectorAll(".prod-tab").forEach(t => t.classList.remove("active"));
               // Add active class to the clicked tab
               tab.classList.add("active");

               // Get the related product ID
               let productNumber = tab.closest(".prod-bottom-column").getAttribute("data-product");
               if (!productNumber) return;

               // Define the content container
               let tabContent = tab.closest(".prod-bottom-column").querySelector(".prod-tab-content p");
               if (!tabContent) return;

               // Switch content based on the clicked tab
               if (tab.textContent === "Description") {
                    tabContent.textContent = products[productNumber].longDescription;
               } else if (tab.textContent === "Additional Information") {
                    tabContent.innerHTML = `<strong>Material:</strong> ${products[productNumber].material}<br><strong>Additional Features:</strong> ${products[productNumber].additionalFeatures}`;
               } else if (tab.textContent === "Disclaimer") {
                    tabContent.textContent = products[productNumber].disclaimer;
               }
          });
     });
});

/* CAROUSEL */
document.addEventListener("DOMContentLoaded", function () {
     const container = document.querySelector(".prod-container");
     const slides = Array.from(document.querySelectorAll(".prod-slide"));
     const prevBtn = document.querySelector(".carousel-prev");
     const nextBtn = document.querySelector(".carousel-next");

     let currentIndex = 0;

     function showSlide(index) {
          slides.forEach((slide, i) => {
               slide.style.display = i === index ? "grid" : "none";
          });
     }

     function nextSlide() {
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
     }

     function prevSlide() {
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          showSlide(currentIndex);
     }

     prevBtn.addEventListener("click", prevSlide);
     nextBtn.addEventListener("click", nextSlide);

     slides.forEach(slide => slide.style.display = "none");

     showSlide(currentIndex);
});

/* THUMBNAIL */
document.addEventListener("DOMContentLoaded", function () {
     function initializeProducts() {
          document.querySelectorAll(".prod-slide").forEach(slide => {
               let productKey = slide.getAttribute("data-product"); // e.g., "7A"
               if (!productKey) return;

               let productNumber = productKey.slice(0, -1); // Extracts "7"
               let productVariant = productKey.slice(-1); // Extracts "A"

               let mainImage = slide.querySelector(".prod-left-column img");
               let thumbnailContainer = slide.querySelector("#thumbnailContainer");

               if (products[productNumber]) {
                    // Set default main image to Variant A
                    let defaultVariant = "A";
                    if (productsImages[productNumber] && productsImages[productNumber][defaultVariant]) {
                         mainImage.src = productsImages[productNumber][defaultVariant];
                    }

                    // Set alt text to product title
                    mainImage.alt = products[productNumber].title;

                    // Generate thumbnails for available variants
                    thumbnailContainer.innerHTML = ""; // Clear existing thumbnails
                    let variants = ["A", "B", "C", "D", "E"];

                    variants.forEach(variant => {
                         if (productsImages[productNumber] && productsImages[productNumber][variant]) {
                              let thumbWrapper = document.createElement("div");
                              thumbWrapper.classList.add("prod-thumbnail");

                              let thumb = document.createElement("img");
                              thumb.src = productsImages[productNumber][variant];
                              thumb.alt = `${products[productNumber].title} - Variant ${variant}`;
                              thumb.dataset.variant = variant;

                              thumb.addEventListener("click", function () {
                                   mainImage.src = productsImages[productNumber][variant];
                                   mainImage.alt = `${products[productNumber].title} - Variant ${variant}`;
                              });

                              thumbWrapper.appendChild(thumb);
                              thumbnailContainer.appendChild(thumbWrapper);
                         }
                    });
               }
          });
     }

     initializeProducts();
});

/* Lightbox */
document.addEventListener("DOMContentLoaded", function () {
     function initializeLightbox() {
          const lightbox = document.createElement("div");
          lightbox.id = "lightbox";
          lightbox.innerHTML = `
             <div class="lightbox-content">
                 <span class="lightbox-close">&times;</span>
                 <img id="lightbox-img" src="" alt="">
                 <button class="lightbox-prev">&#10094;</button>
                 <button class="lightbox-next">&#10095;</button>
             </div>
         `;
          document.body.appendChild(lightbox);

          const lightboxImg = document.getElementById("lightbox-img");
          const closeBtn = document.querySelector(".lightbox-close");
          const prevBtn = document.querySelector(".lightbox-prev");
          const nextBtn = document.querySelector(".lightbox-next");

          let currentIndex = 0;
          let imageList = [];

          document.querySelectorAll(".prod-left-column img").forEach(mainImg => {
               mainImg.addEventListener("click", function () {
                    const productSlide = mainImg.closest(".prod-slide");

                    imageList = Array.from(productSlide.querySelectorAll(".prod-thumbnail img"))
                         .map(img => img.src);


                    currentIndex = imageList.indexOf(mainImg.src);
                    if (currentIndex === -1) currentIndex = 0;

                    updateLightboxImage(currentIndex);
                    lightbox.style.display = "flex";

               });
          });

          function updateLightboxImage(index) {
               if (imageList.length > 0) {
                    lightboxImg.src = imageList[index];
                    lightboxImg.alt = `Product Image ${index + 1}`;
               }
          }

          prevBtn.addEventListener("click", function () {
               currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
               updateLightboxImage(currentIndex);
          });

          nextBtn.addEventListener("click", function () {
               currentIndex = (currentIndex + 1) % imageList.length;
               updateLightboxImage(currentIndex);
          });

          closeBtn.addEventListener("click", function () {
               lightbox.style.display = "none";
          });

          lightbox.addEventListener("click", function (e) {
               if (e.target === lightbox) {
                    lightbox.style.display = "none";

               }
          });
     }

     function initializeThumbnails() {
          document.querySelectorAll(".prod-thumbnail img").forEach(thumb => {
               let newThumb = thumb.cloneNode(true);
               thumb.replaceWith(newThumb);

               newThumb.addEventListener("click", function (event) {
                    event.preventDefault();
                    event.stopPropagation();

                    let mainImg = this.closest(".prod-slide").querySelector(".prod-left-column img");
                    if (mainImg) {
                         mainImg.src = this.src;
                         mainImg.alt = this.alt;
                    }
               });
          });
     }

     initializeLightbox();
     initializeThumbnails();
});