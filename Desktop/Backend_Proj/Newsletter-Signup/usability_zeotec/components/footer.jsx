import React from "react";
export default function footer() {
    return (
        <footer>
            <div className="container flex footer-container">
                <a href="#" className="compony-logo">
                    <img src="../src/assets/assets/new_asset 1.png" className="footer-logo"/>
                </a>
                <div className="link-column flex trying">
                    <h4>Our_Dealing_Product</h4>
                    <a href="#" className="hover-link">Molecular Sieves 3A/4A/5A</a>
                    {/* <a href="#" className="hover-link">Molecular Sieves 4A</a> */}
                    {/* <a href="#" className="hover-link">Molecular Sieves 5A</a> */}
                    <a href="#" className="hover-link">Molecular Sieves 13X</a>
                    <a href="#" className="hover-link">Activated Alumina Balls</a>
                    <a href="#" className="hover-link">Carbon Molecular Sieves</a>
                    <a href="#" className="hover-link">Silica Gel Raw Material</a>
                    <a href="#" className="hover-link">Silica Gel Packaging Desiccants</a>
                    <a href="#" className="hover-link">Activated Carbon</a>
                    <a href="#" className="hover-link">Activated Bleaching Earth</a>
                    <a href="#" className="hover-link">Zeocil Plus (Mycotoxin Binder)</a>
                </div>
                {/* <div className="link-column flex">
                    <h4>Critical Diameters</h4>
                    <p>1. Helium - 2.0 Å</p>
                    <p>2. Hydrogen - 2.4 Å</p>
                    <p>3. Oxygen - 2.8 Å</p>
                    <p>4. Nitrogen - 3.0 Å</p>
                    <p>5. Water - 3.2 Å</p> */}
                {/* </div> */}
                <div className="link-column flex">
                    <p className="address-footer"><i class="fa-solid fa-map-location-dot"></i> 187, Ground Floor, Mathura Road,Hari Nagar Ashram, New Delhi - 110014 (OFFICE)</p>
                    <p className="address-footer"><i class="fa-solid fa-map-location-dot"></i> 24/15/2 Railway Road,Sameypur Badli Industrial Area, New Delhi - 110042 (FACTORY)</p>
                    <p className="address-footer"><i class="fa-solid fa-mobile"></i> +91-9899901826</p>
                    <p className="address-footer"><i class="fa-solid fa-mobile"></i> +91-9811199316</p>
                    <p className="address-footer"><i class="fa-solid fa-mobile"></i> +91-7042970650</p>
                    <p className="address-footer"><i class="fa-solid fa-at"></i> info@zeotec.co.in</p>
                    <p className="address-footer"><i class="fa-solid fa-at"></i> madhu.zeotec@gmail.com</p>
                </div>
            </div>
        </footer>
    )
}