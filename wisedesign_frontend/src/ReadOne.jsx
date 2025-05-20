import React, {useState, useEffect} from "react";
import {Container, Row, Col, Button, Image } from "react-bootstrap";
import {useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const DetailItem = () => {
const { id } = useParams();
const nav = useNavigate();
const [item, setItem] = useState({});
useEffect(() => {
const getData = async () => {
await axios.get(`http://localhost:5000/readOne/${id}`)
.then((res) => {
console.log(res.data);
setItem(res.data);
})
.catch((err) => {
console.log("Data not showing " + err);
});};
getData();},
[id]);
const handleDelete = async (id) => {
await axios.delete(`http://localhost:5000/delete/${id}`)
.then(() => {
nav("/");
})
.catch((err) => {
console.log("Data not deleted " + err);
});
};
return (
<Container className="my-5">
<Row>
<Col xs={12} md={6}>
<h1>Data</h1>
<h2>{item.name}</h2>
<p>{item.description}</p>
<div className="d-grid gap-2 d-md-block">
<Button variant="warning" className='me-3'
href={`/update/${item._id}`}>Update</Button>
<Button variant="danger" onClick={() => handleDelete(item._id)}>Delete</Button>
</div>
</Col>
<Col xs={12} md={6}>
<h1>Image</h1>
<Image
src={`http://localhost:5000/images/${item.photo}`}
alt='Uploaded'
rounded
className='img-fluid'
/>
</Col>
</Row>
</Container>
);
};
export default DetailItem;