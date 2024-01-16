"use client"
import Link from 'next/link';
import React from 'react';
import styles from './Navlink.module.css';
import { usePathname } from 'next/navigation';

const NavLink = ({item}) => {
    const pathName = usePathname()
    return (
        <div>
            <Link className={`${styles.conatiner} ${pathName === item.path && styles.active}`}  href={item.path}>{item.title}</Link>
        </div>
    );
};

export default NavLink;