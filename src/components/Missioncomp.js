import React from 'react'
import tick from '../Assets/material-symbols_check-circle.png';

const Missioncomp = ({leftImage, firstLine, tit1, desc}) => {
  return (
    <div className='min-h-screen '   >
        <div className='flex justify-center items-center  max-lg:flex-wrap'>
            <div className='flex justify-center items-center w-1/2 max-lg:w-full'>
                <img src={leftImage} alt='left' className='w-full '/>
            </div>
            <div className='bg-[#6D8C54] h-full max-lg:w-full m-0'>
                
            <div className="  p-4 sm:p-0 ml-8 mt-5">
          <span className="text-base font-light text-white text-center mt-10">{firstLine}</span>
          <h3 className="text-3xl font-bold mt-2  text-white">{tit1}</h3>
          <div className="mt-4">
            {desc.map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <img src={tick} alt="Tick" className='w-4 h-4 mr-2'/>
                <div>
                <h1 className="text-base mt-7 text-[#F7C35F]">{item.head}</h1>

                <p className='text-white'>{item.descript}</p>

                </div>
              </div>
            ))}
          </div>
        </div>

            </div>
            
        </div>
    </div>
  )
}

export default Missioncomp