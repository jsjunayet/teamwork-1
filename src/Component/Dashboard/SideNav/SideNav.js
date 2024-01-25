import Link from "next/link";
import { MdOutlineLogout, MdOutlineMoreHoriz, MdOutlineSettings, MdOutlineSpaceDashboard } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { BsPersonCircle} from "react-icons/bs";
import { SiSecurityscorecard } from "react-icons/si";
import { MdPeople } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
const SideNav = ({ children }) => {


  return (
    <div>
     <div className="flex flex-col justify-start items-center">
          <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full ">
            Voting System
          </h1>

          <div className="my-4 border-b border-gray-100 pb-4 w-full">
           
            <Link href="/dashboard/createCandidate" className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer shadow-lg m-auto border-2 border-gray-200">
              <IoPersonAdd  className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Create Candidate
              </h3>
            </Link>
            <Link href="/dashboard/Candidate" className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer shadow-lg m-auto border-2 border-gray-200">
              <BsPersonCircle className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Candidate
              </h3>
            </Link>
            <Link href="/dashboard/allVoter" className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer shadow-lg m-auto border-2 border-gray-200">
              <  MdPeople className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                All Voter
              </h3>
            </Link>

            <Link href="/dashboard/LivePreview" className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer shadow-lg m-auto border-2 border-gray-200">
              <SiSecurityscorecard className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
               Live Preview
              </h3>
            </Link>

            <Link href="/dashboard/profile" className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer shadow-lg m-auto border-2 border-gray-200">
            <CgProfile className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Profile
              </h3>
            </Link>

            <Link href="/" className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer shadow-lg m-auto border-2 border-gray-200">
            <IoMdHome className="text-2xl text-gray-600 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                Home
              </h3>
            </Link>
            

          

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
