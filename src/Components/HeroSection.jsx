import React from 'react';
import { MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// You can replace this with the actual path to your image
import heroImage from '../assets/wellness_hospital_baner.png'

export const HeroSection = () => {
    // const navigate = useNavigate("/home")

    return (
        <section className="bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-16 md:py-24">

                {/* Left Side: Text Content */}
                <div className="md:w-1/2 lg:w-[45%] flex flex-col items-start text-center md:text-left mb-12 md:mb-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        The Rare Art of
                        <span style={{ color: '#223366' }}> Personalized Patient Care</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 max-w-lg">
                        At Wellness Hospitals, we believe in a healthcare experience that's as unique as you are. Our dedicated team combines advanced technology with heartfelt compassion to provide care that’s tailored to your personal needs.
                    </p>
                    <a
                        href="/appointment"
                        className="mt-8 inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                        style={{ backgroundColor: '#223366' }}
                    >
                        Book an Appointment
                        <MoveRight className="ml-2 h-5 w-5" />
                    </a>
                </div>

                <div className="md:w-1/2 lg:w-[55%] flex justify-center md:justify-end">
                    <div className="w-full max-w-2xl">

                        <img
                            src={heroImage}
                            alt="A team of friendly doctors and nurses at Wellness Hospitals"
                            className="rounded-lg shadow-2xl w-full h-full object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};