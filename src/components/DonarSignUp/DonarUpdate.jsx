import React from 'react'

function DonarUpdate() {
  return (
    <div className="donor-registration-form">
      <form className='forms' >
      <h2 className='grid-2-7'>Donor Update Details</h2>
        <div className="form-group grid-2-7">
          <label>Name:</label>
          <input type="text" name="name" placeholder='First Name'  required />
        </div>

        <div className="form-group grid-7-12" >
          <label>Age:</label>
          <input type="number" name="age" placeholder='Age'  required />
        </div>

        <div className="form-group grid-2-7">
          <label>Gender:</label>
          <select name="gender" placeholder="Select Value" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-group grid-7-12">
          <label>Father Name:</label>
          <input type="text" name="fathername" placeholder='Father Name'  required />
        </div>

        <div className="form-group grid-2-7">
          <label>Blood Type:</label>
          <input type="text" name="bloodType"   required />
        </div>

        <div className="form-group grid-7-12">
          <label>Weight (kg):</label>
          <input type="number" name="weight"  required />
        </div>

        <div className="form-group grid-2-7">
          <label>Mobile:</label>
          <input type="text" name="phone" placeholder='Mobile No.' required />
        </div>

        <div className="form-group grid-7-12">
          <label>Email:</label>
          <input type="email" name="email" placeholder='Email'  required />
        </div>

        <div className="form-group grid-2-7">
          <label>State:</label>
          <input type="text" name="State" placeholder='Select State'  required />
        </div>
        
        <div className="form-group grid-7-12">
          <label>District:</label>
          <input type="text" name="District" placeholder='Select District'  required />
        </div>
        
        <div className="form-group grid-2-7">
          <label>Address:</label>
          <textarea name="address"   required />
        </div>

        <div className="form-group grid-7-12">
          <label>PinCode:</label>
          <input type="number" name="weight" placeholder='PinCode' required />
        </div>

        <div className="form-group grid-2-7">
          <label>Last Donation Date:</label>
          <input type="date" name="lastDonationDate"   />
        </div>
        
        <div className='signup grid-6-8'>
        <button className='btn-reg' type="submit">Update</button>
        </div>
        
      </form>
    </div>
  )
}

export default DonarUpdate