import React from 'react';
import Hero from '../components/Hero';
import heroImg from "../Assets/dan-meyers-IQVFVH0ajag-unsplash.jpg";
import { Button } from '../components/Button';
import { useTranslation } from 'react-i18next';
const Forms = () => {
  const { t } = useTranslation();

  return (
    <div className='mb-10'>
      <Hero 
        backgroundImage={heroImg} 
        firstLine={t("nfraie_forms_hero_firstLine")} 
        tit1={t("nfraie_forms_hero_tit1")} 
        desc={t("nfraie_forms_hero_desc")} 
      />

      <div>
        <div className="flex pt-10">
          <div className='p-4'>
            <p className='font-thin text-white'>{t("nfraie_forms_fpc_fpo_title")}</p>
            <h4 className='font-bold text-white'>
              {t("nfraie_forms_fpc_fpo_desc")}<br/>
              {t("nfraie_forms_fpc_fpo_email")}<br/>
              {t("nfraie_forms_fpc_fpo_mail")}
            </h4>
          </div>
          <Button url="https://drive.google.com/file/d/1A7qFnvZGifkPeG8o9q9hBQbPgu7HDtIH/view?usp=sharing" pdfName="PACs-Application-form" />
        </div>

        <div className="flex pt-10">
          <div className='p-4'>
            <p className='font-thin text-white'>{t("nfraie_forms_fig_title")}</p>
            <h4 className='font-bold text-white'>
              {t("nfraie_forms_fig_desc")}<br/>
              {t("nfraie_forms_fig_email")}<br/>
              {t("nfraie_forms_fig_mail")}
            </h4>
          </div>
          <Button url="https://drive.google.com/file/d/1pJtpJm3vnCOknVTgv7oOXJSdFbjhvGux/view?usp=sharing" pdfName="FIGs-Application-form" />
        </div>

        <div className="flex pt-10">
          <div className='p-4'>
            <p className='font-thin text-white'>{t("nfraie_forms_shg_title")}</p>
            <h4 className='font-bold text-white'>
              {t("nfraie_forms_shg_desc")}<br/>
              {t("nfraie_forms_shg_email")}<br/>
              {t("nfraie_forms_shg_mail")}
            </h4>
          </div>
          <Button url="https://drive.google.com/file/d/1usPh85VCzf2dan6g7Fe5_FbnNJd96HEd/view?usp=sharing" pdfName="SHGs-Application-form" />
        </div>

        <div className="flex pt-10">
          <div className='p-4'>
            <p className='font-thin text-white'>{t("nfraie_forms_pacs_title")}</p>
            <h4 className='font-bold text-white'>
              {t("nfraie_forms_pacs_desc")}<br/>
              {t("nfraie_forms_pacs_email")}<br/>
              {t("nfraie_forms_pacs_mail")}
            </h4>
          </div>
          <Button url="https://drive.google.com/file/d/1A7qFnvZGifkPeG8o9q9hBQbPgu7HDtIH/view?usp=sharing" pdfName="PACs-Application-form" />
        </div>
      </div>
    </div>
  );
};

export default Forms;
