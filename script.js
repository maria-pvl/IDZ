/*слайдер*/

const slides = [
  "https://3.bp.blogspot.com/-WPNER7sDrVA/VzTUJDAZXhI/AAAAAAAAGZg/j1jiv2Dgd3cmnX8aRAItgfiS22LhhWBQQCLcB/s1600/S1e5_mystery_shack_sun_set.png",

  "https://i.pinimg.com/736x/1b/fb/9a/1bfb9aad9c22dc99dd08ca72aa40220c.jpg",

  "https://64.media.tumblr.com/00aa8fbdce5ce13d3131be02d6f4d039/tumblr_pl9yjj7BCf1uco3wbo1_1280.jpg",

  "https://i.pinimg.com/originals/89/89/58/898958d0c7d8cc1d67c785dfaf4a2b28.png",

  "https://i.stack.imgur.com/d59Bl.jpg",

  "https://wallup.net/wp-content/uploads/2019/09/459505-gravity-falls-disney-family-animated-cartoon-series-comedy.jpg",
];

let currentSlide = 0;

const slideImage = document.getElementById("slide");

function showSlide(index) {
  slideImage.style.opacity = 0;

  slideImage.style.transform = "scale(1.02)";

  setTimeout(() => {
    slideImage.src = slides[index];

    slideImage.style.opacity = 1;

    slideImage.style.transform = "scale(1)";
  }, 400);
}

function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

setInterval(nextSlide, 9000);

/*музика*/

const music = document.getElementById("bgMusic");

const volumeSlider = document.getElementById("volumeSlider");

const musicBtn = document.getElementById("musicBtn");

/*збереження гучності*/

const savedVolume = localStorage.getItem("musicVolume");

if (savedVolume !== null) {
  music.volume = savedVolume;

  volumeSlider.value = savedVolume;
} else {
  music.volume = 0.15;
}

const musicMuted = localStorage.getItem("musicMuted");

if (musicMuted === "true") {
  music.pause();

  musicBtn.innerText = "🔇";
} else {
  music.play();

  musicBtn.innerText = "🔊";
}

volumeSlider.addEventListener("input", () => {
  music.volume = volumeSlider.value;

  localStorage.setItem("musicVolume", volumeSlider.value);
});

function toggleMusic() {
  if (music.paused) {
    music.play();

    musicBtn.innerText = "🔊";

    localStorage.setItem("musicMuted", "false");
  } else {
    music.pause();

    musicBtn.innerText = "🔇";

    localStorage.setItem("musicMuted", "true");
  }
}

/*уф тема */

function toggleUV() {
  document.body.classList.toggle("uv-mode");

  const enabled = document.body.classList.contains("uv-mode");

  localStorage.setItem("uvMode", enabled);
}

/* збереження теми */

window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("uvMode");

  if (savedMode === "true") {
    document.body.classList.add("uv-mode");
  }
});

function showSemester(semesterNumber) {
  const tables = document.querySelectorAll(".semester-table");

  tables.forEach((table) => {
    table.classList.remove("active");
  });

  const activeTable = document.getElementById(`sem${semesterNumber}`);

  activeTable.classList.add("active");
}
