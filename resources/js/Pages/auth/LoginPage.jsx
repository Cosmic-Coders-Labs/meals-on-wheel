import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { FaUserCircle } from "react-icons/fa";
import LoginForm from "./components/LoginForm";

const MemberLoginPage = () => {
    return (
        <section className="flex flex-col min-h-screen">
            <Header />
            <div className=" container mx-auto">
                {/* icon and text */}
                <div className=" flex flex-col items-center justify-center mt-10">
                    <FaUserCircle className=" size-14 text-secondary-500" />
                    <h1 className=" text-3xl font-bold text-secondary-500">
                        Sign In
                    </h1>
                </div>

                {/* login form */}
                {/* <MemberLoginForm /> */}
                <LoginForm
                    email="memberEmail"
                    password="memberPassword"
                    link="/register"
                />

                {/* 3 buttons */}
                {/* <LoginBtns currentLogin={"member"} /> */}
            </div>
            <Footer />
        </section>
    );
};

export default MemberLoginPage;
