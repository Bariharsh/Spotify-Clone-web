console.log("Welcome to spotify")

// initialize the variables
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Salam-e-ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Ceilo", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Janji - Heroes Tonight (feat. Johnning) [NCS Release]", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Let Me Love You - Justine Beiber", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji - Heroes Tonight (feat. Johnning) [NCS Release]", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Perfect - Ed Sheeran", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Senorita - Shawn Mendes", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Desparado - rihanna", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Let her go - (feat.Ed sheeran, Passenger", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "The Batman - Michael Giacchino", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
]

songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})
// audioElement.play();

// handle play/pause click
masterplay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})

// listen to events
audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;

})

const makeallplays = () => {
    Array.from(document.getElementsByClassName("songItemplay")).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}

// javascript for container list play/pause icons
Array.from(document.getElementsByClassName("songItemplay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/$(index+1).mp3';
        mastersongname.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
        else {
            audioElement.pause();
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    })
})

// javascipt for next
document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 9) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioElement.src = 'songs/$(index+1).mp3';
    mastersongname.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

// javascript for previous
document.getElementById('next').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioElement.src = 'songs/$(index+1).mp3';
    mastersongname.innerText = songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})