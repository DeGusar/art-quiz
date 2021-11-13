import { Question } from "./questionsAuthors";
import { QuestionPictures } from "./questionsPictures";
import images from "../images";

 export class Category {
    constructor(category, questions) {
        this.category = category;
        this.questions = questions.slice(category*10,category*10+10)
        this.score = 0;
        this.current = 0;
    }
   
    next() {
        
        if (this.current > 9) {
            this.end()
        } else {
           
            return this.current++;
        }
    }

    score(index) {
        let value = this.questions[this.current].checkAnswer(index);
        this.score += value;
        let correct = -1;
        if (value >= 1) {
            correct = index
        }
        else {
            for (let i = 0; i < this.questions[this.current].answers.length; i++) {
                if (this.questions[this.current].answers[i] === this.questions[this.current].rightAnswer) {
                    correct = i;
                    break;
                }
            }
        }
        this.next()
        return correct
    }
    
    end() {
        console.log('End')
    }

       
}

