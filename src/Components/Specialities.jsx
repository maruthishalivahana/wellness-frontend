import React, { useState, useEffect } from 'react';
import { HeartPulse, Brain, Bone, Stethoscope, Baby, Microscope, Search, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Dummy Data ---

const specialitiesData = [
    {
        icon: <HeartPulse size={48} className="text-blue-500" />,
        title: 'Cardiology',
        description: 'Specializing in heart conditions, from diagnosis to treatment of cardiovascular diseases.',
    },
    {
        icon: <Brain size={48} className="text-blue-500" />,
        title: 'Neurology',
        description: 'Expert care for disorders of the nervous system, including the brain, spinal cord, and nerves.',
    },
    {
        icon: <Bone size={48} className="text-blue-500" />,
        title: 'Orthopedics',
        description: 'Comprehensive care for musculoskeletal issues, including bones, joints, ligaments, and muscles.',
    },
    {
        icon: <Stethoscope size={48} className="text-blue-500" />,
        title: 'Dermatology',
        description: 'Advanced solutions for skin, hair, and nail conditions, offering both medical and cosmetic care.',
    },
    {
        icon: <Baby size={48} className="text-blue-500" />,
        title: 'Pediatrics',
        description: 'Dedicated and compassionate healthcare for infants, children, and adolescents.',
    },
    {
        icon: <Smile size={48} className="text-blue-500" />,
        title: 'Dentistry',
        description: 'Complete oral health services, from routine check-ups to advanced dental procedures.',
    },
    {
        icon: <Microscope size={48} className="text-blue-500" />,
        title: 'Oncology',
        description: 'A multidisciplinary approach to cancer treatment with cutting-edge technology and support.',
    },
];

const doctorsData = [
    {
        photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16e?q=80&w=2070&auto=format&fit=crop',
        name: 'Dr. Evelyn Reed',
        designation: 'Chief Cardiologist',
    },
    {
        photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop',
        name: 'Dr. Marcus Chen',
        designation: 'Lead Neurologist',
    },
    {
        photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop',
        name: 'Dr. Olivia Grant',
        designation: 'Head of Orthopedics',
    },
    {
        photo: 'https://plus.unsplash.com/premium_photo-1661764878654-3d0851280e82?q=80&w=1974&auto=format&fit=crop',
        name: 'Dr. Julian Bennett',
        designation: 'Senior Dermatologist',
    },
];


// --- Main Component ---

const Specialities = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSpecialities, setFilteredSpecialities] = useState(specialitiesData);

    useEffect(() => {
        const results = specialitiesData.filter(speciality =>
            speciality.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredSpecialities(results);
    }, [searchTerm]);

    return (
        <div className="bg-white">
            {/* 🏥 Header Section */}
            <header
                className="relative bg-cover bg-center h-80"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-extrabold"
                    >
                        Our Specialities
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg md:text-xl max-w-2xl"
                    > Expert care across every field of medicine, delivered with compassion and precision.
                    </motion.p>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16">
                {/* 🔍 Search and Filter Section */}
                <section className="mb-12">
                    <div className="max-w-xl mx-auto">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search for a speciality..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full py-3 pl-12 pr-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                            />
                        </div>
                    </div>
                </section>

                {/* 💳 Specialities Grid */}
                <section>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredSpecialities.map((speciality, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 rounded-xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 flex flex-col text-center p-8"
                            >
                                <div className="mx-auto text-5xl text-blue-600 mb-4">
                                    {speciality.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{speciality.title}</h3>
                                <p className="text-gray-600 flex-grow mb-6">{speciality.description}</p>
                                <button className="mt-auto bg-transparent border-2 border-blue-600 text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>

                    {filteredSpecialities.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-xl text-gray-500">No specialities found. Please try a different search term.</p>
                        </div>
                    )}
                </section>

                {/* 👩‍⚕️ Featured Doctors Section */}
                <section className="mt-24">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Experts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {doctorsData.map((doctor, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg text-center p-6 transform hover:-translate-y-2 transition-transform duration-300">
                                <img
                                    src={doctor.photo}
                                    alt={`Photo of ${doctor.name}`}
                                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                                />
                                <h4 className="text-lg font-semibold text-gray-900">{doctor.name}</h4>
                                <p className="text-blue-500 mb-4">{doctor.designation}</p>
                                <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300">
                                    Book Appointment
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* 📞 CTA Section */}
            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Not sure which department to visit?
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                        Talk to our medical advisor today. We are here to help you.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300">
                            Book Appointment
                        </button>
                        <button className="bg-transparent border-2 border-gray-700 text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Specialities;