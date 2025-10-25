import React from 'react';
import { Heart, BrainCircuit, Award, Stethoscope, ShieldCheck, Cpu, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { showComingSoon } from '../utils/comingSoon';

// --- Main Page Component ---
export const AboutUs = () => {

    // Animation Variants for Framer Motion
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const founderData = [
        {
            photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop',
            name: 'Dr. Anitha Rao',
            designation: 'Chief Medical Director',
            bio: 'With over 25 years of experience, Dr. Rao is dedicated to advancing medical care through innovation and compassionate leadership.'
        },
        {
            photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16e?q=80&w=2070&auto=format&fit=crop',
            name: 'Dr. Vikram Singh',
            designation: 'Founder & CEO',
            bio: 'Dr. Singh founded Wellness Hospitals with a vision to provide accessible, high-quality healthcare to the people of Telangana.'
        }
    ];

    return (
        <div className="bg-white font-sans" style={{ fontFamily: "'Poppins', sans-serif" }}>

            {/* 🏥 Hero Section */}
            <section className="relative h-[60vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?hospital-building,modern')" }}>
                <div className="absolute inset-0 bg-blue-800 bg-opacity-60" />
                <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
                    <motion.h1
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        className="text-5xl md:text-7xl font-extrabold"
                    >
                        Wellness Hospitals
                    </motion.h1>
                    <motion.p
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        className="mt-4 text-xl md:text-2xl font-light"
                    >
                        Caring for Life, Advancing Health.
                    </motion.p>
                    <motion.p
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        className="mt-6 max-w-3xl text-lg"
                    >
                        Our mission is to deliver compassionate, high-quality, and affordable healthcare services to every patient through a combination of medical excellence and state-of-the-art technology.
                    </motion.p>
                </div>
            </section>

            <main>
                {/* ✨ About the Hospital Section */}
                <section className="py-20 px-6 container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Wellness Hospitals</h2>
                        <p className="text-lg text-gray-600 mb-12">
                            Established in the heart of Hyderabad, Wellness Hospitals has grown from a small clinic into a leading super-speciality healthcare provider. We are committed to setting new standards in medical care for the people of Telangana and beyond.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center p-4">
                                <Heart className="w-12 h-12 text-blue-600 mb-3" />
                                <h3 className="text-xl font-semibold">Compassion</h3>
                            </div>
                            <div className="flex flex-col items-center p-4">
                                <BrainCircuit className="w-12 h-12 text-blue-600 mb-3" />
                                <h3 className="text-xl font-semibold">Innovation</h3>
                            </div>
                            <div className="flex flex-col items-center p-4">
                                <Award className="w-12 h-12 text-blue-600 mb-3" />
                                <h3 className="text-xl font-semibold">Excellence</h3>
                            </div>
                            <div className="flex flex-col items-center p-4">
                                <Stethoscope className="w-12 h-12 text-blue-600 mb-3" />
                                <h3 className="text-xl font-semibold">Patient Care</h3>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 👩‍⚕️ Our Founders Section */}
                <section className="bg-gray-50 py-20 px-6">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet Our Founders</h2>
                        <div className="flex flex-wrap justify-center gap-12">
                            {founderData.map((founder, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    className="max-w-sm bg-white rounded-xl shadow-lg p-8 text-center"
                                >
                                    <img
                                        src={founder.photo}
                                        alt={`Photo of ${founder.name}`}
                                        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-200"
                                    />
                                    <h3 className="text-2xl font-semibold text-gray-900">{founder.name}</h3>
                                    <p className="text-blue-600 font-medium mb-4">{founder.designation}</p>
                                    <p className="text-gray-600">{founder.bio}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 📜 Our Journey Section */}
                <section className="py-20 px-6 container mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Journey to Excellence</h2>
                        <div className="prose lg:prose-lg mx-auto text-gray-600 space-y-6">
                            <p>
                                We started as a small clinic right at the heart of the Hyderabad city. We grew into a larger-scale advanced super speciality hospital that quickly gained popularity amongst people that go around the hustle and bustle of the metro.
                            </p>
                            <p>
                                With <strong>300 commissioned beds</strong> and state-of-the-art medical facilities at <strong>3 locations in Hyderabad (Ameerpet & Hathinapuram)</strong>, we are right where the people are all the time.
                            </p>
                            <p>
                                Patients have access to all medical and surgical sub-specialties within a single institution. Our specialists collaborate across disciplines to listen to your story, evaluate your condition from every angle, and develop a diagnosis and treatment plan that’s just for you.
                            </p>
                            <p>
                                All our facilities offer round the clock <strong>Emergency, Radiology, Pathological and Pharmacy services</strong>, ensuring comprehensive care is always within reach.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* ⭐ Why Choose Us Section */}
                <section className="bg-blue-50 py-20 px-6">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Choose Wellness Hospitals?</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white p-8 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300">
                                <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Unwavering Trust</h3>
                                <p>Building patient trust through transparency, ethics, and compassionate care.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300">
                                <Cpu className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
                                <p>Utilizing the latest medical technology for accurate diagnoses and effective treatments.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300">
                                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Experienced Staff</h3>
                                <p>Our team of dedicated specialists and staff are leaders in their respective fields.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md transform hover:-translate-y-2 transition-transform duration-300">
                                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">24/7 Care</h3>
                                <p>Comprehensive emergency, pharmacy, and radiology services available around the clock.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 📞 Footer CTA Section */}
                <section className="bg-blue-700 py-16 text-white">
                    <div className="container mx-auto text-center px-6">
                        <h2 className="text-3xl font-bold mb-4">Join Our Mission to Heal Lives</h2>
                        <p className="text-lg mb-8">Whether you are a patient seeking care or a professional looking to make a difference, we welcome you.</p>
                        <button onClick={showComingSoon} className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition-colors duration-300 shadow-lg">
                            Book an Appointment
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

