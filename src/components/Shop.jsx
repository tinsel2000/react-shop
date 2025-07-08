import { Link } from "react-router-dom";
import '../App.css'

const Shop = ({products, setProducts, setBasketTotal}) => {

    const handleAddToBasket = (e) => {
      e.preventDefault();
      let arrayIndex = Number(e.target.parentNode.parentNode.id) - 1
      let updatedProducts = [...products];
      let updatedProduct = {...updatedProducts[arrayIndex]};
      updatedProduct.quantity += 1
      updatedProducts[arrayIndex] = updatedProduct
      setProducts(updatedProducts);
    }

    const handleRemoveFromBasket = (e) => {
      e.preventDefault();
      let arrayIndex = Number(e.target.parentNode.parentNode.id) - 1
      let updatedProducts = [...products];
      let updatedProduct = {...updatedProducts[arrayIndex]};
      if (updatedProduct.quantity > 0) {
        updatedProduct.quantity -= 1
        updatedProducts[arrayIndex] = updatedProduct
        setProducts(updatedProducts);
      }
    }

    const handleSubmitToBasket = (e) => {
      e.preventDefault();
      let formQuantityValue = parseInt(e.target.parentNode.querySelector(".input-quantity").value)
      console.log("formQuantityValue being submitted: " + formQuantityValue);

      let arrayIndex = Number(e.target.parentNode.parentNode.id) - 1
      let updatedProducts = [...products];
      let updatedProduct = {...updatedProducts[arrayIndex]};
      updatedProduct.quantity += formQuantityValue
      updatedProducts[arrayIndex] = updatedProduct
      setBasketTotal(basketTotal => parseInt(basketTotal) + parseInt(formQuantityValue) );
    }

    const handleChangeToQuantity = (e) => {
      e.preventDefault();
      let arrayIndex = Number(e.target.parentNode.parentNode.id) - 1
      let updatedProducts = [...products];
      let updatedProduct = {...updatedProducts[arrayIndex]};
      let number = parseInt(e.target.value);
      console.log("number" + number);
      console.log("arrayIndex: " + arrayIndex);
      if (e.target.value === "") {
        console.log("value is empty")
        updatedProduct.quantity = 0
        updatedProducts[arrayIndex] = updatedProduct
        setProducts(updatedProducts);
      }
      if (number >= 0 && number < 100) {
        console.log("value is not empty")
        updatedProduct.quantity = number
        updatedProducts[arrayIndex] = updatedProduct
        setProducts(updatedProducts);
        let total = 0
        const mapCopy = products.map((item) => (item))
        console.log("mapCopy length:" + mapCopy.length );
        for (let i = 0; i < mapCopy.length; i++) {
          console.log("num is: " + mapCopy[i].quantity);
          total += parseInt(mapCopy[i].quantity)
        }
        console.log("total: " + total);
      }
      console.log("new product info: item: " + updatedProduct.title + "quantity: " + updatedProduct.quantity);
    }

    return (
      <>
        <p>Choose items to add to your Basket</p>
        <ul>
          {products.map((item) => (
            <li key={item.id} data-key={item.id} id={item.id} className="shop-item">
              <img className="productImage" src={item.image}></img>
              <div className="title">Title: {item.title}</div>
              <div className="price">Price: £{item.price}</div>
              <div className="rating">Rating: {item.rating.rate}</div>
              <div className="category">Category: {item.category}</div>
              <form className="form-quantity">
                <label htmlFor="quantity"> Quantity: </label>
                <button onClick={handleRemoveFromBasket}>-1</button>
                <input name="quantity" className="input-quantity" value={item.quantity} onChange={handleChangeToQuantity}/>
                <button onClick={handleAddToBasket}>+1</button>
                <button type="submit" onClick={handleSubmitToBasket}>Add Quantity</button>
                </form>
              <div className="description">Description: {item.description}</div>
            </li>
          ))}
        </ul>
        <Link to="/Basket">Click here to go to Your Basket</Link>
      </>
    );
};

export default Shop;