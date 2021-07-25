import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import data from './components/assets/data';

function Routes() {
  const [cartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState(data);

  const changeProducts = (quantity, title) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        let newProduct = {...product}
        if(product.title===title) {
          newProduct.quantity +=quantity;
        }
        return newProduct;
      });
    });
  }
  
  return (
    <BrowserRouter>
      <NavBar setCartOpen={setCartOpen} products={products} setProducts={setProducts} />
      <main>
        <Switch>
        <Route exact path="/shopping-cart/" component={Home} />
        <Route exact path="/shopping-cart/shop" render={() => (
          <Shop products={products} changeProducts={changeProducts} />
        )} />
        <Route exact path="/shopping-cart/about" component={About} />
        </Switch>
      </main>
      {cartOpen? (<div id="backdrop"></div>) : null}
    </BrowserRouter>
  );
}

export default Routes;
