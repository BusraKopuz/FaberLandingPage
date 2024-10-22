import React from "react";
import './style.css'

const Logo = () => (
<svg width="40" height="30" viewBox="0 0 124 145" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M123.18 0.959991H1.06L0.820007 19.55H122.93L123.18 0.959991Z" fill="#1E48FF"/>
<path d="M104.36 38.74C102.12 91.62 67.76 117.05 62.12 121.51C59.2 119.2 56.43 116.82 53.81 114.4C36.2 98.07 26.18 79.19 22.15 57.33H81.08C82.49 51.32 83.45 45.12 83.99 38.74H1.06C1.58 72.76 14.06 102.27 39.81 126.75C42.23 129.06 44.77 131.31 47.43 133.53C51.97 137.32 56.87 140.98 62.11 144.5C103.02 117.02 122.52 81.44 123.17 38.74H104.35H104.36Z" fill="#1E48FF"/>
</svg>



);

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        <div className="headerLogo">
          <Logo />
          <a className="navbar-brand page-scroll" href="#page-top">FABER</a>
        </div>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">Hizmetlerimiz</a>
            </li>
            <li>
              <a href="#about" className="page-scroll">Hakkımızda</a>
            </li>
            <li>
              <a href="#services" className="page-scroll">Servis</a>
            </li>
            {/* <li>
              <a href="#portfolio" className="page-scroll">Galeri</a>
            </li> */}
            {/* <li>
              <a href="#testimonials" className="page-scroll">Referanslar</a>
            </li> */}
            {/* <li>
              <a href="#team" className="page-scroll">Takım</a>
            </li> */}
            <li>
              <a href="#contact2" className="page-scroll">İletişim</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
