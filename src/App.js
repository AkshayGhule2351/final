import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Register from './components/Register';
import Product from './components/Product';
import Cart from './components/Cart';
import Additional from './components/Additional';
import MultipleProducts from './components/MultipleProducts';
import Mobiles from './components/Mobiles';
import Laptops from './components/Laptops';
import Fashion from './components/Fashion';
import ScrollImage from './components/ScrollImage';

function App() {
  return (
    <div className='mybody'>
       <Navbar />
      <Routes>
        
       <Route exact path='/' Component={Home}/>
       <Route exact path='/products' Component={Products}/>
       <Route exact path='/products/:id' Component={Product}/>
       <Route exact path='/aboutus' Component={AboutUs}/>
       <Route exact path='/contactus' Component={ContactUs}/>
       <Route exact path='/login' Component={Login}/>
       <Route exact path='/register' Component={Register}/>
       <Route exact path='/cart' Component={Cart}/>
       <Route exact path='/additional' Component={Additional}/>
       <Route exact path='/multipleProducts' Component={MultipleProducts}/>
       <Route exact path='/mobiles' Component={Mobiles}/>
       <Route exact path='/Laptops' Component={Laptops}/>
       <Route exact path='/fashion' Component={Fashion}/>
       <Route exact path='/scrollimage' Component={ScrollImage}/>
       
      </Routes>
      <Footer />
    </div>

  );
}

export default App;


