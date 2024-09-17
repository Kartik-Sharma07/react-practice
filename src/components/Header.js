import { Link } from "react-router-dom";
import { APP_LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { useSelector } from "react-redux";


const Header = () => {
    const [btnText, setBtnText] = useState("login"); 

    // Subscribing to the store
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={APP_LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About us</li></Link>
                    <Link to="/contact"><li>Contact us</li></Link>
                    <Link to="/cart"><li>Cart {cartItems.length} item(s)</li></Link>
                    <button onClick={() => {
                        setBtnText((btnText === "login") ? "logout" : "login") 
                    }}>{btnText}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;