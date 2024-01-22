/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Image from 'next/image';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";



const About = () => {
    return (
       
        <div className='mb-10'>
             <div className='flex justify-center mx-auto mb-5'>
                <Image src="https://i.postimg.cc/2jXgQM1Z/sharpen-OIP.jpg" className='rounded-lg w-[1200px] h-[300px]' width={500} height={500} alt="about image"/>
             </div>
           <h1 className='text-2xl  lg:text-4xl text-center text-[#38c2cd] font-bold mb-8'>About DVS Online Voting</h1>
         <div className='flex gap-1'>
           <span className='text-[#38c2cd]'><IoMdCheckmarkCircleOutline /></span>  <p className='font-serif'> 
              Provide the best possible experience for both voters and election managers. Getting voters to vote is challenging so we provide a clean and simple user interface for voters. DVS is fast and works great on mobile devices.
             </p>
         </div>
         <div className='flex gap-1'>
           <span className='text-[#38c2cd]' ><IoMdCheckmarkCircleOutline /></span>  <p className='font-serif'> 
           Provide top-notch security and reliability. DVS encrypts voting pages with state-of-the-art encryption for security, runs on Google servers for fast responses, and sends voting emails using Sendgrid to make sure emails land in voter inboxes.
             </p>
         </div>
         <div className='flex gap-1'>
           <span className='text-[#38c2cd]'><IoMdCheckmarkCircleOutline /></span>  <p className='font-serif'> 
           Maintain voter privacy. Voter emails are used ONLY for your election.
             </p>
         </div>
         <div className='flex gap-1'>
           <span className='text-[#38c2cd]'><IoMdCheckmarkCircleOutline /></span>  <p className='font-serif'> 
           Promote the use of better voting techniques. DVS specializes in ranked voting because ranked voting provides better outcomes than check-the-box voting.
             </p>
         </div>
         <div className='flex gap-1'>
           <span className='text-[#38c2cd]'><IoMdCheckmarkCircleOutline /></span>  <p className='font-serif'> 
           Be cost effective! OpaVote is much less expensive than most other providers even though DVS provides better services.
             </p>
             
         </div>
        </div>
    );
};

export default About;