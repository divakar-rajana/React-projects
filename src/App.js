import logo from './logo.svg';
import './App.css';
import Userlist from './Userlist';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import api from './api/content';

function App() {
  const[userinput,setuserinput]=useState({
    para:"",
  });
 //constant function  to insert the value into the userinput
 const handler=(event)=>{
  setuserinput({...userinput,[event.target.name]: event.target.value});
 }
const handlersubmit=(event)=>
    {
        event.preventDefault();
        console.log(userinput);
        addloginvalues(userinput);
        setuserinput({para:""});
        
    };

     //usestate
  const[addcontent,setcontent]=useState([]);
  ///for posting the data to api or server
    const addloginvalues=async(userinput)=>{
     const request = {
        id:nanoid(),
        ...userinput
      }

      const response = await api.post("/content",request)
     setcontent([addcontent,response.data]);  
  };
  const retrivedetails =async()=>{
    const response= await api.get("/content")
    return response.data;
 };
 useEffect(()=>{
const getalldetails= async()=>{
  const alldetails=await retrivedetails();
  if(alldetails)  setcontent(alldetails);
};
getalldetails();
});

 //for delete the data from api or server
 const Removecontent= async(id)=>{
  await api.delete(`/content/${id}`);
  const newlist=addcontent.filter((userinput)=>
     userinput.id !== id
);
  setcontent(newlist)
   console.log("newlist",newlist);
};
//console.log(loginvalues)
  return (
    <div className="App">
      <div className='navbar'>
        <label>TODO LIST</label>
      </div>
      <form className='cointainer1' onSubmit={handlersubmit}>
        
        <input type='text' 
        name='para'
        placeholder='INPUT TEXT'
        value={userinput.para}
        onChange={handler}
       // e=> setuserinput(e.target.value)
        ></input>
        <button>ADD</button>
        </form>
      
      <Userlist addcontent={addcontent} ondelete={Removecontent}></Userlist>
    </div>
  );


}

export default App;
