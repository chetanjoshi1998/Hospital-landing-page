import "../Styles/nav.css"
import logo from '../Images/logo.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import home from '../Images/home_2549900.png'
import calender from '../Images/yearbook_10313735.png'
import setting from '../Images/settings_3524636.png'
import heart from '../Images/heart-attack_1818176.png'
import lab from '../Images/blood-test_4806079.png'
import message from '../Images/messenger_1370907.png'
import family from '../Images/support_1659029.png'
import payment from '../Images/credit-card_4021708.png'
import prescription from '../Images/recipe_6946566.png'





const Nav = () => {
    return (
        <>
            <div className="conte_nt">
                <div>
                    <div className="verticalNav">
                        <div className="logo">
                            <img src={logo} alt="Logo" width={"100px"} />
                        </div>
                        <div className="Nav-items">

                            <div>
                                <div className="nav_content">
                                    <ul>
                                        <li>
                                            <div className="navigation">
                                                <div>
                                                    <img src={home} />
                                                </div>
                                                <div>
                                                    <p>Home</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav_content">
                                    <ul>
                                        <li>
                                            <div className="navigation">
                                                <div>
                                                    <img src={calender} />
                                                </div>
                                                <div>
                                                    <p>Appointment</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav_content">
                                    <ul>
                                        <li>
                                            <div className="navigation">
                                                <div>
                                                    <img src={lab} />
                                                </div>
                                                <div>
                                                    <p>Labtests</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav_content">
                                    <ul>
                                        <li>
                                            <div className="navigation">
                                                <div>
                                                    <img src={home} />
                                                </div>
                                                <div>
                                                    <p>Home</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav_content">
                                    <ul>
                                        <li>
                                            <div className="navigation">
                                                <div>
                                                    <img src={heart} />
                                                </div>
                                                <div>
                                                    <p>favourites</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav_content">
                                    <ul>
                                        <li>
                                            <div className="navigation">
                                                <div>
                                                    <img src={family} />
                                                </div>
                                                <div>
                                                    <p>Family</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav_content">
                                    <ul>
                                        <li>
                                            <div className="navigation">
                                                <div>
                                                    <img src={prescription} />
                                                </div>
                                                <div>
                                                    <p>Prescribtion</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav_content">
                                    <ul>
                                        <li>
                                            <div className="navigation">
                                                <div>
                                                    <img src={message} />
                                                </div>
                                                <div>
                                                    <p>Message</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav_content">
                                    <ul>
                                        <li>
                                            <div className="navigation">
                                                <div>
                                                    <img src={payment} />
                                                </div>
                                                <div>
                                                    <p>Payment</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="nav_content">
                                    <ul>
                                        <li>
                                            <div className="navigation">
                                                <div>
                                                    <img src={setting} />
                                                </div>
                                                <div>
                                                    <p>Settings</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>




                        </div>

                    </div>

                </div>

                <Home />
            </div>

        </>
    )

};
export default Nav;