import React from 'react'
import classes from './Greeting.module.css'

const Greeting = (props) => {
  // const name = 'John'
  const { name } = props
  const isLogin = true

  return (
    <div className={classes.card}>
      <h3>Welcome!</h3>
      <p>{isLogin ? name : 'Unknown'}</p>
    </div>
  )
}

export default Greeting
