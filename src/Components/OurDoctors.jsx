import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import DoctorsCard from './DoctorsCard';
import { setDoctors } from '../utils/doctorsSlice'; // Make sure path is correct

const OurDoctors = () => {
    const dispatch = useDispatch();

    const { allDoctors = [], filteredDoctors = [] } =
        useSelector((store) => store.doctor || {});



    // State for error handling
    const [error, setError] = useState(null);

    useEffect(() => {
        // 1. DEFINE THE ASYNC FUNCTION INSIDE THE EFFECT
        try {

            const fetchAndSetDoctors = async () => {
                try {
                    const res = await axios.get("http://localhost:5000/api/doctors");
                    dispatch(setDoctors(res.data.doctors));

                } catch (error) {
                    // 3. ADD ERROR HANDLING
                    console.error("Failed to fetch doctors:", error);
                    setError("Failed to load doctors. Please try again later.");
                }
            };

            // 2. ONLY FETCH IF THE DOCTOR LIST IS EMPTY
            if (allDoctors.length === 0) {
                fetchAndSetDoctors();
            }

        } catch (error) {
            console.error(error.message)
        }

    }, [allDoctors.length, dispatch]); // 4. UPDATE DEPENDENCY ARRAY

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-12">
                    Meet Our Specialists
                </h2>
                {error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    (() => {
                        try {
                            return (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                                    {allDoctors?.map((doctor) => (
                                        <DoctorsCard key={doctor._id} doctor={doctor} />
                                    ))}
                                </div>
                            );
                        } catch (e) {
                            console.error("Render error in OurDoctors:", e);
                            return <p className="text-red-500">Something went wrong loading doctors.</p>;
                        }
                    })()
                )}
            </div>
        </section>
    );

};

export default OurDoctors;