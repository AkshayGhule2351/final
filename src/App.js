import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Login from './Login';
import Register from './Register';
import Product from './Product';
import Cart from './Cart';
import Additional from './Additional';
import MultipleProducts from './MultipleProducts';
import Mobiles from './Mobiles';
import Laptops from './Laptops';
import Fashion from './Fashion';
import ScrollImage from './ScrollImage';

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


