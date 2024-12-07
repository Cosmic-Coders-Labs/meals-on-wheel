import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import { FaUserTie } from "react-icons/fa";
import RegisterBtns from "../components/RegisterBtns";
import PartnerRegisterForm from "../components/PartnerRegisterForm";

const PartnerRegisterPage = () => {
    return (
        <section className="flex flex-col min-h-screen">
            <Header />
            <div className=" container mx-auto">
                {/* icon and text */}
                <div className=" flex flex-col items-center justify-center mt-10">
                    <FaUserTie className=" size-14 text-secondary-500" />
                    <h1 className=" text-3xl font-bold text-secondary-500">
                        Partner Registration
                    </h1>
                </div>

                {/* login form */}
                <PartnerRegisterForm />

                {/* 3 buttons */}
                <RegisterBtns currentRegister={"partner"} />
            </div>
            <Footer />
        </section>
    );
};

export default PartnerRegisterPage;
