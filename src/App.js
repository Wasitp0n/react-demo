import React, { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import Post from './components/Post'

// * Data from database
const initPosts = [
  {
    id: 1,
    title: "Let's learn React!",
  },
  {
    id: 2,
    title: 'How to install Node.js',
  },
  {
    id: 3,
    title: 'Basic HTML',
  },
]

function App() {
  const [newPostTitle, setNewPostTitle] = useState('')
  const [posts, setNewPosts] = useState(initPosts)

  const handleSubmit = (e) => {
    e.preventDefault()

    setNewPosts([
      ...posts,
      {
        id: Math.floor(Math.random() * 1000), // * database should auto generate id
        title: newPostTitle,
      },
    ])

    setNewPostTitle('')
  }

  return (
    <div className="App">
      <Navbar />
      <Greeting />
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={newPostTitle} onChange={(e) => setNewPostTitle(e.target.value)} required />

        <input type="submit" value="Post" />
      </form>
      <div className="feed-container">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />
        })}
      </div>
    </div>
  )
}

export default App
