import React from "react";
import { Link } from "@inertiajs/react";

const RegisterBtns = ({ currentRegister }) => {
    const buttonData = [
        {
            type: "member",
            label: "Member Register",
            href: "/member/register",
            bgColor: "bg-accent-600",
        },
        {
            type: "caregiver",
            label: "Caregiver Register",
            href: "/caregiver/register",
            bgColor: "bg-teal-600",
        },
        {
            type: "partner",
            label: "Partner Register",
            href: "/partner/register",
            bgColor: "bg-sky-600",
        },
        {
            type: "volunteer",
            label: "Volunteer Register",
            href: "/volunteer/register",
            bgColor: "bg-primary-600",
        },
    ];

    const filteredButtons = buttonData.filter(
        (button) => button.type !== currentRegister
    );

    return (
        <div className="mb-10 flex items-center justify-center gap-3">
            {filteredButtons.map((button) => (
                <Link key={button.type} href={button.href}>
                    <button
                        className={`px-4 py-2 text-white ${button.bgColor} outline-none rounded-md hover:scale-105 active:scale-95`}
                    >
                        {button.label}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default RegisterBtns;
