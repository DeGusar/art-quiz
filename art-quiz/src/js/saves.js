import { volumeScale } from "./settingsPage";
import { checkboxTimer } from "./settingsPage";
import { timerInput } from "./settingsPage";

export class Saves {
    constructor(volumes,isTimer,duration) {
        this.isVolume = volumes;
        this.isTimer = isTimer;
        this.duration = duration;

    }
    save() {
        localStorage.setItem('settings0164', JSON.stringify(this));
    }
    load() {
        if (localStorage.getItem('settings0164')) {
            let recievedSettings = localStorage.getItem('settings0164');
            console.log(recievedSettings)
            let settings = JSON.parse(recievedSettings);
            
            this.isVolume = settings.isVolume;
            this.isTimer = settings.isTimer;
            this.duration = settings.duration

            volumeScale.value = this.isVolume * 100;
            checkboxTimer.checked = !!this.isTimer;
            timerInput.value = this.duration
            let event = new Event('change');
            volumeScale.dispatchEvent(event);
            checkboxTimer.dispatchEvent(event);

        }
    }
}
export let saves = new Saves(1, 1, 20);
window.addEventListener('load', saves.load);


