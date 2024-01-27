"use client";
import { useEffect, useState } from "react";
import CandidateCart from "./CandidateCart";
import { MdDeleteForever } from "react-icons/md";

const Page = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("https://evs-delta.vercel.app/candidate")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  }, []);

  return (
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
              <td className="text-3xl cursor-pointer"><MdDeleteForever /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
