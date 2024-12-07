import React from 'react'
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import DonationForm from './components/DonationForm';

const DonationPage = () => {
  return (
      <section className="flex flex-col min-h-screen">
          <Header />
          <DonationForm />
          <Footer />
      </section>
  );
}
export default DonationPage
