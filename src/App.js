
import './App.css';
import Buttons from './components/Buttons/Buttons';
import ResponsiveCarousel from './components/Carousel/ResponsiveCarousel';
import Nav from './components/Nav/Nav';
import Offer from './components/Offer/Offer';
import ProductHeadingPrice from './components/ProductHeadingPrice/ProductHeadingPrice';
import Specs from "./components/Specs/Specs";

function App() {
  return (
    <div className="App">
      <div className="mobileView">
      <Nav/>
      <ResponsiveCarousel/>
      <ProductHeadingPrice/>
      <Offer/>
      <Specs/>
      <Buttons/>
      </div>
      
      <div className="desktopView">
        <Nav/>
        <div className="desktopWrapper">
          <div className="carouselAndBtns">
            <ResponsiveCarousel/>
            <Buttons/>
          </div>
          <div className="rightDescription">
          <ProductHeadingPrice/>
          <Offer/>
          <Specs/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
