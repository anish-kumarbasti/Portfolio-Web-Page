import React from 'react'
import './Navbar.css';
// import Toggle from './Toggle/Toggle';
import Popup from './Popup/Popup'
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
            <div className="n-name">Portfolio</div>
            {/* <Toggle/> */}
            <Popup/>
        </div>
        <div className="n-right n-list">
            <ul style={{listStyleType:'none'}}>
              <Link to='Navbar' spy={true} smooth={true} activeClass="activeClass" >
                <li>Home</li>
                </Link>
                <Link to='Services' spy={true} smooth={true} >
                <li>Services</li>
                </Link>
                <Link to='Experiment' spy={true} smooth={true} >
                <li>Experiment</li>
                </Link>
                <Link to='Portfolio' spy={true} smooth={true} >
                <li>Portfolio</li>
                </Link>
                <Link to='Testimonial' spy={true} smooth={true} >
                <li>Testimonial</li>
                </Link>
            </ul>
            <Link to='Contact Us' spy={true} smooth={true} >
            <button className="button n-button">Contact Us</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
