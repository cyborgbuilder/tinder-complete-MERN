import React from 'react'
import './Header.css'
import { CgProfile } from "react-icons/cg";
import IconButton from "@material-ui/core/IconButton"
import { BsFillChatRightFill } from "react-icons/bs";

function Header() {
  return (
    <div className='header'>
        <IconButton>
        <CgProfile fontSize="25px" className="header_icon"/>
        </IconButton>

        <img 
        className='header_logo'
        src="https://toppng.com/uploads/preview/tinder-logo-11545685525kmredhqlma.png"

        />

        <IconButton>
        <BsFillChatRightFill className="header_icon" />
        </IconButton>

    </div>
  )
}

export default Header