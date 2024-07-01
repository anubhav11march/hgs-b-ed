import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ContactNavbar = () => {
  const [overView, setOverview] = useState("");
  const [leadership, setLeadership] = useState("");
  const [programsOffered, setProgramsOffered] = useState("");
  const [alumni, setAlumni] = useState("");
  const [admission, setAdmission] = useState("");
  const [facultiStaff, setFacultiStaff] = useState("");
  const [contactUs, setContactUs] = useState("");
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const handleOverview = () => {
    setOverview("setOverview");
    setLeadership("");
    setProgramsOffered("");
    navigate("/");
    setAlumni("");
    setAdmission("");
    setFacultiStaff("");
    setContactUs("");
  };
  const handleLeadership = () => {
    setOverview("");
    setLeadership("setProgramsOffered");
    setProgramsOffered("");

    setAlumni("");
    setAdmission("");
    setFacultiStaff("");
    setContactUs("");
  };
  const handleProgramsOffered = () => {
    setOverview("");
    setLeadership("");
    setProgramsOffered("setPlacement");

    setAlumni("");
    setAdmission("");
    setFacultiStaff("");
    setContactUs("");
  };
  const handleAlumni = () => {
    setOverview("");
    setLeadership("");
    setProgramsOffered("");

    setAlumni("setAdmissionRequirment");
    setAdmission("");
    setFacultiStaff("");
    setContactUs("");
  };
  const handleAdmission = () => {
    setOverview("");
    setLeadership("");
    setProgramsOffered("");

    setAlumni("");
    setAdmission("setKeyInfo");
    setFacultiStaff("");
    setContactUs("");
  };
  const handleFacultiStaff = () => {
    setOverview("");
    setLeadership("");
    setProgramsOffered("");

    setAlumni("");
    setAdmission("");
    setFacultiStaff("setLife");
    setContactUs("");
  };
  const handleContactUs = () => {
    setOverview("");
    setLeadership("");
    setProgramsOffered("");
    setAlumni("");
    setAdmission("");
    setFacultiStaff("");
    setContactUs("setAwards");
    navigate("/contact");
  };

  const activeNavbar = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", activeNavbar);

  return (
    <div className={`flex justify-center bg-white for-making-sticky-navbar`}>
      <div class="navbar mx-[80] shadow-2xl flex justify-center">
        <div
          onClick={handleOverview}
          className={`items-center ${
            overView ? "for-background" : "not-selected"
          } px-4 mr-[32px] py-2 navbar-topic`}
        >
          <h1 className="text-xl font-bold ">Overview</h1>
        </div>
        <div
          onClick={handleLeadership}
          className={`items-center ${
            leadership ? "for-background" : "not-selected"
          } px-4 mr-[32px] py-2 navbar-topic`}
        >
          <h1 className="text-xl font-bold ">Leadership</h1>
        </div>
        <div
          onClick={handleProgramsOffered}
          className={`items-center ${
            programsOffered ? "for-background" : "not-selected"
          } px-4 mr-[32px] py-2 navbar-topic`}
        >
          <h1 className="text-xl font-bold ">Programs Offered</h1>
        </div>
        <div
          onClick={handleAlumni}
          className={`items-center ${
            alumni ? "for-background" : "not-selected"
          } px-4 mr-[32px] py-2 navbar-topic`}
        >
          <h1 className="text-xl font-bold ">Alumni</h1>
        </div>
        <div
          onClick={handleAdmission}
          className={`items-center ${
            admission ? "for-background" : "not-selected"
          } px-4 mr-[32px] py-2 navbar-topic`}
        >
          <h1 className="text-xl font-bold ">Admissions</h1>
        </div>
        <div
          onClick={handleFacultiStaff}
          className={`items-center ${
            facultiStaff ? "for-background" : "not-selected"
          } px-4 mr-[32px] py-2 navbar-topic`}
        >
          <h1 className="text-xl font-bold ">Faculty & Staff</h1>
        </div>
        <div
          onClick={handleContactUs}
          className={`items-center ${
            contactUs ? "for-background" : "not-selected"
          } px-4 mr-[32px] py-2 navbar-topic`}
        >
          <h1 className="text-xl font-bold ">Contact Us</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactNavbar;
