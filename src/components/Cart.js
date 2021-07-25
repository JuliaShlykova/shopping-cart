const Cart = (props) => {
  const {products, setProducts, summa} = props;

  const clearCart = () => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        product.quantity = 0;
        return product;
      })
    })
  };

  return (
    <>
    <button id="cart-btn-clear" onClick={clearCart}>Clear cart</button>
    <p>Your cart is here: </p>
    
    <ul id="cart-list">
      {products
      .filter(product=>product.quantity>0)
      .map(product=>{
        return (
          <li>{product.quantity} BTL - {product.title} </li>
        )
      })}
    </ul>
    <p id="total-amount">Total amount: {summa} bottles ${summa*20.00}</p>
    <button id="cart-btn-buy">Buy all</button>
    </>
  )
}

export default Cart;