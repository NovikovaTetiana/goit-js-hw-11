import { PixabayAPI } from './PixabayAPI';
import { createCardsGallery } from './createCardGallery';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';

const formEl = document.querySelector('#search-form');
const loadBtn = document.querySelector('.load-more');
const galleryEl = document.querySelector('.gallery');
const inputEl = document.querySelector('.input');
window.addEventListener('scroll', onScroll);

const lightbox = new SimpleLightbox('.gallery a');

function hideElement(DOMElem, totalHits, page) {
  if (totalHits < page * 40) {
    DOMElem.classList.add('is-hidden');
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
    return;
  }
}

const pixabayApi = new PixabayAPI();

const handleSearchFormSub = event => {
  event.preventDefault();

  if (inputEl.value === '') {
    return;
  }

  pixabayApi.q = inputEl.value.trim();
  inputEl.value = '';

  pixabayApi
    .fetchImages()
    .then(({ data }) => {
      galleryEl.innerHTML = createCardsGallery(data.hits);

      lightbox.refresh();

      if (!data.totalHits) {
        loadBtn.classList.add('is-hidden');
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }

      hideElement(loadBtn, data.totalHits, pixabayApi.page);

      if (data.totalHits) {
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
      }

      loadBtn.classList.remove('is-hidden');
    })
    .catch(err => {
      console.log(err);
    });
};

formEl.addEventListener('submit', handleSearchFormSub);

// ---------LOAD BTN-------------------------

const handleLoadBtnClick = () => {
  pixabayApi.page += 1;
  pixabayApi
    .fetchImages()
    .then(({ data }) => {
      console.log(data);

      hideElement(loadBtn, data.totalHits, pixabayApi.page);

      galleryEl.insertAdjacentHTML('beforeend', createCardsGallery(data.hits));
    })
    .catch(err => {
      console.log(err);
    });
};

loadBtn.addEventListener('click', handleLoadBtnClick);

// ------------SCROLL PAGE
function onScroll() {
  const { height: cardHeight } =
    galleryEl.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
