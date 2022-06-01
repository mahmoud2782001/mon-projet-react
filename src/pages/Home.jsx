import React from 'react'
import MainContent from '../components/MainContent'
import Navbar from '../components/Navbar'
import NewGames from '../components/NewGames'
import Trending from '../components/Trending'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <MainContent/>
        <Trending/>
        <NewGames/>
        <div className="container">
   <h2>Contact us</h2>
        <form action="" id='contact'>
        <input type="text" required placeholder='Your Name'/>
        <input type="email" required placeholder='Your Email'/>
        <input id='msg' type="text" required placeholder='Your message...'/>

        <button type='submit'>send</button>
    </form>
  </div>
    </div>
  )
}

export default Home