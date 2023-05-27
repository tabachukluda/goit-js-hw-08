// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line



import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const cardsMarkup = createCardsMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>
        `;
    }).join("");
}

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
})
console.log(galleryItems);