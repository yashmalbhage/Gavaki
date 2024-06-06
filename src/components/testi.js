import React from 'react'
import logo from '../Assets/GAVAKI PNG-01.png'

const  Testi = ({desc, auth}) => {
  return (
    <div >
        <section className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg]  shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-16" src={logo} alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <p>
              {desc}
            </p>
          </blockquote>
          <figcaption className="mt-10">
            {/* <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            /> */}
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-[#F7C35F]">{auth}</div>
            
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    </div>
  )
}

export default Testi