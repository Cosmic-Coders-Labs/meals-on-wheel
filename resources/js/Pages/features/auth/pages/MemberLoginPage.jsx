import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import { FaUserCircle } from "react-icons/fa";
import MemberLoginForm from "../components/MemberLoginForm";
import LoginBtns from "../components/LoginBtns";

const MemberLoginPage = () => {
    return (
        <section className="flex flex-col min-h-screen">
            <Header />
            <div className=" container mx-auto">
                {/* icon and text */}
                <div className=" flex flex-col items-center justify-center mt-10">
                    <FaUserCircle className=" size-14 text-secondary-500" />
                    <h1 className=" text-3xl font-bold text-secondary-500">
                        Member Login
                    </h1>
                </div>

                {/* login form */}
                <MemberLoginForm />

                {/* 3 buttons */}
                <LoginBtns currentLogin={"member"}/>
            </div>
            <Footer />
        </section>
    );
};

export default MemberLoginPage;