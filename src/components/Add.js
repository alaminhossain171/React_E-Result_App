import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import {Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './Add.css'
const Add = () => {
    const[users,setUsers]=useContext(UserContext);
const [id,setId]=useState('');
const [name,setName]=useState('');
const [subject,setSubject]=useState('');
const [grade,setGrade]=useState('');


function handleID(e){
setId(e.target.value);
}

function handleName(e){
    setName(e.target.value);
}


function handleSubject(e){
    setSubject(e.target.value);
}

function handleGrade(e){
    setGrade(e.target.value);
}

function handleSubmit(e){
e.preventDefault();
setUsers([...users,{id:id,name:name,subject:subject,grade:grade}])
toast.success("Adding successfully");
}


    return (<>
<div className="container parent">
<div className="child mt-3">
    <h6 className="text-center">ADD NEW STUDENT</h6>
<Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
          name="id"
          value={id}
          onChange={handleID}
          type="number" placeholder="Enter Roll" required />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
          name="name" 
          
          value={name}
          onChange={handleName}
          
          type="text" placeholder="Enter Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control 
           name="subject"
           value={subject}
           onChange={handleSubject}
          type="text" placeholder="Enter Subject" required />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
           name="grade" 
           value={grade}
           onChange={handleGrade}
          type="text" placeholder="Enter Grade" required />
        </Form.Group>
      <div className="text-center">
      <Link to="/">
<button className="btn btn-primary mx-2 px-4"> Back</button>

</Link>
      <Button variant="success" type="submit">
          Submit
        </Button>



      </div>
      </Form>

</div>



</div>
<ToastContainer />
  </>      
    )
}

export default Add
