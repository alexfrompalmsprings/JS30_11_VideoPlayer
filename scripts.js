/* Get Our Elements */

//first is the player
const player = document.querySelector('.player');
// console.log('hi i am the player')

//the video feed we are going to be using for the video player
const video = player.querySelector('.viewer');
// console.log(video);


let progress = player.querySelector('.progress');
let progressBar = player.querySelector('.progress__filled');
let toggle = player.querySelector('.toggle');
let skipButtons = player.querySelectorAll('[data-skip]');
let ranges = player.querySelectorAll('.player__slider');

//toggle function
function togglePlay(){

  //if the video is paused
  if(video.paused){
    video.play()
  } else{
    video.pause();
  }
}

function updateButton() {
  let icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);

  toggle.textContent = icon;
}

function skip() {
  console.log(this.dataset.skip);


 video.currentTime += parseFloat(this.dataset.skip);
}

function updateVideoRange(){
  console.log(this.value)

  video[this.name] = this.value;
}

function handleProgress() {
  let percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
  // console.log(e)
              // (where did we drag it / the width) of the bar * DURATION of the video
  let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// event listeners
video.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

//progressBAR
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => {
  range.addEventListener('change', updateVideoRange)
});

ranges.forEach(range => {
  range.addEventListener('mousemove', updateVideoRange)
});


//allow the user to drag the bar
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
