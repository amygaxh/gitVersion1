import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Image } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateItem = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const [updateItem, setUpdateItem] = useState({
    name: '',
    description: '',
    photo: '',     
    price: '',
  });

  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/readOne/${id}`);
        const { name = '', description = '', photo = '', price = '' } = data;

        setUpdateItem({ name, description, photo, price });
      } catch (err) {
        console.error('Could not load item:', err);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdateItem((prev) => ({
      ...prev,
      [name]: name === 'price' ? Number(value) : value,
    }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUpdateItem((prev) => ({ ...prev, photo: file }));
    setUploadedImage(URL.createObjectURL(file));
  };

  /* ───────────────────────────────────────────────
   *  Submit
   * ─────────────────────────────────────────────── */
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(updateItem).forEach(([key, value]) => {
      if (key === 'photo' && value instanceof File) {
        formData.append('photo', value);
      } else {
        formData.append(key, value);
      }
    });

    try {
      await axios.patch(`http://localhost:5000/update/${id}`, formData);
      nav('/readAll');
    } catch (err) {
      console.error('Update failed:', err);
    }
  };


  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h1>Update Item</h1>

          <Form onSubmit={handleUpdate} encType="multipart/form-data">
            <Form.Group className="mb-3" controlId="nameItem">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={updateItem.name}
                name="name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="textItem">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={updateItem.description}
                name="description"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ImageItem">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="file"
                accept=".jpeg, .png, .jpg"
                onChange={handlePhoto}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="priceItem">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                min="0"
                step="0.01"
                value={updateItem.price}
                name="price"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="warning" type="submit">
              Update
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <h1>Preview Image</h1>
          <Image
            src={
              uploadedImage ||
              (updateItem.photo instanceof File
                ? uploadedImage
                : `http://localhost:5000/images/${updateItem.photo}`)
            }
            alt="Preview"
            rounded
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default UpdateItem;