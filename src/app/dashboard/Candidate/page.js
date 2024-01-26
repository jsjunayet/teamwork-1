"use client";
import { useEffect, useState } from "react";
import CandidateCart from "./CandidateCart";

const Page = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch("https://evs-delta.vercel.app/candidate")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  }, []);

  return (
    <div>
     {candidates?.map((candidate) => (
        <CandidateCart key={candidate._id} candidate={candidate}></CandidateCart>
      ))}
       
    </div>
  );
};

export default Page;