import React, { useState } from 'react';
import Stepper from './Stepper';
import DonorRegistrationFormStep1 from './DonorRegistrationFormStep1';
import DonorRegistrationFormStep2 from './DonorRegistrationFormStep2';
import DonorRegistrationFormStep3 from './DonorRegistrationFormStep3';

function DonorRegistrationProcess() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Step 1: Personal Information',
    'Step 2: Medical History',
    'Step 3: Confirmation'
  ];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  
  
 
  const onSubmit = () => {
    setCurrentStep(currentStep)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <DonorRegistrationFormStep1 onNext={handleNext} />;
      case 1:
        return <DonorRegistrationFormStep2 onNext={handleNext} onPrev={handlePrev} />;
      case 2:
        return <DonorRegistrationFormStep3 onPrev={handlePrev} onSubmit={onSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Donor Sign-Up/Register</h2>
      <Stepper steps={steps} currentStep={currentStep} />
      {renderStepContent()}

      <div className='step-btn'>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button> 
      </div>
      
    </div>
    
    
  );
}

export default DonorRegistrationProcess;
