import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import DoctorsCard from './DoctorsCard';
import { setDoctors, filterByLocation } from '../utils/doctorsSlice';
import { ChevronDown } from 'lucide-react';

const OurDoctors = () => {
    const dispatch = useDispatch();
    const { allDoctors = [], filteredDoctors = [] } = useSelector((store) => store.doctor || {});


    const [error, setError] = useState(null);

    const locations = [...new Set(allDoctors.map((doc) => doc.location))];

    useEffect(() => {
        const fetchAndSetDoctors = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/doctors");
                dispatch(setDoctors(res.data.doctors));
            } catch (error) {
                console.error("Failed to fetch doctors:", error);
                setError("Failed to load doctors. Please try again later.");
            }
        };

        if (allDoctors.length === 0) fetchAndSetDoctors();
    }, [allDoctors.length, dispatch]);


    const handleLocationChange = (e) => {
        const location = e.target.value;
        dispatch(filterByLocation(location));
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                    Meet Our Specialists
                </h2>



                <div className="mb-10 flex justify-center">

                    <div className="relative w-full max-w-xs cursor-pointer">
                        <select
                            onChange={handleLocationChange}

                            className="w-full appearance-none  cursor-pointer rounded-lg border border-gray-300 bg-white px-5 py-3 pr-10 font-semibold text-gray-800 shadow-sm transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400"
                        >
                            <option value="">All Locations</option>
                            {locations.map((loc, index) => (
                                <option key={index} value={loc}>
                                    {loc}
                                </option>
                            ))}
                        </select>

                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                            <ChevronDown size={20} />
                        </div>
                    </div>
                </div>

                {error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                        {filteredDoctors.length > 0 ? (
                            filteredDoctors.map((doctor) => (
                                <DoctorsCard key={doctor._id} doctor={doctor} />
                            ))
                        ) : (
                            <p className="col-span-full text-gray-600">
                                No doctors found for this location.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default OurDoctors;
