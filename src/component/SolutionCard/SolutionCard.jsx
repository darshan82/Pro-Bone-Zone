import React from 'react'
function SolutionCard({icon,heading,para}) {
  return (
    <div className='px-4 py-4 my-1 mx-1 bg-white rounded-lg w-64 h-56 '> 
      <img  src={icon} className='w-[73px] h-[73px]'  />
      <h1 className='text-[17px] font-bold '>{heading}</h1>
      <p className='text-[15px] font-normal leading-4 line-clamp-5 text-[#888888]'>{para}</p>

    </div>
  )
} 

export default SolutionCard