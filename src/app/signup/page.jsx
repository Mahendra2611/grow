import SignIn from "@/components/SignIn"
import Feature from "@/components/SignInInfo"

const page = () => {
  return (
    <div className=" bg-[#F8F9FA] px-[10%] min-h-screen m-auto  flex justify-center items-center gap-4 flex-wrap md:flex-nowrap sm:gap-8">
      <div className="md:basis-2/5">
      <Feature/>
      </div>
     <div className="md:basis-3/5">
     <SignIn/>
     </div>
      
    </div>
  )
}

export default page
