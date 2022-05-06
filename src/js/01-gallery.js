// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
 import SimpleLightbox from "simplelightbox";

 import "simplelightbox/dist/simple-lightbox.min.css";
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


 new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });