import React from 'react';
import "./Description3.css";
import pic from "./bat1.jpg"

const Description = () => {
  return (
    <main className='containerdesc'>
      <div className='imgdesc'>
        <img src={pic} alt="pic"></img>
      </div>
      <div className='desctitle'>
        <h2>MRF Genius Grand Edition</h2>
        <h3>BAT DESCRIPTION</h3>
        <hr></hr>
        <ul id="desc">
          <li className="desclist">Prototype of the MRF brand ambassador's bat.</li>
          <li className="desclist">Carefully selected from premium quality English Willow.</li>
          <li className="desclist">Optimum Balance with thick edges and shoulder.</li>
          <li className="desclist">Available in short handle sizes Harrow / 6 / 5</li>
        </ul>
      </div>
    </main>
  )
}

export default Description;