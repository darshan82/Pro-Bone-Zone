import React from 'react'
import HowItsWork from '../../assets/works.png'
import Vector1 from '../../assets/Vector1.png'
import Vector2 from '../../assets/Vector2.png'
import Immigration from '../../assets/Immigration.png'
// sds
export default function OfferCard() {
    return (
        <div className='bg-[#F0F4FF] w-[290px] h-96 flex flex-row justify-center p-4  m-3 rounded-sm'>
            <div className='bg-white'>
                <img src={HowItsWork} className='w-64 h-44'></img>
                <div className='ml-4'>
                <h1 className='font-bold text-md mt-4'>Smith & Jones</h1>
                <div className='flex  flex-row items-center flex-wrap mt-1'>
                    <p className=' flex  flex-col items-center justify-center pb-1  '><img src={Vector1}></img></p>
                    <p className='ml-2'>45 Years </p>
                </div>
                <div className='flex  flex-row items-center flex-wrap  mt-1'>
                    <p className=' flex  flex-col items-center justify-center pb-1  '><img src={Vector2}></img></p>
                    <p className='ml-2'>290 pro bono hours </p>
                </div>
                <div className='flex  flex-row items-center flex-wrap  mt-1'>
                    <p className=' flex  flex-col items-center justify-center pb-1  '><img src={Immigration}></img></p>
                    <p className='ml-2'>Immigration</p>
                </div>
                </div>
            </div>
        </div>
    )
}
