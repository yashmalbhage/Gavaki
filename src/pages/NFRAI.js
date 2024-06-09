import React from 'react'
import Hero from '../components/Hero'
import heroImg from '../Assets/benjamin-davies-Zm2n2O7Fph4-unsplash.jpg'
import AboutCompo from '../components/aboutCompo'
import abtimg from "../Assets/NFRAEI AI-01.png"
import Working from '../components/Working'
import { useTranslation } from 'react-i18next';

import icon1 from "../Assets/Class.png"

import icon2 from '../Assets/Farm 2.png'
import icon3 from '../Assets/Sow.png'
import icon4 from '../Assets/Tree Planting.png'
import icon5 from '../Assets/Organic Food.png'
import icon6 from '../Assets/Knowledge Transfer.png'


 const NFRAI = () => {
    const { t } = useTranslation();
    const cardsdata = [
        {icon:icon1,
        title:t('nfraie_working_card1_title'),
        points:[
            t('nfraie_working_card1_point1'),
           
        ]
        },
        {icon:icon2,
            title:t('nfraie_working_card2_title'),
            points:[
                t('nfraie_working_card2_point1'),
               
            ]
            },
            {icon:icon3,
                title:t('nfraie_working_card3_title'),
                points:[
                    t('nfraie_working_card3_point1'),
                   
                ]

                },
                {icon:icon4,
                    title:t('nfraie_working_card4_title'),
                    points:[
                        t('nfraie_working_card4_point1'),
                       
                    ]
                    },
                    {icon:icon5,
                        title:t('nfraie_working_card5_title'),
                        points:[
                            t('nfraie_working_card5_point1'),
                           
                        ]
                        },
                        {icon:icon6,
                            title:t('nfraie_working_card6_title'),
                            points:[
                                t('nfraie_working_card6_point1'),
                               
                            ]
                            },
       
                
      
      ]
  return (
    <div>
      <Hero backgroundImage={heroImg} firstLine={t('nfraie_hero_firstLine')} tit1={t('nfraie_hero_tit1')} tit2={t('nfraie_hero_tit2')} desc={t('nfraie_hero_desc')}
/>
<AboutCompo leftImgi={abtimg} desc={[t('nfraie_aboutCompo_desc1'), t('nfraie_aboutCompo_desc2'), t('nfraie_aboutCompo_desc3'), t('nfraie_aboutCompo_desc4')]} firstLine={t('Our vision and mission')} tit1={t('nfraie_aboutCompo_firstLine')} tit2={t('nfraie_aboutCompo_tit1')} />
<Working tit1=" " tit2="Key Activities"  cardData={cardsdata}/>
    </div>
  )
}

export default NFRAI