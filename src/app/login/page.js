"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);
      };
  return (
    <div className="bg-base-200">
        <div className="flex justify-center mx-auto">
          <Image
            src="https://i.postimg.cc/Hn6jWF61/Untitled-design-removebg-preview.png"
            className="w-[150px] h-[150px]"
            width="500"
            height="500"
            alt="signup image"
          ></Image>
        </div>
          <div >
            <div className=" w-6/12 flex justify-center mx-auto ">
              <form onSubmit={handleLogin} className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your E-mail"
                    className="border-2 p-2 rounded-sm"
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
                    className="border-2 p-2 rounded-sm"
                    required
                    name="password"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="p-2  text-white bg-gray-500 shadow-2xl hover:bg-slate-400 rounded-sm">
                    Login
                  </button>
                </div>

                <label className="label">
                  New menber? <span className="text-[#205c67]">
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
