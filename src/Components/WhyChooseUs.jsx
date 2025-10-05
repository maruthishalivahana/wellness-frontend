import React from 'react';
import {
    Globe,
    Wind,
    Users,
    HeartHandshake,
    Clock,
    FlaskConical,
} from 'lucide-react';

// Data for the feature cards - easy to update!
const features = [
    {
        icon: <Globe size={32} />,
        title: 'Global Standard Services',
        description: 'Access to world-class services including Cardiology, Neurology, Orthopedics, and more, all meeting international standards.',
    },
    {
        icon: <Wind size={32} />,
        title: 'Clean Room ASTM Standard',
        description: 'Our facilities feature a healthy environment with an efficient cleaning system, adhering to the US clean room ASTM F51/F24 standard.',
    },
    {
        icon: <Users size={32} />,
        title: 'Multi-Disciplinary Approach',
        description: 'Our team uses a clinical, patient-focused approach, ensuring international standards of care and compassion are always met.',
    },
    {
        icon: <HeartHandshake size={32} />,
        title: 'Patient-First Philosophy',
        description: 'With our patient-first philosophy, we provide world-class treatment that is offered for a truly humane and caring experience.',
    },
    {
        icon: <Clock size={32} />,
        title: 'Instant Doctor-Staff Attention',
        description: 'A patient-friendly ambiance ensures our doctors and staff provide immediate attention and simplify appointment scheduling.',
    },
    {
        icon: <FlaskConical size={32} />,
        title: 'Advanced Technology',
        description: 'We pioneer leading-edge therapies and diagnostics that are changing the way health care is delivered for the better.',
    },
];

export const WhyChooseUs = () => {
    return (
        <section className="bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: '#223366' }}>
                        Why Choose Wellness?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        We go beyond the science of exceptional medicine to bring breakthrough innovations and compassionate, personalized care for the unique needs of every patient.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 cursor-pointer">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col items-start"
                        >
                            <div className="bg-sky-100 text-sky-600 rounded-full p-4 mb-5">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};