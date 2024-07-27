import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const SignIn = () => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-4 sm:p-8 flex flex-col items-center gap-4'>
      <h1 className='font-semibold text-2xl sm:text-4xl'>Sign In</h1>
      <p className='text-xs  text-[#464D61] border-2 border-[#EBEEF7] w-full text-center p-2'><Image src=""/> Continue with Mobile number</p>
      <p className='text-xs text-[#464D61] border-2 border-[#EBEEF7] w-full p-2 text-center'>or Sign in with Email</p>
      <form className='w-full flex flex-col gap-2 sm:gap-4'>
        
        <input type='text' placeholder='Username or email address' className=' border-2 border-[#EBEEF7] w-full p-2'/> 
        <input type='password' placeholder='Password' className='w-full p-2  border-2 border-[#EBEEF7]'/>
       
      </form>
      <div className='w-full text-xs'>
      <input type='checkbox' className='text-[#464D61]'/> <span className='text-[#636A80]'>Keep me logged</span>
      <Link href={"/"} className='float-right text-[#00AAFF]'>Forget password</Link>
      </div>
      <button className='bg-[#00AAFF] w-full h-[40px]  text-white'>Sign In</button>
      <p className='text-xs text-[#00AAFF]'>Don't have account ? <Link href="/">Sign Up</Link></p>
    </div>
  )
}

export default SignIn