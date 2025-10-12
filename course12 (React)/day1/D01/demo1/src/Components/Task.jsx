import { Component } from "react";

class Task extends Component{

  constructor(){
    super()
    this.state = {
      taskName: "Mongo_DB"
    }
  }


  // state = {
  //   task: 'React.js Task',
  //   taskList: [
  //     {id:'1', taskName:'Angular'},
  //     {id:'2', taskName:'Node.js'}
  //   ]
  // }

  render(){
    return (
      <>
        <h2>Hello from Task Comp</h2>
        <h2>Your Task is: {this.state.taskName}</h2>
      </>
    )
  }
}


export default Task;