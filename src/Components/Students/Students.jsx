import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BsList } from "react-icons/bs";

import NavbarMenu from "../NavbarMenu/NavbarMenu";
import SideBar from "../SideBar/SideBar";
import email from "./../assets/icons/email.png";
import phone from "./../assets/icons/footer.png";
import aboutUs from "./../assets/images/faculty.JPG";
import location from "./../assets/icons/location.png";
import { StudentData } from "./constant";
import { AiOutlineSearch } from "react-icons/ai";

const Students = ({
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
    const itemsPerPage = 15;

    const totalPages = Math.ceil(StudentData.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = StudentData.slice(startIndex, endIndex);

    const navigate = useNavigate();
    const [isShow, steIsShow] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const handleClick = () => {
        steIsShow(!isShow);
    };
    const handleOverView = () => {
        setOverview[1]("setOverview");
        setNcte[1]("");
        setLidership[1]("");
        setProgramsOffered[1]("");
        setAlumni[1]("");
        setAdmission[1]("");
        setFacultiStaff[1]("");
        setContactUs[1]("");
        setNaac[1]("");
        setShowNavbar[1](false);
        navigate("/");
    };
    const handleLeadership = () => {
        setShowNavbar[1](true);
        setNcte[1]("");
        setOverview[1]("");
        setLidership[1]("setLidership");
        setProgramsOffered[1]("");
        setAlumni[1]("");
        setAdmission[1]("");
        setFacultiStaff[1]("");
        setNaac[1]("");
        setContactUs[1]("");
        navigate("/leadership");
    };
    const handleProgramsOffered = () => {
        setOverview[1]("");
        setNcte[1]("");
        setLidership[1]("");
        setProgramsOffered[1]("setProgramsOffered");
        setAlumni[1]("");
        setAdmission[1]("");
        setFacultiStaff[1]("");
        setNaac[1]("");
        setShowNavbar[1](true);
        setContactUs[1]("");
        navigate("/programesOffered");
    };
    const handleAlumni = () => {
        setOverview[1]("");
        setNcte[1]("");
        setLidership[1]("");
        setProgramsOffered[1]("");
        setAlumni[1]("setAlumni");
        setAdmission[1]("");
        setFacultiStaff[1]("");
        setShowNavbar[1](true);
        setContactUs[1]("");
        setNaac[1]("");
        navigate("/alumni");
    };
    const handleAdmission = () => {
        setOverview[1]("");
        setNcte[1]("");
        setLidership[1]("");
        setProgramsOffered[1]("");
        setAlumni[1]("");
        setAdmission[1]("setAdmission[1]");
        setShowNavbar[1](true);
        setFacultiStaff[1]("");
        setNaac[1]("");
        setContactUs[1]("");
        navigate("/admission");
    };
    const handleFaculty = () => {
        setOverview[1]("");
        setNcte[1]("");
        setLidership[1]("");
        setProgramsOffered[1]("");
        setAlumni[1]("");
        setShowNavbar[1](true);
        setAdmission[1]("");
        setNaac[1]("");
        setFacultiStaff[1]("setFacultiStaff[1]");
        setContactUs[1]("");
        navigate("/faculty");
    };
    const handleContact = () => {
        setOverview[1]("");
        setNcte[1]("");
        setLidership[1]("");
        setProgramsOffered[1]("");
        setAlumni[1]("");
        setShowNavbar[1](false);
        setAdmission[1]("");
        setFacultiStaff[1]("");
        setNaac[1]("");
        setContactUs[1]("setContactUs[1]");
        navigate("/contact");
    };
    const handleStudensts = () => {
        setOverview[1]("");
        setNcte[1]("");
        setLidership[1]("");
        setProgramsOffered[1]("");
        setAlumni[1]("");
        setShowNavbar[1](true);
        setAdmission[1]("");
        setStudensts[1]("setStudensts[1]");
        setFacultiStaff[1]("");
        setContactUs[1]("");
        setNaac[1]("");
        navigate("/students");
    };
    const handleNaac = () => {
        setOverview[1]("");
        setNcte[1]("");
        setLidership[1]("");
        setProgramsOffered[1]("");
        setAlumni[1]("");
        setShowNavbar[1](true);
        setAdmission[1]("");
        setFacultiStaff[1]("");
        setNaac[1]("setNaac[1]");
        setContactUs[1]("");
        navigate("/naac");
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

    const handleDecrease = () => {
        if (currentPage <= 1) return;
        setCurrentPage(currentPage - 1);
        window.scrollTo(0, 0);
    };
    const handleIncrease = () => {
        // currentPage cant't be greater than total pages
        if (currentPage >= totalPages) return;
        setCurrentPage(currentPage + 1);
        window.scrollTo(0, 0);
    };

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
                </div>{" "}
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
                            <NavbarMenu
                                isShow={isShow}
                                handleClick={handleClick}
                            />

                            <div className="leadership-info">
                                <div className="flex justify-center">
                                    <img
                                        className="h-8 mr-4"
                                        src={location}
                                        alt=""
                                    />
                                    <p className="flex forTextHover updated-font-family">
                                        SOS J N Kaul Institute of Education
                                        Bhimtal SOS Complex, Tallital Bhimtal
                                        Nainital, Uttrakhand, India, 263136
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
                    <div className="w-full">
                        <div class="mb-[50px] mt-2">
                            <h1
                                style={{ color: "#2D4A9D" }}
                                className="flex mt-6 mb-6 ml-8 text-4xl font-bold leadership-heading updated-font-family"
                            >
                                Students
                            </h1>
                            <div className="flex justify-between items-center mb-2 ml-8 mr-8 w-100">
                                <p className="flex  text-xl updated-font-family">
                                    Students List 2023
                                </p>
                            </div>
                            <div class="overflow-x-auto md:mx-2 lg:mx-8">
                                <table class="w-full table-auto">
                                    <thead>
                                        <tr className="heading-height">
                                            <th
                                                style={{
                                                    width: "100px",
                                                }}
                                                className="table-data text-center"
                                            >
                                                S. No.
                                            </th>
                                            <th
                                                style={{
                                                    width: "100px",
                                                }}
                                                className="table-data"
                                            >
                                                Admn. No.
                                            </th>
                                            <th
                                                style={{
                                                    width: "150px",
                                                }}
                                                className="table-data"
                                            >
                                                Student Name
                                            </th>
                                            <th
                                                style={{
                                                    width: "150px",
                                                }}
                                                className="table-data"
                                            >
                                                Class Name
                                            </th>
                                            <th
                                                style={{
                                                    width: "100px",
                                                }}
                                                className="table-data"
                                            >
                                                Gender
                                            </th>
                                            <th className="table-data">
                                                Father Name
                                            </th>
                                            <th className="table-data">
                                                Address
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems?.map((student) => (
                                            <tr key={student.id}>
                                                <td className="table-data text-center">
                                                    {student?.id}
                                                </td>
                                                <td className="table-data text-center w-auto">
                                                    {student?.admnNo}
                                                </td>
                                                <td className="table-data text-center">
                                                    {student?.studentName}
                                                </td>
                                                <td className="table-data text-center">
                                                    {student?.className}
                                                </td>
                                                <td className="table-data text-center">
                                                    {student?.gender}
                                                </td>
                                                <td className="table-data text-center">
                                                    {student?.fatherName}
                                                </td>
                                                <td className="table-data text-center">
                                                    {student?.address}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex sm:flex-1 items-center justify-between md:mx-2 lg:mx-8 mt-4">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing{" "}
                                        <span className="font-medium">
                                            {currentItems[0]?.id}
                                        </span>{" "}
                                        to{" "}
                                        <span className="font-medium">
                                            {
                                                currentItems[
                                                    currentItems?.length - 1
                                                ]?.id
                                            }
                                        </span>{" "}
                                        of{" "}
                                        <span className="font-medium">
                                            {StudentData?.length}
                                        </span>{" "}
                                        results
                                    </p>
                                </div>
                                <div className="pagination">
                                    <button
                                        onClick={handleDecrease}
                                        className="join-item btn"
                                    >
                                        «
                                    </button>
                                    <button className="join-item btn">
                                        Page {currentPage}
                                    </button>
                                    <button
                                        onClick={handleIncrease}
                                        className="join-item btn"
                                    >
                                        »
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Students;
