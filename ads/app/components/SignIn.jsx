'use client'
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ValidateSignIn } from "../hooks/ValidateSignIn";
import { useRef,useState } from "react";
const SignIn = () => {
  const EmailRef = useRef(null);
  const PasswordRef = useRef(null);
  const [SignIn,setSignIn] = useState({
    email:"Username or email address",
    passsowrd:"Password"
  })
    console.log(SignIn)
  const handleSignIn = (e)=>{
    if(ValidateSignIn(EmailRef.current.value)){
      setSignIn({
        email:EmailRef.current.value,
        passsowrd:PasswordRef.current.value,
        emailError:""
      })
    }
    else{
      setSignIn({
        email:EmailRef.current.value,
        passsowrd:PasswordRef.current.value,
        emailError:"* Email is not correct"
      })
    }
    
    
  }
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 flex flex-col items-center gap-4">
      <h1 className="font-semibold text-2xl sm:text-4xl text-black">Sign In</h1>
      <p className="text-xs  rounded-lg text-[#464D61] border-2 border-[#EBEEF7] w-full text-center p-2">
        <Image src="" alt="loading"/> Continue with Mobile number
      </p>
      <p className="text-xs rounded-lg text-[#464D61] border-2 border-[#EBEEF7] w-full p-2 text-center">
        or Sign in with Email
      </p>
      <p className="text-[8px] text-red-800 float-left">{SignIn.emailError}</p>
      <form className="w-full flex flex-col gap-2 sm:gap-4">
        <input
        ref={EmailRef}
          type="text"
          placeholder={SignIn.email}
          className=" border-2 rounded-lg text-black border-[#EBEEF7] w-full p-2"
        />
        <input
        ref={PasswordRef}
          type="password"
          placeholder={SignIn.passsowrd}
          className="w-full p-2 border-2 text-black rounded-lg border-[#EBEEF7]"
        />
      </form>
      <div className="w-full text-xs">
        <input type="checkbox" className="text-[#464D61]" />{" "}
        <span className="text-[#636A80]">Keep me logged</span>
        <Link href={"/"} className="float-right text-[#00AAFF]">
          Forget password
        </Link>
      </div>
      <button onClick={handleSignIn} className="bg-[#00AAFF] w-full h-[40px]  text-white">
        Sign In
      </button>
      <p className="text-xs text-[#00AAFF]">
        Don't have account ? <Link href="/registration?step=1">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignIn;
