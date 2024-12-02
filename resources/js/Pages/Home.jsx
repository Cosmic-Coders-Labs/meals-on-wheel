import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';

const Home = () => {
  return (
    <main className=' flex flex-col min-h-screen'>
      <Header />
      <h1 className=' container mx-auto'>Home</h1>
      <Footer />
    </main>
  )
}

export default Home;

