import Link from "next/link";
import { MdOutlineLogout, MdOutlineMoreHoriz, MdOutlineSettings, MdOutlineSpaceDashboard } from "react-icons/md";

const SideNav = ({ children }) => {


  return (
    <div>
     <div className="flex flex-col justify-start items-center">
          <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
            Voting System
          </h1>

          <div className="my-4 border-b border-gray-100 pb-4 w-full">
            <Link href="/" className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer shadow-lg m-auto">
              <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Home Page
              </h3>
            </Link>
            <Link href="/dashboard" className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer shadow-lg m-auto">
              <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Dashboard User
              </h3>
            </Link>
            <Link href="/dashboard/dash" className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer shadow-lg m-auto">
              <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Dash
              </h3>
            </Link>
            <Link href="/dashboard/board" className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer shadow-lg m-auto">
              <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Board
              </h3>
            </Link>
            <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer shadow-lg m-auto">
              <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Home
              </h3>
            </div>
          </div>

          {/* setting  */}
          <div className="my-4 border-b border-gray-100 pb-4 w-full">
            <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer shadow-lg m-auto">
              <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Setting
              </h3>
            </div>
            <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer shadow-lg m-auto">
              <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                More
              </h3>
            </div>
          </div>

          {/* logout  */}
          <div className="my-4 border-b border-gray-100 pb-4 w-full">
            <div className="flex mb-2 justify-start items-center gap-4 px-5 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer shadow-lg m-auto">
              <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Logout
              </h3>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SideNav;
