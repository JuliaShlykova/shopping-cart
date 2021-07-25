import './style/NavBar.css';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const NavBar = (props) => {
  const {setCartOpen, products, setProducts} = props;
  const summa = products.reduce((a,b) => a+b['quantity'], 0);

  return (
    <nav id="navbar">
      <ul id="navbar-list">
        <Link to="/shopping-cart/">
        <li>HOME</li>
        </Link>
        <Link to="/shopping-cart/shop">
        <li>SHOP</li>
        </Link>
        <Link to="/shopping-cart/about">
        <li>ABOUT</li>
        </Link>
        <li id="cart"
          onMouseEnter={() => setCartOpen(true)}
          onMouseLeave={() => setCartOpen(false)}>
          <div id="cart-li">
            <p>Cart</p>
            <p>{summa}</p>
          </div>
          <div id="cart-div">
            <Cart products={products} setProducts={setProducts} summa={summa} />
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;