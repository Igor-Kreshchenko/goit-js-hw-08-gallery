import galleryItems from './gallery-items.js';

// Ссылки на элементы
const galleryListRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const imageLightboxRef = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const backdropRef = document.querySelector('.lightbox__overlay');

// События
galleryListRef.addEventListener('click', onGalleryClick);
galleryListRef.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);
backdropRef.addEventListener('click', onBackdropModal);

//Создание элементов галереи

function createListItem({ preview, original, description }) {
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
}

const allListItems = galleryItems.map(createListItem);

galleryListRef.append(...allListItems);

// Открытие модального окна

function onGalleryClick(event) {
  const galleryElRef = event.target;

  if (galleryElRef.nodeName !== 'IMG') {
    return;
  }

  const originImageUrl = galleryElRef.dataset.source;

  imageLightboxRef.src = originImageUrl;
}

function onOpenModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  window.addEventListener('keydown', onEscPress);

  lightboxRef.classList.add('is-open');
}

// Закрытие модального окна

function onCloseModal() {
  window.removeEventListener('keydown', onEscPress);
  lightboxRef.classList.remove('is-open');

  imageLightboxRef.src = '';
}

function onBackdropModal(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

function onEscPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
