"use client";
import { useEffect, useState } from "react";
import AllVoter from "./AllVoter";


const Page = () => {
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    fetch("https://evs-delta.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setVoters(data));
  }, []);

  return (
    <div>
     {voters?.map((voter) => (
        <AllVoter key={voter._id} voter={voter}></AllVoter>
      ))}
       
    </div>
  );
};

export default Page;