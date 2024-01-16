import Link from 'next/link';
import React from 'react';
import Links from './Link/Links';

const Navbar = () => {
   
    return (
        <div className='flex justify-between items-center mt-4 p-4 md:p-0'>
            <div>
                <p className=' font-bold text-xl z-40'>Logo</p>
            </div>
            <div>
                <Links></Links>
            </div>
        </div>
    );
};

export default Navbar;