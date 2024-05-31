import React from 'react'
import "./Offer.css"
import exclusive_image from "../Assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offer-left">
     <h1> Exclusive</h1>
     <h1>Offer For You</h1>
     <p>Only On Best Selling Products</p>
     <button>Check now</button>
      </div>
      <div className="offer-right">
     <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
