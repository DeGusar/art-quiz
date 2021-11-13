const { default: images } = require("../images");
import { shuffle } from "./questionsAuthors";

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
        this.question = `Какую картину написал ${images[index].author}?`;
        this.rightAnswer = +images[index].imageNum;
        this.firstWrong = getRandomPicture(0, images.length - 1, [+this.rightAnswer])
        this.secondWrong = getRandomPicture(0, images.length - 1, [+this.rightAnswer, +this.firstWrong]);
        this.thirdWrong = getRandomPicture(0, images.length - 1, [+this.rightAnswer, +this.firstWrong, +this.secondWrong]);
        this.answers = shuffle([this.rightAnswer, this.firstWrong, this.secondWrong, this.thirdWrong]);
    }

    checkAnswer(index) {
        if (this.answers[index] === this.rightAnswer) {
                return 1
            } else return 0
        }
    
}