"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Registration = () => {
  const[Error, seterror] = useState("")
  const[loading, setloading]=useState(false)
  const handleRegistration = async(e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photo = from.photo.value;
    const date = from.date.value;
    const idNumber =from.idNumber.value;
    const user ={name, email, password, photo,date,idNumber}
    console.log(user)
    try{
      setloading(true)
      const res = await fetch("http://localhost:3000/api/signup",{
          method:"POST",
          headers:{
           "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
         });
         if(res.ok){
          seterror(await res.json())
           from.reset()
        //  router.push('/login')
         }
     }catch(err){
      console.log(err)
      setloading(false)
     }finally{
      setloading(false)
     }
  };
  return (
  
    <div>
      <div className="my-8 p-6 bg-gray-800 rounded-md shadow-md">
        <div className="flex justify-center mx-auto">
          <Image
            src="https://i.postimg.cc/s2Nhzyd5/signup-removebg-preview.png"
            className="w-[150px] h-[150px]"
            width="500"
            height="500"
            alt="signup image"
          ></Image>
        </div>
        <div className="hero">
          <div className="hero-content  ">
            <div className=" w-full   ">
              <form onSubmit={handleRegistration} className="card-body">
                <div className="grid lg:grid-cols-3 gap-4">
                  <div>
                    <div className="form-control">
                      <label className="label">
                        <span className=" text-white">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-2  bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
                        required
                        name="name"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className=" text-white">ID Card Number</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Photo"
                        className="w-full px-4 py-2  bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
                        required
                        name="idNumber"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-control">
                      <label className="label">
                        <span className=" text-white">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2  bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
                        required
                        name="password"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className=" text-white">Upload Picture</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Photo"
                        className="w-full px-4 py-2  bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
                        required
                        name="photo"
                      />
                    </div>
                    </div>
                   <div>
                   <div className="form-control">
                      <label className="label">
                        <span className=" text-white">E-mail</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your E-mail"
                        className="w-full px-4 py-2  bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
                        required
                        name="email"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className=" text-white">Birth of Date</span>
                      </label>
                      <input
                        type="date"
                        placeholder="Photo"
                        className="w-full px-4 py-2  bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
                        required
                        name="date"
                      />
                    </div>
                   </div>
                  
                </div>
                {
                  Error && <p className="">{Error.message}</p>
                  }
                
                <div className="form-control mt-3 w-full ">
                  <button disabled={loading} className="p-2  button text-white bg-gray-500 shadow-2xl hover:bg-slate-400 rounded-sm">
                    {
                      loading?"loading....":"Sign Up"
                    }
                  </button>
                </div>
                <label className="label">
                  Already have an account?{" "}
                  <span className="text-white ">
                    {" "}
                    <Link href="/login">Log In</Link>
                  </span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
