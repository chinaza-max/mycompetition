import React,{useState,useEffect} from 'react';
import "./Register.css";
import NavBar from "../../Layout/NavBarC/NavBar"
import man  from "../../assets/images/man2.png"
import woman from "../../assets/images/woman.png"
import axios from "axios"
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'



export default function Register() {

  const [complete, setComplete] = useState(false); 
  const [data, setData] = useState([]); 


  const [formData, setFormData] = useState({
    email:"",
    phone_number:"",
    team_name: "",
    group_size: '',
    project_topic:"",
    category: "",
    privacy_poclicy_accepted: ""
  });


  
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  };


  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    console.log(value)

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Here, you can perform actions with the collected data
    console.log('Form Data:', formData);

    axios.post('https://backend.getlinked.ai/hackathon/registration', formData)
    .then((response) => {
      console.log('POST request success:', response.data);
      setComplete(true)
    })
    .catch((error) => {
      console.error('POST request error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    });
  };

  
  useEffect(()=>{
    axios.get('https://backend.getlinked.ai/hackathon/categories-list')
    .then((response) => {
      // Assuming the response data is an array of objects with 'id' and 'name' properties
      setData(response.data);
    })
    .catch((error) => {
      console.error('GET request error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    });

  },[complete])


  return (
    <div className='Register'>
        <NavBar/>

        <ul className='RegisterContainer'>

          <li className='RegisterContainerImg'>

          </li>
          <li className='RegisterContainerForm'>
          
            <div>

              <form  onSubmit={handleSubmit}>

                  <h2>
                    Register
                  </h2>

                  <p className='be'>
                    Be part of this movement!
                    <span className="dot "></span>
                    <span className="dot "></span>
                    <span className="dot "></span>
                    <span className="dot "></span>
                    <span className="dot "></span>
                    <span className="dot "></span>
                    <span className="dot "></span>
                    <span className="dot "></span>
                    <span className="dot "></span>
                    <span className="dot "></span> 
                    <span className="dot "></span>
                    <span className="dot "></span>
                    <img  className="man" src={man} alt='img' />
                    <img className='woman' src={woman}  alt='img'/>
                  </p>

                  <h1>
                    CREATE YOUR ACCOUNT
                  </h1>


                  <ul>
                    <li>
                        <label>Team's Name</label>
                      <input className='inputfield'  type='text' name="team_name"           onChange={handleInputChange}
 placeholder="Enter the name of the group" />
                    </li>
                    <li>
                    <label>Phone</label>

                      <input className='inputfield'  type='number' name="phone_number"           onChange={handleInputChange}
 placeholder="Enter your phone number" />
                    </li>
                  </ul>


                  <ul>
                    <li>
                    <label>Email</label>
                    <input className='inputfield' type='email' name="email"           onChange={handleInputChange}
 placeholder="Enter your emial  address" />
                    </li>
                    <li>
                    <label>Project Topic</label>
                      <input className='inputfield' type='text'           onChange={handleInputChange}
 name="project_topic" placeholder="What is your group project topic" />
                    </li>
                  </ul> 
                  

                  <ul className='dropDown'>
                    <li className='dropDown1'>
                      <label>Category</label>
                      <select defaultValue="option0" name="category" className='inputfield'  onChange={handleInputChange}>
                        <option value="option0" >Select your category</option>
                        {data.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>

                    </li>
                    <li className='dropDown2'>
                    <label>Group Size</label>

                    <select className='inputfield' defaultValue="option1"  name="group_size" onChange={handleInputChange}>
                      <option  value="option1" >Select</option>
                      <option  value="1" >1</option>
                      <option  value="2" >2</option>
                      <option  value="3" >3</option>

                    </select>


                    </li>
                  </ul>
                        

                  <p className='please'>Please review your registration details before submitting</p>
  
                    <div className="centered-checkbox">
                          <input type="checkbox" className="myCheckbox" name="privacy_poclicy_accepted" value="true"   onChange={handleInputChange}/>
                          <label htmlFor="myCheckbox" className='agreed'>I agree with the event terms and conditions and privacy policy</label>
                    </div>
                      
                  <div className='button'>
                  <button type="submit" className="box2">
                    <div className="register-button">
                        <div className="overlap-group">
                            <div className="text-wrapper">Submit</div>
                        </div>
                    </div>
                  </button>
                  </div>
              </form>

            </div>


          </li>
        </ul>
          
        {
          complete?
          <div className='RegisterOverLay'>
          <div className='RegisterOverLayContainer'>
              <ul className='RegisterOverLayContainer1'>
                <li className='RegisterOverLayContainer11'>
                
                </li>
                <li className='RegisterOverLayContainer12'>


                    <h1>Congratulations</h1>
                    <h1>you have successfully Registered!</h1>
                    <p>Yes, it was easy and you did it!</p>
                    <p>check your mail box for next step</p>

                  <div className='button'>
                  <button onClick={()=>handleGoBack()}   className="box2">
                    <div className="register-button">
                        <div className="overlap-group">
                            <div className="text-wrapper">Back</div>
                        </div>
                    </div>
                  </button>
                  </div>

                </li>
              </ul>
          </div>
      </div>
          :""
        }
       

    </div>
  )
}
