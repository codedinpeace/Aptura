import React from 'react'
import Navbar from '../../Components/Navbar'

const HomePage = () => {
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

    </div>
    </div>
    </>
  )
}

export default HomePage