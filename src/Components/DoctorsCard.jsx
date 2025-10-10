import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // 1. Import the Link component

const DoctorsCard = ({ doctor }) => {
    if (!doctor) {
        return null;
    }

    const specialization = doctor.department
        ? doctor.department.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        : 'Specialist';

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-sm mx-auto rounded-3xl overflow-hidden shadow-xl p-6 bg-gradient-to-br from-blue-50/70 to-white/90 backdrop-blur-md border border-blue-100 group hover:shadow-2xl transition-all duration-500 ease-in-out"
        >
            <div className="flex flex-col items-center relative z-10 cursor-pointer">
                {/* Image, Name, and other details remain the same... */}
                <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-blue-300 group-hover:border-blue-500 transition-colors duration-300 transform group-hover:scale-105">
                    <img
                        src={doctor.image?.url || 'https://placehold.co/144x144/E0E7FF/3B82F6?text=Dr'}
                        alt={`Dr. ${doctor.name || 'N/A'}`}
                        className="w-full h-full object-cover"
                    />
                </div>

                <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center leading-tight">
                    {doctor.name || 'Doctor Name'}
                </h3>

                <p className="text-blue-700 text-lg font-semibold text-center mb-3">
                    {specialization}
                </p>

                <p className="text-gray-600 text-base text-center mb-6 px-2">
                    {doctor.education || 'Qualifications not listed'}
                </p>

                {/* --- THIS IS THE UPDATED SECTION --- */}
                {/* 2. Wrap your button with the Link component */}
                <Link to={`/doctors/profile/${doctor._id}`}>
                    <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out group-hover:shadow-lg cursor-pointer">
                        View Profile
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};

export default DoctorsCard;