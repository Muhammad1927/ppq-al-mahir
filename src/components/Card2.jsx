import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "remixicon/fonts/remixicon.css";

const Kartu2 = (props) => {
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
            <h3 style={{ fontWeight: 800 }}>PPQ IT Al Mahir</h3>
          </Card.Title>
          <Card.Text>
            <ul className="d-flex flex-column gap-2">
              <li>Pondok IT setara STLA (khusus ikhwan)</li>
              <li>Karantina bhs.Arab & bhs.Inggris</li>
              <li>
                Materi diniyyah & tahfidz: <br></br>
                <p>
                  <i class="ri-arrow-right-circle-fill"></i> Aqidah, Fiqih,
                  siroh, imla' & khot, dll
                </p>
              </li>
              <li>Materi IT berbasis project (FrontEnd, BackEnd, Mobile)</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Kartu2;
