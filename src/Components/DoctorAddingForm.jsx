import React, { useState } from 'react';
import { Plus, User, Briefcase, GraduationCap, MapPin, Building2, Image as ImageIcon, Info, Calendar, ChevronDown } from 'lucide-react';
import axios from "axios";
const DoctorAddingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        education: '',
        experience: '',
        about: '',
        location: '',
        department: '',
        image: null, // Stores the file object
    });

    // Example static data for dropdowns
    const locations = [
        { value: '', label: 'Select Location' },
        { value: 'Sangareddy', label: 'sangareddy' },
        {
            value: 'Ameerpet – DK Road',
            label: 'Ameerpet – DK Road'
        },
        {
            value: 'Ameerpet – Lal Banglow',
            label: 'Ameerpet – Lal Banglow'
        },
        {
            value: 'Ameerpet – Shyam Karan Road',
            label: 'Ameerpet – Shyam Karan Road'
        },
        {
            value: 'Hasthinapuram',
            label: 'Hasthinapuram'
        },
        {
            value: 'Kompally',
            label: 'Kompally'
        },
        {
            value: 'Nizamabad',
            label: 'Nizamabad'
        },
    ];
    const departments = [
        { value: '', label: 'All Departments' },
        { value: 'interventional-cardiologist', label: 'Interventional Cardiologist' },
        { value: 'clinical-cardiologist', label: 'Clinical Cardiologist' },
        { value: 'neuro-surgeon', label: 'Neuro Surgeon' },
        { value: 'consultant-neurologist', label: 'Consultant Neurologist' },
        { value: 'consultant-pulmonologist', label: 'Consultant Pulmonologist' },
        { value: 'orthopaedic-surgeon', label: 'Orthopaedic Surgeon' },
        { value: 'consultant-gynecologist', label: 'Consultant Gynecologist' },
        { value: 'anaesthesia-critical-care', label: 'Anaesthesia & Critical care' },
        { value: 'urologist-andrologist', label: 'Urologist & Andrologist' },
        { value: 'general-physician', label: 'General Physician' },
        { value: 'consultant-gastroenterology', label: 'Consultant Gastroenterology' },
        { value: 'physiotherapist', label: 'Physiotherapist' },
        { value: 'general-surgeon', label: 'General Surgeon' },
        { value: 'psychiatrist', label: 'Psychiatrist' },
        { value: 'dietitian', label: 'Dietitian' },
        { value: 'endocrinologist', label: 'Endocrinologist' },
        { value: 'pediatrician', label: 'Pediatrician' },
        { value: 'consulting-rheumatologist', label: 'Consulting Rheumatologist' },
        { value: 'consultant-anaesthesiologist', label: 'Consultant Anaesthesiologist' },
        { value: 'consultant-ent', label: 'Consultant ENT' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            image: e.target.files[0], // Store the file object
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("education", formData.education);
        data.append("experience", formData.experience);
        data.append("about", formData.about);
        data.append("location", formData.location);
        data.append("department", formData.department);

        if (formData.image) {
            data.append("image", formData.image); // file object
        }

        try {
            const res = await axios.post(
                "http://localhost:5000/api/add/doctor",
                data,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            console.log("Doctor added successfully:", res.data);
            alert("Doctor added successfully!");
        } catch (err) {
            console.error("Error adding doctor:", err.response ? err.response.data : err);
            alert("Failed to add doctor, check console.");
        }
    };


    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-2xl border border-gray-200">
                <div className="flex items-center mb-6 border-b pb-4 border-gray-200">
                    <Plus className="h-8 w-8 text-[#223366] mr-3" />
                    <h2 className="text-3xl font-bold text-[#223366]">Add New Doctor</h2>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            <User className="inline-block h-4 w-4 mr-1 text-[#223366]" /> Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#223366] focus:border-[#223366] sm:text-sm text-gray-800"
                            placeholder="Dr. John Doe"
                            required
                        />
                    </div>

                    {/* Specialization */}
                    <div>
                        <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                            <Briefcase className="inline-block h-4 w-4 mr-1 text-[#223366]" /> Specialization
                        </label>
                        <input
                            type="text"
                            id="education"
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#223366] focus:border-[#223366] sm:text-sm text-gray-800"
                            placeholder="Cardiologist, Pediatrician, etc."
                            required
                        />
                    </div>

                    {/* Experience */}


                    {/* Qualifications */}
                    {/* <div>
                        <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700 mb-1">
                            <GraduationCap className="inline-block h-4 w-4 mr-1 text-[#223366]" /> Qualifications
                        </label>
                        <input
                            type="text"
                            id="qualifications"
                            name="qualifications"
                            value={formData.qualifications}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#223366] focus:border-[#223366] sm:text-sm text-gray-800"
                            placeholder="MD, MBBS, PhD"
                            required
                        />
                    </div> */}

                    {/* Location Dropdown */}
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                            <MapPin className="inline-block h-4 w-4 mr-1 text-[#223366]" /> Location
                        </label>
                        <select
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#223366] focus:border-[#223366] sm:text-sm text-gray-800 appearance-none"
                            required
                        >
                            {locations.map((loc) => (
                                <option key={loc.value} value={loc.value}>
                                    {loc.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Department Dropdown */}
                    <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                            <Building2 className="inline-block h-4 w-4 mr-1 text-[#223366]" /> Department
                        </label>
                        <select
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#223366] focus:border-[#223366] sm:text-sm text-gray-800 appearance-none"
                            required
                        >
                            {departments.map((dept) => (
                                <option key={dept.value} value={dept.value}>
                                    {dept.label}

                                </option>

                            ))}

                        </select>
                    </div>

                    {/* About */}
                    <div className="md:col-span-2">
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">
                            <Info className="inline-block h-4 w-4 mr-1 text-[#223366]" /> About
                        </label>
                        <textarea
                            id="about"
                            name="about"
                            rows="4"
                            value={formData.about}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#223366] focus:border-[#223366] sm:text-sm text-gray-800"
                            placeholder="Brief description about the doctor..."
                            required
                        ></textarea>
                    </div>
                    <div className='md:col-span-2'>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                            <Calendar className="inline-block h-4 w-4 mr-1 text-[#223366]" /> Experience
                        </label>
                        <textarea
                            id="experience"
                            name="experience"
                            rows="4"
                            value={formData.experience}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#223366] focus:border-[#223366] sm:text-sm text-gray-800"
                            placeholder="Brief description about the experience..."
                            required
                        ></textarea>
                    </div>

                    {/* Image Upload */}
                    <div className="md:col-span-2">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                            <ImageIcon className="inline-block h-4 w-4 mr-1 text-[#223366]" /> Doctor Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-1 block w-full text-sm text-gray-700
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-md file:border-0
                         file:text-sm file:font-semibold
                         file:bg-[#e0e4ed] file:text-[#223366]
                         hover:file:bg-[#ccd1db] cursor-pointer"
                        />
                        {formData.image && (
                            <p className="mt-2 text-sm text-gray-500">Selected file: {formData.image.name}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 flex justify-end mt-4">
                        <button

                            type="submit"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#223366] hover:bg-[#1a254d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#223366]"
                        >
                            <Plus className="h-5 w-5 mr-2" /> Add Doctor
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DoctorAddingForm;