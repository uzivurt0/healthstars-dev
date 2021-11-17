import { Component } from "react";
import "../Artikel/Artikel.css";
import Background from "../../Assets/image/nasigoreng.jpg";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default class Resep1 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header
          header={Background}
          title="Nasi Goreng"
          titlegreen="Vegetarian Vietnam"
        />
        <div className="article-container">
          <div className="paragraph-container">
            <h4 className="paragraph-headline">Bahan-Bahan</h4>
            <p>
              <ul>
                <li>1 sdm minyak sayur</li>
                <li>25g kacang polong beku</li>
                <li>1/2 wortel, iris kecil-kecil</li>
                <li>1/2 bawang bombay, iris</li>
                <li>1/2 paprika hijau, potong dadu </li>
                <li>4-6 jamur, iris </li>
                <li>1 butir telur, kocok lepas</li>
                <li>250g, beras bulir panjang, rebus </li>
                <li>1 sdt garam, atau sesuai selera </li>
                <li>2 sdm kecap asin </li>
                <li>1 sdt minyak wijen</li>
                <li>Daun bawang, iris (opsional)</li>
                <li>Lada putih, secukupnya</li>
              </ul>
            </p>
            <h4 className="paragraph-headline">Persiapan</h4>
            <p>
              <ol className="how-to">
                <li>
                  Siapkan nasi. lihat resep nasi goreng kami. Biarkan nasi
                  dingin karena lebih mudah diatur saat didinginkan. Saat siap
                  untuk menggoreng, haluskan nasi dingin dengan garpu sebelum
                  menggoreng.
                </li>
                <li>Iris atau potong dadu sayuran</li>
              </ol>
            </p>
            <h4 className="paragraph-headline">Proses Memasak</h4>
            <p>
              <ol className="how-to">
                <li>
                  Panaskan minyak dalam wajan, dengan api besar hingga panas.
                </li>
                <li>
                  Tambahkan bawang bombay, wortel, dan paprika hijau, lalu
                  goreng sebentar. Kemudian masukkan jamur dan kacang polong.
                  Goreng selama 2-3 menit lagi. Setelah selesai, letakkan
                  sayuran di piring dan taruh di satu sisi.
                </li>
                <li>
                  Selanjutnya, tuangkan telur kocok ke dalam wajan, aduk terus.
                  Saat telur telah matang sedikit menjadi orak-arik (sekitar
                  satu atau dua menit) tambahkan nasi rebus dan goreng selama
                  tiga menit.
                </li>
                <li>
                  Sekarang tambahkan sayuran kembali ke wajan dan masukkan ke
                  dalam nasi. Terakhir tambahkan garam, kecap asin, dan minyak
                  wijen, lalu goreng lagi selama dua menit. Menyajikan.
                </li>
                <li>
                  Untuk hiasan tambahan, tambahkan 1 ikat daun bawang cincang.
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
