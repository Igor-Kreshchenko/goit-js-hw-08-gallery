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
const galleryListItemRef = document.querySelector('.gallery__item');

const getOriginImageUrl = event => {
  const originImageUrl = event.target.dataset.source;
  console.log(originImageUrl);
};

const openModal = () => {
  lightboxRef.classList.add('is-open');
};

galleryListRef.addEventListener('click', getOriginImageUrl);
galleryListItemRef.addEventListener('click', openModal);
