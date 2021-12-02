import { namesCategories, pageCategories, showCategoriesPage } from './categoriesPage';
import { saves } from './saves';
import { showStartingPage } from './startingPage';

import { showSettingsPage, pageStarting } from './settingsPage';

const resultsText = document.querySelector('.results__title');

const resultsWrapper = document.querySelector('.results-images__wrapper');
export const resultsPage = document.querySelector('.results');

export function showResultPage() {
  resultsPage.classList.remove('hide');
}

function hideResultsPage() {
  resultsPage.classList.add('hide');
}

resultsPage.addEventListener('click', (e) => {
  if (e.target.closest('.results__home') || e.target.closest('.nav__home')) {
    pageStarting.classList.remove('hide');
    pageStarting.classList.add('pt-page-ontop');
    pageStarting.classList.add('pt-page-current');
    pageStarting.classList.add('pt-page-rotateSlideIn');
    window.setTimeout(() => {
      resultsPage.classList.remove('pt-page-current');
      pageStarting.classList.remove('pt-page-ontop');
      pageStarting.classList.remove('pt-page-rotateSlideIn');
    }, 1000);
  }
  if (e.target.closest('.results__categories') || e.target.closest('.nav__categories')) {
    pageCategories.classList.remove('hide');
    pageCategories.classList.add('pt-page-ontop');
    pageCategories.classList.add('pt-page-current');
    pageCategories.classList.add('pt-page-rotateSlideIn');
    window.setTimeout(() => {
      resultsPage.classList.remove('pt-page-current');
      pageCategories.classList.remove('pt-page-ontop');
      pageCategories.classList.remove('pt-page-rotateSlideIn');
    }, 1000);
  }
  if (e.target.closest('.results__settings')) {
    showSettingsPage();
  }
});

export function createResultPage(array) {
  resultsWrapper.innerHTML = '';
  for (let i = 0; i < array.questions.length; i += 1) {
    const div = document.createElement('div');
    div.classList.add('resultsImgWrap');
    resultsText.textContent = `Result ${saves.scoreCategories[array.category]}/10`;
    const pName = document.createElement('p');
    const pYear = document.createElement('p');
    const pAuthor = document.createElement('p');
    pName.textContent = `${array.questions[i].name}`;
    pAuthor.textContent = `${array.questions[i].author}`;
    pYear.textContent = `${array.questions[i].year}`;
    const fliper = document.createElement('div');
    const back = document.createElement('div');
    const front = document.createElement('div');
    fliper.classList.add('flipper');
    back.classList.add('back');
    front.classList.add('front');
    const divTitleWrap = document.createElement('div');
    divTitleWrap.classList.add('categoryTitleWrap');
    const nameCategory = document.createElement('p');
    nameCategory.classList.add('nameCategory');
    nameCategory.textContent = `${namesCategories[array.category]}`;
    resultsWrapper.append(div);
    const img = document.createElement('img');
    const imgInv = document.createElement('img');
    img.classList.add('resultCard');
    imgInv.classList.add('invisible');
    if (saves.questionsAuthorsСorrectness[array.category * 10 + i] === 0) {
      img.classList.add('grey');
    }
    img.src = `./images/img/${array.questions[i].question}.jpg`;
    imgInv.src = `./images/img/${array.questions[i].question}.jpg`;
    div.append(divTitleWrap);
    div.append(fliper);
    fliper.append(front);
    fliper.append(back);
    back.append(pName);
    back.append(pAuthor);
    back.append(pYear);
    front.append(img);
    fliper.append(imgInv);
    divTitleWrap.append(nameCategory);
    div.addEventListener('touchstart', () => {
      div.classList.toggle('hover');
    });
    div.addEventListener('mouseenter', () => {
      div.classList.add('hover');
    });
    div.addEventListener('mouseleave', () => {
      div.classList.remove('hover');
    });
  }
}

export function createResultPagePictures(array) {
  resultsWrapper.innerHTML = '';
  for (let i = 0; i < array.questions.length; i += 1) {
    resultsText.textContent = `Result ${saves.scoreCategoriesPictureType[array.category]}/10`;
    const div = document.createElement('div');
    const fliper = document.createElement('div');
    const back = document.createElement('div');
    const front = document.createElement('div');

    const pName = document.createElement('p');
    const pYear = document.createElement('p');
    const pAuthor = document.createElement('p');

    pName.textContent = `${array.questions[i].name}`;
    pAuthor.textContent = `${array.questions[i].author}`;
    pYear.textContent = `${array.questions[i].year}`;

    div.classList.add('resultsImgWrap');
    fliper.classList.add('flipper');
    back.classList.add('back');
    front.classList.add('front');
    const divTitleWrap = document.createElement('div');
    divTitleWrap.classList.add('categoryTitleWrap');
    const nameCategory = document.createElement('p');
    nameCategory.classList.add('nameCategory');
    nameCategory.textContent = `${namesCategories[array.category]}`;
    resultsWrapper.append(div);
    const img = document.createElement('img');
    const imgInv = document.createElement('img');
    img.classList.add('resultCard');
    imgInv.classList.add('invisible');
    if (saves.questionsPicturesСorrectness[(array.category) * 10 + i] === 0) {
      img.classList.add('grey');
    }
    img.src = `./images/img/${array.questions[i].rightAnswer}.jpg`;
    imgInv.src = `./images/img/${array.questions[i].rightAnswer}.jpg`;
    div.append(divTitleWrap);
    div.append(fliper);
    fliper.append(front);
    fliper.append(back);
    back.append(pName);
    back.append(pAuthor);
    back.append(pYear);
    divTitleWrap.append(nameCategory);
    fliper.append(imgInv);
    front.append(img);
    div.addEventListener('touchstart', () => {
      div.classList.toggle('hover');
    });
    div.addEventListener('mouseenter', () => {
      div.classList.add('hover');
    });
    div.addEventListener('mouseleave', () => {
      div.classList.remove('hover');
    });
  }
}
