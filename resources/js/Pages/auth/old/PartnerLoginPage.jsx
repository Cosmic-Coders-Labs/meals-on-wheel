import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import { FaUserTie } from "react-icons/fa";
import LoginBtns from "../components/LoginBtns";
import LoginForm from "../components/LoginForm";

const PartnerLoginPage = () => {
    return (
        <section className="flex flex-col min-h-screen">
            <Header />
            <div className=" container mx-auto">
                {/* icon and text */}
                <div className=" flex flex-col items-center justify-center mt-10">
                    <FaUserTie className=" size-14 text-secondary-500" />
                    <h1 className=" text-3xl font-bold text-secondary-500">
                        Partner Login
                    </h1>
                </div>

                {/* login form */}
                <LoginForm
                    email="partnerEmail"
                    password="partnerPassword"
                    link="/partner/register"
                />

                {/* 3 buttons */}
                <LoginBtns currentLogin={"partner"} />
            </div>
            <Footer />
        </section>
    );
};

export default PartnerLoginPage;
