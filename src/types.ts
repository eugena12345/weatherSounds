export type BoxName = "sun" | "rain" | "snow";

export type Images = {
  [key in BoxName]: string;
}

export interface Sounds {
  [key: string]: string;
}

export interface Soundboxes {
  boxName: BoxName;
  boxElement: Element;
  isPlay: boolean;
}

export interface ElementsOnPage {
  container: Element;
  soundboxes: Soundboxes[];
  volume: Element | null;
}

export interface SoundEffect {
  effectName: string;
  effectElement: HTMLAudioElement;
}
