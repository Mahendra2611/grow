import React from 'react'
import AdPreview from '@/components/AdPreview'
import ConfigAdPreview from '@/components/ConfigAdPreview'
import AdView from '@/components/AdView'
import SelectConfig from '@/components/SelectConfig'
import AdsHeader from '@/components/AdsHeader'
const page = () => {
  return (
    <div className='flex flex-col'>
        <AdsHeader/>
        <div className='flex flex-wrap gap-5 md:gap-0 '>
          
       <div className='basis-full md:basis-1/2  bg-[#f8f9fade] px-10 '>
       {/* <form className='w-[88%] mx-10'>
          <select className='w-full'>
            <option value={"Set Up Ads"}>Set Up Ads</option>
            <option value={"Targetting"}>Targetting</option>
            <option value={"Payment & Review"}>Payment & Review</option>
          </select>
          </form>
       <ConfigAdPreview/> */}
       <SelectConfig/>
       </div>
       <div className='basis-full md:basis-1/2 bg-[#f8f9facc]'>
       <AdPreview/> 
       </div>
    </div>
    </div>
  )
}

export default page
