import { timer } from "./timerFunction";
import { showCategoriesPage } from "./categoriesPage";
import { showStartingPage } from "./startingPage";
import { category } from "./categoriesPage";

export const timerProgress = document.querySelector('.timer__progress');
export const countTimer = document.querySelector('.time__count');
export const questionsAuthorPage = document.querySelector('.questions-authors');
export const questionsAuthorPopupClose = document.querySelector('.questions-authors__popupClose');
const questionsAuthorsContainer = document.querySelector('.questions-authors__container');
const questionsAuthorsPopupAnswerContainer = document.querySelector('.questions-authors__popupAnswer');




function showPopupClose() {
    questionsAuthorPopupClose.classList.add('visible__popup');
}
function showPopupAnswer() {
    questionsAuthorsPopupAnswerContainer.classList.add('visible__popup');
}
function hidePopupAnswer() {
    questionsAuthorsPopupAnswerContainer.classList.remove('visible__popup');
}

function hidePopupClose() {
    questionsAuthorPopupClose.classList.remove('visible__popup');
}
questionsAuthorPage.addEventListener('click', (e) => {
    if (e.target.closest('.questions-authors__close')) {
        showPopupClose();
        
    }
    if (e.target.closest('.popup-close') || e.target.closest('.popup-button-cancel')) {
        hidePopupClose()
    }
    if (e.target.closest('.popup-button-yes')) {
        hideQuestionAuthorPage();
        showCategoriesPage();
        hidePopupClose();
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
    div.classList.add('question-buttons__wrapper');
    let img = document.createElement('img');
    img.classList.add('question__img');
    img.src = `../images/img/${array.questions[array.current].question}.jpg`
    questionsAuthorsContainer.append(img);
    questionsAuthorsContainer.append(div);
     
    let buttonsWrapper = document.createElement('div');
    buttonsWrapper.classList.add('question-buttons__wrapper');
    questionsAuthorsContainer.append(buttonsWrapper);
       
    array.questions[array.current].answers.forEach((item, index) => {
        let button = document.createElement('button');
        button.classList.add('button-answer');
        button.classList.add('button');
        button.textContent = `${array.questions[array.current].answers[index]}`
        buttonsWrapper.append(button);
        
        button.addEventListener('click', () => {
            if (array.questions[array.current].checkAnswer(index)) {
                button.classList.add('green__button');
                renderPopupAnswer(array,1,index)

            } else {
                button.classList.add('red__button');
                renderPopupAnswer(array,0,index)
            }
        })
    })
timer(timerProgress, 10, countTimer);
    
}

function renderPopupAnswer(array,isCorrect,index) {
    questionsAuthorsPopupAnswerContainer.innerHTML = "";
    let div = document.createElement('div');
    div.classList.add('popupAnswer__wrapper');
    let img = document.createElement('img');
    img.src = `../images/full/${array.questions[array.current].question}full.jpg`
    let span = document.createElement('span');
    span.classList.add('popupAnswer__marker')
    if (isCorrect) {
        span.classList.add('popupAnswer__marker-right');
    } else {
        span.classList.add('popupAnswer__marker-wrong');
    }
    let pName = document.createElement('p');
    pName.classList.add('popupAnswer__name');
    pName.textContent = `${array.questions[array.current].name}`;
    let pAuthor = document.createElement('p');
    pAuthor.textContent = `${array.questions[array.current].author}, ${array.questions[array.current].year}`
    pAuthor.classList.add('popupAnswer__author')
    let button = document.createElement('button');
    button.textContent = `Продолжить`
    button.classList.add('popupAnswer__button');
    button.classList.add('button');
    questionsAuthorsPopupAnswerContainer.append(div);
    div.append(span);
    div.append(img);
    questionsAuthorsPopupAnswerContainer.append(pName);
    questionsAuthorsPopupAnswerContainer.append(pAuthor);
    questionsAuthorsPopupAnswerContainer.append(button);
    document.querySelectorAll('.button-answer').forEach(e => {
        e.style.pointerEvents = 'none';
    })
    button.addEventListener('click', () => {
        array.scoreCount(index);
        hidePopupAnswer()
        createQuestionsAuthorPage(array)
    })
    showPopupAnswer()
}