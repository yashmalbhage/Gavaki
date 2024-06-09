import React from 'react';
import bgImgf from '../Assets/herohome.jpg';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const {t} = useTranslation()
  return (
    <div
      className='isolate pt-0  h-screen flex items-center inset-0 bg-cover bg-center'
      style={{ backgroundImage: `url(${bgImgf})` }}
    >
      <div className='relative isolate px-5 pt-0 lg:px-8 h-screen flex items-center bg-black bg-opacity-50'>
        <div className='flex justify-center items-center text-center'>
          <h1 className='text-white text-xl font-bold'>
            {t('banner_text')}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
