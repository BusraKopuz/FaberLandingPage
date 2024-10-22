import React from "react";

export const Contact = (props) => {

  return (
  <div>
    <div id="contact2">
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <div className="section-title" style={{ marginBottom: "10px" }}>
              <h2>Bilgi için iletişime geçin.</h2>
              <p>
                Lütfen aşağıdaki iletişim kanallarından bizlere ulaşın. En kısa sürede size geri dönüş yapacağız.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="contact-item" style={{ marginTop: "10px" }}>
            <h3>İletişim Bilgileri</h3>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-map-marker"></i> Adres
              </span>
              {props.data ? props.data.address : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-phone"></i> Telefon
              </span>
              <div>{props.data ? props.data.phone1 : "loading"}</div>
              <div>{props.data ? props.data.phone2 : "loading"}</div>
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <i className="fa fa-envelope-o"></i> Email
              </span>
              {props.data ? props.data.email : "loading"}
            </p>
          </div>
        </div>

        <div className="col-md-12">
          <div className="row">
            <div className="social">
              <ul>
                <li>
                  <a href={props.data ? props.data.facebook : "/"}>
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.twitter : "/"}>
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={props.data ? props.data.youtube : "/"}>
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="footer">
      <div className="container text-center">
        <p>&copy; 2024 Faber</p>
      </div>
    </div>
  </div>
);

      
};
