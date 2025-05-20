import React, { useState } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import IMG_6948 from "./images/IMG_6948.png";
import cartIcon from "./images/cartIcon.png";
import axios from "axios";
import {Link} from "react-router-dom";

const Kontakt = () => {
  return (
    <div>
      <Header />
      <ContactForm />
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

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/contact", form);
    alert("Mesazhi u dërgua me sukses!");
    setForm({
      name: "",
      surname: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Dërgo</button>
    </form>
  );
}
