import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {UserContext} from '../UserContext'
import {Modal,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Delete.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Delete = () => {
    const[users,setUsers]=useContext(UserContext);
   const {id}=useParams();
const deleteUser=(id)=>{
  
    const user=users.filter((user)=>user.id!=id);
    setUsers(user);
    toast.success("Delete successfully");

}
  
    return ( <>
        <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
      
    
      
        <Modal.Footer>
        
        
         <Button onClick={()=>deleteUser(id)} variant="secondary" className="mx-2">Delete</Button>
         <Link to="/">
          <Button variant="primary">Back</Button></Link>

        </Modal.Footer>
      </Modal.Dialog>
      <ToastContainer />
      </>
    )
}

export default Delete
