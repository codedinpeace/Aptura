import React from 'react'
import Navbar from '../../Components/Navbar'
import Netflix from '../../assets/Netflix.svg'
import Zoom from '../../assets/Zoom.svg'
import DropBox from '../../assets/DropBox.svg'
import DoorDash from '../../assets/DoorDash.svg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HomePage = () => {

  useGSAP(()=>{
    gsap.from(".your-career-starts-here",{
      opacity:0,
      y:-50,
      duration:0.5,

    })
    gsap.from(".headline",{
      delay:0.2,
      y:-50,
      opacity:0,
      duration:0.5,
    })
    gsap.from(".subheadline",{
      y:-50,
      delay:0.4,
      opacity:0,
      duration:0.5,
    })
    gsap.from(".buttons",{
      y:-50,
      delay:0.6,
      opacity:0,
      duration:0.5,
    })  
    gsap.from(".line",{
      width:0,
      delay:0.4,
      opacity:0,
      duration:0.5,
    })  

    gsap.from(".companies-logo img",{
      stagger:0.3,
      duration:0.8,
      y:-30,
      opacity:0,
      delay:0.6
    })
  })

  return (
    <>
    <div>
    <div className='homepage   w-full h-screen'>
      <Navbar />
      <div className='flex flex-col justify-center items-center mt-30 gap-10 max-md:gap-6'>
        <div className='flex justify-center  '>
        <div className="your-career-starts-here rounded-full px-10 py-2 ">
          <p className='text-[#E0E0E0] text-[16px]'>Your career starts here</p>
        </div>
        </div>
        <div className="headline flex justify-center">
          <h1 className='text-6xl max-w-3xl text-center max-lg:max-w-xl max-lg:text-5xl max-md:max-w-md max-md:text-4xl max-sm:max-w-sm max-sm:text-3xl'>Build A Job Ready Resume, WIthin <span className='text-[#6C3FF3]'>Minutes</span></h1>
        </div>
        <div className="subheadline flex justify-center">
          <p className='text-[#B2B2B2] max-w-xl text-center max-lg:max-w-md max-sm:text-[14px]'>Create polished, professional resumes that highlight your skills and get noticed — no design experience needed</p>
        </div>
        <div className="buttons text-lg flex justify-center gap-10 max-md:gap-5 max-sm:gap-2 max-md:text-[14px]">
        <button className='px-7 py-2   bg-gradient-to-bl max-lg:px-5 transition-shadow from-[#6b3ef4b5] via-[#8d67fe42] to-[#6b3ef4a1] rounded-2xl cursor-pointer hover:shadow-[0_0_6px_2px_rgba(108,62,244,0.30),0_0_8px_3px_rgba(141,103,254,0.08)] max-sm:px-5'>Build Your Resume</button>
        <button className='border-1  hover:bg-gradient-to-bl from-[#6b3ef4b5] via-[#8d67fe42] to-[#6b3ef4a1] hover:border-none border-[#B39AFE] transition-bg duration-300 max-lg:px-7 px-9 py-2 rounded-xl cursor-pointer max-sm:px-5'>Make an account</button>
        </div>
      </div>
    <div className="companies flex justify-center flex-col items-center mt-30">
      <div className='line w-[40%] h-[2px]'></div>
      <div className="companies-logo overflow-hidden flex gap-20 mt-5  max-lg:gap-10 flex-wrap max-md:gap-5 max-md:px-20 justify-center ">
        <img src={Netflix} alt=""  className='max-lg:w-20' />
        <img src={Zoom} alt="" className='max-lg:w-20' />
        <img src={DoorDash} alt="" className='max-lg:w-40'  />
        <img src={DropBox} alt=""  className='max-lg:w-30' />
      </div>
    </div>

    </div>
    </div>
    </>
  )
}

export default HomePage