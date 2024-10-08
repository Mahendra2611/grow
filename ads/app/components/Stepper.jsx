import Image from "next/image";
import IMG1 from "../assets/no-1.png";
import IMG2 from "../assets/no-2.png";
import IMG3 from "../assets/no-3.png";
import IMG4 from "../assets/completed.png";
const Stepper = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col items-center">
        <Image src={IMG1} />
        <p className="text-[15px] text-center text-[#114763]">
          Select your type
        </p>
      </div>
      <hr className=" border-1 border-black mt-2 w-[100px] sm:w-[200px]" />
      <div className="flex flex-col items-center">
        <Image src={IMG2} />
        <p className="text-[15px] text-center text-[#114763]">
          Provide Your basic info
        </p>
      </div>
      <hr className=" border-1 border-black mt-2  w-[100px] sm:w-[200px]" />
      <div className="flex flex-col items-center">
        <Image src={IMG3} />
        <p className="text-[15px] text-center text-[#114763]">
          Verify your OTP
        </p>
      </div>
    </div>
  );
};

export default Stepper;
