import { Question } from "./questionsAuthors";
import { QuestionPictures } from "./questionsPictures";
import { Category } from "./category";
import { images } from "../imagesEn";
import { pageStarting, showSettingsPage } from "./settingsPage";

import {
  createQuestionsAuthorPage,
  createQuestionsPicturesPage,
  questionsAuthorPage,
} from "./questionsAuthorsPage";

import { saves } from "./saves";
import {
  createResultPage,
  createResultPagePictures,
  resultsPage,
} from "./resultsPage";

export const categoriesWrapper = document.querySelector(
  ".categories-images__wrapper"
);
export const pageCategories = document.querySelector(".categories");
export const scoreButton = document.querySelector(".nav__score");

export const namesCategories = [
  "Portrait",
  "Landscape",
  "Still life",
  "Impressionism",
  "Expressionism",
  "Avant-garde",
  "Renaissance",
  "Surrealism",
  "Kitsch",
  "Minimalism",
  "Interior",
  "Nude",
];

let questions = [];
export const category = [];

export function createCategories(array) {
  categoriesWrapper.innerHTML = "";
  for (let i = 0; i < array.length; i += 1) {
    const div = document.createElement("div");
    const divOverlay = document.createElement("div");
    const spanOverlay = document.createElement("span");
    const textOverlay = document.createElement("p");
    const overlayWrap = document.createElement("div");
    overlayWrap.append(spanOverlay);
    overlayWrap.append(textOverlay);
    divOverlay.append(overlayWrap);
    textOverlay.textContent = "Score";

    div.classList.add("categoryImgWrap");
    overlayWrap.classList.add("overlay__wrapper");
    divOverlay.classList.add("category__overlay");

    const divTitleWrap = document.createElement("div");
    divTitleWrap.classList.add("categoryTitleWrap");
    const nameCategory = document.createElement("p");
    nameCategory.classList.add("nameCategory");
    nameCategory.textContent = `${namesCategories[i]}`;
    const scoreCategory = document.createElement("p");

    scoreCategory.classList.add("scoreCategory");
    const img = document.createElement("img");
    img.classList.add("imgCategory");

    if (array[i].score !== null) {
      scoreCategory.textContent = `${array[i].score}/10`;
      div.append(divOverlay);
      img.classList.add("unclickable__overlay");
      overlayWrap.addEventListener("click", () => {
        showResultsWithAnimation();
        createResultPage(array[i]);
      });

      div.addEventListener("mouseleave", () => {
        divOverlay.classList.remove("overlay__active");
        overlayWrap.classList.remove("overlay__wrapper_active");
        img.classList.add("unclickable__overlay");
      });
      divOverlay.addEventListener("click", () => {
        divOverlay.classList.add("overlay__active");
        overlayWrap.classList.add("overlay__wrapper_active");

        img.classList.remove("unclickable__overlay");
        overlayWrap.addEventListener("click", () => {
          showResultsWithAnimation();
          createResultPage(array[i]);
        });
      });
    } else {
      scoreCategory.textContent = "";
      img.classList.add("grey");
    }
    img.src = `./images/img/${array[i].questions[0].question}.jpg`;
    categoriesWrapper.append(div);
    div.append(divTitleWrap);
    divTitleWrap.append(nameCategory);
    divTitleWrap.append(scoreCategory);
    div.append(img);
    img.addEventListener("click", () => {
      showQuestionsWithAnimation();
      array[i].current = 0;
      array[i].score = 0;
      createQuestionsAuthorPage(array[i]);
    });
  }
}
export function createCategoriesPictures(array) {
  categoriesWrapper.innerHTML = "";
  for (let i = 0; i < array.length; i += 1) {
    const div = document.createElement("div");
    div.classList.add("categoryImgWrap");
    const divOverlay = document.createElement("div");
    const spanOverlay = document.createElement("span");
    const textOverlay = document.createElement("p");
    const overlayWrap = document.createElement("div");
    overlayWrap.append(spanOverlay);
    overlayWrap.append(textOverlay);
    divOverlay.append(overlayWrap);
    textOverlay.textContent = "Score";
    overlayWrap.classList.add("overlay__wrapper");
    divOverlay.classList.add("category__overlay");
    const divTitleWrap = document.createElement("div");
    divTitleWrap.classList.add("categoryTitleWrap");
    const nameCategory = document.createElement("p");
    nameCategory.classList.add("nameCategory");
    nameCategory.textContent = `${namesCategories[i]}`;
    const scoreCategory = document.createElement("p");
    scoreCategory.classList.add("scoreCategory");
    const img = document.createElement("img");
    img.classList.add("imgCategory");
    if (array[i].score !== null) {
      scoreCategory.textContent = `${array[i].score}/10`;
      div.append(divOverlay);
      img.classList.add("unclickable__overlay");
      overlayWrap.addEventListener("click", () => {
        showResultsWithAnimation();
        createResultPagePictures(array[i]);
      });

      div.addEventListener("mouseleave", () => {
        divOverlay.classList.remove("overlay__active");
        overlayWrap.classList.remove("overlay__wrapper_active");
        img.classList.add("unclickable__overlay");
      });
      divOverlay.addEventListener("click", () => {
        divOverlay.classList.add("overlay__active");
        overlayWrap.classList.add("overlay__wrapper_active");
        img.classList.remove("unclickable__overlay");
        overlayWrap.addEventListener("click", () => {
          showResultsWithAnimation();
          createResultPagePictures(array[i]);
        });
      });
    } else {
      scoreCategory.textContent = "";
      img.classList.add("grey");
    }

    img.src = `./images/img/${array[i].questions[0].rightAnswer}.jpg`;
    categoriesWrapper.append(div);
    div.append(divTitleWrap);
    divTitleWrap.append(nameCategory);
    divTitleWrap.append(scoreCategory);
    div.append(img);
    img.addEventListener("click", () => {
      showQuestionsWithAnimation();
      array[i].current = 0;
      array[i].score = 0;
      createQuestionsPicturesPage(array[i]);
    });
  }
}

export function showCategoriesPage() {
  pageCategories.classList.remove("hide");
}

export function hideCategoriesPage() {
  pageCategories.classList.add("hide");
}

export function initAuthorsQuestions() {
  questions = [];
  for (let i = 0; i < 120; i += 1) {
    questions.push(new Question(i));
  }
  category.length = 0;
  for (let i = 0; i < 12; i += 1) {
    category.push(new Category(i, questions));
    category[i].score = saves.scoreCategories[i];
  }
  createCategories(category);
}

export function initPicturesQuestions() {
  questions = [];
  for (let i = 120; i < images.length; i += 1) {
    questions.push(new QuestionPictures(i));
  }
  const categoryPictures = [];
  for (let i = 0; i < 12; i += 1) {
    categoryPictures.push(new Category(i, questions));
    categoryPictures[i].score = saves.scoreCategoriesPictureType[i];
  }
  createCategoriesPictures(categoryPictures);
}

pageCategories.addEventListener("click", (e) => {
  if (e.target.closest(".nav__home")) {
    pageStarting.classList.remove("hide");
    pageStarting.classList.add("pt-page-ontop");
    pageStarting.classList.add("pt-page-current");
    pageStarting.classList.add("pt-page-rotateSlideIn");
    window.setTimeout(() => {
      pageCategories.classList.remove("pt-page-current");
      pageStarting.classList.remove("pt-page-ontop");
      pageStarting.classList.remove("pt-page-rotateSlideIn");
    }, 1000);
  }
  if (e.target.closest(".header__nav")) {
    pageStarting.classList.remove("hide");
    pageStarting.classList.add("pt-page-ontop");
    pageStarting.classList.add("pt-page-current");
    pageStarting.classList.add("pt-page-rotateSlideIn");
    window.setTimeout(() => {
      pageCategories.classList.remove("pt-page-current");
      pageStarting.classList.remove("pt-page-ontop");
      pageStarting.classList.remove("pt-page-rotateSlideIn");
    }, 1000);
  }
  if (e.target.closest(".nav__score")) {
    showSettingsPage();
  }
});

function showQuestionsWithAnimation() {
  pageCategories.classList.add("pt-page-rotateSlideOut");
  questionsAuthorPage.classList.add("pt-page-ontop");
  questionsAuthorPage.classList.add("pt-page-current");
  questionsAuthorPage.classList.add("pt-page-rotateSlideIn");
  window.setTimeout(() => {
    pageCategories.classList.remove("pt-page-current");
    questionsAuthorPage.classList.remove("pt-page-ontop");
    questionsAuthorPage.classList.remove("pt-page-rotateSlideIn");
    pageCategories.classList.remove("pt-page-rotateSlideOut");
  }, 1000);
}

function showResultsWithAnimation() {
  pageCategories.classList.add("pt-page-rotateSlideOut");
  resultsPage.classList.add("pt-page-ontop");
  resultsPage.classList.add("pt-page-current");
  resultsPage.classList.add("pt-page-rotateSlideIn");
  window.setTimeout(() => {
    pageCategories.classList.remove("pt-page-current");
    resultsPage.classList.remove("pt-page-ontop");
    resultsPage.classList.remove("pt-page-rotateSlideIn");
    pageCategories.classList.remove("pt-page-rotateSlideOut");
  }, 1000);
}
