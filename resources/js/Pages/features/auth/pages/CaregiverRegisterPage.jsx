import React from "react";
import RegisterBtns from "../components/RegisterBtns";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import { FaUserNurse } from "react-icons/fa";
import CaregiverRegisterForm from "../components/CaregiverRegisterForm";

const CaregiverRegisterPage = () => {
    return (
        <section className="flex flex-col min-h-screen">
            <Header />
            <div className=" container mx-auto">
                {/* icon and text */}
                <div className=" flex flex-col items-center justify-center mt-10">
                    <FaUserNurse className=" size-14 text-secondary-500" />
                    <h1 className=" text-3xl font-bold text-secondary-500">
                        Caregiver Register
                    </h1>
                </div>

                {/* login form */}
                <CaregiverRegisterForm />
                
                {/* 3 buttons */}
                <RegisterBtns currentRegister={"caregiver"} />
            </div>
            <Footer />
        </section>
    );
};

export default CaregiverRegisterPage;
