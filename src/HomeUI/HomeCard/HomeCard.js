import React from "react";
import "./HomeCard.css";
import CardImage from "../../Assets/1.png";

const HomeCard = (props) => {
  return (
    <>
      <section className="review">
        <div className="row p-5">
          {props.headings.map((heading) => {
            return (
              <div className="col-lg-4 col-xs-12">
                <div className="card h-100">
                  <div className="card-header">
                    <img className="w-75" src={CardImage} alt="" />
                  </div>
                  <div className="card-body">
                    <h4>{heading}</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Praesent egestas arcu sed risus efficitur sollicitudin in
                      quis elit.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HomeCard;
