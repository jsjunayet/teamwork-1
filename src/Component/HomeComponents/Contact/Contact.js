import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="mt-10 ">
      <div className="grid lg:grid-cols-2 lg:gap-5">
        <div className="mb-10 bg-gradient-to-tr from-gray-900 to-gray-600 flex justify-center items-center p-9">
          <div className="text-white space-y-2 lg:space-y-4">
            <h2 className="text-3xl lg:text-4xl rounded-md font-bold">
              Get in Touch
            </h2>
            <p className="text-xl lg:text-3xl  w-4/6">
              Send us a message for any information
            </p>
            <div className=" space-y-1">
              <div className="flex items-center gap-1">
                <span className="text-lg">
                  <BsTelephoneFill></BsTelephoneFill>
                </span>
                <p>+8801741156408</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl">
                  <MdEmail></MdEmail>
                </span>
                <p>info@gmail.com</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl">
                  <MdLocationOn></MdLocationOn>
                </span>
                <p>72, Wall street, King Road, Dhaka</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-4 text-center">
            <input
              className="w-full px-4 py-2 rounded-md"
              type="text"
              name="name"
              placeholder="Name"
            />
            <br />
            <input
              className="w-full px-4 py-2 rounded-md"
              type="email"
              name="email"
              placeholder="Email"
            />
            <br />
            <textarea
              className="w-full px-4 pt-2 rounded-md"
              name="massage"
              placeholder="Write massage"
              cols="20"
              rows="8"
            ></textarea>
            <br />
            <button className=" w-full rounded-md py-2 hover:bg-white font-medium bg-gray-800 hover:text-gray-800 hover:transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
