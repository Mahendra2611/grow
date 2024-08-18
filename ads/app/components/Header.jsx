import React from "react";
import Image from "next/image";
import image4 from "../assets/icons1.png";
import image1 from "../assets/Coin.png";
import image2 from "../assets/avatar.png";
import image3 from "../assets/Vector.png";
const Header = () => {
  return (
    <div className=" w-full h-full bg-[#F8F9FA] mt-0  flex justify-center items-center border-b text-black ">
      <div className="flex px-[20px] py-[17.91px] w-full justify-between">
        <div className="sm:flex hidden gap-[10px] items-center">
          <div className="text-xl font-bold">Ads Manager</div>
          <div className="font-thin bg-white border-none  rounded-md flex items-center gap-2 p-0.5 px-3 ">
            <div>Brooklyn Simmons</div>
            <div className="w-[12.5px] h-[5.25px]">
              <Image src={image3} />
            </div>
          </div>
        </div>
        <div className="sm:hidden">
          <Image className="h-[26px] w-[28px]" src={image4} />
        </div>
        <div className="flex gap-[20px]">
          <div className="font-bold border-[2px] flex gap-1 text-[10px]  px-[5px] border-solid bg-[#27AE6040] border-[#27AE60] rounded-xl">
            <div>
              <Image className="w-[24px] h-[24px]" src={image1} />
            </div>
            <div className=" flex items-center">
              <div>Get $100 AD Credit</div>
            </div>
          </div>
          <div>
            <Image className="h-[32.5px] w-[32.5px] " src={image2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
