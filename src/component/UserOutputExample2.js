import React from 'react'
import './UserOutputExample2.css'
import Radium from 'radium'

const UserOutputExample2 = (props) => {

  const styles = {
    backgroundColor: 'green',
    color: 'orange',
    fontWeight: 'bolder',
    border: '2px solid #000',
    boxShadow: '10px 15px #ccc',
    margin: '50px auto',
    padding: '20px 0',
    width: '20%',
    ':hover': {
      backgroundColor: 'black',
      color: 'yellow',
      fontStyle: 'italic'
    }
  }

  if (props.toggle) {
    styles.backgroundColor = 'yellow'
  }

  return(
    <p style={styles} onClick={props.click}>
      {props.name}
    </p>
  )
}

export default Radium(UserOutputExample2)
