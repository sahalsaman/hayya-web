import React from 'react';
import '../../App';
import '../../styles/tailwind.css';
import './contact.css'

export const Contact = () => {
    return (
        <div className='w-full relative'>
            <div className='w-full relative'>
                <div className=" bg-cover bg-center bg-fixed contact-bg">
                    <div className='bg-dark'></div>
                </div>
                <div className="absolute top-20 w-full page-container">
                    <div className="max-width">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center">Contact Us</h2>
                        <p className="mt-4 text-lg text-gray-200 text-center">We'd love to hear from you. Drop us a message and we'll get back to you as soon as possible.</p>
                        <form className="mt-8 mx-auto contact-card bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-base font-medium text-gray-700">Name</label>
                                    <input type="text" id="name" name="name" className="mt-1 px-4 py-2 block w-full rounded-md bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-300 focus:ring-0 text-gray-700" placeholder="Enter your name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" name="email" className="mt-1 px-4 py-2 block w-full rounded-md bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-300 focus:ring-0 text-gray-700" placeholder="Enter your email" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <label htmlFor="name" className="block text-base font-medium text-gray-700">Phone</label>
                                    <input type="text" id="name" name="name" className="mt-1 px-4 py-2 block w-full rounded-md bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-300 focus:ring-0 text-gray-700" placeholder="Enter your Phone" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-base font-medium text-gray-700">Subject</label>
                                    <input type="email" id="email" name="email" className="mt-1 px-4 py-2 block w-full rounded-md bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-300 focus:ring-0 text-gray-700" placeholder="Enter Subject" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="message" className="block text-base font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" rows="4" className="mt-1 px-4 py-2 block w-full rounded-md bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-300 focus:ring-0 text-gray-700" placeholder="Enter your message"></textarea>
                            </div>
                            <div className="mt-6">
                                <button type="submit" className="py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className=' w-full page-container contact-detail'>
                <div className="max-width grid grid-cols-3 gap-5">
                    <div class="my-4 mx-8">
                        <svg class="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <p class="mt-2 text-base font-medium text-gray-700">Email us:</p>
                        <p class="text-sm text-gray-600">Email us for general queries, including marketing and partnership opportunities.</p>
                        <a href="mailto:abc@example.com" class="text-primary-600 hover:text-primary-500">hello@flowbite.com</a>
                    </div>
                    <div class="my-4 mx-8">
                        <svg class="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <p class="mt-2 text-base font-medium text-gray-700">Call us:</p>
                        <p class="text-sm text-gray-600">Call us to speak to a member of our team. We are always happy to help.</p>
                        <span class="text-primary-600">+1 (646) 786-5060</span>
                    </div>
                    <div class="my-4 mx-8">
                        <svg class="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p class="mt-2 text-base font-medium text-gray-700">Support</p>
                        <p class="text-sm text-gray-600">Email us for general queries, including marketing and partnership opportunities.</p>
                        <a href="#" class="text-primary-600 hover:text-primary-500">Support center</a>
                    </div>
                </div>

            </div>
        </div>
    );
}
