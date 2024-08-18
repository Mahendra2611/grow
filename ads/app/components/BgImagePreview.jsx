'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import IMG from "../assets/placement-2.png";
import { useSelector } from 'react-redux';
const BgImagePreview = () => {
  const {bgfiles} = useSelector((state)=>state.imageSlice.bgimg)
console.log("image preview called")
  return (
    <div className='px-2 sm:px-4 md:px-6 h-[80%] flex flex-col gap-y-8'>
      <h1 className='font-bold text-[16px]'>Preview</h1>
      <main className='flex gap-4 justify-start items-center flex-wrap'>
        {bgfiles && (bgfiles.length > 0 )? (
          bgfiles.map((image, index) => (
            <div key={index} className='py-4 border-2 border-[#dbd9d9]'>
              <Image
                src={(image)} alt={`Image ${index}`}
                className='object-center object-cover'
                width={100}
                height={100}
              />
            </div>
          ))
        ) : (
          <div className='py-4 border-2 border-[#dbd9d9]'>
            <Image src={IMG} className='object-center object-cover' />
          </div>
        )}
      </main>
    </div>
  );
};

export default BgImagePreview;
