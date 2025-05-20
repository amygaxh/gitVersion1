import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./RrethNesh";
import Kontakto from "./Kontakto";
import Produktet from "./Produktet";
import Produkti1 from "./Produkti1";
import Produkti2 from "./Produkti2";
import Produkti3 from "./Produkti3";
import Produkti4 from "./Produkti4";
import Produkti5 from "./Produkti5";
import Produkti6 from "./Produkti6";
import Produkti7 from "./Produkti7";
import Produkti8 from "./Produkti8";
import Produkti9 from "./Produkti9";
import CheckoutPage from "./Checkout";
import Shporta from "./Shporta";
import ReadAll from "./ReadAll";
import ReadOne from "./ReadOne";
import Create from "./Create";
import Update from "./Update";
import NotFound from "./NotFound";
import Success from ".//Success";

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rreth-nesh/" element={<About />} />
        <Route path="/produktet/" element={<Produktet />} />
        <Route path="/kontakt/" element={<Kontakto />} />
        <Route
          path="/produktet/kornize-guri/"
          element={<Produkti1 addToCart={addToCart} />}
        />
        <Route
          path="/produktet/kase-telefoni/"
          element={<Produkti2 addToCart={addToCart} />}
        />
        <Route
          path="/produktet/stickers/"
          element={<Produkti3 addToCart={addToCart} />}
        />
        <Route
          path="/produktet/kartevizita/"
          element={<Produkti4 addToCart={addToCart} />}
        />
        <Route
          path="/produktet/varese-celesash/"
          element={<Produkti5 addToCart={addToCart} />}
        />
        <Route
          path="/produktet/filxhane/"
          element={<Produkti6 addToCart={addToCart} />}
        />
        <Route
          path="/produktet/magnete/"
          element={<Produkti7 addToCart={addToCart} />}
        />
        <Route
          path="/produktet/tote-bags/"
          element={<Produkti8 addToCart={addToCart} />}
        />
        <Route
          path="/produktet/t-shirt/"
          element={<Produkti9 addToCart={addToCart} />}
        />
        <Route
          path="/shporta"
          element={
            <Shporta
              cart={cart}
              setCart={setCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/readAll" element={<ReadAll />} />
        <Route path="/readOne/:id" element={<ReadOne />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/success/" element={<Success />} />
      </Routes>
    </div>
  );
};

export default App;
