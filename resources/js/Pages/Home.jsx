import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HeroSection from "./Components/HeroSection";
import KeyStatistics from "./Components/KeyStatistics";
import ServicesArea from "./Components/ServicesArea";
import AboutUsSection from "./Components/AboutUsSection";
import WhatWeDeliverSection from "./Components/WhatWeDeliverSection";
import OurDonors from "./Components/OurDonors";

const Home = () => {
    return (
        <main className=" flex flex-col min-h-screen">
            <Header />
            <HeroSection />
            <KeyStatistics />
            <ServicesArea />
            <AboutUsSection />
            <WhatWeDeliverSection />
            <OurDonors />
            <Footer />
        </main>
    );
};

export default Home;
