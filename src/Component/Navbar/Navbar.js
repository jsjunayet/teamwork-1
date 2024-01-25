"use client";
import useAuth from "@/app/hook/useAuth";
import Links from "./Link/Links";
import styles from "./Navbar.module.css";
import Image from "next/image";


const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.logo}>Logo</p>
      </div>
      <div className="lg:flex lg:gap-2 lg:items-center">
        <Links></Links>
        {user && (
          <div className="hidden text-right lg:flex gap-3 items-center">
            <button
              onClick={handleLogOut}
              className="py-2 px-3 lg:pl-4 text-base hover:text-red-400"
            >
              Log out
            </button>
            <div className="">
              <p className="text-[14px]">{user?.displayName}</p>
              <p className="text-[12px]">{user?.email}</p>
            </div>

            {/* <Image className="rounded-full border-4 border-white"
              src={user?.photoURL}
              alt="Avatar" width={45} height={45}/> */}
              
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
