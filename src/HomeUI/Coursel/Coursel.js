import React from "react";
import MensImage from "../../Assets/mens.jpg";
import WomensImage from "../../Assets/womens.webp";
import ElectronicImage from "../../Assets/sale.jpg";
import  "./Coursel.css"
import { NavLink} from "react-router-dom";

const Coursel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide bg-primary align-center"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
      <NavLink to="mens"> <div className="carousel-item active">
        
        <div className="row">
        <div className="col">
          <h1 className="text-Align">Mens</h1>
        </div>
        <div className="col">
          <img src={MensImage} className=" coursel-image d-block w-50" alt="..." />
        </div>
      </div>
    </div></NavLink>
    <NavLink to="womens">
        <div className="carousel-item">
          <div className="row">
            <div className="col">
              <h1 className="text-Align">Womens</h1>
            </div>
            <div className="col">
              <img src={WomensImage} className="  coursel-image d-block w-50" alt="..." />
            </div>
          </div>
        </div></NavLink>
        <NavLink to="electronics">
        <div className="carousel-item">
          <div className="row">
            <div className="col">
              <h1 className="text-Align">Electronics</h1>
            </div>
            <div className="col">
              <img src={ElectronicImage} className=" coursel-image d-block w-50" alt="..." />
            </div>
          </div>
        </div></NavLink>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Coursel;
