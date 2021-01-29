import galleryItems from './gallery-items.js';

// {
//   /* <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li> */
// }

const createImage = ({ preview, original, description }) => {
  const newImgRef = document.createElement('img');
  newImgRef.classList.add('gallery__image');
  newImgRef.setAttribute('src', preview);
  newImgRef.setAttribute('data-source', original);
  newImgRef.setAttribute('alt', description);

  return newImgRef;
};

const createLink = ({ original }, callback) => {
  const newlinkRef = document.createElement('img');
  newlinkRef.classList.add('gallery__link');
  newLinkRef.setAttribute('src', original);

  newlinkRef.childNodes(callback());
  return newlinkRef;
};

const createListItem = callback => {
  const newListItemRef = document.createElement('li');
  newListItemRef.classList.add('gallery__item');

  newListItemRef.childNodes(callback());
  return newListItemRef;
};
