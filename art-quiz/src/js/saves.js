import { volumeScale } from "./settingsPage";
import { checkboxTimer } from "./settingsPage";
import { timerInput } from "./settingsPage";

export class Saves {
    constructor(volumes,isTimer,duration,) {
        this.isVolume = volumes;
        this.isTimer = isTimer;
        this.duration = duration;
        this.scoreCategories = Array(12).fill(null);
        this.scoreCategoriesPictureType = Array(12).fill(null);
        this.questionsAuthorsСorrectness = Array(120).fill(0);
        this.questionsPicturesСorrectness = Array(120).fill(0);
    }
    save() {
        localStorage.setItem('settings0164', JSON.stringify(this));
    }
    load() {
        if (localStorage.getItem('settings0164')) {
            let recievedSettings = localStorage.getItem('settings0164');
            let settings = JSON.parse(recievedSettings);
            saves.isVolume = settings.isVolume;
            saves.isTimer = settings.isTimer;
            saves.duration = settings.duration
            saves.scoreCategories = settings.scoreCategories;
            saves.scoreCategoriesPictureType = settings.scoreCategoriesPictureType;
            saves.questionsAuthorsСorrectness = settings.questionsAuthorsСorrectness;
            saves.questionsPicturesСorrectness = settings.questionsPicturesСorrectness;
            volumeScale.value = saves.isVolume * 100;
            checkboxTimer.checked = !!saves.isTimer;
            timerInput.value = saves.duration
            let event = new Event('change');
            volumeScale.dispatchEvent(event);
            checkboxTimer.dispatchEvent(event);
        }
    }
    default() {
        saves.isVolume = 1;
        saves.isTimer = 1;
        saves.duration = 10;
        saves.save();
        saves.load()
    }
}
export let saves = new Saves(0.5, 1, 10);
window.addEventListener('load', saves.load);


