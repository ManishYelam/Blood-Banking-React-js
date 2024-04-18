import React, { useState } from 'react';
import './AppointmentScheduler.css';

const AppointmentScheduler = () => {
    const [selectedDate, setSelectedDate] = useState('');
  
    const handleDateChange = (e) => {
      setSelectedDate(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Implement appointment scheduling logic
      console.log(selectedDate);
    };

  return (
    <>
    <div className="appointment-scheduler">
      <h2>Appointment Scheduler</h2>
      <form onSubmit={handleSubmit}>
        <input type="date" value={selectedDate} onChange={handleDateChange} required />
        <button type="submit">Schedule Appointment</button>
      </form>
    </div>
    </>
  )
}

export default AppointmentScheduler;






