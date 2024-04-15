/*---------------------------------------------------------------*/
let selectedIndex = 0;
let SelectedSong = 0;

// Playlist data
let playlist = [
  {
    name: "The Refreshner !!",
    img: "https://i.scdn.co/image/ab67706c0000dec50334641284e9b20c68ae05f0",
    creator: "Aayush Adhikari",
  },
  {
    name: "Space-mate",
    img: "https://i.scdn.co/image/ab67706c0000dec526e5f5103878e538f7c9d73c",
    creator: "Aayush Adhikari",
  },
  {
    name: "Perfect Songs!",
    img: "https://mosaic.scdn.co/60/ab67616d00001e026cfe31d4e5d58710add69045ab67616d00001e0296bc7d5bd0b6488de76598abab67616d00001e02f8f2bc4006346cb97bb8b74fab67616d00001e02fae65e5717bdab6ec896cc15",
    creator: "Aayush Adhikari",
  },
  {
    name: "..... 🎵 Music",
    img: "https://mosaic.scdn.co/60/ab67616d00001e0218b8088fe0c3dbf78398b55aab67616d00001e025675e83f707f1d7271e5cf8aab67616d00001e02712701c5e263efc8726b1464ab67616d00001e02ba5db46f4b838ef6027e6f96",
    creator: "shildeep waghmare",
  },
];

// Song data
let songs = [
  {
    name: "Sunflower",
    img: "https://i.scdn.co/image/ab67616d00001e02e2e352d89826aef6dbd5ff8f",
    creator: "Post Malone, Swae Lee",
    url: "./assets/Sunflower - Spider-Man_ Into the Spider-Verse (1).mp3",
  },
  {
    name: "Agora Hills",
    img: "https://i.scdn.co/image/ab67616d00001e0294203dd82d27b494c777d07c",
    creator: "Doja Cat",
    url: "./assets/Agora Hills.mp3",
  },
  {
    name: "Paint The Town Red",
    img: "https://i.scdn.co/image/ab67616d00001e027acee948ecac8380c1b6ce30",
    creator: "Doja Cat",
    url: "./assets/Paint The Town Red.mp3",
  },
  {
    name: "I Wanna Be Yours",
    img: "https://i.scdn.co/image/ab67616d00001e024ae1c4c5c45aabe565499163",
    creator: "Arctic Monkeys",
    url: "./assets/I Wanna Be Yours.mp3",
  },
  {
    name: "Sweater Weather",
    img: "https://i.scdn.co/image/ab67616d00001e028265a736a1eb838ad5a0b921",
    creator: "The Neighbourhood",
    url: "./assets/Sweater Weather.mp3",
  },
  {
    name: "All Girls Are The Same",
    img: "https://i.scdn.co/image/ab67616d00001e02f7db43292a6a99b21b51d5b4",
    creator: "juice WRLD",
    url: "./assets/All Girls Are The Same.mp3",
  },
  {
    name: "SugarCrash!",
    img: "https://i.scdn.co/image/ab67616d00001e0266f688086d483cf5781942e0",
    creator: "ElyOtto",
    url: "./assets/SugarCrash!.mp3",
  },
];

// Function to display the playlist
const ShowPlaylist = () => {
  let lib = document.getElementById("library");
  let clouser = playlist
    .map(
      (val) => `<div class="play-list">
       <div class="img">
         <img src="${val.img}" alt=""/>
       </div>
       <div class="txt">
         <h3>${val.name}</h3>
         <h5>
           Playlist
           <div class="dot"></div>
           ${val.creator}
         </h5>
       </div>
     </div>`
    )
    .join("");
  lib.innerHTML = clouser;
};

let Songs = document.getElementById("songs");
let clouser = "";
songs.map(
  (val, idex) =>
    (clouser += `<div class="song" id="${idex}" >
       <div class="song-img" data-index="${idex}">
         <img
           src="${val.img}"
           alt=""
           data-index="${idex}"
         />
       </div>
       <div class="song-info" data-index="${idex}">
         <h3 data-index="${idex}">${val.name}</h3>
         <h5 data-index="${idex}">${val.creator}</h5>
       </div>
     </div>`)
);
Songs.innerHTML = clouser;

// Function to update the player with the selected song
const updatePlayer = (index) => {
  const clickedSong = songs[index];
  const songSrc = clickedSong.url;

  // Update the player HTML with the clicked song
  const empty = `<div class="song">
          <div class="song-img">
            <img src="${clickedSong.img}" alt=""/>
          </div>
          <div class="song-info">
            <div class="text">
              <h3>${clickedSong.name}</h3>
              <h5>${clickedSong.creator}</h5>
            </div>
            <div class="play" id="play">
              <i class="ri-play-fill"></i>
            </div>
          </div>
        </div>`;
  const newDiv = document.createElement("div");
  newDiv.className = "wraper-song";
  newDiv.innerHTML = empty;

  // Remove the last song from the player
  if (player.children.length > 0) {
    player.removeChild(player.lastChild);
  }

  // Add the new song to the player
  player.appendChild(newDiv);

  // Update the audio source and play the song
  audio.src = songSrc;
  audio.play();

  // Update the footer player
  let footersong = document.getElementById("footersong");
  let content = `
    <div class="song-img">
      <img src="${clickedSong.img}" alt=""/>
    </div>
    <div class="song-info">
      <div class="text">
        <h3>${clickedSong.name}</h3>
        <h5>${clickedSong.creator}</h5>
      </div>
      <div class="play">
        <i class="ri-play-fill"></i>
      </div>
    </div>
  `;
  footersong.innerHTML = content;
};

// Show the playlist initially
ShowPlaylist();

let audio = new Audio();

let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
let DefaultSong = document.getElementById("tempSong");

// Handle song clicks
Songs.addEventListener("click", function (event) {
  const index = parseInt(event.target.dataset.index);
  selectedIndex = index;
  updatePlayer(index);
  mainPhone.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
  main.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
  flag = 1;
  count = 1;
  DefaultSong.style.display = "none";
});

// Forward button click event
forward.addEventListener("click", function () {
  if (selectedIndex < songs.length - 1) {
    selectedIndex++;
    updatePlayer(selectedIndex);
    forward.style.opacity = 1;
    mainPhone.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    main.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
    count = 1;
  } else {
    forward.style.opacity = 0.4;
  }
});

// Backward button click event
backward.addEventListener("click", function () {
  if (selectedIndex > 0) {
    selectedIndex--;
    updatePlayer(selectedIndex);
    backward.style.opacity = 1;
    mainPhone.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    main.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
    count = 1;
  } else {
    backward.style.opacity = 0.4;
  }
});

let PlayerForward = document.getElementById("PlayerForward");
let PlayerBackward = document.getElementById("PlayerBackward");

// Forward button click event
PlayerForward.addEventListener("click", function () {
  if (selectedIndex < songs.length - 1) {
    selectedIndex++;
    updatePlayer(selectedIndex);
    forward.style.opacity = 1;
    mainPhone.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    main.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
    count = 1;
  } else {
    forward.style.opacity = 0.4;
  }
});

// Backward button click event
PlayerBackward.addEventListener("click", function () {
  if (selectedIndex > 0) {
    selectedIndex--;
    updatePlayer(selectedIndex);
    backward.style.opacity = 1;
    mainPhone.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    main.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
    count = 1;
  } else {
    backward.style.opacity = 0.4;
  }
});

// CONTROLS!
let flag = 0;
let count = 0;
let playSong = document.getElementById("playSong");
let main = document.getElementById("mainPlay");
let mainPhone = document.getElementById("main");

mainPhone.addEventListener("click", function () {
  console.log("mainPhone clicked");
  if (flag == 0) {
    mainPhone.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    audio.play();
    flag = 1;
    count = 1;
  } else {
    mainPhone.innerHTML = `<i class="ri-play-mini-fill"></i>`;
    audio.pause();
    flag = 0;
    count = 0;
  }
});

main.addEventListener("click", function () {
  console.log("Main clicked");
  if (count == 0) {
    main.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    audio.play();
    count = 1;
    flag = 1;
  } else {
    main.innerHTML = `<i class="ri-play-mini-fill"></i>`;
    audio.pause();
    count = 0;
    flag = 0;
  }
});

// TimeLine of Songs!
const progressBar = document.getElementById("time");
const SongDuration = document.getElementById("SongDuration");
const CurrentDuration = document.getElementById("CurrentDuration");

// Function to convert seconds to mm:ss format
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

audio.addEventListener("timeupdate", function () {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  // Update song duration
  SongDuration.innerHTML = formatTime(duration);

  // Update current time
  CurrentDuration.innerHTML = formatTime(currentTime);

  // Calculate progress percentage
  const progress = (currentTime / duration) * 100;

  // Update progress bar width
  progressBar.style.width = progress + "%";
});

// Function to update progress bar and current time more frequently
function updateProgressBar() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  // Update current time
  CurrentDuration.innerHTML = formatTime(currentTime);

  // Calculate progress percentage
  const progress = (currentTime / duration) * 100;

  // Update progress bar width
  progressBar.style.width = progress + "%";

  // Call this function again in 100 milliseconds
  setTimeout(updateProgressBar, 100);
}

// Call the function to start updating progress bar and current time
updateProgressBar();