import React from 'react'
import './Stastics.css'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
function Stastics() {
  return (
    <div className='stastic_container'>
      
      <div className='upper_reset_btn'>
        <div><ChangeCircleIcon/></div>
        <button>esce</button><p>--Reset</p>
      </div>
      <div className='lower_now'>
        <button>10</button>
        <button>50</button>
        <button>80</button>
        <button>100</button>
        <p>--Number Of Words</p>
      </div>
    </div>
  )
}

export default Stastics
