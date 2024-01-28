"use client";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";

const Page = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/candidate")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  }, []);
  const handledeleted = (id)=>{
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
          const res =await axios.delete(`http://localhost:5000/candidate/${id}`)
          if (res.data.deletedCount > 0) {
            setCandidates((prevotes)=>prevotes.filter((votes)=>votes._id!==id))
              Swal.fire({
                  title: "fire!",
                  text: `this Candidate has been deleted.`,
                  icon: "success"
              });
          }
      }
  });
  }

  return (
   <div>
    <p className=" font-bold text-xl text-white text-center mt-5 mb-1">Total Candidate : {candidates.length}</p>
    <hr className="w-52 h-2 mx-auto my-3 bg-gradient-to-r from-blue-500 to-green-500"></hr>

     <div className="overflow-x-auto">
      <table className="table text-white">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <p className="text-white">Number</p>
              </label>
            </th>
            <th className=" text-white">Candidate</th>
            <th className="text-white">ID Card Number</th>
            <th className="text-white">Brand</th>
            <th className="text-white">Profile</th>
            <th className="text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* map candidates to rows */}
          {candidates.map((candidate, index) => (
            <tr key={candidate.id}>
              <th>
                <label>
                  <p className="text-white">{index + 1}</p>
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar"></div>
                  <div>
                    <div className="font-bold">{candidate.candidateName}</div>
                  </div>
                </div>
              </td>
              <td>{candidate.candidateID}</td>
              <td>{candidate.brand}</td>
              
              <td>
                <button className="btn btn-ghost btn-xs text-white">Information</button>
              </td>
              <td className="text-3xl cursor-pointer"><button onClick={()=>handledeleted(candidate._id)}><MdDeleteForever /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default Page;
