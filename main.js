import galleryItems from './gallery-items.js';

//Создание элементов галереи

const galleryListRef = document.querySelector('.js-gallery');

const createListItem = ({ preview, original, description }) => {
  const newImgRef = document.createElement('img');
  newImgRef.classList.add('gallery__image');
  newImgRef.setAttribute('src', preview);
  newImgRef.setAttribute('data-source', original);
  newImgRef.setAttribute('alt', description);

  const newLinkRef = document.createElement('a');
  newLinkRef.classList.add('gallery__link');
  newLinkRef.setAttribute('src', original);
  newLinkRef.appendChild(newImgRef);

  const newListItemRef = document.createElement('li');
  newListItemRef.classList.add('gallery__item');
  newListItemRef.appendChild(newLinkRef);

  return newListItemRef;
};

const allListItems = galleryItems.map(createListItem);

galleryListRef.append(...allListItems);

// Открытие модального окна

const lightboxRef = document.querySelector('.js-lightbox');
const imageLightboxRef = document.querySelector('.lightbox__image');

const onGalleryClick = event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const originImageUrl = event.target.dataset.source;
  imageLightboxRef.src = originImageUrl;
};

const openModal = event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  lightboxRef.classList.add('is-open');
};

galleryListRef.addEventListener('click', onGalleryClick);
galleryListRef.addEventListener('click', openModal);

// Закрытие модального окна

const closeModalBtn = document.querySelector(
  'button[data-action="close-lightbox"]',
);

const closeModal = event => {
  lightboxRef.classList.remove('is-open');
};

closeModalBtn.addEventListener('click', closeModal);
