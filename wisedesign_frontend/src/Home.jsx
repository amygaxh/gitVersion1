import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Carousel,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import IMG_6948 from "./images/IMG_6948.png";
import IMG_7175 from "./images/IMG_7175.jpg";
import IMG_7176 from "./images/IMG_7176.jpg";
import IMG_7177 from "./images/IMG_7177.jpg";
import cartIcon from "./images/cartIcon.png";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel className="home-carousel">
        <Carousel.Item>
          <img src={IMG_7175} alt="First slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Dizajn që Frymëzon</h3>
            <p>
              Zbuloni koleksionin tonë më të ri — produkte & aksesorë që sjellin
              stil dhe funksionalitet në çdo hapësirë.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={IMG_7176} alt="Second slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Krijuar për ty</h3>
            <p>
              Çdo produkt WiseDesign personalizohet sipas shijeve dhe nevojave
              tuaja, nga materiali te ngjyrat dhe përmasat.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={IMG_7177} alt="Third slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Qëndrueshmëri & Elegancë</h3>
            <p>
              Përdorim materiale miqësore me mjedisin për një estetikë që zgjat
              në kohë pa kompromis në cilësi.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <FindUs/>
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

function FindUs() {
  return (
    <section className="find-us container my-5">
      <h4 className="find-us__title">Dëshironi të dini më tepër për gamën e produkteve tona?</h4>

      <div className="find-us__row">
        <iframe
          title="Mapa Wise Design"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5712668790175!2d19.814129700000002!3d41.31818959999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350312ad8221d51%3A0x7bc4b628bde8a5c1!2sVALERIO%20(Punime%20kashte)!5e0!3m2!1sen!2sat!4v1747693782912!5m2!1sen!2sat"
          className="find-us__map"
          allowFullScreen
        ></iframe>

        <address className="find-us__card shadow">
          <p>
            <strong>Adresa:</strong>
            <br />
            Rruga Sulejman Delvina 9, Tiranë
          </p>
          <p>
            <strong>Numri i telefonit:</strong>
            <br />
            +355 69 478 3121
          </p>
          <p>
            <strong>Email:</strong>
            <br />
            <a href="mailto:info@wisedesign.al">info@wisedesign.al</a>
          </p>
        </address>
      </div>
    </section>
  );
}

const Footer = () => (
  <footer className="bg-body-tertiary py-3 mt-auto">
    <Container className="text-center">
      © 2025 WiseDesign ‑ Të gjitha të drejtat të rezervuara
    </Container>
  </footer>
);

export default Home;
