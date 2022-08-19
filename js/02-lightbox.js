import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const newElements = galleryItems
  .map(
    (value) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${value.original}">
     <img
       class="gallery__image"
      src="${value.preview}"
       alt="${value.description}"
     />
   </a>
 </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", newElements);

new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
