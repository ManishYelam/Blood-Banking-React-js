import React from 'react'

function AboutUs() {
  return (
    <>
    <section className="outer-container font-r">
        <h2 className='font-b'>About Us</h2>
        <div className="donate d-flex-col-gap">
            <div>
                <p>We are dedicated to saving lives by providing a reliable blood supply to those in need.</p>
                <p>Our mission is to ensure that every patient receives the blood they require, when they need it.</p>
                <p>With state-of-the-art facilities and a team of passionate professionals, we strive to make a difference in our community.</p>
            </div>
            <div class="search-blood-process">
    <div class="step">
        <div class="step-icon services">
            {/* <img src="search-icon.png" alt="Search"> */}
        </div>
        <h2>Our Services</h2>
        <ul>
            <li>Blood Donation</li>
            <li>Donor Screening and Education</li>
            <li>Blood Collecton and Processing</li>
            <li>Blood Transfusion</li>
            <li>Inventory Management</li>
            <li>Blood Testing</li>
            <li>Blood Distribution</li>
            <li>Emergency Blood Supply</li>
        </ul>
    </div>
    <div class="step">
        <div class="step-icon statistics">
            {/* <img src="find-donor-icon.png" alt="Find Donor"> */}
        </div>
        <h2>Blood Donation Statistics</h2>
        <p>Did you know that...</p>
        <ul>
            <li>Every two seconds, someone in the U.S. needs blood.</li>
            <li>Approximately 36,000 units of red blood cells are needed every day in the U.S.</li>
            <li>Less than 38% of the population is eligible to donate blood.</li>
        </ul>
    </div>
    <div class="step">
        <div class="step-icon succ-stories">
            {/* <img src="contact-donor-icon.png" alt="Contact Donor"> */}
        </div>
        <h2>Success Stories</h2>
        <ul>
            <li>Read inspiring stories of lives saved through blood donations.</li>
            <li>Increased Community Engagement</li>
            <li>Innovations in Blood Banking</li>
            <li>Community Partnerships and Collaboration</li>
        </ul>
    </div>
    </div>

        </div>

    </section>
    </>
  )
}

export default AboutUs