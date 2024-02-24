import { Outlet, Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import name from '../assets/images/name.png';
import '../App';
import '../styles/tailwind.css';

const Layout = () => {
    return (
        <>
            <nav className="w-full nav-bar">
                <div className='w-full page-container top-bar'>
                    <div className=' max-width'>
                        hayya.com
                    </div>
                </div>
                <div className='w-full page-container nav-header'>
                    <div className=' max-width flex items-center justify-between gap-2'>
                        <Link className='flex gap-2 items-center' to="/">
                            <img className='logo' src={logo} alt="logo" />
                            <img className='name' src={name} alt="name" />
                        </Link>
                        <div className='flex gap-5'>
                            <Link to="/" className='nav-btn'>Home</Link>
                            <Link to="/about" className='nav-btn'>About</Link>
                            <Link to="/" className='nav-btn'>Service</Link>
                            <Link to="/" className='nav-btn'>Blog</Link>
                            <Link to="/contact" className='nav-btn'>Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;