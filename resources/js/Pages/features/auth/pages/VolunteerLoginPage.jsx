import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import LoginBtns from "../components/LoginBtns";
import VolunteerLoginForm from "../components/VolunteerLoginForm";
import { MdVolunteerActivism } from "react-icons/md";

const VolunteerLoginPage = () => {
    return (
        <section className="flex flex-col min-h-screen">
            <Header />
            <div className=" container mx-auto">
                {/* icon and text */}
                <div className=" flex flex-col items-center justify-center mt-10">
                    <MdVolunteerActivism className=" size-14 text-secondary-500" />
                    <h1 className=" text-3xl font-bold text-secondary-500">
                        Volunteer Login
                    </h1>
                </div>

                {/* login form */}
                <VolunteerLoginForm />

                {/* 3 buttons */}
                <LoginBtns currentLogin={"volunteer"} />
            </div>
            <Footer />
        </section>
    );
};

export default VolunteerLoginPage;
