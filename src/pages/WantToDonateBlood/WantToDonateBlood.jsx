import { useState } from 'react';
import DonarSignIn from '../../components/DonarSignIn/DonarSignIn';
import SignUpForm from '../../components/DonarRegProcess/SignUpForm';
import Footer from '../../components/Footer/Footer';

import './WantToDonateBlood.css';

const WantToDonateBlood = () => {

	const [DonarRegistration, setDonarRegistration] = useState(true);

	const toggleRegistration = () => {
		setDonarRegistration(!DonarRegistration);
	};

	return (
		<>
		
		{DonarRegistration ? (<DonarSignIn toggleRegistration={toggleRegistration} />) : (<SignUpForm />)}

		{/* <DonarSignIn></DonarSignIn>
		<SignUpForm></SignUpForm> */}
	
		<Footer />
		
		</>
	)
}

export default WantToDonateBlood;
