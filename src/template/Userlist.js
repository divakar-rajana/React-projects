import React from "react";
import App from "../App"

function contactList({loginvalues}){
  

   const clickhandler=(event)=>{
    
  }
    
      return(
       <div>
        {loginvalues.map((userinput) => (
        <div className="card"><p>{userinput.email}</p>
          <p>{userinput.password}</p>
          <button className="delete" onClick={()=>clickhandler()} >DELETE</button>
        </div>
      
      ))}
      </div>

      );
    };
 
 export default contactList;