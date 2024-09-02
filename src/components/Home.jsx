import React from 'react';
import './HomeCss.css'
const Home = () => {
    return (
        <div className="back-image">
            <div className="nav-bar">
                {/* here is our logo section */}
                <div className="logo">
                    <h1>TRIPPY.</h1>
                </div>
                {/* here is our Link Section */}
                <div className="nav-links">
                    <ul>
                        <li><a href=''><i class="fa-solid fa-house"></i>HOME</a></li>
                        <li><a href=''><i class="fa-solid fa-circle-info"></i>ABOUT </a></li>
                        <li><a href=''><i class="fa-solid fa-briefcase"></i>SERVICES </a></li>
                        <li><a href=''><i class="fa-solid fa-address-book"></i>CONTACT </a></li>
                    </ul>
                </div>
                {/* login button */}
                <div className="login">
                    <button><i class="fa-solid fa-user"></i>LOGIN</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
