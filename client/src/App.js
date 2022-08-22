
import './App.css';
import Navbar from './Navbar.js';
import Carousel from './Carousel.js';
import Card from './component/Card.js';
import Card2 from './component/Card2.js';
import Offcanvas from './component/Offcanvas.js';
import Listgroup from './component/Listgroup';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Offcanvas />
      <Carousel />
      <Card2 />
      <Listgroup />
      <Footer />


    </div>
  );
}

export default App;
