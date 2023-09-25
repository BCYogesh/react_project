import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <body className="bg">
         <div className="full-container">
            <div className="contactdetails">
               <div className="contact-title">
                  <h2>CONTACT US</h2>
                </div>
               <div className="contents">
                  <p>Please Submit your details we will get in touch with you as soon as possible.</p>
                </div>
                <div className="head">
                    <h2>MRF LIMITED</h2>
                </div>
                <div className="contents" id="details">
                    <p>Sports Goods Division New no 114 Old No 124,Greams Road,Madurai-625009</p>
                    <p>PHONE : +918924829391</p>
                    <p>Email : mrfsport@mrfmail.com</p>
                    <p>Website : www.mrfsports.com</p>
                </div>
            </div>
            <form method="POST" action="#" id="form">
              <div className="form">
                <div className="input-field">
                  <input type="text" placeholder="Name" required></input><br></br>
                </div>
                <div className="input-field">
                  <textarea placeholder="Address" required></textarea><br></br>
                </div>
                <div className="input-field">
                  <input type="text" placeholder="Email" required></input><br></br>
                </div>
                <div className="input-field">
                  <input type="number" placeholder="Phone" required></input><br></br>
                </div>
                <div className="input-field">
                  <textarea placeholder="Message/Query" required></textarea><br></br>
                </div>
                <div className="input-field">
                  <input type="submit" value="Submit" id="submit"></input>
                </div>
              </div>
            </form>
      
          </div>
   </body>
   

  )
}

export default Contact