import { timer } from "./timerFunction";
import { showCategoriesPage } from "./categoriesPage";
import { showStartingPage } from "./startingPage";
import { category } from "./categoriesPage";
import { playSoundRight, playSoundWrong } from "./audio";
import { saves } from "./saves";
import { buttonAuthors } from "./startingPage";
import { buttonPictures } from "./startingPage";

export const timerProgress = document.querySelector('.timer__progress');
export const countTimer = document.querySelector('.time__count');
export const questionsAuthorPage = document.querySelector('.questions-authors');
export const questionsAuthorPopupClose = document.querySelector('.questions-authors__popupClose');
const questionsAuthorsContainer = document.querySelector('.questions-authors__container');
const questionsAuthorsPopupAnswerContainer = document.querySelector('.questions-authors__popupAnswer');
const questionsAuthorsPopupResultContainer = document.querySelector('.questions-authors__popupResult');
const questionsPicturesPopupResultContainer = document.querySelector('.questions-pictures__popupResult');
const closeQuestionsAuthorPage = document.querySelector('.popup-button-yes');
const resultScore = document.querySelector('.result__score');
const resultScorePictures = document.querySelector('.result__score_pictures');
const questionText = document.querySelector('.question__text');




function showPopupResultPictures() {
    questionsPicturesPopupResultContainer.classList.add('visible__popup')
}
function hidePopupResultPictures() {
    questionsPicturesPopupResultContainer.classList.remove('visible__popup')
}

function showPopupClose() {
    questionsAuthorPopupClose.classList.add('visible__popup');
}
function showPopupResult() {
    questionsAuthorsPopupResultContainer.classList.add('visible__popup')
}
function hidePopupResult() {
    questionsAuthorsPopupResultContainer.classList.remove('visible__popup')
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
        questionsAuthorsPopupAnswerContainer.innerHTML = "";
        hideQuestionAuthorPage();
        showCategoriesPage();
        hidePopupClose();
        hidePopupResult()
    }
    if (e.target.closest('.result__button')) {
        questionsAuthorsPopupAnswerContainer.innerHTML = "";
        hidePopupResult()
        showCategoriesPage();
        let newClick = new Event('click');
        buttonAuthors.dispatchEvent(newClick);
        
    }
    if (e.target.closest('.result-Pictures__button')) {
        questionsAuthorsPopupAnswerContainer.innerHTML = "";
        hidePopupResultPictures()
        showCategoriesPage();
        let newClick = new Event('click');
        buttonPictures.dispatchEvent(newClick);
        
    }
    
    
})

export function hideQuestionAuthorPage() {
    questionsAuthorPage.classList.add('hide');
}
export function showQuestionAuthorPage() {
    questionsAuthorPage.classList.remove('hide');
}
  


export function createQuestionsAuthorPage(array) {
    let canceltTimer = timer(timerProgress, saves.duration, countTimer);
   
    timerProgress.addEventListener('change', () => {
            if (timerProgress.value == 0 ) {
                playSoundWrong();
                renderPopupAnswer(array,0,0)
            }
    });
    function closePage() {
        canceltTimer();
        closeQuestionsAuthorPage.removeEventListener('click', closePage)
    }
    closeQuestionsAuthorPage.addEventListener('click', closePage);
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
          
            canceltTimer();
            if (array.questions[array.current].checkAnswer(index)) {
                button.classList.add('green__button');
                console.log(array.questions[array.current].checkAnswer(index))
                playSoundRight()
                renderPopupAnswer(array, 1, index)
                closeQuestionsAuthorPage.removeEventListener('click', closePage)

            } else {
                console.log(array.questions[array.current].checkAnswer(index))
                button.classList.add('red__button');
                playSoundWrong()
                renderPopupAnswer(array, 0, index)
                closeQuestionsAuthorPage.removeEventListener('click', closePage)
            }
        })
    })

    
}

export function renderPopupAnswer(array, isCorrect, index) {
   
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
        if (array.current < 9) {
            array.scoreCount(index);
            hidePopupAnswer()
            createQuestionsAuthorPage(array)
           
        
        } else {
            array.scoreCount(index);
            resultScore.textContent = `${array.score}/10`
            saves.scoreCategories[array.category] = array.score;
            saves.save()
            array.current = 0;
            hidePopupAnswer()
            showPopupResult()
           
        }
        
        
    })
    showPopupAnswer()
}


export function createQuestionsPicturesPage(array) {
    let canceltTimer = timer(timerProgress, saves.duration, countTimer);
   
    timerProgress.addEventListener('change', () => {
            if (timerProgress.value == 0 ) {
                playSoundWrong();
                renderPopupAnswerPictures(array,0,0)
            }
    });
    function closePage() {
        canceltTimer();
        closeQuestionsAuthorPage.removeEventListener('click', closePage)
    }
    questionText.textContent = `${array.questions[array.current].question}`
    closeQuestionsAuthorPage.addEventListener('click', closePage);
    questionsAuthorsContainer.innerHTML = '';
    let div = document.createElement('div');
    div.classList.add('wrap__images');
    questionsAuthorsContainer.append(div);
    
    array.questions[array.current].answers.forEach((item,index) => {
       
        let img = document.createElement('img');
        img.classList.add('img__picture-questions');
        img.src = `../images/img/${item}.jpg`
        div.append(img);
       
       
        img.addEventListener('click', () => {
          
            canceltTimer();
            if (array.questions[array.current].checkAnswer(index)) {
                img.classList.add('green__border');
                playSoundRight()
                renderPopupAnswerPictures(array, 1, index)
                closeQuestionsAuthorPage.removeEventListener('click', closePage)

            } else {
                img.classList.add('red__border');
                playSoundWrong()
                renderPopupAnswerPictures(array, 0, index)
                closeQuestionsAuthorPage.removeEventListener('click', closePage)
            }
        })
    })

    
}

export function renderPopupAnswerPictures(array, isCorrect, index) {
   
    questionsAuthorsPopupAnswerContainer.innerHTML = "";
    let div = document.createElement('div');
    div.classList.add('popupAnswer__wrapper');
    let img = document.createElement('img');
    img.src = `../images/full/${array.questions[array.current].rightAnswer}full.jpg`
       
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
    document.querySelectorAll('.img__picture-questions').forEach(e => {
        e.style.pointerEvents = 'none';
    })
    button.addEventListener('click', () => {
        if (array.current < 9) {
            array.scoreCount(index);
            hidePopupAnswer()
            createQuestionsPicturesPage(array)
           
        
        } else {
            array.scoreCount(index);
            resultScorePictures.textContent = `${array.score}/10`
            saves.scoreCategoriesPictureType[array.category] = array.score;
            saves.save()
            array.current = 0;
            hidePopupAnswer()
            showPopupResultPictures()
           
        }
        
        
    })
    showPopupAnswer()
}