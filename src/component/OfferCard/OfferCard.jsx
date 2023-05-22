import React from 'react'
import Vector1 from '../../assets/Vector1.png'
import Vector2 from '../../assets/Time.png'
import Immigration from '../../assets/Immigration.png'

export default function OfferCard({image,age,name,hours,person}) {
    return (
        <div className='bg-[#F0F4FF] w-[260px]   flex flex-row justify-center p-4  m-3 rounded-sm'>
            <div className='bg-white pb-4'>
                <img src={image} className='w-64 h-44'></img>
                <div className='ml-4'>
                <h1 className='font-bold text-md mt-4'>{name}</h1>
                <div className='flex  flex-row items-center flex-wrap mt-1'>
                    <p className=' flex  flex-col items-center justify-center pb-1 '><img width={"50"} height={50} src={Vector1}></img></p>
                    <p className='ml-2'>{age} </p>
                </div>
                <div className='flex  flex-row items-center flex-wrap  mt-1'>
                    <p className=' flex  flex-col items-center justify-center pb-1 ml-2 '><img width={"35"} height={50}  src={Vector2}></img></p>
                    <p className='ml-4'>{hours}</p>
                </div>
                <div className='flex  flex-row items-center flex-wrap  mt-1'>
                    <p className=' flex  flex-col items-center justify-center pb-1  '><img width={"50"} height={50}  src={Immigration}></img></p>
                    <p className='ml-2'>{person}</p>
                </div>
                </div>
            </div>
        </div>
    )
}
