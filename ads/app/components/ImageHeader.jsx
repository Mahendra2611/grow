'use client'
import React from 'react'
import Image from 'next/image'
import image1 from "../assets/button.png"
import image2 from "../assets/image.png"
import image3 from "../assets/bg-image.png"
import image4 from "../assets/Font.png"
import image5 from "../assets/theme.png"
import image6 from "../assets/publish.png"
import Link from "next/link";
import { useSelector } from 'react-redux'
const ImageHeader = () => {
    const data = useSelector((state)=>state.imageSlice)

    const handleSubmit = async () => {
     
        const formData = new FormData();
      
        data.img.link.forEach((file, index) => {
          formData.append('link', file); 
        });
        formData.append('name', JSON.stringify(data.img.name)); 
      formData.append('premium', JSON.stringify(data.img.premium));  
      data.bgimg.bglink.forEach((file, index) => {
        formData.append('bglink', file);  
      });
      formData.append('bgname', JSON.stringify(data.bgimg.bgname)); 
    formData.append('bgpremium', JSON.stringify(data.bgimg.bgpremium));  
        try {
          const response = await fetch('http://localhost:4000/prosite', {
            method: 'POST',
            body: formData,
          });
    
        
          console.log(response.status)
          if(response.status === 200){
            alert("Data added successfuly")
          }
        }
        catch (error) {
          console.error('Error uploading image:', error);
        }
      };
    
  return (
    <div className="text-white bg-white pt-[14px] w-full flex justify-center ">
        <div className="  h-[65px] w-[98%] bg-[#FFFFFF] flex text-black justify-between border border-[#E0E2D9] rounded-full">
          <div className="flex space-x-5 text-[14px] text-[#676B5F] mx-10">
            <div className="flex gap-2 items-center hover:text-[#6FB5FB] cursor-pointer" ><Image className="h-[30px] w-[25px] " src={image1} /><Link href="/">Buttons</Link></div>
            <div className="flex gap-2 items-center hover:text-[#6FB5FB] cursor-pointer"><Image className="h-[30px] w-[30px]  " src={image2} /><Link href="/imagepath/iimg">Image</Link></div>
            <div className="flex gap-2 items-center hover:text-[#6FB5FB] cursor-pointer"><Image className="h-[18px] w-[18px] " src={image3} /><Link href="/imagepath/bgimg">Backgrounds</Link></div>
            <div className="flex gap-2 items-center hover:text-[#6FB5FB] cursor-pointer"><Image className="h-[30px] w-[32px]  " src={image4} /><Link href="/Fonts">Fonts</Link></div>
            <div className="flex gap-2 items-center hover:text-[#6FB5FB] cursor-pointer"><Image className="h-[30px] w-[30px]  " src={image5} /><Link href="/Theme">Theme</Link></div>
          </div>

          <div className="flex items-center space-x-3 mx-8">
            <button onClick={handleSubmit} className="flex gap-2 items-center font-bold border rounded-full px-4 py-2 cursor-pointer"><Image className="h-[18px] w-[18px] " src={image6} />Publish</button>
            <div className="h-[40px] w-[40px] bg-[#60696C] border rounded-full text-center align-middle text-white text-[22px] ">o</div>
          </div>

        </div>
      </div>

  )
}

export default ImageHeader
