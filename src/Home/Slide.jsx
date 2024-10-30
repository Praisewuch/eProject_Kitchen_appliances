import React from 'react'
import './home.css'
const Slide = ({percent,text,text2,img,height}) => {
  return (
    <div className="slide1">
      <div className="text">
        <p className='ap' >Sale Offer {percent}% Off This Week</p>
        <h2  className='ah2'>
          {text}<br/>
          {text2}
        </h2>
        <div className="btn1">SHOPPING NOW</div>
      </div>
      <div className="space"></div>
      <img className='size-img' src={img}  height={height}></img>
    </div>
  )
}

export default Slide
