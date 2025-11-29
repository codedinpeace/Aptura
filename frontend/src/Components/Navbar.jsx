import React, {useState} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import {Menu, X} from 'lucide-react'

const Navbar = () => {

  const [visible, setVisible] = useState(false)
    useGSAP(()=>{
      gsap.from(".Navlinks a", {
        y:-50,
        opacity:0,
        // duration:0.5
        stagger:0.1
      })

      gsap.from(".Logo", {
        y:-50,
        // x:-100,
        opacity:0,
      })

      gsap.from(".Buttons", {
        y:-50,
        opacity:0,
      })
    })
  

  return (
    <div>

    <div className='max-lg:hidden flex justify-around items-center mt-8'>
      <div>
        <Link to="/"><img className='Logo max-lg:w-20 w-22' src={Logo} alt="" /></Link>
      </div>
      <div className='Navlinks text-[16px] flex gap-10 max-xl:gap-5 pl-20'>
        <a href="/">Home</a>
        <a href="#benefits">Benefits</a>
        <a href="#usage">Usage</a> 
        <a href="#testimonials">Testimonails</a> 
      </div>
      <div className="Buttons text-[16px] flex gap-5 max-lg:gap-2">
        <button className='hover:bg-zinc-900 max-lg:px-7 px-9 py-2 rounded-xl cursor-pointer'>Log in</button>
        <button className='px-7 py-2 bg-gradient-to-bl max-lg:px-5 transition-shadow from-[#6b3ef4b5] via-[#8d67fe42] to-[#6b3ef4a1] rounded-2xl cursor-pointer hover:shadow-[0_0_6px_2px_rgba(108,62,244,0.30),0_0_8px_3px_rgba(141,103,254,0.08)]'>Get Started</button>
      </div>
    </div>

    {/* Mobile Layout */}

    <div className='lg:hidden'> 
    <div className='flex justify-between px-10 mt-5'>
      <Link to='/'><img src={Logo} className='w-20' alt="" /></Link>
      <Menu className='cursor-pointer' onClick={()=>{setVisible(true)}} />
    </div>
      <div>

      </div>
 <div className={`text-lg flex-col flex gap-10 max-xl:gap-5 ${visible ? "left-[40%]" : "left-[100%]" } transition-all duration-500 pl-20 h-screen absolute top-0 w-full p-10 bg-[#111]`}>
  <div className='flex flex-col gap-5'>
    
        <a href="/">Home</a>
        <a href="#benefits">Benefits</a>
        <a href="#usage">Usage</a> 
        <a href="#testimonials">Testimonails</a> 
        <div className="text-lg flex flex-col gap-3 max-lg:gap-2">
        <button className='bg-zinc-900 w-50 max-lg:px-7 px-9 py-2 rounded-xl cursor-pointer'>Log in</button>
        <button className='w-50 py-2 bg-gradient-to-bl  transition-shadow from-[#6b3ef4b5] via-[#8d67fe42] to-[#6b3ef4a1] rounded-2xl cursor-pointer hover:shadow-[0_0_6px_2px_rgba(108,62,244,0.30),0_0_8px_3px_rgba(141,103,254,0.08)]'>Get Started</button>
      </div>
        <X className='cursor-pointer' onClick={()=>{setVisible(false)}}/>
  </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar