import { Component } from "react";
import "../Artikel/Artikel.css";
import Background from "../../Assets/image/bibimbap.jpg";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default class Resep2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header header={Background} title="Bibimbap" titlegreen="Vegetarian" />
        <div className="article-container">
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Bahan-Bahan</h4>
            <p>
              Untuk Nasi :
              <ul>
                <li>2 cangkir nasi gandum sedang</li>
                <li>sendok teh garam</li>
              </ul>
              Untuk Wortel :
              <ul>
                <li>cangkir cuka beras</li>
                <li>2 sendok teh gula</li>
                <li>sedikit garam </li>
                <li>2 wortel sedang, dipotong-potong</li>
              </ul>
              Untuk Tahu :
              <ul>
                <li>cangkir kecap asin</li>
                <li>cangkir gula merah kemasan </li>
                <li>2 sendok teh cuka beras </li>
                <li>1 sendok teh minyak wijen </li>
                <li>1 sendok teh gochujang</li>
                <li>1 (14 ons) paket tahu ekstra keras</li>
                <li>1 sendok makan minyak</li>
                <li>2 siung bawang putih, cincang</li>
                <li>1 (1 inci) potong jahe, cincang</li>
              </ul>
              Untuk Jamur dan Bayam :
              <ul>
                <li>4 sendok teh minyak, dibagi</li>
                <li>10 ons jamur shiitake, iris tipis </li>
                <li>2 siung bawang putih, cincang </li>
                <li>1 (10 ons) paket bayam </li>
                <li>garam</li>
                <li>lada</li>
              </ul>
              Untuk Perakitan :
              <ul>
                <li>1 cangkir kimchi</li>
                <li>Mentimun Inggris, dipotong-potong</li>
                <li>
                  3 daun bawang, potong sepanjang 2 inci dan iris tipis secara
                  vertikal (bagian hijau saja){" "}
                </li>
                <li>biji wijen</li>
                <li>saus gochujjang</li>
                <li>4 butir telor goreng</li>
              </ul>
            </p>
            <h4 className="paragraph-headline">Proses Memasak</h4>
            <p>
              Siapkan Nasi :
              <ol className="how-to">
                <li>
                  Tempatkan beras di saringan mesh halus, lalu bilas di bawah
                  air mengalir sampai air sebagian besar jernih. Tiriskan dengan
                  baik.
                </li>
                <li>
                  Campurkan beras, garam, dan 3 gelas air dalam panci bagian
                  bawah yang berat dan sedang. Tempatkan di atas api besar dan
                  didihkan.
                </li>
                <li>
                  Saat air mendidih, kecilkan api menjadi rendah dan tutup.
                  Masak selama 15 menit atau sampai air meresap dan nasi empuk.
                  Angkat dari api dan sisihkan tanpa gangguan sampai siap
                  digunakan.
                </li>
              </ol>
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
