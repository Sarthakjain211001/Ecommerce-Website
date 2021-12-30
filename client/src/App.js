// import logo from './logo.svg';
// import './App.css';

import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import PaymentSuccess from './pages/PaymentSuccess';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux';


function App() {
  const user= useSelector(state => state.user.currentUser);;
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={ <Home/> }/>
      <Route exact path="/products/:category" element={<ProductList/>}/>
      <Route exact path="/product/:id" element={ <Product/>}/>
      <Route exact path="/register" element={ user ? <Navigate replace to="/"/> :<Register/> }/>    //If the user is logged in then he will get redirected to the home page else he will be directed to the register page.
      <Route exact path="/login" element={ user ? <Navigate replace to="/"/> :<Login/> }/>          //If the user is logged in then he will get redirected to the home page else he will be directed to the login page.
      <Route exact path="/cart" element={<Cart/>}/>
      <Route exact path="/paymentSuccess" element={<PaymentSuccess/>}/>
      </Routes>
    </Router>
  );
}

export default App;
