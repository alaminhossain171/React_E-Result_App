import React, { useContext,useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext'
import { Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Add.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {
    const[users,setUsers]=useContext(UserContext);
const {id}=useParams();
const user=users.filter((user)=>user.id==id);

const [name,setName]=useState(user[0].name);
const [subject,setSubject]=useState(user[0].subject);
const [grade,setGrade]=useState(user[0].grade);

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
    const update_name=name;
    user[0].name=update_name;
    const update_subject=subject;
    user[0].subject=update_subject;
    const update_grade=grade;
    user[0].grade=update_grade;
    setUsers([...users]);
    toast.success("Edit successfully");

    }

    return (<>
        <div className="container parent">
        <div className="child mt-3">
            <h6 className="text-center">STUDENT ROLL NO:{user[0].id} </h6>
        <Form >
              
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control 
                  name="name"
                  value={name}
                  onChange={handleName}
                  
                  type="text" placeholder={user[0].name} required />
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control 
                   name="subject"
                   value={subject}
                   onChange={handleSubject}
                  type="text" placeholder={user[0].subject} required />
                </Form.Group>
        
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control 
                   name="grade"
                   value={grade}
                   onChange={handleGrade}
                  type="text" placeholder={user[0].grade} required />
                </Form.Group>
              <div className="text-center">
              <Link to="/">
        <button className="btn btn-primary mx-2 px-4"> Back</button>
        
        </Link>
              <Button onClick={handleSubmit} variant="success" type="submit">
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

export default Edit
