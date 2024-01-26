import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const elements = {
  select: document.querySelector('.js-select'),
  loader: document.querySelector('.js-loader'),
  error: document.querySelector('.js-error'),
  container: document.querySelector('.js-cat-info'),
};

elements.select.addEventListener('change', handlerClick);

fetchBreeds()
  .then(({ data }) => {
    console.log(data);
    elements.select.innerHTML = createMarkupBreeds(data);
  })
  .catch(_ => {
    elements.select.classList.add('select');
    elements.error.classList.remove('error');
  })
  .finally(() => {
    elements.select.classList.remove('breed-select');
    elements.loader.classList.add('loader');
  });

function createMarkupBreeds(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function handlerClick(evt) {
  elements.container.classList.add('cat-info');
  elements.loader.classList.remove('loader');
  elements.error.classList.add('error');

  console.log(evt.currentTarget.value);
  const idCat = evt.currentTarget.value;

  fetchCatByBreed(idCat)
    .then(({ data }) => {
      elements.container.innerHTML = createMarkupBreedId(data);
    })
    .catch(_ => {
      elements.error.classList.remove('error');
    })
    .finally(() => {
      elements.container.classList.remove('cat-info');
      elements.loader.classList.add('loader');
    });
}

function createMarkupBreedId(arr) {
  console.log(arr);
  console.log(arr[0].breeds[0]);
  const name = arr[0].breeds[0].name;
  console.log(name);

  const description = arr[0].breeds[0].description;
  console.log(description);

  const temperament = arr[0].breeds[0].temperament;
  console.log(temperament);

  const url = arr[0].url;
  console.log(url);

  return arr
    .map(
      _ => `<img src="${url}" alt="${description}" width='1250' />
      <div class='container'>
       <h2>${name}</h2>
       <p>${description}</p>
       <p>${temperament}</p>
      </div>`
    )
    .join('');
}
