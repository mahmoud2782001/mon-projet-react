import React from 'react'
import img1 from '../img/trending2.jpg'
import img2 from '../img/trending3.jpg'
import img3 from '../img/trending4.jpg'
import img4 from '../img/trending5.png'

const Trending = () => {
  return (
    <section className='trending container' id='trending'>
        <div className="heading">
            <h2>Trending Games</h2>
        </div>
        <div className="trending-content">
            <div className="bx">
                <img src={img1}/>
                <div className="content">
                <h1>batelfield</h1>
                </div>
            </div>
            <div className="bx">
            <img src={img2}/>
                <div className="content">
                    <h1>assassin's creed valhalla</h1>
                </div>
            </div>
            <div className="bx">
            <img src={img3}/>
                <div className="content">
                <h1>ghost of tsushima</h1>
                </div>
            </div>
            <div className="bx">
            <img src={img4}/>
                <div className="content">
                <h1>grand theft auto 5</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trending