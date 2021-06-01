import React from 'react';

import './HomePage.css';
import logo from '../assets/logo.png';
import logoone from '../assets/1.png';
import logotwo from '../assets/2.png';
import logothree from '../assets/3.png';


const HomePage = () => {
    return (
        <>
        <div className="main-logo">
         <img className="mains_logo" src={logo} alt="logo"/>
        </div>
        <div className="content">
            <h1>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
            <section>
            <p>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for<br/> various projects across the globe to save energy.</p>
            <p>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the<br/> old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</p>
           </section>
           <div className="grid-container">
            <img className="fisrt-logo" src={logoone} alt="first-logo"/>
            <img className="new-logos" src={logotwo} alt="new-logo" />
            </div>
            <p className="outer-para">Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director<br/> of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable<br/> Minister of State.</p>
</div>
           <div className="new-page">
               <p className="new-section">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
                  <img className="last-logo" src={logothree} alt="last-logo" />
                  <p className="lastone-para">Valves - Pumps- Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
                 <hr/>
                 <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                 <p className="para-items-list">CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p> 
           </div>
           <footer>
           <div className="all-info">
               <p><i class="fa fa-phone-square" aria-hidden="true"></i>Toll Free 1800 200 1234</p>
               <p><i class="fa fa-facebook" aria-hidden="true"></i>www.facebooks.com/cripumps</p>
               <p><i class="fa fa-wpbeginner" aria-hidden="true"></i>www.crigroups.com</p>
               </div>
           </footer>   
        </>
    );
};


export default HomePage;