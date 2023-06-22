import Card from "react-bootstrap/Card";
const Galeri2 = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.g} />
      <Card.Body>
        <Card.Title>{props.text}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Galeri2;
