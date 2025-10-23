import { ToDoItem } from "./ToDoList.js";

const task = new ToDoItem("Implement Day2 DP Tasks");
// IN_PROGRESS
task.showState();

task.next();
// READY_FOR_REVIEW
task.showState();

task.next();
//  DONE
task.showState();

task.previous();
// REVIEW
task.showState();
