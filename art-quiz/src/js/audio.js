const soundRight = document.querySelector('.audioRight');
const soundWrong = document.querySelector('.audioWrong');
const soundResult = document.querySelector('.audioResult');
export function playSoundRight() {
  soundRight.play();
}
export function playSoundWrong() {
  soundWrong.play();
}
export function playSoundResult() {
  soundResult.play();
}
