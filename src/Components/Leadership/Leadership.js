import React from 'react';
import aboutUs from './../assets/images/leadership.JPG'
import teacher1 from './../assets/images/teacher-head (1).png'
import teacher2 from './../assets/images/teacher-head (2).png'
import teacher3 from './../assets/images/teacher-head (3).png'
import location from './../assets/icons/location.png'
import email from './../assets/icons/email.png'
import phone from './../assets/icons/footer.png'
import './Leadership.css';
import Footer from '../Home/Footer';
import sosChildrenVillage from './../assets/images/sos_logo 3.png';
import { useNavigate } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

const Leadership = ({ setShowNavbar, setOverview, setLidership, setProgramsOffered, setAlumni, setAdmission, setFacultiStaff, setContactUs, setNaac }) => {
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
                <div className='flex lg:justify-center mt-6 ml-6 md:grid lg:grid'>
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



                {/* Main */}
                <div>
                    <div class="mb-[50px] ml-6 mr-6 mt-2">
                        <h1 className='mt-4 mb-8 text-4xl leadership-heading updated-font-family'>Leadership</h1>
                        <div class="flex justify-center flexProp flex-col lg:flex-row">
                            <img src={teacher1} class="teachers-picture flex lg:block md:block mx-auto picture-shadow" alt='' />
                            <div className=' lg:ml-6 md:ml-6'>
                                <h1 className='mb-2 text-2xl font-bold-heading updated-font-family'>President</h1>
                                <p className='mb-2 text-xl updated-font-family'>Rakesh Jinsi</p>
                                <p className='mb-2 text-xl updated-font-family'>SOS Children’s Villages of India</p>
                                <p className='mt-2 teacher-paragraph updated-font-family'>
                                    Rakesh Jinsi, an engineer by degree, has 41 years of experience in leadership roles at several institutions, including SOS Children's Villages. Presently running Khushboo, a daycare centre for children with severe mental and multiple disabilities, he has always been active in national level bodies such as the National Human Rights Commission and Voluntary Action Network of India (VANI), the Apex body of the NGO sector.
                                </p>
                            </div>
                        </div>
                        <p className='mt-2 updated-font-family teacher-paragraph'>
                            "I firmly believe that each and every child deserves an education that is advanced, detail-oriented yet nurturing and holistic. As President of SOS Children’s Villages of India, I wish to provide the best possible learning experience to the future leaders of our country, so that all children are able to reach their maximum potential and achieve their dreams. Students end up spending most of their childhood within classrooms, so it is essential that within those walls they are imparted proper theoretical knowledge, practical aptitude, communal values, essential life skills, and an understanding of how the world works and their place in it. , "Adequate grooming and learning of children at a young age leads to them being strong, confident, hard-working and intelligent individuals, attributes that I deem necessary for the new era of technology and scientific progress we are heading towards."
                        </p>
                    </div>

                    {/* 2nd one */}
                    <div class="mb-[50px] ml-6 mr-6 mt-6 hidden md:block lg:block">
                        <div class="flex justify-center flexProp flex-col lg:flex-row">
                            <div className=''>
                                <h1 className='mb-2 text-2xl font-bold-heading updated-font-family'>Secretary General</h1>
                                <p className='mb-2 text-xl updated-font-family'>Sumanta Kar</p>
                                <p className='mb-2 text-xl updated-font-family'>SOS Children’s Villages of India</p>
                                <p className='mt-2 updated-font-family teacher-paragraph'>
                                    Education at SOS Hermann Gmeiner Schools has always meant the Holistic Development of a student – we believe that each child is entitled to the best possible skill set for their future, therefore, each child entrusted with us will receive an education that is in its finest form.
                                </p>
                            </div>
                            <img src={teacher2} class="teachers-picture  picture-shadow mr-6" alt='' />
                        </div>
                        <p className='mt-2 updated-font-family teacher-paragraph'>
                            Education is preparation for life, it should be an enjoyable, interactive and ongoing process to make the students confident young adults, sensitive to global issues, committed citizens who are aware of the happenings of the world and sensible individuals with a positive attitude.
                            Students should have a strong character and a good understanding of their humane and emotional sides. All our Hermann Gmeiner Schools have been actively engaged in relating to, understanding and working with communities around our schools.
                            Safeguarding of children remains a top priority and they are nurtured through a theme-based curriculum and actively engage in experiential learning. Our teachers and principals play a pivotal role in the development of each child. Our alumni are our brand ambassadors, who leave a lasting footprint in whatever profession they choose to pursue. Each student who joins us becomes a future world leader, ready to bring progressive change and make our nation proud.
                        </p>
                    </div>




                    <div class="mb-[50px] ml-6 mr-6 mt-6 block md:hidden lg:hidden">
                        <div class="flex justify-center lg:block md:block mx-auto flexProp flex-col lg:flex-row">
                            <img src={teacher2} class="teachers-picture  picture-shadow mr-6" alt='' />
                            <div className=''>
                                <h1 className='mb-2 text-2xl font-bold-heading updated-font-family'>Secretary General</h1>
                                <p className='mb-2 text-xl updated-font-family'>Mr.Sumanta Kar</p>
                                <p className='mb-2 text-xl updated-font-family'>SOS Children’s Villages of India</p>
                                <p className=' updated-font-family teacher-paragraph'>
                                    Mr Sumanta Kar is the Secretary General of SOS Children’s Villages of India (SOSCVI), one of India’s biggest childcare NGOs and the largest self-implementing agency providing an end-to-end Group Foster Care for children without parental care.

                                    Mr Kar has over 30 years of experience in the field of alternative care. He joined SOSCVI in 1989 as a youth co-worker. Mr Kar has conceptualised and implemented several development projects at SOSCVI. He led SOSCVI’s tsunami operation in the southern states of India (2004-2007) - it was the largest ever-emergency programme undertaken by the NGO so far.

                                </p>
                            </div>

                        </div>
                        <p className='mt-2 updated-font-family teacher-paragraph'>
                            Education is preparation for life, it should be an enjoyable, interactive and ongoing process to make the students confident young adults, sensitive to global issues, committed citizens who are aware of the happenings of the world and sensible individuals with a positive attitude.
                            Students should have a strong character and a good understanding of their humane and emotional sides. All our Hermann Gmeiner Schools have been actively engaged in relating to, understanding and working with communities around our schools.
                            Safeguarding of children remains a top priority and they are nurtured through a theme-based curriculum and actively engage in experiential learning. Our teachers and principals play a pivotal role in the development of each child. Our alumni are our brand ambassadors, who leave a lasting footprint in whatever profession they choose to pursue. Each student who joins us becomes a future world leader, ready to bring progressive change and make our nation proud.
                        </p>
                    </div>




                    {/* 3rd */}
                    <div class="mb-[50px] ml-6 mr-6 mt-6">
                        <div class="flex justify-center flexProp flex-col lg:flex-row">
                            <img src={teacher3} class="teachers-picture flex lg:block md:block mx-auto  picture-shadow" alt='' />
                            <div className=' lg:ml-6 md:ml-6'>
                                <h1 className='mb-2 text-2xl font-bold-heading updated-font-family'>Head Education & Child Development</h1>
                                <p className='mb-2 text-xl updated-font-family'>Debaroti Bose</p>
                                <p className='mb-2 text-xl updated-font-family'>SOS Children’s Villages of India</p>
                                <p className='mt-2 updated-font-family teacher-paragraph'>
                                    I believe that school should be the experience of a lifetime. Our school experience sets the stage for success later in life and provides a lifetime of positive memories for our students. We are proud of our continuous goal of providing an excellent education for our students.We have a dynamic, hardworking faculty who are involved in education to benefit the students.The entire gamut of school education is transforming the teaching-learning process.
                                </p>
                            </div>
                        </div>
                        <p className='mt-2 updated-font-family teacher-paragraph'>
                            In the modern concept of schooling, teaching has become redundant, paving the way for the facilitation of learning through knowledge sharing. The wave of digital learning and cloud computing is reaching new heights.
                            In all this whirlwind of new-age technology, it is important to charge ahead but with one’s head firmly on one’s shoulders. HGS strives to inculcate moral values, manners, responsibilities among students so that they may build a world free of all the evils.
                            Students here are encouraged to dream, groomed to give wings to their dreams, to take off and explore the unexplored. The plethora of interesting & exciting opportunities available to youngsters today often leave them with an array of things to do.
                            It is important therefore to help them build their focus on the subject that draws them most and gives shape to their vision. A student is made to blossom intellectually, morally, and spiritually. As Swami Vivekananda said, “Take up one idea. Make that one idea your life – think of it, dream of it, and live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.”

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leadership;