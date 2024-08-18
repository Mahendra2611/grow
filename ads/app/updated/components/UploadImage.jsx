import React from 'react'
import Image from 'next/image'
import uploadImage from "../assets/uploadImage.png"
import tag from "../assets/tag2.png"
import tag2 from  "../assets/cross.png"
const UploadImage = () => {
  return (
    <div className=' px-2 sm:px-4 md:px-6  h-[80%]  flex flex-col justify-between gap-y-8 '>
      <main className='h-[40%]  flex flex-col justify-between gap-y-3'>
        <h1 className='font-bold  sm:text-[14px] md:text-[16px] '>Upload Image</h1>
        <form className='w-full flex justify-center items-center border-2 border-dashed border-[#00000080] rounded-3xl h-[60px] ss:h-[80px] sm:h-[100px] md:h-[120px]'>
          <input type='file' id='upload' className='hidden cursor-pointer' />
          <label htmlFor='upload' className='flex flex-col items-center gap-1 sm:gap-2 md:gap-4'><Image src={uploadImage} /><h1 className='text-[10px] vs:text-[15px]'>upload Image</h1></label>
        </form>
      </main>
      <main className='flex flex-col gap-4'>
        <h1 className='tetx-[15px] font-semibold tetx-[#2F2F2F]'>Tags</h1>
        <form>
          <input type='text' id='tag' placeholder={<Image src={tag}/> } className='bg-[#f4f5f3] w-full rounded-xl p-2'/>
          
        </form>
        <button className='w-[80px] pp:w-[15%] rounded-3xl w- flex justify-center items-center px-4 py-1 gap-2 border-2 border-[#E0E3E6] '><h1 className='inline-block'>tag</h1><Image src={tag2}/></button>
      </main>
      <main className='flex flex-col gap-2'>
        <h1 className='font-bold text-[16px]'>Image type</h1>
        <div className='flex gap-2 pp:gap-5 flex-wrap pp:flex-nowrap'>
          <button className='py-2 px-4 bg-[#6FB5FB] text-white rounded-full'>Free</button>
          <button  className='py-2 px-4 border-2 border-[#E3E3E3] text-black rounded-full'>Premium</button>
        </div>
      </main>
      <main className='flex flex-col gap-2'>
        <h1 className='font-bold text-[16px]'>Select</h1>
        <div className='flex gap-2 pp:gap-5 flex-wrap pp:flex-nowrap'>
          <button className='py-2 px-4 bg-[#6FB5FB] text-white rounded-full'>Cover</button>
          <button  className='py-2 px-4 border-2 border-[#E3E3E3] text-black rounded-full'>Contain</button>
        </div>
      </main>
    </div>
  )
}

export default UploadImage
