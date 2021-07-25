import './style/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id="Home">
      <h1>SellAir</h1>
      <div id="svg-cart">
      <svg version="1.1" viewBox="0 0 16 16">
        <g id="Layer_1_1_">
          <path d="M16 8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c2.8 0 5.4 1.4 6.8 3.8.5.9.9 1.9 1.1 2.9.1.4.1.9.1 1.3z" fill="#6495ed"/>
        </g>
        <g id="clouds">
          <path d="M13.6 8.2c.7-1 .4-2.4-.6-3.1-.8-.7-1.9-.7-2.8-.1-.2-.2-.4-.5-.6-.6-.5-.4-1-.5-1.6-.5-.1-.6-.5-1-.9-1.4-1-.8-2.4-.6-3.1.3-.6.9-.6 2 .1 2.7-.2.2-.4.3-.6.6-.7 1-.4 2.4.7 3.1.2.1.5.3.8.3-.3 1 .1 2 .9 2.6.8.6 1.9.7 2.7.1.2.2.4.5.6.6 1 .8 2.4.6 3.2-.3l.3-.6c.2-.1.4-.3.5-.5.6-.8.5-1.9-.2-2.7.2-.1.4-.3.6-.5z" fill="#a2bff4"/>
          <path d="M10.7 9c.2-.8-.2-1.6-1-1.8-.6-.2-1.3 0-1.7.5-.1-.1-.3-.2-.5-.3-.3-.1-.7-.1-1.1 0-.2-.3-.5-.5-.8-.6-.8-.3-1.6.1-1.9.8-.2.6.1 1.3.7 1.6-.1.1-.2.3-.3.5-.2.8.2 1.6 1 1.8.2.1.4.1.6.1 0 .7.4 1.3 1.1 1.5.6.2 1.3 0 1.7-.5.1.1.3.2.5.3.7.3 1.6-.1 1.9-.8v-.5c.1-.1.2-.3.2-.4.2-.6-.1-1.3-.7-1.6.1-.3.2-.4.3-.6z" fill="#51607a"/>
          <path d="M15.9 6.7c-.1.2-.3.4-.4.6-.3.3-.8.6-1.3.6-.1.5-.3 1-.7 1.3-.2.2-.4.3-.6.4.3.9.1 1.8-.6 2.5-.5.7-1.6.9-2.3.3-.3-.2-.5-.6-.6-.9-.7.5-1.7.4-2.2-.3-.1-.2-.2-.3-.3-.5-.2-.1-.3-.2-.5-.4-.7-1-.5-2.2.3-3 .2-.1.4-.3.6-.4-.3-.9 0-1.8.6-2.5.6-.6 1.5-.8 2.3-.3.1-.2.3-.5.5-.7.6-.7 1.7-.8 2.5-.2l.2.2c.1.2.3.4.3.6.4-.2.8-.3 1.2-.3.5 1 .8 2 1 3z" fill="#c7d9f8"/>
        </g>
        <g id="cart">
          <path class="st4" d="M13.4 13.5H4.2L3 8h11.5z"/>
          <path class="st4" d="M3.5 10.5l-1-5h-2"/>
          <path class="st5" d="M4.5 8l1 5.5M5.5 8l1 5.5M6.5 8l1 5.5M7.5 8l1 5.5M8.5 8l1 5.5M9.5 8l1 5.5M10.5 8l1 5.5M11.5 8l1 5.5M12.5 8l1 5.5M3 10h11M4 12h10"/>
        </g>
      </svg>

      </div>
      <p>Wlcome to our shop. Feel free to choose what you like! <Link to="/shopping-cart/shop" id="link-home-shop">Choose your air now!</Link></p>
      
    </div>
  );
}

export default Home;