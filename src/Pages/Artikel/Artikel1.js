import React, { Component } from "react";
import "./Artikel.css";
import Background from "../../Assets/image/makanansehat.jpg";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

export default class Artikel1 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header
          header={Background}
          title="CIRI-CIRI"
          titlegreen="MAKANAN SEHAT"
        />
        <div className="article-container">
          <div className="paragraph-container">
            <p>
              &nbsp;&nbsp;Banyak orang tidak terlalu memperhatikan seperti apa
              makanan sehat itu dan bagaimana ciri-cirinya. Kebanyakan orang
              pasti akan memilih makan atau minum apapun yang ia sukai tanpa
              melihat seberapa sehat makanan atau minuman tersebut. Ketika muda,
              memang makan apa saja menjadi hobi, tapi saat usia menua, akan
              muncul berbagai risiko kesehatan. Penting bagi kita untuk tahu
              seperti apa ciri-ciri makanan sehat yang tidak meracuni tubuh.
              Makanan yang baik adalah makanan yang penuh dengan nutrisi sebagai
              asupan yang memenuhi kebutuhan tubuh sehari-hari. Di bawah ini
              adalah ciri-ciri yang bisa Anda perhatikan untuk memulai gaya
              hidup sehat.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Mengandung Serat Yang Cukup</h4>
            <p>
              &nbsp;&nbsp;Gado-gado merupakan jenis makanan yang bisa kita
              masukkan dalam menu makanan sehari-hari. Mengkonsumsi lalapan dan
              sayuran yang dikukus juga baik untuk memenuhi kebutuhan serat Anda
              setiap hari. Untuk mendapatkan tambahan serat, biasakan
              mengkonsumsi buah yang kaya kandungan serat sehabis makan sebagai
              pencuci mulut. Serat berfungsi menjaga kesehatan pencernaan,
              mencapai berat badan normal, menurunkan kadar kolesterol, dan
              mengontrol kadar gula darah.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Mengandung Omega 3</h4>
            <p>
              &nbsp;&nbsp;Ikan sudah dikenal baik untuk otak. Di dalam ikan ada
              kandungan karotenoid yang berperan melindungi tubuh dari penyakit
              syaraf. Selain itu, kandungan Omega-3 dalam ikan tuna, salmon, dan
              sarden bisa menurunkan risiko terkena penyakit kronis dan memiliki
              umur panjang. Omega-3 yang ada pada ikan berlemak bisa membuat
              Anda tetap awet muda dan mengurangi peradangan penyebab penyakit,
              seperti alergi, alzheimer, kanker, serta penyakit jantung.
              Sebaiknya konsumsi ikan dua sampai tiga kali dalam seminggu.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline"> Non MSG dan Sedikit Garam</h4>
            <p>
              &nbsp;&nbsp;Makanan yang mengandung MSG memang memiliki rasa yang
              lebih gurih dan lezat. Namun, mengkonsumsi makanan dengan MSG
              kurang bagus untuk kesehatan jangka panjang. Maka dari itu,
              sebaiknya kita membatasi konsumsi makanan yang mengandung MSG,
              seperti makanan ringan buatan pabrik. Cermati juga makanan yang
              mengandung sodium karena merupakan jenis garam yang kurang bagus
              untuk penderita hipertensi.
            </p>
          </div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Sedikit Bahan Pengawet</h4>
            <p>
              &nbsp;&nbsp;Makanan kemasan buatan pabrik umumnya menggunakan
              bahan pengawet, termasuk kaldu instan. Bahan pengawet yang terlalu
              banyak tidak baik untuk kesehatan. Sebaiknya, Anda membatasi
              konsumsi makanan dengan bahan pengawet. Konsumsi makanan yang baru
              saja dimasak lebih baik daripada makanan cepat saji yang menjadi
              awet karena zat kimia tertentu.
            </p>
          </div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">
              Tidak Mengandung Minyak Jelantah
            </h4>
            <p>
              &nbsp;&nbsp;Minyak jelantah tidak sehat bagi tubuh kita. Sebab
              minyak jelantah mengandung banyak sekali kandungan kolesterol di
              dalamnya yang dapat memberikan dampak buruk bagi tubuh. Tidak
              hanya itu, minyak jelantah juga tidak boleh dipakai berulang kali
              sebab dapat menyebabkan kanker. Lebih baik kita mengganti minyak
              untuk memasak makanan dengan minyak zaitun atau minyak jagung.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="blank">&nbsp;</div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <p>
              Lima hal tersebut merupakan ciri-ciri makanan sehat. Yuk, sayangi
              tubuh kita dengan mengkonsumsi makanan sehat.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
