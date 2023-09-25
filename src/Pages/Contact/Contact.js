import React,{useState} from 'react';
import "./Contact.css"
import NavBar from "../../Layout/NavBarC/NavBar"
import Social from "../../Component/Social/Social"
import axios from "axios"
import Swal from 'sweetalert2'


export default function Contact() {



  const [formData, setFormData] = useState({
    email:"",
    phone_number:"",
    first_name: '',
    message:""
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };




  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Here, you can perform actions with the collected data
    console.log('Form Data:', formData);
    axios.post('https://backend.getlinked.ai/hackathon/contact-form', formData)
    .then((response) => {
      console.log('POST request success:', response.data);


      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'message submitted',
        showConfirmButton: false,
        timer: 1500
      })
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



  return (
    <div className='Contact'>
       <NavBar/>

      <ul className='Contact1' >

        <li className='Contact1Text'>

            <h2>Get in touch</h2>
            <p>Get in touch</p>
            <p className="contact-information">
              Contact
              <br />
              Information
            </p>

            <p className="text-wrapper">Call Us : 07067981819</p>

            <p className="element-alara-street-yaba">
              27,Alara Street
              <br />
              Yaba 100012
              <br />
              Lagos State
            </p>

            <p className="we-are-open-from">
              we are open from Monday-Friday
              <br />
              08:00am - 05:00pm
            </p>
            <h6>Share on</h6>
            <Social/>

            
        </li>

        <li className='Contact1Form'>
           
            <div>

              <form >
                  <h2>
                    Questions or need assistance?
                  </h2>
                  <h2>
                  Let us know about it!
                  </h2>
                        
                  <input className='inputfield' placeholder="First Name"  type='text' name="first_name" />
                  <input  className='inputfield' placeholder="Mail" type='email' name="email" />
                  <textarea className='inputfield textarea' placeholder="Massage" name="message" type="text"></textarea>



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
        
      
      <div className='mobile contact2'>
        <div>
              <form  onSubmit={handleSubmit}>

                  <h2>
                    Questions or need assistance?
                  </h2>
                  <h2>
                    assistance?
                  </h2>
                  <h2>
                  Let us know about it!
                  </h2>


                  <p>
                    Email us below to any question related to our event 
                  </p>
                    

                  <input className='inputfield' placeholder="Teams Name" type='text' onChange={handleInputChange} name="first_name" />

                  <input className='inputfield' placeholder="number" type='number' onChange={handleInputChange} name="phone_number" />
                  <input  className='inputfield' placeholder="email" type='email' onChange={handleInputChange} name="email" />
                  <textarea className='inputfield textarea' placeholder="Massage" onChange={handleInputChange} type="text" name="message"></textarea>



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

                  
              <h6>
                Share on
              </h6>
                <Social/>

            </div>
        </div>

    </div>
  )
}


