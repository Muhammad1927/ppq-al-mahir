import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo1 from "./../asset/ppq-w.png";

const Navigation = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ backgroundColor: "royalblue", color: "white" }}
    >
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo1} style={{ width: "100%", height: "50px" }}></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-1 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#tentang">Tentang</Nav.Link>
            <Nav.Link href="#unit">Unit</Nav.Link>
            <Nav.Link href="#galeri">Galeri Kegiatan Unit</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
