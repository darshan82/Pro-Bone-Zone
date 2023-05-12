import React from 'react'
import Logo from '../../assets/Group6.png'

export default function navbar() {
  return (
    <div className='hidden sm:hidden md:flex md:flex-row md:justify-between md:items-center md:px-16 md:py-3 lg:flex lg:flex-row lg:justify-between lg:items-center lg:px-16 lg:py-3 '>
    <div className=''>
      <img src={Logo} className='w-20'></img>
    </div>
    <div className='flex flex-row justify-center items-center space-x-5 text-white text-sm '>
      <p className='cursor-pointer'>Home</p>
      <p className='cursor-pointer'>About us</p>
      <p className='cursor-pointer'>FAQ</p>
      <p className='cursor-pointer'>Sponcers</p>
      <p className='cursor-pointer'>Contact</p>
      <button className='border border-white px-8 py-2 rounded-sm cursor-pointer'>Login</button>
      <button className='bg-[#4270FF] px-8 py-2 rounded-sm'>Sign Up</button>
    </div>
    </div>
  )
}
