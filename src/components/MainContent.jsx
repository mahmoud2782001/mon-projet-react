import React from 'react'
import homeImg from '../img/home.png'

const MainContent = () => {
  return (
    <section className='home container' id='home'>
        <img src={homeImg}></img>
        <div className="home-text">
            <h1>CITY OF THE FUTURE</h1>
            <a href="" className="btn">Available Now</a>
        </div>
    </section>
  )
}

export default MainContent