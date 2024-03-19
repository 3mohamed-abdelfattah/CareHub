import React from 'react'
import "./Checkout.css"

export default function CheckLabs() {
  return (
    <div className="containercheck">
    <div className="left-sidecheck">
      <div className="cardcheck">
        <div className="card-linecheck" />
        <div className="buttonscheck" />
      </div>
      <div className="postcheck">
        <div className="post-linecheck" />
        <div className="screencheck">
          <div className="dollarcheck">$</div>
        </div>
        <div className="numberscheck" />
        <div className="numbers-line2check" />
      </div>
    </div>
    <div className="right-sidecheck">
      <div style={{fontWeight:"bolder",fontSize:"25px",paddingRight:"10px"}} className="newcheck">تحاليل منزلية</div>
    </div>
  </div>
  )
}
