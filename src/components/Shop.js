import './style/Shop.css';
import Item from './Item';
import bottle from './assets/bottle.svg';


const Shop = (props) => {
  const {products, changeProducts} = props;

  return (
    <div id="shop">
      {products.map((item) => (<Item totalQuantity={item.quantity} changeProducts={changeProducts} src={item.src} title={item.title} key={item.title} bottle={bottle}/>))}
    </div>
  )
}

export default Shop;