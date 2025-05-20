import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    photo: "",
    price: "",
  });

  const [uploadedImage, setUploadedImage] = useState(null);

 
  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewItem((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setNewItem((prev) => ({ ...prev, photo: file }));
    setUploadedImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(newItem).forEach(([key, value]) => formData.append(key, value));

    try {
      await axios.post("http://localhost:5000/create", formData);
      navigate("/readAll");
    } catch (err) {
      console.error("Error creating item:", err);
    }
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h1>Create Item</h1>

          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newItem.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newItem.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="photo">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="file"
                accept=".jpeg, .png, .jpg"
                name="photo"
                onChange={handlePhoto}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                min="0"
                step="0.01"
                name="price"
                value={newItem.price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <h1>Preview Image</h1>
          {uploadedImage && (
            <Image src={uploadedImage} alt="Preview" rounded className="img-fluid" />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Create;