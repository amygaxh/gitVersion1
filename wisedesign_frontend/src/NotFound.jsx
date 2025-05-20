import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const NotFound = () => (
  <Container className="text-center py-5">
    
    <h1 className="display-4 fw-bold">404</h1>
    <p className="lead mb-4">Ups! Faqja që kërkoni nuk u gjet.</p>

    <Button as={Link} to="/" variant="primary">
      Kthehu në faqen kryesore.
    </Button>
  </Container>
);

export default NotFound;