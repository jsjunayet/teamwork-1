"use client";
import { UploadImage } from "@/Component/shareComponent/UploadImage";
import { TfiAlert } from "react-icons/tfi";
import Swal from 'sweetalert2'

const page = () => {

    const handleCreateCandidate = async (event) =>{
        event.preventDefault();
        const form = event.target;
        const candidateName = form.candidateName.value;
        const candidateID = form.candidateID.value;
        const candidatePhoto = form.candidatePhoto.files[0];
        const userID = form.userID.value;
        const candidateEmail = form.candidateEmail.value;
        const check = form.check.value;
        const brand= form.brand.value;
        const candidate = {candidateName,candidateID,candidatePhoto,userID,candidateEmail,check,brand}
       console.log(candidate)
       try {
        const data = await UploadImage(candidatePhoto);
        console.log(data);
      } catch (error) {
        console.error("Error handling candidate:", error);
      }
    };

  return (
    <div>
      <div className="">
        <div>
          <h2 className="text-4xl font-bold text-center">Create Candidate</h2>
          <div className="my-8 p-6 bg-gray-800 rounded-md shadow-md">
            <h2 className="text-3xl font-bold text-center">EVS</h2>
            <div className="flex justify-center mx-auto"></div>
            <div className="hero">
              <div className="hero-content  ">
                <div className=" w-full   ">
                  <form onSubmit={handleCreateCandidate} className="card-body">
                    <div className="grid lg:grid-cols-3 gap-4">
                      <div>
                        <div className="form-control">
                          <label className="label">
                            <span className=" text-white">Candidate Name</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Candidate Name"
                            className="w-full px-4 py-3  bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
                            required
                            name="candidateName"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className=" text-white">ID Card Number</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Candidate ID Number"
                            className="w-full px-4 py-3  bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
                            required
                            name="candidateID"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="form-control">
                          <label className="label">
                            <span className=" text-white">Upload Photo</span>
                          </label>
                          <input required name="candidatePhoto" type="file" className="file-input file-input-bordered w-full max-w-xs bg-gray-700" />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className=" text-white">
                              ID Card Number (Your)
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="Your ID Number"
                            className="w-full px-4 py-3  bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
                            required
                            name="userID"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="form-control">
                          <label className="label">
                            <span className=" text-white">E-mail</span>
                          </label>
                          <input
                            type="email"
                            placeholder="Candidate E-mail"
                            className="w-full px-4 py-3  bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500"
                            required
                            name="candidateEmail"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className=" text-white">Select Brand</span>
                          </label>
                         <select  className="w-full px-4 h-[48px]  bg-gray-700 text-white rounded-md focus:outline-none focus:border-indigo-500" name="brand" id="">
                          <option value="Dream Warrior">Dream Warrior</option>
                          <option value="Hexa Inovet">Hexa Inovet</option>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                         </select>
                        </div>
                      </div>
                      <label className="label">
                        <div className="flex gap-1">
                          <input type="checkbox" name="check" id=""  required/>
                          Aggre to continue
                        </div>
                        <span className="text-white "> </span>
                      </label>
                    </div>

                    <div className="form-control mt-3 w-full ">
                      <button className="p-2  button text-white bg-gray-500 shadow-2xl hover:bg-slate-400 rounded-sm">
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-yellow-100 text-black rounded-md">
            <div className="flex gap-2">
              <span className="text-2xl text-red-300 font-extrabold">
                {" "}
                <TfiAlert />
              </span>
              <h2>
              Provide correct information. Incorrect information is not acceptable.Thank You
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
