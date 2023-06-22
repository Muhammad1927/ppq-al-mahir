import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "remixicon/fonts/remixicon.css";

const Kartu1 = (props) => {
  return (
    <div>
      <Card
        style={{
          border: "none",
          borderRadius: "30px",
          backgroundColor: "royalblue",
          color: "white",
        }}
      >
        <Card.Body>
          <Card.Title style={{ margin: "20px 0px" }}>
            <h3 style={{ fontWeight: 800 }}>TPA Al Mahir</h3>
          </Card.Title>
          <Card.Text>
            <ul className="d-flex flex-column gap-2">
              <li>Anak-anak usia 6-13 tahun</li>
              <li>
                Materi pokok : <br></br>
                {"  "}
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
                  <i class="ri-arrow-right-circle-fill"></i> Aqidah, Doa, Dzikir
                  & Adab Harian, Fiqih ibadah, siroh, bhs.Arab dasar,
                  hadits-hadits pilihan, kitabah / khot
                </p>
              </li>
              <li>Masa pendidikan 2 tahun</li>
              <li>Ujian & terima rapot setiap 1 semester (6 bulan)</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Kartu1;
