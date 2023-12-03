import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

// console.log(container);

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
container.addEventListener("click", handleClick);

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

// console.log(createMarkup(galleryItems));

function handleClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  event.preventDefault();

  const galleryItem = event.target.closest(".gallery__image");
  console.log("currentTarget", event.currentTarget);
  console.log("target", event.target);
  // console.log(galleryItem);

  const itemDescr = galleryItem.dataset.id;
  console.log(itemDescr);

  const originalSRC = event.target.dataset.source;
  console.log(originalSRC);

  //Модальне вікно

  const instance = basicLightbox.create(`
      <img src="${originalSRC}" width="800" height="600"/>

`);
  instance.show();
}
