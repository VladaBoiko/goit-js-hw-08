import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEO_DURATION = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(VIDEO_DURATION, data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem(VIDEO_DURATION));
