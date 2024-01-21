"use client";
import React from "react";
import Image from "next/image";
import { Link, NavLink } from "react-router-dom";

const Registration = () => {

  const handleRegistration = (event) =>{
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photo = from.photo.value;
    console.log(name,email,password,photo)
  }
  return (
    <div>
      <div className="shadow-2xl bg-base-200 rounded-lg">
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
                <div className="grid lg:grid-cols-2 gap-2">
                  <div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="border-2 p-2 rounded-sm"
                        required
                        name="name"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">E-mail</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your E-mail"
                        className="border-2 p-2 rounded-sm"
                        required
                        name="email"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                        className="border-2 p-2 rounded-sm"
                        required
                        name="password"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Upload Picture</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Photo"
                        className="border-2 p-2 rounded-sm"
                        required
                        name="photo"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6 w-full ">
                  <button className="p-2  button text-white bg-gray-500 shadow-2xl hover:bg-slate-400 rounded-sm">
                    Sign Up
                  </button>
                </div>
                <label className="label">
                  Already have an account?{" "}
                  <span className="text-[#205c67] "></span>
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
