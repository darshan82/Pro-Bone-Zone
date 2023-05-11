import React from 'react'
import Image from '../../assets/The Problem.png'
function SolutionCard({image,heading='The Problem',para='Why do we hesitate to talk with an attorney? We are embarrassed. We fear judgement and insensitivity. We avoid change and commitment. We worry about the cost.'}) {
  return (
    <div className='px-3 py-4 m-3 bg-white rounded-lg w-44 space-y-1'> 
      <img  src={Image} className='w-14 h-14'  />
      <h1 className='text-sm font-bold '>{heading}</h1>
      <p className='text-xs font-normal leading-4 line-clamp-5'>{para}</p>

    </div>
  )
} 

export default SolutionCard