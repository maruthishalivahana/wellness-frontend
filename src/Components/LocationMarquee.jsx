import React from 'react';
import { MapPin } from 'lucide-react';

const LocationMarquee = () => {
    const locations = [
        "Ameerpet - DK Road",
        "Ameerpet - Lal Bungalow",
        "Ameerpet - Shyam Karam Road",
        "Hastinapuram",
        "Kompally",
        "Sangareddy"
    ];

    // The key to the seamless loop: we duplicate the locations array.
    const extendedLocations = [...locations, ...locations];

    return (
        <div className="w-full bg-blue-600 text-white py-4 overflow-hidden group sticky ">
            {/* The inner container uses flex and our custom 'animate-scroll' utility.
                'group-hover:paused' is a handy utility to pause the animation on hover for better UX.
            */}
            <div className="flex animate-scroll group-hover:paused">
                {extendedLocations.map((location, index) => (
                    <div
                        key={index}
                        className="flex items-center mx-6 flex-shrink-0"
                    >
                        <MapPin size={20} className="mr-3 opacity-80" />
                        <span className="text-xl font-semibold whitespace-nowrap">
                            {location}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LocationMarquee;