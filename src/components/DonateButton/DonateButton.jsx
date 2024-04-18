import React from 'react'
import './DonateButton.css'

function DonateButton() {

  function DonateBlood(){
    console.log("hii");

  }
  
  return (
    <a href="#" className="button" onClick={DonateBlood}>Donate Now</a>
  )
}

export default DonateButton;