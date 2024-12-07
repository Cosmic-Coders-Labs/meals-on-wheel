import React from "react";
import { Link } from "@inertiajs/react";

const LoginBtns = ({ currentLogin }) => {
    const buttonData = [
        {
            type: "member",
            label: "Member Login",
            href: "/member/login",
            bgColor: "bg-accent-600",
        },
        {
            type: "caregiver",
            label: "Caregiver Login",
            href: "/caregiver/login",
            bgColor: "bg-teal-600",
        },
        {
            type: "partner",
            label: "Partner Login",
            href: "/partner/login",
            bgColor: "bg-sky-600",
        },
        {
            type: "volunteer",
            label: "Volunteer Login",
            href: "/volunteer/login",
            bgColor: "bg-primary-600",
        },
    ];

    const filteredButtons = buttonData.filter(
        (button) => button.type !== currentLogin
    );

    return (
        <div className="mb-10 flex items-center justify-center gap-3">
            {filteredButtons.map((button) => (
                <Link key={button.type} href={button.href}>
                    <button
                        className={`px-4 py-2 text-white ${button.bgColor} rounded-md hover:scale-105 active:scale-95`}
                    >
                        {button.label}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default LoginBtns;
