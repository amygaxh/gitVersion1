import React, { useState } from "react";
import { Nav, Navbar, Form, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import IMG_6948 from "./images/IMG_6948.png";
import cartIcon from "./images/cartIcon.png";

const CheckoutPage = ({ cart = [] }) => {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    street: "",
    apartment: "",
    postalCode: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    image: null,
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setFormData({ ...formData, image: e.target.files[0] });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order (only local for now):", formData);
  };

  const handlePay = async () => {
    try {
      const { data } = await axios.post(
        "/api/pay/create-checkout-session",
        { cart },
        { withCredentials: true } 
      );
      window.location = data.url; 
    } catch (err) {
      console.error(err);
      alert("Diçka nuk shkoi mirë gjatë hapjes së pagesës.");
    }
      localStorage.setItem('orderData', JSON.stringify({
    cart,
    total : cart.reduce((s,i) => s + i.price*i.qty, 0),
    email : formData.email
  }));
  
  const { data } = await axios.post('/api/pay/create-checkout-session', { cart });
  window.location = data.url;
  };


  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <Container className="py-5 flex-grow-1">
        <h2 className="mb-4">Checkout</h2>

        <form onSubmit={handleSubmit} className="row g-3">
          <input
            name="name"
            placeholder="Emri"
            className="form-control"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            name="surname"
            placeholder="Mbiemri"
            className="form-control"
            onChange={handleChange}
            value={formData.surname}
            required
          />
          <input
            name="street"
            placeholder="Rruga"
            className="form-control"
            onChange={handleChange}
            value={formData.street}
            required
          />
          <input
            name="apartment"
            placeholder="Numri i apartamentit"
            className="form-control"
            onChange={handleChange}
            value={formData.apartment}
            required
          />
          <input
            name="postalCode"
            placeholder="Kodi postar"
            className="form-control"
            onChange={handleChange}
            value={formData.postalCode}
            required
          />
          <input
            name="city"
            placeholder="Qyteti"
            className="form-control"
            onChange={handleChange}
            value={formData.city}
            required
          />
          <input
            name="country"
            placeholder="Shteti"
            className="form-control"
            onChange={handleChange}
            value={formData.country}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Numri i telefonit"
            className="form-control"
            onChange={handleChange}
            value={formData.phone}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="form-control"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="file"
            accept="image/*"
            name="image"
            className="form-control"
            onChange={handleFileChange}
          />

          <textarea
            name="message"
            placeholder="Mesazhi juaj (opsional)"
            className="form-control"
            onChange={handleChange}
            value={formData.message}
            rows="4"
          />

          <Button type="button" onClick={handlePay} variant="primary">
              Paguaj
            </Button>
        </form>
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

export default CheckoutPage;