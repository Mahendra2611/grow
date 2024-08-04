import Home from '@/components/Home'
import Search from '@/components/Search'
const page = () => {
  return (
    <div className='flex flex-col gap-5 p-1 sm:p-5 md:p-10 bg-gradient-to-r from-[#000000] via-[#111827] to-[#000000]'>
      <Home/>
        <Search/>
      
    </div>
  )
}

export default page
