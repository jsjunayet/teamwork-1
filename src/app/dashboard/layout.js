"use client";
import NavBarIcon from "@/Component/Dashboard/NavBarIcon/NavBarIcon";
import SideNav from "@/Component/Dashboard/SideNav/SideNav";
import NavLink from "@/Component/Navbar/NavLink/Navlink";

const layout = ({ children }) => {
  return (
    <div className="flex">
      {/* SideNav  */}
      <div className="p-6 w-1/2 lg:w-72 h-screen bg-white">
        <SideNav />
      </div>
      {/* content  */}
      <div className="flex-1 p-8">{children}</div>
      <NavBarIcon/>
    </div>
  );
};

export default layout;
