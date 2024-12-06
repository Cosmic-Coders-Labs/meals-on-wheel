import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import { MdVolunteerActivism } from "react-icons/md";
import RegisterBtns from "../components/RegisterBtns";
import VolunteerRegisterForm from "../components/VolunteerRegisterForm";

const VolunteerRegisterPage = () => {
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
                <VolunteerRegisterForm />

                {/* 3 buttons */}
                <RegisterBtns currentRegister={"volunteer"} />
            </div>
            <Footer />
        </section>
    );
};

export default VolunteerRegisterPage;
