import React from 'react'
import { useTranslation } from 'react-i18next';

export const Button = ({url, pdfName}) => {
  const {t} = useTranslation()

    const onButtonClick = () => {
        const pdfUrl = url;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = pdfName; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  return (
    <div className="text-center flex justify-center items-center p-4 w-1/2">
    <button onClick={onButtonClick}
      type="submit"
      className="
        w-full 
        bg-[#F7C35F] 
        text-grey-700 
        px-6 py-3 
        font-xl font-bold 
        rounded-md 
        sm:mb-0 w-64 
        hover:bg-[#E6B250]        /* Changes background color on hover */
        hover:text-white         /* Changes text color on hover */
        hover:-translate-y-1     /* Translates button upward on hover */
        transition               /* Smooth transition for hover effects */
        ease-in-out duration-300 /* Duration and easing of the transition */
      "
    >
      {t('formbutton')}
    </button>
  </div>
  )
}
