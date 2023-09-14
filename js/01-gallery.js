import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const listEl = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");

  listItemEl.innerHTML = `<div class="gallery__item-content">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
      data-source="${item.original}"
    />
  </div>`;

  listEl.append(listItemEl);

  const imageEl = listItemEl.querySelector(".gallery__image");
  imageEl.addEventListener("click", () => {
    openImageInLightbox(item.original, item.description);
  });
});

function openImageInLightbox(imageSource, imageAlt) {
  const instance = basicLightbox.create(`
    <img src="${imageSource}" alt="${imageAlt}" />
  `);

  instance.show();

  document.addEventListener("keydown", closeLightboxOnEsc);

  function closeLightboxOnEsc(e) {
    if (e.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeLightboxOnEsc);
    }
  }
}
