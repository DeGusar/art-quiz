const { default: images } = require("../images");

let authors = []
images.forEach(item => authors.push(item.author))
let authorSet = new Set(authors)
authorSet = Array.from(authorSet)

function getRandom(min, max, dontRepeat) {
    let result = authorSet[Math.round(Math.random() * (max - min) + min)];
    if (dontRepeat.includes(result)) {
       return getRandom(min, max, dontRepeat)
    } else {
       return result
   }
}

function getRandomPicture(min, max, dontRepeat) {
    let result = Math.round(Math.random() * (max - min) + min);
    if (dontRepeat.includes(result)) {
        return getRandomPicture(min, max, dontRepeat)
     } else {
        return result
    }
}

class Question {
    constructor(index) {
        this.question =images[index].imageNum;
        this.rightAnswer = images[this.question].author;
        this.firstWrong = getRandom(0, authorSet.length - 1,[this.rightAnswer]);
        this.secondWrong = getRandom(0, authorSet.length - 1, [this.rightAnswer, this.firstWrong]);
        this.thirdWrong = getRandom(0, authorSet.length - 1,[this.rightAnswer, this.firstWrong, this.secondWrong]);
    }
        
}

class QuestionPictures {
    constructor(index) {
        this.question = images[index].author;
        this.rightAnswer = +images[index].imageNum;
        this.firstWrong = getRandomPicture(0, images.length - 1, [+this.rightAnswer])
        this.secondWrong = getRandomPicture(0, images.length - 1, [+this.rightAnswer, +this.firstWrong]);
        this.thirdWrong = getRandomPicture(0, images.length - 1,[+this.rightAnswer, +this.firstWrong, +this.secondWrong]);
    }
    
}

let questions = [];
for(let i=0; i<120;i++) {
   questions.push(new Question(i)) 
};

for (let i = 120; i < images.length; i++) {
    questions.push(new QuestionPictures(i))
};

class Category {
    constructor(category, questions) {
        this.category = category;
        this.questions = questions.slice(category*10,category*10+10)
        this.score = 0;
        this.current = 0;
    }
    Next() {
        
        if (this.current > 9) {
            this.End()
        } else {
            console.log(this.questions[this.current])
            return this.current++;
        }
    }
    End() {
        console.log('End')
    }

       
}

let category = [];
for (let i = 0; i < 12; i++) {
    category.push(new Category(i, questions));
}
for (let i = 12; i < 24; i++) {
    category.push(new Category(i, questions))
}

console.group('Category');
console.log(category);
console.groupEnd();