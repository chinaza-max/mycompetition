import React from 'react';
import "./Privacy.css";
import Vector3 from "../../assets/images/Vector3.png"
import Button from '../../Component/Button/Button';


export default function Privacy() {
  return (
    <div className='HomePrivacy'>

        <ul className='HomePrivacyContainer'>
            <li className='HomePrivacyContainertext'>

            <div>
                <h3>Privacy Policy</h3>
                <h3 className='term'>Terms</h3>
                <p className='last'>Last updated on September 12, 2023</p>
                <p className='below'>Below are our privacy & policy, which outline a lot of goodies. 
                it’s our aim to always take of our participant</p>
            </div>

            <div className="container">
                <div className="centered-div">
                        <p>
                            At getlinked tech Hackathon 1.0, we value your privacy
                            and are committed to protecting your personal information.
                            This Privacy Policy outlines how we collect, use, disclose, 
                            and safeguard your data when you participate in our tech 
                            hackathon event. By participating in our event, you consent 
                            to the practices described in this policy.
                        </p>

                        <h6>
                            Licensing Policy
                        </h6>

                        <p>Here are terms of our Standard License:</p>
                        
                        <ul>
                            <li>
                                <p>
                                    The Standard License grants you a non-exclusive right to
                                    navigate and register for our event
                                </p>

                                <span>
                                    <img src={Vector3}  alt='failed'/>
                                </span>
                            </li>

                            <li>
                                <p>
                                    The Standard License grants you a non-exclusive right to
                                    navigate and register for our event
                                </p>
                                <span>
                                    <img src={Vector3}  alt='failed'/>
                                </span>
                            </li>
                        </ul>

                        <div className='button'>
                            <Button   textP={"Read more"} routeP={"/Register"}/>
                        </div>
                </div>
            </div>

            </li>
            <li className='HomePrivacyContainerImg'></li>
        </ul>
    </div>
  )
}
