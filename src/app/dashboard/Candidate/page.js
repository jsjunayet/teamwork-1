import Image from "next/image";
const page = async () => {
  const res = await fetch("https://evs-delta.vercel.app/candidate");
  const candidates = await res.json();
  console.log(candidates);
  return (
    <div>
      <p>All Candidates: {candidates.length}</p>
      {candidates.map((candidate) => (
        <div key={candidate.id}>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Candidate</th>
                  <th>ID Card NUmber</th>
                  <th>Brand</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            src={candidate.candidatePhoto}
                            width={500}
                            height={500}
                            alt="candidate image"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {candidate.candidateName}
                        </div>
                        
                      </div>
                    </div>
                  </td>
                  <td>{candidate.candidateID}</td>
                  <td>{candidate.brand}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Information</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
