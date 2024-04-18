import React, { useState } from 'react';
import Stepper from './Stepper';


const MyComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Step 1', 'Step 2', 'Step 3'];

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      <Stepper steps={steps} currentStep={currentStep} />

      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Previous</button>
    </div>
  );
};

export default MyComponent;
