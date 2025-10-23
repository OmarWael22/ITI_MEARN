import { AdvancedRemoteControl } from "./AdvancedRemote.js";
import { RemoteControl } from "./RemoteControl.js";
import { Speaker } from "./Speaker.js";
import { TV } from "./TV.js";

const tv = new TV();
const speaker = new Speaker();

const basicRemote = new RemoteControl(tv);
basicRemote.increaseVolume();
basicRemote.decreaseVolume();

const advancedRemote = new AdvancedRemoteControl(speaker);
advancedRemote.increaseVolume();
advancedRemote.mute();
