import React, { useState } from "react";
import { Separator } from "@radix-ui/react-separator";
import DetailsCard from "./DetailsCard";
import projectDetails from "./project-details.json";

const NextTechDetails = () => {
  const details = projectDetails.NexTech2024;
  const [popupImg, setPopupImg] = useState(null);
  const closePopup = () => setPopupImg(null);

  return (
    <div className="min-h-screen bg-[#081120] py-6 flex items-center justify-center">
      <div className="bg-[#162C43] text-white p-4 sm:p-6 md:p-8 rounded-xl max-w-5xl mx-4 w-full">
        <DetailsCard event={details} backgroundColor={"bg-[#162C43]"} />

        <div className="bg-[#8FB1D6CC] w-full rounded-xl flex flex-col md:flex-row justify-between items-stretch gap-6 p-4 sm:p-6 mt-6 shadow-lg">
          <div className="flex-1 bg-transparent md:bg-white/5 rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-white">Objectives</h2>
            <ul className="list-decimal ml-6 space-y-3 text-white text-sm sm:text-base">
              <li>
                To cultivate technological awareness and digital creativity
                among students.
              </li>
              <li>
                To bridge the gap between academic learning and industry
                expectations.
              </li>
              <li>
                To encourage teamwork, critical thinking, and communication
                skills through practical challenges.
              </li>
            </ul>
          </div>

          <div className="hidden md:block w-px bg-white/20 mx-2 self-stretch" />

          <div className="flex-1 bg-transparent md:bg-white/5 rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Activities and Competitions
            </h2>
            <ul className="list-decimal ml-6 space-y-3 text-white text-sm sm:text-base">
              <li>
                Hackathon: Teams competed to develop innovative tech solutions
                within a limited timeframe.
              </li>
              <li>
                TechTalks: Industry experts and alumni shared insights on
                emerging technologies, career growth, and innovation.
              </li>
              <li>
                Gamification: Interactive games and quizzes were conducted to
                keep participants engaged and entertained.
              </li>
              <li>
                Digital Treasure Hunt: A campus-wide tech-enabled challenge
                testing speed, logic, and teamwork.
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-white text-lg sm:text-xl font-semibold mt-5 mb-3">
          Gallery
        </h3>
        <div className="flex flex-row flex-wrap gap-3">
          {details.pictures.map((slide, index) => (
            <button
              key={index}
              onClick={() => setPopupImg(slide)}
              className="overflow-hidden rounded-xl shadow-md w-[48%] sm:w-[30%] md:w-[22%] focus:outline-none"
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-36 sm:h-44 md:h-48 object-cover"
              />
            </button>
          ))}
        </div>

        {popupImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={closePopup}
          >
            <div className="relative max-w-[95vw] max-h-[95vh]">
              <img
                src={popupImg}
                alt="expanded"
                className="w-full h-auto max-h-[90vh] rounded-xl object-contain"
              />
              <button
                onClick={closePopup}
                className="absolute -top-3 -right-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NextTechDetails;
