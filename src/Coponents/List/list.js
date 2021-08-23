import React,{useState} from "react";
import { useSelector} from "react-redux";
import {Button } from "react-bootstrap"
import '../List/list.css'
import { useDispatch } from "react-redux";


const List = () => {
const [state, setState] = useState("All")
   const dispatch = useDispatch()
  const tasks = useSelector(state => state.reducer.tasks);
  console.log(tasks)
    return (
    <div>
      <div className="tasks">
        <Button variant="outline-success" onClick={()=>setState("Done")}>Done</Button>
        <Button variant="outline-warning" onClick={()=>setState("NotDone")}>Not Done</Button>
        <Button variant="info" onClick={()=>setState("All")}>All</Button>
      </div>
      
    { (state=="Done"?tasks.filter(task=>task.done==true):state=="NotDone"?tasks.filter(task=>task.done==false):tasks)
      .map((task) => {
        return (
          
    <div className="list-task">
    <span className="task" 
          style={task.done?{textDecoration:"line-through"}:{}}  
          onClick={()=>dispatch({type:"edite" , payload:task.id})}>
      {task.name}
      </span>
    <Button variant="outline-danger" id="info" onClick={()=>dispatch({type:"delete" , payload:task.id})}>X</Button>
 
  </div>
      
      )})}
      </div>
)}

export default List;
