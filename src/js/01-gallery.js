import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const imgCards = addImgGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgCards);
galleryContainer.addEventListener('click', onGalleryContainer);

function addImgGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
    </a>`;
    })
    .join('');
}
let gallery = new SimpleLightbox('.gallery a');
function onGalleryContainer(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  gallery.on('show.simplelightbox', function () {
    gallery.defaultOptions.captionDelay = 250;
  });
}
