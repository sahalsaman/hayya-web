import React from 'react';
import '../../App';
import '../../styles/tailwind.css';

export const About = () => {
    return (
        <div className='w-full page-container'>
            <div className="max-width flex flex-col md:flex-row items-center gap-12">
                <div className="flex-grow w-full md:flex-shrink-0 xsm:w-6/12">
                    <img src="https://wallpapercrafter.com/desktop/5387-airplane-porthole-window-overview-city-4k.jpg" alt="About Us" className="w-full xsm:rounded-lg shadow-lg" />
                </div>
                <div className="text-lg font-medium xsm:m-4">
                    <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
                    <p className="text-gray-600 mt-4">
                    Established in 2021, AMIS Tours Service is a Qatari Owned Travel firm rendering its services to Government, Corporates, Leisure & MICE Travelers. AMIS Tours Service strives to offer the best Travel Management solution whether it may be for individuals, corporate or leisure travelers with the most exclusive services exceeding the expectation of each traveler.</p>  
                     <p className="text-gray-600 mt-4">
We aim to enhance the travel experience for our clients by providing them quality services that addresses to their travel needs which indeed results into satisfied customers.
                    </p>
                    {/* <a href="#" className="text-blue-600 font-bold hover:text-blue-700 transition duration-200 mt-4">LEARN MORE</a> */}
                </div>
            </div>
        </div>
    );
}

