import React, { useMemo, useState } from "react";

import "./NavbarMenu.css";

import { BsFillXCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function toggleClass(el) {
    var menuu = document.getElementById(el);
    console.log(menuu);
    if (menuu.className == "respnav") {
        menuu.className = "mobileshow";
    } else {
        menuu.className = "respnav";
    }
}

function toggleClassreverse(el) {
    var menuu = document.getElementById(el);
    if (menuu.className == "mobileshow" || menuu.className == "mobilehidden") {
        menuu.className = "respnav";
    } else {
        menuu.className = "respnav";
    }
}

function NavbarMenu(props) {
    const { isShow, handleClick } = props;
    const initialValues = {
        aboutUs: false,
        academics: false,
        beyond: false,
        career: false,
    };
    const [menuItem, setMenuItem] = useState(initialValues);
    // console.log(isShow);

    function handleMenu(name) {
        setMenuItem(() => {
            return { initialValues, [name]: true };
        });
    }

    return (
        <div
            className="navbar_menu_main"
            style={{ display: isShow ? "block" : "none", overflow: "scroll" }}
        >
            <div>
                <div className="nav_cont">
                    <div className="cross-div">
                        <BsFillXCircleFill
                            className="cursor"
                            size={30}
                            onClick={() => {
                                handleClick();
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="menu_main">
                <div
                    className="menu_item-1"
                    style={{
                        marginTop: "0px",
                    }}
                >

                    <NavLink to={"/leadership"}>
                        <div
                            className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan`}
                            onClick={() => {
                                handleClick();
                            }}
                        >
                            Leadership
                        </div>
                    </NavLink>
                    <NavLink to={"/programesOffered"}>
                        <div
                            className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan `}
                            onClick={() => {
                                handleClick();
                            }}
                        >
                            Programs Offered
                        </div>
                    </NavLink>
                    <NavLink to="/naac">
                        <div
                            className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan `}
                            onClick={() => {
                                handleClick();
                            }}
                        >
                            NAAC
                        </div>
                    </NavLink>
                    <NavLink to={"/admission"}>
                        <div
                            className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan `}
                            onClick={() => {
                                handleClick();
                            }}
                        >
                            Admissions
                        </div>
                    </NavLink>
                    <NavLink to={"/faculty"}>
                        <div
                            className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan `}
                            onClick={() => {
                                handleClick();
                            }}
                        >
                            Faculty & Staff
                        </div>
                    </NavLink>
                    <NavLink to={"/alumni"}>
                        <div
                            className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan `}
                            onClick={() => {
                                handleClick();
                            }}
                        >
                            Alumni
                        </div>
                    </NavLink>
                    <NavLink to={"/contact"}>
                        <div
                            className={`f-1-2 line-height-3 f-400 color-white mt-1 hover-cyan `}
                            onClick={() => {
                                handleClick();
                            }}
                        >
                            Contact Us
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavbarMenu;
