import React, { Component } from "react";
import "./Artikel.css";
import Background from "../../Assets/image/makanan.jpg";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

export default class Artikel4 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header
          header={Background}
          title="Manfaat Mengkonsumsi"
          titlegreen="Healthy Food"
        />
        <div className="article-container">
          <div className="paragraph-container">
            <h4 className="paragraph-headline">
              Membantu menurunkan & mempertahankan berat badan ideal
            </h4>
            <p>
              Buah, sayuran, protein tanpa lemak dan biji-bijian bermanfaat
              untuk menggantikan makanan tinggi lemak dan tinggi kalori sehingga
              membuat kenyang lebih lama.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">
              Mengurangi risiko penyakit jantung
            </h4>
            <p>
              Mengonsumsi lemak sehat dalam jumlah sedang seperti yang ditemukan
              dalam minyak zaitun, alpukat, ikan, kacang-kacangan, dan
              biji-bijian membantu melindungi jantung.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Membuat tulang dan gigi kuat</h4>
            <p>
              Diet dengan kalsium dan magnesium yang cukup diperlukan untuk
              tulang dan gigi yang kuat. Menjaga tulang tetap sehat sangat
              penting dalam mencegah osteoporosis dan osteoartritis di kemudian
              hari.
            </p>
          </div>

          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Menjaga kecantikan kulit</h4>
            <p>
              Tubuh yang ternutrisi dengan baik akan membuat kulit sehat dan
              halus, serta terlihat awet muda. Perbanyak buah, sayuran, dan asam
              Omega-3 dalam menu harian mu.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Mengontrol gula darah</h4>
            <p>
              Karbohidrat kompleks seperti roti gandum, oatmeal dan beras merah,
              menyebabkan pelepasan gula yang lambat ke dalam aliran darah, yang
              membantu mengatur gula darah.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Mendukung kesehatan otak</h4>
            <p>
              Makanan sehat dan bervariasi akan menyehatkan fungsi otak sehingga
              bisa meningkatkan kesehatan mental.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
