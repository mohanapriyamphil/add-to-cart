import "../Styles/Cart.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Cart = ({ cart }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.rate), 0))
  },[cart])
  return (
    <>
      <h1 className="cart-heading">Cart Items</h1>
      <div className="cart-container">
        {
          cart.map((product) => (
            <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="cart-product-details">
              <h3>Product Name: {product.name}</h3>
              <p>Price: ${product.rate}</p>
            </div>
          </div>
          ))
        }
        <h2 className="cart-total">Total Amount: ${total}</h2>
      </div>
    </>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
};
