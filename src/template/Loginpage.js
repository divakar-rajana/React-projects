import React, { useState } from "react";
import "../static/Loginpage.css"
// import App from "../App"


function Loginpage({addloginvalues}){
    //use state for change the STATE OF input
    const[userinput,setuserinput]=useState({
        
        email: "",
       password: "",
    });
    //constant function  to insert the value into the userinput
    const handler=(event)=>{
        setuserinput({...userinput,[event.target.name]: event.target.value});    
    };
    //this is another constant function helps to reset the input box once clicked button (2)and to prevent from refresh
    const handlersubmit=(event)=>
    {
        event.preventDefault();
         console.log(userinput);
        addloginvalues(userinput);
        setuserinput({ email: "",password: "" });
    };

    // return method 
return(      
    <div className="login-menu">
        
    <form className="form-menu" onSubmit={handlersubmit}>
    <div className="header">
       <h2>REGISTRATION</h2> </div>
        
        {/* <input type="number"
        className="inputbox" 
        name="id" 
        placeholder="ID"
        value={userinput.id}
        onChange={handler}> 
        </input>*/}
        <input type="email"
        className="inputbox" 
        name="email" 
        placeholder="Email"
        value={userinput.email}
        onChange={handler}
        ></input>
        <br></br>
        
        <div className="password">
        <input type="Password" className="inputbox" name="password" placeholder="password" 
        value={userinput.password}
        onChange={handler}
        ></input>
        </div>
        <button className="Button">ADD</button>
    </form>
 </div>

);
}
 export default Loginpage;
