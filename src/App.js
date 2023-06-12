import React,{useState,useEffect}from 'react';
// import { ReactDOM } from 'react';
import './App.css';
//import {uuidv4} from "uuid";
import  "./static/Navbar.css"
import Navbar from "./template/Navbar";
import Userlist from './template/Userlist';
import  Loginpage from "./template/Loginpage";
function App() {
  const Local_Key="values"
  
  const[loginvalues,updateloginvalues]=useState(JSON.parse(localStorage.getItem(Local_Key)),[]);

  const addloginvalues=(userinput)=>{
     updateloginvalues([...loginvalues,userinput]);
     
  };
 
  const Removefromlogindetails=(deleteloginvalues)=>{
    const newlist=loginvalues.filter((userinput)=>userinput !==deleteloginvalues)
    updateloginvalues(newlist);
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
  < Userlist loginvalues={loginvalues} Removefromlogindetails={Removefromlogindetails} >
    </Userlist>
  </div> 
  );
}
 export default App;
