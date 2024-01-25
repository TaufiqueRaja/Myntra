import React,{useContext ,useState,useEffect} from "react";
import {useLocation} from "react-router-dom"
import logo from "../images/icon.jpeg"
import "./css/Navbar.css";
import { AiOutlineUser } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import {RxCross2} from "react-icons/rx"
import {FiUser} from "react-icons/fi"
import { auth } from '../../firebase';
import 'react-tooltip/dist/react-tooltip.css'
import { Link } from "react-router-dom";
import  {cartContext} from "../App"
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'


export default function Navbar() {
  const {cart, userName} = useContext(cartContext);
  const [showMenu,setShowMenu] = useState(true)
  const path = useLocation().pathname
  useEffect(()=>{
    setShowMenu(true);
  },[path,setShowMenu,cart,userName])

  function signOut() {
    auth.signOut().then(() => {
      alert("SignedOut Succesfully");
    }).catch((error) => {
      alert("Couldn't signout");
    });
  }

  return (
      <nav className="navbar">
        <div className="leftNavGroup">
          <span className="closeBtn" onClick={()=>{setShowMenu(true)}}> <RxCross2/></span>
          
          <div className="logo">
            <Link to={"/"}>
            <img src={logo} alt="myntra" />
            </Link>
          </div>
          <ul className="list">
          <li className="user__container" >
            <p className="user__icon__box"><FiUser/></p>
            <h4 className="user__name capital">{userName ? <span>{userName}</span> : 
            <Link to={"/login"} style={{color:"white",textDecoration:"none"}}>Login</Link>}</h4>
          </li>
            <Link className="list-item" to={"/mens"}>MEN</Link>
            <Link className="list-item" to={"/women"}>WOMEN</Link>
            <Link className="list-item" to={"/kids"}>KIDS</Link> 
            <Link className="list-item" to={"/home&living"}>HOME & LIVING</Link>
            <Link className="list-item" to={"/beauty"}>BEAUTY</Link>
           
            <Link to={"/studio"} className="list-item">
              STUDIO
              <sup>NEW</sup>
            </Link>
            {userName &&
             <Link className="list-item signout" to={"/"} onClick={signOut}>SIGNOUT</Link>}
          </ul>
        </div>

        <div className="rightNavGroup">

          <div className="NavIcons">
            { userName ?
            <div className="profile user" data-tooltip-id="my-tooltip">
              <AiOutlineUser className="profileIcons "/>
               <span className="nameCap">{userName}</span> 
              <Tooltip 
               openOnClick={true}
               id="my-tooltip" 
               place="bottom"
               variant="dark"
               clickable={true}
              >
                <button className="SignoutBtn" onClick={signOut}>Signout</button>
              </Tooltip>
              
            </div>
              :
              <Link to={"/login"} className="profile user" data-tooltip-id="my-tooltip">
              <AiOutlineUser className="profileIcons "/>
               <span className="nameCap">Login</span>               
            </Link>
              }

            <Link to={"/cart"} className="profile">
              <BiShoppingBag className="profileIcons"/>
              <span>Bag</span>
             { cart.length !==0 && <div className="cart-holder">
                {cart.length === 0 ? "" : cart.length}
          </div>}
            </Link>
          </div>
        </div>
        <div className={showMenu?"sm":"sm-active"}>
          <span className="menu" onClick={()=>setShowMenu(false)}>
          <GiHamburgerMenu className="menu-icon"/>
          </span>
          <Link to={"/"} className="logo_sm"> Myntra</Link>
        </div>
      </nav>
  );
}
