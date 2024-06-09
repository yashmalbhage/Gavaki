// src/pages/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import AboutCompo from '../components/aboutCompo';
import Missioncomp from '../components/Missioncomp';
import Working from '../components/Working';
import CarouselDefault from '../components/Testicarousel';
import TestimonialSlider from '../components/testi';
import Banner from '../components/banner';

// Assets
import heroImg from '../Assets/herohome.jpg';
import left from '../Assets/nandhu-kumar-5NGTf4oD8RA-unsplash.jpg';
import missionImage from '../Assets/guru-moorthy-gokul-BnsyVc5z0zs-unsplash.jpg';
import icon1 from '../Assets/Icon_Apple.png';
import icon2 from '../Assets/Farm 2.png';
import icon3 from '../Assets/Sow.png';
import icon4 from '../Assets/Tree Planting.png';
import icon5 from '../Assets/Organic Food.png';
import icon6 from '../Assets/Hay.png';
import impactImage from '../Assets/sandy-zebua-a7n65pmnJ4Q-unsplash.jpg';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Home = () => {
  const { t } = useTranslation();

  const desc = [
    t('desc1'),
    t('desc2'),
    t('desc3'),
    t('desc4'),
  ];

  const desct = [
    { head: t('mission1.head'), descript: t('mission1.descript') },
    { head: t('mission2.head'), descript: t('mission2.descript') },
    { head: t('mission3.head'), descript: t('mission3.descript') },
    { head: t('mission4.head'), descript: t('mission4.descript') }
  ];

  const cardsdata = [
    {
      icon: icon1,
      title: t('cardsdata1.title'),
      points: [
        t('cardsdata1.point1'),
        t('cardsdata1.point2'),
        t('cardsdata1.point3')
      ]
    },
    {
      icon: icon2,
      title: t('cardsdata2.title'),
      points: [
        t('cardsdata2.point1'),
        t('cardsdata2.point2'),
        t('cardsdata2.point3')
      ]
    },
    {
      icon: icon3,
      title: t('cardsdata3.title'),
      points: [
        t('cardsdata3.point1'),
        t('cardsdata3.point2'),
        t('cardsdata3.point3')
      ]
    },
    {
      icon: icon4,
      title: t('cardsdata4.title'),
      points: [
        t('cardsdata4.point1'),
        t('cardsdata4.point2'),
        t('cardsdata4.point3')
      ]
    },
    {
      icon: icon5,
      title: t('cardsdata5.title'),
      points: [
        t('cardsdata5.point1'),
        t('cardsdata5.point2'),
        t('cardsdata5.point3')
      ]
    },
    {
      icon: icon6,
      title: t('cardsdata6.title'),
      points: [
        t('cardsdata6.point1'),
        t('cardsdata6.point2'),
        t('cardsdata6.point3')
      ]
    }
  ];

  return (
    <div>
        {/* <LanguageSwitcher/> */}
      <Hero
        backgroundImage={heroImg}
        firstLine={t('welcome')}
        tit1={t('tit1')}
        tit2={t('tit2')}
        desc={t('desc')}
      />
      <AboutCompo
        leftImg={left}
        firstLine={t('who_are_we')}
        tit1={t('gavaki_foundation_empowers')}
        tit2={t('leader_in_agriculture_market')}
        desc={desc}
      />
      <Missioncomp
        leftImage={missionImage}
        firstLine={t('our_mission')}
        tit1={t('our_mission_title')}
        desc={desct}
      />
      <Working
        tit1={t('what_we_do')}
        tit2={t('what_actually_gavaki_does')}
        cardData={cardsdata}
      />
      <TestimonialSlider />
      <AboutCompo
        leftImg={impactImage}
        tit1={t('our_impact')}
        tit2={t('operating_across')}
        desc={[t('regional_operations'), t('economic_impact'), t('sustainable_growth')]}
      />
      <Banner />
    </div>
  );
};

export default Home;
