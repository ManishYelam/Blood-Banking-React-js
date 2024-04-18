import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <>
    <section className='contact'>
    <h2>Contact Us</h2>
    <div className="contact-us font-r tp-5 tb-5">
      <h3 className='font-b'>Contact Us</h3>
      <p>If you have any questions or would like to get involved, please contact us:</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button className='font-komikax' type="submit">Submit</button>
      </form>
    </div>
    </section>
    </>
  );
};

export default ContactUs;
