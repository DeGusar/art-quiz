import "./style.scss";

import { images } from "./imagesEn";
import { shuffle, Question } from "./js/questionsAuthors";

import { QuestionPictures } from "./js/questionsPictures";
import { Category } from "./js/category";
import {
  categoriesWrapper,
  createCategories,
  pageCategories,
  showCategoriesPage,
  hideCategoriesPage,
  initPicturesQuestions,
  category,
  namesCategories,
} from "./js/categoriesPage";

import {
  pageStarting,
  volumeScale,
  checkboxTimer,
  timerInput,
  showSettingsPage,
} from "./js/settingsPage";

import {
  showStartingPage,
  hideStartingPage,
  buttonAuthors,
  buttonPictures,
} from "./js/startingPage";

import { timer } from "./js/timerFunction";
import {
  createQuestionsPicturesPage,
  hideQuestionAuthorPage,
  showQuestionAuthorPage,
  createQuestionsAuthorPage,
  questionsAuthorPage,
  timerProgress,
  countTimer,
  renderPopupAnswer,
} from "./js/questionsAuthorsPage";

import { playSoundRight, playSoundWrong, playSoundResult } from "./js/audio";

import { Saves, saves } from "./js/saves";

import {
  createResultPage,
  showResultPage,
  createResultPagePictures,
  resultsPage,
} from "./js/resultsPage";

import "./js/selfcheck";
