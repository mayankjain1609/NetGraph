import React from "react"
import Products from "./Product-card"
export default function Features(){
    return(
        <section className="features-section">
            <div className="container">
                <div className="features-header">
                    <h2>Our Products</h2>
                <div className="pro-all flex">

                <Products
                    img="asset 12.jpeg"
                    name="3A Molecular Sieves"
                    />
                <Products
                    img="asset 13.jpeg"
                    name="4A Molecular Sieves"
                    />
                <Products
                    img="asset 14.jpeg"
                    name="5A Molecular Sieves"
                    />
                <Products
                    img="asset 15.jpeg"
                    name="13X Molecular Sieves"
                    />
                <Products
                    img="asset 16.jpeg"
                    name="Activated Alumina Balls"
                    />
                <Products
                    img="asset 17.jpeg"
                    name="Carbon Molecular Sieves"
                    />
                    </div>
                </div>
            </div>
        </section>
    )
}