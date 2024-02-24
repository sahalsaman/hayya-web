import { Outlet, Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import name from '../assets/images/name.png';
import { useEffect } from "react";
import './layout.css';

const Layout = () => {
    useEffect(() => {
        const toggleMenu = () => {
            var mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        };

        document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

        return () => {
            document.getElementById('menu-toggle').removeEventListener('click', toggleMenu);
        };
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    return (
        <>
            <nav className=" ">
                <div className="w-full">
                    {/* Top Bar */}
                    <div className="top-bar w-full flex justify-center">
                        <div className="max-width">
                            <span className="">hayya.com</span>
                        </div>
                    </div>

                    {/* Navbar Header */}
                    <div className="w-full nav-header flex justify-center">
                        <div className="max-width  flex justify-between items-center">
                            <Link to="/" className="flex items-center gap-2">
                                <img className="logo" src={logo} alt="Logo" />
                                <img className="name" src={name} alt="Name" />
                            </Link>

                            {/* Mobile Menu Button */}
                            <button className="block sm:hidden text-gray-600 focus:outline-none" id="menu-toggle">
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {/* Navbar Links */}
                            <div className="hidden sm:flex items-center gap-5">
                                <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
                                <Link to="/about" className="text-gray-800 hover:text-gray-600">About</Link>
                                <Link to="/" className="text-gray-800 hover:text-gray-600">Service</Link>
                                <Link to="/" className="text-gray-800 hover:text-gray-600">Blog</Link>
                                <Link to="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="sm:hidden hidden" id="mobile-menu">
                    <ul className="px-2 pb-3 space-y-1">
                        <li><Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link></li>
                        <li><Link to="/about" className="text-gray-800 hover:text-gray-600">About</Link></li>
                        <li><Link to="/" className="text-gray-800 hover:text-gray-600">Service</Link></li>
                        <li><Link to="/" className="text-gray-800 hover:text-gray-600">Blog</Link></li>
                        <li><Link to="/contact" className="text-gray-800 hover:text-gray-600">Contact</Link></li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout