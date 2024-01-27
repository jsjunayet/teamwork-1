"use client";
import { useEffect, useState } from "react";
import AllVoter from "./AllVoter";
import { MdDeleteForever } from "react-icons/md";
import Image from "next/image";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";


const Page = () => {
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    fetch("https://evs-delta.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setVoters(data));
  }, []);
 console.log(voters)
 const handledeleted =(id)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to fire this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Deleted it!"
}).then(async (result) => {
    if (result.isConfirmed) {
        const res = await fetch(`http://localhost:5000/users/${id}`,{method:"DELETE"})
        // if (res.data.modifiedCount > 0) {
        //     Swal.fire({
        //         title: "fire!",
        //         text: `this voter has been deleted.`,
        //         icon: "success"
        //     });
        // }
        console.log(res)
    }
});
 }
  return (
    <div className="overflow-x-auto">
    <table className="table text-white">
      {/* head */}
      <thead>
        <tr className="text-white text-center">
          <th>
            <label>
              <p className="text-white">Number</p>
            </label>
          </th>
          <th>Name</th>
          <th>Photo</th>
          <th>ID Card Number</th>
          <th>Email</th>
          <th>Date</th>
          <th>Verify</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {voters?.map((vote, index) => (
          <tr key={vote.id} className="text-center">
            <th>
              <label>
                <p className="text-white">{index + 1}</p>
              </label>
            </th>
            <td>{vote.name}</td>
            <td>
              <div className="flex items-center gap-3">
                {/* <div className="avatar">
                <Image
                      src={vote.photo}
                      alt={vote.name}
                      width={50} 
                      height={50} 
                    />
                </div> */}
                
              </div>
            </td>
            <td>{vote.idNumber}</td>
            <td>{vote.email}</td>
            <td>{vote.date}</td>
            <td>
            <ImCross className="text-xl text-center ml-3 cursor-pointer" />
            </td>
            <td className="text-3xl cursor-pointer"><button onClick={()=>handledeleted(vote._id)}><MdDeleteForever /></button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Page;