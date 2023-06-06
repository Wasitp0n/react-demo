import React from 'react'
import classes from './Greeting.module.css'

const Greeting = (props) => {
  // const name = 'John'
  const { name } = props

  return (
    <div className={classes.card}>
      <h3>Welcome!</h3>
      <p>{name}</p>
    </div>
  )
}

export default Greeting
