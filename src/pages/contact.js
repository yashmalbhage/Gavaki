import React from 'react';
import Hero from '../components/Hero';
import heroImg from "../Assets/jake-gard-CetB-bTDBtY-unsplash.jpg";
import Contactform from '../components/Contactform';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Contact = () => {
  const { t } = useTranslation(); // Use useTranslation hook to access translations

  return (
    <div>
      <Hero 
        backgroundImage={heroImg} 
        firstLine={t("nfraie_contact_hero_firstLine")} 
        tit1={t("nfraie_contact_hero_tit1")} 
        desc={t("nfraie_contact_hero_desc")} 
      />
      <Contactform/>
    </div>
  );
}

export default Contact;
