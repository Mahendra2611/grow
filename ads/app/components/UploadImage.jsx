'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import tag2 from "../assets/cross.png";
import ImagePreview from './ImagePreview';
import { useDispatch ,useSelector} from 'react-redux';
import { addimg } from '../redux/ImageSlice';


const UploadImage = () => {
 const [files,setFiles] = useState([])
  const [images, setImages] = useState([]);
  const [tagArray,setTagArray] = useState([]);
  const dispatch = useDispatch();
  const [option, setOption] = useState({
    type:"free",
    tags: []
  })
  const FileRef = useRef(null);
  const tagRef = useRef(null);
 const data = useSelector((state)=>state.imageSlice.img)

  const handleClearTags = (index)=>{
    option.tags.splice(index,1)
    setOption({
      ...option,
    })
  }

 const handleAddTag = ()=>{
  setOption({...option,
    tags:[...option.tags,tagRef.current.value]
  })
 }

 
   const handleAddData = ()=>{
   
    dispatch(addimg({files:FileRef.current.files[0],
      type:option.type,
      tags:option.tags
    }))
   
    setOption({
      type:"free",
      tags:[]
    })
   }

  const handleType = (e) => {
    const value = e.target.textContent.toLowerCase();
    setOption({
      ...option,
      type:value
    })
  }


  return (
    <div >
     

      <div>
        <div className='w-screen min-h-screen text-black  flex flex-col pp:flex-row  bg-white flex-wrap pp:flex-nowrap gap-5 pp:gap-0'>
          <div className=' h-screen  basis-full pp:basis-1/2 w-full place-content-center'>
            <div className='px-2 sm:px-4 md:px-6 h-[80%] flex flex-col justify-between gap-y-8'>
              <main className='h-[40%] flex flex-col justify-between gap-y-3'>
                <h1 className='font-bold sm:text-[14px] md:text-[16px]'>Upload Image</h1>
                <form
                className='w-full flex justify-center items-center border-2 border-dashed border-[#00000080] rounded-3xl h-[60px] ss:h-[80px] sm:h-[100px] md:h-[120px]'>
                <input type='file' id='upload' name='image' className='cursor-pointer' ref={FileRef} />
                </form>
              </main>


              <main className='flex flex-col gap-4'>
                <h1 className='tetx-[15px] font-semibold tetx-[#2F2F2F]'>Tags</h1>
                <form>
                  <input type='text' id='tag'  placeholder='enter tag' ref={tagRef} className='bg-[#f4f5f3] w-full rounded-xl p-2' />
                </form>
                <button className=' rounded-3xl w-[100px]  bg-slate-400 hover:bg-slate-300 inline-flex justify-start items-center px-4 py-1 gap-2 border-2 border-[#E0E3E6]'>
                  <h1 className='inline-block' onClick={handleAddTag}>Add Tag</h1>
                </button>
                <div className='flex flex-wrap gap-x-2'>
                  {option.tags.map((tag,index)=>(
                    <div className='rounded-3xl   inline-flex justify-start items-center px-4 py-1 gap-2 border-2 border-[#E0E3E6]'>
                      <h1>{tag}</h1>
                      <Image src={tag2} onClick={()=>handleClearTags(index)} />
                    </div>
                  ))}
                </div>
              </main>

              <main className='flex flex-col gap-2'>
                <h1 className='font-bold text-[16px]'> Select Image type</h1>
                <div className='flex gap-2 pp:gap-5 flex-wrap pp:flex-nowrap'>
                  <button  style={option.type === 'free' ? { backgroundColor: '#6FB5FB' } : { backgroundColor: 'white' }}  className='py-2 px-4 text-black border-2   border-[#E3E3E3] rounded-full cursor-pointer' onClick={handleType}  >Free</button>
                  <button  style={option.type === 'premium' ? { backgroundColor: '#6FB5FB' } : { backgroundColor: 'white' }}  className='py-2 px-4 border-2   border-[#E3E3E3] text-black rounded-full' onClick={handleType}>Premium</button>
                </div>
              </main>

              <main className='flex flex-col gap-2'>
                <h1 className='font-bold text-[16px]'>Select</h1>
                <div className='flex gap-2 pp:gap-5 flex-wrap pp:flex-nowrap'>
                  <button  className='py-2 px-4 bg-slate-400 hover:bg-slate-300  text-black rounded-full' onClick={handleAddData}>Add</button>
                  {/* {<button style={option.select === 'contain' ? { backgroundColor: '#6FB5FB' } : { backgroundColor: 'white' }} className='py-2 px-4 border-2 border-[#E3E3E3] text-black rounded-full' onClick={handleSelect}>Contain</button>} */}
                </div>
              </main>
            </div>
          </div>
          
          <div className=' place-content-center h-screen  basis-full pp:basis-1/2 w-full'>
            <ImagePreview  />
          </div>
        </div>
      </div>
    </div>

  );
};

export default UploadImage;
