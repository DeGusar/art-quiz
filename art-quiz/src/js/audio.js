let soundRight = document.querySelector('.audioRight');
let soundWrong = document.querySelector('.audioWrong');
let soundResult = document.querySelector('.audioResult');
export function playSoundRight() {
    soundRight.play();
}
export function playSoundWrong() {
    soundWrong.play();
 }
export function playSoundResult() {
    console.log('play')
    soundResult.play();
 }