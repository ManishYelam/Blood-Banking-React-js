import React, { useState } from 'react';
import './SignUpForm.css'
function DonorRegistrationFormStep2({ onNext, onPrev }) {
  const [formData, setFormData] = useState({
    allergies: '',
    medications: '',
    surgeries: '',
    chronicConditions: '',
    infectiousDiseases: ''
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    onNext();
  };



  return (
    <form className='donor-registration-form medical-content forms' onSubmit={handleSubmit}>
      <h2 className='grid-1-4'>Step 2: Medical History</h2>
      <div className='grid-1-4 form-medical'>
        <label htmlFor="allergies">Allergies:</label>
        <input type="text" id="allergies" name="allergies" onChange={handleChange} value={formData.allergies} />
      </div>
      <div className='grid-5-8 form-medical'>
        <label htmlFor="medications">Current Medications:</label>
        <input type="text" id="medications" name="medications" onChange={handleChange}  value={formData.medications} />
      </div>
      <div className='grid-9-12 form-medical'>
        <label htmlFor="surgeries">Past Surgeries:</label>
        <input type="text" id="surgeries" name="surgeries" onChange={handleChange}  value={formData.surgeries} />
      </div>
      <div className='grid-1-4 form-medical'>
        <label htmlFor="chronicConditions">Chronic Conditions:</label>
        <input type="text" id="chronicConditions" name="chronicConditions" onChange={handleChange}  value={formData.chronicConditions}/>
      </div>
      <div className='grid-5-8 form-medical'>
        <label htmlFor="infectiousDiseases">Infectious Diseases:</label>
        <input type="text" id="infectiousDiseases" name="infectiousDiseases" onChange={handleChange}  value={formData.infectiousDiseases} />
      </div>
      
    </form>
  );
}

export default DonorRegistrationFormStep2;




  ;
