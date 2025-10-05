import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "./doctorsSlice";

export const store = configureStore({
    reducer: {
        doctor: doctorReducer,
    },
});
