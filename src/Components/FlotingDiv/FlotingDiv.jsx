import React from 'react'
import './FlotingDiv.css'
const FlotingDiv = ({image, text1,text2}) => {
  return (
    <div>
      <div className="flotingdiv">
        <img src={image} alt="" />
        <span>
            {text1}
             <br />
            {text2}
        </span>
      </div>
    </div>
  )
}

export default FlotingDiv
