import React from 'react'
import pic from '../assets/Himanshi.png';  

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped,Typed } from "react-typed";
function Home() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 text-white"> 
     <div className='flex flex-col md:flex-row'>
       <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
       <span className='text-xl'>Code, Creativity, Consistency, Clarity </span>
      <div className='flex space-x-2 text-2xl md:text-4xl'>
         <h1> Hello, I'm a </h1>
       {/* <span className='text-yellow-500 font-bold'>Developer</span> */}
      
       <ReactTyped
       className='text-yellow-500 font-bold'
          
          strings={["Developer", "Designer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
       
/>
       </div>
       <br />
       <p className='text-sm md:text-md text-justify'> 
        I’m a versatile programmer and UI/UX designer 
       with a passion for creating seamless, user-centered
        experiences. Constantly exploring new technologies, I
         focus on creating innovative solutions that not only
          meet user needs but also anticipate the future
           of tech.
       </p>
       <br />

{/* Social media icons */}
<div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
<div className='space-y-2'>
  <h1 className='font-bold'> Available on
  </h1>
  <ul className='flex space-x-5'>
    <li>
      <a href='https://www.facebook.com/himanshi.gaire' target='_blank'>
      
      <FaFacebookSquare className='text-2xl cursor-pinter'  />
      </a>
          </li>
   
    <li>
    <a href='https://www.instagram.com/himanshi_chill/' target='_blank'>
      
      <FaSquareInstagram className='text-2xl cursor-pinter' />
      </a>
    </li>
    <li>
    <a href='https://www.facebook.com/himanshi.gaire' target='_blank'>
      
      <FaSquareXTwitter className='text-2xl cursor-pinter' />
      </a>
    </li>
    <li>
    <a href='https://www.facebook.com/himanshi.gaire' target='_blank'>
      
      <IoLogoLinkedin  className='text-2xl cursor-pinter'/>
      </a>
    </li>
  </ul>
  
</div>
<div className='space-y-2'>
<h1 className='font-bold'> Currently working on
  </h1>
  <div className='flex space-x-5'>
  <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full ' />
  <SiExpress  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full '/>
  <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full ' />
  <FaNodeJs  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full '/>
  
  </div>
  
</div>
</div>
        </div> 
      <div className='md:w-1/2 md:ml-48 md:mt-15 mt-8 order-1'> 

      <img 
      src={pic} 
      className="rounded-full md:w-[450px] md:h-[450px]" alt=''></img></div>
      </div>
      
      </div>
      <br />
      <hr />
    </>
  )
}

export default Home
