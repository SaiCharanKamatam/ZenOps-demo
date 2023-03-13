import React from 'react'
import {  NavLink } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div className="HeaderContainer">
      <div className="Headertitle"><h1>ZenOps</h1></div>
      <div className="NavLinks">
        <ul>
            <li><NavLink to={"/"} className="links1"   >Home</NavLink></li>
            <li><NavLink to={"/code"} className="links1" >Code Quality</NavLink></li>
            <li><NavLink to={"/zen"} className="links1" >Zensight</NavLink></li>
            <li><NavLink to={"/data"} className="links1" >Data Tracker</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
