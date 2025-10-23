import { ReadyForReviewState } from "./RFR.js";

export class InProgressState {
  next(task) {
    console.log(`"${task.name}" moved to READY FOR REVIEW`);
    task.setState(new ReadyForReviewState());
  }
  previous() {
    console.log("Already in the first state (IN PROGRESS)");
  }
  getName() {
    return "STATE_IN_PROGRESS";
  }
}