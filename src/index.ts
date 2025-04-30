import "./style.scss";
import sunPic from "./assets/icons/sun.svg";
import rainPic from "./assets/icons/cloud-rain.svg";
import snowPic from "./assets/icons/cloud-snow.svg";
// import pause from "./assets/icons/pause.svg";
import sunSoundSrc from "./assets/sounds/summer.mp3";
import rainSoundSrc from "./assets/sounds/rain.mp3";
import sunsnowSoundSrc from "./assets/sounds/winter.mp3";

interface Images {
  [key: string]: string;
}

interface Sounds {
  [key: string]: string;
}

interface Soundboxes {
  boxName: string;
  boxElement: Element;
  isPlay: boolean
}

interface ElementsOnPage {
  container: Element;
  soundboxes: Soundboxes[];
  volume: Element | null;
}

export const elements: ElementsOnPage = {
  container: document.getElementsByClassName("container")[0],
  soundboxes: [
    { boxName: "sun", boxElement: document.getElementsByClassName("sun")[0], isPlay: false },
    { boxName: "rain", boxElement: document.getElementsByClassName("rain")[0], isPlay: false },
    { boxName: "snow", boxElement: document.getElementsByClassName("snow")[0], isPlay: false },
  ],
  volume: document.getElementById("volume"),
};

const images: Images = {
  sun: sunPic,
  rain: rainPic,
  snow: snowPic,
};

const sounds: Sounds = {
  sun: sunSoundSrc,
  rain: rainSoundSrc,
  snow: sunsnowSoundSrc,
};

const addBoxImage = () => {
  elements.soundboxes.map((box) => {
    const boxImg = document.createElement("img");
    boxImg.src = images[box.boxName];
    box.boxElement.append(boxImg);
  });
};

const setActiveBoxPlay = (activeBox: string) => {
    elements.soundboxes.forEach((box)=> {
        if (box.boxName === activeBox) {
            box.isPlay = !box.isPlay;
        } else {
            box.isPlay = false;

        }
    })
}

//const createSounds =
const soundSunEffect = new Audio(sunSoundSrc);
const soundRainEffect = new Audio(rainSoundSrc);
const soundSnowEffect = new Audio(sunsnowSoundSrc);

elements.soundboxes.forEach((box) => {
  box.boxElement.addEventListener("click", (e) => {
    elements.container.classList = '';
    elements.container.classList.add('container', `${box.boxName}BG`);
    setActiveBoxPlay(box.boxName);

      if (box.isPlay) {
        ///setActiveBoxPlay(box.boxName);
console.log('active box is', box.boxName, box.isPlay)
        // soundSnowEffect.pause();
        // soundRainEffect.pause();
        // soundSunEffect.play();

      } else {
        console.log('active box is', box.boxName, box.isPlay)

        // sunBoxIsPlay = false;
        // soundSunEffect.pause();
      }
  });
});

addBoxImage();

// const containerDiv = document.getElementsByClassName("container")[0]; //
// const sunBox = document.getElementsByClassName("sun")[0];
// const sunImg = document.createElement("img");
// const volumeInput = document.getElementById("volume");

// let soundSunEffect = new Audio(sunSoundSrc);
// let soundRainEffect = new Audio(rainSoundSrc);
// let soundSnowEffect = new Audio(sunsnowSoundSrc);

// function handleInputRange(event: Event) {
//   const target = event.target as HTMLInputElement;
//   const newCurrentValue = +target.value / 100;
//   soundSunEffect.volume = newCurrentValue;
//   soundRainEffect.volume = newCurrentValue;
//   soundSnowEffect.volume = newCurrentValue;
// }

// if (volumeInput !== null) {
//   volumeInput.addEventListener("input", (e) => handleInputRange(e));
// }

// sunImg.src = sun;
// sunBox.append(sunImg);

// const rainBox = document.getElementsByClassName("rain")[0];
// const rainImg = document.createElement("img");
// rainImg.src = rain;
// rainBox.append(rainImg);

// const snowBox = document.getElementsByClassName("snow")[0];
// const snowImg = document.createElement("img");
// snowImg.src = snow;
// snowBox.append(snowImg);

// let sunBoxIsPlay: boolean = false;
// let rainBoxIsPlay: boolean = false;
// let snowBoxIsPlay: boolean = false;

// sunBox.addEventListener("click", (e) => {
//   containerDiv.classList.add("sunBG");
//   containerDiv.classList.remove("rainBG", "snowBG");
//   if (!sunBoxIsPlay) {
//     sunBoxIsPlay = true;
//     rainBoxIsPlay = false;
//     snowBoxIsPlay = false;
//     soundSnowEffect.pause();
//     soundRainEffect.pause();
//     soundSunEffect.play();
//   } else {
//     sunBoxIsPlay = false;
//     soundSunEffect.pause();
//   }
// });

// rainBox.addEventListener("click", (e) => {
//   containerDiv.classList.add("rainBG");
//   containerDiv.classList.remove("sunBG", "snowBG");
//   if (!rainBoxIsPlay) {
//     sunBoxIsPlay = false;
//     snowBoxIsPlay = false;
//     rainBoxIsPlay = true;
//     soundSunEffect.pause();
//     soundSnowEffect.pause();

//     soundRainEffect.play();
//   } else {
//     rainBoxIsPlay = false;

//     soundRainEffect.pause();
//   }
// });

// snowBox.addEventListener("click", (e) => {
//   containerDiv.classList.add("snowBG");
//   containerDiv.classList.remove("sunBG", "rainBG");
//   if (!snowBoxIsPlay) {
//     sunBoxIsPlay = false;
//     rainBoxIsPlay = false;
//     snowBoxIsPlay = true;
//     soundSunEffect.pause();
//     soundRainEffect.pause();

//     soundSnowEffect.play();
//   } else {
//     snowBoxIsPlay = false;
//     soundSnowEffect.pause();
//   }
// });
