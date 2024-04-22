import React, { useState } from 'react';
import './SignUpForm.css'; 
import DonorRegistrationFormStep1 from './DonorRegistrationFormStep1';
import DonorRegistrationFormStep2 from './DonorRegistrationFormStep2';
import DonorRegistrationFormStep3 from './DonorRegistrationFormStep3';

const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const [personalDetails, setPersonalDetails] = useState({});
  const [medicalHistory, setMedicalHistory] = useState({});

  const handlePersonalDetailsSubmit = (data) => {
    setPersonalDetails(data);
    setStep(step + 1);
  };

  const handleMedicalHistorySubmit = (data) => {
    setMedicalHistory(data);
    setStep(step + 1);
  };

  const handleConfirmation = () => {
    // Handle confirmation logic, e.g., send data to server
    console.log("Confirmation data:", { ...personalDetails, ...medicalHistory });
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <div className="progress-bar">
        <div className={`step ${step === 1 ? 'active' : ''}`}>Step 1: Personal Information</div>
        <div className={`step ${step === 2 ? 'active' : ''}`}>Step 2: Medical History</div>
        <div className={`step ${step === 3 ? 'active' : ''}`}>Step 3: Confirmation</div>
      </div>
      {step === 1 && (
        <PersonalDetailsForm
          onSubmit={handlePersonalDetailsSubmit}
          onPrevious={handlePrevious}
        />
      )}
      {step === 2 && (
        <MedicalHistoryForm
          onSubmit={handleMedicalHistorySubmit}
          onPrevious={handlePrevious}
        />
      )}
      {step === 3 && (
        <ConfirmationForm
          personalDetails={personalDetails}
          medicalHistory={medicalHistory}
          onConfirm={handleConfirmation}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
};

const PersonalDetailsForm = ({ onSubmit, onPrevious }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 1: Personal Details</h2>
      <DonorRegistrationFormStep1></DonorRegistrationFormStep1>
      {/* Personal details form fields */}
      <div className='button1'>
      <button type="button" onClick={onPrevious}>Previous</button>
      <button type="submit">Next</button>
      </div>
    </form>
  );
};

const MedicalHistoryForm = ({ onSubmit, onPrevious }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 2: Medical History</h2>
      <DonorRegistrationFormStep2></DonorRegistrationFormStep2>
      {/* Medical history form fields */}
      <div className='button1'>
      <button type="button" onClick={onPrevious}>Previous</button>
      <button type="submit">Next</button>
      </div>
    </form>
  );
};

const ConfirmationForm = ({ personalDetails, medicalHistory, onConfirm, onPrevious }) => {
  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <DonorRegistrationFormStep3></DonorRegistrationFormStep3>
      {/* Display personal details and medical history */}
      <div className='button1'>
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onConfirm}>Confirm & Submit</button>
      </div>
    </div>
  );
};

export default SignUpForm;
