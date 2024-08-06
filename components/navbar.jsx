import React from "react";
import Image from "next/image";
import image1 from "../assets/icons1.png"
import image2 from "../assets/Icons.png";
import image3 from "../assets/Bullhorn.png";
import image4 from "../assets/wallet.png";
import image5 from "../assets/settings.png";
import image6 from "../assets/help-circle.png";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <>
      <div className="h-screen w-[20%] bg-[#FFFFFF]">
        <div className="h-full text-black bg-white ">
          <div className="py-[35px] px-[15px] ">
            <div className="flex justify-center  items-center  ">
              <div className="flex justify-center gap-3 text-2xl  bg-white items-center font-bold px-2 py-1">
                <Image className="h-[26px] w-[28px] "src={image1} />
                <div>Ad Space</div>
              </div>
            </div>

            <div className="flex flex-col space-y-[10px] my-[200px] ">
              <div className="hover:bg-[#F8F9FA] font-bold h-[42.66px] flex gap-[6px] items-center px-2  border-none rounded-2xl">
                <Image className="h-[23px] w-[23px]" src={image2} />
                Overview
              </div>
              <div className="hover:bg-[#F8F9FA] h-[42.66px] flex gap-[10px] items-center px-2 border-none rounded-2xl ">
                <Image className="h-[16px] w-[16px]" src={image3} />
                Ads
              </div>
              <div className="hover:bg-[#F8F9FA] h-[42.66px] flex gap-[10px] items-center px-2 border-none rounded-2xl ">
                <Image className="h-[16px] w-[16px]" src={image4} />
                Billing
              </div>
              <div className="hover:bg-[#F8F9FA] h-[42.66px] flex gap-[10px] items-center px-2 border-none rounded-2xl ">
                <Image className="h-[16px] w-[16px]" src={image5} />
                Settings
              </div>
            </div>

            <div className="h-[42.66px] w-[224.25px] flex gap-[10px] items-center px-4 text-gray-400">
              <Image className="h-[16px] w-[16px]" src={image6} />
              Help
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
