import { Category } from "./category";
import { Question } from "./questionsAuthors";
import { QuestionPictures } from "./questionsPictures";
import images from "../images";
import { pageCategories, createCategories } from "./categoriesPage";
import { categoriesWrapper } from "./categoriesPage";
import { showCategoriesPage } from "./categoriesPage";
import { pageStarting } from "./settingsPage";
import { initAuthorsQuestions } from "./categoriesPage";
import { initPicturesQuestions } from "./categoriesPage";


export const buttonAuthors = document.querySelector('.button-artists')
export const buttonPictures = document.querySelector('.button-pictures')

export function showStartingPage() {
    pageStarting.classList.remove('hide');
}
export function hideStartingPage() {
    pageStarting.classList.add('hide');
}

buttonAuthors.addEventListener('click', () => {
    showCategoriesPage();
    hideStartingPage()
    initAuthorsQuestions()
    
})
buttonPictures.addEventListener('click', () => {
    showCategoriesPage();
    hideStartingPage()
    initPicturesQuestions()
})



 


 

 




