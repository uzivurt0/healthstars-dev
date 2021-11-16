import React, { Component } from "react";
import "./Artikel.css";
import Background from "../../Assets/image/waktumakan.jpg";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

export default class Artikel2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header
          header={Background}
          title="Waktu Makan yang Baik"
          titlegreen=" untuk Kesehatan Tubuh"
        />
        <div className="article-container">
          <div className="paragraph-container">
            <p>
              &nbsp;&nbsp;Ada banyak dari kita yang tidak terlalu memperdulikan
              waktu makan sehari-hari yang baik untuk tubuh dengan berbagai
              alasan. Kebanyakan orang memakai alasan sibuk dan jadwal yang
              padat sehingga tidak sempat mengatur waktu makan dengan baik.
              Banyak yang beranggapan bahwa perut terisi dan tubuh tetap sehat
              sudah cukup. Padahal waktu makan yang kacau dalam jangka waktu
              lama bisa membawa dampak yang buruk bagi kesehatan karena
              merupakan gaya hidup yang tidak sehat. <br />
              &nbsp;&nbsp;Banyak orang terbiasa secara sengaja menunda waktu
              makan walau perut telah mengeluarkan sinyal lapar dengan alasan
              tanggung karena sedang bekerja dan pekerjaan belum selesai.
              Sebelum efeknya memperburuk kesehatan Anda, mulailah mencari tahu
              waktu makan yang baik dan terapkan di kehidupan sehari-hari.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Makan Pagi</h4>
            <p>
              &nbsp;&nbsp;Waktu untuk sarapan yang ideal adalah pukul
              07.00-08.00. Alasannya adalah tubuh telah beristirahat cukup
              panjang setelah makan malam. Oleh karena itu, Anda perlu bahan
              bakar untuk memulai hari. Lalu bagaimana jika Anda bangun siang?
              Pastikan bahwa Anda sarapan sebelum pukul 10.00. Jika lewat dari
              jam itu, maka hal ini akan mempengaruhi tingkat nafsu makan Anda
              pada waktu makan siang. Selain itu, selalu ingatlah aturan dasar
              bahwa makan pertama di pagi hari seharusnya berjarak 1,5 jam
              setelah Anda bangun tidur.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Makan Siang</h4>
            <p>
              &nbsp;&nbsp;Waktu yang disarankan untuk melakukan aktivitas makan
              siang sekitar pukul 12.30 – 14.00 dan berhenti sebelum pukul
              16.00. Namun perlu diingat, jarak ideal sarapan dan makan siang
              adalah 4 jam. Jadi, kalau Anda sarapan pada pukul 09.00, pastikan
              kamu sudah mulai makan siang pada pukul 13.00. Selain itu,
              pastikan juga makan siangmu terdiri dari menu-menu makanan sehat
              yang mengandung nutrisi lengkap, seperti ayam, tumis jamur, roti,
              atau biji-bijian agar tubuh senantiasa sehat dan tetap berenergi.
              Akhiri makan siang Anda dengan 200 gram kentang rebus.
            </p>
          </div>
          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Makan Malam</h4>
            <p>
              &nbsp;&nbsp;Memakan makan malam paling ideal adalah pada pukul
              18.00 hingga 21.00. Jangan mengkonsumsi makan malam lebih dari
              pukul 22.00. Penting untuk diingat bahwa beri jeda makan malam 3
              hingga 4 jam sebelum jam tidur Anda. Makan dengan waktu yang dekat
              dengan jam tidur dapat mengganggu kualitas tidur Anda. Menambahkan
              menu selingan atau snack pada jeda makan siang dan makan malam
              dapat Anda lakukan juga.
            </p>
          </div>

          <div className="blank">&nbsp;</div>
          <div className="paragraph-container">
            <p>
              Yuk, sayangi tubuh kita dengan pola makan yang baik dan benar.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
