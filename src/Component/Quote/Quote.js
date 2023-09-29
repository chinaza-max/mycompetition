import React,{useEffect} from 'react'
import plus from "../../assets/images/+.png"
import "./Quote.css"

export default function Quote() {



/*
    const items = document.querySelectorAll('.accordion button');

    function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
    }

    items.forEach((item) => item.addEventListener('click', toggleAccordion));


    */

    /*
    useEffect(()=>{
        const items = document.querySelectorAll('.accordion button');

        function toggleAccordion() {
            const itemToggle = this.getAttribute('aria-expanded');
            for (let i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
            }
        
            if (itemToggle == 'false') {
                this.setAttribute('aria-expanded', 'true');
            }
        }
        
        items.forEach((item) => item.addEventListener('click', toggleAccordion));
    
    
    })
    */

    useEffect(() => {
        const items = document.querySelectorAll('.accordion button');

        function toggleAccordion() {
            const itemToggle = this.getAttribute('aria-expanded');
            for (let i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
            }

            if (itemToggle === 'false') {
                this.setAttribute('aria-expanded', 'true');
            }
        }

        items.forEach((item) => item.addEventListener('click', toggleAccordion));

        // Cleanup event listeners when the component unmounts
        return () => {
            items.forEach((item) => item.removeEventListener('click', toggleAccordion));
        };
    }, []);




  return (
    <div className='Quote'>
        <div className="container">
        <div className="accordion">
            <div className="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
                <span className="accordion-title">Can I work on a project I started before the hackathon?</span>
                <span className="icon" aria-hidden="true">
                    <img src={plus} alt='cant load'/>
                </span>
            </button>
            <div className="accordion-content">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.
                Ut tortor pretium viverra suspendisse potenti.
                </p>
            </div>
            </div>
            <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
                <span className="accordion-title">What happens if I need help during the hackathon?</span>
                <span className="icon" aria-hidden="true">
                    <img src={plus} alt='cant load'/>
                </span>            </button>
            <div className="accordion-content">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.
                Ut tortor pretium viverra suspendisse potenti.
                </p>
            </div>
            </div>
            <div className="accordion-item">
            <button id="accordion-button-3" aria-expanded="false">
                <span className="accordion-title">What happens if I don't have an idea for a project?</span>
                <span className="icon" aria-hidden="true">
                    <img src={plus} alt='cant load'/>
                </span>            </button>
            <div className="accordion-content">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.
                Ut tortor pretium viverra suspendisse potenti.
                </p>
            </div>
            </div>
            <div className="accordion-item">
            <button id="accordion-button-4" aria-expanded="false">
                <span className="accordion-title">Can I join a team or do I have to come with one?</span>
                <span className="icon" aria-hidden="true">
                    <img src={plus} alt='cant load'/>
                </span>            </button>
            <div className="accordion-content">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.
                Ut tortor pretium viverra suspendisse potenti.
                </p>
            </div>
            </div>
            <div className="accordion-item">
            <button id="accordion-button-5" aria-expanded="false">
                <span className="accordion-title">What happens after the hackathon ends</span>
                <span className="icon" aria-hidden="true">
                    <img src={plus} alt='cant load'/>
                </span>            </button>
            <div className="accordion-content">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.
                Ut tortor pretium viverra suspendisse potenti.
                </p>
            </div>
            </div>

            <div className="accordion-item">
            <button id="accordion-button-5" aria-expanded="false">
                <span className="accordion-title">Can I work on a project I started before the hackathon?</span>
                <span className="icon" aria-hidden="true">
                    <img src={plus} alt='cant load'/>
                </span>            </button>
            <div className="accordion-content">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.
                Ut tortor pretium viverra suspendisse potenti.
                </p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
