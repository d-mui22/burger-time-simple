import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
  return(
    <p className='Output' onClick={props.click}>
      {props.name}
    </p>
  )
}

export default UserOutput
