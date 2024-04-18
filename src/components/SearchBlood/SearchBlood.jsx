import React from 'react'
import './SearchBlood.css';

function SearchBlood() {
  return (
    <>
    <section class="search-blood-process">
    <div class="step">
        <div class="step-icon search-icon">
            {/* <img src="search-icon.png" alt="Search"> */}
        </div>
        <h2>Search</h2>
        <p>Enter your location and the blood type you need.</p>
    </div>
    <div class="step">
        <div class="step-icon find-donor">
            {/* <img src="find-donor-icon.png" alt="Find Donor"> */}
        </div>
        <h2>Find Donor</h2>
        <p>View a list of donors matching your requirements.</p>
    </div>
    <div class="step">
        <div class="step-icon contact-donor-icon">
            {/* <img src="contact-donor-icon.png" alt="Contact Donor"> */}
        </div>
        <h2>Contact Donor</h2>
        <p>Contact the donor directly to arrange blood donation.</p>
    </div>
    <div class="step">
        <div class="step-icon thank-you-icon">
            {/* <img src="thank-you-icon.png" alt="Thank You"> */}
        </div>
        <h2>Thank You</h2>
        <p>Receive confirmation and express gratitude to the donor.</p>
    </div>
</section>

    </>
  )
}

export default SearchBlood;