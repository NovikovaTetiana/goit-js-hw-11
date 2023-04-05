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

  pixabayApi.fetchImages().then((data) => {

    console.log(data)

    // galleryEl.innerHTML=createGallery(data.results)

    galleryEl.insertAdjacentHTML('beforeend', createGallery(data.results));
  })
}
formEl.addEventListener("submit", handalSearchFormSub)

