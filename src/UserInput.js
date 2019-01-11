import React from 'react'
import './UserInput.css'

const UserInput = (props) => {
  return(
    <input className='InputBox' type='text' onChange={props.change}/>
  )
}

export default UserInput
