import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "remixicon/fonts/remixicon.css";

const Kartu4 = (props) => {
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
            <h3 style={{ fontWeight: 800 }}>{props.judul}</h3>
          </Card.Title>
          <Card.Text>
            <ul className="d-flex flex-column gap-2">
              <li>{props.l1}</li>
              <li>{props.l2}</li>
              <li>{props.l3}</li>
              <li>{props.l4}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Kartu4;
