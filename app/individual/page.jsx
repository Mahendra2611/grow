
import IMG1 from "../assets/img1.png"
import Stepper from "../../components/Stepper"
import IMG2 from "../assets/img2.png"
import IMG3 from "../assets/img3.png"
import lock from "../assets/lock.png"
import cross from "../assets/cross.png"
import Image from "next/image"
import FeatureCard from "../../components/FeatureCard"
const page = () => {
  return (
    <div className="m-auto min-h-[100vh] w-[80%] py-5  flex flex-col justify-around items-center gap-8 ">
      <div>
      <h1 className=" text-2xl  sm:text-3xl  font-semibold">Create an account</h1>
      <p className="text-[16px] text-[#666666]">Already have an account ? <span className="text-[#47A6FF]">Log in</span></p>
      </div>
      
     <div className="flex gap-2 items-center">
     <Image src={lock} className="w-[22px] h-[19px]"/>
      <p className="text-[#303033] text-[15px]">We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
      <Image src={cross} className="w-[14px] h-[14px]"/>
     </div>
     <Stepper/>
      <div className="flex flex-col gap-6">
      <FeatureCard 
      img={<Image src={IMG1} alt="image-1"/>} 
      heading="Individual"
       para="Advertise your own app or service to gain traction within the Grovyo user base.."
       flag="true"
       />
     <FeatureCard 
      img={<Image src={IMG2} alt="image-1"/>} 
      heading="Organization"
       para="Run ads for multiple accounts and earn cashback on your ad spend"
       flag="false"
       />
       <FeatureCard 
      img={<Image src={IMG3} alt="image-1"/>} 
      heading="Affiliator"
       para="Run ads for multiple accounts and earn cashback on your ad spend"
       flag="false"
       />
      </div>
      <button className="bg-[#47A6FF] text-white px-4 py-1 text-[16px] rounded-lg">Continue</button>
    </div>
  )
}

export default page
