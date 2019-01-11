import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
  let classes;

  if (!props.toggle) {
    debugger
    classes = ['Output', 'Highlighted'].join(' ')
  }else {
    classes = ['Output']
  }
  return(
    <p className={classes} onClick={props.click}>
      {props.name}
    </p>
  )
}

export default UserOutput
