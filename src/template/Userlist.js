import React from "react";

function contactList({loginvalues,ondelete,id}){
  
  console.log("id:",loginvalues[0].id)
  
      return(
       <div>
        {
        loginvalues.map((userinput,key) => (
        <div className="card">
          
          <p>{userinput.email}</p>
          <p>{userinput.password}</p>
        <button className="delete" onClick={()=>ondelete(loginvalues[key].id) } >DELETE</button> 
      {}
        </div>
      
      ))}
      </div>
       
      );
    };
 
 export default contactList;