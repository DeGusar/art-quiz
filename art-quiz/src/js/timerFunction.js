export function timer(element, time, textBlock) {
    let start = 100
    let interval = Math.round(100/time);
    let intervalId = setInterval(() => {
        if (start < 0) {
            clearInterval(intervalId);
            element.value = 0;
        } else {
            textBlock.textContent = `${time}`;
            element.value = start;
        }
        start = start - interval;
        time--
        
    }, 1000);
}