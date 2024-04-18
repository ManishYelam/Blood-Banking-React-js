import React from 'react'
import './DonateBlood.css';

function DonateBlood() {
  return (
    <>
    
<section className="donating-process">
    <div className="step">
        <div className="step-icon register-icon">
            {/* <img src="register-icon.png" alt="Register"> */}
        </div>
        <h2>Register</h2>
        <p>Create an account and fill out the registration form.</p>
    </div>
    <div className="step">
        <div className="step-icon schedule-icon">
            {/* <img src="schedule-icon.png" alt="Schedule Appointment"> */}
        </div>
        <h2>Schedule Appointment</h2>
        <p>Select a convenient date and time for your blood donation.</p>
    </div>
    <div className="step">
        <div className="step-icon donate-icon">
            {/* <img src="donate-icon.png" alt="Donate Blood"> */}
        </div>
        <h2>Donate Blood</h2>
        <p>Visit our blood donation center and donate blood.</p>
    </div>
    <div className="step">
        <div className="step-icon thank-you-icon">
            {/* <img src="thank-you-icon.png" alt="Thank You"> */}
        </div>
        <h2>Thank You</h2>
        <p>Receive a token of appreciation and contribute to saving lives.</p>
    </div>
</section>

    </>
  )
}

export default DonateBlood
