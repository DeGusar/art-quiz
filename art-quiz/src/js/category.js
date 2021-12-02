import { Question } from './questionsAuthors';
import { QuestionPictures } from './questionsPictures';

export class Category {
  constructor(category, questions) {
    this.category = category;
    this.questions = questions.slice(category * 10, category * 10 + 10);
    this.score = 0;
    this.current = 0;
  }

  next() {
    if (this.current >= 9) {
      return this.end();
    }
    this.current += 1;
    return this.current;
  }

  scoreCount(index) {
    const value = this.questions[this.current].checkAnswer(index);
    this.score += value;
    this.next();
  }

  end() {
  }
}
