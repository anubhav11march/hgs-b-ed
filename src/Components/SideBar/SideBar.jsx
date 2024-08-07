import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./SideBar.css";
import { useInView } from "react-intersection-observer";
import { BsChevronRight } from "react-icons/bs";
import { sidebar_data_vision } from ".";

function SideBar(props) {
    const { pathname } = useLocation();
    const [isSideNav, setIsSideNav] = useState(false);
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        // triggerOnce:true,
        delay: 100,
    });
    return (
        <div className={`sidebar_main ${inView ? "fade-right" : null}`} ref={ref}>
            <div
                className="sidenav_mob"
                onClick={() => {
                    setIsSideNav(!isSideNav);
                }}
            >
                <div className="color-white f-1-2">Hermann Gmeiner Degree College</div>
                <div>
                    <BsChevronRight
                        color="white"
                        className={`${!isSideNav ? "arrow-down" : "arrow-up"}`}
                    />
                </div>
            </div>
            <div
                className={`sidenav_list ${isSideNav ? "sidenav_list_visible" : null} `}
            >

                {(sidebar_data_vision?.map((item) => {
                    return (
                        <NavLink
                            to={`/${item.navigation}`}
                            onClick={() => {
                                setIsSideNav(!isSideNav);
                            }}
                        >
                            <div
                                className={`f-1 color-white f-400 my-2 p-2 cursor sidebar_item ${pathname === `${"/" + item.navigation}` ? "selected" : null
                                    }`}
                            >
                                {item.title}
                            </div>
                        </NavLink>
                    );
                })
                )}
            </div>
        </div>
    );
}

export default SideBar;
