
import { Route, Routes } from 'react-router-dom';
import About from './component/About/About';
import './App.css';
import Header from './component/Header/Header';

import Home from './component/Home/Home';
import Products from './component/Products/Products';
import Register from './component/Register/Register';
import Signing from './component/Signing/Signing';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Signing></Signing>}></Route>

        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/about" element={<About></About>}></Route>

      </Routes>
    </div>
  );
}

export default App;
