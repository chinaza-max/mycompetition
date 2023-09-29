import React from 'react'
import "./Price.css"


import silver_medal from "../../assets/images/silver_medal.png"
import gold_medal from "../../assets/images/gold_medal.png"
import bronze_medal from "../../assets/images/bronze_medal.png"
import overlay from "../../assets/images/overlay.png"
export default function Price() {
  return (
    <div className='Price'>
        <img src={overlay} alt='cant load'/>
        <div className='PriceHead'>
            <div className="label">
                <p className="prizes-and-rewards">
                <span className="text-wrapper">
                Prizes and <br />
                </span>
                <span className="span">Rewards</span>
                </p>
            </div>
        </div>
        <div className='Pricepara'>
            <p>
            Highlight of the prizes or rewards for winners 
            and for participants.
            </p>
        </div>

        <ul className='PriceContainer'>
            <li className='PriceContainer1 PriceContainerImg'>
            </li>
            <li className='PriceContainer1 PriceContainerPrice'>
                <ul  className='PriceContainerPriceContainer'>
                    <li className='PriceContainerPriceContainer1'>
                        <p className='position'>2nd</p>
                        <p className='Runner'>Runner</p>
                        <h3>N300,000</h3>

                        <img  src={silver_medal} alt='cant load'/>
                    </li>
                    <li className='PriceContainerPriceContainer2'>
                        <p className='position'>1nd</p>
                        <p className='Runner'>Runner</p>
                        <h3>N300,000</h3>
                        <img src={gold_medal} alt="cant load"/>

                    </li>
                    <li className='PriceContainerPriceContainer3'>
                        <p className='position'>3nd</p>
                        <p className='Runner'>Runner</p>
                        <h3>N300,000</h3>
                        <img src={bronze_medal} alt='cant load'/>

                    </li>

                </ul>
            </li>
        </ul>
    </div>
  )
}
