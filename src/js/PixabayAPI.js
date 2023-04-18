import axios from 'axios';
import { createCardsGallery } from './createCardGallery';
import Notiflix from 'notiflix';


// export class PixabayAPI {
//   #BASE_URL = 'https://pixabay.com/api/';
//   #API_KEY = '35065160-4f8cc67178494d61c2fc4e213';

//   constructor() {
//     this.q = null;
//     this.page = 1;
//     this.count = 40;
//     this.totalPages = 0;
//   }

//   async fetchImages() {
//     try {
//       return await axios.get(`${this.#BASE_URL}`, {
//         params: {
//           key: this.#API_KEY,
//           q: this.q,
//           page: this.page,
//           per_page: this.count,
//           image_type: 'photo',
//           orientation: 'horizontal',
//           safesearch: 'true',
//         },
//       });
//     } catch (err) {
//       throw new Error(err.message);
//     }
//   }
// }

export const galleryEl = document.querySelector('.gallery');

export class APIpopular {
  #BASE_URL = 'https://api.themoviedb.org/3/';
  #API_KEY = '1962278b5026dd7c7bb0a91cd47f798b';

  async fetchMovies() {
    try {
      return await axios.get(`${this.#BASE_URL}trending/movie/week?api_key=${this.#API_KEY}`);

    } catch (err) {
      throw new Error(err.message);
    }
  }
}

const ApipopularMovies = new APIpopular();

const handlerLoadWindow = () =>{

  ApipopularMovies
  .fetchMovies()
  .then(({data})=>{
   
console.log(data)

galleryEl.innerHTML = createCardsGallery(data.results);

  }).catch(err => {
    console.log(err)
  })
 
}

window.addEventListener('load', handlerLoadWindow)


