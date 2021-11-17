import { Component } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Background from "../Assets/image/header-bg.jpg";
import Resep1 from "../Assets/image/nasigoreng.jpg";
import Resep2 from "../Assets/image/bibimbap.jpg";
import Resep3 from "../Assets/image/cesarsalad.jpeg";
import Resep4 from "../Assets/image/burritovege.jpg";
import Resep5 from "../Assets/image/vegesamosa.jpeg";
import Resep6 from "../Assets/image/buncispanggangmaroko.jpeg";
import { Link } from "react-router-dom";

export default class Resep extends Component {
  render() {
    return (
      <>
        <Header title="KUMPULAN" titlegreen="RESEP" header={Background} />
        <div className="page-container">
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
            <div className="section-content">
              <div className="recipe-img">
                <img alt="thumbnail" src={Resep3} />
              </div>
              <div className="recipe-title-author">
                <Link to="/resep2">
                  <h3>Salad Cesar Ayam</h3>
                </Link>
                <p>Caesar Salad yang dilengkapi dengan sayur dan ayam</p>
              </div>
            </div>
            <div className="section-content">
              <div className="recipe-img">
                <img alt="thumbnail" src={Resep4} />
              </div>
              <div className="recipe-title-author">
                <Link to="/resep2">
                  <h3>Burrito Vegetarian</h3>
                </Link>
                <p>Makanan khas Meksiko berisi sayur-sayuran</p>
              </div>
            </div>
            <div className="section-content">
              <div className="recipe-img">
                <img alt="thumbnail" src={Resep5} />
              </div>
              <div className="recipe-title-author">
                <Link to="/resep2">
                  <h3>Samosa Vegetarian</h3>
                </Link>
                <p>Makanan khas India berisi sayur-sayuran</p>
              </div>
            </div>
            <div className="section-content">
              <div className="recipe-img">
                <img alt="thumbnail" src={Resep6} />
              </div>
              <div className="recipe-title-author">
                <Link to="/resep2">
                  <h3>Buncis Panggang Maroko</h3>
                </Link>
                <p>Buncis khas Meksiko berisi sayur-sayuran</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
