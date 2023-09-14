import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");
  listItemEl.innerHTML = `<a class="gallery__link" href="${item.original}">
 <img
   class="gallery__image"
   src="${item.preview}"
   alt="${item.description}"
 />
</a>`;
  listEl.append(listItemEl);
});

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.visible()) {
    lightbox.close();
  }
});

listEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "ING") {
    lightbox.open();
  }
});
