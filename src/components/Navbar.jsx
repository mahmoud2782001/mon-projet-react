import React from 'react'
import menuImg from '../img/menu.png'
const Navbar = () => {
  return (
    <header>
        <div className="nav container">
            <a href="" className="logo">Game<span>shop</span></a>
            <div className="nav-icons">
            <i className="fa fa-bell" id='bell-icon'><span></span></i>
            <i class="fa fa-download"></i>
            <div className="menu-icon">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            </div>
            <div className="menu">
                <img src={menuImg}></img>
                <div className="navbar">
                    <li><a href="">Home</a></li>
                    <li><a href="#trending">Trending</a></li>
                    <li><a href="#new">New Games</a></li>
                    <li><a href="#action">Action Games</a></li>
                    <li><a href="#contact">contact Us</a></li>

                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar