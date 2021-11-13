export const categoriesWrapper = document.querySelector('.categories-images__wrapper');
export const pageCategories = document.querySelector('.categories');


let namesCategories = ['Portrait', 'Landscape', 'Still life', 'Impressionism', 'Expressionism', 'Avant-garde', 'Renaissance', 'Surrealism', 'Kitsch', 'Minimalism', 'Interior', 'Nude']
import { Question } from "./questionsAuthors";
import { QuestionPictures } from "./questionsPictures";
import { Category } from "./category";
import images from "../images";
import { pageStarting } from "./settingsPage";
import { showStartingPage } from "./startingPage";
import { hideStartingPage } from "./startingPage";
import { createQuestionsAuthorPage, showQuestionAuthorPage } from "./questionsAuthorsPage";
import { questionsAuthorPage } from "./questionsAuthorsPage";



export function createCategories(array) {
    categoriesWrapper.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
       
        let div = document.createElement('div');
        div.classList.add('categoryImgWrap');
        let divTitleWrap = document.createElement('div');
        divTitleWrap.classList.add('categoryTitleWrap');
        let nameCategory = document.createElement('p');
        nameCategory.classList.add('nameCategory');
        nameCategory.textContent = `${namesCategories[i]}`
        let scoreCategory = document.createElement('p');
        array[i].score > 0 ? scoreCategory.textContent = `${array[i].score}/10` : scoreCategory.textContent = ''
        scoreCategory.classList.add('scoreCategory');
        let img = document.createElement('img');
        img.classList.add('imgCategory')
        img.src = `../images/img/${array[i].questions[0].question}.jpg`
        categoriesWrapper.append(div);
        div.append(divTitleWrap);
        divTitleWrap.append(nameCategory);
        divTitleWrap.append(scoreCategory);
        div.append(img);
        div.addEventListener('click', function () {
            showQuestionAuthorPage()
            hideCategoriesPage()
            createQuestionsAuthorPage(array[i])
        })
    }
}
export function createCategoriesPictures(array) {
    categoriesWrapper.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let div = document.createElement('div');
        div.classList.add('categoryImgWrap');
        
        let divTitleWrap = document.createElement('div');
        divTitleWrap.classList.add('categoryTitleWrap');
        let nameCategory = document.createElement('p');
        nameCategory.classList.add('nameCategory');
        nameCategory.textContent = `${namesCategories[i]}`
        let scoreCategory = document.createElement('p');
        array[i].score > 0 ? scoreCategory.textContent = `${array[i].score}/10` : scoreCategory.textContent = ''
        scoreCategory.classList.add('scoreCategory');
        let img = document.createElement('img');
        img.classList.add('imgCategory')
        img.src = `../images/img/${array[i].questions[0].rightAnswer}.jpg`
        categoriesWrapper.append(div);
       
        div.append(divTitleWrap);
        divTitleWrap.append(nameCategory);
        divTitleWrap.append(scoreCategory);
        div.append(img);
        
    }
}

export function showCategoriesPage() {
    pageCategories.classList.remove('hide');
}
export function hideCategoriesPage() {
    pageCategories.classList.add('hide');
}
 let questions = [];
export let category = [];
export function initAuthorsQuestions() {
   questions = [];
    for(let i=0; i<120;i++) {
       questions.push(new Question(i)) 
    };
   category = [];
    for (let i = 0; i < 12; i++) {
        category.push(new Category(i, questions));
       
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
    }
    createCategoriesPictures(categoryPictures);
   
    
}

pageCategories.addEventListener('click', (e) => {
    if (e.target.closest('.nav__home')){
            pageStarting.classList.remove('hide');
        hideCategoriesPage();
        showStartingPage()
    }
   
})
