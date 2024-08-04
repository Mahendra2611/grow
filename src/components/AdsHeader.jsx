import Link from 'next/link'
import React from 'react'

const AdsHeader = () => {
  return (
    <div className=' w-screen h-[50px] flex justify-between items-center px-4  sm:px-10'>
    <h1 className='font-semibold text-[12px] sm:text-[14px]'>Set up new Ad</h1>
    <div className='flex gap-3 pp:gap-6 sm:gap-10'>
        <Link href="" className='underline'>Discord</Link>
        <button className='text-white bg-[#2D9AFF] rounded-xl px-5 text-[12px]'>Save</button>
    </div>
</div>
  )
}

export default AdsHeader
