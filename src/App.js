import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero1 from "./../src/asset/g38559.png";
import Tentang from "./components/Tentang";
import Galeri from "./components/Card1";
import Footer from "./components/Footer";
import Kartu2 from "./components/Card2";
import Kartu3 from "./components/Card3";
import Kartu4 from "./components/Card4";
import g1 from "./../src/asset/karantina.jpg";
import g2 from "./../src/asset/mos.jpg";
import g3 from "./../src/asset/rihlah.jpg";
import g4 from "./../src/asset/kbm.jpg";
import Galeri2 from "./components/Galeri";
import Kartu1 from "./components/Card1";

function App() {
  return (
    <div>
      <Navigation />
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${Hero1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <Hero />
      </div>

      <div
        id="tentang"
        className="container"
        style={{
          marginTop: "80px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "100px",
        }}
      >
        <Tentang />
      </div>
      <div id="unit" style={{ marginTop: "50px" }}>
        <div className="container ">
          <h1 className="text-center mb-5">Unit-unit PPQ Al Mahir</h1>
          <div className="row gap-3 gap-lg-0 " style={{ margin: "30px" }}>
            <div className="col-12 col-lg-4">
              <Kartu1 />
            </div>
            <div className="col-12 col-lg-4">
              <Kartu2 />
            </div>
            <div className="col-12 col-lg-4">
              <Kartu3 />
            </div>
          </div>
          <div
            className="row gap-3 gap-lg-0 justify-content-center"
            style={{ margin: "30px" }}
          >
            <div className="col-12 col-lg-4">
              <Kartu4
                judul="Reguler Bahasa Arab"
                l1="Durusullughah"
                l2="Nahwu & Shorof"
                l3="Khusus Ikhwan"
                l4="Periode belajar 6 bulan"
              />
            </div>
            <div className="col-12 col-lg-4">
              <Kartu4
                judul="Kelas Tahfidz"
                l1="Setoran hafalan juz 1-3, & 28-30"
                l2="Pembelajaran sepekan 2x"
                l3="Periode belajar 6 bulan"
                l4="Target 6 bulan hafal 3 juz"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="galeri" style={{ marginTop: "80px" }}>
        <h1 className="text-center mb-5">Galeri PPQ IT Al Mahir</h1>
        <div className="container justify-content-center">
          <div
            className="row gap-3 gap-lg-0 justify-content-center"
            style={{ margin: "30px" }}
          >
            <div className="col-12 col-lg-4">
              <Galeri2
                g={g1}
                text="Karantina Bahasa Arab bersama Darul Lughoh"
              />
            </div>
            <div className="col-12 col-lg-4">
              <Galeri2 g={g2} text="Kegiatan MOS bersama bapak Paiman" />
            </div>
          </div>
          <div
            className="row gap-3 gap-lg-0 justify-content-center"
            style={{ margin: "30px" }}
          >
            <div className="col-12 col-lg-4">
              <Galeri2 g={g3} text="Rihlah ke Villa Santri" />
            </div>
            <div className="col-12 col-lg-4">
              <Galeri2 g={g4} text="KBM bersama Ustadz Alwi Hafidhulloh" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
