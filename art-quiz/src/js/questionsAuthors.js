import { images } from '../imagesEn';

const authors = [];
images.forEach((item) => authors.push(item.author));
const authorSet = new Set(authors);
const authorArray = Array.from(authorSet);

function getRandom(min, max, dontRepeat) {
  const result = authorArray[Math.round(Math.random() * (max - min) + min)];
  if (dontRepeat.includes(result)) {
    return getRandom(min, max, dontRepeat);
  }
  return result;
}

export function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
export class Question {
  constructor(index) {
    this.question = images[index].imageNum;
    this.questionIndex = index;
    this.rightAnswer = images[this.question].author;
    this.firstWrong = getRandom(0, authorArray.length - 1, [this.rightAnswer]);
    this.secondWrong = getRandom(0, authorArray.length - 1, [this.rightAnswer, this.firstWrong]);
    this.thirdWrong = getRandom(
      0,
      authorArray.length - 1,
      [this.rightAnswer, this.firstWrong, this.secondWrong],
    );
    this.answers = shuffle([this.rightAnswer, this.firstWrong, this.secondWrong, this.thirdWrong]);
    this.year = images[this.question].year;
    this.name = images[this.question].name;
    this.author = images[this.question].author;
  }

  checkAnswer(index) {
    if (this.answers[index] === this.rightAnswer) {
      return 1;
    } return 0;
  }
}
