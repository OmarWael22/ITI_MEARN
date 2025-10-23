import { Device } from "./Device.js";

export class TV extends Device {
  increaseVolume() {
    console.log(`TV volumeUp`);
  }
  decreaseVolume() {
    console.log(`TV volumeDown`);
  }
  mute() {
    console.log("TV muted");
  }
}
