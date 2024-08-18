import Image from 'next/image'
import React from 'react'

const FeatureCard = ({img,heading,para,flag}) => {
 let b;
  if(flag === "true"){
     b = {
      border:'2px solid #47A6FF',
      borderRadius:'1px'
    }
  }
  else{
    b = {}
  }
  return (
    <div className='flex gap-3 sm:gap-6 p-2' style={b}>
       <p>{img}</p>
      <div className='flex flex-col gap-1 sm:gap-1'>
        <h1 className=' text-[#191F33] font-semibold text-xl sm:text-xl'>{heading}</h1>
        <p className='text-[12px] sm:text-xs text-[#767E94]'>{para}</p>
      </div>
    </div>
  )
}

export default FeatureCard
