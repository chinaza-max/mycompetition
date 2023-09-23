import React from 'react'
import "./Overview.css";
import Card from "../../Component/Card/Card"
import starPu from "../../assets/images/starPu.png"
import sataGra1 from "../../assets/images/sata-gra1.png"
import arrow from "../../assets/images/arrow.png"
import star from "../../assets/images/star.png"
import star2 from "../../assets/images/star (3).png"


export default function Overview() {

    let hearder1="Introduction to getlinked"
    let hearder2="tech Hackathon 1.0"
    let hearder3="Rules and"
    let hearder4="Guidelines"
    let text1=`Our tech hackathon is a melting pot of visionaries, and its purpose is as
    clear as day: to shape the future. Whether you're a coding genius, a 
    design maverick, or a concept wizard, you'll have the chance to transform 
    your ideas into reality. Solving real-world problems, pushing the boundaries
    of technology, and creating solutions that can change the world,
    that's what we're all about!`
    let text2=`Our tech hackathon is a melting pot of visionaries, and its purpose is as
    clear as day: to shape the future. Whether you're a coding genius, a 
    design maverick, or a concept wizard, you'll have the chance to transform 
    your ideas into reality. Solving real-world problems, pushing the boundaries
    of technology, and creating solutions that can change the world,
    that's what we're all about!`
//                <Card   h1P={hearder1}  h2P={hearder2}   T1P={text1} />


  return (
    <div className='Overview'>
        
        <ul className='OverviewContainer Overview1' >
            <li className='OverviewContainer1 OverviewContainer11'>
           

                <div className="centered-element">
                    The Big
                    <br />
                    Idea!
                </div>

                <div className="OverviewContainer11Element">
                    <img src={starPu}   className='img1 img11'/>
                    <img  src={arrow}   className='img1 img12'/>
                </div>

            </li>
            <li  className='OverviewContainerText'>
                <Card   h1P={hearder1}  h2P={hearder2}   T1P={text1} />

                    <img src={sataGra1}   className='img1 img11'/>
            </li>
        </ul>  
        <ul className='OverviewContainer Overview2' >
            <li  className='OverviewContainer2 OverviewContainer21'>
                <Card   h1P={hearder3}  h2P={hearder4}   T1P={text2} />

                <img src={star}   className='img1 img11'/>
                <img src={star2}   className='img1 img12'/>

            </li>
            <li className='OverviewContainer2 OverviewContainer22'>
                
            </li>
        </ul>   
              
    </div>
  )
}
