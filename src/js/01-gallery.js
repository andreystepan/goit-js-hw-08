// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const imageConteiner = document.querySelector('.gallery');
const imageMarkup = creatGalleryItemsMarkup(galleryItems);


imageConteiner.insertAdjacentHTML('beforeend', imageMarkup);


function creatGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
    <img class = "gallery__image" src="${preview}"
    alt = "${description}" /></a>
  `
    }).join('');
    
}


const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });