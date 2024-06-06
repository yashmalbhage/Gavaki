import React from 'react';
import bgImg from '../Assets/style (1).png';
import tick from '../Assets/material-symbols_check-circle.png';
import bottomImg from '../Assets/style.png'

const AboutCompo = ({ leftImg, firstLine, tit1, tit2, desc, bg }) => {
  return (
    <div className='relative min-h-screen w-full overflow-hidden' >
      <img src={bgImg} alt="Background" className='h-60 '/>
      <div className="flex flex-col sm:flex-row p-4   -translate-y-48  justify-center items-center ">
        <div className="w-full sm:w-1/2 flex justify-center ">
        <img src={bottomImg} alt="bottom" className='sm:h-40'/>

          <img src={leftImg} alt='Left' className='w-96 sm:h-3/5 sm:float-right'/>

        </div>

        <div className="w-full sm:w-1/2 p-4 sm:p-0 ml-8">
          <span className="text-base font-light text-white">{firstLine}</span>
          <h3 className="text-3xl font-bold mt-2 sm:pr-72 text-white">{tit1}</h3>
          <p className="text-base mt-10 text-[#F7C35F]">{tit2}</p>
          <div className="mt-4">
            {desc.map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <img src={tick} alt="Tick" className='w-4 h-4 mr-2'/>
                <p className='text-white'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompo;
