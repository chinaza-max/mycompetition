import React,{useEffect,useState} from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";
import Button   from  '../../Component/Button/Button';
import menu from "../../assets/images/menu.png"
import close from "../../assets/images/close.png"
import closeCircle from "../../assets/images/closeCircle.png"
import Back from "../../assets/images/Back.png"
//import PurpleLensFlarePNG1 from "../../assets/images/Purple-Lens-Flare-PNG (3).png"

import { useLocation , useNavigate} from 'react-router-dom';




export default function NavBar() {
    const [toggleMenu,setToggleMenu]=useState(true);
    const location = useLocation();
    const navigate = useNavigate();

    const currentPath = location.pathname;
    const isContactPage = currentPath === '/Contact';

    const toggleMenuStyles = {
        top: toggleMenu ? '-900px' : '0px',
        transition: toggleMenu ? 'top 0.6s ease-out' : 'top 0.9s ease-in', // Use ease-out when hiding and ease-in when showing
        position: 'absolute', 
        right: '0'
      };
      const listItemStyles = {
        opacity: toggleMenu ? 0 : 1, // Set opacity to 0 when hiding the menu
        transition: 'opacity 2s ease , transform 3s ease', // Add a smooth opacity transition
        transform: toggleMenu ? 'translateY(20px)' : 'translateY(0)', // Add landing effect
      };

        const handleGoBack = () => {
            navigate(-1)
        };

        const handleNavigation = () => {
            navigate('/'); 
          };

    useEffect(()=>{


        
    },[toggleMenu])



  return (
    <div className="NavBar2">
        <ul  className='NavBar2Container'>
            <li className='logo'>
                <div className="label">
                    <p className="getlinked"  onClick={handleNavigation}>
                        <span className="text-wrapper">get</span>
                        <span className="span">linked</span>
                    </p>
                </div>
            </li>

            <li className='linksContainer'>
                <ul>  
                    <li  className='links'>
                        <NavLink to={"/Home"}  
                            activeclassname=".active-link">
                            Timeline 

                        </NavLink>
                    </li>

                    <li className='links links2'>
                        <NavLink to={"/keke"}>
                            Overview    
                        </NavLink>
                    </li>

                    <li className='links links2'>
                        <NavLink to={"/loel"}>
                        FAQs 

                        </NavLink>
                    </li>

                    <li className='links links2'>
                        <NavLink to={"/Contact"}>

                        Contact 
                        
                        </NavLink>
                    </li>
                </ul>
            </li>

            <li className='button'>
                <div>
                <Button   textP={"Register"} routeP={"/Register"}/>
                </div>
              
            </li>

            <li className='menu'>
                <div className='menuIcon'>

                    <span onClick={()=>setToggleMenu(false) } >
                        <img  src={menu} alt='not showing uo'/>
                    </span>

                </div>

                <ul   style={toggleMenuStyles}
                    >
                    <li className='linkContainer'>
                        <ul>  
                            <li  className='links' style={listItemStyles}>
                                <NavLink to={"/Home"}  
                                    activeclassname=".active-link">
                                    Timeline 

                                </NavLink>
                            </li>

                            <li className='links links2' style={listItemStyles}>
                                <NavLink to={"/keke"}>
                                    Overview    
                                </NavLink>
                            </li>

                            <li className='links links2' style={listItemStyles}>
                                <NavLink to={"/loel"}>
                                FAQs 

                                </NavLink>
                            </li>

                            <li className='links links2' style={listItemStyles}>
                                <NavLink to={"/Contact"}>
                                    Contact 
                                </NavLink>
                            </li>
                        </ul>

                        <span className='closeMenu' onClick={()=>setToggleMenu(true) } >
                            <span className='closeMenuP' >
                                <img className='cross' src={close}  alt=''/>
                                <img className='closeCircle'  src={closeCircle}  alt=''/>
                            </span>
                        </span>
                    </li>

                    <li className='buttonM'>
                        <div>
                            <Button/>
                        </div>
                    </li>

                </ul>
        
            </li>

        </ul>

        <div className="contactBack" >
           <div>

            {
                isContactPage?
                    <span className='closeMenuP' onClick={()=>handleGoBack()} >
                        <img className='cross' src={Back}  alt=''/>
                        <img className='closeCircle'  src={closeCircle}  alt=''/>
                    </span>
                :
                <h2 >
                       Register
                </h2>
            }
                
           </div>
        </div>
    </div>  
  )
}

/**  
 * 
 * 
 * style={{ display: isContactPage ?'block'  : 'none' }}
*/

