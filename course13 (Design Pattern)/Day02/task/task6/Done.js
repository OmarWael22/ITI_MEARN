import { ReadyForReviewState } from "./RFR.js";

export class DoneState {
  next() {
    console.log("Task is already DONE — no next state!");
  }
  previous(task) {
    console.log(`"${task.name}" moved back to READY FOR REVIEW`);
    task.setState(new ReadyForReviewState());
  }
  getName() {
    return "STATE_DONE";
  }
}
