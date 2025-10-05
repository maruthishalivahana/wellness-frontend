import { Provider } from "react-redux";
import { store } from "./utils/appStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Components/Home';
import { AboutUs } from './Components/AboutUs';
import PatientInfo from './Components/PatientInfo';
import Specialities from './Components/Specialities';
import KnowledgeCenter from './Components/KnowledgeCenter';
import OurDoctors from './Components/OurDoctors';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Home is the layout wrapper with Navbar + Footer */}
          <Route path="/" element={<Home />}>
            <Route index element={<AboutUs />} />            {/* default page */}
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="ourdoctors" element={<OurDoctors />} />
            <Route path="patientinfo" element={<PatientInfo />} />
            <Route path="specialities" element={<Specialities />} />
            <Route path="knowledgecenter" element={<KnowledgeCenter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
