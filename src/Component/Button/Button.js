import React from 'react'
import  './Button.css'
import { Link   } from 'react-router-dom';
import { useLocation , useNavigate} from 'react-router-dom';




export default function Button(props) {
  const location = useLocation();


  const currentPath = location.pathname;
  const isRegisterPage = currentPath === '/Register';





  return (
    <>

        {
          isRegisterPage ?

          <Link  to={props.routeP} className="box2">
            <div className="register-button">
                <div className="overlap-group">
                    <div className="text-wrapper">{props.textP}</div>
                </div>
            </div>
          </Link>
          
               : 
            <Link   to={props.routeP} className="box">
               <div className="register-button">
                   <div className="overlap-group">
                       <div className="text-wrapper">{props.textP}</div>
                   </div>
               </div>
           </Link>
        }
       
    </>
  )
}
