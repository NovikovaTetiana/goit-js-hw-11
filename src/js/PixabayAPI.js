
import axios from 'axios';
import Notiflix from 'notiflix';



export class PixabayAPI{
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '35065160-4f8cc67178494d61c2fc4e213';

  q = null;
  page = 1;
  count = 40;

  fetchImages(){

const searchParams = new URLSearchParams({
  q: this.q,
  page:this.page,
  per_page: this.count,
  image_type:'photo',
  orientation:'horizontal',
  safesearch:'true',
})
    return fetch(`${this.#BASE_URL}?key=${this.#API_KEY}&${searchParams.toString()}`)
    .then(res => {
    if (!res.ok){
      throw new Error(res.status)
    }
    return res.json()
    })
  }
}

