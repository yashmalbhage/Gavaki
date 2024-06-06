import React from 'react'
import Card from './Card'

const Working = ({tit1, tit2, cardData}) => {
  return (
    <div>

        <div className='flex-col items-center justify-center text-center'>
            <span className='text-white font-thin'>{tit1}</span>
            <h2 className='text-white font-bold text-2xl underline decoration-[#F7C35F]'>{tit2}</h2>
            <div className='min-h-screen  flex flex-wrap tems-center justify-center mt-5'>
            {cardData.map((card, index) => (
        <Card key={index} icon={card.icon} title={card.title} points={card.points} />
      ))}



            </div>
            
        </div>





    </div>
  )
}

export default Working