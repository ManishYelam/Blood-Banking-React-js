import React from 'react';
import './Header.css';
import DonateButton from '../DonateButton/DonateButton';


function Header() {




  return (
    <>
     <div className="welcome font-b">
      <div className="welcome-message ">
        <div className="message-one d-flex-col font-b">
          <h1 className='d-flex p-20'>Welcome to Blood Banking</h1>
          <h2>Donate blood and save lives</h2>
          <h3>Give the gift of life to others. Donate blood!</h3>
          <p className='font-r'>We are committed to saving lives by providing a platform for blood donation and transfusion.</p>
          
        </div>
      </div>
    
      <div className='message-two font-r '>
        <div className='image' ></div>
        <div className='center-para'>
         <DonateButton />
         <p>Give the gift of life to others. Donate blood!</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Header;

