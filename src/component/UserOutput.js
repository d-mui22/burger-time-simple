import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
  let classes;

  if (props.toggle === false) {
    classes = 'Highlighted'
  }else {
    classes = 'Output'
  }
  return(
    <p className={classes} onClick={props.click}>
      {props.name}
    </p>
  )
}

export default UserOutput
