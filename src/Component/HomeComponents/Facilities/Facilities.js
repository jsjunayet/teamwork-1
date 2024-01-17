const Facilities = () => {
  return (
    <div className="my-10">
      <div className="grid lg:grid-cols-2">
        <div className="bg-[#00263A] text-white p-9 flex justify-center items-center">
          <div>
            <h3 className="text-4xl font-bold">Remote Voting</h3>
            <p className=" text-justify pt-3">
              Whether you are at home, in the office, or at a cafe, voters can
              vote anywhere and anytime using their own devices including their
              iPhone, Android device phone or mailed ballots. Along with this
              flexibility, voters can enjoy the peace of mind knowing that their
              vote is secure. We provide unique personal voting keys using the
              same security as most major banks!
            </p>
          </div>
        </div>
        <div className="bg-[#ECEEEF] text-[#00263A] p-9 flex justify-center items-center">
          <div>
            <h3 className="text-4xl font-bold">Build Brilliant Ballots</h3>
            <p className=" text-justify pt-3">
              You can set up ElectionBuddy for a wide variety of elections,
              votes, and polls. With our flexible voting methods, you can
              combine ballot types within an election to simplify the voting
              process for your voters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
