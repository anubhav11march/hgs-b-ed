import React from 'react';
import sosChildrenVillage from './../assets/images/sos_logo 3.png';
import studyImage from './../assets/images/Landing photo.jpg';
import contactImage from './../assets/images/3969587 2.png'
import contactLine from './../assets/images/contact-line.png'
import user from './../assets/icons/user.svg';
import phone from './../assets/icons/phone.svg';
import email from './../assets/icons/email.svg';
import location from './../assets/icons/location.svg';
import grade from './../assets/icons/grade.svg';
import background from '../assets/images/background.png';
import message from './../assets/icons/message.svg';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import InfrastructureCard from './InfrastructureCard';
import PhotoGallery from './PhotoGallery';
import AboutInstitution from './AboutInstitution';
import { HashLink as Link } from 'react-router-hash-link';


const InstuteOfEducation = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    }
    return (
        <div>
            <div>
                <div className='overflow-hidden'>
                    <img className='w-full hidden lg:block' src={background} alt="" />
                    <div className='mb-5 lg:mb-0'>
                        <img onClick={handleHome} className='w-20 lg:w-48 md:24 home-button hover:shadow-2xl' src={sosChildrenVillage} alt="" />
                    </div>
                    <div className='abs-class-large'>
                        <div class="hero kept-top">
                            <div class="hero-content flex-col lg:flex-row-reverse md:flex-row-reverse">
                                <div className='md:mb-16 lg:mb-20 mr-md-6 mr-lg-8'>
                                    <img className='hover-picture study-image-picture' src={studyImage} alt="" />
                                </div>

                                <div className='ml-0 lg:ml-[60px]'>
                                    <div className='grid mb-24'>
                                        <div className=''>
                                            <h1 style={{ color: '#2D4A9D' }} className='instute font updated-font-family'>J.N. KAUL INSTITUTE OF EDUCATION</h1>
                                            <p style={{ color: '#2D4A9D' }} className='font bed-college updated-font-family'>B.ED. College, Bhimtal</p>
                                        </div>
                                        <div className='mr-0 lg:mr-10'>
                                            <em style={{ fontFamily: 'Cormorant' }} className='education-is-power'>The main hope of a nation lies in the proper education of its youth.</em>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <div className='flex ml-[130px] mr-[10px] justify-center'>
                            <div className='flex items-center justify-around picture-school'>
                                <div className='grid'>
                                    <div className=''>
                                        <h1 style={{ color: '#2D4A9D' }} className='instute font updated-font-family'>J.N. KAUL INSTITUTE OF EDUCATION</h1>
                                        <p style={{ color: '#2D4A9D' }} className='font bed-college updated-font-family'>B.ED. College, Bhimtal</p>
                                    </div>
                                    <div className='mr-10'>
                                        <em style={{ fontFamily: 'Cormorant' }} className='education-is-power'>The main hope of a nation lies in the proper education of its youth.</em>
                                    </div>
                                </div>

                                <div className='mb-12'>
                                    <img style={{ width: '900px', height: '550px' }} src={studyImage} alt="" />
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <p className='pt-0 lg:pt-8 welcome moving-para'><span style={{ color: 'rgb(45, 74, 157)' }}> Upcoming: </span> BA. BSc. BEd. Integrated Courses</p>

                    <AboutInstitution></AboutInstitution>
                    <InfrastructureCard></InfrastructureCard>
                    <PhotoGallery></PhotoGallery>

                    {/* Photo gallery */}

                    {/* Contact with us */}
                    <div className='mt-10'>
                        <div className='flex justify-center'>
                            <div>
                                <h1 className='welcome updated-font-family'>Contact Us</h1>
                                <p className='w-[150px] welcome-line h-[4px]' alt="" />

                            </div>
                        </div>

                        <div className='hidden lg:block md:block'>
                            <div className='flex justify-between items-center ml-[80px] mr-[80px] mt-4 mb-8'>
                                <div>
                                    <h1 className='mb-8 drop-details updated-font-family'>Drop us your details for quick response.</h1>
                                    <div>
                                        <div className='flex'>
                                            <div className='mb-6'>
                                                <div className='flex items-center justify-center mb-8 contact-input'>
                                                    <img className='mx-4 for-opacity' src={user} alt="" />
                                                    <input className='pl-2 input-field' type="text" placeholder='Full Name' ></input>
                                                </div>
                                                <div className='flex items-center justify-center contact-input'>
                                                    <img className='mx-4 for-opacity' src={location} alt="" />
                                                    <input className='pl-2 input-field' type="text" placeholder='City' ></input>
                                                </div>
                                            </div>


                                            <div className='mb-8 ml-8 mr-8'>
                                                <div className='flex items-center justify-center mb-8 contact-input'>
                                                    <img className='mx-4 for-opacity' src={email} alt="" />
                                                    <input className='pl-2 input-field' type="text" placeholder='Email' ></input>
                                                </div>
                                                <div className='flex items-center justify-center contact-input'>
                                                    <img className='mx-4 for-opacity' src={grade} alt="" />
                                                    <input className='pl-2 input-field' type="text" placeholder='Course' ></input>
                                                </div>
                                            </div>


                                            <div className='mb-8'>
                                                <div className='flex items-center justify-center mb-8 contact-input'>
                                                    <img className='mx-4 for-opacity' src={phone} alt="" />
                                                    <input className='pl-2 input-field' type="text" placeholder='Phone Number' ></input>
                                                </div>

                                                <div className='flex items-center justify-center contact-input'>
                                                    <img className='mx-4 for-opacity' src={message} alt="" />
                                                    <input className='pl-2 input-field' type="text" placeholder='Message' ></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-control">
                                            <button class="for-background-home btn hover:shadow-2xl block mx-auto updated-font-family">Submit</button>
                                        </div>

                                    </div>
                                </div>

                                <div class="avatar">
                                    <div class="w-80 rounded">
                                        <img className='w-80' src={contactImage} alt="" />
                                    </div>
                                </div>

                                {/* <div>
                                    <img className='w-80' src={contactImage} alt="" />
                                </div> */}
                            </div>
                        </div>


                        {/* For Mobile device */}
                        <div class="hero block lg:hidden md:hidden">
                            <div class="hero-content flex-col lg:flex-row-reverse">
                                <div class="text-center lg:text-left">
                                    <img className='container-fluid' src={contactImage} alt="" />
                                </div>

                                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <div class="card-body">


                                        <div className='flex items-center justify-center contact-input'>
                                            <img className='mx-4 for-opacity' src={user} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Username' ></input>
                                        </div>

                                        <div className='flex items-center justify-center contact-input'>
                                            <img className='mx-4 for-opacity' src={location} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='City' ></input>
                                        </div>

                                        <div className='flex items-center justify-center contact-input'>
                                            <img className='mx-4 for-opacity' src={email} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Email' ></input>
                                        </div>

                                        <div className='flex items-center justify-center contact-input'>
                                            <img className='mx-4 for-opacity' src={grade} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Grade' ></input>
                                        </div>

                                        <div className='flex items-center justify-center contact-input'>
                                            <img className='mx-4 for-opacity' src={phone} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Phone Number' ></input>
                                        </div>

                                        <div className='flex items-center justify-center contact-input'>
                                            <img className='mx-4 for-opacity' src={message} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Message' ></input>
                                        </div>


                                        <div class="form-control mt-6">
                                            <button class="for-background-home-mobile hover:shadow-2xl updated-font-family">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstuteOfEducation;