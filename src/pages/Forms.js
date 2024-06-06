import React from 'react'
import Hero from '../components/Hero'
import heroImg from "../Assets/dan-meyers-IQVFVH0ajag-unsplash.jpg"

 const Forms = () => {
  return (
    <div className='mb-10'>
      <Hero backgroundImage={heroImg} firstLine="Forms" tit1="Join Us in Empowering Rural Agriculture" desc="To become a part of the National Federation of Rural Agricultural Economic Institutions (NFRAEI), we invite Farmer Producer Companies (FPCs) and Farmer Producer Organizations (FPOs) to complete the necessary application forms and submit them for review."/>
    
      <div>
        <div className="flex pt-10">
          <div className='p-4'>
            <p className='font-thin text-white'>Application Form for FPC/FPO Membership</p>
            <h4 className='font-bold  text-white' >
            To apply for membership, please download the form and send the completed form to :<br></br>
            Email: forms@gavaki.org  <br></br>
            Mail*: D-102, Regency Park, Chakki Naka, Kalyan E - 421306, Maharashtra, India
            </h4>

          </div>
          <div className="text-center flex justify-center items-center p-4 w-1/2">
                            <button type="submit" className="w-full bg-[#F7C35F] text-grey-700 px-6 py-3 font-xl rounded-md sm:mb-0 w-64">Click to downlaod</button>
                        </div>
        </div>
        <div className="flex pt-10">
          <div className='p-4'>
            <p className='font-thin text-white'>Application Form for FIG Membership</p>
            <h4 className='font-bold  text-white' >
            To apply for membership, please download the form and send the completed form to :<br></br>
            Email: forms@gavaki.org  <br></br>
            Mail*: D-102, Regency Park, Chakki Naka, Kalyan E - 421306, Maharashtra, India
            </h4>

          </div>
          <div className="text-center flex justify-center items-center p-4 w-1/2">
                            <button type="submit" className="w-full bg-[#F7C35F] text-grey-700 px-6 py-3 font-xl rounded-md sm:mb-0 w-64">Click to downlaod</button>
                        </div>
        </div>
        <div className="flex pt-10">
          <div className='p-4'>
            <p className='font-thin text-white'>Application Form for SHG Membership</p>
            <h4 className='font-bold  text-white' >
            To apply for membership, please download the form and send the completed form to :<br></br>
            Email: forms@gavaki.org  <br></br>
            Mail*: D-102, Regency Park, Chakki Naka, Kalyan E - 421306, Maharashtra, India
            </h4>

          </div>
          <div className="text-center flex justify-center items-center p-4 w-1/2">
                            <button type="submit" className="w-full bg-[#F7C35F] text-grey-700 px-6 py-3 font-xl rounded-md sm:mb-0 w-64">Click to downlaod</button>
                        </div>
        </div>
        <div className="flex pt-10">
          <div className='p-4'>
            <p className='font-thin text-white'>Application Form for PACS Membership</p>
            <h4 className='font-bold  text-white' >
            To apply for membership, please download the form and send the completed form to :<br></br>
            Email: forms@gavaki.org  <br></br>
            Mail*: D-102, Regency Park, Chakki Naka, Kalyan E - 421306, Maharashtra, India
            </h4>

          </div>
          <div className="text-center flex justify-center items-center p-4 w-1/2">
                            <button type="submit" className="w-full bg-[#F7C35F] text-grey-700 px-6 py-3 font-xl rounded-md sm:mb-0 w-64">Click to downlaod</button>
                        </div>
        </div>
      </div>
    </div>
    
  )
}

export default Forms