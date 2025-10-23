import { Device } from "./Device.js";

export class Speaker extends Device {
  increaseVolume() {
    console.log(`Speaker volumeUp`);
  }
  decreaseVolume() {
    console.log(`Speaker volumeDown`);
  }
  mute() {
    console.log("Speaker muted");
  }
}
