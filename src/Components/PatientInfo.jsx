import React from 'react';
import { ChevronDown, Clock, Users, Phone, BedDouble, Pill, ShieldCheck, CheckSquare, XSquare, MessageSquare, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Reusable Accordion Component ---
const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = React.useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
                        aria-expanded={openIndex === index}
                    >
                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                        <motion.div
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown className="w-6 h-6 text-blue-600" />
                        </motion.div>
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="p-5 bg-white text-gray-600">
                                    {item.content}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};


// --- Main Page Component ---
const PatientInfo = () => {
    // --- Content for Accordions ---
    const whatToAskAccordionItems = [
        {
            title: "Symptoms, Diagnosis & Treatment",
            content: (
                <ul className="list-disc pl-6 space-y-2">
                    <li>What is the disease or condition?</li>
                    <li>What is the cause of my disease?</li>
                    <li>How serious is my disease and how will it affect my life?</li>
                    <li>What are my treatment options and their risks?</li>
                    <li>How effective is my treatment option?</li>
                    <li>If my symptoms get worse, what can I do?</li>
                </ul>
            )
        },
        {
            title: "If You Need Surgery",
            content: (
                <div>
                    <p className="mb-4">Soon after your doctor decides on Surgery, you need to be admitted. The first step is to obtain clearance from the Help Desk and signify your acceptance of the estimated tariff.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Why am I a candidate for this surgery?</li>
                        <li>What surgical procedure do you advise? Is there more than one way?</li>
                        <li>What are the risks associated with the surgery?</li>
                        <li>How long will I be in the hospital and what is the recovery time?</li>
                        <li>What will be the cost of the surgery?</li>
                        <li>Can I get a second opinion?</li>
                    </ul>
                </div>
            )
        }
    ];

    const rightsAndResponsibilitiesItems = [
        {
            title: "Patient Rights",
            content: (
                <ul className="list-disc pl-6 space-y-3">
                    <li>To receive considerate, respectful, and non-discriminatory care.</li>
                    <li>To receive care with dignity and privacy during examinations and treatment.</li>
                    <li>To know treatment options and participate in decisions about your care.</li>
                    <li>To be informed of any high-risk procedures and have the choice to consent or refuse.</li>
                    <li>To receive care in a safe environment and have confidentiality of your information.</li>
                    <li>To ask for a second opinion from a different doctor.</li>
                </ul>
            )
        },
        {
            title: "Patient Responsibilities",
            content: (
                <ul className="list-disc pl-6 space-y-3">
                    <li>Provide complete and accurate information, including your full name, address, and medical history.</li>
                    <li>Ask questions when you do not understand what your doctor or healthcare team tells you.</li>
                    <li>Comply with all hospital rules and regulations, including the NO SMOKING policy.</li>
                    <li>Be on time for appointments and cancel or reschedule in advance.</li>
                    <li>Treat hospital staff, other patients, and visitors with courtesy and respect.</li>
                    <li>Provide accurate information for insurance claims and arrange for payment.</li>
                </ul>
            )
        },
        {
            title: "Family Rules",
            content: (
                <ul className="list-disc pl-6 space-y-3">
                    <li>Respect that other patients' medical conditions may be more urgent.</li>
                    <li>Comply with visitor policies to ensure the comfort and safety of all patients.</li>
                    <li>Be considerate of noise levels and patient privacy.</li>
                    <li>Weapons are strictly prohibited on the premises.</li>
                </ul>
            )
        }
    ];

    return (
        <div className="font-sans bg-gray-50 text-gray-700" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {/* 🏥 1. Header/Banner */}
            <header className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?hospital,clinic')" }}>
                <div className="absolute inset-0 bg-[#223366] bg-opacity-70" />
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-extrabold"
                    >
                        Patient Information
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg md:text-xl max-w-2xl"
                    >
                        Everything you need to know before, during, and after your visit.
                    </motion.p>
                </div>
            </header>

            {/* --- Main Content --- */}
            <main>
                {/* 💬 2. What to Ask a Doctor */}
                <section className="py-20 px-6 container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Empower Your Health Journey</h2>
                        <p className="text-center text-lg text-gray-600 mb-12">
                            An accurate diagnosis begins with clear communication. We encourage you to be fully informed about your health. Use these questions as a reference for your consultation.
                        </p>
                        <Accordion items={whatToAskAccordionItems} />
                    </div>
                </section>

                <div className="bg-white">
                    {/* 🕒 3. Visitor Guidelines */}
                    <section className="py-20 px-6 container mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Visitor Guidelines</h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Outpatient */}
                            <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold text-[#223366] mb-4">Outpatients</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start"><Clock className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0 mt-1" /><span><strong>Consultation:</strong> 9AM–1PM & 4PM–6PM on weekdays.</span></li>
                                    <li className="flex items-start"><Users className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0 mt-1" /><span>Two adults (parent/spouse/sibling and another person over 12) may accompany the patient.</span></li>
                                </ul>
                            </div>
                            {/* In-patients */}
                            <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold text-[#223366] mb-4">In-patients</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start"><Clock className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0 mt-1" /><span><strong>Visiting Hours:</strong> 7AM–8AM & 5PM–7PM, unless otherwise notified.</span></li>
                                    <li className="flex items-start"><Users className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0 mt-1" /><span>Only two visitors per patient are allowed at a time. Visitors below 12 are generally not permitted.</span></li>
                                </ul>
                            </div>
                            {/* ICU */}
                            <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
                                <h3 className="text-xl font-semibold text-[#223366] mb-4">Intensive Care Unit (ICU)</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start"><Users className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0 mt-1" /><span>Visits are restricted to immediate family members only, with permission from the treating consultant.</span></li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 📞 4. Reaching a Patient */}
                    <section className="py-12 px-6 container mx-auto text-center">
                        <div className="max-w-3xl mx-auto bg-white border border-gray-200 p-8 rounded-xl shadow-md">
                            <Phone className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">Reaching a Patient</h2>
                            <p className="text-gray-600 mb-4">Family and friends can reach a patient by calling our information numbers:</p>
                            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-semibold text-blue-700">
                                <span>Lal Bungalow: +91 91000 20100</span>
                                <span>Ameerpet: 040-6666 7779</span>
                                <span>Hasthinapuram: +91 92990 00100</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 🏨 5. Accommodation & Pharmacy */}
                <section className="py-20 px-6 container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                        <article>
                            <BedDouble className="w-10 h-10 text-blue-600 mb-3" />
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Accommodation</h2>
                            <p className="text-gray-600 mb-6">Our in-patient accommodation is hygienic, spacious, and designed for comfort. Rooms are assigned based on patient requests, insurance, and medical needs.</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>VIP Suites</li>
                                <li>Standard Private Rooms</li>
                                <li>Intensive Care & Critical Care Units</li>
                                <li>General Wards (Economical, spacious shared rooms)</li>
                            </ul>
                        </article>
                        <article className="bg-blue-50 p-8 rounded-xl shadow-sm">
                            <Pill className="w-10 h-10 text-blue-600 mb-3" />
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pharmacy Services</h2>
                            <p className="text-gray-600">Our pharmacy ensures all medicines are authentic, stored to standard, and available on time.</p>
                            <p className="mt-4 text-xl font-bold text-blue-700">Available 24/7</p>
                        </article>
                    </div>
                </section>

                {/* ⚖️ 6. Patient Rights & Responsibilities */}
                <section className="bg-white py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Your Rights & Responsibilities</h2>
                        <Accordion items={rightsAndResponsibilitiesItems} />
                    </div>
                </section>

                {/* 🛡️ 7. Patient Safety */}
                <section className="py-20 px-6 container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Commitment to Your Safety</h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                            <h3 className="font-bold text-yellow-800 mb-2">Use Medications Safely</h3>
                            <p className="text-yellow-700">Keep an updated list of all your medications (prescriptions, vitamins, herbals). Bring this list to every hospital visit and ask your doctor if new medicines will interfere with your current ones.</p>
                        </div>
                        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                            <h3 className="font-bold text-green-800 mb-2">Preventing Errors</h3>
                            <p className="text-green-700">Ask a family member or friend to accompany you to help ask questions. Let your physician know immediately if you feel unwell or your condition changes. Cooperate fully by providing accurate information about your illness.</p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default PatientInfo;