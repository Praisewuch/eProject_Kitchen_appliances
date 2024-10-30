import React from 'react'
import { BiStar } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
const Card = ({img,price,text1,text2,type,stars}) => {
    const star = (numb) => {
        if(numb == 2){
          return <div>
          <BsStarFill size={12}/>
          <BsStarFill size={12}/>
          <BsStarFill size={12}/>
          <BiStar size={12}/>
          <BiStar size={12}/>
      </div>
        }
        if(numb == 1){
            return <div>
            <BsStarFill size={12}/>
            <BsStarFill size={12}/>
            <BsStarFill size={12}/>
            <BsStarFill size={12}/>
            <BiStar size={12}/>
        </div>
        }
        else{
            return <div>
            <BsStarFill size={12}/>
            <BsStarFill size={12}/>
            <BsStarFill size={12}/>
            <BsStarFill size={12}/>
            <BsStarFill size={12}/>
        </div>
        }
    }
  return (
      <div className="card-1">
          <img src={img} width={268} height={268} className="card-img"></img>
          <div className="card-text">
            <div className="layer1">
              <p style={{fontSize:15}}>{type}</p>
              <div className="star">
                {star(stars)}
              </div>
            </div>
            <div className="layer2">
              <p style={{color: "black", marginTop:-5}}>
                {text1}
                <br />
                {text2}
              </p>
            </div>
            <div className="price">
              <p style={{fontSize:18,color:"red"}}>${price}</p>
            </div>
          </div>
        </div>
  )
}

export default Card
