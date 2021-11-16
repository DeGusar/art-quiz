import { saves } from "./saves";

const buttonSettings = document.querySelector('.button-settings');
export const pageStarting = document.querySelector('.starting');
const pageSettings = document.querySelector('.settings');
const buttonBack = document.querySelector('.settings__back-logo');
export  const volumeScale = document.querySelector('.settings__progress');
const audio = document.querySelectorAll('.audio');
const volumeMute = document.querySelector('.mute');
const volumeUnmute = document.querySelector('.unmute');
const switcherStatus = document.querySelector('.switcher-status');
export const timerInput = document.querySelector('.timer__input');
const checkBox = document.querySelector('.checkbox');
const timerWrapper = document.querySelector('.time-buttons__wrapper');
const buttonSave = document.querySelector('.button__save');
const buttonDefault = document.querySelector('.button__default');

export const checkboxTimer = document.getElementById('status-timer');




buttonSettings.addEventListener('click', openSettings);
function openSettings() {
    pageStarting.classList.add('hide');
    pageSettings.classList.remove('hide');
    
}
buttonDefault.addEventListener('click', () => {
    saves.default()
})

buttonSave.addEventListener('click', () => {
    saves.isVolume = volumeScale.value / 100;
    saves.isTimer = +checkboxTimer.checked;
    saves.duration = timerInput.value
    saves.save();
    console.log('saved');
})

checkBox.addEventListener('change', () => {
    if (!checkBox.checked) {
        timerWrapper.classList.add('unclickable')
        timerInput.value = 0;
    } else {
        timerWrapper.classList.remove('unclickable')
 } 
})

buttonBack.addEventListener('click', closeSettings);
function closeSettings() {
    pageStarting.classList.remove('hide');
    pageSettings.classList.add('hide');
}

function audioChangeVolume() {
    let volume = volumeScale.value / 100;
    audio.forEach(elem => {
        elem.volume = volume;
    })
   
    volumeScale.style.background = `linear-gradient(to right, rgb(3, 168, 3) 0%, rgb(3, 168, 3) ${volume*100}%, #A4A4A4 ${volume*100}%, #A4A4A4 100%)`
}
volumeScale.addEventListener('change', audioChangeVolume);


function audioMute() {
    audio.forEach(elem => {
        elem.volume = 0;
    })
    volumeScale.value = 0;
    volumeScale.style.background = `linear-gradient(to right, rgb(3, 168, 3) 0%, rgb(3, 168, 3) ${volumeScale.value*100}%, #A4A4A4 ${volumeScale.value*100}%, #A4A4A4 100%)`
}
volumeMute.addEventListener('click', audioMute);
function audioUnmute() {
    audio.forEach(elem => {
        elem.volume = 1;
    })
    volumeScale.value = 100;
    volumeScale.style.background = `linear-gradient(to right, rgb(3, 168, 3) 100%, rgb(3, 168, 3) ${volumeScale.value}%, #A4A4A4 ${volumeScale.value}%, #A4A4A4 100%)`
}
volumeUnmute.addEventListener('click', audioUnmute);

checkboxTimer.addEventListener('change', () => {
    if (checkboxTimer.checked) {
        switcherStatus.textContent = 'On'
    } else {
        switcherStatus.textContent = 'Off'
    }
})



