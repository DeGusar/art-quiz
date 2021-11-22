export const categoriesWrapper = document.querySelector('.categories-images__wrapper');
export const pageCategories = document.querySelector('.categories');
export const scoreButton = document.querySelector('.nav__score');

export  let namesCategories = ['Portrait', 'Landscape', 'Still life', 'Impressionism', 'Expressionism', 'Avant-garde', 'Renaissance', 'Surrealism', 'Kitsch', 'Minimalism', 'Interior', 'Nude']
import { Question } from "./questionsAuthors";
import { QuestionPictures } from "./questionsPictures";
import { Category } from "./category";
import { images } from "../imagesEn";
import { pageStarting } from "./settingsPage";
import { showStartingPage } from "./startingPage";
import { hideStartingPage } from "./startingPage";
import { createQuestionsAuthorPage, createQuestionsPicturesPage, showQuestionAuthorPage } from "./questionsAuthorsPage";
import { questionsAuthorPage } from "./questionsAuthorsPage";
import { timer } from "./timerFunction";
import { timerProgress } from "./questionsAuthorsPage";
import { countTimer } from "./questionsAuthorsPage";
import { saves } from "./saves";
import { createResultPage } from "./resultsPage";
import { showResultPage } from "./resultsPage";
import { createResultPagePictures } from "./resultsPage";
import { showSettingsPage } from "./settingsPage";
import { resultsPage } from "./resultsPage";

let questions = [];
export let category = [];

export function createCategories(array) {
    categoriesWrapper.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let div = document.createElement('div');
        let divOverlay = document.createElement('div');
        let spanOverlay = document.createElement('span');
        let textOverlay = document.createElement('p');
        let overlayWrap = document.createElement('div');
        overlayWrap.append(spanOverlay);
        overlayWrap.append(textOverlay);
        divOverlay.append(overlayWrap);
        textOverlay.textContent = "Score"

        div.classList.add('categoryImgWrap');
        overlayWrap.classList.add('overlay__wrapper');
        divOverlay.classList.add('category__overlay');

        let divTitleWrap = document.createElement('div');
        divTitleWrap.classList.add('categoryTitleWrap');
        let nameCategory = document.createElement('p');
        nameCategory.classList.add('nameCategory');
        nameCategory.textContent = `${namesCategories[i]}`
        let scoreCategory = document.createElement('p');
        
        scoreCategory.classList.add('scoreCategory');
        let img = document.createElement('img');
        img.classList.add('imgCategory')
        
        if (array[i].score !== null) {
            scoreCategory.textContent = `${array[i].score}/10`;
            div.append(divOverlay);
            img.classList.add("unclickable__overlay");
            overlayWrap.addEventListener('click', () => {
                showResultsWithAnimation()
                createResultPage(array[i])
            })
           
            div.addEventListener('mouseleave', () => {
                divOverlay.classList.remove("overlay__active")
                overlayWrap.classList.remove("overlay__wrapper_active");
                img.classList.add("unclickable__overlay");
                
            })
                divOverlay.addEventListener('click', () => {
                divOverlay.classList.add("overlay__active")
                    overlayWrap.classList.add("overlay__wrapper_active");
                   
                img.classList.remove("unclickable__overlay");
                overlayWrap.addEventListener('click', () => {
                    showResultsWithAnimation()
                    createResultPage(array[i])
                })
                })
        } else {
            scoreCategory.textContent = '';
            img.classList.add('grey')
        }
        img.src = `./images/img/${array[i].questions[0].question}.jpg`
        categoriesWrapper.append(div);
        div.append(divTitleWrap);
        divTitleWrap.append(nameCategory);
        divTitleWrap.append(scoreCategory);
        div.append(img);
        img.addEventListener('click', function () {
            showQuestionsWithAnimation()
            array[i].current = 0;
            array[i].score = 0;
            createQuestionsAuthorPage(array[i])
        })
    }
}
export function createCategoriesPictures(array) {
    categoriesWrapper.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let div = document.createElement('div');
        div.classList.add('categoryImgWrap');
        let divOverlay = document.createElement('div');
        let spanOverlay = document.createElement('span');
        let textOverlay = document.createElement('p');
        let overlayWrap = document.createElement('div');
        overlayWrap.append(spanOverlay);
        overlayWrap.append(textOverlay);
        divOverlay.append(overlayWrap);
        textOverlay.textContent = "Score"
        overlayWrap.classList.add('overlay__wrapper');
        divOverlay.classList.add('category__overlay');
        let divTitleWrap = document.createElement('div');
        divTitleWrap.classList.add('categoryTitleWrap');
        let nameCategory = document.createElement('p');
        nameCategory.classList.add('nameCategory');
        nameCategory.textContent = `${namesCategories[i]}`
        let scoreCategory = document.createElement('p');
        scoreCategory.classList.add('scoreCategory');
        let img = document.createElement('img');
        img.classList.add('imgCategory')
        if (array[i].score !== null)  {
            scoreCategory.textContent = `${array[i].score}/10`;
            div.append(divOverlay);
            img.classList.add("unclickable__overlay");
            overlayWrap.addEventListener('click', () => {
                showResultsWithAnimation()
                createResultPagePictures(array[i])
            })
          
            div.addEventListener('mouseleave', () => {
                divOverlay.classList.remove("overlay__active")
                overlayWrap.classList.remove("overlay__wrapper_active");
                img.classList.add("unclickable__overlay");
                
            })
                divOverlay.addEventListener('click', () => {
                divOverlay.classList.add("overlay__active")
                overlayWrap.classList.add("overlay__wrapper_active");
                img.classList.remove("unclickable__overlay");
                overlayWrap.addEventListener('click', () => {
                showResultsWithAnimation()
                createResultPagePictures(array[i])
                })
                })
        } else {
            scoreCategory.textContent = '';
            img.classList.add('grey')
        }
        
        img.src = `./images/img/${array[i].questions[0].rightAnswer}.jpg`
        categoriesWrapper.append(div);
        div.append(divTitleWrap);
        divTitleWrap.append(nameCategory);
        divTitleWrap.append(scoreCategory);
        div.append(img);
        img.addEventListener('click', function () {
            showQuestionsWithAnimation()
            array[i].current = 0;
            array[i].score = 0;
            createQuestionsPicturesPage(array[i])
            
        })
    }
}

export function showCategoriesPage() {
    pageCategories.classList.remove('hide');
}

export function hideCategoriesPage() {
    pageCategories.classList.add('hide');
}

export function initAuthorsQuestions() {
   questions = [];
    for(let i=0; i<120;i++) {
       questions.push(new Question(i)) 
    };
   category = [];
    for (let i = 0; i < 12; i++) {
        category.push(new Category(i, questions));
        category[i].score = saves.scoreCategories[i];
    }
    createCategories(category);
}

export function initPicturesQuestions() {
    let questions = [];
    for (let i = 120; i < images.length; i++) {
        questions.push(new QuestionPictures(i))
    }
    let categoryPictures = [];
        for (let i = 0; i < 12; i++) {
            categoryPictures.push(new Category(i, questions))
            categoryPictures[i].score = saves.scoreCategoriesPictureType[i];
    }
    createCategoriesPictures(categoryPictures);
}

pageCategories.addEventListener('click', (e) => {
    if (e.target.closest('.nav__home')){
        pageStarting.classList.remove('hide');
        pageStarting.classList.add('pt-page-ontop')
        pageStarting.classList.add('pt-page-current')
        pageStarting.classList.add('pt-page-rotateSlideIn');
        window.setTimeout(() => {
            pageCategories.classList.remove('pt-page-current');
            pageStarting.classList.remove('pt-page-ontop')
            pageStarting.classList.remove('pt-page-rotateSlideIn');
        }, 1000);
    }
    if (e.target.closest('.header__nav')) {
        pageStarting.classList.remove('hide');
        pageStarting.classList.add('pt-page-ontop')
        pageStarting.classList.add('pt-page-current')
        pageStarting.classList.add('pt-page-rotateSlideIn');
        window.setTimeout(() => {
            pageCategories.classList.remove('pt-page-current');
            pageStarting.classList.remove('pt-page-ontop')
            pageStarting.classList.remove('pt-page-rotateSlideIn');
        }, 1000);
    }
    if (e.target.closest('.nav__score')) {
        showSettingsPage();
    }
})

function showQuestionsWithAnimation() {
   pageCategories.classList.add('pt-page-rotateSlideOut');
   questionsAuthorPage.classList.add('pt-page-ontop')
   questionsAuthorPage.classList.add('pt-page-current')
   questionsAuthorPage.classList.add('pt-page-rotateSlideIn');
    window.setTimeout(() => {
        pageCategories.classList.remove('pt-page-current');
        questionsAuthorPage.classList.remove('pt-page-ontop');
        questionsAuthorPage.classList.remove('pt-page-rotateSlideIn');
        pageCategories.classList.remove('pt-page-rotateSlideOut');
    }, 1000);
}

function showResultsWithAnimation() {
    pageCategories.classList.add('pt-page-rotateSlideOut');
    resultsPage.classList.add('pt-page-ontop')
    resultsPage.classList.add('pt-page-current')
    resultsPage.classList.add('pt-page-rotateSlideIn');
     window.setTimeout(() => {
         pageCategories.classList.remove('pt-page-current');
         resultsPage.classList.remove('pt-page-ontop');
         resultsPage.classList.remove('pt-page-rotateSlideIn');
         pageCategories.classList.remove('pt-page-rotateSlideOut');
     }, 1000);
}


