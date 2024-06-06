import React from 'react'

const Card = ({icon,title, points}) => {
  return (
    <div className="max-w-sm p-6 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg m-2">
      <div className="flex flex-col items-center text-center">
        <img src={icon} alt="Icon" className="w-16 h-16 mb-4" />
        <h2 className="text-xl font-semibold text-white mb-4">{title}</h2>
        <ul className="text-white">
          {points.map((point, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card