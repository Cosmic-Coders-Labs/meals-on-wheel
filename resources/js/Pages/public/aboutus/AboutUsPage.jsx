import React from "react";
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import WhoWeAre from "./Components/WhoWeAre";
import LearnMore from "./Components/LearnMore";
import OurPartners from "./Components/OurPartners";
import DonationImpact from "./components/DonationImpact";

const AboutUsPage = () => {
    console.log("About Us Page rendered");
    return (
        <section className=" flex flex-col min-h-screen">
            <Header />
            <WhoWeAre />
            <LearnMore />
            <OurPartners />
            <DonationImpact />
            <Footer />
        </section>
    );
};

export default AboutUsPage;
