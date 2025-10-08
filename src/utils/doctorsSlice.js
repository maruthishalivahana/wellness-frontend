import { createSlice } from '@reduxjs/toolkit';

const doctorSlice = createSlice({
    name: 'doctor',
    initialState: {
        allDoctors: [],     // all doctors fetched from backend
        filteredDoctors: [], // filtered by location
    },
    reducers: {
        setDoctors: (state, action) => {
            state.allDoctors = action.payload;
            state.filteredDoctors = action.payload; // default all
        },
        filterByLocation: (state, action) => {
            const location = action.payload;
            if (!location) {
                state.filteredDoctors = state.allDoctors;
            } else {
                state.filteredDoctors = state.allDoctors.filter(
                    (doc) => doc.location.toLowerCase() === location.toLowerCase()
                );
            }
        },
    },
});

export const { setDoctors, filterByLocation } = doctorSlice.actions;
export default doctorSlice.reducer;
