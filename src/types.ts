export interface Images {
  [key: string]: string;
}

export interface Sounds {
  [key: string]: string;
}

export interface Soundboxes {
  boxName: string;
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
