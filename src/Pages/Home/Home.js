import React from 'react';
import './Home.css';
import NavBar from "../../Layout/NavBar/NavBar"
import curve from "../../assets/images/curve.png"
import chain from "../../assets/images/chain-9365116-7621444.png"
import Button from '../../Component/Button/Button'
import blast from "../../assets/images/blast.png"
import bulb from "../../assets/images/bulb.png"
import star2 from "../../assets/images/star2.png"
import star1 from "../../assets/images/star1.png"
import Overview from "../../Layout/OverviewM/Overview"
import FAQ from "../../Layout/FAQ/FAQ"
import Timeline from '../../Layout/Timeline/Timeline';



export default function Home() {
  return (
    <div className='Home'>
      <NavBar/>
       
      <div className='HomeComtainer1'>

        <div className='HomeComtainer2'>
          <div className="label">
            <p className="text-wrapper">Igniting a Revolution in HR Innovation</p>
            <div className="image-wrapper">
              <img className='curve'  src={curve}  alt=''/>
            </div>
          </div>
        </div>



          <ul className='HomeComtainer4'>
            <li className='HomeComtainer42'>
                <ul className='HomeComtainer3'>
                <li className='HomeComtainer31'>
                    <h2>
                      getlinked Tech
                    </h2>

                    <div>
                      <div className="label">
                        <p className="hackathon">
                          <span className="text-wrapper">Hackathon </span>
                          <span className="span">1.0</span>
                          
                          <span className="image1">
                            <img src={chain}  alt=''/>
                          </span>

                          <span className="image2 ">
                            <img src={blast}  alt=''/>
                          </span>

                          <span className="image3">
                            <img src={bulb}  alt=''/>
                          </span>

                          <span className="image4">
                            <img src={bulb}  alt=''/>
                          </span>

                          <span className="image5">
                            <img src={star1}  alt=''/>
                          </span>

                          <span className="image6">
                            <img src={star2}  alt=''/>
                          </span>
                          <span className="image7">
                            <img src={star2}  alt=''/>
                          </span>


                          

                        </p>
                      </div>
                    </div>

                    <p>   
                    Participate in getlinked tech Hackathon 2023 stand 
                    a chance to win a Big prize
                    </p>
                </li>
                <li className='button'>
                    <div>
                      <Button   textP={"Register"} routeP={"/Register"}/>

                    </div>
                </li>

                <li className='count'>
                    <ul>
                        <li>
                          <span>
                            00
                          </span>
                          
                          <sub>
                            H
                          </sub>

                        </li>

                        <li>
                          <span>
                            00
                          </span>
                          <sub>
                            M
                          </sub>
                        </li>
                        
                        <li>
                          <span>
                          00
                          </span>
                          <sub>
                            S
                          </sub>
                        </li>
                    </ul>
                </li>
                </ul>
            </li>
            <li className='HomeComtainer43'>
                
            </li>

          </ul>


      </div>

      <div className='HomeOview' >
      <Overview/>
      </div>

      <div className='HomeFAQ' >
        <FAQ/>
      </div>
    

      
      <div className='HomeTimeline' >
        <Timeline/>
      </div>

    </div>
  )
}

//<Overview/>
