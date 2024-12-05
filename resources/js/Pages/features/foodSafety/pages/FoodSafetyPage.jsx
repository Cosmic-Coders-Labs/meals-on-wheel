import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer';
import FoodSafetySection from '../components/foodSafetySection';

const FoodSafetyPage = () => {
  return (
      <section className="flex flex-col min-h-screen">
          <Header />
          <FoodSafetySection />
          <Footer />
      </section>
  );
}
export default FoodSafetyPage