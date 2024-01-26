"use client";
import useAuth from "@/app/hook/useAuth";
import Link from "next/link";
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
        <p className={styles.logo}>EVS</p>
      </div>
      <div className="lg:flex lg:gap-2 lg:items-center">
        <Links></Links>
        {user && (
          <div className="dropdown dropdown-end ml-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user && <Image width={20} height={20} alt="Profile Image" src={user?.photoURL} />}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[100] p-4 shadow bg-white text-black rounded-box w-40 mt-4"
            >
              <div className="text-center">
                {user && <p className="mb-3">{user?.displayName}</p>}
                {user && (
                  <li>
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                )}

                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
