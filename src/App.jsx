import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import About from './components/About';
import ProductPage from './components/Products/ProductPage';
import { Routes, Route } from 'react-router';
import ProductDetails from './components/Products/ProductDetails';
function App() {

  return (
    <>
    <Navbar/>        
    <Routes>
      <Route  path="/" element={<Homepage/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/products" element={<ProductPage/>}>
        <Route  path=":id" element={<ProductDetails/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
