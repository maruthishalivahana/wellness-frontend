import React from 'react';

import logo1 from '../assets/star-health-insurance-logo-hd.webp';
import logo2 from '../assets/bajaj-insurence-logo.jpg';
import logo3 from '../assets/icici.png';
import logo4 from '../assets/medi_Assist.jpeg';
import logo5 from '../assets/NandD.png';
import logo6 from '../assets/PHS_Logo.png';
import logo7 from '../assets/SCCL-LOGO-.jpg';
import logo8 from '../assets/southern_power.png';
import logo9 from '../assets/TPA__FHPL.webp';
import logo10 from '../assets/apollo.png';
import logo11 from '../assets/aditya-insurence.png';
import logo12 from '../assets/4425_reliance.jpg';
import logo13 from '../assets/TPA__safeway.webp';
import logo14 from '../assets/TRANSCO.png';
import logo15 from '../assets/tsgenco-1711692972.jpg';
import logo16 from '../assets/VIPUL.png';
// Add all your other logos here

// An array to hold all your partner logos. This makes it easy to manage.
const partners = [
    { name: 'logo1', logo: logo1 },
    { name: 'logo2', logo: logo2 },
    { name: 'logo3', logo: logo3 },
    { name: 'logo4', logo: logo4 },
    { name: 'logo5', logo: logo5 },
    { name: 'logo6', logo: logo6 },
    { name: 'logo7', logo: logo7 },
    { name: 'logo8', logo: logo8 },
    { name: 'logo9', logo: logo9 },
    { name: 'logo10', logo: logo10 },
    { name: 'logo11', logo: logo11 },
    { name: 'logo12', logo: logo12 },
    { name: 'logo13', logo: logo13 },
    { name: 'logo14', logo: logo14 },
    { name: 'logo15', logo: logo15 },
    { name: 'logo16', logo: logo16 },
    // Add more partners here
];

export const Insurance = () => {
    // We duplicate the partners array to create the seamless infinite scroll effect
    const extendedPartners = [...partners, ...partners];

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: '#223366' }}>
                    Our Insurance Partners
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    We are proud to partner with leading insurance providers and TPAs to make healthcare accessible and affordable for our patients.
                </p>

                <div className="relative mt-12 w-full overflow-hidden">
                    {/* Fade effect on the sides */}
                    <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent"></div>
                    <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent"></div>

                    <div className="flex w-max animate-scroll">
                        {extendedPartners.map((partner, index) => (
                            <div key={index} className="mx-8 flex-shrink-0">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="h-20 cursor-pointer w-auto object-contain transition-all duration-300 grayscale opacity-75 hover:grayscale-0 hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};