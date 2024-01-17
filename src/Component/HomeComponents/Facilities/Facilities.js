const Facilities = () => {
  return (
    <div className="my-10">
      <div className="grid lg:grid-cols-2">
        <div className="bg-[#00263A] text-white">
          <h3>Remote Voting</h3>
          <p>
            Whether you are at home, in the office, or at a cafe, voters can
            vote anywhere and anytime using their own devices including their
            iPhone, Android device phone or mailed ballots. Along with this
            flexibility, voters can enjoy the peace of mind knowing that their
            vote is secure. We provide unique personal voting keys using the
            same security as most major banks!
          </p>
        </div>
        <div className="bg-[#ECEEEF] text-[#00263A]">
          <h3>Build Brilliant Ballots</h3>
          <p>
            You can set up ElectionBuddy for a wide variety of elections, votes,
            and polls. With our flexible voting methods, you can combine ballot
            types within an election to simplify the voting process for your
            voters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
