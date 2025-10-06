import React from 'react';
import wellnessLogo from '../assets/wellness_logo.png'; // Make sure the path to your logo is correct
import { Phone, Mail, MapPin, ChevronsRight, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer = () => {
    const quickLinks = [
        { text: 'About Us', href: '/about-us' },
        { text: 'Our Specialities', href: '/specialities' },
        { text: 'Our Doctors', href: '/doctors' },
        { text: 'Blogs & Knowledge', href: '/knowledge-center' }
    ];

    const patientLinks = [
        { text: 'Find a Location', href: '/locations' },
        { text: 'Patient Information', href: '/patient-info' },
        { text: 'Careers', href: '/careers' }
    ];

    const socialLinks = [
        { Icon: Facebook, href: 'facebook.com/WellnessHospitalsOfficial' },
        { Icon: Instagram, href: 'instagram.com/wellnesshospital' },
        { Icon: Linkedin, href: '#' },
        { Icon: Youtube, href: 'www.youtube.com/@WellnessHospitals' }
    ];

    return (
        <footer style={{ backgroundColor: '#223366' }} className="text-white pt-16 pb-6 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Main Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">

                    {/* Column 1: Brand & Contact */}
                    <div className="space-y-4">
                        <img src={wellnessLogo} alt="Wellness Hospitals Logo" className="h-16 bg-white p-2 rounded-lg" />
                        <p className="text-gray-300 text-sm">
                            Providing the best healthcare for our patients, from treating rare diseases to conducting major surgeries with medical innovation.
                        </p>
                        <div className="space-y-3">
                            <a href="tel:+919559551955" className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                                <Phone size={20} />
                                <span>+91 955 955 1 955</span>
                            </a>
                            <a href="mailto:care@wellnesshospitals.co.in" className="flex items-center gap-3 hover:text-gray-300 transition-colors">
                                <Mail size={20} />
                                <span>care@wellnesshospitals.co.in</span>
                            </a>
                            <div className="flex items-start gap-3">
                                <MapPin size={20} className="mt-1 flex-shrink-0" />
                                <span>Ameerpet - DK Road, Kompally, Sangareddy & more locations.</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-400 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map(link => (
                                <li key={link.text}>
                                    <a href={link.href} className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 transition-all">
                                        <ChevronsRight size={16} />
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Patient Resources & CTA */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-400 pb-2 inline-block">Patient Resources</h3>
                        <ul className="space-y-3 mb-6">
                            {patientLinks.map(link => (
                                <li key={link.text}>
                                    <a href={link.href} className="flex items-center gap-2 text-gray-300 hover:text-white hover:translate-x-1 transition-all">
                                        <ChevronsRight size={16} />
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a href="/appointment">
                            <button className="bg-white text-[#223366] font-bold py-3 px-6 rounded-lg w-full hover:bg-gray-200 transition-colors duration-300">
                                Book an Appointment
                            </button>
                        </a>
                    </div>

                    {/* Column 4: Newsletter & Socials */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 border-b-2 border-blue-400 pb-2 inline-block">Stay Updated</h3>
                        <p className="text-gray-300 mb-4 text-sm">Subscribe to our newsletter for the latest updates and health tips.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full rounded-l-md px-4 py-2 text-gray-800 outline-none"
                            />
                            <button type="submit" className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition-colors">
                                Go
                            </button>
                        </form>
                        <div className="mt-6">
                            <h4 className="font-semibold text-md mb-3">Connect With Us</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a key={index} href={social.href} className="bg-white/10 p-2 rounded-full text-white hover:bg-white hover:text-[#223366] transition-all duration-300">
                                        <social.Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-white/20 text-center sm:flex sm:justify-between sm:items-center">
                    <p className="text-gray-400 text-sm">
                        Copyright © {new Date().getFullYear()} Wellness Hospitals. All Rights Reserved.
                    </p>
                    <div className="flex justify-center space-x-4 mt-4 sm:mt-0 text-gray-400 text-sm">
                        <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
                        <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};