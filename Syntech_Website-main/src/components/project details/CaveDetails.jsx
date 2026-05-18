import React, { useState } from "react";
import BodyDetailsCard from "./BodyDetailsCard";
import DetailsCard from "./DetailsCard";
import projectDetails from "./project-details.json";

const CaveDetails = () => {
  const [popupImg, setPopupImg] = useState(null);
  const closePopup = () => setPopupImg(null);

  const renderGallery = (pictures) => (
    <>
      <div className="mt-3">
        <h3 className="text-center text-xl sm:text-2xl font-semibold text-white mb-4">
          A Glimpse
        </h3>
        <div className="flex flex-row flex-wrap gap-3 justify-center">
          {pictures.map((slide, index) => (
            <button
              key={index}
              onClick={() => setPopupImg(slide)}
              className="overflow-hidden rounded-xl shadow-md w-[48%] sm:w-[30%] md:w-[22%] lg:w-[18%] focus:outline-none cursor-pointer"
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-40 sm:h-44 md:h-48 lg:h-56 object-cover"
              />
            </button>
          ))}
        </div>
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
              className="absolute -top-5 -right-5 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-[#081120] flex items-center justify-center py-6">
      <div className="max-w-5xl mx-4 w-full flex flex-col gap-6">
        {/* CAVE 25 */}
        <DetailsCard
          event={projectDetails.CAVE2025}
          backgroundColor={"bg-[#045665]"}
        />
        <BodyDetailsCard
          body={projectDetails.CAVE2025.body1}
          backgroundColor={"bg-[#00363E]"}
        />
        <BodyDetailsCard
          body={projectDetails.CAVE2025.body2}
          backgroundColor={"bg-[#045665]"}
          posterPosition="left"
        />
        <BodyDetailsCard
          body={projectDetails.CAVE2025.body3}
          backgroundColor={"bg-[#00363E]"}
        />
        {renderGallery(projectDetails.CAVE2025.pictures)}

        {/* CAVE 24 */}
        <DetailsCard
          event={projectDetails.CAVE2024}
          backgroundColor={"bg-[#5E447B]"}
        />
        <BodyDetailsCard
          body={projectDetails.CAVE2024.body1}
          backgroundColor={"bg-[#9F6DA9]"}
          posterPosition="right"
        />
        <BodyDetailsCard
          body={projectDetails.CAVE2024.body2}
          backgroundColor={"bg-[#5E447B]"}
          posterPosition="left"
        />
        <BodyDetailsCard
          body={projectDetails.CAVE2024.body3}
          backgroundColor={"bg-[#9F6DA9]"}
          posterPosition="right"
        />
        <BodyDetailsCard
          body={projectDetails.CAVE2024.body4}
          backgroundColor={"bg-[#5E447B]"}
          posterPosition="left"
        />
        {renderGallery(projectDetails.CAVE2024.pictures)}
      </div>
    </div>
  );
};

export default CaveDetails;
