import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, GraduationCap, Briefcase, ChevronRight, Phone, Calendar } from 'lucide-react';

const DoctorProfile = () => {
    const { doctorId } = useParams(); // Get the doctor's ID from the URL
    const [activeTab, setActiveTab] = useState('about');

    // Find the specific doctor from the Redux store using the ID
    const doctor = useSelector(state =>
        state.doctor.allDoctors.find(doc => doc._id === doctorId)
    );

    // Show a loading or not found message if the doctor data isn't available yet
    if (!doctor) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <p className="text-xl text-gray-600">Loading doctor's profile or doctor not found...</p>
            </div>
        );
    }

    // Helper to format the department name nicely (e.g., "general-physician" -> "General Physician")
    const specialization = doctor.department
        ? doctor.department.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        : 'Specialist';

    const tabContent = {
        about: {
            title: "About",
            icon: <Stethoscope className="w-6 h-6 mr-3 text-blue-600" />,
            content: doctor.about || "No information available."
        },
        experience: {
            title: "Experience",
            icon: <Briefcase className="w-6 h-6 mr-3 text-blue-600" />,
            content: doctor.experience || "No experience details available."
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* --- Hero Section --- */}
            <header className="relative bg-blue-50 pt-16 pb-24">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <img
                            src={doctor.image?.url || 'https://placehold.co/150x150/E0E7FF/3B82F6?text=Dr'}
                            alt={`Dr. ${doctor.name}`}
                            className="w-40 h-40 rounded-full object-cover border-8 border-white shadow-xl"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center md:text-left"
                    >
                        <h1 className="text-4xl font-extrabold text-blue-900">{doctor.name}</h1>
                        <p className="text-xl font-semibold text-blue-600 mt-1">{specialization}</p>
                        <p className="text-gray-600 mt-2">{doctor.education}</p>
                    </motion.div>
                </div>
            </header>

            <main className="container mx-auto px-6 -mt-16 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* --- Sidebar (Left Column) --- */}
                    <motion.aside
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        {/* Appointment Card */}
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Book an Appointment</h3>
                            <p className="text-gray-600 mb-6">Schedule a consultation with Dr. {doctor.name.split(' ').pop()}.</p>
                            <button className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all duration-300">
                                <Calendar className="w-5 h-5 mr-2" />
                                Schedule Now
                            </button>
                            <button className="w-full mt-3 flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-gray-200 transition-all duration-300">
                                <Phone className="w-5 h-5 mr-2" />
                                Contact Clinic
                            </button>
                        </div>
                    </motion.aside>

                    {/* --- Main Content (Right Column) --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                    >
                        {/* Tab Navigation */}
                        <div className="border-b border-gray-200 mb-6">
                            <nav className="flex space-x-6">
                                {Object.keys(tabContent).map((tabKey) => (
                                    <button
                                        key={tabKey}
                                        onClick={() => setActiveTab(tabKey)}
                                        className={`pb-3 text-lg font-semibold transition-colors ${activeTab === tabKey
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-500 hover:text-blue-600'
                                            }`}
                                    >
                                        {tabContent[tabKey].title}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Tab Content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="prose max-w-none prose-p:text-gray-600 prose-headings:text-blue-900"
                            >
                                <div className="flex items-center mb-4">
                                    {tabContent[activeTab].icon}
                                    <h2 className="text-2xl font-bold m-0">{tabContent[activeTab].title}</h2>
                                </div>
                                <p>{tabContent[activeTab].content}</p>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </main>
        </div>
    );
};

export default DoctorProfile;