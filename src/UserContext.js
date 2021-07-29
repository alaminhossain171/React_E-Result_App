const { createContext, useState } = require("react");

export const UserContext=createContext();


export const UserProvider=(props)=>{
    const[users,setUsers]=useState([
{id:1,name:"Alamin",subject:"Math",grade:"A+"},
{id:2,name:"XYZ",subject:"Programming",grade:"A-"},
{id:3,name:"ABC",subject:"Data Structure",grade:"A"},

    ]);
    return(
        <UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
};


