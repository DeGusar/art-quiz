import {
  pageCategories, initAuthorsQuestions, initPicturesQuestions,
} from './categoriesPage';

import { pageStarting } from './settingsPage';

export const buttonAuthors = document.querySelector('.button-artists');
export const buttonPictures = document.querySelector('.button-pictures');

export function showStartingPage() {
  pageStarting.classList.remove('hide');
}

export function hideStartingPage() {
  pageStarting.classList.add('hide');
}

buttonAuthors.addEventListener('click', () => {
  initAuthorsQuestions();
  pageStarting.classList.add('pt-page-rotateSlideOut');
  pageCategories.classList.add('pt-page-ontop');
  pageCategories.classList.add('pt-page-current');
  pageCategories.classList.add('pt-page-rotateSlideIn');
  window.setTimeout(() => {
    pageStarting.classList.remove('pt-page-current');
    pageCategories.classList.remove('pt-page-ontop');
    pageCategories.classList.remove('pt-page-rotateSlideIn');
    pageStarting.classList.remove('pt-page-rotateSlideOut');
  }, 1000);
});
buttonPictures.addEventListener('click', () => {
  initPicturesQuestions();
  pageStarting.classList.add('pt-page-rotateSlideOut');
  pageCategories.classList.add('pt-page-ontop');
  pageCategories.classList.add('pt-page-current');
  pageCategories.classList.add('pt-page-rotateSlideIn');
  window.setTimeout(() => {
    pageStarting.classList.remove('pt-page-current');
    pageCategories.classList.remove('pt-page-ontop');
    pageCategories.classList.remove('pt-page-rotateSlideIn');
    pageStarting.classList.remove('pt-page-rotateSlideOut');
  }, 1000);
});
