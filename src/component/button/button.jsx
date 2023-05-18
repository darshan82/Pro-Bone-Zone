import React from 'react'

export default function Button({buttonText,onClick=()=>{}}) {
  return (
    <button className='bg-[#EC672C] px-6 py-3   text-white text-sm rounded-lg' onClick={onClick}>
        {buttonText}
    </button>
  )
}
