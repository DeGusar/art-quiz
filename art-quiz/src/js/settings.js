const buttonSettings = document.querySelector('.button-settings');
const pageStarting = document.querySelector('.starting');
const pageSettings = document.querySelector('.settings');
const buttonBack = document.querySelector('.settings__back-logo');



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