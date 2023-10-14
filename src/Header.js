import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Header.css'
import KeyboardIcon from '@mui/icons-material/Keyboard';
function Header() {
  return (
    <div className='header_container'>
        <div className="upper">
            <h1 className='heading'>TypeCat <KeyboardIcon/></h1>
            <div className='user-icon'><AccountCircleIcon/></div>
        </div>
        <div className="lower">
            <p>15s</p>
            <p><span>15s</span> <span>30s</span> <span>60s</span></p>
        </div>
      
    </div>
  )
}

export default Header
