import React from 'react';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Product from "./components/product/Product";
import Description from "./components/description/Description";
import Description2 from "./components/description2/Description2";
import Description3 from "./components/description3/Description3";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
      </Routes>
      <Routes>
        <Route path = "/about" element = {<About />}></Route>
      </Routes>
      <Routes>
        <Route path = "/product" element = {<Product />}></Route>
      </Routes>
      <Routes>
        <Route path = "/contact" element = {<Contact />}></Route>
      </Routes>
      <Routes>
        <Route path = "/description" element = {<Description />}></Route>
      </Routes>
      <Routes>
        <Route path = "/description2" element = {<Description2 />}></Route>
      </Routes>
      <Routes>
        <Route path = "/description3" element = {<Description3 />}></Route>
      </Routes>
    </Router>
  )
}

export default App