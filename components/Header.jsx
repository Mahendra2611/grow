import React from "react";
import Image from "next/image";

import image1 from "../app/assets/Coin.png";
import image2 from "../app/assets/avatar.png";
import image3 from "../app/assets/Vector.png";
const Header = () => {
  return (
    <div className= " w-full bg-[#F8F9FA] mt-0  border-b text-black ">
      <div className="flex px-[35px] py-[17.91px] justify-between">
        <div className="flex gap-[10px] items-center">
          <div className="text-xl font-bold">Ads Manager</div>
          <div className="font-thin bg-white border-none rounded-md flex items-center gap-1 px-1 "><div >Brooklyn Simmons</div>
          <div className="w-[12.5px] h-[5.25px]">
            <Image src={image3} />
          </div>
          </div>
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
