import React from 'react'
import UploadImage from '../components/UploadImage'
import ImagePreview from '../components/ImagePreview'
const page = () => {
  return (
    <div className='w-screen min-h-screen text-black  flex flex-col pp:flex-row  bg-white flex-wrap pp:flex-nowrap gap-5 pp:gap-0'>
      <div className=' h-screen  basis-full pp:basis-1/2 w-full place-content-center'>
      <UploadImage/>

      </div>
      <div className=' place-content-center h-screen  basis-full pp:basis-1/2 w-full'>
        <ImagePreview/>
      </div>
    </div>
  )
}

export default page
