import refs from './refs';
import api from './apiService';
import updateGalleryMarkup from './updateMarkup';

refs.searchForm.addEventListener('submit', searchFormSabmitHandler);
refs.loadMoreBtn.addEventListener('click', fetchGallery);

function searchFormSabmitHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  api.query = form.elements.query.value;
  //   refs.loadMoreBtn.classList.remove('is-hidden');
  api.resetPage();
  clearContainer();
  fetchGallery();
  form.reset();
}

function fetchGallery() {
  api.fetchGallery().then(hits => {
    updateGalleryMarkup(hits);
    showLoadBtn();
    windowScroll();
  });
}

function clearContainer() {
  refs.gallery.innerHTML = '';
}
function showLoadBtn() {
  refs.loadMoreBtn.classList.remove('is-hidden');
}

function windowScroll() {
  window.scrollTo({
    top: document.documentElement.offsetHeight,
    behavior: 'smooth',
  });
}
