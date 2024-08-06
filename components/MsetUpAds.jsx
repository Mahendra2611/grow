'use client'
import React from 'react'
import Image from 'next/image'

import IMG1 from "../app/assets/select-option.png"
import P1 from "../app/assets/placement-1.png"
import P2 from "../app/assets/placement-2.png"
import P3 from "../app/assets/placement-3.png"
import Trash from "../app/assets/trash.png"
import Replace from "../app/assets/replace.png"
import Crop from "../app/assets/crop.png"
const MsetUpAds = () => {
    return (
        <div className='h-full p-2 flex flex-col gap-5 '>
            <form className='flex flex-col gap-5 '>
                <div className='flex flex-col gap-2 '>
                    <label for="community" className='text-[16px] font-semibold'>Community<span className='pl-2 text-red-600'>*</span></label>
                    <select id='community' className='rounded-lg p-2 border-2 border-[#F2F2F7]'>
                        <option value={"clothing Girlz"} className=' text-[12px] sm:text-[16px]'>Clothing Girlz  1</option>
                        <option value={"clothing Girlz"} className=' text-[12px] sm:text-[16px]' >Clothing Girlz 2</option>
                        <option value={"clothing Girlz"} className=' text-[12px] sm:text-[16px]'>Clothing Girlz 3</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label for="ad-name" className='text-[16px] font-semibold'>Ad Name <span className='pl-2 text-red-600'>*</span></label>
                    <input type='text'  className='rounded-lg w-full p-2 border-2 border-[#F2F2F7]' />
                </div>
            </form>
            {/* Placement */}
            <div className='flex flex-col gap-4'>
                <h1 className='font-semibold px-2'>Placements<span className='pl-2 text-red-600'>*</span></h1>
                <div className='border-2 rounded-lg py-4 border-[#c1c2c4] flex flex-wrap w-full justify-around'>
                    <section className='mb-2 bg-[#4C9AFF1A] rounded-lg p-4 flex flex-col gap-5 justify-between items-center'>
                        <Image src={P1} />
                        <h2 className='font-semibold text-[12px]'>In Feed</h2>
                    </section>
                    <section className='mb-2 bg-[#4C9AFF1A] rounded-lg p-4 flex flex-col gap-5 justify-between items-center'>
                        <Image src={P2} />
                        <h2 className='font-semibold text-[12px]'>Video</h2>
                    </section>
                    <section className='mb-2 bg-[#4C9AFF1A] rounded-lg p-4 flex flex-col gap-5 justify-between items-center'>
                        <Image src={P3} />
                        <h2 className='font-semibold text-[12px]'>Banner</h2>
                    </section>
                </div>
            </div>
            {/* objective */}
            {/* <div className='h-full'>
                <h1 className='pb-2 font-semibold text-[16px]'> Objective <span className='pl-2 text-red-600'>*</span></h1>
                <div className='h-full'>
                    <div className='flex flex-wrap gap-2 sm:basis-1/2'>
                        <button className='text-[14px] font-semibold  flex justify-start items-center  border-2 border-[#747677] p-1 sm:p-2 rounded-lg gap-2 bg-[#f2f2f7c0]'><Image src={IMG1} /> Brand awareness and reach </button>
                        <button className='text-[14px] flex justify-start items-center  border-2 border-[#747677]  p-1 sm:p-2 rounded-lg gap-2'><Image src={IMG1} /> Brand awareness and reach </button>
                        <button className='text-[14px] flex justify-start items-center  border-2 border-[#747677] p-1 sm:p-2 rounded-lg gap-2'><Image src={IMG1} /> Brand awareness and reach </button>
                        <button className='text-[14px] flex justify-start items-center  border-2 border-[#747677]  p-1 sm:p-2 rounded-lg gap-2'><Image src={IMG1} /> Brand awareness and reach </button>
                        <button className='text-[14px] flex justify-start items-center  border-2 border-[#747677] p-1 sm:p-2 rounded-lg gap-2'><Image src={IMG1} /> Brand awareness and reach </button>
                    </div>
                </div>
            </div> */}
            <div className='flex flex-col gap-4'>
                <label for="ad-name" className='text-[16px] font-semibold'>Headline <span className='pl-2 text-red-600'>*</span></label>
                <input type='text' className='rounded-lg w-full p-2 border-2 border-[#F2F2F7]' />
            </div>
            <div className='flex flex-col gap-4'>
                <label for="ad-name" className='text-[16px] font-semibold'>Description</label>
                <textarea className='rounded-lg w-full h-full p-2 border-2 border-[#F2F2F7]' value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            </div>
            <div className='flex justify-between'>
                <div className='basis-1/2 flex flex-col gap-4  '>
                    <label for="community" className='text-[16px] font-semibold'>Call to action<span className='pl-2 text-red-600'>*</span></label>
                    <select id='community' className='rounded-lg p-2 place-self-stretch border-2 border-[#F2F2F7]'>
                        <option value={"clothing Girlz"} className=' text-[12px] place-self-stretch sm:text-[16px]'>Select ...</option>

                    </select>
                </div>
                <div className='flex flex-col gap-4'>
                    <label for="ad-name" className='text-[16px] font-semibold'>Destination URL</label>
                    <input type='text' placeholder='https://' className='rounded-lg w-full p-2 border-2 border-[#F2F2F7]' />
                </div>

            </div>
            <div className='flex flex-col gap-4'>
                <div className='p-2 border-2 border-[rgb(245,238,238)] flex justify-between '>
                    <section className='flex gap-2 items-center'>
                    <Image src={IMG1}/>
                    <p>File location</p>
                    </section>
                    <section className='flex gap-4 justify-center items-center '>
                        <Image src={Trash}/>
                        <Image src={Replace}/>
                        <Image src={Crop}/>
                    </section>
                </div>
                <label htmlFor="ad-file" className='text-[16px] font-semibold'>
                    Image or Video <span className='pl-2 text-red-600'>*</span>
                </label>
                <div className='relative'>
                    <input type='file' id='ad-file' className='hidden' multiple />
                    <label htmlFor='ad-file' className='flex items-center justify-center rounded-lg w-full p-2 border-2 border-[#F2F2F7] cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                        </svg>
                        Add Image(s) or Video(s)
                    </label>
                </div>
            </div>

        </div>
    )
}

export default MsetUpAds
