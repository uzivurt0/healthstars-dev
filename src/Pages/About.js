import React, { Component } from "react";
import "./About.css";
import Logo from "../Assets/image/HEALTHSTARS_GREEN.png";
import Background from "../Assets/image/header-bg.jpg";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Member from "../Components/Team Member/member";

export default class About extends Component {
  render() {
    return (
      <>
        <Header header={Background} title="HEALTHY STARTS" titlegreen="HERE" />
        <div className="page-container">
          <div className="aboutus-desc">
            <div className="aboutus-logo">
              <img alt="logo" src={Logo} />
            </div>
            <div className="aboutus-content">
              <p>
                Healthstars adalah situs portal berita tentang makanan, dan gaya
                hidup yang sehat. Portal ini sendiri ditemukan di tahun 2021
                oleh 5 mahasiswa yang berkuliah di Universitas Multimedia
                Nusantara. Tujuan awal dari dibuatnya portal berita ini adalah
                untuk menyadarkan masyarakat bahwa gaya hidup yang sehat tidak
                selalu mahal dan sangat mudah untuk dicapai. Selain itu, portal
                ini juga bertujuan untuk membangun kesadaran tentang gaya hidup
                sehat guna meningkatkan produktifitas sehari-hari. Healthstars,{" "}
                <i>
                  <strong>Healthy Starts Here</strong>
                </i>
              </p>
            </div>
          </div>

          <div className="aboutus-team">
            <div className="team-title">OUR TEAM</div>
            <div className="team-container">
              <Member name="Aprilia Sisca D." nim="00000037653" ig="#" />
              <Member name="Fredericka Linardo" nim="00000037190" ig="#" />
              <Member name="Ghina Kusuma D." nim="00000036908" ig="#" />
              <Member name="Kendrick Nathanael R." nim="00000036001" ig="#" />
              <Member
                name="M. Faisal Farhan"
                nim="00000032039"
                ig="https://instagram.com/faisal.frhan"
              />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
