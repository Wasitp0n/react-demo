import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  const { post } = props

  return (
    <div className={classes.post}>
      <p>id: {post.id}</p>
      <p>title: {post.title}</p>
    </div>
  )
}

export default Post
