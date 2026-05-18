import React from "react";
import linkedin from "../assets/icons8-linkedin/linkedin.png";

const Credit = () => {
  const designers = [
    {
      id: 1,
      name: "Mohammad Sultan Albany Bin Husnul Afif",
      linkedin: "https://www.linkedin.com/in/sultanalbany21/",
    },
    {
      id: 2,
      name: "Sara Eudora Binti Said",
      linkedin: "https://www.linkedin.com/in/sara-eudora-05446b199/",
    },
    {
      id: 3,
      name: "Muhammad Aieman Hakimi Bin Mohd Zainuddin",
      linkedin: "https://www.linkedin.com/in/aiemanhakimi/",
    },
  ];

  const developer = [
    {
      id: 1,
      name: "Ikhwan Hafizi Bin Muhamad Saifuldin",
      linkedin:
        "https://www.linkedin.com/in/ikhwan-hafizi-bin-muhamad-saifuldin-89055733a/",
    },
    {
      id: 2,
      name: "Muhammad Aiman Bin Ahmad Hazimin",
      linkedin:
        "https://www.linkedin.com/in/muhammad-aiman-ahmad-hazimin-335655351/",
    },
    {
      id: 3,
      name: "Andrew Tan Joe Wen",
      linkedin: "https://www.linkedin.com/in/andrew-tan-3131842a4", // also missing https:// earlier
    },
  ];

  const handleOnClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-auto flex flex-col h-auto px-1 md:px-2 py-1 md:py-2 bg-[#000000] justify-center items-center">
      <div className="flex flex-row h-auto w-full mt-2">
        <div className="text-[8px] md:text-[15px] text-white font-Poppins md:w-[150px] pt-[8px] min-w-[70px]">
          Designed By:
        </div>
        <div>
          {designers.map((person) => (
            <div
              onClick={() => handleOnClick(person.linkedin)}
              key={person.id}
              className="w-full h-auto flex flex-row my-1 md:my-2 hover:cursor-pointer"
            >
              <div className="flex justify-center items-center">
                <img
                  src={linkedin}
                  className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]"
                />
              </div>
              <div className="text-white font-Poppins font-extralight text-[8px] md:text-[15px] mx-2 md:mx-3">
                {" "}
                {/*removed w-[500px]*/}
                {person.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row h-auto w-full mt-2">
        <div className="text-[8px] md:text-[15px] text-white font-Poppins md:w-[150px] pt-[8px] min-w-[70px]">
          Developed By:
        </div>
        <div>
          {developer.map((person) => (
            <div
              onClick={() => handleOnClick(person.linkedin)}
              key={person.id}
              className="w-full h-auto flex flex-row my-1 md:my-2 hover:cursor-pointer"
            >
              <div className="flex justify-center items-center">
                <img
                  src={linkedin}
                  className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]"
                />
              </div>
              <div className="text-white font-Poppins font-extralight text-[8px] md:text-[15px] mx-2 md:mx-3">
                {" "}
                {/*removed w-[400px]*/}
                {person.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Credit;
