import React from 'react'
import "./FAQ.css"
import Quote from '../../Component/Quote/Quote'

export default function FAQ() {
  return (
    <div className='FAQ'>
        <ul className='FAQcontainer' >
           
           <li  className='FAQcontainerText'>

                <div  className='hearder'>
                <div className="label">
                    <p className="frequently-ask">
                    <span className="text-wrapper">
                    Frequently Ask
                    <br />
                    </span>
                    <span className="span">Question</span>
                    </p>
                    </div>
                </div>
                <div  className='text'>
                <div className="label">
                    <p className="we-got-answers-to">
                    <span className="text-wrapper">
                    We got answers to the questions that you might
                    <br />
                    want to ask about{" "}
                    </span>
                    <span className="span">getlinked Hackathon 1.0</span>
                    </p>
                    </div>
                </div>

                <Quote/>
                

           </li>
           <li className='FAQcontainerImg'>

           </li>
       </ul> 
    </div>
  )
}
