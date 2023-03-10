import React from 'react'
import {  NavLink } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div className='HeaderContainer'>
      <div className='Headertitle'><h1>ZenOps</h1></div>
      <div className='NavLinks'>
        <ul>
            <li><NavLink to={"/"} className="links"  >Home</NavLink></li>
            <li><NavLink to={"/code"} className="links" >Code Quality</NavLink></li>
            <li><NavLink to={"/zen"} className="links" >Zensight</NavLink></li>
            <li><NavLink to={"/data"} className="links" >Data Tracker</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
