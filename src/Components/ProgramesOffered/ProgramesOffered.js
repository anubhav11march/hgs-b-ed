import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer';
import aboutUs from './../assets/images/programsOfferedCover.jpg'
import location from './../assets/icons/location.png'
import email from './../assets/icons/email.png'
import phone from './../assets/icons/footer.png'
import sosChildrenVillage from './../assets/images/sos_logo 3.png';

const ProgramesOffered = ({ setShowNavbar, setOverview, setLidership, setProgramsOffered, setAlumni, setAdmission, setFacultiStaff, setContactUs, setNaac }) => {
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

    return (
        <div>
            <img onClick={handleOverView} className='w-20 lg:w-48 md:24 home-button hover:shadow-2xl' src={sosChildrenVillage} alt="" />
            <img className='w-full' src={aboutUs} alt="" />
            <div className='flex flex-col justify-between md:flex-row'>
                <div className='flex justify-center mt-6 ml-6 md:grid lg:grid'>
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


                        <div className='leadership-info'>
                            <div className='flex justify-center'>
                                <img className='h-8 mr-4' src={location} alt="" />
                                <p className='flex forTexthover-table updated-font-family'>J N Kaul Institute of Education Bhimtal SOS Complex, Tallital Bhimtal Nainital, Uttrakhand, India, 263136</p>
                            </div>
                            <div className='flex items-center justify-center my-4 mr-6'>
                                <img className='mr-4' src={email} alt="" />
                                <p className='flex forTexthover-table updated-font-family'>Principal.bhimtalbed@sos<br />cvindia.org </p>
                            </div>
                            <div className='flex'>
                                <img className='mr-4' src={phone} alt="" />
                                <p className='flex forTexthover-table updated-font-family'>05942-247999</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="mb-[50px] ml-6 mr-6 mt-2">
                        <h1 className='mt-4 mb-8 text-4xl leadership-heading updated-font-family'>Programs Offered</h1>
                        <div className='mb-6'>
                            <p className='block mx-auto mb-2 updated-font-family teacher-paragraph'>The Bachelor of Education (B.Ed.) programe is a two year (four semesters) professional course that prepares teachers for upper primary or middle level (classes VI- VIII), secondary level (classes IX-X) and senior secondary level (classes XI-XII).
                                The B.Ed. programme runs for a duration of two academic years (four semesters). Students are permitted to complete the programme  in two years from the date of admission to the programme..There shall be at least two hundred working days each year, exclusive of the period of examination and admission.
                                The basic unit size for the programme shall be of fifty students. Increase in intake for an institution shall be subject to the approval of NCTE, state government and Kumaun University.
                                Candidate with at least fifty percent (50%) marks either in the Bachelor’s Degree and/or in the Master’s Degree in relevant subject are eligible for the B.Ed Programme. Candidates belonging to SC/ST category must have obtained at least 45% marks in above or other equivalent examination. Reservation and relaxation, if any, for SC/ST/OBC and other applicable categories shall be given as per the rules of state government.
                                Admission shall be made on merit of marks obtained in the B.Ed. Common Entrance Test (CET), to be conducted by Kumaun University. The institution shall charge only such fee as prescribed by Kumaun University and/ or approved by state government.
                            </p>
                        </div>

                        <div className='w-full gap-5'>


                            <div class="overflow-x-auto">
                                <p className='flex justify-center mb-2 text-xl font-bold updated-font-family'> Semester-I</p>
                                <table class=" w-full">
                                    <thead>
                                        <tr className='hover-table hover-table-top-row'>
                                            <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Course Code</th>

                                            <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Name of the course</th>

                                            <th className='text-xl normal-case table-data teacher-paragraph updated-font-family '>Internal Marks</th>

                                            <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>External Marks</th>

                                            <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Exam. Hours</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='hover-table'>
                                            <th className='table-data teacher-paragraph updated-font-family'>B-101</th>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center '>Philosophical and sociological perspectives of Education</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family '><span className='flex justify-center '>30</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family '><span className='flex justify-center'>30</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family '><span className='flex justify-center'>3</span></td>
                                        </tr>


                                        <tr className='hover-table'>
                                            <th className='table-data teacher-paragraph updated-font-family'>B-102</th>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>Psychology of Development & Learning</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>30</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>70</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>3</span></td>
                                        </tr>
                                        <tr className='hover-table'>
                                            <th className='table-data teacher-paragraph updated-font-family'>B-103</th>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>Principles and Methods of Teaching</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>30</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>70</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>3</span></td>
                                        </tr>


                                        <tr className='hover-table'>
                                            <th className='table-data teacher-paragraph updated-font-family'>EPC-104</th>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>Language Across the Curriculum</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>25</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>--</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>--</span></td>
                                        </tr>
                                        <tr className='hover-table'>
                                            <th className='table-data teacher-paragraph updated-font-family'>EPC-105</th>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>Psychological Tests</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>25</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>--</span></td>

                                            <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>--</span></td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>




                            <div className='mt-6 mb-6'>
                                <p className='flex justify-center mb-2 text-xl font-bold updated-font-family'> Semester-II</p>

                                <div class="overflow-x-auto">
                                    <table class=" w-full">
                                        <thead>
                                            <tr className='hover-table hover-table-top-row'>
                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Course Code</th>

                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Name of the course</th>

                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Internal Marks</th>

                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>External Marks</th>

                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Exam. Hours</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'>B-201</th>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>Pedagogy of two School subjects</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>30+30=60</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>70+70=140</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'><p></p>
                                                        <p>30</p></span>

                                                </td>
                                            </tr>


                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'>B-202</th>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>School Administration and Management</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'><span className='flex justify-center'>30</span></span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>70</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>3</span></td>
                                            </tr>
                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'>B-203</th>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>Educational Technology and ICT</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>30</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>70</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>3</span></td>
                                            </tr>


                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'>EPC-204</th>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>Technology Enabled Learning</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>25</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>--</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>--</span></td>
                                            </tr>
                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'>EPC-205</th>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>Simulated, Micro and Supervised Teaching</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>25</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>--</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>--</span></td>
                                            </tr>

                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'></th>

                                                <th className='table-data teacher-paragraph updated-font-family'>TOTAL</th>

                                                <th className='table-data teacher-paragraph updated-font-family'>170</th>

                                                <th className='table-data teacher-paragraph updated-font-family'>280</th>

                                                <th className='table-data teacher-paragraph updated-font-family'>450</th>


                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>


                            <div className='mb-6 '>
                                <p className='flex justify-center mb-2 text-xl font-bold updated-font-family'>Semester-III</p>

                                <div class="overflow-x-auto">
                                    <table class=" w-full">
                                        <thead>
                                            <tr className='hover-table hover-table-top-row'>
                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Course Code</th>

                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Name of the course</th>

                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Internal Marks</th>

                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>External Marks</th>

                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Exam. Hours</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'>

                                                    <p>B-301-A</p>
                                                    <p>B-301-B</p>
                                                </th>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'><div><p>Pre-internship and School </p>
                                                        <p>Observation</p>
                                                        <p>Internship</p></div></span>
                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'><div><p>25</p>
                                                        <p>75</p></div></span>

                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'><div><p>--</p>
                                                        <p>250</p></div></span>

                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'><div><p>--</p>
                                                        <p>--</p></div></span>

                                                </td>
                                            </tr>


                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'>B-302-A</th>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>Gender, School and Society</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>15</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>35</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>2</span></td>
                                            </tr>


                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'>
                                                    <p>B-302-B.1</p>
                                                    <p>B-302-B.2
                                                    </p>
                                                    <p>B-302-B.3
                                                    </p>
                                                    <p>B-302-B.4
                                                    </p>
                                                </th>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'><div><p>(Any one out of following three)
                                                    </p>
                                                        <p>Teacher and Environmental Education
                                                        </p>
                                                        <p>Guidance and counseling
                                                        </p>
                                                        <p>Value and Peace Education
                                                        </p>
                                                        <p>Basic Statistics
                                                        </p></div></span>

                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>15</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>35</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>2</span></td>
                                            </tr>


                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'>EPC-303</th>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>Community Work</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>25</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>--</span></td>

                                                <td className='table-data teacher-paragraph updated-font-family'><span className='flex justify-center'>--</span></td>
                                            </tr>


                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'></th>

                                                <th className='table-data teacher-paragraph updated-font-family'>TOTAL</th>

                                                <th className='table-data teacher-paragraph updated-font-family'>155</th>

                                                <th className='table-data teacher-paragraph updated-font-family'>320</th>

                                                <th className='table-data teacher-paragraph updated-font-family'>475</th>

                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>


                            <div className='mb-6 '>
                                <p className='flex justify-center mb-2 text-xl font-bold updated-font-family'>  Semester-IV</p>

                                <div class="overflow-x-auto">
                                    <table class=" w-full">
                                        <thead>
                                            <tr className='hover-table hover-table-top-row'>
                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Course Code</th>

                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Name of the course</th>

                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Internal Marks</th>

                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>External Marks</th>

                                                <th className='text-xl normal-case table-data teacher-paragraph updated-font-family'>Exam. Hours</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'>

                                                    B-401
                                                </th>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>Education in Contemporary Indian Society</span>

                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>30</span>

                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>70</span>
                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>3</span>

                                                </td>
                                            </tr>


                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'>
                                                    B-402
                                                </th>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>School Curriculum Development</span>

                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>30</span>

                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>70</span>
                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>3</span>

                                                </td>
                                            </tr>


                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'>
                                                    B-403
                                                </th>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>Measurement and Evaluation</span>

                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>30</span>

                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>70</span>
                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>3</span>

                                                </td>
                                            </tr>


                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'>
                                                    B-404
                                                </th>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>Inclusion in School Education</span>

                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>30</span>

                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>70</span>
                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>3</span>

                                                </td>
                                            </tr>


                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'>
                                                    EPC-405
                                                </th>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>Joyful Learning : Program Anandam</span>

                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>25</span>

                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>--</span>
                                                </td>

                                                <td className='table-data teacher-paragraph updated-font-family'>
                                                    <span className='flex justify-center'>--</span>

                                                </td>
                                            </tr>

                                            <tr className='hover-table'>
                                                <th className='table-data teacher-paragraph updated-font-family'></th>

                                                <th className='table-data teacher-paragraph updated-font-family'>TOTAL</th>

                                                <th className='table-data teacher-paragraph updated-font-family'>145</th>

                                                <th className='table-data teacher-paragraph updated-font-family'>280</th>

                                                <th className='table-data teacher-paragraph updated-font-family'>425</th>

                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramesOffered;