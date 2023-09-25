import React from 'react';
import "./Description2.css";
import pic from "./bat1.jpg"

const Description = () => {
  return (
    <main className='containerdesc'>
      <div className='imgdesc'>
        <img src={pic} alt="pic"></img>
      </div>
      <div className='desctitle'>
        <h2>MRF Genius Players Special</h2>
        <h3>BAT DESCRIPTION</h3>
        <hr></hr>
        <ul id="desc">
          <li className="desclist">Made from premium quality English Willow.</li>
          <li className="desclist">Thick edges, curved blade and higher sweet spot for destructive hitting.</li>
          <li className="desclist">Handle made from premium imported Sarawak cane to deliver superior power and control.</li>
        </ul>
      </div>
    </main>
  )
}

export default Description;