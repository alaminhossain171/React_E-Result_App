import React, { useContext } from 'react'
import './Home.css'
import { Container,Row,Col,Button,Table } from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

const Home = () => {
const [users,setUser]=useContext(UserContext);




    return (
        <div className="m-5 text-center ">
   <Container>
  <Row>
    <Col> <Link to='/Add'><Button className="mb-3" variant="primary">
        <PersonIcon />
        Add Student</Button></Link></Col>
  </Row>

  <Row>

  <Table striped bordered hover >
  <thead>
    <tr>
      <th>Roll NO.</th>
      <th>Name</th>
      <th>Subject</th>
      <th>Grade</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>

    {users.map(function(user){
      return <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.subject}</td>
      <td>{user.grade}</td>
      <td>
     <Link to={`/Edit/${user.id}`}> <Button variant="outline-primary btn-circle"><EditIcon /></Button></Link>
  <Link to={`/Delete/${user.id}`}>  <Button  variant="outline-primary btn-circle"><DeleteIcon /></Button></Link>
        
         </td>
    </tr>
    })}
    
   
   
  </tbody>
</Table>


  </Row>
</Container>
        </div>
    )
}

export default Home
