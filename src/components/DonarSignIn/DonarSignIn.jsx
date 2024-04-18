import React from 'react'
import './DonarSignIn.css'
import CheckIcon from '../Icons/CheckIcon'
function DonarSignIn() {

  function RegisterNow(){
      console.log("register");
  }


  return (
    
    <div className="donor-login-form">
      <h2 className=''>Donor Sign-In</h2>
      <hr />
      <form className='Sign-form' >
      <div className="sign">
        <div className='signin'>
          <div className="form-g ">
            <label>Mobile:</label>
            <div className="log">
              <div className="mobile">
                <input type="text" name="phone" placeholder='Mobile No.' required />
              </div>
              <div className='signup'>
                <button className='btn-reg' type="submit">Generate OTP</button>
              </div> 
            </div>  
          </div>
        </div>
      </div>

      <form className='register' action="">
        <h3>Registor Now</h3>
        <h4><CheckIcon/> View/Add your Donations</h4>
        <h4><CheckIcon/> Update your Profile</h4>
        <h4><CheckIcon/> Manage your Account</h4>
        <button className='btn-reg' type="submit" onClick={RegisterNow}>Registor Now</button>
      </form>
          
      </form>
    </div>
    
  )
}

export default DonarSignIn