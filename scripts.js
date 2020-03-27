//Get the elements in the page

//first is the player
const player = document.querySelector('.player');
// console.log('hi i am the player')

//the video feed we are going to be using for the video player
const video = player.querySelector('.viewer');
// console.log(video);

// additional functions
let progress = player.querySelector('.progress');
let progressBar = player.querySelector('.progress__filled');
let toggle = player.querySelector('.toggle');
let skipButtons = player.querySelector('[data-skip');
let ranges = player.querySelector('.player__slider');

//toggle function
function togglePlay(){

  //if the video is paused
  if(video.paused){
    video.play()
  } else{
    video.pause();
  }
}

function updateButton(){
  let icon = this.paused ? '►' : '❚ ❚';
  console.log(icon)

  toggle.textContent = icon;
}

function skip(){
  console.log(this.dataset.skip);

                      // converts it into a true number
  video.currentTime += parseFloat(this.dataset.skip)
}


// event listeners
video.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);


toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button => {
  button.addEventListener('click', skip)
});