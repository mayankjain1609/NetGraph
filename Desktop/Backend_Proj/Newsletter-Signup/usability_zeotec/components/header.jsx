import React from "react"
export default function Header(){
    return(
            <header>
                <div className="container header-section flex">
                    <div className="header-left">
                        <h1 className="head-one">Wide Range of</h1>
                        <h1 className="head-two">Quality Absorbents</h1>
                        <p>Zeotec believes in providing a solution to a problem, not merely supplying a product. Zeotec's adsorbent group has an experienced technical service staff including experts from respective fields,who are ready to assist you for providing right solution to your adsorbents need.</p>
                        <a href="#" className="primary-button order-now-btn">Order Now</a>
                    </div>
                    <div className="header-right">
                        <img src="../src/assets/assets/Chemistry.png" alt="" />
                    </div>
                </div>
            </header>

    )}