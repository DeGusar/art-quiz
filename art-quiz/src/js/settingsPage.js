const buttonSettings = document.querySelector('.button-settings');
export const pageStarting = document.querySelector('.starting');
const pageSettings = document.querySelector('.settings');
const buttonBack = document.querySelector('.settings__back-logo');
const volumeScale = document.querySelector('.settings__progress');
const audio = document.querySelector('.audio');
const volumeMute = document.querySelector('.mute');
const volumeUnmute = document.querySelector('.unmute');
const switcherStatus = document.querySelector('.switcher-status');

const checkboxTimer = document.getElementById('status-timer');





buttonSettings.addEventListener('click', openSettings);
function openSettings() {
    pageStarting.classList.add('hide');
    pageSettings.classList.remove('hide');
    
}

buttonBack.addEventListener('click', closeSettings);
function closeSettings() {
    pageStarting.classList.remove('hide');
    pageSettings.classList.add('hide');
}

function audioChangeVolume() {
    let volume = volumeScale.value / 100;
    audio.volume = volume;
    volumeScale.style.background = `linear-gradient(to right, rgb(3, 168, 3) 0%, rgb(3, 168, 3) ${audio.volume*100}%, #A4A4A4 ${audio.volume*100}%, #A4A4A4 100%)`
}
volumeScale.addEventListener('change', audioChangeVolume);


function audioMute() {
    audio.volume = 0;
    volumeScale.value = 0;
    volumeScale.style.background = `linear-gradient(to right, rgb(3, 168, 3) 0%, rgb(3, 168, 3) ${audio.volume*100}%, #A4A4A4 ${audio.volume*100}%, #A4A4A4 100%)`
}
volumeMute.addEventListener('click', audioMute);
function audioUnmute() {
    audio.volume = 1;
    volumeScale.value = 100;
    volumeScale.style.background = `linear-gradient(to right, rgb(3, 168, 3) 100%, rgb(3, 168, 3) ${audio.volume*100}%, #A4A4A4 ${audio.volume*100}%, #A4A4A4 100%)`
}
volumeUnmute.addEventListener('click', audioUnmute);

checkboxTimer.addEventListener('change', () => {
    if (checkboxTimer.checked) {
        switcherStatus.textContent = 'On'
    } else {
        switcherStatus.textContent = 'Off'
    }
})