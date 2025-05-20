import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Nav,Navbar, Button,   Form } from "react-bootstrap"; 
import cartIcon from "./images/cartIcon.png";
import IMG_6948 from "./images/IMG_6948.png";

const Shporta = ({ cart, setCart, removeFromCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Header />
      <Container className="mt-5">
        <h2>Shporta juaj e blerjeve</h2>
        {cart.length === 0 ? (
          <p>Shporta juaj është bosh.</p>
        ) : (
          cart.map((item) => (
            <Row key={item.id} className="mb-3">
              <Col md={2}>
                <img src={item.image} alt={item.name} className="img-fluid" />
              </Col>
              <Col md={6}>
                <p>{item.name}</p>
                <p>{item.quantity} x {item.price}€ </p>
              </Col>
              <Col md={4}>
                <button onClick={() => removeFromCart(item.id)}>Hiq nga shporta</button>
              </Col>
            </Row>
          ))
        )}
        <h3>Totali: €{totalPrice}</h3>
        <Link to="/checkout">
          <Button variant="success">Vazhdoni me checkout</Button>
        </Link>
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

export default Shporta;

