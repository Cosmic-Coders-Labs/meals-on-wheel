import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/logo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { url } = usePage();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/donor/donate", label: "Donate" },
        { href: "/weekly-meal-plan", label: "Get Meal" },
    ];

    return (
        <header className="z-50 w-full border-b border-secondary-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4 md:py-5">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <img
                            src={logo}
                            className="h-10 w-10 md:h-16 md:w-16"
                            alt="logo"
                        />
                        <span className="text-lg md:text-xl font-bold text-secondary-400">
                            Meals On Wheel
                        </span>
                    </Link>

                    {/* Navigation for larger screens */}
                    <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.href}
                                href={item.href}
                                currentUrl={url}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Auth buttons for larger screens */}
                    <div className="hidden md:flex items-center space-x-2">
                        <AuthButton href="/member/register" primary>
                            Register
                        </AuthButton>
                        <span className="text-secondary-400">/</span>
                        <AuthButton href="/member/login">Login</AuthButton>
                    </div>

                    {/* Hamburger menu for mobile */}
                    <button
                        className="md:hidden text-secondary-400"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.href}
                                    href={item.href}
                                    currentUrl={url}
                                    mobile
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </nav>
                        <div className="mt-4 flex flex-col space-y-2">
                            <AuthButton href="/member/register" primary mobile>
                                Register
                            </AuthButton>
                            <AuthButton href="/member/login" mobile>
                                Login
                            </AuthButton>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

const NavLink = ({ href, children, currentUrl, mobile }) => {
    const isActive = currentUrl === href;

    return (
        <Link
            href={href}
            className={`relative inline-block active:scale-95  hover:text-secondary-400
        ${
            mobile
                ? "text-lg"
                : "text-base lg:text-lg before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-secondary-400 before:transition-all before:duration-500 hover:before:w-full"
        }
        ${isActive ? "text-secondary-600" : ""}`}
        >
            {children}
        </Link>
    );
};

const AuthButton = ({ href, children, primary, mobile }) => (
    <Link
        href={href}
        className={`relative inline-block py-2 px-4 rounded-md active:scale-95 transition-all duration-300 text-center
      ${
          primary
              ? "bg-secondary-600 text-white hover:bg-secondary-700"
              : "border border-secondary-600 text-secondary-600 hover:bg-secondary-600 hover:text-white"
      }
      ${mobile ? "w-full" : "hover:scale-105"}`}
    >
        {children}
    </Link>
);

export default Header;
