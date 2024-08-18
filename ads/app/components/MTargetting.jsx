import Image from "next/image";
import React from "react";
import IMG1 from "../assets/target-img1.png";
import FeatureCard from "./FeatureCard";
import IMG4 from "../assets/global.jpg";
import Cross from "../assets/cross.png";
import Date from "./Date";
import Avtar from "../assets/Avatar16.png";
import P1 from "../assets/placement-1.png";
import P2 from "../assets/placement-2.png";
import P3 from "../assets/placement-3.png";

const MTargetting = () => {
  return (
    <div className="min-h-full  p-2 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold px-2">
          Placements<span className="pl-2 text-red-600">*</span>
        </h1>
        <div className="border-2 rounded-lg py-4 border-[#c1c2c4] flex flex-wrap w-full justify-around">
          <section className="mb-2 bg-[#4C9AFF1A] rounded-lg p-4 flex flex-col gap-5 justify-between items-center">
            <Image src={P1} />
            <h2 className="font-semibold text-[12px]">In Feed</h2>
          </section>
          <section className="mb-2 bg-[#4C9AFF1A] rounded-lg p-4 flex flex-col gap-5 justify-between items-center">
            <Image src={P2} />
            <h2 className="font-semibold text-[12px]">Video</h2>
          </section>
          <section className="mb-2 bg-[#4C9AFF1A] rounded-lg p-4 flex flex-col gap-5 justify-between items-center">
            <Image src={P3} />
            <h2 className="font-semibold text-[12px]">Banner</h2>
          </section>
        </div>
      </div>
      <div className=" bg-[#F6F8F9] p-2 flex justify-between items-center">
        <section className="flex gap-5 flex-wrap ">
          <div className="flex flex-col items-center">
            <p className="text-[#686B6E] text-[10px]">Est. Impression</p>
            <h1 className="text-[14px] font-semibold">100K - 300K</h1>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#686B6E] text-[10px]">Est. Click</p>
            <h1 className="text-[14px] font-semibold">2K - 10K</h1>
          </div>
        </section>
        <section>
          <button className="rounded-lg border-2 text-[#747677] py-2 px-4 text-[12px] border-[#CED3D9]">
            Daily
          </button>
          <button className="rounded-lg border-2 text-[12px] font-semibold p-2 border-[#CED3D9] bg-white">
            Weekly
          </button>
        </section>
      </div>
      <div className="flex gap-5  sm:flex-nowrap">
        <section className="rounded-lg bg-[#ebecec] border-2 border-[#747677]">
          <FeatureCard
            img={<Image src={IMG4} alt="image-1" className=" pt-7" />}
            heading="Broad"
            para="Reach Audience across all interests and communities."
            flag="false"
          />
        </section>
        <section className="rounded-lg bg-[#FAFAFA] border-2 border-[#747677]">
          <FeatureCard
            img={<Image src={IMG4} alt="image-1" className=" pt-7" />}
            heading="Broad"
            para="Reach Audience across all interests and communities."
            flag="false"
          />
        </section>
      </div>
      {/* <div>
                <h1 className='text-[16px]'>Location<span className='pl-2 text-red-600'>*</span></h1>
                <input type='text' className='border-2 brder-[#D7D7D7] w-full p-2'/>
            </div> */}

      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">Interest & Tags</h1>
        <div className="w-full border-2 bg-white border-[#D7D7D7] rounded-lg flex flex-wrap items-center gap-2 p-2">
          <span className="text-[16px] bg-[#F1F1F1] rounded-full flex justify-center items-center py-2 px-4 gap-2">
            Fashion
            <Image src={Cross} />
          </span>
          Write More
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">Community Alliance</h1>
        <div className="w-full border-2 bg-white border-[#D7D7D7] rounded-lg flex flex-wrap items-center gap-2 p-2">
          <span className="text-[16px] bg-[#F1F1F1] rounded-full flex justify-center items-center py-2 px-4 gap-2">
            <Image src={Avtar} />
            Fashion Shop
            <Image src={Cross} />
          </span>
          <span className="text-[16px] bg-[#F1F1F1] rounded-full flex justify-center items-center py-2 px-4 gap-2">
            <Image src={Avtar} />
            Clothing Girlz
            <Image src={Cross} />
          </span>
          <span className="text-[16px] bg-[#F1F1F1] rounded-full flex justify-center items-center py-2 px-4 gap-2">
            <Image src={Avtar} />
            Most Attractive
            <Image src={Cross} />
          </span>
          <span className="text-[16px] bg-[#F1F1F1] rounded-full flex justify-center items-center py-2 px-4 gap-2">
            <Image src={Avtar} />
            Boys Collection
            <Image src={Cross} />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">Gender</h1>
        <div className="flex justify-between items-center gap-5">
          <button className="flex-1 rounded-lg border-2 border-[#D7D7D7] bg-[#FAFAFA] text-[16px] text-center p1-2 px-6 font-semibold">
            All
          </button>
          <button className="flex-1 rounded-lg border-2 border-[#D7D7D7] bg-[#FAFAFA] text-[16px] text-center p1-2 px-6">
            Men
          </button>
          <button className="flex-1 rounded-lg border-2 border-[#D7D7D7] bg-[#FAFAFA] text-[16px] text-center p1-2 px-6">
            Women
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">Age Group</h1>
        <div className="flex justify-between items-center gap-5">
          <button className="flex-1 rounded-lg border-2 border-[#D7D7D7] bg-[#FAFAFA] text-[16px] text-center p1-2 px-6 font-semibold">
            All Age Group
          </button>
          <button className="flex-1 rounded-lg border-2 border-[#D7D7D7] bg-[#FAFAFA] text-[16px] text-center p1-2 px-6">
            Select Age Group
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">Location</h1>
        <div className="w-full border-2 bg-white border-[#D7D7D7] rounded-lg flex flex-wrap items-center gap-2 p-2">
          <span className="text-[16px] bg-[#F1F1F1] rounded-full flex justify-center items-center py-2 px-4 gap-2">
            Kanpur
            <Image src={Cross} />
          </span>
          Write More
        </div>
      </div>
      <div className="flex justify-between gap-2 flex-wrap">
        <section className="flex flex-col gap-4">
          <h1 className="font-semibold">Start Date</h1>
          <Date />
        </section>
        <section className="flex flex-col gap-4">
          <h1 className="font-semibold">End Date</h1>
          <Date />
        </section>
      </div>
      <div>
        <form className="flex flex-col gap-5">
          <div className="flex gap-4">
            <input type="radio" name="select-ads" id="radio-1" />
            <label htmlFor="radio-1">
              <h1 className="text-[16px] font-semibold">
                Run this ad continuosly
              </h1>
              <p className="text-[10px]">
                Your ad will run continuously for a daily budget. This option is
                recommended. Learn more
              </p>
            </label>
          </div>
          <div className="flex gap-4">
            <input type="radio" name="select-ads" id="radio-1" />
            <label htmlFor="radio-1">Choose When this Ad Will End</label>
          </div>
        </form>
      </div>
      <div className="flex justify-between gap-2 flex-wrap">
        <section className="flex flex-col gap-4">
          <h1 className="font-semibold">Total Budget</h1>
          <input
            type="text"
            value="Enter Total Budget"
            className="p-4 border-2 border-[#D7D7D7] rounded-xl text-[14px]"
          />
        </section>
        <section className="flex flex-col gap-4">
          <h1 className="font-semibold">Daily Budget</h1>
          <input
            type="text"
            value="Enter Total Budget"
            className="p-4 border-2 border-[#D7D7D7] rounded-xl text-[14px]"
          />
        </section>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[16px] font-semibold">
          What would you like to focus on
        </h1>
        <form className="flex flex-col gap-5">
          <div className="flex gap-4">
            <input type="radio" name="select-ads" id="radio-1" />
            <label htmlFor="radio-1">
              <h1 className="text-[16px] font-semibold">Maximum Conversions</h1>
              <p className="text-[10px]">
                Your ad will run continuously for a daily budget. This option is
                recommended. Learn more
              </p>
            </label>
          </div>
          <div className="flex gap-4">
            <input type="radio" name="select-ads" id="radio-1" />
            <label htmlFor="radio-1">Cost per actions</label>
          </div>
          <input
            type="text"
            value="Enter cost per action"
            className="p-4 border-2 border-[#D7D7D7] rounded-xl text-[14px]"
          />
        </form>
      </div>
    </div>
  );
};

export default MTargetting;
