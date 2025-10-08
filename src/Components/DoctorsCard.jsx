import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const DoctorsCard = ({ doctor }) => {
    if (!doctor) {
        return null;
    }

    // A helper to format the department name nicely (e.g., "general-physician" -> "General Physician")
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
            {/* Background decorative shapes */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-200 opacity-20 rounded-full mix-blend-multiply filter blur-xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-teal-200 opacity-20 rounded-full mix-blend-multiply filter blur-xl group-hover:scale-150 transition-transform duration-700 delay-100"></div>

            <div className="flex flex-col items-center relative z-10">
                {/* Doctor's Image - Corrected Path */}
                <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-blue-300 group-hover:border-blue-500 transition-colors duration-300 transform group-hover:scale-105">
                    <img
                        // ✅ Correctly accesses the nested URL and provides a fallback
                        src={doctor.image?.url || 'https://placehold.co/144x144/E0E7FF/3B82F6?text=Dr'}
                        alt={`Dr. ${doctor.name || 'N/A'}`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center leading-tight">
                    {doctor.name || 'Doctor Name'}
                </h3>

                {/* Specialization - Using department field */}
                <p className="text-blue-700 text-lg font-semibold text-center mb-3">
                    {specialization}
                </p>

                {/* Qualifications - Using education field as a string */}
                <p className="text-gray-600 text-base text-center mb-6 px-2">
                    {/* ✅ Displays 'education' as a string, no .join() needed */}
                    {doctor.education || 'Qualifications not listed'}
                </p>

                {/* View Profile Button */}
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out group-hover:shadow-lg">
                    View Profile
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
            </div>
        </motion.div>
    );
};

export default DoctorsCard;