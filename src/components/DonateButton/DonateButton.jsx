import React from 'react'
import './DonateButton.css'

function DonateButton(DonateBlood) {

  
  return (
    <a href="#" className="button" onClick={DonateBlood}>Donate Now</a>
  )
}

export default DonateButton;