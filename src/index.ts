import "./style.scss";
import sunPic from "./assets/icons/sun.svg";
import rainPic from "./assets/icons/cloud-rain.svg";
import snowPic from "./assets/icons/cloud-snow.svg";
import sunSoundSrc from "./assets/sounds/summer.mp3";
import rainSoundSrc from "./assets/sounds/rain.mp3";
import sunsnowSoundSrc from "./assets/sounds/winter.mp3";
import { Images, ElementsOnPage, SoundEffect } from "./types"; //Sounds, 

export const elements: ElementsOnPage = {
  container: document.querySelector<HTMLElement>(".container")!,
  soundboxes: [
    {
      boxName: "sun",
      boxElement: document.querySelector<HTMLElement>(".sun")!,
      isPlay: false,
    },
    {
      boxName: "rain",
      boxElement: document.querySelector<HTMLElement>(".rain")!,
      isPlay: false,
    },
    {
      boxName: "snow",
      boxElement: document.querySelector<HTMLElement>(".snow")!,
      isPlay: false,
    },
  ],
  volume: document.getElementById("volume") as HTMLInputElement | null,
};

const images: Images = {
  sun: sunPic,
  rain: rainPic,
  snow: snowPic,
};

// const sounds: Sounds = {
//   sun: sunSoundSrc,
//   rain: rainSoundSrc,
//   snow: sunsnowSoundSrc,
// };

const soundsEffect: SoundEffect[] = [
  { effectName: "sun", effectElement: new Audio(sunSoundSrc) },
  { effectName: "rain", effectElement: new Audio(rainSoundSrc) },
  { effectName: "snow", effectElement: new Audio(sunsnowSoundSrc) },
];

const addBoxImage = () => {
  elements.soundboxes.forEach((box) => {
    const boxImg = document.createElement("img");
    boxImg.src = images[box.boxName];
    box.boxElement.append(boxImg)!;
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
  const target = event.target as EventTarget | null;
  if (target && target instanceof HTMLInputElement) {
  const newCurrentValue = +target.value / 100;
  soundsEffect.forEach((sound) => {
    sound.effectElement.volume = newCurrentValue;
  });
  }
}

elements.soundboxes.forEach((box) => {
  box.boxElement!.addEventListener("click", (e) => {
    //elements.container.classList = "";
    elements.container.className = "";
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
