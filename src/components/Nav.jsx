import React from 'react'
import { Link } from 'react-router-dom'

const Nav=() => {
  return (
    <div style={{width:"100%",height:"40px",backgroundColor:"pink"}}>
        <span><Link to={"/"}>Home</Link></span>
        <span><Link to={"/about"}>About</Link></span>
        <span><Link to={"/contact"}>Contact</Link></span>

     


    </div>
  )
}

export default Nav