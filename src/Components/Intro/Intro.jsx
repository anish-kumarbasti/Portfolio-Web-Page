import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Crown from '../../img/crown.png'
import Thumbup from '../../img/thumbup.png'
import Glassesimoji from '../../img/glassesimoji.png'
import FlotingDiv from '../FlotingDiv/FlotingDiv'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { themeContext } from '../../Context'


const Intro = () => {
  const transition = {duration: 2, type: 'spring'}

  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode ? 'white': ''}}>Hy! I Am</span>
                <span>Rolex Ansh </span>
                <span style={{color: darkMode ? 'white': ''}}>Frontend Developer with high level of experience in web designing and development <br/>
                producting the Quality Work</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-cons">
                <img src={Github} alt="" />
                <img src={Linkedin} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={Boy} alt="" />
          <motion.img 
          initial={{ left : "-36%"}}
          whileInView={{ left: "-24%"}}
          transition={transition}
          src={Glassesimoji} alt="" />
          <motion.div
          initial={{top:"-4%", left:"74%" }}
          whileInView={{left:"68%"}}
          transition={transition}
          style={{top: '-4%', left: '68%'}}>
            <FlotingDiv image={Crown} text1='Web' text2='Developing'/>
          </motion.div>
          <motion.div 
          initial={{top:"18rem", left:"9rem"}}
          whileInView={{left:"0rem"}}
          transition={transition}
          style={{top:'18rem', left:'0rem'}}>
            <FlotingDiv  image={Thumbup} text1='Best Design ' text2='Award'/>
          </motion.div>
          {/* Blur divs */}
          <div className="blur" style={{ background: 'rgba(238 210 255)'}}></div>
          <div className="blur" style={{ background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>        
            
        </div>
    </div>
  )
}

export default Intro
