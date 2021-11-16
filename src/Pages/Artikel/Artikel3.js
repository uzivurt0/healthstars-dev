import React, { Component } from "react";
import "./Artikel.css";
import Background from "../../Assets/image/sayur.jpg";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

export default class Artikel3 extends Component {
  render() {
    return (
      <>
        <Header
          header={Background}
          title="Pilihan Metode"
          titlegreen="Memasak Sayur"
        />
        <div className="article-container">
          <div className="paragraph-container">
            <p>
              &nbsp;&nbsp;Metode atau cara memasak juga menentukan banyaknya zat
              gizi yang hilang. Setiap jenis hidangan mempunyai cara memasak
              tersendiri, tapi ada baiknya Anda memilih cara yang mempertahankan
              lebih banyak kandungan gizi sayuran.
              <br />
              &nbsp;&nbsp;Dengan memilih cara memasak sayuran yang tepat, Anda
              bisa mendapatkan zat gizi dalam jumlah yang optimal. Di bawah ini
              beberapa metode terbaik untuk memasak sayur-mayur.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Mengukus</h4>
            <p>
              &nbsp;&nbsp;Ini merupakan cara memasak sayuran yang paling baik,
              khususnya untuk sayuran yang mengandung vitamin larut air. Teknik
              memasak dengan cara mengukus tidak memakai banyak air sehingga
              vitamin B kompleks dan vitamin C tidak akan banyak larut. Selain
              itu, teknik mengukus menghasilkan panas sedang. Suhu ini tidak
              menyebabkan gosong, tidak banyak merusak vitamin, dan tidak
              menghilangkan banyak cairan. Teknik ini cocok untuk memasak
              wortel, kembang kol, dan sayuran berdaun hijau lainnya.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Memanggang</h4>
            <p>
              &nbsp;&nbsp;Teknik memasak yang satu ini bisa mempertahankan
              warna, rasa, dan bentuk sayuran. Bahkan, teknik memanggang juga
              lebih sehat dibandingkan teknik lainnya. Sayuran untuk dipanggang
              sebaiknya bertekstur cukup padat, seperti asparagus, labu, buncis,
              wortel, atau bawang bombai. Olesi sayuran dengan minyak, lalu
              panggang di atas bara api hingga matang. Jangan lupa, sisihkan
              bagian sayuran yang hangus.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Menumis</h4>
            <p>
              &nbsp;&nbsp;Teknik memasak yang satu ini cocok untuk Anda yang
              tidak suka sayuran. Menumis menggunakan sedikit minyak serta
              bumbu-bumbu yang akan membuat sayuran terasa lebih gurih. Teknik
              ini juga bisa mempertahankan warna, rasa, dan nilai gizi sayuran.
              Hampir semua jenis sayuran bisa Anda tumis. Akan tetapi, hati-hati
              jika Anda menumis sayuran berdaun hijau. Sayuran berdaun lebih
              cepat layu, jadi tumislah sebentar saja untuk mempertahankan
              teksturnya.
            </p>
          </div>

          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Merebus</h4>
            <p>
              &nbsp;&nbsp;Ini termasuk cara memasak sayuran paling umum. Teknik
              merebus tergolong mudah, cepat, dan serbaguna. Anda pun bisa
              menggunakan teknik ini untuk mengolah berbagai jenis sayuran,
              mulai dari yang berbentuk umbi hingga dedaunan. Namun, teknik
              merebus memiliki satu kekurangan. Anda akan menggunakan banyak air
              dan suhu tinggi yang konstan. Padahal, suhu tinggi dapat merusak
              kualitas vitamin dan air bisa melarutkannya. Alhasil, kandungan
              gizi sayuran lebih banyak berkurang.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">
              Memasak dengan <i className="color-dark-green">microwave</i>
            </h4>
            <p>
              &nbsp;&nbsp;Microwave tidak hanya berguna untuk memanaskan sisa
              makanan, tapi juga memasak sayuran. Walaupun microwave memiliki
              suhu tinggi, waktu memasak dengan alat ini biasanya lebih singkat
              sehingga tidak banyak zat gizi yang terbuang.Beberapa penelitian
              menemukan bahwa memasak dengan microwave merupakan cara terbaik
              untuk mempertahankan kandungan antioksidan dan vitamin.
              Dibandingkan cara lain, jumlah vitamin yang hilang umumnya tidak
              lebih dari 20 – 30%.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <p>
              Ada berbagai cara memasak sayuran, tetapi banyak diantaranya
              justru menghilangkan zat gizi penting. Jika selama ini Anda
              mengolah sayur dengan cara yang salah, inilah saatnya mengubah
              kebiasaan demi mendapatkan asupan zat gizi yang optimal.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
