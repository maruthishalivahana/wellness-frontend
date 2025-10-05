import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const locations = [
    {
        name: 'Ameerpet - DK Road',
        address: '7-1-79, AB8, DK Road, Swathi Avenue, Ameerpet, Hyderabad, Telangana – 500016',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Wellness+Hospitals+Ameerpet+DK+Road+Hyderabad',
    },
    {
        name: 'Ameerpet - Lal Bungalow',
        address: '7-1-272 & 7-1-27/C/1 to 12, Opp Lal Bungalow, Ameerpet, Hyderabad, Telangana – 500016',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Wellness+Hospitals+Lal+Bungalow+Ameerpet+Hyderabad',
    },
    {
        name: 'Ameerpet - Shyam Karam Road',
        address: '7-1-284/1/1, Shyam Karan Rd, Leelanagar, Ameerpet, Hyderabad, Telangana 500016',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Wellness+Hospitals+Shyam+Karam+Road+Ameerpet+Hyderabad',
    },
    {
        name: 'Kompally',
        address: 'Suchitra X Road, Next to Ramalayam, Petbasheerabad,Kompally, Hyderabad, Telangana-500067',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Wellness+Hospitals+Kompally+Hyderabad',
    },
    {
        name: 'Hastinapuram',
        address: '8-7-15, H/9, State Highway-19,Opposite RTC Bus-Stop, Hasthinapuram South,Hyderabad, Telangana–500079',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Wellness+Hospitals+Hastinapuram+Hyderabad',
    },
    {
        name: 'Sangareddy',
        address: 'Sangareddy X Road, Mumbai Highway, Pothireddy Pally, Sangareddy 502285',
        mapLink: 'https://www.google.com/maps/search/?api=1&query=Wellness+Hospitals+Sangareddy',
    },
];

export const Locations = () => {
    return (
        <section className="bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: '#223366' }}>
                        Our Locations
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Browse the map to find your nearest Wellness Hospital. We are conveniently located across the city to serve you better.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {locations.map((location, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                            <div className="flex items-center mb-3">
                                <MapPin className="h-6 w-6 mr-3" style={{ color: '#223366' }} />
                                <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">{location.address}</p>
                            <a
                                href={location.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center font-semibold text-white py-2 px-4 rounded-md transition-colors duration-300"
                                style={{ backgroundColor: '#223366' }}
                            >
                                Get Directions
                                <Navigation className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};