import React from 'react'
import { useTranslation } from 'react-i18next'
const FormButton = () => {
  const {t} = useTranslation();
  return (
    <div>
         <div className="text-center flex justify-center items-center p-4 w-1/2">
                            <button type="submit" className="w-full bg-[#F7C35F] text-grey-700 px-6 py-3 font-xl font-bold rounded-md sm:mb-0 w-64">{t('formbutton')}</button>
                        </div>
    </div>
  )
}

export default FormButton