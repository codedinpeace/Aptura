import React from 'react'
import Cpu from '../../assets/Cpu.svg'

const WhyAptura = () => {
  return (
    <>  
      <div className='mt-30'>
        <div className='flex justify-center mb-10'>
      <div className='line2 w-[40%] h-[2px]'></div>
        </div>
        <div className="heading flex justify-center flex-col items-center">
          <h1 className='text-5xl'>Why Aptura?</h1>
          <p className='text-[#B2B2B2] text-lg max-w-lg text-center mt-4'>Everything you need to create a professional resume faster and smarter.</p>
        </div>
        <div className="bentoBox mt-10">
          <div className="smartTemplates relative w-[289px] h-[419px]">
            <div className="overlay absolute w-[289px] h-[419px] top-0 left-0 ">
            <div className="content">
              <img src={Cpu} className='w-' alt="" />
              <div className='flex mt-[-80px] justify-center items-center flex-col gap-3'>
                <h3 className='text-3xl '>Smart Templates</h3>
                <p className='text-xl max-w-[300px] text-center'>Ready-made, modern layouts.</p>
              </div>
            </div>
            </div>
            <div className="2-boxes">
              <div className="instantExport w-[289px] h-[180px]">

              </div>
              <div className="auto-save">

              </div>
            </div>
          </div>
            <div className="custom-branding">

            </div>
        </div>
      </div>
    </>
  )
}

export default WhyAptura