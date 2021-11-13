import { timer } from "./timerFunction";
import { showCategoriesPage } from "./categoriesPage";
import { showStartingPage } from "./startingPage";
import { category } from "./categoriesPage";

const timerProgress = document.querySelector('.timer__progress');
const countTimer = document.querySelector('.time__count');
export const questionsAuthorPage = document.querySelector('.questions-authors');
const questionsAuthorsContainer = document.querySelector('.questions-authors__container');

timer(timerProgress, 10, countTimer);

questionsAuthorPage.addEventListener('click', (e) => {
    if (e.target.closest('.questions-authors__close')) {
        showCategoriesPage();
        hideQuestionAuthorPage()
    }
})

export function hideQuestionAuthorPage() {
    questionsAuthorPage.classList.add('hide');
}
export function showQuestionAuthorPage() {
    questionsAuthorPage.classList.remove('hide');
  }

export function createQuestionsAuthorPage(array) {
    questionsAuthorsContainer.innerHTML = '';
        let div = document.createElement('div');
        let img = document.createElement('img');
        div.classList.add('question-buttons__wrapper');
        img.classList.add('question__img');
        img.src = `../images/full/${array.questions[array.current].question}full.jpg`
        questionsAuthorsContainer.append(img);
        questionsAuthorsContainer.append(div);
       
    
}
