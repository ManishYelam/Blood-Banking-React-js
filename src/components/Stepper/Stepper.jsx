import React from 'react';
import './Stepper.css';

function Stepper({ steps, currentStep }) {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div key={index} className={`step ${index === currentStep ? 'active' : ''}`}>
          {step}
        </div>
      ))}
    </div>
  );
}

export default Stepper;
