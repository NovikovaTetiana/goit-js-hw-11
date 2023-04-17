export function createCardsGallery(arr) {
  return arr.map(createCard).join('');
}

// function createCard({
//   webformatURL,
//   largeImageURL,
//   tags,
//   likes,
//   views,
//   comments,
//   downloads,
// }) {
//   return `
//    <a href="${largeImageURL}" class="gallery__item">
//    <div class="photo-card">
//   <img src="${webformatURL}" alt="${tags}"  class="gallery__image" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//      <span class="info-item__value">${likes}
//      </span>
//     </p>
//     <p class="info-item">
//       <b>Views</b>
//       <span class="info-item__value">${views}
//      </span>
//     </p>
//     <p class="info-item">
//       <b>Comments</b>
//       <span class="info-item__value">${comments}
//      </span>
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>
//       <span class="info-item__value">${downloads}
//      </span>
//     </p>
//   </div>
//   </div>
// </a>`;
// }

function createCard({
  smallImg,
  title,
  id,
  genresStr,
  year,
}) {
  return `
<li class="film-card">
         	<a href="#" class="film-card__link">
            <img
              class="film-card__film-img"
              src="${smallImg}"
              alt="${title}"
              id="${id}"
            />
            <h3 class="film-card__film-name">${title}</h3>
            <p class="film-card__genre">${genresStr}${year}</p>
          </a>
        </li>
//    `;
}


