import { renderPopupAnswer } from "./questionsAuthorsPage";
export function timer(element, time, textBlock) {
    
    let start = 100
    let interval =100/time;
    let intervalId = setInterval(() => {
        if (start < 0 ) {
            clearInterval(intervalId);
            element.value = 0;
            let event = new Event('change');
            element.dispatchEvent(event);
        } else {
            textBlock.textContent = `${time}`;
            element.value = start;
        }
        start = start - interval;
        time--
       
        
    }, 1000);
    return () => {
        clearInterval(intervalId)
    };
}
