import { Category } from "./category";
import { Question } from "./questionsAuthors";
import { QuestionPictures } from "./questionsPictures";
import images from "../images";
import { pageCategories, createCategories } from "./categoriesPage";
import { categoriesWrapper } from "./categoriesPage";
import { showCategories } from "./categoriesPage";
import { pageStarting } from "./settingsPage";

const buttonAuthors = document.querySelector('.button-artists')
const buttonPictures = document.querySelector('.button-pictures')

buttonAuthors.addEventListener('click', initAuthorsQuestions)
buttonPictures.addEventListener('click', initPicturesQuestions)

function initAuthorsQuestions() {
    let questions = [];
    for(let i=0; i<120;i++) {
       questions.push(new Question(i)) 
    };
    let category = [];
    for (let i = 0; i < 12; i++) {
        category.push(new Category(i, questions));
       
    }
    pageStarting.classList.add('hide')
    showCategories();
    createCategories(category, 0, 12);
    console.log(category);
}
function initPicturesQuestions() {
    let questions = [];
    for (let i = 120; i < images.length; i++) {
        questions.push(new QuestionPictures(i))
    }
    let category = [];
        for (let i = 12; i < 24; i++) {
            category.push(new Category(i, questions))
    }
    pageStarting.classList.add('hide')
    showCategories();
    createCategories(questions, 12, 24);
    console.log(category);
    
}


 

 




