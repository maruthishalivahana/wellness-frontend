import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import {
    Stethoscope,
    X,
    Menu,
    LayoutGrid,
    HeartPulse,
    UserPlus,
    ClipboardList,
    Info,
    BookOpen,
    CalendarPlus,
    ArrowRight
} from 'lucide-react';
import Logo from '../assets/wellness_logo.png'
import { showComingSoon } from '../utils/comingSoon';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Style for the active NavLink text
    const activeLinkTextStyle = {
        color: '#223366',
        fontWeight: '600',
    };

    // Centralized navigation links. Store the component reference itself.
    const navLinks = [
        { to: "/", text: "Home", Icon: LayoutGrid },
        { to: "/specialities", text: "Specialities", Icon: HeartPulse },
        { to: "/ourdoctors", text: "Doctors", Icon: UserPlus },
        { to: "/patientinfo", text: "Patient Info", Icon: ClipboardList },
        { to: "/aboutus", text: "About Us", Icon: Info },
        { to: "/knowledgecenter", text: "Knowledge Center", Icon: BookOpen },

        { to: '/admin/login', text: 'Admin', Icon: Stethoscope }
    ];

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Brand Logo and Name */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src={Logo} alt="wellness logo" className='h-30' />
                    </Link>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                            {isOpen ? <X color="#223366" size={28} /> : <Menu color="#223366" size={28} />}
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <ul className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.to} className="relative">
                                    <NavLink
                                        to={link.to}
                                        className="group flex items-center gap-2 text-gray-600 hover:text-[#223366] transition-all duration-300 py-2"
                                    >
                                        {({ isActive }) => {
                                            const iconColor = isActive ? '#223366' : '#4B5563'; // Default to gray-600
                                            return (
                                                <>
                                                    <link.Icon size={20} color={iconColor} />
                                                    <span className="font-medium" style={isActive ? activeLinkTextStyle : {}}>{link.text}</span>
                                                    {/* Animated underline */}
                                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#223366] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                                </>
                                            );
                                        }}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        {/* <Link to="/visitNXPCenters" onClick={showComingSoon}>
                            <button
                                className="flex items-center gap-2 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#223366]/40"
                                style={{ backgroundColor: '#223366' }}
                            >
                                Visit - NXPCenters
                                <CalendarPlus size={20} />
                            </button>
                        </Link> */}
                        <Link to="/appointment" onClick={showComingSoon}>
                            <button
                                className="flex items-center gap-2 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#223366]/40"
                                style={{ backgroundColor: '#223366' }}
                            >
                                Book Appointment
                                <CalendarPlus size={20} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden overflow-hidden bg-white transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen border-t' : 'max-h-0'}`}>
                <ul className="flex flex-col p-4">
                    {navLinks.map((link) => (
                        <li key={link.to} className="w-full">
                            <NavLink
                                to={link.to}
                                className="flex items-center gap-3 w-full p-4 rounded-md hover:bg-blue-50 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {({ isActive }) => (
                                    <>
                                        <link.Icon size={20} color={isActive ? '#223366' : '#4B5563'} />
                                        <span className="font-medium" style={isActive ? activeLinkTextStyle : { color: '#223366' }}>{link.text}</span>
                                    </>
                                )}
                            </NavLink>
                        </li>

                    ))}
                    <li className="mt-4 w-full px-4">
                        <Link
                            to="/appointment"
                            className="block w-full"
                            onClick={(e) => { showComingSoon(e); setIsOpen(false); }}
                        >
                            <button
                                className="flex items-center justify-center gap-3 text-white font-semibold w-full py-3 px-4 rounded-lg shadow-md"
                                style={{ backgroundColor: '#223366' }}
                            >
                                Book Appointment
                                <ArrowRight size={20} />
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

