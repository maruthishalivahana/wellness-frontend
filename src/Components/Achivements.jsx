import React from 'react';
import { HeartPulse, Stethoscope, BadgePercent, RadioTower } from 'lucide-react';

const stats = [
    {
        icon: <HeartPulse size={40} className="text-white opacity-80" />,
        value: '50,000+',
        label: 'Surgeries',
    },
    {
        icon: <Stethoscope size={40} className="text-white opacity-80" />,
        value: '150+',
        label: 'Doctors',
    },
    {
        icon: <BadgePercent size={40} className="text-white opacity-80" />,
        value: '99.7%',
        label: 'Success Rate',
    },
    {
        icon: <RadioTower size={40} className="text-white opacity-80" />,
        value: '1.5T',
        label: 'MRI Scan',
    },
];

export const Achievements = () => {
    return (
        <section style={{ backgroundColor: '#223366' }}>
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            {stat.icon}
                            <p className="text-4xl md:text-5xl font-extrabold mt-3">
                                {stat.value}
                            </p>
                            <p className="text-md md:text-lg font-medium text-gray-300 mt-1">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};