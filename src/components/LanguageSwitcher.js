// src/components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='flex flex-row'>
        
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('hi')}>Hindi</button>
      <button onClick={() => changeLanguage('mr')}>Marathi</button>
    </div>
  );
};

export default LanguageSwitcher;
