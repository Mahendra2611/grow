import Stepper from "../components/Stepper";
import lock from "../assets/lock.png";
import cross from "../assets/cross.png";
import Image from "next/image";
import Link from "next/link";

export default function RegistrationLayout({ children }) {
  return (
    <div className=" min-h-[100vh] bg-white text-black py-7 flex flex-col items-center ">
      <div>
        <h1 className=" text-2xl  sm:text-3xl  font-semibold">
          Create an account
        </h1>
        <p className="text-sm text-center mt-3  text-[#666666]">
          Already have an account ?{" "}
          <Link href={"/login"} className="text-[#47A6FF] underline">
            Log in
          </Link>
        </p>
      </div>
      <div className="flex text-[15px] h-[56px] rounded-xl p-2 m-8 bg-slate-100 items-center">
        <Image className="mx-2 h-[20px] w-[20px]" src={lock} />
        We take privacy issues seriously. You can be sure that your personal
        data is securely protected.
        <Image className=" mx-2 h-[15px] w-[15px]" src={cross} />
      </div>
      <Stepper />
      <div className=" w-full">{children}</div>
    </div>
  );
}
