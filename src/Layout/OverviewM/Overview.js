import React from 'react'
import "./Overview.css";
import Card from "../../Component/CardM/Card"
import starPu from "../../assets/images/starPu.png"
import sataGra1 from "../../assets/images/sata-gra1.png"
import arrow from "../../assets/images/arrow.png"
import star from "../../assets/images/star.png"
import star2 from "../../assets/images/star (3).png"
import Button from "../../Component/Button/Button"

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
//               


  return (
    <div className='Overview'>
        
        <ul className='OverviewContainer1 OverviewContainer11' >
          
            <li className='OverviewContainerSub1 OverviewContainer1Img'>

                <div className="centeredElement">
                    The Big
                    <br />
                    Idea!
                </div>

            </li>
            <li  className='OverviewContainerSub1 OverviewContainer1Text'>
                <Card   h1P={hearder1}  h2P={hearder2}   T1P={text1} />
            </li>
        </ul>  

        <div className='OverviewLine'></div>
        <ul className='OverviewContainer1 OverviewContainer12' >
           

            <li  className='OverviewContainerSub1 OverviewContainer1Text'>
                <Card   h1P={hearder3}  h2P={hearder4}   T1P={text2} />
            </li>
            <li className='OverviewContainerSub1 OverviewContainer1Img'>

            </li>
         
        </ul>  

        <div className='OverviewLine'></div>
        <ul className='OverviewContainer1 OverviewContainer13' >
            
            <li className='OverviewContainerSub1 OverviewContainer1Img'>

            </li>
            <li  className='OverviewContainerSub1 OverviewContainer1Text'>

                 <div  className='head'>
                 <div className="label">
                    <p className="judging-criteria-key">
                    <span className="text-wrapper">
                    Judging Criteria
                    <br />
                    </span>
                    <span className="span">Key attributes</span>
                    </p>
                    </div>
                 </div>

                 <div className='text1 text'>
                    <div className="label">
                        <p className="innovation-and">
                        <span className="text-wrapper">Innovation and Creativity</span>
                        <span className="span">: Evaluate the uniqueness and creativity of the
                        <br />
                        solution. Consider whether it addresses a real-world problem in a novel <br />
                        way or introduces innovative features.
                        </span>
                        </p>
                    </div>
                 </div>

                 <div  className='text2 text'>
                 <div className="label">
                        <p className="innovation-and">
                        <span className="text-wrapper">Functionality:</span>
                        <span className="span">
                        {" "}
                        Assess how well the solution works. Does it perform its <br />
                        intended functions effectively and without major issues? Judges would
                        <br />
                        consider the completeness and robustness of the solution.
                        </span>
                        </p>
                        </div>
                 </div>


                 <div className='text3 text'>
                 <div className="label">
                    <p className="innovation-and">
                    <span className="text-wrapper">Impact and Relevance: </span>
                    <span className="span">
                        Determine the potential impact of the solution <br />
                        in the real world. Does it address a significant problem, and is it relevant <br />
                        to the target audience? Judges would assess the potential social, <br />
                        economic, or environmental benefits.
                    </span>
                    </p>
                    </div>
                 </div>



                 <div className='text4 text'>
                 <div className="label">
                    <p className="innovation-and">
                    <span className="text-wrapper">Technical Complexity: </span>
                    <span className="span">
                    Evaluate the technical sophistication of the solution. <br />
                    Judges would consider the complexity of the code, the use of advanced <br />
                    technologies or algorithms, and the scalability of the solution.
                    </span>
                    </p>
                    </div>
                 </div>

                 <div className='text5 text'>
                 <div className="label">
                    <p className="innovation-and">
                    <span className="text-wrapper">Adherence to Hackathon Rules: </span>
                    <span className="span">
                    Judges will Ensure that the team adhered <br />
                    to the rules and guidelines of the hackathon, including deadlines, use of <br />
                    specific technologies or APIs, and any other competition-specific requirements.
                    </span>
                    </p>
                    </div>
                 </div>

                 <div className='button'>

                    <Button   textP={"Read More"} routeP={"/Register"}/>

                 </div>

            </li>
        </ul>  

        <div className='OverviewLine'></div>
      
              
    </div>
  )
}
