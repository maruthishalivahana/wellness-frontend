import { Provider } from "react-redux";
import { store } from "./utils/appStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Body from './Components/Body';
import { AboutUs } from './Components/AboutUs';
import PatientInfo from './Components/PatientInfo';
import Specialities from './Components/Specialities';
import KnowledgeCenter from './Components/KnowledgeCenter';
import OurDoctors from './Components/OurDoctors';
import DoctorAddingForm from './Components/DoctorAddingForm';


function App() {
  return (
    <Provider store={store}>
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
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
