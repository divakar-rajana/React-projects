import React,{useState,useEffect}from 'react';
// import { ReactDOM } from 'react';
import './App.css';
import {nanoid} from "nanoid";
import  "./static/Navbar.css"
import Navbar from "./template/Navbar";
import Userlist from './template/Userlist';
import  Loginpage from "./template/Loginpage";
function App() {
   const Local_Key="loginvalues"
  
  
  const[loginvalues,updateloginvalues]=useState(JSON.parse(localStorage.getItem(Local_Key)) ??[]);

  const addloginvalues=(userinput)=>{
     updateloginvalues([...loginvalues,{id: nanoid(),...userinput}]);
     
     
  };
  //  console.log("loginvalues",loginvalues);
 
  const Removefromlogindetails=(id)=>{
    const newlist=loginvalues.filter((userinput)=>
       userinput.id !== id
  );
    updateloginvalues(newlist)
    
    
    
     console.log("newlist",newlist);
  };
  
  
  //this use effect is for storing the userinput into a local storage 
  useEffect(()=>{
    localStorage.setItem(Local_Key,JSON.stringify(loginvalues))
  },[loginvalues]);
  
return (
  <div>
  <Navbar/>
  <Loginpage addloginvalues={addloginvalues}> 
  
  </Loginpage>
  < Userlist loginvalues={loginvalues} ondelete={Removefromlogindetails} >
    </Userlist>
  </div> 
  );
}
 export default App;
