import React, { useState } from 'react';
import rectangle405 from './../assets/images/Rectangle 405.png';
import rectangle411 from './../assets/images/classroom.jpg'
import ict from './../assets/images/ICT1.JPG'
import PSYCHOLOGY from './../assets/images/psychology.jpg';
import scienceLab from './../assets/images/institute-image/SCIENCE LAB.JPG'
import libraryCum from './../assets/images/institute-image/library.JPG'
import health from './../assets/images/institute-image/GYM.JPG'
import art from './../assets/images/institute-image/art2.JPG'
import seminer from './../assets/images/institute-image/seminer1.JPG'
import playGround from './../assets/images/institute-imageplay1.JPG'
import bildersRoom from './../assets/images/institute-image/bilders-room.JPG'
import music from './../assets/images/institute-image/MUSIC ROOM (2).JPG'

const InfrastructureCard = () => {
    const [musicCard, setMusic] = useState(false);
    const [building, setBuilding] = useState(false);
    const [playgroundCard, setPlayground] = useState(false);
    const [seminerCard, setSeminer] = useState(false);
    const [artCraft, setArtCraft] = useState(false);
    const [healthCard, sethealth] = useState(false);
    const [science, setScience] = useState(false);
    const [psychology, setPsychology] = useState(false);
    const [ictCard, setICT] = useState(false);
    const [libraryCumCard, setLibraryCum] = useState(false);
    const [classroom, setClassroom] = useState(false);
    const handleMusicRoom = () => {
        if (musicCard === false) {
            setMusic(true);
        }
        else {
            setMusic(false);
        }
    }
    const handleBuildingRoom = () => {
        if (building === false) {
            setBuilding(true);
        }
        else {
            setBuilding(false);
        }
    }
    const handlePlayground = () => {
        if (playgroundCard === false) {
            setPlayground(true);
        }
        else {
            setPlayground(false);
        }
    }
    const handleSeminarRoom = () => {
        if (seminerCard === false) {
            setSeminer(true);
        }
        else {
            setSeminer(false);
        }
    }
    const handleArtandCraftResource = () => {
        if (artCraft === false) {
            setArtCraft(true);
        }
        else {
            setArtCraft(false);
        }
    }
    const handleHealthandPhysical = () => {
        if (healthCard === false) {
            sethealth(true);
        }
        else {
            sethealth(false);
        }
    }
    const handleLibraryCumResoutrce = () => {
        if (libraryCumCard === false) {
            setLibraryCum(true);
        }
        else {
            setLibraryCum(false);
        }
    }
    const handleScienceMathematicsLab = () => {
        if (science === false) {
            setScience(true);
        }
        else {
            setScience(false);
        }
    }
    const handlePsychologyLab = () => {
        if (psychology === false) {
            setPsychology(true);
        }
        else {
            setPsychology(false);
        }
    }
    const handleICTresource = () => {
        if (ictCard === false) {
            setICT(true);
        }
        else {
            setICT(false);
        }
    }
    const handleClassroom = () => {
        if (classroom === false) {
            setClassroom(true);
        }
        else {
            setClassroom(false);
        }
    }
    return (
        <div className='lg:py-8 mt-0 lg:mt-16 middle-background' id='infrastructure'>
            <div className='flex justify-center w-full'>
                <div>
                    <h1 className='welcome infrustructure updated-font-family'>Infrastructure and Facilities</h1>
                    <p className='w-full lg:w-[380px] welcome-line h-[4px]' alt="" />

                </div>
            </div>
            <div className='lg:w-[1100px] md:w-[1100px] block mx-auto'>
                <p className='mt-4 text-xl updated-font-family'>J. N. Kaul institute of Education, Bhimtal campus situated in surrounded with beautiful ground and lush greenery, which consists of five huge classrooms, music room, library, computer lab, play ground. The whole campus covered with CCTV camera etc.
                </p>
            </div>

            <div className='flex justify-center mt-8'>
                <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 md:grid-cols-2 lg:gap-x-16 md:gap-x-12 gap-y-12 lz:mx-8 md:mx-8'>
                    <div class={`card p-4 ${classroom === false ? 'card-size' : 'large-card'} shadow-xl hover:shadow-2xl`}>
                        <figure class="">
                            <img style={{ height: '240px' }} className='w-full h-full facility-picture' src={rectangle411} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body card-info">
                            <h1 className='infructructure updated-font-family'>Classrooms</h1>
                            <p className='infrustructure-card-para updated-font-family'>The Institute consists of 5 spacious & well ventilated classrooms with facilities like study table, chairs, furniture and all <br /><span className={`infrustructure-card-para updated-font-family ${classroom === false ? 'hidden' : 'block'}`}> the basis utilities like water electricity etc. for students & teachers and in every classroom CCTV camera has been installed.</span>
                                {
                                    !classroom ? <span onClick={handleClassroom} class="see-more udated-font-family">See More</span> : <span onClick={handleClassroom} class="see-more udated-font-family">See Less</span>
                                }
                            </p>
                        </div>
                    </div>


                    <div class={`card p-4 ${ictCard === false ? 'card-size' : 'large-card-ict'} shadow-xl hover:shadow-2xl`}>
                        <figure class="">
                            <img style={{ height: '240px' }} className='w-full h-full facility-picture' src={ict} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body card-info">
                            <h1 className='infructructure updated-font-family'>ICT Resource Center</h1>
                            <p className='infrustructure-card-para updated-font-family'>Information and communication technology deals in the usage of tools and techniques to enhance the <br /><span className={`infrustructure-card-para updated-font-family ${ictCard === false ? 'hidden' : 'block'}`}> effectiveness of teaching learning process. ICT Lab is well equipped with multimedia development machines, software and devices to use classroom setting for teaching.</span>
                                {
                                    !ictCard ? <span onClick={handleICTresource} class="see-more udated-font-family">See More</span> : <span onClick={handleICTresource} class="see-more udated-font-family">See Less</span>
                                }

                            </p>
                            {/* */}
                        </div>
                    </div>

                    <div class={`card p-4 ${psychology === false ? 'card-size' : 'large-card-psychology'} shadow-xl hover:shadow-2xl`}>
                        <figure class="">
                            <img style={{ height: '240px' }} className='w-full h-full facility-picture' src={PSYCHOLOGY} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body card-info">
                            <h1 className='infructructure updated-font-family'>Psychology Lab</h1>
                            <p className='infrustructure-card-para updated-font-family'>The teacher should not only understand children but also be aware of their expectations, potentialities and For this <br /><span className={`infrustructure-card-para updated-font-family ${psychology === false ? 'hidden' : 'block'}`}> psychology Lab is rich in all types of psychological tests and tools used to understand child psychology and for research.</span>
                                {
                                    !psychology ? <span onClick={handlePsychologyLab} class="see-more udated-font-family">See More</span> : <span onClick={handlePsychologyLab} class="see-more udated-font-family">See Less</span>
                                }
                            </p>
                        </div>
                    </div>

                    <div class={`card p-4 ${science === false ? 'card-size' : 'larger-card-science'} shadow-xl hover:shadow-2xl`}>
                        <figure class="">
                            <img style={{ height: '240px' }} className='w-full h-full facility-picture' src={scienceLab} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body card-info">
                            <h1 className='infructructure updated-font-family'>Science & Mathematics Lab</h1>
                            <p className='infrustructure-card-para updated-font-family'>Science and mathematics are not mere disciplines of study but also a way of life. Science & mathematics education at <br /><span className={`infrustructure-card-para updated-font-family ${science === false ? 'hidden' : 'block'}`}> school and institute level has to focus not only on development of understanding and skills but also on the development of scientific temper among learners. The lab is well equipped with sufficient apparatus, charts, models, teaching aids and other material for conducting numbers of experiment activities and demonstrations of physics, chemistry, biology and mathematics at secondary level.</span>
                                {
                                    !science ? <span onClick={handleScienceMathematicsLab} class="see-more udated-font-family">See More</span> : <span onClick={handleScienceMathematicsLab} class="see-more udated-font-family">See Less</span>
                                }
                            </p>
                        </div>
                    </div>


                    <div class={`card p-4 ${libraryCumCard === false ? 'card-size' : 'larger-card-lab'} shadow-xl hover:shadow-2xl`}>
                        <figure class="">
                            <img style={{ height: '240px' }} className='w-full h-full facility-picture' src={libraryCum} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body card-info">
                            <h1 className='infructructure updated-font-family'>Library Cum Resoutrce Center (The Library)</h1>
                            <p className='infrustructure-card-para updated-font-family'>The library of the institute is fully equipped with meticulously chosen large number of Indian and foreign text-books <br /><span className={`infrustructure-card-para updated-font-family ${libraryCumCard === false ? 'hidden' : 'block'}`}> and reference-books to provide the pupil teachers with in-depth and thorough knowledge and strong intellectual support to help them in their studies. The library also has many national and international educational resources, documentation section and newspaper clippings. The institute is committed to make its library a knowledge hub. It is constantly being upgraded and enriched with new books according to the syllabus and new technology. The students are provided with the facility of a book bank through which they can borrow the required text books for the session. The library has an open access system to all its members. </span>
                                {
                                    !libraryCumCard ? <span onClick={handleLibraryCumResoutrce} class="see-more udated-font-family">See More</span> : <span onClick={handleLibraryCumResoutrce} class="see-more udated-font-family">See Less</span>
                                }
                            </p>
                        </div>
                        {/**/}
                    </div>

                    <div class={`card p-4 ${healthCard === false ? 'card-size' : 'larger-card-health'} shadow-xl hover:shadow-2xl`}>
                        <figure class="">
                            <img style={{ height: '240px' }} className='w-full h-full facility-picture' src={health} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body card-info">
                            <h1 className='infructructure updated-font-family'>Health and Physical Education Resource Center </h1>
                            <p className='infrustructure-card-para updated-font-family'>The Institute is well equipped with the Health and Physical Education Resource Centre where pupil learn to meditate. <br /><span className={`infrustructure-card-para updated-font-family ${healthCard === false ? 'hidden' : 'block'}`}> They learn to live a healthy life. They are taught yoga which helps in remaining physically and mentally healthy because inside a healthy body remains a healthy mind.
                                Pupil teachers also have Gym classes which help them to remain physically fit.
                                Physical Education has been considered as an essential part of human life from times immemorial. Physical Exercise & ‘Yoga’ has been emphasized in India not only to keep fit but also to prevent & cure the physical ailment. </span>
                                {
                                    !healthCard ? <span onClick={handleHealthandPhysical} class="see-more udated-font-family">See More</span> : <span onClick={handleHealthandPhysical} class="see-more udated-font-family">See Less</span>
                                }

                            </p>
                        </div>
                        {/* */}
                    </div>


                    <div class={`card p-4 ${artCraft === false ? 'card-size' : 'larger-card-art'} shadow-xl hover:shadow-2xl`}>
                        <figure class="">
                            <img style={{ height: '240px' }} className='w-full h-full facility-picture' src={art} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body card-info">
                            <h1 className='infructructure updated-font-family'>Art and Craft Resource Center</h1>
                            <p className='infrustructure-card-para updated-font-family'>The Institute is having it’s own Art and craft Resource centre where pupil teacher learns to be creative and make creative <span className={`infrustructure-card-para updated-font-family ${artCraft === false ? 'hidden' : 'block'}`}> things which not only helps in widening their horizons but also in developing creative faculties.
                                This is housed in a well-designed spacious room with adequate electricity, tools, equipment, furniture's raw materials' reference materials, books, periodicals and motivational works. Students can utilize all these for their creative works of arts and crafts, drawing an paintings etc. </span>
                                {
                                    !artCraft ? <span onClick={handleArtandCraftResource} class="see-more udated-font-family">See More</span> : <span onClick={handleArtandCraftResource} class="see-more udated-font-family">See Less</span>
                                }

                            </p>
                        </div>
                        {/* */}
                    </div>


                    <div class={`card p-4 ${seminerCard === false ? 'card-size' : 'larger-card-seminer'} shadow-xl hover:shadow-2xl`}>
                        <figure class="">
                            <img style={{ height: '240px' }} className='w-full h-full facility-picture' src={seminer} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body card-info">
                            <h1 className='infructructure updated-font-family'>Seminar Room</h1>
                            <p className='infrustructure-card-para updated-font-family'>The Seminar Room is situated on the ground Floor of the Institute. It is used heavily during term for teaching <br /> <span className={`infrustructure-card-para updated-font-family ${seminerCard === false ? 'hidden' : 'block'}`}> / supervisions and other meetings. When it is not booked the Room can be used for quiet study. The Room is equipped with a data projector, Wi-Fi system, tv and video, overhead projector, slide projector and screen, which may be used for seminar, conferences, panel discussions and academic purposes during staffed hours only. A laptop for use with the data-projector is available from the issue desk. It consists of well-furnished furniture well ventilated and spacious room. </span>
                                {
                                    !seminerCard ? <span onClick={handleSeminarRoom} class="see-more udated-font-family">See More</span> : <span onClick={handleSeminarRoom} class="see-more udated-font-family">See Less</span>
                                }

                            </p>
                        </div>
                        {/*  */}
                    </div>


                    <div class={`card p-4 ${playgroundCard === false ? 'card-size' : 'large-card'} shadow-xl hover:shadow-2xl`}>
                        <figure class="">
                            <img style={{ height: '240px' }} className='w-full h-full facility-picture' src={playGround} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body card-info">
                            <h1 className='infructructure updated-font-family'>Playground</h1>
                            <p className='infrustructure-card-para updated-font-family'>The Institute has playgrounds for many outdoor games like volleyball, Basketball etc. It has facility for indoor games like  Badminton Chess and Table-Tennis etc.
                            </p>
                        </div>
                        {/* */}
                    </div>
                </div>



            </div>
            {/* Last two card */}
            <div className='flex justify-center mt-12'>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-y-12 lg:gap-x-16 md:gap-x-16'>
                    <div class={`card p-4 ${building === false ? 'card-size' : 'large-card'} shadow-xl hover:shadow-2xl`}>
                        <figure class="">
                            <img style={{ height: '240px' }} className='w-full h-full facility-picture' src={bildersRoom} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body card-info">
                            <h1 className='infructructure updated-font-family'>Billiards Room</h1>
                            <p className='infrustructure-card-para updated-font-family'>The institute is proud to have the facility for indoor games like Billiards. It will help our people teacher to keep at par with the changing face of education.
                            </p>
                        </div>

                    </div>


                    <div class={`card p-4 ${musicCard === false ? 'card-size' : 'large-card'} shadow-xl hover:shadow-2xl`}>
                        <figure class="">
                            <img style={{ height: '240px' }} className='w-full h-full' src={music} alt="" class="rounded-xl" />
                        </figure>
                        <div class="card-body card-info">
                            <h1 className='infructructure updated-font-family'>Music Room</h1>
                            <p className='infrustructure-card-para updated-font-family'>There are several musical instruments in the music room for students in which the students took classes of music and practices for various cultural programs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default InfrastructureCard;