import React from "react";
import { Layout } from "antd";
import { titik, logo, arrow, wa, avatar, down } from "../../assets/Assets";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  const { Header } = Layout;

  return (
    <Header
      style={{
        position: "sticky",
        background: "#FFFFFF",
        Height: "7vw",
        width:'100%'
      }}
    >
      <div className="navbar">
        <div className="logo">
          <div className="logeeLogo">
            <img className="titik" src={titik} alt="titik" />
            <img className="logee" src={logo} alt="logo" />
          </div>

          <div className="profilHeader">
            <div className="judul">
              <p className="judulLogo">Buka Logee Service</p>
              <img src={arrow} alt="arrow" />
            </div>

            <div className="profil">
              <a className="wa" href="https://wa.me/085646336283">
                <img className="img-wa" src={wa} alt="WhatsApp" />
              </a>
              <span className="avatar">
                <img className="avaImg" src={avatar} alt="avatar" />
                <img className="down" src={down} alt="dropdown icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
