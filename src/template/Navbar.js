import "../static/App.css";
import React,{useState}from 'react';
import { ReactDOM } from 'react';
import { ReactComponent as Logo} from "../icons/logo.svg";
import { ReactComponent as ArrowIcon } from "../icons/menu.svg";
import  Loginpage from "./Loginpage";




function Project() {
    return (
      <Navbar>
         
        <NavItem icon= {< ArrowIcon/>}>
        
          <DropdownMenu>
              
          </DropdownMenu>
  
        </NavItem>
  
        <NavItem icon={"LOGIN"}>

      
  
        </NavItem>
        
          
  
      </Navbar>
        
      
    );
  }

  
function DropdownMenu(){
    
  
      function DropdownItem(props){
  
        const[open1,openbox1]= useState(false);
  
         return(
          <li>
          <div className='menu-item' >
          <span className='icon-button'>{props.leftIcon}</span>
          {props.children}
          <span className='icon-right'>{props.rightIcon}</span>
          </div>
        {open1 && props.children}
        </li> 
        );
  
    }
  return(
       
      <div className='dropdown'>
       <DropdownItem>
         MY PRofile
       </DropdownItem>
  
       <DropdownItem
        leftIcon={<Logo/>}>
        setting</DropdownItem>
        
        
      </div>
    );
  }


  function Navbar(props) {
    return(
        <nav className='navbar'>
        <ul className='navbar-nav'>{props.children}</ul> 
  
  
        </nav>
    );
  }
  function NavItem(props){
  
    const[open,openbox]= useState(false);
    return(
      <li className='nav-item'>
        
        <a href='#' className='icon-button' onClick={()=> openbox(!open)}>
        {props.icon}
        
        </a>
        {open && props.children}
      </li>
    );
  }
  
  
  
  export default Project;
  