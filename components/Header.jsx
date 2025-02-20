import { useState } from "react";
import {Link} from "react-router-dom"; 
import userOnlineStatus from "./userOnlineStatus";

const Header = () =>{
  const onlineStatus=userOnlineStatus()
  const[btnNameReact,setbtnNameReact]=useState("login")
    return(
      <div className="header">
        <div className="log-container">
          <img className='logo' src ='/images/download.jpg' />
        </div>
        <div className="nav-items">
          <ul>  
            <li>Online Status:{onlineStatus}? : </li> 
            <li>
              <Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link> us</li>
            <li>contact us</li>
            <li>Cart</li>
            <button className="login" onClick={ () =>{ btnNameReact ==="login" ? setbtnNameReact("logout"):setbtnNameReact("login") } }>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;