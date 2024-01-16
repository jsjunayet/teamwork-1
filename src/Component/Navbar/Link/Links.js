"use client"
import { useState } from "react";
import NavLink from "../NavLink/Navlink";

import styles from "./Link.module.css"

const Links = () => {
    const Links = [
        {
            path: '/',
            title: "Home",
        },
        {
            path: '/about',
            title: "About",
        },
        {
            path: '/service',
            title: 'Service'
        },
        {
            path: '/registration',
            title: 'Registration'
        },
    ]
    const [open, setopen]=useState(false)
    return (
        <div>
            <div className={styles.link}>
             {
                Links.map((item)=><NavLink item={item} key={item}></NavLink>)
            }
            </div>
            <button className={styles.menu} onClick={()=>setopen((prev)=>!prev)}>menu</button>
            {
                open && <div className={styles.mobileDevice}>
                    {
                       Links.map((item)=><NavLink item={item} key={item}></NavLink>)
                    }
                </div>
            }
        </div>
    );
};

export default Links;