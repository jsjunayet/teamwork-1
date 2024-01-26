
const AllVoter = ({voter}) => {
    const {_id,name,email,photo,date,idNumber} = voter || {}
    return (
        <div>
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
              <th>Candidate Name</th>
              <th>ID Card Number</th>
              <th>Date Of Birth</th>
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
                      {/* <Image
                        src={candidatePhoto}
                        width={500}
                        height={500}
                        alt="candidate image"
                      ></Image> */}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                  </div>
                </div>
              </td>
              <td>{idNumber}</td>
              <td>{date}</td>
              <th>
                <button className="btn btn-ghost btn-xs">Information</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllVoter;