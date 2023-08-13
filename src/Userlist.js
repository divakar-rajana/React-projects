import React, { useEffect } from 'react';
import api from './api/content';

function Userlist({addcontent,ondelete}) {
 
  return (
    <div className='cointainer2'>
       {
       addcontent.map((userinput,key) => (
      <div className='details'>
        <label>{userinput.para}</label>
        <button onClick={()=>ondelete(addcontent[key].id)}></button>
      </div>
       ))}
    </div>
  );
}

export default Userlist
