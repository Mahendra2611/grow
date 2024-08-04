
import React from 'react'
import SearchImg from './SearchImg'
import { SearchImgData } from '@/uteils/SearchImgData'

const Search = () => {
  return (
    <div className='m-auto flex flex-col gap-5 justify-center items-center w-[70%] p-1'>
       
      <div>
        <h1 className='w-[80%] m-auto font-semibold text-center text-[35px] text-white'>Discover The Perfect Prosites  With An Effortless Search And Selection</h1>
      </div>
      <div className='w-[100%]'>
        <form className='w-[75%] m-auto'>
            <input type='text' placeholder='Write here' className='p-3 rounded-3xl w-[100%] bg-[#FFFFFF0F] '/>
        </form>
      </div>
      <div className=' w-full'>
        <p className='text-[15px] text-white'>Top Results</p>
        <div className=' w-full grid grid-cols-auto-fit gap-4'>
  {SearchImgData.map((data) => (
    <SearchImg key={data.id} {...data} />
  ))}
</div>



      </div>
    </div>
  )
}

export default Search
