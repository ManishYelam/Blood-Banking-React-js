// Projects.js
import './LookingForBlood.css'

const LookingForBlood = () => {
	return (
		<>
		<div className="look-blood  d-flex-col-gap">
	
  <div class="container">
    <p>If you need blood, please contact us.</p>
    <h2>Blood Inventory</h2>
    <table>
      <tr>
        <th>Blood Type</th>
        <th>Stock</th>
      </tr>
      <tr>
        <td>A+</td>
        <td>25 units</td>
      </tr>
      <tr>
        <td>A-</td>
        <td>15 units</td>
      </tr>
      <tr>
        <td>B+</td>
        <td>20 units</td>
      </tr>
      <tr>
        <td>B-</td>
        <td>10 units</td>
      </tr>
      <tr>
        <td>AB+</td>
        <td>30 units</td>
      </tr>
      <tr>
        <td>AB-</td>
        <td>5 units</td>
      </tr>
      <tr>
        <td>O+</td>
        <td>35 units</td>
      </tr>
      <tr>
        <td>O-</td>
        <td>12 units</td>
      </tr>
    </table>
  </div>

		</div>
		
		</>
	)
}

export default LookingForBlood;
