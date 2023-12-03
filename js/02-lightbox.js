import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");

// console.log(container);

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
              <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      data-id="${description}"
               />
  </a>
</li>
        `
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
