import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div className="">
      <div className="">
        <div className="text-white  rounded-xl  space-y-4  mb-10">
          <h2 className="pb-4 pt-2 text-3xl lg:text-5xl rounded-md bg-gradient-to-tr from-gray-900 to-gray-600 font-medium">
            Get in Touch
          </h2>
          <p className="text-3xl lg:text-5xl font-medium w-5/6">
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
            <button
              type="submit"
              className=" w-full rounded-md py-2 hover:bg-white font-medium bg-gray-800 hover:text-gray-800 hover:transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
