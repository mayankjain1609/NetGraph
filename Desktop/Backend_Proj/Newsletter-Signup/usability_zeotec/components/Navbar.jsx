import React from "react"
export default function Navbar(){
    return(
        <nav>
            <div className="container main-nav flex">
                <a href="#" className="company-logo">
                    <img src="../src/assets/assets/new_asset 1.png" alt="Logo" />
                </a>
                <div className="nav-links">
                    <ul className="flex">
                        <li><a href="#" className="hover-links">Home</a></li>
                        <li><a href="#" className="hover-links">Company Profile</a></li>
                        <li><a href="#" className="hover-links">Our Products</a></li>                    
                        <li><a href="#" className="hover-links">Contact Us</a></li>
                        <li><a href="#" className="hover-links secondary-button">Sign in</a></li>
                        <li><a href="#" className="hover-links primary-button">Sign up</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}