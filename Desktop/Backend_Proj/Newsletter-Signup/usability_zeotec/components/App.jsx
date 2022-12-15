import React from "react"
import Topi from "./top_banner"
import Navbar from "./Navbar"
import Header from "./header"
import Companies from "./companies-section"
import Features from "./feature"
import Enquiry from "./cta-section"
import Footer from "./footer"
export default function App(){
    return(
        <div>

        <Topi/>
        <Navbar/>
        <Header/>
        <Companies/>
        <Features/>
        <Enquiry/>
        <Footer/>
        <div className="spacer"></div>
        </div>
    )
}