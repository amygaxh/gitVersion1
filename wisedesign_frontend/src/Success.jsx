import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Success() {
  const [status, setStatus] = useState('loading');  
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const cached = JSON.parse(localStorage.getItem('orderData') || '{}');
    if (!cached.cart || !cached.email) {
      setStatus('fail');
      return;
    }

    axios.post('/api/mail/order', cached)
      .then(res => {
        setOrderId(res.data.id);
        setStatus('ok');
        localStorage.removeItem('orderData');        
      })
      .catch(() => setStatus('fail'));
  }, []);

  if (status === 'loading') return <p>Duke finalizuar porosinë…</p>;
  if (status === 'fail')    return (
    <div>
      <h2>Dicka nuk shkoi mirë 😕</h2>
      <p>Porosia s’u konfirmua. Na kontakto në <a href="mailto:support@wisedesign.com">support@wisedesign.com</a>.</p>
      <Link to="/">Kthehu në faqe</Link>
    </div>
  );

  return (
    <div className="container py-5">
      <h2>Faleminderit! ✅</h2>
      <p>Porosia u pranua me sukses. Një e-mail konfirmimi u dërgua te adresa juaj.</p>
      <p><strong>ID e porosisë:</strong> {orderId}</p>
      <Link to="/">Kthehu në faqe</Link>
    </div>
  );
}