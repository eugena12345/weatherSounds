import "./style.scss";
import sunPic from "./assets/icons/sun.svg";
import rainPic from "./assets/icons/cloud-rain.svg";
import snowPic from "./assets/icons/cloud-snow.svg";
import sunSoundSrc from "./assets/sounds/summer.mp3";
import rainSoundSrc from "./assets/sounds/rain.mp3";
import sunsnowSoundSrc from "./assets/sounds/winter.mp3";
import { Images, Sounds, ElementsOnPage, SoundEffect } from "./types";

export const elements: ElementsOnPage = {
  container: document.getElementsByClassName("container")[0],
  soundboxes: [
    {
      boxName: "sun",
      boxElement: document.getElementsByClassName("sun")[0],
      isPlay: false,
    },
    {
      boxName: "rain",
      boxElement: document.getElementsByClassName("rain")[0],
      isPlay: false,
    },
    {
      boxName: "snow",
      boxElement: document.getElementsByClassName("snow")[0],
      isPlay: false,
    },
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

const soundsEffect: SoundEffect[] = [
  { effectName: "sun", effectElement: new Audio(sunSoundSrc) },
  { effectName: "rain", effectElement: new Audio(rainSoundSrc) },
  { effectName: "snow", effectElement: new Audio(sunsnowSoundSrc) },
];

const addBoxImage = () => {
  elements.soundboxes.map((box) => {
    const boxImg = document.createElement("img");
    boxImg.src = images[box.boxName];
    box.boxElement.append(boxImg);
  });
};

const setActiveBoxPlay = (activeBox: string) => {
  elements.soundboxes.forEach((box) => {
    if (box.boxName === activeBox) {
      box.isPlay = !box.isPlay;
    } else {
      box.isPlay = false;
    }
  });
};

function handleInputRange(event: Event) {
  const target = event.target as HTMLInputElement;
  const newCurrentValue = +target.value / 100;
  soundsEffect.forEach((sound) => {
    sound.effectElement.volume = newCurrentValue;
  });
}

elements.soundboxes.forEach((box) => {
  box.boxElement.addEventListener("click", (e) => {
    elements.container.classList = "";
    elements.container.classList.add("container", `${box.boxName}BG`);
    setActiveBoxPlay(box.boxName);
    if (box.isPlay) {
      soundsEffect.forEach((effect) => {
        if (effect.effectName === box.boxName) {
          effect.effectElement.play();
        } else {
          effect.effectElement.pause();
        }
      });
    } else {
      soundsEffect.forEach((effect) => {
        effect.effectElement.pause();
      });
    }
  });
});

const volumeInput = document.getElementById("volume");
if (volumeInput !== null) {
  volumeInput.addEventListener("input", (e) => handleInputRange(e));
}

addBoxImage();
