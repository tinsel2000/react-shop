import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react'
import Home from "./components/Home.jsx"
import HomeWelcome from "./components/HomeWelcome.jsx"
import Shop from "./components/Shop.jsx";
import Basket from "./components/Basket";
import ErrorPage from "./components/ErrorPage";
import getShopData from "./components/ShopData.jsx";

function App() {
  const [products, setProducts] = useState([
      {title: "first product", rating: {rate: 5}},
      {title: "second product", rating: {rate: 5}}
    ]);
  const [basketTotal, setBasketTotal] = useState(0)

    useEffect(() => {
      getShopData().then((data) => {
        setProducts(data);
      });
    }, [setProducts]);

    useEffect(() => {
      let total = basketTotal
      products.map((item) => (total + item.quantity))
      setBasketTotal(total)
    }, [products, basketTotal])

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Home 
            basketTotal={basketTotal}/>}
        >
          <Route index element={<HomeWelcome basketTotal={basketTotal} />} />
          <Route 
            path="shop" 
            element={<Shop 
              products={products} 
              setProducts={setProducts} 
              basketTotal={basketTotal}
              setBasketTotal={setBasketTotal} 
            />}
          />
          <Route 
            path="basket" 
            element={<Basket 
              products={products} 
              setProducts={setProducts} 
              basketTotal={basketTotal}
              setBasketTotal={setBasketTotal} 
            />} 
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App
