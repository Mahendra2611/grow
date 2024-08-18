import Image from 'next/image'
import React from 'react'

const LightProdBox = ({img,name,qty,price,available,date}) => {
  return (
    <div className='bg-[#171717] h-[150px] px-1 ss:px-2 pp:px-3 sm:px-4 md:px-5 py-[10px] text-[#D3D5E2] flex justify-between items-center gap-1 sm:gap-0' >
      {img}
      <h1 className='basis-2/6 place-content-start pl-2 ss:pl-4 pp:pl-6 sm:pl-8 md:pl-10 text-[8px] ss:text-[10px] pp:text-[12px] sm:text-[14px] md:text-[16px]'>{name}</h1>
      <h1 className='basis-1/6 text-[8px] ss:text-[10px] pp:text-[12px] sm:text-[14px] md:text-[16px]'>{qty}</h1>
      <h1 className='basis-1/6 text-[8px] ss:text-[10px] pp:text-[12px] sm:text-[14px] md:text-[16px]'>{price}</h1>
      <h1 className='basis-1/6 text-[8px] ss:text-[10px] pp:text-[12px] sm:text-[14px] md:text-[16px]'>{available}</h1>
      <h1 className='basis-1/6 text-[8px] ss:text-[10px] pp:text-[12px] sm:text-[14px] md:text-[16px]'>{date}</h1>
    </div>
  )
}

export default LightProdBox
