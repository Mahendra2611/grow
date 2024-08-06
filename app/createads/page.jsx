import AdsHeader from "../../components/AdsHeader"
import CreateAdPreview from "../../components/CreateAdPreview"
import CreateAdAcordian from "../../components/CreateAdAcordian"
const page = () => {
  return (
    <div className='w-screen flex flex-col'>
        <AdsHeader/>
        <div className='w-full flex flex-wrap sm:flex-nowrap sm:gap-5 md:gap-0 '>
       <div className='max-w-screen basis-full sm:basis-1/2  bg-[#f8f9fade] sm:px-10 '>
       <CreateAdAcordian/>
       </div>
       <div className='w-screen basis-full sm:basis-1/2 bg-[#f8f9facc]'>
       <CreateAdPreview/> 
       </div>
    </div>
    </div>
  )
}

export default page
