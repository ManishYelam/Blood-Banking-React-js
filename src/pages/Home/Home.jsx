import React from 'react';
import './Home.css';
import ContactUs from '../../components/ContactUs/ContactUs';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import DonationImportance from '../About/DonationImportance';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import AboutUs from '../../components/AboutUs/AboutUs';



function Home() {
  return (
    <>
    <div className="home d-flex-col-gap">
     
      <Header />
      <DonationImportance />
      <Table />
      <AboutUs />
      <HowItWorks />
      <ContactUs />
      <Footer />
      
    </div>
    </>
  );
}

export default Home;
