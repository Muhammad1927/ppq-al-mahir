import "remixicon/fonts/remixicon.css";

const Unitp = () => {
  return (
    <div>
      <h1>Unit - unit PPQ Al Mahir</h1>
      <div className="row gap-4 mt-5">
        <div
          className="col-12 col-lg-2"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: "40px",
            borderRadius: "30px",
            width: "30%",
            height: "20%",
          }}
        >
          <h5>TPA Al Mahir</h5>
          <ul>
            <li>Anak-anak usia 6-13 tahun</li>
            <li>
              Materi pokok : <br></br>{" "}
              <p>
                <i class="ri-arrow-right-circle-fill"></i> Karimah dasar &
                tahsin
              </p>
              <p>
                <i class="ri-arrow-right-circle-fill"></i> Tilawah Al-Qur'an
              </p>
              <p>
                <i class="ri-arrow-right-circle-fill"></i> Hafalan juz 30 juz
              </p>
            </li>
            <li>
              Materi Penunjang: <br></br>
              <p>
                <i class="ri-arrow-right-circle-fill"></i> Aqidah, Doa, Dzikir &
                Adab Harian, Fiqih ibadah, siroh, bhs.Arab dasar, hadits-hadits
                pilihan, kitabah / khot
              </p>
            </li>
            <li>Masa pendidikan 2 tahun</li>
            <li>Ujian & terima rapot setiap 1 semester (6 bulan)</li>
          </ul>
        </div>
        <div
          className="col-12 col-lg-2"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: "40px",
            borderRadius: "30px",
            width: "30%",
            height: "20%",
          }}
        >
          <h5>PPQ IT Al Mahir</h5>
          <ul>
            <li>Pondok IT setara STLA (khusus ikhwan)</li>
            <li>Karantina bhs.Arab & bhs.Inggris</li>
            <li>
              Materi diniyyah & tahfidz: <br></br>
              <p>
                <i class="ri-arrow-right-circle-fill"></i> Aqidah, Fiqih, siroh,
                imla' & khot, dll
              </p>
            </li>
            <li>Materi IT berbasis project (FrontEnd, BackEnd, Mobile)</li>
          </ul>
        </div>
        <div
          className="col-12 col-lg-2"
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: "40px",
            borderRadius: "30px",
            width: "30%",
            height: "20%",
          }}
        >
          <h5>Reguler Tahsin</h5>
          <ul>
            <li>Tersedia kelas privat maupun reguler</li>
            <li>Tersedia kelas ikhwan ataupun akhwat</li>
            <li>Menggunakan metode karimah</li>
            <li>
              Dibimbing langsung oleh Asatidzah yang telah terlatih mengajarkan
              metode Karimah
            </li>
            <li>3 bulan masa belajar</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Unitp;
