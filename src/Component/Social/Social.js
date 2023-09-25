import React from 'react'
import "./Social.css"
import  mdi_instagram from "../../assets/images/mdi_instagram.png"
import  twitter from "../../assets/images/twitter.png"
import  face from "../../assets/images/face.png"
import  lind from "../../assets/images/lind.png"




export default function Social() {
  return (
    <div className='SocialM'>
        <ul className='social'>
                            
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

    </div>
  )
}
