import React from 'react';

const BloodDrop = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="500"
      height="500"
      viewBox="0 0 500 500"
    >
      <g>
        {/* Blood drop shape */}
        <circle cx="250" cy="250" r="8" fill="#FF0000" />
        {/* Animation */}
        
        <path
          id="path"
          d="M250,250 Q350,400 250,500 Q150,400 250,250 Z"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default BloodDrop;
