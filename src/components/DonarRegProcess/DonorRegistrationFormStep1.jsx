import React, { useState } from 'react';
import './SignUpForm.css'

function DonorRegistrationFormStep1({ onNext, addDonor}) {
    const [donor, setDonor] = useState({
      id: '',
      name: '',
      age: '',
      gender: '',
      father_name: '',
      blood_group: '',
      weight: '',
      contact_number: '',
      email: '',
      state: '',
      district: '',
      address: '',
      pin_code: '',
      last_donation_date: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setDonor({ ...donor, [name]: value });
      console.log(donor);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addDonor(donor);
      setDonor({
        id: '',
        name: '',
        age: '',
        gender: '',
        father_name: '',
        blood_group: '',
        weight: '',
        contact_number: '',
        email: '',
        state: '',
        district: '',
        address: '',
        pin_code: '',
        last_donation_date: ''
      });
      onNext();
    };
  

  return (
    <>
      <div className="donor-registration-form">
        <form onSubmit={handleSubmit} className='forms' >
          <h2 className='grid-1-5'>Step 1: Personal Information</h2>
          <div className='form-group grid-1-4'>
            <label>Donar ID:</label>
            <input type="text" name="id" value={donor.id} onChange={handleChange} placeholder='ID'  required />
          </div>

          <div className="form-group grid-1-4">
            <label>Name:</label>
            <input type='text' name="name" value={donor.name} onChange={handleChange} placeholder="Name" required />
          </div>

          <div className="form-group grid-5-8">
            <label>Age:</label>
            <input type='number' name="age" value={donor.age} onChange={handleChange} placeholder="Age" required />
          </div>

          <div className="form-group grid-9-12">
            <label>Gender:</label>
            <select name="gender" value={donor.gender} onChange={handleChange} placeholder="Gender" required >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group grid-1-4">
            <label>Father Name:</label>
            <input type='text' name="father_name" value={donor.father_name} onChange={handleChange} placeholder="Father Name" required />
          </div>

          <div className="form-group grid-5-8">
            <label>Blood Group:</label>
            <input type='text' name="blood_group" value={donor.blood_group} onChange={handleChange} placeholder="Blood Group" required />
          </div>

          <div className="form-group grid-9-12">
            <label>Weight (kg):</label>
            <input type='number' name="weight" value={donor.weight} onChange={handleChange} placeholder="Weight" required />
          </div>

          <div className="form-group grid-1-4">
            <label>Mobile:</label>
            <input type='number' name="contact_number" value={donor.contact_number} onChange={handleChange} placeholder="Contact Number" required />
          </div>

          <div className="form-group grid-5-8">
            <label>Email:</label>
            <input type='email' name="email" value={donor.email} onChange={handleChange} placeholder="Email" required />
          </div>

          <div className="form-group grid-9-12">
            <label>State:</label>
            <input type='text' name="state" value={donor.state} onChange={handleChange} placeholder="State" required />
          </div>

          <div className="form-group grid-1-4">
            <label>District:</label>
            <input type='text' name="district" value={donor.district} onChange={handleChange} placeholder="District" required />
          </div>

          <div className="form-group grid-5-8">
            <label>Address:</label>
            <textarea name="address" value={donor.address} onChange={handleChange} placeholder="Address" required />
          </div>

          <div className="form-group grid-9-12">
            <label>PinCode:</label>
            <input type='number' name="pin_code" value={donor.pin_code} onChange={handleChange} placeholder="Pin Code" required />
          </div>

          <div className="form-group grid-1-4">
            <label>Last Donation Date:</label>
            <input type='date' name="last_donation_date" value={donor.last_donation_date} onChange={handleChange} placeholder="Last Donation Date" required />
          </div>

          <div className="form-group grid-5-8">
            <button type="submit">Add Donor</button>
          </div>

          
        </form>
      </div>
    </>
  );
}

export default DonorRegistrationFormStep1;

