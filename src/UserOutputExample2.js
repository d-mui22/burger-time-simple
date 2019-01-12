import React from 'react'
import './UserOutputExample2.css'

const UserOutputExample2 = (props) => {
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

export default UserOutputExample2
