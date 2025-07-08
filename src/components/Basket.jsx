import { useState, useEffect } from 'react'

const Basket = ({products, setProducts, basketTotal, setBasketTotal}) => {
  console.log("Basket rendered");
  const [basketItems, setBasketItems] = useState([])

    useEffect(() => {
    setBasketItems(products.filter(item => item.quantity > 0));
  }, [products]);

  const handleRemoveBasketItem = (e) => {
    e.preventDefault();
    let formQuantityValue = 0;
    let arrayIndex = Number(e.target.parentNode.id) - 1
    let updatedProducts = [...products];
    let updatedProduct = {...updatedProducts[arrayIndex]};
    if (basketTotal >= Number(updatedProduct.quantity)) {
      setBasketTotal(basketTotal - Number(updatedProduct.quantity) )
    }
    updatedProduct.quantity = formQuantityValue
    updatedProducts[arrayIndex] = updatedProduct
    setProducts(updatedProducts);
    setBasketItems(products.filter(item => item.quantity > 0) );
  }

  return (
    <>
      <p>Here are the items currently in your basket</p>
      <ul>
        {basketItems.length === 0 ? (
          <li>Basket is empty</li>
        ) : (
          basketItems.map((item) => (
            <li key={item.id} data-key={item.id} id={item.id}>
              <img className="productImage" src={item.image}></img>
              <div className="title">Title: {item.title}</div>
              <div className="price">Price: £{item.price}</div>
              <div className="category">Category: {item.category}</div>
              <div className="count">Count: {item.quantity}</div>
              <button className="remove-item" onClick={handleRemoveBasketItem}>Remove Item</button>
            </li>
          ))
        )
        }
      </ul>
    </>
  );
};

export default Basket;
