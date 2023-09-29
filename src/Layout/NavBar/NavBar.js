import React,{useEffect,useState} from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";
import Button   from  '../../Component/Button/Button';
import menu from "../../assets/images/menu.png"
import close from "../../assets/images/close.png"
import closeCircle from "../../assets/images/closeCircle.png"
import { useNavigate} from 'react-router-dom';



export default function NavBar(props) {
    const [toggleMenu,setToggleMenu]=useState(true);
    const [NavState, setNavState] = useState({
        property1: false,
        property2: false,
        property3: false,
      });


    const updateNavState = (property1, property2, property3) => {

        setNavState({
            property1, 
            property2,
            property3,
        });
    };


    const navigate = useNavigate();


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
  
    const handleNavigation = () => {
        navigate('/'); 
    };
      
    const scrollToOverView = () => {
        props.scrollToOverViewP()
    };

    const scrollToTimeline= () => {
        props.scrollToTimelineP()
    };

    const scrollToFAQRef= () => {
        props.scrollToFAQRefP()
    };

    
    useEffect(()=>{

        let timer=null
        if(props.navNameP==="Timeline"){
            setTimeOutFunction(true, false, false)
        }
        else if(props.navNameP==="Overview"){
            setTimeOutFunction(false, true, false)
        }
        else if(props.navNameP==="FAQs"){ 
            setTimeOutFunction(false, false, true)
        }
        else{
            if(timer){
                clearTimeout(timer);
            }
        }


        function setTimeOutFunction(value1,value2,value3){

            timer =setTimeout(() => {
                updateNavState(value1, value2, value3)
            }, 5);

        }


    },[toggleMenu ,NavState,props.navNameP])
    

  return (
    <div className="NavBar">
        <ul>

            <li className='logo'>
                <div className="label">
                    <p className="getlinked" onClick={handleNavigation}>
                        <span className="text-wrapper">get</span>
                        <span className="span">linked</span>
                    </p>
                </div>
            </li>

            <li className='linksContainer'>
                <ul>  
                    <li  className='links'>
                        <NavLink to={"/#"}  className="link" 
                            onClick={ ()=>{ updateNavState(true, false, false);scrollToTimeline()} }
                            id={NavState.property1?"activeSection":"" }>
                            Timeline
                        </NavLink>
                    </li>

                    <li className='links links2'>
                        <NavLink to={"/#"} className="link"   onClick={ ()=>{ updateNavState(false, true, false);scrollToOverView() } }
                            id={NavState.property2?"activeSection":"" }>
                            Overview    
                        </NavLink>
                    </li>

                    <li className='links links2'>
                        <NavLink to={"/#"} className="link"  onClick={ ()=>{ updateNavState(false, false, true); scrollToFAQRef()}  }
                            id={NavState.property3?"activeSection":"" }>
                        FAQs 

                        </NavLink>
                    </li>

                    <li className='links links2'>
                        <NavLink to={"/Contact"}  onClick={ ()=> updateNavState(false, false, false)  }>

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

                        <Button   textP={"Register"} routeP={"/Register"}/>

                        </div>
                    </li>

                </ul>
        
            </li>

        </ul>

    </div>  
  )
}
