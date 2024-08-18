import React from 'react'
import LightProdBox from './LightProdBox'
import IMG1 from "../assets/LightProd1.png"
import Image from 'next/image'
const LightProducts = () => {
    const data1 = {
       
        name:"Handmade pouch",
        qty:10,
        price:1200,
        available:2,
        date:"16 Ayg 2024"
    }
    const data2 = {
       
        name:"Handmade pouch",
        qty:10,
        price:1000,
        available:4,
        date:"16 Ayg 2024"
    }
  return (
    <div className='bg-black px-3 pp:px-4 sm:px-5 md:px-8 py-2 pp:py-3 sm:py-4 md:py-5 text-white flex flex-col'>
      <main className='h-20 flex justify-between items-center'>
        <h1 className='text-white font-semibold text-[14px] pp:text-[16px] md:text-[18px]'>Product</h1>
        <div>
            <form>
                <select className='bg-black text-[8px] ss:text-[10px] pp:text-[12px] sm:text-[14px] md:text-[16px] border-2 border-[#3f3e3e] rounded-xl px-2 sm:px-4 md:px-6 py-2' id='select'>
                <option >Last 7 days</option>
                <option >Last 1 month</option>
                <option >Last 1 year</option>
                </select>
            </form>
        </div>
      </main>
      <main className='flex flex-col'>
        <LightProdBox img={ <Image src={IMG1} alt='img1' className='basis-1/6  w-[35px]   pp:w-[40px]  sm:w-[40px] md:h-[120px]'/>} {...data1}/>
        <LightProdBox img={ <Image src={IMG1} alt='img1'  className='basis-1/6  w-[35px]   pp:w-[40px]  sm:w-[40px] md:h-[120px]'/>} {...data2}/>
      </main>
    </div>
  )
}

export default LightProducts
