import React from 'react'
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';

import { FaUserCircle } from "react-icons/fa";
import RegistrationForm from '../components/RegistrationForm';
import MemberRegisterForm from '../components/MemberRegisterForm';
import RegisterBtns from '../components/RegisterBtns';

const MemberRegisterPage = () => {
  return (
    <section className="flex flex-col min-h-screen">
        <Header />
        <div className=" container mx-auto">
            {/* icon and text */}
            <div className=" flex flex-col items-center justify-center mt-10">
                <FaUserCircle className=" size-14 text-secondary-500" />
                <h1 className=" text-3xl font-bold text-secondary-500">
                  {/* Registration */}
                    Member Registration
                </h1>
            </div>

            {/* login form */}
            {/* <RegistrationForm /> */}
            <MemberRegisterForm />

            {/* 3 buttons */}
            {/* <LoginBtns currentLogin={"member"}/> */}
            {/* 3 buttons */}
            <RegisterBtns currentRegister={"member"} />
        </div>
        <Footer />
    </section>
);

};
export default MemberRegisterPage;
