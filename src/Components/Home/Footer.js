import React from 'react';
import phone from './../assets/icons/footer.png'; 
import email from './../assets/icons/email.png'; 
import location from './../assets/icons/location.png'; 
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = ({ setShowNavbar, setOverview, setLidership, setProgramsOffered, setAlumni, setAdmission, setFacultiStaff, setContactUs }) => {
    const navigate = useNavigate();
    const handleOverView = () => {
        setOverview[1]('setOverview')
        setLidership[1]('')
        setProgramsOffered[1]('')
        setAlumni[1]('')
        setAdmission[1]('')
        setFacultiStaff[1]('')
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
        setContactUs[1]('setContactUs[1]')
        navigate('/contact')
    }
    return (
        <div>
            <footer class="footer p-10 Footer grid md:flex lg:flex justify-around text-base-content">
                <div className=''>
                    <span class="footer-heading block mb-[20px]">Quick Links</span>
                    <Link onClick={handleOverView} class="link link-hover contact-info mb-[20px] lg:ml-20 md:ml-20" smooth to='#home'>Overview</Link>
                    <a onClick={handleLeadership} class="link link-hover contact-info mb-[20px] lg:ml-20 md:ml-20">Leadership</a>
                    <a onClick={handleProgramsOffered} class="link link-hover contact-info mb-[20px] lg:ml-20 md:ml-20">Programs Offered</a>
                    <a onClick={handleContact} class="link link-hover flex justify-center items-center lg:ml-20 md:ml-20">
                        <p className='contact-info'>Contact Us</p>
                    </a>
                </div>

                <div className=''>
                <span style={{color: 'darkblue'}} class="footer-heading mb-[20px]">Quick Link</span>
                    <a onClick={handleAlumni} class="link link-hover flex justify-center items-center mb-[20px] lg:ml-20 md:ml-20">
                        <p className='contact-info'>Alumni</p>
                    </a>
                    <a onClick={handleAdmission} class="link link-hover flex justify-center items-center mb-[20px] lg:ml-20 md:ml-20">
                        <p className='contact-info'>Admission</p>
                    </a>
                    <a onClick={handleFaculty} class="link link-hover flex justify-center items-center lg:ml-20 md:ml-20">
                        <p className='contact-info'>Faculti & Staff</p>
                    </a>
                    
                </div>

                {/* ml-2 md:ml-10 lg:ml-2 */}
                <div className=''>
                <span class="footer-heading mb-[20px]">Contact Us</span>
                    <a class="link link-hover flex justify-center items-center mb-[20px]">
                        <img className='mr-[24px]' src={phone} alt="" />
                        <p className='contact-info'>+91 -  9876543210 , 1234567898</p>
                    </a>
                    <a class="link link-hover flex justify-center items-center mb-[20px]">
                        <img className='mr-[24px]' src={email} alt="" />
                        <p className='contact-info'>sosjk.kaul.@gmail.com</p>
                    </a>
                    <a class="link link-hover flex justify-center items-center">
                        <img className='mr-[24px]' src={location} alt="" />
                        <p className='contact-info'>Bhimtal, Nanital , India</p>
                    </a>
                </div>

                
            </footer>
        </div>
    );
};

export default Footer; 