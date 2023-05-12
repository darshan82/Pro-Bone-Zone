import React from 'react'
function SolutionCard({icon,heading,para}) {
  return (
    <div className='px-3 py-4 m-3 bg-white rounded-lg w-44 space-y-1'> 
      <img  src={icon} className='w-14 h-14'  />
      <h1 className='text-sm font-bold '>{heading}</h1>
      <p className='text-xs font-normal leading-4 line-clamp-5'>{para}</p>

    </div>
  )
} 

export default SolutionCard