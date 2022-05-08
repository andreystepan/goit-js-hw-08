 const throttle = require('lodash.throttle');
import Player from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";
player.on('timeupdate', throttle(onPlay, 1000));
player.on('loaded', pageReload);

function onPlay(e) {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(e.seconds))
 
};

function pageReload() {   
    const seconds = localStorage.getItem(LOCALSTORAGE_KEY);
    if (seconds) {
        const dataSeconds = JSON.parse(seconds);
        player.setCurrentTime(dataSeconds)
    };
}
