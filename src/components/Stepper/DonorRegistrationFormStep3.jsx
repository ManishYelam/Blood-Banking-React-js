import React, { useState } from 'react';

function DonorRegistrationFormStep3({ formData, onPrev, onSubmit }) {


  return (
    <div className='confirm-content'>
      <h2 className='grid-1-4'>Step 3: Confirmation</h2>
      <p className='grid-1-4'>Please review your information:</p>

      <h3 className='grid-1-4'>Personal Information</h3>
      <div className='grid-1-4'><strong>Name:</strong> {} </div>
      <div className='grid-5-8'><strong>Age:</strong> {} </div>
      <div className='grid-9-12'><strong>Gender:</strong> {} </div>
      <div className='grid-1-4'><strong>Father Name:</strong> {} </div>
      <div className='grid-5-8'><strong>Blood Type:</strong> {} </div>
      <div className='grid-9-12'><strong>Weight (kg):</strong> {} </div>
      <div className='grid-1-4'><strong>Mobile:</strong> {} </div>
      <div className='grid-5-8'><strong>Email:</strong> {} </div>
      <div className='grid-9-12'><strong>State:</strong> {} </div>
      <div className='grid-1-4'><strong>District:</strong> {} </div>
      <div className='grid-5-8'><strong>Address:</strong> {} </div>
      <div className='grid-9-12'><strong>Pin Code:</strong> {} </div>
      <div className='grid-1-4'><strong>Last Donation Date:</strong> {} </div>
      
      <h3 className='grid-1-4'>Medical History:</h3>
      <div className='grid-1-4'><strong>Allergies:</strong> {} </div>
      <div className='grid-5-8'><strong>Current Medications:</strong> {} </div>
      <div className='grid-9-12'><strong>Past Surgeries:</strong> {} </div>
      <div className='grid-1-4'><strong>Chronic Conditions:</strong> {} </div>
      <div className='grid-5-8'><strong>Infectious Diseases:</strong> {} </div>

      
      

      <p className='grid-1-4'>Thank you for completing the registration process!</p>
      
      {/* <button onClick={onSubmit}>Submit</button> */}
  
    </div>
  );
}

export default DonorRegistrationFormStep3;



