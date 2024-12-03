import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import { FaUserNurse } from "react-icons/fa";
import LoginBtns from "../components/LoginBtns";
import LoginForm from "../components/LoginForm";
const CaregiverLoginPage = () => {
    return (
        <section className="flex flex-col min-h-screen">
            <Header />
            <div className=" container mx-auto">
                {/* icon and text */}
                <div className=" flex flex-col items-center justify-center mt-10">
                    <FaUserNurse className=" size-14 text-secondary-500" />
                    <h1 className=" text-3xl font-bold text-secondary-500">
                        Caregiver Login
                    </h1>
                </div>

                {/* login form */}
                <LoginForm
                    email="caregiverEmail"
                    password="caregiverPassword"
                    link="/caregiver/register"
                />

                {/* 3 buttons */}
                <LoginBtns currentLogin={"caregiver"} />
            </div>
            <Footer />
        </section>
    );
};

export default CaregiverLoginPage;
