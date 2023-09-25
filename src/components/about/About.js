import React from "react";
import "./About.css";
import pic from './pic1.png'
const About = () => {
  return (
    <body>
      <div className="outer-container">
        <div className="inner-container">
          <div className="heading">
              <h2>WELCOME TO</h2>
              <h3>MRF SPORTS GOOD</h3>
          </div>

          <div className="content">
            <p>MRF's association with sports in India, especially cricket, goes all the way back
              to the 1980s. We took it to the next level in the 1990s when some of the world's best 
              batsmen wielded bats sponsored by us, playing unforgettable knocks that swept you through 
              a whole range of emotions. Now we take a step closer to you. Presenting 
              MRF Sports Goods, available at over 350 stores across the country.</p>
          </div>

        </div>

        <div className="locator">
          <div className="main">
            <div className="title">
              <h2>STORE LOCATOR</h2>
            </div>
            <div class="sub-locator"> 
              <form method="POST">
                <label style={{fontSize: "30px"}}> Where are you?</label><br></br>
                <label> We will find a store near you.</label>
                <div className="input">
                  <input type="text" className="city" placeholder="TYPE YOUR CITY HERE" required></input>
                </div>
                <div className="btn">
                  <button type="submit">Search</button>
                </div>   
              </form>
            </div>
          </div> 
        </div>
        <img src ={pic} alt='virat'></img>
      </div>
    </body>
  )
}

export default About