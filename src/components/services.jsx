import React from "react";
import './style.css'

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Neden Bizi Seçmelisiniz?</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <img 
                  src={d.image}
                  style={{width:"100px", height: "100px"}}
                  />
                  {/* <i className={d.icon}></i> */}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p className="service-text">{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
