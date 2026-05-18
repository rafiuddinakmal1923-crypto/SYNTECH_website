import React, { useState } from "react";
import DetailsCard from "./DetailsCard";
import projectDetails from "./project-details.json";

const ImagineHackDetails = () => {
  const details = projectDetails.ImagineHack2024;
  const [popupImg, setPopupImg] = useState(null);
  const closePopup = () => setPopupImg(null);

  return (
    <div className="min-h-screen bg-[#081120] py-6 flex items-center justify-center font-Poppins">
      <div className="bg-[#046163] text-white p-4 sm:p-6 md:p-8 rounded-xl max-w-5xl mx-4 w-full">
        <DetailsCard event={details} backgroundColor={"bg-[#046163]"} />
        <img
          src={details.slide}
          className="rounded-xl w-full h-44 sm:h-56 md:h-72 object-cover mt-4"
          alt="slide"
        />

        <div className="max-w-5xl mx-auto p-4 sm:p-6 text-gray-300">
          <h2 className="text-2xl font-semibold mb-4">
            ImagineHack 2024 Highlights
          </h2>
          <div className="text-sm sm:text-base space-y-3">
            <p>
              As part of the event, our team participated in exclusive workshops
              and sessions:
            </p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>
                Introduction to RAG with Google Gemini by Dr. Poo Kuan Hoong
              </li>
              <li>Pitch Deck Strategy by Daren Tan</li>
              <li>Panel Discussion by experts from EY and Accenture</li>
            </ol>
            <p>
              We also had the opportunity to showcase Pigeon alongside other
              student startup projects from Taylor’s University.
            </p>
          </div>
        </div>

        <h3 className="text-white text-lg sm:text-xl font-semibold mt-4 mb-3">
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

export default ImagineHackDetails;
