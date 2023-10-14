import React from 'react'
import './Input.css'
function Input() {
  return (
    <div className='input_container'>
      <textarea name="inputtext" id="inputtext" cols="199" rows="10" placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis deleniti quaerat dicta itaque reprehenderit a dolores? Quo sapiente, odio accusantium eligendi blanditiis, similique rerum aliquid facilis provident rem iste dolorum?' autoFocus={true}></textarea>
    </div>
   
  )
}

export default Input
