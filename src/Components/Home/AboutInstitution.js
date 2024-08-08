import React from "react";
import rectangle from "./../assets/images/Rectangle 404.png";
import studentTeacher from "./../assets/images/image 12.png";
import studentTeacher2 from "./../assets/images/mission and vission.JPG";
import studentTeacher3 from "./../assets/images/image 13.png";
import studentTaboutBhimtal from "./../assets/images/about-bhimtal.png";

const AboutInstitution = () => {
    return (
        <div
            className="margin-for-institute ml-0 lg:ml-[80px] mr-0 lg:mr-[80px]"
            id="home"
        >
            <div>
                <div className="mt-8 mb-8 w-full">
                    <h1 className="welcome aboutWelcome updated-font-family">
                        Welcome to Hermann Gmeiner Degree College
                    </h1>
                    <p className="w-full lg:w-[570px] welcome-line" alt="" />
                </div>

                <div class="mb-[50px]">
                    {/* <div class="flex justify-center flexProp flex-col lg:flex-row">
                        <img
                            src={studentTaboutBhimtal}
                            class="about-institution-picture rounded-lg shadow-2xl"
                            alt=""
                        />
                        {/* <div className="ml-0 lg:ml-6">
                            <h1 className="about-sos updated-font-family">
                                About SOS
                            </h1>
                            <p className="sos-para updated-font-family">
                                SOS Children’s Village of India is an
                                independent, non- governmental, social
                                development organization that provides family
                                based care for children. The first SOS
                                Children’s Village of India was founded by
                                Hermann Gmiener in 1949 in Imst, Austria. He was
                                committed to helping children in need, children
                                who had lost their homes, their society and
                                their families as a result of the Second World
                                War. More than 7000 children and young people
                                attend SOS Hermann Gmeiner Schools, SOS
                                Kindergartens and SOS Vocational Training
                                Centers. Moreover SOS Children’s Villages
                                provides families with material, psychological
                                and social support. In times of crisis and
                                disaster, SOS Children’s Villages helps through
                                emergency relief programes. SOS Children's
                                Village Bhimtal was built on the former property
                                of a Maharaja, around 300 km north of New Delhi,
                                in the foothills of the Himalayan Mountains.
                            </p>
                        </div> 
                    </div> */}
                </div>

                <div class="mb-[50px]">
                    <div class="flex justify-center flexProp flex-col lg:flex-row">
                        <img
                            src={studentTeacher3}
                            class="about-institution-picture rounded-lg shadow-2xl"
                            alt=""
                        />
                        <div className="ml-0 lg:ml-6">
                            <h1 className="about-sos updated-font-family">
                                About Hermann Gmeiner Degree College
                            </h1>
                            <p className="sos-para updated-font-family">
                                Hermann Gmeiner Degree College, Bhimtal
                                is a Community project of SOS Children’s Village
                                of India. The Institute came into existence by
                                the sincere and praiseworthy efforts of
                                Padamshree Shri J. N. Kaul, President SOS
                                Children’s Village of India in the year 2004. It
                                is approved by NCTE and is affiliated to Kumaun
                                University, Nainital. The University has been
                                awarded grade ‘A’ by the National Assessment and
                                Accreditation Council (NAAC). Since there was no
                                B.Ed. College anywhere in the adjoining areas so
                                as a need to fulfill the requirements of
                                students who wish to opt for teaching as a
                                profession & career, Hermann Gmeiner Degree College
                                 was opened in 2005.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="mb-[50px]">
                    <div class="flex justify-center flexProp flex-col lg:flex-row">
                        <img
                            src={studentTeacher2}
                            class="about-institution-picture rounded-lg shadow-2xl"
                            alt=""
                        />
                        <div className="ml-0 lg:ml-6">
                            <h1 className="about-sos updated-font-family">
                                Vision & Mission
                            </h1>
                            <p className="sos-para updated-font-family">
                                Vision of the institute is to bring forth
                                dedicated teachers who can inculcate values and
                                norms of a civil society in our younger
                                generation, apart from imparting knowledge and
                                skills as updated in the new millennium. Mission
                                of the institute is to build and nurture a new
                                generation of well-rounded professionals who can
                                work as positive charge agents in the new
                                millennium by helping the new education system
                                to attain and sustain global leadership. It will
                                be our endeavor to assimilate and disseminate
                                practical knowledge to future professionals and
                                to encourage their understanding of strategic
                                perception to fulfill the mission of the
                                organization in the fast changing global
                                learning environment and to make significant
                                contribution by providing an opportunity to the
                                deserving candidates of society to have world
                                class professional education and to inculcate
                                among them the feeling of fraternity and
                                patriotism.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutInstitution;
