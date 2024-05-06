import PropTypes from "prop-types";
import { useState } from 'react';
import data from '../assets/data.json';
import { Product } from './Product';
import '../Styles/Home.css';

export const Home = ({ cart, setCart }) => {
  const [products] = useState(data)
  return (
    <div className='home-container'>
      {
        products.map((product) => (
          <Product key={product.id} 
          product={product}
          cart={cart}
          setCart={setCart}/>
        ))
      }
    </div>
  )
}

Home.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func
};

