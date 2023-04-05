import { PixabayAPI } from "./PixabayAPI";
import createGallery from "./createCardGallery"

const formEl = document.querySelector('#search-form')
const loadBtn = document.querySelector(".load-more");
const galleryEl = document.querySelector('.gallery');
const inputEl = document.querySelector('.input');

const pixabayApi = new PixabayAPI()

const handalSearchFormSub = (event) =>{
  event.preventDefault()

  pixabayApi.q = inputEl.value.trim();

  pixabayApi.fetchImages().then(({hits, total, totalHits}) => {

    console.log(hits, total, totalHits)

    // galleryEl.innerHTML=createGallery({hits})

    galleryEl.insertAdjacentHTML('beforeend', createGallery(hits));
  })
}
formEl.addEventListener("submit", handalSearchFormSub)