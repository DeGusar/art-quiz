import { timer } from "./timerFunction";
import { showCategoriesPage } from "./categoriesPage";
import { showStartingPage } from "./startingPage";
import { category } from "./categoriesPage";
import { playSoundRight, playSoundWrong } from "./audio";
import { saves } from "./saves";
import { buttonAuthors } from "./startingPage";
import { buttonPictures } from "./startingPage";
import { playSoundResult } from "./audio";
import { pageCategories } from "./categoriesPage";
import { pageStarting } from "./settingsPage";

export const timerProgress = document.querySelector('.timer__progress');
export const countTimer = document.querySelector('.time__count');
export const questionsAuthorPage = document.querySelector('.questions-authors');
export const questionsAuthorPopupClose = document.querySelector('.questions-authors__popupClose');
const questionsAuthorsContainer = document.querySelector('.questions-authors__container');
const questionsAuthorsPopupAnswerContainer = document.querySelector('.questions-authors__popupAnswer');
const questionsAuthorsPopupResultContainer = document.querySelector('.questions-authors__popupResult');
const questionsPicturesPopupResultContainer = document.querySelector('.questions-pictures__popupResult');
const closeQuestionsAuthorPage = document.querySelector('.popup-button-yes');
const cancelQuestionsAuthorPage = document.querySelector('.popup-button-cancel');
const resultScore = document.querySelector('.result__score');
const resultScorePictures = document.querySelector('.result__score_pictures');
const questionText = document.querySelector('.question__text');

function showPopupResultPictures() {
    questionsPicturesPopupResultContainer.classList.add('visible__popup');
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
    questionsAuthorsPopupAnswerContainer.classList.remove('visible__popup')
    questionsAuthorsPopupAnswerContainer.classList.add('unvisible__popup');
}

function hidePopupClose() {
    questionsAuthorPopupClose.classList.remove('visible__popup');
}
questionsAuthorPage.addEventListener('click', (e) => {
    if (e.target.closest('.questions-authors__close')) {
        showPopupClose();
    }
    if (e.target.closest('.popup-close')) {
        hidePopupClose()
    }
    if (e.target.closest('.popup-button-yes')) {
        questionsAuthorsContainer.innerHTML = '';
        questionsAuthorsPopupAnswerContainer.innerHTML = "";
        questionsAuthorsPopupAnswerContainer.classList.remove('unvisible__popup');
        pageCategories.classList.add('pt-page-ontop')
        pageCategories.classList.add('pt-page-current')
        pageCategories.classList.add('pt-page-rotateSlideIn');
        window.setTimeout(() => {
            questionsAuthorPage.classList.remove('pt-page-current');
            pageCategories.classList.remove('pt-page-ontop')
            pageCategories.classList.remove('pt-page-rotateSlideIn');
        }, 1000);
        hidePopupClose();
        hidePopupResult()
        hidePopupAnswer()
    }
    if (e.target.closest('.popup-button-cancel')) {
        questionsAuthorsContainer.innerHTML = '';
        questionsAuthorsPopupAnswerContainer.innerHTML = "";
        questionsAuthorsPopupAnswerContainer.classList.remove('unvisible__popup');
        pageStarting.classList.add('pt-page-ontop')
        pageStarting.classList.add('pt-page-current')
        pageStarting.classList.add('pt-page-rotateSlideIn');
        window.setTimeout(() => {
            questionsAuthorPage.classList.remove('pt-page-current');
            pageStarting.classList.remove('pt-page-ontop')
            pageStarting.classList.remove('pt-page-rotateSlideIn');
        }, 1000);
        hidePopupClose();
        hidePopupResult()
        hidePopupAnswer()
}
    if (e.target.closest('.result__button')) {
        questionsAuthorsPopupAnswerContainer.innerHTML = "";
        questionsAuthorsPopupAnswerContainer.classList.remove('unvisible__popup');
        window.setTimeout(() => questionsAuthorPage.classList.remove('pt-page-current'),1000)
        hidePopupResult()
        let newClick = new Event('click');
        buttonAuthors.dispatchEvent(newClick);
    }
    if (e.target.closest('.result-Pictures__button')) {
        questionsAuthorsPopupAnswerContainer.innerHTML = "";
        questionsAuthorsPopupAnswerContainer.classList.remove('unvisible__popup');
        hidePopupResultPictures()
        window.setTimeout(() => questionsAuthorPage.classList.remove('pt-page-current'),1000)
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
    questionText.textContent = `Who is the author of this picture?`
        let canceltTimer = timer(timerProgress, saves.duration, countTimer);
        timerProgress.addEventListener('change', () => {
            if (timerProgress.value == 0) {
                playSoundWrong();
                renderPopupAnswer(array, 0, 0)
            }
        });

    function closePage() {
            canceltTimer();
            closeQuestionsAuthorPage.removeEventListener('click', closePage);
            cancelQuestionsAuthorPage.removeEventListener('click', closePage);
        }

    if (saves.isTimer) {
        closeQuestionsAuthorPage.addEventListener('click', closePage);
        cancelQuestionsAuthorPage.addEventListener('click', closePage);
        }
    questionsAuthorsContainer.innerHTML = '';
    let div = document.createElement('div');
    div.classList.add('question-buttons__wrapper');
    let img = document.createElement('img');
    img.classList.add('question__img');
    img.src = `./images/full/${array.questions[array.current].question}full.jpg`
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
            if (saves.isTimer) {
                canceltTimer();
            }
            if (array.questions[array.current].checkAnswer(index)) {
                button.classList.add('green__button');
                playSoundRight()
                renderPopupAnswer(array, 1, index);
                saves.questionsAuthorsСorrectness[array.questions[array.current].questionIndex] = 1;
                closeQuestionsAuthorPage.removeEventListener('click', closePage)
                cancelQuestionsAuthorPage.removeEventListener('click', closePage)
            } else {
                button.classList.add('red__button');
                playSoundWrong()
                renderPopupAnswer(array, 0, index)
                saves.questionsAuthorsСorrectness[array.questions[array.current].questionIndex] = 0;
                closeQuestionsAuthorPage.removeEventListener('click', closePage)
                cancelQuestionsAuthorPage.removeEventListener('click', closePage)
            }
        })
    })
}

export function renderPopupAnswer(array, isCorrect, index) {
    questionsAuthorsPopupAnswerContainer.innerHTML = "";
    let div = document.createElement('div');
    div.classList.add('popupAnswer__wrapper');
    let img = document.createElement('img');
    img.src = `./images/full/${array.questions[array.current].question}full.jpg`
    let span = document.createElement('span');
    let link_url = document.createElement("a");
    link_url.classList.add('download');
    link_url.download = img.src.substring((img.src.lastIndexOf("/") + 1), img.src.length);
    link_url.href = img.src;
    div.append(link_url);
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
    button.textContent = `Continue`
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
            resultScore.textContent = `${array.score}/10`;
            saves.scoreCategories[array.category] = array.score;
            saves.save()
            array.current = 0;
            hidePopupAnswer()
            showPopupResult()
            playSoundResult()
        }
    })
    showPopupAnswer()
}

export function createQuestionsPicturesPage(array) {
    let canceltTimer = timer(timerProgress, saves.duration, countTimer);
    timerProgress.addEventListener('change', () => {
            if (timerProgress.value == 0) {
                playSoundWrong();
                renderPopupAnswerPictures(array, 0, 0)
            }
        });
    function closePage() {
        canceltTimer();
        closeQuestionsAuthorPage.removeEventListener('click', closePage)
        cancelQuestionsAuthorPage.removeEventListener('click', closePage)
    }
    if (saves.isTimer) {
        closeQuestionsAuthorPage.addEventListener('click', closePage);
        cancelQuestionsAuthorPage.addEventListener('click', closePage);
    }
    questionText.textContent = `${array.questions[array.current].question}`
    questionsAuthorsContainer.innerHTML = '';
    let div = document.createElement('div');
    div.classList.add('wrap__images');
    questionsAuthorsContainer.append(div);
    array.questions[array.current].answers.forEach((item,index) => {
        let img = document.createElement('img');
        img.classList.add('img__picture-questions');
        img.src = `./images/img/${item}.jpg`
        div.append(img);
        img.addEventListener('click', () => {
            if (saves.isTimer) {
                canceltTimer();
            }
            if (array.questions[array.current].checkAnswer(index)) {
                img.classList.add('green__border');
                playSoundRight()
                renderPopupAnswerPictures(array, 1, index)
                saves.questionsPicturesСorrectness[array.questions[array.current].questionIndex-120] = 1;
                closeQuestionsAuthorPage.removeEventListener('click', closePage)
                cancelQuestionsAuthorPage.removeEventListener('click', closePage)
            } else {
                img.classList.add('red__border');
                playSoundWrong()
                renderPopupAnswerPictures(array, 0, index)
                saves.questionsPicturesСorrectness[array.questions[array.current].questionIndex-120] = 0;
                closeQuestionsAuthorPage.removeEventListener('click', closePage)
                cancelQuestionsAuthorPage.removeEventListener('click', closePage)
            }
        })
    })
}

export function renderPopupAnswerPictures(array, isCorrect, index) {
    questionsAuthorsPopupAnswerContainer.innerHTML = "";
    let div = document.createElement('div');
    div.classList.add('popupAnswer__wrapper');
    let img = document.createElement('img');
    img.src = `./images/full/${array.questions[array.current].rightAnswer}full.jpg`
    let link_url = document.createElement("a");
    link_url.classList.add('download');
    link_url.download = img.src.substring((img.src.lastIndexOf("/") + 1), img.src.length);
    link_url.href = img.src;
    div.append(link_url);
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
    button.textContent = `Continue`
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
            playSoundResult()
            hidePopupAnswer()
            showPopupResultPictures()
        }
    })
    showPopupAnswer()
}