import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "remixicon/fonts/remixicon.css";

const Kartu3 = (props) => {
  return (
    <div>
      <Card
        style={{
          backgroundColor: "royalblue",
          color: "white",
          border: "none",
          borderRadius: "30px",
          minHeight: "530px",
        }}
      >
        <Card.Body>
          <Card.Title style={{ margin: "20px 0px" }}>
            <h3 style={{ fontWeight: 800 }}>Reguler Tahsin</h3>
          </Card.Title>
          <Card.Text>
            <ul className="d-flex flex-column gap-2">
              <li>Tersedia kelas privat maupun reguler</li>
              <li>Tersedia kelas ikhwan ataupun akhwat</li>
              <li>Menggunakan metode karimah</li>
              <li>
                Dibimbing langsung oleh Asatidzah yang telah terlatih
                mengajarkan metode Karimah
              </li>
              <li>3 bulan masa belajar</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Kartu3;
