import { APP_LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
    const [btnText, setBtnText] = useState("login"); 
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={APP_LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button onClick={() => {
                        setBtnText((btnText === "login") ? "logout" : "login") 
                    }}>{btnText}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;