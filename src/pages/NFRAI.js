import React from 'react'
import Hero from '../components/Hero'
import heroImg from '../Assets/benjamin-davies-Zm2n2O7Fph4-unsplash.jpg'
import AboutCompo from '../components/aboutCompo'
import abtimg from "../Assets/alka-jha-5xwBeArXd1E-unsplash.jpg"
import Working from '../components/Working'
import icon1 from "../Assets/Class.png"

import icon2 from '../Assets/Farm 2.png'
import icon3 from '../Assets/Sow.png'
import icon4 from '../Assets/Tree Planting.png'
import icon5 from '../Assets/Organic Food.png'
import icon6 from '../Assets/Knowledge Transfer.png'
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

 const NFRAI = () => {
  return (
    <div>
      <Hero backgroundImage={heroImg} firstLine=" National Federation of Rural Agricultural Economic Institutions (NFRAEI)" tit1="Strengthening Rural Agriculture" tit2="through Unity and Innovation" desc="he National Federation of Rural Agricultural Economic Institutions (NFRAEI) is a pivotal arm of the Gavaki Foundation, dedicated to supporting and empowering Farmer Producer Companies (FPCs), Farmer Producer Organizations (FPOs), Primary Agricultural Credit Societies (PACS), Farmer Interest Groups (FIGs), and Self-Help Groups (SHGs). Our federation operates across multiple states, including Maharashtra, Goa, Andhra Pradesh, Telangana, Gujarat, and Tamil Nadu, aiming to unify and uplift the agricultural community.
"/>
<AboutCompo leftImg={abtimg} desc={["Social Mobilization & Capacity Building", "Financial Inclusion", "Livelihood Promotion", "Convergence"]} firstLine="Our vision and mission" tit1="To create a sustainable and prosperous agricultural sector through collective action, innovation, and empowerment." tit2="Mission" />
<Working tit1=" " tit2="Key Activities"  cardData={cardsdata}/>
    </div>
  )
}

export default NFRAI