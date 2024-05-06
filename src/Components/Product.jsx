import PropTypes from "prop-types";

import "../Styles/Product.css";

export const Product = ({ product, cart, setCart }) => {

  const addCart = () => {
    setCart([...cart, product])
  }

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id))
  }

  return (
    <div className="rootItem">
      <div className="img">{<img src={product.imageUrl} alt={product.name} />}</div>
      <div className="details">
        {<h2>{product.name}</h2>}
        {<p>Price: ${product.rate}.00</p>}
      <div className="btn">
        {
          cart.includes(product)? (
            <button className="btnRemove" onClick={removeCart}>Remove from Cart</button>
          ):(
            <button onClick={addCart}>Add to Cart</button>
          )
        }
      </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  cart: PropTypes.array,
  setCart: PropTypes.func
};
