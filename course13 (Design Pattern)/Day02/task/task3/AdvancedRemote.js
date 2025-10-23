import { RemoteControl } from "./RemoteControl.js";

export class AdvancedRemoteControl extends RemoteControl {
  mute() {
    this.device.mute();
  }
}
