"use client"
import React from 'react';
import { GiVote } from "react-icons/gi";
import { IoCreateOutline } from "react-icons/io5";
import { MdHowToVote } from "react-icons/md";

const Features = () => {
    return (
        <div className='my-10'>
            <h1>Features</h1>
            <div className='grid lg:grid-cols-3'>
                <div>Create election Category <IoCreateOutline className='text-[50px]' /> </div>
                <div>All Voting right now <GiVote className='text-[50px]' /></div>
                <div>All result <MdHowToVote className='text-[50px]' /></div>
            </div>
        </div>
    );
};

export default Features;