import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./utils/appStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import { setDoctors } from './utils/doctorsSlice';
import Home from "./Components/Home";
import Body from './Components/Body';
import { AboutUs } from './Components/AboutUs';
import PatientInfo from './Components/PatientInfo';
import Specialities from './Components/Specialities';
import KnowledgeCenter from './Components/KnowledgeCenter';
import OurDoctors from './Components/OurDoctors';
import DoctorAddingForm from './Components/DoctorAddingForm';
import DoctorProfile from "./Components/DoctorProfile";

// Wrapper component to prefetch doctors inside Provider context
function AppContent() {
  const dispatch = useDispatch();
  const allDoctors = useSelector((state) => state.doctor?.allDoctors || []);

  useEffect(() => {
    const prefetchDoctors = async () => {
      try {
        if (allDoctors.length === 0) {
          const res = await axios.get('http://localhost:5000/api/doctors');
          dispatch(setDoctors(res.data.doctors || res.data));
        }
      } catch (err) {
        console.error('Prefetch doctors failed:', err);
      }
    };
    prefetchDoctors();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper with Navbar + Footer */}
        <Route path="/" element={<Body />}>
          <Route index element={<Home />} />          {/* Default homepage */}
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="ourdoctors" element={<OurDoctors />} />
          <Route path="patientinfo" element={<PatientInfo />} />
          <Route path="specialities" element={<Specialities />} />
          <Route path="knowledgecenter" element={<KnowledgeCenter />} />
          <Route path="addDoctorForm" element={<DoctorAddingForm />} />
          <Route path="/doctors/profile/:doctorId" element={<DoctorProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
