import { saves } from "./saves";

export function timer(element, time, textBlock) {
  if (saves.isTimer) {
    let start = 100;
    const interval = 100 / time;
    const intervalId = setInterval(() => {
      if (start < 0) {
        clearInterval(intervalId);
        element.value = 0;
        const event = new Event("change");
        element.dispatchEvent(event);
      } else {
        textBlock.textContent = `${time}`;
        element.value = start;
      }
      start -= interval;
      time -= 1;
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }
}
