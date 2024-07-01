import React, { useEffect, useState } from "react";
import teacher1 from "./../assets/images/teacher (1).png";
import principle from "./../assets/images/principle.png";
import teacher2 from "./../assets/images/teacher (2).png";
import teacher3 from "./../assets/images/teacher (3).png";
import teacher4 from "./../assets/images/teacher (4).png";
import teacher5 from "./../assets/images/teacher (5).png";
import teacher6 from "./../assets/images/teacher (6).png";
import teacher7 from "./../assets/images/teacher (7).png";
import teacher8 from "./../assets/images/teacher (8).png";
import teacher9 from "./../assets/images/teacher (9).png";
import teacher10 from "./../assets/images/teacher (10).png";
import teacher11 from "./../assets/images/teacher (11).png";
import teacher12 from "./../assets/images/teacher (12).png";
import teacher13 from "./../assets/images/teacher (13).png";
import teacher14 from "./../assets/images/teacher (14).png";
import teacher15 from "./../assets/images/teacher (15).png";
import teacher16 from "./../assets/images/teacher (16).png";
import teacher17 from "./../assets/images/teacher (17).png";
import teacher18 from "./../assets/images/teacher (18).png";
import teacher19 from "./../assets/images/teacher (19).png";
import location from "./../assets/icons/location.png";
import email from "./../assets/icons/email.png";
import phone from "./../assets/icons/footer.png";
import aboutUs from "./../assets/images/faculty.JPG";

import "./FacultyStafTable.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import SideBar from "../SideBar/SideBar";
import { BsList } from "react-icons/bs";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

const FacultyAndStaf = ({
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
}) => {
  const navigate = useNavigate();
  const [isShow, steIsShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleClick = () => {
    steIsShow(!isShow);
    console.log(isShow);
  };
  const handleOverView = () => {
    setOverview[1]("setOverview");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setAdmission[1]("");
    setFacultiStaff[1]("");
    setContactUs[1]("");
    setStudensts[1]("");
    setNcte[1]("");
    setNaac[1]("");
    setShowNavbar[1](false);
    navigate("/");
  };
  const handleLeadership = () => {
    setShowNavbar[1](true);
    setOverview[1]("");
    setLidership[1]("setLidership");
    setStudensts[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setAdmission[1]("");
    setFacultiStaff[1]("");
    setNcte[1]("");
    setNaac[1]("");
    setContactUs[1]("");
    navigate("/leadership");
  };
  const handleProgramsOffered = () => {
    setOverview[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("setProgramsOffered");
    setStudensts[1]("");
    setAlumni[1]("");
    setAdmission[1]("");
    setFacultiStaff[1]("");
    setNaac[1]("");
    setShowNavbar[1](true);
    setNcte[1]("");
    setContactUs[1]("");
    navigate("/programesOffered");
  };
  const handleAlumni = () => {
    setOverview[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("setAlumni");
    setStudensts[1]("");
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
    setAdmission[1]("setAdmission[1]");
    setStudensts[1]("");
    setShowNavbar[1](true);
    setFacultiStaff[1]("");
    setNaac[1]("");
    setNcte[1]("");
    setContactUs[1]("");
    navigate("/admission");
  };
  const handleFaculty = () => {
    setOverview[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setShowNavbar[1](true);
    setAdmission[1]("");
    setNaac[1]("");
    setFacultiStaff[1]("setFacultiStaff[1]");
    setStudensts[1]("");
    setContactUs[1]("");
    setNcte[1]("");
    navigate("/faculty");
  };
  const handleContact = () => {
    setOverview[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setShowNavbar[1](false);
    setAdmission[1]("");
    setFacultiStaff[1]("");
    setNaac[1]("");
    setContactUs[1]("setContactUs[1]");
    setStudensts[1]("");
    setNcte[1]("");
    navigate("/contact");
  };
  const handleNaac = () => {
    setOverview[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setStudensts[1]("");
    setAlumni[1]("");
    setShowNavbar[1](true);
    setAdmission[1]("");
    setFacultiStaff[1]("");
    setNaac[1]("setNaac[1]");
    setContactUs[1]("");
    setNcte[1]("");
    navigate("/naac");
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
    setNaac[1]("");
    setNcte[1]("");
    navigate("/students");
  };
  const handleNcte = () => {
    setOverview[1]("");
    setNcte[1]("setNcte");
    setStudensts[1]("");
    setLidership[1]("");
    setProgramsOffered[1]("");
    setAlumni[1]("");
    setAdmission[1]("");
    setFacultiStaff[1]("");
    setNaac[1]("");
    setContactUs[1]("");
    setShowNavbar[1](false);
    navigate("/ncte");
  };
  const handleScroll = () => {
    if (window.scrollY > 0 && !isScrolled) {
      setIsScrolled(true);
    }
    if (window.scrollY === 0) {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="">
      <div>
        <div className={`${isScrolled && "navbarMobile"}`}>
          <div className="menuIconContainer">
            <div className="menuIcon">
              <BsList
                className="cursor"
                size={25}
                color="white"
                onClick={() => handleClick()}
              />
            </div>
          </div>
        </div>
        <img className="w-full" src={aboutUs} alt="" />
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex lg:justify-center mt-6 ml-6 updated-font-family md:grid lg:grid">
            <div>
              <div className="leadership">
                <p
                  onClick={handleOverView}
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
                  onClick={handleNcte}
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
                  onClick={handleFaculty}
                  className="flex items-center h-12 my-2 forTextHover updated-font-family"
                >
                  Faculty & Staff
                </p>
                <p
                  onClick={handleStudensts}
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
                  onClick={handleContact}
                  className="flex items-center h-12 my-2 forTextHover updated-font-family"
                >
                  Contact Us
                </p>
              </div>
              <div>
                <SideBar />
              </div>
              {/* responsive navbar */}
              <NavbarMenu isShow={isShow} handleClick={handleClick} />

              <div className="leadership-info">
                <div className="flex justify-center">
                  <img className="h-8 mr-4" src={location} alt="" />
                  <p className="flex forTextHover updated-font-family">
                    SOS J N Kaul Institute of Education Bhimtal SOS Complex,
                    Tallital Bhimtal Nainital, Uttrakhand, India, 263136
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

          {/* This is table */}
          <div className="w-full">
            <div class="mb-[50px] mt-2">
              <h1
                style={{ color: "#2D4A9D" }}
                className="flex mt-6 mb-6 ml-8 text-4xl font-bold leadership-heading updated-font-family"
              >
                Faculty & Staff
              </h1>
              <p className="flex mb-2 ml-8 text-xl updated-font-family">
                LECTURERS/TEACHING STAFF (AS PER NCTE NORMS)
              </p>
              <div class="overflow-x-auto md:mx-2 lg:mx-8">
                <table class="w-full">
                  <thead>
                    <tr className="heading-height">
                      <th className="table-data">
                        Sl <br /> No.
                      </th>
                      <th className="table-data">Name</th>
                      <th className="table-data">Attested photograph</th>
                      <th className="stand-heading table-data">
                        Category <br />
                        Whether SC/ST/OBC/other
                      </th>
                      <th className="stand-heading table-data">Designation</th>
                      <th className="table-data">
                        <div>
                          <div className="border-b-2 border-black">
                            <span>B.Ed. Yes/No</span>
                          </div>
                          <span>If yes, %age of Marks</span>
                        </div>
                      </th>
                      <th className=" table-data">
                        <div>
                          <div className="border-b-2 border-black">
                            <span>M.Ed. Yes/No</span>
                          </div>
                          <span>If yes, %age of Marks</span>
                        </div>
                      </th>
                      <th className=" table-data">
                        <div>
                          <div className="border-b-2 border-black">
                            <span>M.A (Education) Yes/No</span>
                          </div>
                          <span>If yes, %age of Marks</span>
                        </div>
                      </th>
                      <th className=" table-data">
                        <div>
                          <div className="border-b-2 border-black">
                            <span>
                              Master’s Degree in school subject Yes/No
                            </span>
                          </div>
                          <span>
                            If yes, %age of Marks & specify the subject
                          </span>
                        </div>
                      </th>
                      <th className="stand-heading table-data">
                        Subject of Teaching
                      </th>
                      <th className="stand-heading table-data">
                        the subject) <br />
                        Ph.D. (Education/Specify{" "}
                      </th>
                      <th className="stand-heading table-data">
                        {" "}
                        or equivalent <br />
                        Passed UGC NET
                      </th>
                      <th className="stand-heading table-data">
                        in Years
                        <br />
                        Teaching Experience
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th className="table-data">1</th>
                      <td className="table-data fixed-width-name">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          Dr. Mukta
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          <div class="avatar">
                            {" "}
                            <span className="flex justify-center updated-font-family">
                              {" "}
                              <div class="w-32 rounded">
                                <img
                                  className="w-32 table-picture"
                                  src={principle}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </span>
                          </div>
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          GEN
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          Principal
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          76.8
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          74.24{" "}
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          NO{" "}
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          English <br></br>
                          55.4
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          English, <br></br>
                          Life Science
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          Education <br></br> English
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          NET, 2007
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          15 <br></br> Years{" "}
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <th className="table-data">2</th>
                      <td className="table-data fixed-width-name">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          Ms. Beena Negi
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          <div class="avatar">
                            {" "}
                            <span className="flex justify-center updated-font-family">
                              {" "}
                              <div class="w-32 rounded">
                                <img
                                  className="w-32 table-picture"
                                  src={teacher14}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </span>
                          </div>
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          GEN
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          Assistant <br></br> Professor
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          Yes <br />
                          70.11%
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          Yes <br />
                          76%
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          YES{" "}
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          GEO, EDUCATIO N
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          SOCIAL <br></br>
                          STUDIES
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          No
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          NET, USET
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          11 Years
                        </span>
                      </td>
                    </tr>

                    {/* <tr>
                                            <th className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    3
                                                </span>
                                            </th>
                                            <td className="table-data fixed-width-name">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    Ms. Sonal Shukla
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    <div class="avatar">
                                                        <div class="w-32 rounded">
                                                            <img
                                                                className="w-32"
                                                                src={teacher15}
                                                                alt="Avatar Tailwind CSS Component"
                                                            />
                                                        </div>
                                                    </div>
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    GEN
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    Assistant<br></br>
                                                    Professor
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    60
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    65
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    --
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    M.A, POLITICAL<br></br>
                                                    SCIENCE,
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    HINDI,<br></br>
                                                    ECONOMICS
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    -{" "}
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    YES{" "}
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    4 YEARS
                                                </span>
                                            </td>
                                        </tr> */}
                    {/* <tr>
                                            <th className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                </span>
                                                4
                                            </th>
                                            <td className="table-data fixed-width-name">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    Mr. Vipin Kumar
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    <div class="avatar">
                                                        <div class="w-32 rounded">
                                                            <img
                                                                className="w-32"
                                                                src={teacher1}
                                                                alt="Avatar Tailwind CSS Component"
                                                            />
                                                        </div>
                                                    </div>
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    OBC
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    Assistant<br></br>
                                                    Professor
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    Yes <br/> 73%
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    Yes <br/>77%
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    -
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    ENGLISH
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    English
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    NO
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    YES
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    2 YEARS
                                                </span>
                                            </td>
                                        </tr> */}
                    {/* <tr>
                                            <th className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    5
                                                </span>
                                            </th>
                                            <td className="table-data fixed-width-name">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    Ms. Lata Shahi
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    <div class="avatar">
                                                        <div class="w-32 rounded">
                                                            <img
                                                                className="w-32"
                                                                src={teacher13}
                                                                alt="Avatar Tailwind CSS Component"
                                                            />
                                                        </div>
                                                    </div>{" "}
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    GEN
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    Assistant <br></br>
                                                    Professor
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    Yes <br/> 74%
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    Yes <br/> 75%
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    -
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    58 ENGLISH
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    English
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    -
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    YES{" "}
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    -
                                                </span>
                                            </td>
                                        </tr> */}

                    <tr>
                      <th className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          3
                        </span>
                      </th>
                      <td className="table-data fixed-width-name">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          Mr. Himanshu Fartyal{" "}
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          <div class="avatar">
                            <div class="w-32 rounded">
                              <img
                                className="w-32"
                                src={teacher12}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          GEN{" "}
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          Assistant <br></br>
                          Professor
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          Yes <br /> 72%
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          Yes <br /> 66%
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          PHYSICAL<br></br>
                          EDUCATION
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          6 Years
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <th className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          4
                        </span>
                      </th>
                      <td className="table-data fixed-width-name">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          Dr. Yogita Verma
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          <div class="avatar">
                            <div class="w-32 rounded">
                              <img
                                className="w-32"
                                src={teacher2}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          OBC
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          Lecturer <br></br>
                          (Fine Art)
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          62.2%
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          Yes <br /> 57.5%
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          FINE ARTS
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          FINE ARTS
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          YES
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          -
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <th className="table-data">5</th>
                      <td className="table-data fixed-width-name">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          Mr.Rajendra Khati
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          <div class="avatar">
                            <div class="w-32 rounded">
                              <img
                                className="w-32"
                                src={teacher11}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          GEN
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          Assistant <br></br>
                          Professor
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          Yes <br /> 67%
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          Yes <br /> 78%
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          56 POL.<br></br>
                          SCIENCE
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          SST{" "}
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          NO
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          YES USET
                        </span>
                      </td>
                      <td className="table-data">
                        {" "}
                        <span className="flex justify-center updated-font-family">
                          {" "}
                          1.5 Years
                        </span>
                      </td>
                    </tr>
                    {/* <tr>
                                            <th className="table-data">
                                                {" "}
                                                <span className="flex justify-center updated-font-family">
                                                    {" "}
                                                    9
                                                </span>
                                            </th>
                                            <td className="table-data fixed-width-name">
                                                <span className="flex justify-center updated-font-family">
                                                    Mr. Manoj Kumar
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    <div class="avatar">
                                                        <div class="w-32 rounded">
                                                            <img
                                                                className="w-32"
                                                                src={teacher3}
                                                                alt="Avatar Tailwind CSS Component"
                                                            />
                                                        </div>
                                                    </div>
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    SC
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    Assistant<br></br>
                                                    Professor
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    60
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    72
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    60
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    -
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    EDUCATION
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    NO
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    YES
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    1 Year
                                                </span>
                                            </td>
                                        </tr> */}
                    {/* <tr>
                                            <th className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    10
                                                </span>
                                            </th>
                                            <td className="table-data fixed-width-name">
                                                <span className="flex justify-center updated-font-family">
                                                    Ms. Deepali Gupta
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    <div class="avatar">
                                                        <div class="w-32 rounded">
                                                            <img
                                                                className="w-32"
                                                                src={teacher9}
                                                                alt="Avatar Tailwind CSS Component"
                                                            />
                                                        </div>
                                                    </div>
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    GEN
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    Assistant <br></br>
                                                    Professor
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    70
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    72
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    -
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    Zoology
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    Science
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    NO
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    YES
                                                </span>
                                            </td>
                                            <td className="table-data">
                                                <span className="flex justify-center updated-font-family">
                                                    3 YEARS
                                                </span>
                                            </td>
                                        </tr> */}
                    <tr>
                      <th className="table-data">
                        <span className="flex justify-center updated-font-family">
                          6
                        </span>
                      </th>
                      <td className="table-data fixed-width-name">
                        <span className="flex justify-center updated-font-family">
                          Ms. Akansha Shaily
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          <div class="avatar">
                            <div class="w-32 rounded">
                              <img
                                className="w-32"
                                src={teacher10}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          SC
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Assistant<br></br>
                          Professor
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Yes <br /> 71.22%
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Yes <br /> 73%
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Political Science<br></br>
                          Education 68%
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Physical Science,<br></br>
                          Mathematics
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          NO
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          NET
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          10 Months
                        </span>
                      </td>
                    </tr>
                    {/* <tr>
                                            <th className='table-data'><span className='flex justify-center updated-font-family'>12</span></th>
                                            <td className='table-data fixed-width-name'><span className='flex justify-center updated-font-family'>Ms. Deepika
                                                Dhanik</span></td>
                                            <td className='table-data'><span className='flex justify-center updated-font-family'><div class="avatar">
                                                <div class="w-32 rounded">
                                                    <img className='w-32' src={teacher4} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div></span>


                                            </td>
                                            <td className='table-data'><span className='flex justify-center updated-font-family'>GEN</span></td>
                                            <td className='table-data'><span className='flex justify-center updated-font-family'>Assistant <br></br>
                                                Professor</span></td>
                                            <td className='table-data'><span className='flex justify-center updated-font-family'>73%</span></td>
                                            <td className='table-data'><span className='flex justify-center updated-font-family'>80%</span></td>
                                            <td className='table-data'><span className='flex justify-center updated-font-family'>-</span></td>
                                            <td className='table-data'><span className='flex justify-center updated-font-family'>Chemistry<br></br>
                                                Education
                                                70%</span></td>
                                            <td className='table-data'><span className='flex justify-center updated-font-family'>Physical
                                                Science,<br></br>
                                                Mathematics</span></td>
                                            <td className='table-data'><span className='flex justify-center updated-font-family'>No</span></td>
                                            <td className='table-data'><span className='flex justify-center updated-font-family'>NET</span></td>
                                            <td className='table-data'><span className='flex justify-center updated-font-family'>1 Month</span></td>
                                        </tr> */}
                    <tr>
                      <th className="table-data">
                        <span className="flex justify-center updated-font-family">
                          7
                        </span>
                      </th>
                      <td className="table-data fixed-width-name">
                        <span className="flex justify-center updated-font-family">
                          Dr. Binita Rai
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          <div class="avatar">
                            <div class="w-32 rounded">
                              <img
                                className="w-32"
                                src={teacher8}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          GEN
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Assistant<br></br>
                          Professor
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Yes <br /> 68%
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Yes <br /> 63.66%
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Yes
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Pol. Science 51.22%<br></br>
                          Education 57.44<br></br>
                          English 57.66%<br></br>
                          Sociology 63%
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          English
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Yes
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          8 Years
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <th className="table-data">
                        <span className="flex justify-center updated-font-family">
                          8
                        </span>
                      </th>
                      <td className="table-data fixed-width-name">
                        <span className="flex justify-center updated-font-family">
                          Dr. Gokulanand Tiwari
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          <div class="avatar">
                            <div class="w-32 rounded">
                              <img
                                className="w-32"
                                src={teacher5}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          GEN
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Assistant<br></br>
                          Professor
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Yes <br /> 65.7%
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Yes <br /> 73%
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Sanskrit 68%
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Hindi, Sanskrit
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Yes
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          -
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <th className="table-data">
                        <span className="flex justify-center updated-font-family">
                          9
                        </span>
                      </th>
                      <td className="table-data fixed-width-name">
                        <span className="flex justify-center updated-font-family">
                          Ms. Shalini Bharti
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          <div class="avatar">
                            <div class="w-32 rounded">
                              <img
                                className="w-32"
                                src={teacher6}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          SC
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Assistant<br></br>
                          Professor
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Music Vocal 62.8%
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Music
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          -
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          1 Year
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <th className="table-data">
                        <span className="flex justify-center updated-font-family">
                          10
                        </span>
                      </th>
                      <td className="table-data fixed-width-name">
                        <span className="flex justify-center updated-font-family">
                          Mr. Neeraj Kumar
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          <div class="avatar">
                            <div class="w-32 rounded">
                              <img
                                className="w-32"
                                src={teacher7}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          SC
                        </span>
                      </td>
                      <td className="table-data">
                        <span className="flex justify-center updated-font-family">
                          Assistant<br></br>
                          Professor
                        </span>
                      </td>
                      <td className="table-data text-center">
                        <span className="flex justify-center updated-font-family">
                          Yes <br /> 62%
                        </span>
                      </td>
                      <td className="table-data text-center">
                        <span className="flex justify-center updated-font-family">
                          -
                        </span>
                      </td>
                      <td className="table-data text-center">
                        <span className="flex justify-center updated-font-family">
                          -
                        </span>
                      </td>
                      <td className="table-data text-center">
                        <span className="flex justify-center updated-font-family">
                          Visual Art 70%
                        </span>
                      </td>
                      <td className="table-data text-center">
                        <span className="flex justify-center updated-font-family">
                          Visual Art
                        </span>
                      </td>
                      <td className="table-data text-center">
                        <span className="flex justify-center updated-font-family">
                          -
                        </span>
                      </td>
                      <td className="table-data text-center">
                        <span className="flex justify-center updated-font-family">
                          -
                        </span>
                      </td>
                      <td className="table-data text-center">
                        <span className="flex justify-center updated-font-family">
                          1.1 Year
                        </span>
                      </td>
                    </tr>

                    <tr className="hidden">
                      <th className="table-data">11</th>
                      <td className="table-data fixed-width-name">
                        Mr. Neeraj Kumar
                      </td>
                      <td className="table-data">
                        <div class="avatar">
                          <div class="w-32 rounded">
                            <img
                              className="w-32"
                              src={teacher7}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="table-data text-center">SC</td>
                      <td className="table-data text-center">
                        Assistant<br></br>
                        Professor
                      </td>
                      <td className="table-data text-center">
                        Yes <br />
                        62%
                      </td>
                      <td className="table-data text-center">-</td>
                      <td className="table-data text-center">-</td>
                      <td className="table-data text-center">Visual Art 70%</td>
                      <td className="table-data text-center">Visual Art</td>
                      <td className="table-data text-center">-</td>
                      <td className="table-data text-center">-</td>
                      <td className="table-data text-center">1.1 Year</td>
                    </tr>
                    <tr>
                      <th className="table-data">11</th>
                      <td className="table-data fixed-width-name">
                        Dr. Manoj Joshi
                      </td>
                      <td className="table-data">
                        <div class="avatar">
                          <div class="w-32 rounded">
                            <img
                              className="w-32"
                              src={teacher16}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="table-data text-center">GEN</td>
                      <td className="table-data text-center">
                        Assistant<br></br>
                        Professor
                      </td>
                      <td className="table-data text-center">
                        Yes <br />
                        67.3%
                      </td>
                      <td className="table-data text-center">
                        Yes <br /> 70.3%
                      </td>
                      <td className="table-data text-center">
                        Yes <br /> 67.6%
                      </td>
                      <td className="table-data text-center">
                        Commerce 60.7% History 61.2%
                      </td>
                      <td className="table-data text-center">
                        Commerce <br /> SST
                      </td>
                      <td className="table-data text-center">Yes</td>
                      <td className="table-data text-center">NET/JRF</td>
                      <td className="table-data text-center">9 Month</td>
                    </tr>
                    <tr>
                      <th className="table-data">12</th>
                      <td className="table-data fixed-width-name">
                        Dr. Hema Mehra
                      </td>
                      <td className="table-data">
                        <div class="avatar">
                          <div class="w-32 rounded">
                            <img
                              className="w-32"
                              src={teacher17}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="table-data text-center">GEN</td>
                      <td className="table-data text-center">
                        Assistant<br></br>
                        Professor
                      </td>
                      <td className="table-data text-center">
                        Yes <br />
                        67%
                      </td>
                      <td className="table-data text-center">
                        Yes <br />
                        66%
                      </td>
                      <td className="table-data text-center">
                        Yes <br />
                        59%
                      </td>
                      <td className="table-data text-center">M.Com 69%</td>
                      <td className="table-data text-center">
                        Commerce <br />
                        Mathematics
                      </td>
                      <td className="table-data text-center">Yes</td>
                      <td className="table-data text-center">No</td>
                      <td className="table-data text-center">5 Years</td>
                    </tr>
                    <tr>
                      <th className="table-data">13</th>
                      <td className="table-data fixed-width-name">
                        Ms. Pushpa Adhikari
                      </td>
                      <td className="table-data">
                        <div class="avatar">
                          <div class="w-32 rounded">
                            <img
                              className="w-32"
                              src={teacher18}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="table-data text-center">GEN</td>
                      <td className="table-data text-center">
                        Assistant<br></br>
                        Professor
                      </td>
                      <td className="table-data text-center">
                        Yes <br />
                        68.5%
                      </td>
                      <td className="table-data text-center">
                        Yes <br />
                        68%
                      </td>
                      <td className="table-data text-center">No</td>
                      <td className="table-data text-center">
                        Sociology 63% <br /> <br />
                        English 69%
                      </td>
                      <td className="table-data text-center">
                        Teaching of English
                      </td>
                      <td className="table-data text-center">No</td>
                      <td className="table-data text-center">Yes</td>
                      <td className="table-data text-center">5 Years</td>
                    </tr>
                    <tr>
                      <th className="table-data">14</th>
                      <td className="table-data fixed-width-name">
                        Mr. Sheetal Singh Maurya
                      </td>
                      <td className="table-data">
                        <div class="avatar">
                          <div class="w-32 rounded">
                            <img
                              className="w-32"
                              src={teacher19}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="table-data text-center">OBC</td>
                      <td className="table-data text-center">
                        Assistant<br></br>
                        Professor
                      </td>
                      <td className="table-data text-center">
                        Yes <br /> 76.7%
                      </td>
                      <td className="table-data text-center">
                        Yes <br /> 66.8%
                      </td>
                      <td className="table-data text-center">
                        Yes <br />
                        67%
                      </td>
                      <td className="table-data text-center">
                        M.Sc-CS 68.7% <br /> <br />
                        M.Sc-Botany 66%
                      </td>
                      <td className="table-data text-center">
                        Physical Science & <br /> <br />
                        Bio Science
                      </td>
                      <td className="table-data text-center">No</td>
                      <td className="table-data text-center">Yes</td>
                      <td className="table-data text-center">5 Years</td>
                    </tr>
                  </tbody>

                  {/* <tfoot>
                        <tr>
                            <th className='table-data'></th>
                            <th className='table-data'>Name</th>
                            <th className='table-data'>Job</th>
                            <th className='table-data'>Favorite Color</th>
                            <th className='table-data'></th>
                        </tr>
                    </tfoot> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyAndStaf;
