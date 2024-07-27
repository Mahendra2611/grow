'use client'
import React from 'react'
import Image from 'next/image'

import IMG1 from "../../public/select-option.png"
const SetUpAds = () => {
    return (
        <div className='h-full p-2 flex flex-col gap-5 '>
            <form className='flex flex-col gap-5 '>
                <div className='flex flex-col gap-2 '>
                    <label for="community">Community<span className='pl-2 text-red-600'>*</span></label>
                    <select id='community' className='p-2 border-2 border-[#F2F2F7]'>
                        <option value={"clothing Girlz"}>Clothing Girlz  1</option>
                        <option value={"clothing Girlz"}>Clothing Girlz 2</option>
                        <option value={"clothing Girlz"}>Clothing Girlz 3</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label for="ad-name">Ad Name <span className='pl-2 text-red-600'>*</span></label>
                    <input type='text' className='w-full p-2 border-2 border-[#F2F2F7]' />
                </div>
            </form>
            <div>
                <h1 className='pb-2'> Objective <span className='pl-2 text-red-600'>*</span></h1>
                <div className='flex justify-center items-center flex-wrap sm:flex-nowrap gap-4'>
                    <div className='flex flex-col gap-2 sm:basis-1/2'>
                        <button className= 'w-full flex justify-center items-center  border-2 border-[#747677] p-1 sm:p-2 rounded-lg gap-2 bg-[#f2f2f7c0]'><Image src={IMG1} /> Brand awareness and reach </button>
                        <button className='flex justify-center items-center  border-2 border-[#747677]  p-1 sm:p-2 rounded-lg gap-2'><Image src={IMG1} /> Brand awareness and reach </button>
                        <button className='flex justify-center items-center  border-2 border-[#747677] p-1 sm:p-2 rounded-lg gap-2'><Image src={IMG1} /> Brand awareness and reach </button>
                        <button className='flex justify-center items-center  border-2 border-[#747677]  p-1 sm:p-2 rounded-lg gap-2'><Image src={IMG1} /> Brand awareness and reach </button>
                        <button className='flex justify-center items-center  border-2 border-[#747677] p-1 sm:p-2 rounded-lg gap-2'><Image src={IMG1} /> Brand awareness and reach </button>
                    </div>
                    <div className='sm:basis-1/2 p-2 rounded-md bg-[#F2F2F7] flex flex-col gap-3'>
                        <h1 className='font-semibold'>Brand awareness and reach</h1>
                        <p className='text-[10px] text-[#666666]'>Increase awareness of your brand or product</p>
                        <ul className='list-disc list-inside'>
                            <li className='text-[10px] font-semibold'>Pay for CPM</li>
                            <li className='text-[10px] font-semibold'>Optimized towards impressions</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SetUpAds
