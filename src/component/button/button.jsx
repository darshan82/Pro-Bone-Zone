import React from 'react'

export default function Button({buttonText}) {
  return (
    <button className='bg-[#4270FF] px-6 py-3  rounded-sm text-white text-sm'>
        {buttonText}
    </button>
  )
}
