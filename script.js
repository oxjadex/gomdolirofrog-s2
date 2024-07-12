const audioContainer = document.querySelector('#audio');
const playBtn = document.querySelector(".music-on");
let playState = 0;

function playPause() {
  if (playState) {
    document.getElementById("audio-play").style.display = "block";
    document.getElementById("audio-pause").style.display = "none";
    playState = 0;
    audioContainer.pause(); 
  } else {
    document.getElementById("audio-play").style.display = "none";
    document.getElementById("audio-pause").style.display = "block";
    playState = 1;
    audioContainer.loop = false;
    audioContainer.play();
  }
}

playBtn.addEventListener("click", playPause);
