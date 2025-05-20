import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import IMG_6948 from "./images/IMG_6948.png";
import img1 from "./images/IMG_7320.jpg";
import img2 from "./images/IMG_7321.jpg";
import cartIcon from "./images/cartIcon.png";

const Rrethnesh = () => {
  return (
    <div>
      <Header />
      <Container className="mt-5">
        <Row className="align-items-center my-5">
          <Col md={6}>
            <h2>Rreth Nesh</h2>
            <p>
              Wise Design, themeluar në vitin 2024, është një studio krijuese e
              specializuar në personalizimin e produkteve unike. Ne ofrojmë një
              gamë të gjerë artikujsh, duke përfshirë stickers, kartëvizita,
              t-shirt, korniza guri, çakmakë dhe shumë më tepër. Me një kombinim
              të dizajnit modern dhe cilësisë së lartë, ne ndihmojmë klientët
              tanë të krijojnë produkte që pasqyrojnë stilin dhe identitetin e
              tyre.
            </p>
          </Col>
          <Col md={6}>
            <img src={img1} alt="Wise Design" className="img-fluid rounded" />
          </Col>
        </Row>

        <Row className="align-items-center my-5 flex-row-reverse">
          <Col md={6}>
            <h2>Zgjedhja Ideale për Bizneset dhe Individët</h2>
            <p>
              Qoftë për biznese që kërkojnë të promovojnë markën e tyre apo për
              individë që duan të bëjnë dhurata të personalizuara, Wise Design
              është zgjedhja ideale. Ne kujdesemi për çdo detaj, duke siguruar
              që çdo porosi të jetë e realizuar me profesionalizëm dhe
              kreativitet.
            </p>
          </Col>
          <Col md={6}>
            <img
              src={img2}
              alt="Shërbimet Wise Design"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src={IMG_6948} alt="Wise Design Logo" height="40" />
          Wise Design
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/rreth-nesh/">Rreth Nesh</Nav.Link>
            <Nav.Link href="/produktet/">Produktet</Nav.Link>
            <Nav.Link href="/kontakt/">Kontakt</Nav.Link>
          </Nav>
          <Form className="d-flex mx-3">
            <Form.Control
              type="search"
              placeholder="Search products"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Link to="/cart">
            <img src={cartIcon} alt="Cart" height="30" className="ms-3" />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const Footer = () => (
  <footer className="bg-body-tertiary py-3 mt-auto">
    <Container className="text-center">
      © 2025 WiseDesign ‑ Të gjitha të drejtat të rezervuara
    </Container>
  </footer>
);

export default Rrethnesh;
