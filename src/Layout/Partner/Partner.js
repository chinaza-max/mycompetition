import React from 'react'
import "./Partner.css"
import Liberty  from "../../assets/images/Liberty company logo white colour.png"
import LibertyCompanY  from "../../assets/images/Liberty company logo white .png"
import Winwise  from "../../assets/images/Winwise logo White colour 1.png"
import wisperlogo  from "../../assets/images/wisper logo white.png"
import Paybox  from "../../assets/images/Paybox.png"
import VizualPlus  from "../../assets/images/Vizual Plus.png"




export default function Partner() {
  return (
    <div  className='Partner'>
        <h3>Partners and Sponsors</h3>
        <p>Getlinked Hackathon 1.0 is honored to have the following major 
companies as its partners and sponsors</p>

      <div className='PartnerContainer'>
          <ul className='PartnerContainerSub'>
            <li>
                <div className="centered-content">
                  <img  className='img1' alt='failed' src={Liberty}/>
                </div>
            </li>
            <li>
              <div className="centered-content">

                  <img  className='img2' alt='failed' src={LibertyCompanY}/>
                </div>

            </li> 
            <li>
              <div className="centered-content">

                <img className='img3' alt='failed' src={Winwise}/>
              </div>

            </li> 
            <li>
              <div className="centered-content">

                <img  className='img4' alt='failed' src={wisperlogo}/>
              </div>

            </li>
            <li>
              <div className="centered-content">

                <img className='img5' alt='failed' src={Paybox}/>
              </div>

            </li>
            <li>
              <div className="centered-content">

                <img className='img6' alt='failed' src={VizualPlus}/>
              </div>

            </li>
          </ul>
      </div>
    
    </div>
  )
}
