import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admission from "./Components/Admission/Admission";
import Alumni from "./Components/Alumni/Alumni";
import Contact from "./Components/ContactDetails/Contact";
import FacultyAndStaf from "./Components/FacultyAndStaff/FacultyAndStaf";
import Footer from "./Components/Home/Footer";
import Home from "./Components/Home/Home";
import Leadership from "./Components/Leadership/Leadership";
import ProgramesOffered from "./Components/ProgramesOffered/ProgramesOffered";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Navbar/Navbar";
import Naac from "./Components/Naac/Naac";
import Ncte from "./Components/Ncte/Ncte";
import Students from "./Components/Students/Students";
import ParentsLogin from "./Components/ParentsLogin/ParentsLogin";
import StudentLogin from "./Components/StudentLogin/StudentLogin";

// Add the routes

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [overView, setOverview] = useState("setOverview");
  const [leadership, setLidership] = useState("");
  const [programsOffered, setProgramsOffered] = useState("");
  const [alumni, setAlumni] = useState("");
  const [admission, setAdmission] = useState("");
  const [facultiStaff, setFacultiStaff] = useState("");
  const [students, setStudensts] = useState("");
  const [contactUs, setContactUs] = useState("");
  const [naac, setNaac] = useState("");
  const [ncte, setNcte] = useState("");
  const [quicklink, setQuickLink] = useState("");
  const [studentLogin, setStudentLogin] = useState("");
  const [parentsLogin, setParentsLogin] = useState("");

  return (
    <div>
      <div className="">
        <Navbar
          setShowNavbar={[showNavbar, setShowNavbar]}
          setOverview={[overView, setOverview]}
          setLidership={[leadership, setLidership]}
          setProgramsOffered={[programsOffered, setProgramsOffered]}
          setAlumni={[alumni, setAlumni]}
          setAdmission={[admission, setAdmission]}
          setFacultiStaff={[facultiStaff, setFacultiStaff]}
          setContactUs={[contactUs, setContactUs]}
          setNaac={[naac, setNaac]}
          setNcte={[ncte, setNcte]}
          setStudensts={[students, setStudensts]}
          setStudentLogin={[studentLogin, setStudentLogin]}
          setParentsLogin={[parentsLogin, setParentsLogin]}
        ></Navbar>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route
            path="/contact"
            element={
              <Contact
                setShowNavbar={[showNavbar, setShowNavbar]}
                setOverview={[overView, setOverview]}
                setLidership={[leadership, setLidership]}
                setProgramsOffered={[programsOffered, setProgramsOffered]}
                setAlumni={[alumni, setAlumni]}
                setAdmission={[admission, setAdmission]}
                setFacultiStaff={[facultiStaff, setFacultiStaff]}
                setContactUs={[contactUs, setContactUs]}
                setNaac={[naac, setNaac]}
                setStudensts={[students, setStudensts]}
                setNcte={[ncte, setNcte]}
              ></Contact>
            }
          ></Route>

          <Route
            path="/faculty"
            element={
              <FacultyAndStaf
                setShowNavbar={[showNavbar, setShowNavbar]}
                setOverview={[overView, setOverview]}
                setLidership={[leadership, setLidership]}
                setProgramsOffered={[programsOffered, setProgramsOffered]}
                setAlumni={[alumni, setAlumni]}
                setAdmission={[admission, setAdmission]}
                setFacultiStaff={[facultiStaff, setFacultiStaff]}
                setContactUs={[contactUs, setContactUs]}
                setNaac={[naac, setNaac]}
                setStudensts={[students, setStudensts]}
                setNcte={[ncte, setNcte]}
              ></FacultyAndStaf>
            }
          ></Route>
          <Route
            path="/naac"
            element={
              <Naac
                setShowNavbar={[showNavbar, setShowNavbar]}
                setOverview={[overView, setOverview]}
                setLidership={[leadership, setLidership]}
                setProgramsOffered={[programsOffered, setProgramsOffered]}
                setAlumni={[alumni, setAlumni]}
                setAdmission={[admission, setAdmission]}
                setFacultiStaff={[facultiStaff, setFacultiStaff]}
                setContactUs={[contactUs, setContactUs]}
                setNaac={[naac, setNaac]}
                setNcte={[ncte, setNcte]}
                setStudensts={[students, setStudensts]}
              ></Naac>
            }
          ></Route>
          <Route
            path="/ncte"
            element={
              <Ncte
                setShowNavbar={[showNavbar, setShowNavbar]}
                setOverview={[overView, setOverview]}
                setLidership={[leadership, setLidership]}
                setProgramsOffered={[programsOffered, setProgramsOffered]}
                setAlumni={[alumni, setAlumni]}
                setAdmission={[admission, setAdmission]}
                setFacultiStaff={[facultiStaff, setFacultiStaff]}
                setContactUs={[contactUs, setContactUs]}
                setNaac={[naac, setNaac]}
                setNcte={[ncte, setNcte]}
                setStudensts={[students, setStudensts]}
              ></Ncte>
            }
          ></Route>

          <Route
            path="/alumni"
            element={
              <Alumni
                setShowNavbar={[showNavbar, setShowNavbar]}
                setOverview={[overView, setOverview]}
                setLidership={[leadership, setLidership]}
                setProgramsOffered={[programsOffered, setProgramsOffered]}
                setAlumni={[alumni, setAlumni]}
                setAdmission={[admission, setAdmission]}
                setFacultiStaff={[facultiStaff, setFacultiStaff]}
                setContactUs={[contactUs, setContactUs]}
                setNaac={[naac, setNaac]}
                setNcte={[ncte, setNcte]}
                setStudensts={[students, setStudensts]}
              ></Alumni>
            }
          ></Route>
          <Route
            path="/students"
            element={
              <Students
                setShowNavbar={[showNavbar, setShowNavbar]}
                setOverview={[overView, setOverview]}
                setLidership={[leadership, setLidership]}
                setProgramsOffered={[programsOffered, setProgramsOffered]}
                setAlumni={[alumni, setAlumni]}
                setAdmission={[admission, setAdmission]}
                setFacultiStaff={[facultiStaff, setFacultiStaff]}
                setContactUs={[contactUs, setContactUs]}
                setNaac={[naac, setNaac]}
                setNcte={[ncte, setNcte]}
                setStudensts={[students, setStudensts]}
              ></Students>
            }
          ></Route>

          <Route
            path="/leadership"
            element={
              <Leadership
                setShowNavbar={[showNavbar, setShowNavbar]}
                setOverview={[overView, setOverview]}
                setLidership={[leadership, setLidership]}
                setProgramsOffered={[programsOffered, setProgramsOffered]}
                setAlumni={[alumni, setAlumni]}
                setAdmission={[admission, setAdmission]}
                setFacultiStaff={[facultiStaff, setFacultiStaff]}
                setContactUs={[contactUs, setContactUs]}
                setNaac={[naac, setNaac]}
                setNcte={[ncte, setNcte]}
                setStudensts={[students, setStudensts]}
              ></Leadership>
            }
          ></Route>

          <Route
            path="/admission"
            element={
              <Admission
                setShowNavbar={[showNavbar, setShowNavbar]}
                setOverview={[overView, setOverview]}
                setLidership={[leadership, setLidership]}
                setProgramsOffered={[programsOffered, setProgramsOffered]}
                setAlumni={[alumni, setAlumni]}
                setAdmission={[admission, setAdmission]}
                setFacultiStaff={[facultiStaff, setFacultiStaff]}
                setContactUs={[contactUs, setContactUs]}
                setNaac={[naac, setNaac]}
                setNcte={[ncte, setNcte]}
                setStudensts={[students, setStudensts]}
              ></Admission>
            }
          ></Route>

          <Route
            path="/programesOffered"
            element={
              <ProgramesOffered
                setShowNavbar={[showNavbar, setShowNavbar]}
                setOverview={[overView, setOverview]}
                setLidership={[leadership, setLidership]}
                setProgramsOffered={[programsOffered, setProgramsOffered]}
                setAlumni={[alumni, setAlumni]}
                setAdmission={[admission, setAdmission]}
                setFacultiStaff={[facultiStaff, setFacultiStaff]}
                setContactUs={[contactUs, setContactUs]}
                setNaac={[naac, setNaac]}
                setNcte={[ncte, setNcte]}
                setStudensts={[students, setStudensts]}
              ></ProgramesOffered>
            }
          ></Route>
          <Route
            path="/parents-login"
            element={
              <ParentsLogin
                setShowNavbar={[showNavbar, setShowNavbar]}
                setOverview={[overView, setOverview]}
                setLidership={[leadership, setLidership]}
                setProgramsOffered={[programsOffered, setProgramsOffered]}
                setAlumni={[alumni, setAlumni]}
                setAdmission={[admission, setAdmission]}
                setFacultiStaff={[facultiStaff, setFacultiStaff]}
                setContactUs={[contactUs, setContactUs]}
                setNaac={[naac, setNaac]}
                setNcte={[ncte, setNcte]}
                setStudensts={[students, setStudensts]}
                setStudentLogin={[studentLogin, setStudentLogin]}
                setParentsLogin={[parentsLogin, setParentsLogin]}
              />
            }
          />
          <Route
            path="/student-login"
            element={
              <StudentLogin
                setShowNavbar={[showNavbar, setShowNavbar]}
                setOverview={[overView, setOverview]}
                setLidership={[leadership, setLidership]}
                setProgramsOffered={[programsOffered, setProgramsOffered]}
                setAlumni={[alumni, setAlumni]}
                setAdmission={[admission, setAdmission]}
                setFacultiStaff={[facultiStaff, setFacultiStaff]}
                setContactUs={[contactUs, setContactUs]}
                setNaac={[naac, setNaac]}
                setNcte={[ncte, setNcte]}
                setStudensts={[students, setStudensts]}
                setStudentLogin={[studentLogin, setStudentLogin]}
                setParentsLogin={[parentsLogin, setParentsLogin]}
              />
            }
          />
        </Routes>
      </div>
      <Footer
        setShowNavbar={[showNavbar, setShowNavbar]}
        setOverview={[overView, setOverview]}
        setLidership={[leadership, setLidership]}
        setProgramsOffered={[programsOffered, setProgramsOffered]}
        setAlumni={[alumni, setAlumni]}
        setAdmission={[admission, setAdmission]}
        setFacultiStaff={[facultiStaff, setFacultiStaff]}
        setContactUs={[contactUs, setContactUs]}
        setNaac={[naac, setNaac]}
        setNcte={[ncte, setNcte]}
        setStudensts={[students, setStudensts]}
      ></Footer>
    </div>
  );
}

export default App;