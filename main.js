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
  imageLightboxRef.alt = event.target.alt;
};

const onOpenModal = event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  window.addEventListener('keydown', onEscPress);

  lightboxRef.classList.add('is-open');
};

galleryListRef.addEventListener('click', onGalleryClick);
galleryListRef.addEventListener('click', onOpenModal);

// Закрытие модального окна

const closeModalBtn = document.querySelector(
  'button[data-action="close-lightbox"]',
);

const onCloseModal = () => {
  window.removeEventListener('keydown', onEscPress);
  lightboxRef.classList.remove('is-open');

  imageLightboxRef.src = '';
};

closeModalBtn.addEventListener('click', onCloseModal);

// Закрытие по клику на бэкдроп

const backdropRef = document.querySelector('.lightbox__overlay');

const onBackdropCloseModal = event => {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
};

backdropRef.addEventListener('click', onBackdropCloseModal);

// Закрытие по нажатию на Esc

function onEscPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
