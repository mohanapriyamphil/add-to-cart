import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

export const Header = ({cart}) => {
  return (
    <>
      <nav>
        <div className="logo">Start Bootstrap</div>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/cart'}>Cart
              <span>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>{" "}{cart.length}
            </Link>
          </li>
        </ul>
        {/* <div >
          
        </div> */}
      </nav>

      <div className="title">
        <h1>Shop in Style</h1>
        <p>With this shop homepage template</p>
      </div>
    </>
  );
};


Header.propTypes = {
  cart: PropTypes.array,
  setCart: PropTypes.func
};