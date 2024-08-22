import React, { useEffect, useState } from "react";

import "../FacultyAndStaff/FacultyStafTable.css"
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import SideBar from "../SideBar/SideBar";
import { BsList } from "react-icons/bs";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import coverStudentLogin from ".//primary_cover.2ce3de500dbbfcf0dce2.jpg";
import location from "./../assets/icons/location.png";
import email from "./../assets/icons/email.png";
import phone from "./../assets/icons/footer.png";
import aboutUs from "./../assets/images/faculty.JPG";

const StudentLogin = ({
  setShowNavbar,
  setOverview,
  setLeadership,
  setProgramsOffered,
  setAlumni,
  setAdmission,
  setFacultyStaff,
  setContactUs,
  setNaac,
  setStudents,
  setNcte,
  setStudentLogin,
  setParentsLogin,
}) => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
    console.log(isShow);
  };

  const handleScroll = () => {
    if (window.scrollY > 0 && !isScrolled) {
      setIsScrolled(true);
    } else if (window.scrollY === 0) {
      setIsScrolled(false);
    }
  };

  const handleOverview = () => {
    setOverview("setOverview");
    setLeadership("");
    setProgramsOffered("");
    setAlumni("");
    setAdmission("");
    setNaac("");
    setStudents("");
    setFacultyStaff("");
    setContactUs("");
    setNcte("");
    setShowNavbar(false);
    setParentsLogin("");
    setStudentLogin("");
    navigate("/");
  };

  const handleLeadership = () => {
    setShowNavbar(true);
    setOverview("");
    setLeadership("setLeadership");
    setProgramsOffered("");
    setAlumni("");
    setAdmission("");
    setStudents("");
    setFacultyStaff("");
    setNaac("");
    setNcte("");
    setContactUs("");
    setParentsLogin("");
    setStudentLogin("");
    navigate("/leadership");
  };

  const handleParentsLogin = () => {
    setOverview("");
    setLeadership("");
    setProgramsOffered("");
    setAlumni("");
    setAdmission("");
    setFacultyStaff("");
    setShowNavbar(true);
    setContactUs("");
    setNaac("");
    setNcte("");
    setParentsLogin("setParentsLogin");
    setStudentLogin("");
    navigate("/parents-login");
  };

  const handleStudentLogin = () => {
    setOverview("");
    setLeadership("");
    setProgramsOffered("");
    setAlumni("");
    setAdmission("");
    setFacultyStaff("");
    setShowNavbar(true);
    setContactUs("");
    setNaac("");
    setNcte("");
    setParentsLogin("");
    setStudentLogin("setStudentLogin");
    navigate("/student-login");
  };

  const handleProgramsOffered = () => {
    setOverview("");
    setLeadership("");
    setStudents("");
    setProgramsOffered("setProgramsOffered");
    setAlumni("");
    setAdmission("");
    setFacultyStaff("");
    setShowNavbar(true);
    setContactUs("");
    setNcte("");
    setNaac("");
    navigate("/programesOffered");
  };

  const handleAlumni = () => {
    setOverview("");
    setLeadership("");
    setProgramsOffered("");
    setStudents("");
    setAlumni("setAlumni");
    setAdmission("");
    setFacultyStaff("");
    setShowNavbar(true);
    setContactUs("");
    setNcte("");
    setNaac("");
    navigate("/alumni");
  };

  const handleAdmission = () => {
    setOverview("");
    setLeadership("");
    setProgramsOffered("");
    setAlumni("");
    setStudents("");
    setAdmission("setAdmission");
    setShowNavbar(true);
    setFacultyStaff("");
    setContactUs("");
    setNcte("");
    setNaac("");
    navigate("/admission");
  };

  const handleFacultyStaff = () => {
    setOverview("");
    setLeadership("");
    setProgramsOffered("");
    setAlumni("");
    setShowNavbar(true);
    setStudents("");
    setAdmission("");
    setFacultyStaff("setFacultyStaff");
    setContactUs("");
    setNcte("");
    setNaac("");
    navigate("/faculty");
  };

  const handleStudents = () => {
    setOverview("");
    setLeadership("");
    setProgramsOffered("");
    setAlumni("");
    setShowNavbar(true);
    setAdmission("");
    setStudents("setStudents");
    setFacultyStaff("");
    setContactUs("");
    setNcte("");
    setNaac("");
    navigate("/students");
  };

  const handleNCTE = () => {
    setOverview("");
    setLeadership("");
    setProgramsOffered("");
    setAlumni("");
    setShowNavbar(true);
    setAdmission("");
    setStudents("");
    setFacultyStaff("");
    setNcte("setNcte");
    setContactUs("");
    setNaac("");
    navigate("/ncte");
  };

  const handleNaac = () => {
    setOverview("");
    setLeadership("");
    setProgramsOffered("");
    setAlumni("");
    setShowNavbar(true);
    setAdmission("");
    setFacultyStaff("");
    setNcte("");
    setStudents("");
    setNaac("setNaac");
    setContactUs("");
    navigate("/naac");
  };

  const handleContactUs = () => {
    setOverview("");
    setLeadership("");
    setProgramsOffered("");
    setAlumni("");
    setShowNavbar(false);
    setAdmission("");
    setNaac("");
    setFacultyStaff("");
    setNcte("");
    setStudents("");
    setContactUs("setContactUs");
    navigate("/contact");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <div>
      <div className={`${isScrolled && "navbarMobile"}`}>
        <div className="menuIconContainer">
          <div className="menuIcon">
            <BsList
              className="cursor"
              size={25}
              color="white"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <img className="w-full" src={aboutUs} alt="About Us" />
      <div className="flex flex-col justify-between md:flex-row">
        <div className="flex lg:justify-center mt-6 ml-6 updated-font-family md:grid lg:grid">
          <div>
            <div className="leadership">
              <p
                onClick={handleOverview}
                className="flex items-center h-12 my-2 forTextHover updated-font-family"
              >
                Overview
              </p>
              <p
                onClick={handleLeadership}
                className="flex items-center h-12 my-2 forTextHover updated-font-family"
              >
                Leadership
              </p>
              <p
                onClick={handleProgramsOffered}
                className="flex items-center h-12 my-2 forTextHover updated-font-family"
              >
                Programs Offered
              </p>
              <p
                onClick={handleNaac}
                className="flex items-center h-12 my-2 forTextHover updated-font-family"
              >
                NAAC
              </p>
              <p
                onClick={handleNCTE}
                className="flex items-center h-12 my-2 forTextHover updated-font-family"
              >
                NCTE
              </p>
              <p
                onClick={handleAdmission}
                className="flex items-center h-12 my-2 forTextHover updated-font-family"
              >
                Admission
              </p>
              <p
                onClick={handleFacultyStaff}
                className="flex items-center h-12 my-2 forTextHover updated-font-family"
              >
                Faculty & Staff
              </p>
              <p
                onClick={handleStudents}
                className="flex items-center h-12 my-2 forTextHover updated-font-family"
              >
                Students
              </p>
              <p
                onClick={handleAlumni}
                className="flex items-center h-12 my-2 forTextHover updated-font-family"
              >
                Alumni
              </p>
              <p
                onClick={handleContactUs}
                className="flex items-center h-12 my-2 forTextHover updated-font-family"
              >
                Contact Us
              </p>
            </div>
            <div>
              <SideBar />
            </div>

            <NavbarMenu isShow={isShow} handleClick={handleClick} />

            <div className="leadership-info">
              <div className="flex justify-center">
                <img className="h-8 mr-4" src={location} alt="" />
                <p className="flex forTextHover updated-font-family">
                  Hermann Gmeiner Degree College Bhimtal SOS Complex, Tallital
                  Bhimtal Nainital, Uttrakhand, India, 263136
                  {/* address req */}
                </p>
              </div>
              <div className="flex items-center justify-center my-4 mr-6">
                <img className="mr-4" src={email} alt="" />
                <p className="flex forTextHover updated-font-family">
                  Principal.bhimtalbed@sos
                  <br />
                  cvindia.org{" "}
                </p>
              </div>
              <div className="flex">
                <img className="mr-4" src={phone} alt="" />
                <p className="flex forTextHover updated-font-family">
                  05942-247999
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentLogin;
