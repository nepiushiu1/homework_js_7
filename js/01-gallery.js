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
       data-source="${value.original}"
       alt="${value.description}"
     />
   </a>
 </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", newElements);

gallery.addEventListener("click", modalWindow);
function modalWindow(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.dataset.source}" width="800" height="600">
    </div>
	`);
  instance.show();
  window.addEventListener("keydown", closeKeyboard);
  function closeKeyboard(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
}
