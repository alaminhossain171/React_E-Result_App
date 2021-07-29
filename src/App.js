

import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState,useEffect} from 'react'
import './index.css'
import HashLoader from "react-spinners/HashLoader";
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { UserProvider } from './UserContext';
import Delete from './components/Delete';
import Add from './components/Add';
import Edit from './components/Edit';
import SchoolIcon from '@material-ui/icons/School';
function App() {

const [loading,setLoading]=useState(false);
useEffect(function(){
setLoading(true)
setTimeout(()=>{
  setLoading(false)
},5000)
},[])

  return (
    <div className="App">
   {loading?<HashLoader color={"#178BF7"} loading={loading}  size={50} />   :<div>
     
  
   
   <SchoolIcon fontSize="large" className="border border-primary rounded-circle p-2 mt-4 " />
   
     
     <h3 className="text-center mt-2">E-RESULT SYSTEM</h3>
      <UserProvider>
      <Router>
        <Switch>
        <Route path='/Add'>
            <Add/>
          </Route>
          <Route path='/Edit/:id'>
            <Edit />
          </Route>
        <Route path='/Delete/:id'>
            <Delete/>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      </UserProvider></div>}
      
    </div>
  );
}

export default App;
