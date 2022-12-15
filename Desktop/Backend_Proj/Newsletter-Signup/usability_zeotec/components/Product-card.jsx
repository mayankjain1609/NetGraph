import React from "react"
export default function Products(props){
    return(
    //    <div className="container">
            <div className="products-card flex">
                    <img src={`../src/assets/assets/assets 2/${props.img}`} className="card--img" />
                    <a href="#" className="secondary-button sec-btn">{props.name}  <i class="fa-sharp fa-solid fa-circle-info"></i></a>
            </div>
//    </div>
    )
}