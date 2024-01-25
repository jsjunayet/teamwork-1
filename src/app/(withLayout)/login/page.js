/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Swal from 'sweetalert2'

//firebase
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import {useAuthState} from 'react-firebase-hooks/auth';

const page = () => {
    //firebase
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();
    const [user] =useAuthState(auth);
    console.log({user})

  const handleLogin = async (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    //firebase
    try{
        const res = await signInWithEmailAndPassword(email, password);
        console.log({res});
        if(res){
            router.push('/')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }
        else{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Enail & Password Wrong",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }catch(e){
        console.error(e)
        router.push('/login')
    }
  };

  return (
    <div className="mt-8 p-6 bg-gray-800 rounded-md shadow-md">
      <div className="flex justify-center mx-auto">
        <Image
          src="https://i.postimg.cc/Hn6jWF61/Untitled-design-removebg-preview.png"
          className="w-[150px] h-[150px]"
          width="500"
          height="500"
          alt="signup image"
        ></Image>
      </div>
      <div>
        <div className="w-6/12 flex justify-center mx-auto ">
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control">
              <label className="">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your E-mail"
                className="w-full px-4 py-2  bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="w-full px-4 py-2 mb-4 bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
                required
                name="password"
              />
            </div>
            <div className="form-control">
              <button className="p-2 text-white bg-gray-500 shadow-2xl hover:bg-slate-400 rounded-sm">
                Login
              </button>
            </div>

            <label className="label">
              New member?{" "}
              <span className="text-[#205c67]">
                <Link href="/registration">Register</Link>
              </span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
