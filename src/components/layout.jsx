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
                                <Link to="/" >Home</Link>
                                <Link to="/about" >About</Link>
                                <Link to="/" >Service</Link>
                                <Link to="/" >Blog</Link>
                                <Link to="/contact" >Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="sm:hidden hidden menu-continer" id="mobile-menu">
                    <ul className="px-2 pb-3 space-y-1">
                        <li className="nav-btn"><Link to="/">Home</Link></li>
                        <li className="nav-btn"><Link to="/about" >About</Link></li>
                        <li className="nav-btn"><Link to="/" >Service</Link></li>
                        <li className="nav-btn"><Link to="/" >Blog</Link></li>
                        <li className="nav-btn"><Link to="/contact" >Contact</Link></li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout