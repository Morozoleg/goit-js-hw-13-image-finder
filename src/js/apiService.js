import axios from 'axios';
const apiKey = '16469581-f883c672afd050a531f76d6df';
const baseUrl = 'https://pixabay.com/api/';

export default {
  searchQuery: '',
  page: 1,
  fetchGallery() {
    return axios
      .get(baseUrl, {
        params: {
          image_type: 'photo',
          orientation: 'horizontal',
          q: this.searchQuery,
          page: this.page,
          per_page: 12,
          key: apiKey,
        },
      })
      .then(response => response.data)
      .then(data => {
        this.incrementPage();
        return data.hits;
      });
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
