import "./style.scss";
import sun from "./assets/icons/sun.svg";
import rain from "./assets/icons/cloud-rain.svg";
import snow from "./assets/icons/cloud-snow.svg";
import pause from "./assets/icons/pause.svg";
import sunSoundSrc from "./assets/sounds/summer.mp3";
import rainSoundSrc from "./assets/sounds/rain.mp3";
import sunsnowSoundSrc from "./assets/sounds/winter.mp3";

const greeting: string = "Hello, TypeScript with Webpack!";
console.log(greeting);

const containerDiv = document.getElementsByClassName("container")[0];
const sunBox = document.getElementsByClassName("sun")[0];
const sunImg = document.createElement("img");
const volumeInput = document.getElementById("volume");

let soundSunEffect = new Audio(sunSoundSrc); // Загружаем аудиофайл
let soundRainEffect = new Audio(rainSoundSrc); // Загружаем аудиофайл
let soundSnowEffect = new Audio(sunsnowSoundSrc); // Загружаем аудиофайл

function handleInputRange(event: Event) {
  const target = event.target as HTMLInputElement;
  const newCurrentValue = +target.value/100;
  soundSunEffect.volume = newCurrentValue;
  soundRainEffect.volume = newCurrentValue;
  soundSnowEffect.volume = newCurrentValue;
}

if (volumeInput !== null) {
  volumeInput.addEventListener("input", (e) => handleInputRange(e));
}

sunImg.src = sun;
sunBox.append(sunImg);

const rainBox = document.getElementsByClassName("rain")[0];
const rainImg = document.createElement("img");
rainImg.src = rain;
rainBox.append(rainImg);

const snowBox = document.getElementsByClassName("snow")[0];
const snowImg = document.createElement("img");
snowImg.src = snow;
snowBox.append(snowImg);

let sunBoxIsPlay: boolean = false;
let rainBoxIsPlay: boolean = false;
let snowBoxIsPlay: boolean = false;

sunBox.addEventListener("click", (e) => {
  containerDiv.classList.add("sunBG");
  containerDiv.classList.remove("rainBG", "snowBG");
  if (!sunBoxIsPlay) {
    sunBoxIsPlay = true;
    rainBoxIsPlay = false;
    snowBoxIsPlay = false;
    soundSnowEffect.pause();
    soundRainEffect.pause();
    soundSunEffect.play();
  } else {
    sunBoxIsPlay = false;
    soundSunEffect.pause();
  }
});

rainBox.addEventListener("click", (e) => {
  containerDiv.classList.add("rainBG");
  containerDiv.classList.remove("sunBG", "snowBG");
  if (!rainBoxIsPlay) {
    sunBoxIsPlay = false;
    snowBoxIsPlay = false;
    rainBoxIsPlay = true;
    soundSunEffect.pause();
    soundSnowEffect.pause();

    soundRainEffect.play(); // Запускаем воспроизведение
  } else {
    rainBoxIsPlay = false;

    soundRainEffect.pause();
  }
});

snowBox.addEventListener("click", (e) => {
  containerDiv.classList.add("snowBG");
  containerDiv.classList.remove("sunBG", "rainBG");
  if (!snowBoxIsPlay) {
    sunBoxIsPlay = false;
    rainBoxIsPlay = false;
    snowBoxIsPlay = true;
    soundSunEffect.pause();
    soundRainEffect.pause();

    soundSnowEffect.play(); // Запускаем воспроизведение
  } else {
    snowBoxIsPlay = false;
    soundSnowEffect.pause();
  }
});
