import './Works.css'
import React from 'react'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { motion } from 'framer-motion'

const Works = () => {
    return (
        <div className='works'>
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    <br />
                    Veritatis nostrum ipsam hic natus harum?
                    <br />
                    Lorem ipsum dolor sit amet consectetur
                    <br />
                    Veritatis nostrum ipsam hic natus harum?
                </span>
                <button className='button s-button'>Hire Me</button>
                <div className="blur s-blurl" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* Right Side */}
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/* Background Circle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works
