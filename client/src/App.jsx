import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home/Home";
import Academics from "./pages/Academics/Academics";
import Admissions from "./pages/Admissions/Admissions";
import ContactUs from "./pages/ContactUs/ContactUs";
import OurTeam from "./pages/Ourteam/OurTeam";
import Facilities from "./pages/Facilities/Facilities";
import Login from "./pages/AdminPanel/Login";
import Register from "./pages/AdminPanel/Register";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import TransportPage from "./pages/Facilities/TransportPage";
import ComputerPage from "./pages/Facilities/ComputerPage";
import Sports from "./pages/Facilities/Sports";
import Houses from "./pages/Facilities/Houses";
import Classroom from "./pages/Facilities/Classroom";
import ScienceLab from "./pages/Facilities/ScienceLab";
import Security from "./pages/Facilities/Security";
import Library from "./pages/Facilities/Library";
import Music from "./pages/Facilities/Music";
import Art from "./pages/Facilities/art";
import ScoutsAndGuide from "./pages/Facilities/ScoutsAndGuide";
import CbseCurriculum from "./pages/Home/CbseCurriculum";
import HolisticEdu from "./pages/Home/HolisticEdu";
import Awards from "./pages/Home/Awards";
import CBSEProg from "./pages/Home/CBSEProg";
import EarlyProgram from "./pages/Home/EarlyProgram";
import KnowMore from "./pages/Home/KnowMore";
import JoinOurTeam from "./pages/Ourteam/JoinOurTeam";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/admin-login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Career" element={<JoinOurTeam />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Route>
        <Route path="/TransportPage" element={<TransportPage />} />
        <Route path="/ComputerPage" element={<ComputerPage />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Houses" element={<Houses />} />
        <Route path="/Classroom" element={<Classroom />} />
        <Route path="/ScienceLab" element={<ScienceLab />} />
        <Route path="/Security" element={<Security />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Art" element={<Art />} />
        <Route path="/CbseCurriculum" element={<CbseCurriculum />} />
        <Route path="/HolisticEdu" element={<HolisticEdu />} />
        <Route path="/ScoutsAndGuide" element={<ScoutsAndGuide />} />
        <Route path="/Awards" element={<Awards />} />
        <Route path="/CBSEProg" element={<CBSEProg />} />
        <Route path="/EarlyProgram" element={<EarlyProgram />} />
        <Route path="/KnowMore" element={<KnowMore />} />
      </Routes>
    </Router>
  );
};

export default App;