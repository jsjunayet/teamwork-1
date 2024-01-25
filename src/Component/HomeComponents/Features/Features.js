"use client";
import Link from "next/link";
import React from "react";
import { GiVote } from "react-icons/gi";
import { MdAddBox } from "react-icons/md";
import { FaHistory } from "react-icons/fa";

const Features = () => {
  return (
    <div className="my-16">

     <div className="flex items-center gap-8">
     <h1 className="text-3xl lg:text-5xl font-bold lg:font-semibold mb-7 lg:pl-0 pl-9">
        Access Our Services
      </h1>
     </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Link href="/">
          <div className="flex flex-col justify-center items-center bg-white text-[#00263A] py-12 lg:rounded-xl">
            <p className="text-3xl font-bold mb-3">Organize voting</p>
            <MdAddBox className="text-[50px]" />
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col justify-center items-center bg-white text-[#00263A] py-12 lg:rounded-xl">
            <p className="text-3xl font-bold mb-[10px]">Live voting</p>
            <GiVote className="text-[55px]" />
          </div>
        </Link>
        <Link href="/">
          <div className="flex flex-col justify-center items-center bg-white text-[#00263A] py-12 lg:rounded-xl">
            <p className="text-3xl font-bold mb-4">Voting histories</p>
            <FaHistory className="text-[45px]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Features;
