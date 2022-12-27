import './App.css';
import Navbar from './UI/Navbar/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home"
import Mens from "./Pages/Mens/Mens"
import Womens from './Pages/Womens/Womens';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Electronics from './Pages/Electronics/Electronics';
import Cart from './Pages/Cart/Cart';

function App() {
  return (<>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='mens' element={<Mens />} />
        <Route path='womens' element={<Womens />} />
        <Route path='electronics' element={<Electronics />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='cart' element={<Cart />}/>
    </Routes>
  </>
  );
}

export default App;
