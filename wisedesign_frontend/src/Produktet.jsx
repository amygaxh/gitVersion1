import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Navbar,
  Form,
  Button,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import IMG_6948 from "./images/IMG_6948.png";
import img1 from "./images/IMG_6949.jpg";
import img2 from "./images/IMG_6951.jpg";
import img3 from "./images/IMG_6952.jpg";
import img4 from "./images/IMG_6954.jpg";
import img5 from "./images/IMG_6955.jpg";
import img6 from "./images/IMG_6958.jpg";
import img7 from "./images/IMG_6959.jpg";
import img8 from "./images/IMG_6960.jpg";
import img9 from "./images/IMG_6961.jpg";
import cartIcon from "./images/cartIcon.png";

const Produktet = () => {
  const products = [
    {
      id: 1,
      title: "Kornizë Guri",
      description: "Një dekor unik dhe elegant për shtëpinë tuaj",
      img: img1,
      link: "/produktet/kornize-guri",
    },
    {
      id: 2,
      title: "Kasë telefoni",
      description: "Mbrojtje dhe stil në një produkt unik",
      img: img2,
      link: "/produktet/kase-telefoni",
    },
    {
      id: 3,
      title: "Stickers",
      description: "Detaji perfekt për një prezantim profesional",
      img: img3,
      link: "/produktet/stickers",
    },
    {
      id: 4,
      title: "Kartëvizita & Karta të ndryshme për biznes",
      description: "Profesionalizëm dhe elegancë në çdo detaj",
      img: img4,
      link: "/produktet/kartevizita",
    },
    {
      id: 5,
      title: "Varëse çelësash",
      description: "Një aksesor praktik me stil unik",
      img: img5,
      link: "/produktet/varese-celesash",
    },
    {
      id: 6,
      title: "Filxhanë",
      description: "Pija juaj e preferuar, me një prekje unike",
      img: img6,
      link: "/produktet/filxhane",
    },
    {
      id: 7,
      title: "Magnetë të personalizuar",
      description: "Kujtime dhe stil në çdo hapësirë",
      img: img7,
      link: "/produktet/magnete",
    },
    {
      id: 8,
      title: "Tote bags",
      description: "Praktike, ekologjike dhe me stil unik",
      img: img8,
      link: "/produktet/tote-bags",
    },
    {
      id: 9,
      title: "T-Shirt",
      description: "Komfort, stil dhe ndikim unik",
      img: img9,
      link: "/produktet/t-shirt",
    },
  ];

  return (
    <div>
      <Header />
      <Container className="mt-5">
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} md={4}>
              <Link
                to={product.link}
                className="text-decoration-none text-dark"
              >
                <Card className="h-100 shadow-sm text-center p-3 border-0">
                  <Card.Img
                    variant="top"
                    src={product.img}
                    alt={product.title}
                    style={{ maxWidth: "60px", margin: "auto" }}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
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

export default Produktet;
