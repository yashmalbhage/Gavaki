import React from 'react'
import Hero from '../components/Hero'
import heroImg from '../Assets/herohome.jpg'
import AboutCompo from '../components/aboutCompo'
import Missioncomp from '../components/Missioncomp'
import Working from '../components/Working'
import left from '../Assets/nandhu-kumar-5NGTf4oD8RA-unsplash.jpg'
import missionImage from '../Assets/guru-moorthy-gokul-BnsyVc5z0zs-unsplash.jpg'
import icon1 from '../Assets/Icon_Apple.png'
import  CarouselDefault from '../components/Testicarousel'
import impactImage from '../Assets/sandy-zebua-a7n65pmnJ4Q-unsplash.jpg'
import Banner from '../components/banner'
import icon2 from '../Assets/Farm 2.png'
import icon3 from '../Assets/Sow.png'
import icon4 from '../Assets/Tree Planting.png'
import icon5 from '../Assets/Organic Food.png'
import icon6 from '../Assets/Hay.png'

const desc = ["Gavaki Foundation empowers rural farming communities.",
    "We support Farmer Producer Companies, Organizations, and Credit Societies.",
    "Our initiatives promote sustainable agriculture and enhance livelihoods."
 ]

 const desct = [
    {head:"Promote Financial Inclusion", descript:" Facilitating access to financial resources and credit to ensure economic stability and growth"},
    {head:"Mobilize and Build Community Capacity", descript:"We foster social mobilization and build robust community institutions to empower rural farmers."},
    {head:"Drive Convergence", descript:"Encouraging collaboration among various stakeholders to achieve collective goals."},
    {head:"Enhance Livelihoods", descript:"Providing training and support to improve agricultural productivity and business acumen."}


 ]
 const cardsdata = [
    {icon:icon1,
    title:"Training & Capacity Building",
    points:[
        "We offer extensive training programs to improve skills in modern agricultural practices, business management, and financial literacy",
       
    ]
    },
    {icon:icon2,
    title:"Market Access & Support",
    points:[
        "Our marketing strategies help farmers access larger markets and negotiate better prices for their products.",
        
    ]
    },
    {icon:icon3,
        title:"Compliance Assistance",
        points:[
            "We provide guidance on regulatory and legal requirements to ensure that all our members operate within the law.",
          
        ]
    },
    {icon:icon4,
        title:"Resource Mobilization",
        points:[
            "We assist in securing financial resources, grants, and investments, and promote financial literacy among our members",
            
        ]
    },
    {icon:icon5,
        title:"Policy Advocacy",
        points:[
            "Engaging with policymakers, we advocate for farmer-friendly policies and fair trade regulations.",
           
        ]
    },
    {icon:icon6,
        title:"Knowledge Sharing",
        points:[
            "We facilitate the exchange of best practices and information to foster continuous improvement and collective learning among our members.",
            
        ]
    }
            
  
  ]

const Home = () => {

  return (
    <div>
        <Hero backgroundImage={heroImg} firstLine="Welcome to Gavaki Foundation" tit1="Empowering Rural Agriculture " tit2="through Innovation and Collaboration" desc="Dedicated to sustainable development and empowering marginalized communities in India through women's empowerment, youth entrepreneurship, rural development, waste management, and vocational training."/>
        <AboutCompo leftImg={left} firstLine="WHO ARE WE?" tit1="Gavaki Foundation empowers rural farmers for sustainable livelihoods." tit2="We’re Leader in Agriculture Market" desc={desc}/>
        <Missioncomp leftImage={missionImage} firstLine='OUR MISSION' tit1='Our mission is to:' desc={desct}/>
        <Working tit1="WHAT WE DO" tit2="What actually Gavaki does?" cardData={cardsdata}/>
        <div>
        <div className="text-center h-full">
      <div className="flex flex-col items-center justify-center  pt-10">
        <span className="text-white font-thin">Testimonials</span>
        <h2 className="text-white font-bold text-2xl underline decoration-[#F7C35F]">Testimonials from Our Leaders</h2>
      </div>
      </div>
      <div className='flex justify-center items-center mb-20 mt-10'>      <CarouselDefault/>
</div>

        </div>

        <AboutCompo leftImg={impactImage} tit1="Our Impact" tit2="Operating across Maharashtra, Goa, Andhra Pradesh, Telangana, Gujarat, Tamil Nadu, and several districts within Maharashtra, the Gavaki Foundation has been instrumental in enhancing the economic independence and resilience of rural farmers. Our initiatives have helped numerous farming communities achieve better market access, improved agricultural practices, and sustainable growth." desc={["Regional Operations", "Economic Impact", "Sustainable Growth"]}/>
       <Banner/>


    </div>
  )
}

export default Home