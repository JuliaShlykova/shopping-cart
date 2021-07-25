import { useState } from "react";

const Item = (props) => {
  const {totalQuantity, changeProducts, src, title, bottle} = props;

  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    setQuantity(parseInt(event.target.value));
  }

  const addToCart = () => {
    changeProducts(quantity, title);
    setQuantity(1);
  }

  return (
    <div className="item">
      <figure>
        <div className="shop-item" style={{backgroundImage: `url(${src})`}}>
        <img src={bottle} alt="bottle" className="svg-bottle" />
        </div>
        <figcaption>{title}</figcaption>
      </figure>

      <p className="item-price-quantity"><span>$20.00/ea</span><span>qty. {totalQuantity}</span></p>

      <button className="btn-decrement" onClick={() => {setQuantity((prevQuantity) => --prevQuantity)}}>-</button>
      <input type="number" min="1" max="99" value={quantity} onChange={handleChange}></input>
      <button className="btn-increment" onClick={() => {setQuantity((prevQuantity) => ++prevQuantity)}}>+</button>
      <button className="btn-add-to-cart" onClick={addToCart}>Add to Cart</button>

    </div>
  );
};

export default Item;