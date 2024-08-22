import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = ({
  setShowNavbar,
  setOverview,
  setLidership,
  setProgramsOffered,
  setAlumni,
  setAdmission,
  setFacultiStaff,
  setContactUs,
  setNaac,
  setStudensts,
  setNcte,
  setParentsLogin,
  setStudentLogin
}) => {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);

  const handleOverview = () => {
    setOverview[1]("setOverview");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setAdmission[1]("");
    setNaac[1]("");
    setStudensts[1]("");
    setFacultiStaff[1]("");
    setContactUs[1]("");
    setNcte[1]("");
    setShowNavbar[1](false);
    setParentsLogin[1]("");
    setStudentLogin[1]("");
    navigate("/");
  };
  const handleLeadership = () => {
    setShowNavbar[1](true);
    setOverview[1]("");
    setLidership[1]("setLidership");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setAdmission[1]("");
    setStudensts[1]("");
    setFacultiStaff[1]("");
    setNaac[1]("");
    setNcte[1]("");
    setContactUs[1]("");
    setParentsLogin[1]("");
    setStudentLogin[1]("");
    navigate("/leadership");
  };
  const handleParentsLogin = () => {
    setOverview[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setAdmission[1]("");
    setFacultiStaff[1]("");
    setShowNavbar[1](true);
    setContactUs[1]("");
    setNaac[1]("");
    setNcte[1]("");
    setParentsLogin[1]("setParentsLogin");
    setStudentLogin[1]("");
    navigate("/parents-login");
  };
  

  const handleStudentLogin = () => {
    setOverview[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setAdmission[1]("");
    setFacultiStaff[1]("");
    setShowNavbar[1](true);
    setContactUs[1]("");
    setNaac[1]("");
    setNcte[1]("");
    setParentsLogin[1]("");
    setStudentLogin[1]("setStudentLogin");
    navigate("/student-login");
  };
  

  const handleProgramsOffered = () => {
    setOverview[1]("");
    setLidership[1]("");
    setStudensts[1]("");
    setProgramsOffered[1]("setProgramsOffered");
    setAlumni[1]("");
    setAdmission[1]("");
    setFacultiStaff[1]("");
    setShowNavbar[1](true);
    setContactUs[1]("");
    setNcte[1]("");
    setNaac[1]("");
    navigate("/programesOffered");
  };
  const handleAlumni = () => {
    setOverview[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setStudensts[1]("");
    setAlumni[1]("setAlumni");
    setAdmission[1]("");
    setFacultiStaff[1]("");
    setShowNavbar[1](true);
    setContactUs[1]("");
    setNcte[1]("");
    setNaac[1]("");
    navigate("/alumni");
  };
  const handleAdmission = () => {
    setOverview[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setStudensts[1]("");
    setAdmission[1]("setAdmission[1]");
    setShowNavbar[1](true);
    setFacultiStaff[1]("");
    setContactUs[1]("");
    setNcte[1]("");
    setNaac[1]("");
    navigate("/admission");
  };
  const handleFacultiStaff = () => {
    setOverview[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setShowNavbar[1](true);
    setStudensts[1]("");
    setAdmission[1]("");
    setFacultiStaff[1]("setFacultiStaff[1]");
    setContactUs[1]("");
    setNcte[1]("");
    setNaac[1]("");
    navigate("/faculty");
  };
  const handleStudensts = () => {
    setOverview[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setShowNavbar[1](true);
    setAdmission[1]("");
    setStudensts[1]("setStudensts[1]");
    setFacultiStaff[1]("");
    setContactUs[1]("");
    setNcte[1]("");
    setNaac[1]("");
    navigate("/students");
  };
  const handleNCTE = () => {
    setOverview[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setShowNavbar[1](true);
    setAdmission[1]("");
    setStudensts[1]("");
    setFacultiStaff[1]("");
    setNcte[1]("setNcte");
    setContactUs[1]("");
    setNaac[1]("");
    navigate("/ncte");
  };
  const handleNaac = () => {
    setOverview[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setShowNavbar[1](true);
    setAdmission[1]("");
    setFacultiStaff[1]("");
    setNcte[1]("");
    setStudensts[1]("");
    setNaac[1]("setNaac[1]");
    setContactUs[1]("");
    navigate("/naac");
  };
  const handleContactUs = () => {
    setOverview[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setShowNavbar[1](false);
    setAdmission[1]("");
    setNaac[1]("");
    setFacultiStaff[1]("");
    setNcte[1]("");
    setStudensts[1]("");
    setContactUs[1]("setContactUs[1]");
    navigate("/contact");
  };

  const activeNavbar = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
      setShowNavbar[1](false);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", activeNavbar);

  return (
    <div
      className={`navbarContainer flex  justify-center lg:mx-[40px] md:mx-12 mx-6 ${
        navbar === true ? "block" : "hidden"
      } ${
        setShowNavbar[0] === true ? "hidden" : "block"
      } for-making-sticky-navbar`}
    >
      <div class="navbar shadow-2xl flex curve-navbar justify-around">
        <div
          onClick={handleOverview}
          className={`items-center ${
            setOverview[0] ? "for-background" : "not-selected"
          } lg:pe-4  py-4 navbar-topic`}
        >
          <h1 className="font-bold ">Overview</h1>
        </div>
        <div
          onClick={handleLeadership}
          className={`items-center ${
            setLidership[0] ? "for-background" : "not-selected"
          } lg:pe-4  py-4 navbar-topic`}
        >
          <h1 className="font-bold ">Leadership</h1>
        </div>
        <div
          onClick={handleProgramsOffered}
          className={`items-center ${
            setProgramsOffered[0] ? "for-background" : "not-selected"
          } lg:pe-4  py-4 navbar-topic`}
        >
          <h1 className="font-bold ">Programs Offered</h1>
        </div>

        <div
          onClick={handleNaac}
          className={`items-center ${
            setNaac[0] ? "for-background" : "not-selected"
          } lg:pe-4  py-4 navbar-topic`}
        >
          <h1 className="font-bold ">NAAC</h1>
        </div>
        <div
          onClick={handleNCTE}
          className={`items-center ${
            setNcte[0] ? "for-background" : "not-selected"
          } lg:pe-4  py-4 navbar-topic`}
        >
          <h1 className="font-bold ">NCTE</h1>
        </div>
        <div
          onClick={handleAdmission}
          className={`items-center ${
            setAdmission[0] ? "for-background" : "not-selected"
          } lg:pe-4  py-4 navbar-topic`}
        >
          <h1 className="font-bold ">Admissions</h1>
        </div>
        <div
          onClick={handleFacultiStaff}
          className={`items-center ${
            setFacultiStaff[0] ? "for-background" : "not-selected"
          } lg:pe-4  py-4 navbar-topic`}
        >
          <h1 className="font-bold ">Faculty & Staff</h1>
        </div>
        <div
          onClick={handleStudensts}
          className={`items-center ${
            setStudensts[0] ? "for-background" : "not-selected"
          } lg:pe-4  py-4 navbar-topic`}
        >
          <h1 className="font-bold ">Students</h1>
        </div>

        <div
          onClick={handleAlumni}
          className={`items-center ${
            setAlumni[0] ? "for-background" : "not-selected"
          } lg:pe-4  py-4 navbar-topic`}
        >
          <h1 className="font-bold ">Alumni</h1>
        </div>

        <div
  onClick={handleParentsLogin}
  className={`items-center ${
    setParentsLogin[0] ? "for-background" : "not-selected"
  } lg:pe-4 py-4 navbar-topic`}
>
  <h1 className="font-bold">Parents Login</h1>
</div>

<div
  onClick={handleStudentLogin}
  className={`items-center ${
    setStudentLogin[0] ? "for-background" : "not-selected"
  } lg:pe-4 py-4 navbar-topic`}
>
  <h1 className="font-bold">Student Login</h1>
</div>


        <div
          onClick={handleContactUs}
          className={`items-center ${
            setContactUs[0] ? "for-background" : "not-selected"
          } lg:pe-4 py-4 navbar-topic`}
        >
          <h1 className="font-bold ">Contact Us</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
