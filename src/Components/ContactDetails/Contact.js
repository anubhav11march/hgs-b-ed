import React from 'react';
import user from './../assets/icons/user.svg';
import phone from './../assets/icons/phone.svg';
import email from './../assets/icons/email.svg';
import location from './../assets/icons/location.svg';
import grade from './../assets/icons/grade.svg';
import message from './../assets/icons/message.svg';
import sosChildrenVillage from './../assets/images/sos_logo 3.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer';

const Contact = () => {
    const navigate = useNavigate();
    const handleOverView = () => {
        navigate('/')
    }
    return (
        <div>
            <img  onClick={handleOverView} className='w-20 lg:w-48 md:24 home-button hover:shadow-2xl' src={sosChildrenVillage} alt="" />
            <div className='mb-12'>
            <h1 className='flex justify-center mt-20 mb-6 text-5xl font-bold love-to-hear updated-font-family'>We'd love to hear from you.</h1>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:ml-28'>
                        <div>
                            <div class="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
                                <div class="card-body">

                                    <div class="form-control">
                                        <div className='flex items-center justify-center mb-6 contact-input'>
                                            <img className='mx-4 for-opacity' src={user} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Full Name' ></input>
                                        </div>
                                    </div>

                                    <div class="form-control">
                                    <div className='flex items-center justify-center mb-6 contact-input'>
                                            <img className='mx-4 for-opacity' src={email} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Email' ></input>
                                    </div> 
                                    </div>

                                    <div class="form-control">
                                    <div className='flex items-center justify-center mb-6 contact-input'>
                                            <img className='mx-4 for-opacity' src={phone} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Phone Number' ></input>
                                        </div>
                                    </div>

                                    <div class="form-control">
                                    <div className='flex items-center justify-center mb-6 contact-input'>
                                            <img className='mx-4 for-opacity' src={location} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='City' ></input>
                                    </div>
                                    </div>

                                    <div class="form-control">
                                    <div className='flex items-center justify-center mb-6 contact-input'>
                                            <img className='mx-4 for-opacity' src={grade} alt="" />
                                            <input className='pl-2 input-field' type="text" placeholder='Course' ></input>
                                        </div>
                                    </div>
                                    
                                    <div class="form-control">
                                        <div className='flex items-center justify-center mb-6 contact-input'>
                                            <img className='mx-4 for-opacity' src={message} alt="" />
                                            <input style={{width:'200px'}} className='pl-2 input-field' type="text" placeholder='Message' ></input>
                                        </div>
                                    </div>

                                    <div class="form-control">
                                        <button class="for-background btn updated-font-family">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:mr-28'>
                        <div className='mb-12'>
                            <h1 className='mb-2 text-2xl font-bold updated-font-family'>Address</h1>
                            <p className='text-xl updated-font-family'>J N Kaul Institute of Education Bhimtal  <br></br> SOS Complex, Tallital Bhimtal <br></br>
                                Nainital, Uttrakhand, India, 263136
                            </p>
                        </div>
                        <div className='mb-12'>
                            <h1 className='mb-2 text-2xl font-bold updated-font-family'>Mobile</h1>
                            <p className='text-xl updated-font-family'>05942-247999</p>
                        </div>
                        <div className='mb-12'>
                            <h1 className='mb-2 text-2xl font-bold updated-font-family'>Email</h1>
                            <p className='text-xl updated-font-family'>Principal.bhimtalbed@soscvindia.org </p>
                        </div>
                        <div className='mb-12'>
                            <h1 className='mb-2 text-2xl font-bold updated-font-family'>Socials</h1>
                            <div className='flex'>
                            {/* <i class="fa-brands mr-4 text-4xl fa-youtube"></i> */}
                            <a target='_blank' href="https://www.facebook.com/SOSJNKIE"><i class="fa-brands mr-4 text-4xl fa-facebook"></i></a>
                            {/* <i class="fa-brands mr-4 text-4xl fa-twitter"></i> */}
                            {/* <i class="fa-brands text-4xl fa-instagram"></i> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;