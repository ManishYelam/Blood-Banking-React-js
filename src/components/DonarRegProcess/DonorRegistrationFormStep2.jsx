import React, { useState } from 'react';
import './SignUpForm.css'
function DonorRegistrationFormStep2({ onNext, addMedicalHistory }) {
  const [history, setHistory] = useState({
    donor_id: '',
    medical_conditions: '',
    medications: '',
    past_surgeries: '',
    chronic_conditions: '',
    infection_diseases: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHistory({ ...history, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert comma-separated strings to arrays
    const formattedHistory = {
      ...history,
      medical_conditions: history.medical_conditions.split(',').map(item => item.trim()),
      medications: history.medications.split(',').map(item => item.trim()),
      past_surgeries: history.past_surgeries.split(',').map(item => item.trim()),
      chronic_conditions: history.chronic_conditions.split(',').map(item => item.trim()),
      infection_diseases: history.infection_diseases.split(',').map(item => item.trim())
    };
    addMedicalHistory(formattedHistory);
    setHistory({
      donor_id: '',
      medical_conditions: '',
      medications: '',
      past_surgeries: '',
      chronic_conditions: '',
      infection_diseases: ''
    });
    onNext();
  };



  return (
    <form className='donor-registration-form medical-content forms' onSubmit={handleSubmit}>
      <h2 className='grid-1-4'>Step 2: Medical History</h2>
      <div className='form-group grid-1-4'>
        <label>Donar ID:</label>
        <input name="donor_id" value={history.donor_id} onChange={handleChange} placeholder="Donor ID" required />
      </div>

      <div className='grid-1-4 form-medical'>
        <label htmlFor="allergies">Allergies:</label>
        <input name="medical_conditions" value={history.medical_conditions} onChange={handleChange} placeholder="Medical Conditions (comma-separated)" required />
      </div>

      <div className='grid-5-8 form-medical'>
        <label htmlFor="medications">Current Medications:</label>
        <input name="medications" value={history.medications} onChange={handleChange} placeholder="Medications (comma-separated)" required />
      </div>

      <div className='grid-9-12 form-medical'>
        <label htmlFor="surgeries">Past Surgeries:</label>
        <input name="past_surgeries" value={history.past_surgeries} onChange={handleChange} placeholder="Past Surgeries (comma-separated)" required />
      </div>

      <div className='grid-1-4 form-medical'>
        <label htmlFor="chronicConditions">Chronic Conditions:</label>
        <input name="chronic_conditions" value={history.chronic_conditions} onChange={handleChange} placeholder="Chronic Conditions (comma-separated)" required />
      </div>

      <div className='grid-5-8 form-medical'>
        <label htmlFor="infectiousDiseases">Infectious Diseases:</label>
        <input name="infection_diseases" value={history.infection_diseases} onChange={handleChange} placeholder="Infection Diseases (comma-separated)" required />
      </div>

      <div className='grid-9-12 form-medical'>
        <button type="submit">Add Medical History</button>
      </div>
      
    </form>
  );
}

export default DonorRegistrationFormStep2;


