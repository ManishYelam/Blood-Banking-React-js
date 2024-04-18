import React from 'react'
import './Table.css';

function Table() {
  return (
    <>
        <section className="outer-container font-r">
        <h2 className='font-b'>Learn About Donation</h2>
        <div className="container">
          <div class="search-blood-process"> 
          <div class="step-2">
            <div class="step-icon table-icon">
              {/* <img src="search-icon.png" alt="Search"> */}
            </div>
            
            <table className="table">
            <tbody>
              <tr>
                <th colSpan={3}>
                  Compatible Blood Type Donors
                </th>
              </tr>
              <tr>
                <td><b>Blood Type</b></td>
                <td><b>Donate Blood To</b></td>
                <td><b>Receive Blood From</b></td>
              </tr>
              <tr>
                <td>
                  <span ><b>A+</b></span>
                </td>
                <td>A+ AB+</td>
                <td>A+ A- O+ O-</td>
              </tr>
              <tr>
                <td>
                  <span ><b>O+</b></span>
                </td>
                <td>O+ A+ B+ AB+</td>
                <td>O+ O-</td>
              </tr>
              <tr>
                <td>
                  <span ><b>B+</b></span>
                </td>
                <td>B+ AB+</td>
                <td>B+ B- O+ O-</td>
              </tr>
              <tr>
                <td>
                  <span ><b>AB+</b></span>
                </td>
                <td>AB+</td>
                <td>Everyone</td>
              </tr>
              <tr>
                <td>
                  <span ><b>A-</b></span>
                </td>
                <td>A+ A- AB+ AB-</td>
                <td>A- O-</td>
              </tr>
              <tr>
                <td>
                  <span ><b>O-</b></span>
                </td>
                <td>Everyone</td>
                <td>O-</td>
              </tr>
              <tr>
                <td>
                  <span ><b>B-</b></span>
                </td>
                <td>B+ B- AB+ AB-</td>
                <td>B- O-</td>
              </tr>
              <tr>
                <td>
                  <span ><b>AB-</b></span>
                </td>
                <td>AB+ AB-</td>
                <td>AB- A- B- O-</td>
              </tr>
            </tbody>
        </table>
          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default Table;