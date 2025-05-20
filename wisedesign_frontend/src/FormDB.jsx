import { useState } from 'react';
import axios from 'axios';

export default function ProductForm({ onSuccess }) {
  const [values, setValues] = useState({
    name: '', price: '', image: '', description: ''
  });

  const handleChange = e =>
    setValues(v => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('/api/products', values);
    onSuccess?.();
    setValues({ name:'', price:'', image:'', description:'' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Emri" onChange={handleChange} value={values.name}/>
      <input name="price" type="number" placeholder="Çmimi" onChange={handleChange} value={values.price}/>
      <input name="image" placeholder="URL foto" onChange={handleChange} value={values.image}/>
      <textarea name="description" placeholder="Përshkrimi" onChange={handleChange} value={values.description}/>
      <button type="submit">Ruaj</button>
    </form>
  );
}