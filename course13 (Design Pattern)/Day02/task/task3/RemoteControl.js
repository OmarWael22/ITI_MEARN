export class RemoteControl {
  constructor(device) {
    this.device = device;
  }

  increaseVolume() {
    this.device.increaseVolume();
  }

  decreaseVolume() {
    this.device.decreaseVolume();
  }
}
