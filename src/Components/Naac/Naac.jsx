import { useNavigate } from "react-router-dom";

import "./Naac.css"
// import aboutUs from './../assets/images/leadership.JPG'
import aboutUs from './../assets/images/Landing photo.jpg';
import sosChildrenVillage from './../assets/images/sos_logo 3.png';
import location from './../assets/icons/location.png'
import email from './../assets/icons/email.png'
import phone from './../assets/icons/footer.png'
import { ResultsAcademicsData } from "../../constant";
import SideBar from "../SideBar/SideBar";

import { BsList } from "react-icons/bs";
import { useEffect, useState } from "react";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

const Naac = ({ setShowNavbar, setOverview, setLidership, setProgramsOffered, setAlumni, setAdmission, setFacultiStaff, setContactUs, setNaac }) => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isShow, steIsShow] = useState(false);
    const handleClick = () => {
        steIsShow(!isShow);
        console.log(isShow);
    };

    const handleOverView = () => {
        setOverview[1]('setOverview')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setNaac[1]('')
        setContactUs[1]('')
        setShowNavbar[1](false);
        navigate('/')
    }
    const handleLeadership = () => {
        setShowNavbar[1](true)
        setOverview[1]('')
        setLidership[1]('setLidership')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setContactUs[1]('')
        setNaac[1]('')
        navigate('/leadership')
    }
    const handleProgramsOffered = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('setProgramsOffered')
        setAlumni[1]('')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setShowNavbar[1](true);
        setContactUs[1]('')
        setNaac[1]('')
        navigate('/programesOffered')
    }
    const handleAlumni = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('setAlumni')
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setShowNavbar[1](true);
        setContactUs[1]('')
        setNaac[1]('')
        navigate('/alumni')
    }
    const handleAdmission = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setAdmission[1]('setAdmission[1]')
        setShowNavbar[1](true);
        setFacultiStaff[1]('')
        setNaac[1]('')
        setContactUs[1]('')
        navigate('/admission')
    }
    const handleFaculty = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setShowNavbar[1](true);
        setAdmission[1]('')
        setFacultiStaff[1]('setFacultiStaff[1]')
        setContactUs[1]('')
        setNaac[1]('')
        navigate('/faculty')
    }
    const handleContact = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setShowNavbar[1](false);
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setNaac[1]('')
        setContactUs[1]('setContactUs[1]')
        navigate('/contact')
    }
    const handleNaac = () => {
        setOverview[1]('')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setShowNavbar[1](true);
        setAdmission[1]('')
        setFacultiStaff[1]('')
        setNaac[1]('setNaac[1]')
        setContactUs[1]('')
        navigate('/naac')
    }
    const handleScroll = () => {
        if (window.scrollY > 0 && !isScrolled) {
            setIsScrolled(true);
        }
        if (window.scrollY === 0) {
            setIsScrolled(false);
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (
        <div>
            <div className={`${isScrolled && "navbarMobile"}`}>
                <img onClick={handleOverView} className='w-20 lg:w-48 md:24 home-button hover:shadow-2xl' src={sosChildrenVillage} alt="" />
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
            <img className='w-full' src={aboutUs} alt="" />
            <div className='flex flex-col justify-between md:flex-row'>
                <div className='flex justify-center mt-6 mb-6 ml-6 md:grid lg:grid'>
                    <div>
                        <div className='leadership'>
                            <p onClick={handleOverView} className='flex items-center h-12 my-2 forTextHover updated-font-family'>Overview</p>
                            <p onClick={handleLeadership} className='flex items-center h-12 my-2 forTextHover updated-font-family'>Leadership</p>
                            <p onClick={handleProgramsOffered} className='flex items-center h-12 my-2 forTextHover updated-font-family'>Programs Offered</p>
                            <p onClick={handleNaac} className='flex items-center h-12 my-2 forTextHover updated-font-family'>NAAC</p>
                            <p onClick={handleAdmission} className='flex items-center h-12 my-2 forTextHover updated-font-family'>Admission</p>
                            <p onClick={handleFaculty} className='flex items-center h-12 my-2 forTextHover updated-font-family'>Faculty & Staff</p>
                            <p onClick={handleAlumni} className='flex items-center h-12 my-2 forTextHover updated-font-family'>Alumni</p>
                            <p onClick={handleContact} className='flex items-center h-12 my-2 forTextHover updated-font-family'>Contact Us</p>
                        </div>
                        <div>
                            <SideBar />
                        </div>
                        <NavbarMenu isShow={isShow} handleClick={handleClick} />

                        <div className='leadership-info'>
                            <div className='flex justify-center'>
                                <img className='h-8 mr-4' src={location} alt="" />
                                <p className='flex forTextHover updated-font-family'>J N Kaul Institute of Education Bhimtal SOS Complex, Tallital Bhimtal Nainital, Uttrakhand, India, 263136</p>
                            </div>
                            <div className='flex items-center justify-center my-4 mr-6'>
                                <img className='mr-4' src={email} alt="" />
                                <p className='flex forTextHover updated-font-family'>Principal.bhimtalbed@sos<br />cvindia.org </p>
                            </div>
                            <div className='flex'>
                                <img className='mr-4' src={phone} alt="" />
                                <p className='flex forTextHover updated-font-family'>05942-247999</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div class="mb-[50px] mt-2">
                        <h1 style={{ color: '#2D4A9D' }} className='flex mt-6 mb-6 ml-8 text-4xl font-bold leadership-heading updated-font-family'>NAAC</h1>
                        <p className='flex mb-2 ml-8 font-bold  text-xl updated-font-family'>IMPORTANT DOCUMENTS</p>
                        <table class="table-fixed ml-8">
                            <thead>
                                <tr className='hover-table hover-table-top-row'>
                                    <th className='text-lg normal-case table-data updated-font-family' style={{ width: "100px" }}>S. No</th>
                                    <th className='text-lg normal-case table-data updated-font-family' style={{
                                        width: '350px'
                                    }}>DOCUMENTS/INFORMATION</th>
                                    <th className='text-lg normal-case table-data updated-font-family' style={{ width: "370px" }}>LINKS OF UPLOADED DOCUMENTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ResultsAcademicsData.map(doc =>
                                    <tr className='hover-table'>
                                        <th className='table-data updated-font-family tableFontStyle  teacher-paragraph'>{doc.id}</th>
                                        <th className='table-data updated-font-family tableFontStyle teacher-paragraph'>{doc.title}</th>
                                        <td className='table-data updated-font-family tableFontStyle  teacher-paragraph'><a target="_blank" href={doc?.document} rel="noreferrer" className='flex justify-center text-custom-blue'>View</a> </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Naac