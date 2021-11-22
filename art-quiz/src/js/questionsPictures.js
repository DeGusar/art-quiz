import { images } from "../imagesEn";
import { shuffle } from "./questionsAuthors";

let allAnswers = [];

    images.forEach((element) => {
      allAnswers.push([element.author, element.imageNum]);
    });

let possibleAnswers = [];
function allRightAnswers(author) {
    possibleAnswers = []
    for (let i = 0; i < allAnswers.length; i++) {
        if (allAnswers[i][0] === author) {
          possibleAnswers.push(+allAnswers[i][1]);
        }
    }
   return possibleAnswers
}



function getRandomPicture(min, max, dontRepeat) {

    let result = Math.round(Math.random() * (max - min) + min);
    if (dontRepeat.includes(result)) {
        return getRandomPicture(min, max, dontRepeat)
     } else {
        return result
    }
}
export class QuestionPictures {
    constructor(index) {
        this.question = `What artwork was painted by ${images[index].author}?`;
        this.questionIndex = index;
        this.rightAnswer = +images[index].imageNum;
        this.firstWrong = getRandomPicture(0, images.length - 1, [this.rightAnswer].concat(allRightAnswers(images[index].author)))
        this.secondWrong = getRandomPicture(0, images.length - 1, [this.rightAnswer, this.firstWrong].concat(allRightAnswers(images[index].author)));
        this.thirdWrong = getRandomPicture(0, images.length - 1, [this.rightAnswer, this.firstWrong, this.secondWrong].concat(allRightAnswers(images[index].author)));
        this.answers = shuffle([this.rightAnswer, this.firstWrong, this.secondWrong, this.thirdWrong]);
        this.year = images[index].year;
        this.name = images[index].name;
        this.author = images[index].author;
    }

    checkAnswer(index) {
        if (this.answers[index] === this.rightAnswer) {
                return 1
            } else return 0
        }
}