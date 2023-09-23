import React from 'react'
import  './Button.css'
import { Link   } from 'react-router-dom';




export default function Button() {
  return (
    <>
        <Link  to="/Register" className="box">
            <div className="register-button">
                <div className="overlap-group">
                    <div className="text-wrapper">Register</div>
                </div>
            </div>
        </Link>
    </>
  )
}
