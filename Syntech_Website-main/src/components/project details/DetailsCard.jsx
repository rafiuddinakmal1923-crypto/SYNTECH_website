import { Separator } from "@radix-ui/react-separator";
import React from "react";

const DetailsCard = ({ event, backgroundColor }) => {
  return (
    <div
      className={`${backgroundColor} font-Poppins text-white p-6 rounded-xl max-w-5xl mx-auto`}
    >
      {/* Banner */}
      <div className="w-full mb-6">
        <img
          src={event.banner}
          alt={event.title}
          className="w-full rounded-lg"
        />
      </div>
      {/* Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4 text-sm text-white">
          <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
          <p>
            <span className="font-semibold">Organized By:</span>{" "}
            {event.organizedBy}
          </p>
          <p>
            <span className="font-semibold">Date:</span> {event.date}
          </p>
          <p>
            <span className="font-semibold">Venue:</span> {event.venue}
          </p>
          <Separator className="my-4 w-[30vw] h-0.5 bg-black" />
          <p className="text-gray-200 text-justify leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Poster */}
        <div className="flex flex-col gap-4">
          <img
            src={event.poster}
            alt="event poster"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
