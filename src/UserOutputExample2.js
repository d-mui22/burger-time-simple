import React from 'react'
import './UserOutputExample2.css'
import classNames from 'classnames'

const UserOutputExample2 = (props) => {
  let toggle = null;
  if (props.toggle) {
    toggle = 'Highlighted'
  } else toggle = null

  let classCss =
  return(
    <div>
      <p className={classNames('Output2', 'Highlighted')} onClick={props.click}>
      {props.name}
      </p>
    </div>
  )
}

export default UserOutputExample2
