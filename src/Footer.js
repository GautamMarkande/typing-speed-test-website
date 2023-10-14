import React from 'react'
import './Footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <div className='footer-container'>
      <div className="left">
        <div><TwitterIcon/></div>
        <div><LinkedInIcon/></div>
        <div><AttachEmailIcon/></div>
        <div><InstagramIcon/></div>
      </div>
      <div className="right">
        <select>
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
        </select>
      </div>
    </div>
  )
}

export default Footer
