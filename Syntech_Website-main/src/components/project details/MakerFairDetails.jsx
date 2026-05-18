import DetailsCard from "./DetailsCard";
import projectDetails from "./project-details.json";

const MakerFairDetails = () => {
  const details = projectDetails.MakerFair2025;
  return (
    <div className="min-h-screen bg-[#081120] py-6 flex items-start justify-center">
      <div className="bg-[#123231] text-white p-4 sm:p-6 md:p-8 rounded-xl max-w-6xl w-full mx-4 md:mx-auto">
        <DetailsCard event={details} backgroundColor={"bg-[#123231]"} />

        {/* Problem / Solution */}
        <div className="flex flex-col md:flex-row gap-8 mt-6 items-start bg-[#25584D] rounded-xl p-4 md:p-6">
          {/* Left column */}
          <div className="flex-1">
            <h2 className="font-bold text-lg md:text-xl mb-4">The Problem</h2>
            <ul className="space-y-4 list-disc ml-5 text-sm md:text-base">
              <li>
                {" "}
                Inefficient waste collection leads to overflowing bins and
                serious health and environmental hazards.
              </li>
              <li>
                {" "}
                On average, 2,200 tons of litter are generated daily in
                Malaysia.
              </li>
              <li>
                {" "}
                Each person produces 70g of trash per day (25.49 kg annually).
              </li>
              <li> Current systems lack automation and real-time data.</li>
            </ul>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-white/30 mx-3 self-stretch" />

          {/* Right column */}
          <div className="flex-1">
            <h2 className="font-bold text-lg md:text-xl mb-4">
              Our Solution: SENTINEL
            </h2>
            <ul className="space-y-4 list-disc ml-5 text-sm md:text-base">
              <li>
                SENTINEL stands for Smart Environmental Tracking and Intelligent
                Notification for Efficient Litter.
              </li>
              <li>A small device installed in public waste bins.</li>
              <li>
                Tracks:
                <ul className="list-disc ml-5 mt-2 space-y-2">
                  <li>Waste levels</li>
                  <li>Bin locations</li>
                  <li>Collection status</li>
                </ul>
              </li>
              <li>Sends real-time data to a central system.</li>
            </ul>

            <h2 className="font-bold text-lg md:text-xl mt-6 mb-3">Impact</h2>
            <ul className="space-y-2 list-disc ml-5 text-sm md:text-base">
              <li>Cleaner Environments</li>
              <li>Reduced Pollution</li>
              <li>Healthier Communities</li>
              <li>Smarter Waste Management</li>
            </ul>
          </div>
        </div>

        {/* Main image */}
        <div className="mt-6">
          <img
            src="/project4_pics/pyrosense.png"
            className="rounded-xl w-full h-44 sm:h-56 md:h-72 lg:h-96 object-cover"
            alt="PyroSense"
          />
        </div>

        {/* How it works */}
        <div className="bg-[#071C1E] rounded-xl text-center p-4 sm:p-6 mt-6 font-Poppins">
          <h2 className="font-semibold text-2xl md:text-3xl">How It Works</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-sm md:text-base">
            <p className="bg-[#072422] rounded-md p-3">
              1. Monitoring - Detects bin fill levels and sends alerts.
            </p>
            <p className="bg-[#072422] rounded-md p-3">
              2. Data Transmission - Updates the central server instantly.
            </p>
            <p className="bg-[#072422] rounded-md p-3">
              3. AI Optimization - Uses AI to plan optimal collection routes.
            </p>
            <p className="bg-[#072422] rounded-md p-3">
              4. Report Generation - Produces real-time reports for analysis and
              decision-making.
            </p>
            <p className="bg-[#072422] rounded-md p-3">
              5. Reset & Dispatch - Resets after collection and continues
              tracking.
            </p>
          </div>
        </div>

        {/* Pictures gallery - horizontal, responsive */}
        <div className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {details.pictures.map((slide, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md w-full"
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-36 sm:h-44 md:h-48 lg:h-56 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Runner-up section */}
        <div className="bg-[#071C1E] rounded-xl text-left p-4 sm:p-6 mt-6 font-Poppins flex flex-col md:flex-row gap-4 items-center">
          <img
            src={details.runnerupPhoto}
            alt="Runner Up"
            className="w-full md:w-56 lg:w-72 h-auto rounded-xl object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              1st Runner Up
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              PyroSense AI
            </h3>
            <p className="text-sm md:text-base text-justify">
              We are proud to announce that SYNTECH team secured the 1st
              Runner-Up position in the PETROBOTS Hackathon with our project
              "PyroSense AI". The team’s dedication, innovation, and
              collaboration led to this remarkable achievement.
            </p>
          </div>
        </div>

        {/* End image */}
        <div className="mt-6">
          <img
            src={details.endPhoto}
            className="rounded-xl w-full h-44 sm:h-56 md:h-72 object-cover"
            alt="Event end"
          />
        </div>
      </div>
    </div>
  );
};

export default MakerFairDetails;
