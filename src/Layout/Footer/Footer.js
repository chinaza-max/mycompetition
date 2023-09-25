import React from 'react'
import "./Footer.css"
import  mdi_instagram from "../../assets/images/mdi_instagram.png"
import  twitter from "../../assets/images/twitter.png"
import  face from "../../assets/images/face.png"
import  lind from "../../assets/images/lind.png"
import  tel from "../../assets/images/tel.png"
import  location from "../../assets/images/location.png"




export default function Footer() {
  return (
    <div className='Footer'>
        <ul className='FooterContainer'>
            <li className='FooterContainer1'>

                <div className="label">
                        <p className="getlinked">
                            <span className="text-wrapper">get</span>
                            <span className="span">linked</span>
                        </p>
                </div>

                <p>Getlinked Tech Hackathon is a technology innovation program 
                        established by a group of organizations with the aim of showcasing 
                        young and talented individuals in the field of technology</p>


                <div className='label2'>
                    <span className='terms'>Terms of Use</span>
                    <span className='Privacy'> Privacy Policy</span>
                </div>
            </li>
            <li className='FooterContainer2'>
                    <ul>
                        <li>
                            <h4>
                            Useful Links
                            </h4>
                        </li>
                        <li>

                            <p>Overview</p>
                             
                        </li>
                        <li>
                        <p>Timeline</p>

                        
                        </li>
                        <li>
                            <p>Timeline</p>

                        </li>
                        <li>

                            <p>FAQs</p>

                        </li>
                        <li>
                            <ul className='social'>
                                <li>

                                <h4>
                                Follow us
                                </h4>

                                </li>
                                <li>
                                    <span>
                                        <img src={mdi_instagram} alt='icon'/>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <img src={twitter} alt='icon'/>

                                    </span>

                                </li>
                                <li>
                                    <span>
                                    <img src={face} alt='icon'/>

                                    </span>

                                </li>
                                <li>
                                    <span>
                                    <img src={lind} alt='icon'/>

                                    </span>

                                </li>
                            </ul>
                        </li>

                    </ul>
            </li>
            <li className='FooterContainer3'>
                <ul>
                    <li>
                        <h4>
                            Contact Us
                        </h4>
                    </li>
                    <li  className='tel' >
                    <p>

                        <span>
                            <img src={tel} alt='icon'/>
                        </span>
                        +234 6707653444
                        
                    </p>

                    </li>
                    <li className='location'>
                        <p>

                            <span>                                
                                <img src={location} alt='icon'/>
                            </span>
                            27,Alara Street
                            Yaba 100012
                            Lagos State
  
                        </p>


                    </li>

                </ul>
              
      
            </li>
        </ul>
        
        <p>All rights reserved. © getlinked Ltd.</p>
    </div>
  )
}
