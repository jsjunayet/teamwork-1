"use client";
const page = () => {
  const handleCreate = (event) => {
    event.preventDefault();
    const form = event.target;
    const OrganizatonName = form.OrganizatonName.value;
    const Type = form.Type.value;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    console.log(OrganizatonName, Type, email, name, photo);
  };

  return (
    <div className="mb-36 mt-20">
      <div>
        <div className="shadow-2xl bg-base-200 rounded-lg">
          <h3 className="text-4xl font-bold text-center">EVS</h3>
          <div className="flex justify-center mx-auto"></div>
          <div className="hero">
            <div className="hero-content  ">
              <div className=" w-full   ">
                <form onSubmit={handleCreate} className="card-body">
                  <div className="grid lg:grid-cols-2 gap-2">
                    <div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">
                            Organization
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Organization Name"
                          className=" p-2 rounded-sm shadow-2xl border-l-8"
                          required
                          name="OrganizatonName"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">
                            Your E-mail
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          className=" p-2 rounded-sm border-l-8"
                          required
                          name="email"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">
                            Your Name
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Your Name"
                          className=" p-2 rounded-sm border-l-8"
                          required
                          name="name"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">
                            Organization Logo
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Photo Link"
                          className="p-2 rounded-sm border-l-8"
                          required
                          name="photo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text text-white">
                        Organization Type
                      </span>
                    </label>
                    <select
                      className="py-2 rounded-sm shadow-2xl border-l-8 mb-2"
                      name="Type"
                      id=""
                    >
                      <option value="Organization">Administrative</option>
                      <option value="Organization">Education</option>
                      <option value="Organization">Genaral</option>
                    </select>
                  </div>
                  <div className="form-control mt-6 w-full ">
                    <button className="p-2  button text-white bg-gray-500 shadow-2xl hover:bg-slate-400 rounded-sm">
                      Submite
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
