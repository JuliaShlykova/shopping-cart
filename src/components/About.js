import './style/About.css';
import logo from './assets/logo.svg';

const About = () => {
  return (
    <div id="about">
      <h1>About SellAir</h1>
      <p>Hello! We are SellAir. Our goal is to give anyone an opportunity to breathe whatever air they want. If you are in a polluted city with a lot of dusty plants, buy a bottle of fresh air, feel better! Our history begins in 0000. We have been granting various air for more than 2 thousands years! Breathe with Us!</p>
      <img src={logo} className="App-logo" alt="logo" />
      <p id="info-source">Photographs were obtained from <a href="https://pixabay.com/">https://pixabay.com/</a>. Illustraitions were made by me. </p>
    </div>
  )
}

export default About;