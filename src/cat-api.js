import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_fDMrzUmAXtRHnepiEHunTnSS35AnvwrYtNFXrFyq1gZqAFdHGxjuldwcpBozzKWH';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  return axios.get('/breeds');
}

function fetchCatByBreed(breedId) {
  return axios.get(`/images/search?breed_ids=${breedId}`);

  //   return fetch(
  //     `https://api.thecatapi.com/v1/images/search?api_key=live_fDMrzUmAXtRHnepiEHunTnSS35AnvwrYtNFXrFyq1gZqAFdHGxjuldwcpBozzKWH&breed_ids=${breedId}`
  //   ).then(resp => {
  //     return resp.json();
  //   });
}

export { fetchBreeds };
export { fetchCatByBreed };
