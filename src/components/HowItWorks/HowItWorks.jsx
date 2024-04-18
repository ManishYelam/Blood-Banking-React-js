import React from 'react'
import './HowItWorks.css';
import DonateBlood from '../DonateBlood/DonateBlood';
import SearchBlood from '../SearchBlood/SearchBlood';


function HowItWorks() {
  return (
    <>
    <section className="outer-container">
        <h2>How It Works</h2>
        <div className="donate">
            <h3>Want to Donate Blood?</h3>
            <p>Fill out our donation form online and schedule an appointment. On the day of your appointment, come to our center and donate blood to save lives!</p>
            <DonateBlood />
            <a href="#" className="btn">Donate Now</a>
        </div>
        
        <div className="find-blood">
            <h3>Looking for Blood?</h3>
            <p>Search for the required blood type in our database. Once you find a match, contact us to arrange for blood donation.</p>
            <SearchBlood />
            <a href="#" className="btn">Find Blood</a>
        </div>  
    </section>

     {/* <section class="outer-container">
        <h2>How It Works</h2>
        <div class="steps">
            <div class="step">
                <div class="step-icon">1</div>
                <h3>Register</h3>
                <p>Sign up with your details and become a donor.</p>
            </div>
            <div class="step">
                <div class="step-icon">2</div>
                <h3>Find Donor</h3>
                <p>Search for donors based on blood type and location.</p>
            </div>
            <div class="step">
                <div class="step-icon">3</div>
                <h3>Donate</h3>
                <p>Donate blood and save lives.</p>
            </div>
        </div>
    </section> */}
    </>
  )
}

export default HowItWorks