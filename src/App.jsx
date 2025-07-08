import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import Home from "./components/Home.jsx"
import Shop from "./components/Shop.jsx";
import Basket from "./components/Basket";
import ErrorPage from "./components/ErrorPage";
import getShopData from "./components/ShopData.jsx";

function App() {
  const [products, setProducts] = useState(null);
  const [basketTotal, setBasketTotal] = useState(0)

  useEffect(() => {
    console.log("Use effect occuring");
    getShopData().then((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (!products) return;
    let total = basketTotal
    products.map((item) => (total + item.quantity))
    setBasketTotal(total)
  }, [products, basketTotal]);
/*
  useEffect(() => {
    console.log("Use effect occuring");
    let total = basketTotal
    products.map((item) => (total + item.quantity))
    setBasketTotal(total)
  }, [products, basketTotal])
*/

  if (!products) {
    // You can return a spinner here if you want
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/basket">Basket ({basketTotal})</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home
            basketTotal={basketTotal}
          />} />
          <Route path="/shop" element={<Shop
            products={products} 
            setProducts={setProducts} 
            basketTotal={basketTotal}
            setBasketTotal={setBasketTotal}
          />} />
          <Route path="/basket" element={<Basket
            products={products} 
            setProducts={setProducts} 
            basketTotal={basketTotal}
            setBasketTotal={setBasketTotal} 
          />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;