import React from 'react'

function MedicalHistory() {
  return (
    <div>
        <h2>Step 2: Medical History</h2>
    <div>
      <label>Medical History:</label>
      <textarea name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} required />
    </div>
    </div>
  )
}

export default MedicalHistory;