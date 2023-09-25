import React from "react";
import Panel from "./bg-panel.jpg";
import "./Product.css";
import bat1 from './bat1.jpg';
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <main>
      <div className="bg-img">
        <img src={Panel} alt="bg"></img>
        <div class="text">
            <h3>Products</h3>
        </div>
      </div>
      <section className="products">
        <div className="productlist">
          <div className="items">
            <Link to = '/description'>
              <img src={bat1} alt='bat'></img>
            </Link> 
            <Link to = '/description2'>
              <img src={bat1} alt='bat'></img>
            </Link>
            <Link to = '/description3'>
              <img src={bat1} alt='bat'></img>
            </Link>
          </div>
          <div className="batnames">
            <h3>MRF Genius Grand Edition</h3>
            <h3>MRF Genius Players Edition</h3>
            <h3>MRF Genius Limited Edition</h3>
          </div>

        </div>
      </section>
     
    </main>
    


    
  )
}

export default Product