import { Separator } from "@radix-ui/react-separator";
import React, { useState } from "react";

const BodyDetailsCard = ({
  body,
  backgroundColor,
  posterPosition = "right",
}) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div
      className={`${backgroundColor} text-white font-Poppins p-4 sm:p-6 rounded-xl max-w-5xl mx-auto`}
    >
      {/* Title + Desc */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">{body.title}</h2>
        <p className="font-semibold text-justify text-sm sm:text-base">
          {body.desc}
        </p>
      </div>
      <Separator className="my-4 w-full h-0.5 bg-black" />

      {/* Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div
          className={`space-y-4 text-sm sm:text-base text-white text-justify ${
            posterPosition === "left" ? "order-2" : "order-1"
          }`}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">{body.header}</h2>
          {body.desc2 && (
            <p>
              <span className="font-semibold">{body.desc2}</span>
            </p>
          )}

          {/* Handle bullet_title + bullet_desc or bullet */}
          {body.bullet_title && body.bullet_desc ? (
            <ul className="list-disc ml-6">
              {body.bullet_title.map((title, idx) => (
                <li key={idx} className="mb-4">
                  <span className="font-bold">{title}:</span>{" "}
                  {body.bullet_desc[idx]}
                </li>
              ))}
            </ul>
          ) : body.bullet ? (
            <ul className="list-disc ml-6">
              {body.bullet.map((point, idx) => (
                <li key={idx} className="mb-4">
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* Poster */}
        <div
          className={`flex flex-col gap-4 ${
            posterPosition === "left" ? "order-1" : "order-2"
          }`}
        >
          <img
            src={body.poster}
            alt="body poster"
            className="rounded-lg shadow-lg w-full max-w-[350px] h-auto max-h-[450px] object-cover mx-auto cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={() => setShowPopup(true)}
          />
        </div>
      </div>

      {/* Popup for expanded image */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowPopup(false)}
        >
          <div className="relative">
            <img
              src={body.poster}
              alt="body poster expanded"
              className="rounded-xl shadow-2xl w-[90vw] max-w-[600px] h-auto max-h-[90vh] object-contain"
            />
            <button
              className="absolute top-2 -right-10 bg-white text-black rounded-full px-3 py-1 font-bold shadow hover:bg-gray-200"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyDetailsCard;
