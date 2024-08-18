import React from 'react'
import Image from 'next/image'
import  IMG from "../assets/placement-1.png"
const ImagePreview = () => {
  return (
    <div className=' px-2 sm:px-4 md:px-6  h-[80%]  flex flex-col  gap-y-8  '>
     <h1 className='font-bold tetx-[16px]'>Preview</h1>
      <main className='flex gap-4 justify-start items-center flex-wrap pp:flex-nowrap'>
        <div className='py-4 border-2  border-[#dbd9d9]'>
        <Image src={IMG} className='object-center object-cover'/>
        </div>
        <div className='py-4 border-2  border-[#dbd9d9]'>
        <Image src={IMG} className='object-center object-cover'/>
        </div>
        <div className='py-4 border-2  border-[#dbd9d9]'>
        <Image src={IMG} className='object-center object-cover'/>
        </div>
      </main>
    </div>
  )
}

export default ImagePreview
