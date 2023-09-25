import React from 'react';
import Panel from "./home-panel.jpg";
import bat1 from "./bat1.jpg";
import bat2 from "./bat2.jpg";
import kit1 from "./kit1.png";
import kit2 from "./kit2.png";
import kit3 from "./kit3.png";

import "./Home.css"

const Home = () => {
  return (
    <main>
         <div className='panel'>
            <img src={Panel} alt="panel"></img>
            <div className='img'></div>
            <div className='panel-content'></div>
            <div className='panel-content2'></div>
            <section className='batrange'>
              <div className='batcontainer'>
                <div className='batlist'>
                  <img src={bat1} alt='bat'></img>         
                  <img src={bat2} alt='bat'></img>
                </div>  
                <div className='batname'>
                  <h3>ViratKohli Range</h3>
                  <h3>English Willow Range</h3>
                </div>
              </div> 
            </section>
            <section className='kitrange'>
                <div className='kitcontainer'>
                  <div className='kitlist'>
                    <img src={kit1} alt='kit'></img>         
                    <img src={kit2} alt='kit'></img>         
                    <img src={kit3} alt='kit'></img>
                  </div>   
                  <div className='kitname'>
                    <h3>JUNIOR CRICKET KITS</h3>
                    <h3>PROTECTIVE EQUIPMENTS</h3>
                    <h3>OTHERS</h3>
                  </div>
                </div>
            </section>
                
              
           
         </div>
    </main>
     
    
  )
}

export default Home;