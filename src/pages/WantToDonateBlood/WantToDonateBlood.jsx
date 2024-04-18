import DonarSignIn from '../../components/DonarSignIn/DonarSignIn';
import DonarSignUp from '../../components/DonarSignUp/PersonalInformation';
import Footer from '../../components/Footer/Footer';
import DonorRegistrationProcess from '../../components/Stepper/DonorRegistrationProcess';
import './WantToDonateBlood.css';

const WantToDonateBlood = () => {
	return (
		<>
		<DonarSignIn />
		<DonorRegistrationProcess />
	
		{/* <DonarSignUp />  */}
		<Footer />
		{/* <DonarSignUp /> */}
		{/* <DonarUpdate />  */}
		{/* <Stepper /> */}
		</>
	)
}

export default WantToDonateBlood;
