import React from "react";
import { Container, Row, Col, Carousel, Button, Navbar, Nav, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import IMG_6948 from "./images/IMG_6948.png";
import img1 from "./images/IMG_7284.jpg";
import img2 from "./images/IMG_7277.jpg";
import img3 from "./images/IMG_6958.jpg";
import {Link} from 'react-router-dom';
import cartIcon from "./images/cartIcon.png";

const Produkti6 = ({ addToCart }) => {
  const product = {
    id: 6,
    name: "Filxhanë",
    price: 10, 
    image: {img1},
  };

  return (
    <div>
      <Header />
      <Container className="mt-5">
        <h2 className="text-center mb-4">{product.name}</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={img1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6}>
            <p>Personalizo filxhanët me emrin, logon, një mesazh të veçantë ose dizajn kreativ. Ideale për përdorim personal, dhurata të veçanta apo promovimin e biznesit tuaj. Cilësi e lartë dhe stil unik për çdo mëngjes të këndshëm! 🎁🔥</p>
            <p><strong>Çmimi: {product.price}€</strong></p>
            <Button variant="primary" onClick={() => addToCart(product)}>
              Shto në shportë
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer/>
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
              aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Link to="/cart">
            <img
              src={cartIcon} 
              alt="Cart"
              height="30"
              className="ms-3"
            />
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

export default Produkti6;
