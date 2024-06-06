import React from 'react'
import Hero from '../components/Hero'
import heroImg from "../Assets/jake-gard-CetB-bTDBtY-unsplash.jpg"
import Contactform from '../components/Contactform'

const Contact = () => {
  return (
    <div>
      <Hero backgroundImage={heroImg} firstLine="Contact Us" tit1="We’d love to hear from you!" desc="Whether you have questions about our programs, want to get involved, or need assistance, our team is here to help. Reach out to us through any of the following contact methods, and we will respond as soon as possible."/>
    <Contactform/>
    </div>
    
  )
}

export default Contact