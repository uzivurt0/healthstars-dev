import React, { Component } from "react";
import "./Home.css";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Artikel1 from "../Assets/image/makanansehat.jpg";
import Artikel2 from "../Assets/image/waktumakan.jpg";
import Artikel3 from "../Assets/image/sayur.jpg";
import Artikel4 from "../Assets/image/makanan.jpg";
import Resep1 from "../Assets/image/nasigoreng.jpg";
import Resep2 from "../Assets/image/bibimbap.jpg";
import Background from "../Assets/image/header-bg.jpg";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header header={Background} title="HEALTHY STARTS" titlegreen="HERE" />
        <div className="page-container">
          <div className="section-title">
            <h1>Headline</h1>
          </div>
          <div className="section-container">
            <div className="section-headline">
              <div className="headline-img">
                <img alt="thumbnail" src={Artikel1} />
              </div>
              <div className="headline-title-author">
                <Link to="/artikel1">
                  <h3>Ciri-Ciri Makanan Sehat</h3>
                </Link>
                <p>
                  Banyak orang tidak terlalu memperhatikan seperti apa makanan
                  sehat itu dan bagaimana ciri-cirinya.....
                </p>
              </div>
            </div>
            <div className="content-container">
              <div className="section-content">
                <div className="content-img">
                  <img alt="thumbnail" src={Artikel2} />
                </div>
                <div className="content-title-author">
                  <Link to="/artikel2">
                    <h3>Waktu Makan yang Baik untuk Kesehatan Tubuh</h3>
                  </Link>
                  <p>
                    Ada banyak dari kita yang tidak terlalu memperdulikan waktu
                    makan sehari-hari yang baik untuk tubuh dengan berbagai
                    alasan....
                  </p>
                </div>
              </div>
              <div className="section-content">
                <div className="content-img">
                  <img alt="thumbnail" src={Artikel3} />
                </div>
                <div className="content-title-author">
                  <Link to="/artikel3">
                    <h3>Pilihan metode memasak sayur</h3>
                  </Link>
                  <p>
                    Metode atau cara memasak juga menentukan banyaknya zat gizi
                    yang hilang....
                  </p>
                </div>
              </div>
              <div className="section-content">
                <div className="content-img">
                  <img alt="thumbnail" src={Artikel4} />
                </div>
                <div className="content-title-author">
                  <Link to="/artikel4">
                    <h3>Manfaat mengkonsumsi healthy food</h3>
                  </Link>
                  <p>
                    Buah, sayuran, protein tanpa lemak dan biji-bijian
                    bermanfaat untuk menggantikan makanan tinggi lemak dan
                    tinggi kalori sehingga membuat kenyang lebih lama....
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-title">
            <h1>Recipe Highlights</h1>
            <Link to="/recipe">See More...</Link>
          </div>
          <div className="section-container2">
            <div className="section-content">
              <div className="recipe-img">
                <img alt="thumbnail" src={Resep1} />
              </div>
              <div className="recipe-title-author">
                <Link to="/resep1">
                  <h3>Nasi Goreng Vegetarian Vietnam</h3>
                </Link>
                <p>
                  Resep Nasi Goreng Khas Vietnam dilengkapi dengan sayur-sayuran
                </p>
              </div>
            </div>
            <div className="section-content">
              <div className="recipe-img">
                <img alt="thumbnail" src={Resep2} />
              </div>
              <div className="recipe-title-author">
                <Link to="/resep2">
                  <h3>Bibimbap Vegetarian</h3>
                </Link>
                <p>Makanan khas korea yang berisi sayur-sayuran</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
