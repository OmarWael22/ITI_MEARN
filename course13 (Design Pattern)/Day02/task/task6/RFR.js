import { DoneState } from "./Done.js";
import { InProgressState } from "./inprogress.js";

export class ReadyForReviewState {
  next(task) {
    console.log(`"${task.name}" moved to DONE`);
    task.setState(new DoneState());
  }
  previous(task) {
    console.log(`"${task.name}" moved back to IN PROGRESS`);
    task.setState(new InProgressState());
  }
  getName() {
    return "STATE_READY_FOR_REVIEW";
  }
}
