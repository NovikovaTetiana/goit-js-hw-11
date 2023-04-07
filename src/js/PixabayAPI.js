import axios from 'axios';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '35065160-4f8cc67178494d61c2fc4e213';

  constructor() {
    this.q = null;
    this.page = 1;
    this.count = 40;
    this.totalPages = 0;
  }

  async fetchImages() {
    try {
      return await axios.get(`${this.#BASE_URL}`, {
        params: {
          key: this.#API_KEY,
          q: this.q,
          page: this.page,
          per_page: this.count,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: 'true',
        },
      });
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
