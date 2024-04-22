import React, { useState } from 'react';

function DonorRegistrationFormStep1({ onNext }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    fatherName: '',
    bloodType: '',
    weight: '',
    mobileNo: '',
    email: '',
    state: '',
    district: '',
    address: '',
    pincode: '',
    lastDonationDate: ''

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    // Add form validation logic here
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
<div className="donor-registration-form">

<form className='forms' >
<h2 className='grid-1-5'>Step 1: Personal Information</h2>
  <div className="form-group grid-1-4">
    <label>Name:</label>
    <input type="text" name="name" onChange={handleChange} placeholder='First Name'  required />
  </div>

  <div className="form-group grid-5-8" >
    <label>Age:</label>
    <input type="number" name="age" onChange={handleChange} placeholder='Age'  required />
  </div>

  <div className="form-group grid-9-12">
    <label>Gender:</label>
    <select name="gender" onChange={handleChange} placeholder="Select Value" required>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>
  
  <div className="form-group grid-1-4">
    <label>Father Name:</label>
    <input type="text" name="fathername" onChange={handleChange} placeholder='Father Name'  required />
  </div>

  <div className="form-group grid-5-8">
    <label>Blood Type:</label>
    <input type="text" name="bloodType" onChange={handleChange} required />
  </div>

  <div className="form-group grid-9-12">
    <label>Weight (kg):</label>
    <input type="number" name="weight" onChange={handleChange} required />
  </div>

  <div className="form-group grid-1-4">
    <label>Mobile:</label>
    <input type="text" name="phone" onChange={handleChange} placeholder='Mobile No.' required />
  </div>

  <div className="form-group grid-5-8">
    <label>Email:</label>
    <input type="email" name="email" onChange={handleChange} placeholder='Email'  required />
  </div>

  <div className="form-group grid-9-12">
    <label>State:</label>
    <input type="text" name="State" onChange={handleChange} placeholder='Select State'  required />
  </div>
  
  <div className="form-group grid-1-4">
    <label>District:</label>
    <input type="text" name="District" onChange={handleChange} placeholder='Select District'  required />
  </div>
  
  <div className="form-group grid-5-8">
    <label>Address:</label>
    <textarea name="address" onChange={handleChange} required />
  </div>

  <div className="form-group grid-9-12">
    <label>PinCode:</label>
    <input type="number" name="weight" onChange={handleChange} placeholder='PinCode' required />
  </div>

  <div className="form-group grid-1-4">
    <label>Last Donation Date:</label>
    <input type="date" onChange={handleChange} name="lastDonationDate"   />
  </div>
 
</form>
</div>
      
    </form>
  );
}

export default DonorRegistrationFormStep1;
