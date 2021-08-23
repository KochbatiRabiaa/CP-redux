import { FormGroup } from "@material-ui/core";
import React, {useState} from "react";
import {Modal , Button, Form, FormLabel } from 'react-bootstrap' 
import {useDispatch} from 'react-redux' 
import '../add task/addTask.css'

const Example =() =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newTask, setNewTask] = useState("");
    
    let dispatch = useDispatch()
    const saveChange =()=> {
        if (newTask.trim()){
          
          dispatch ({type:"add" , payload:newTask})
            handleClose ()
        }
    }
  
    return (
      <>
      <div className= "addtask">
        <Button variant="outline-secondary" className="button" onClick={handleShow}>
          Add Task
        </Button>
        </div>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              <FormLabel>New Task</FormLabel>
               <Form.Control size="lg" type="text" placeholder="What do you wanna do to day??" onChange={(e)=>setNewTask(e.target.value)} />
               
               </FormGroup>
        </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-primary" onClick={saveChange}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  

  export default Example