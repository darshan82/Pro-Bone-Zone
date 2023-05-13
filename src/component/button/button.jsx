import React from 'react'

export default function Button({buttonText,onClick=()=>{}}) {
  return (
    <button className='bg-[#4270FF] px-6 py-3   text-white text-sm rounded-lg' onClick={onClick}>
        {buttonText}
    </button>
  )
}
