import { namesCategories } from "./categoriesPage";
import { saves } from "./saves";

const resultsWrapper = document.querySelector('.results-images__wrapper');
const resultsPage = document.querySelector('.results');

export function showResultPage() {
    resultsPage.classList.remove('hide');
}

export function createResultPage(array) {
    resultsWrapper.innerHTML = '';
        for (let i = 0; i < array.questions.length; i++) {
            let div = document.createElement('div');
            div.classList.add('resultsImgWrap');

            let pName = document.createElement('p');
            let pYear = document.createElement('p');
            let pAuthor = document.createElement('p');

            pName.textContent = `${array.questions[i].name}`;
            pAuthor.textContent = `${array.questions[i].author}`;
            pYear.textContent = `${array.questions[i].year}`;
           
            let fliper = document.createElement('div');
            let back = document.createElement('div');
            let front = document.createElement('div');
            fliper.classList.add('flipper');
            back.classList.add('back');
            
            front.classList.add('front');
            let divTitleWrap = document.createElement('div');
            divTitleWrap.classList.add('categoryTitleWrap');
            let nameCategory = document.createElement('p');
            nameCategory.classList.add('nameCategory');
            nameCategory.textContent = `${namesCategories[array.category]}`
            resultsWrapper.append(div);
            let img = document.createElement('img');
            let imgInv = document.createElement('img');

            img.classList.add('resultCard')
            imgInv.classList.add('invisible')
            console.log(array.score);
        if (saves.questionsAuthorsСorrectness[array.category*10+i] == 0) {
            img.classList.add('grey')
        }
        img.src = `../images/img/${array.questions[i].question}.jpg`
        imgInv.src = `../images/img/${array.questions[i].question}.jpg`
            div.append(divTitleWrap);
            div.append(fliper);
            fliper.append(front);
            fliper.append(back);
            back.append(pName);
            back.append(pAuthor);
            back.append(pYear);
            front.append(img);
           fliper.append(imgInv);
           
        divTitleWrap.append(nameCategory);
        
            div.addEventListener('touchstart', () => {
                div.classList.toggle("hover");
        })
        
        
    }
}

export function createResultPagePictures(array) {
    resultsWrapper.innerHTML = '';
        for (let i = 0; i < array.questions.length; i++) {
            let div = document.createElement('div');
            let fliper = document.createElement('div');
            let back = document.createElement('div');
            let front = document.createElement('div');

            let pName = document.createElement('p');
            let pYear = document.createElement('p');
            let pAuthor = document.createElement('p');

            pName.textContent = `${array.questions[i].name}`;
            pAuthor.textContent = `${array.questions[i].author}`;
            pYear.textContent = `${array.questions[i].year}`;

            div.classList.add('resultsImgWrap');
            fliper.classList.add('flipper');
            back.classList.add('back');
            front.classList.add('front');
            let divTitleWrap = document.createElement('div');
            divTitleWrap.classList.add('categoryTitleWrap');
            let nameCategory = document.createElement('p');
            nameCategory.classList.add('nameCategory');
            nameCategory.textContent = `${namesCategories[array.category]}`
            resultsWrapper.append(div);
            let img = document.createElement('img');
            let imgInv = document.createElement('img');
            img.classList.add('resultCard')
            imgInv.classList.add('invisible')
            console.log(array.score);
        if (saves.questionsPicturesСorrectness[(array.category)*10+i] == 0) {
            img.classList.add('grey')
        }
            img.src = `../images/img/${array.questions[i].question}.jpg`
            imgInv.src = `../images/img/${array.questions[i].question}.jpg`
        div.append(divTitleWrap);
            div.append(fliper);
            fliper.append(front);
            fliper.append(back);
            back.append(pName);
            back.append(pAuthor);
            back.append(pYear);
            divTitleWrap.append(nameCategory);
            fliper.append(imgInv);
            front.append(img);
            div.addEventListener('touchstart', () => {
                div.classList.toggle("hover");
            })
    }
}