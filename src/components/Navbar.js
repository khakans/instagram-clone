import React from 'react'
import {FaRegCompass, FaRegHeart, FaSistrix, FaTelegramPlane} from "react-icons/fa"
import {MdHome} from 'react-icons/md'
import {ContextProvider} from '../global/Context'

const Navbar = () => {
    const {modal, openModal, user, loader, logout} = React.useContext(ContextProvider)
    console.log("my-modal ", modal);
    const openForms = () => {
        openModal();
    }
    const userLogout = () => {
        logout()
    }
    const checkUser = () => {
        return !loader ? !loader && user ?(
            <li>{user.displayName} | <span onClick={userLogout}>logout</span></li>
        ):(
            <li onClick={openForms}>Register/Login</li>
        ):(
            <img style={{height:30, marginTop:'-5px'}} src="/images/loading.gif" alt="loading"/>
        );
    }
    return (
        <div className="Navbar">
            <div className="Navbar_first">
                <div className="Navbar_logo">
                    <img src="/images/instagram-handswriting.png" alt="instagram logo"/>
                </div>
            </div>
            <div className="Navbar_middle">
                <div className="Navbar_search">
                    <input type="text" className="Navbar_input-search" placeholder="Search" />
                    <FaSistrix className="searchIcon" />
                </div>
            </div>
            <div className="Navbar_last">
                <li>
                    <MdHome className="Navbar_icons" />
                </li>
                <li>
                    <FaTelegramPlane className="Navbar_icons" />
                </li>
                <li>
                    <FaRegCompass className="Navbar_icons" />
                </li>
                <li>
                    <FaRegHeart className="Navbar_icons" />
                </li>
                {checkUser()}
            </div>
        </div>
    )
}

export default Navbar