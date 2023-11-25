// 01-gallery.js
import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
let activeInstance = null;

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                  <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
              </li>`;
    })
    .join("");
}

function renderGallery() {
  const galleryMarkup = createGalleryMarkup(galleryItems);
  galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
}

document.addEventListener("DOMContentLoaded", function () {
  renderGallery();

  galleryContainer.addEventListener("click", function (event) {
    event.preventDefault();
    const galleryLink = event.target.closest(".gallery__link");

    if (galleryLink) {
      const imageUrl = galleryLink.getAttribute("href");

      if (activeInstance) {
        activeInstance.close();
      }

      activeInstance = basicLightbox.create(`
        <img src="${imageUrl}" alt="Image">
      `);

      activeInstance.show();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && activeInstance) {
      activeInstance.close();
    }
  });
});
