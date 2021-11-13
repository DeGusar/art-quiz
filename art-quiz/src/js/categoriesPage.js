export const categoriesWrapper = document.querySelector('.categories-images__wrapper');
export const pageCategories = document.querySelector('.categories')

export function createCategories(array,begin,end) {
    for (begin; begin < end; begin++) {
        let img = document.createElement('img');
        let div = document.createElement('div');
        img.src = `../images/img/${array[begin].questions[0].question}.jpg`
        categoriesWrapper.append(div);
        div.append(img);
    }
}

export function showCategories() {
    pageCategories.classList.remove('hide');
}