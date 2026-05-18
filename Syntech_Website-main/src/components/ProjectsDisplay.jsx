import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";
import ProjectsBlock from "./ProjectsBlock";

import pic1 from "../assets/project-display-pictures/MOTOGP25.png";
import pic2 from "../assets/project-display-pictures/NexTechConference2.jpg";
import pic3 from "../assets/project-display-pictures/ImagineHack.png";
import pic4 from "../assets/project-display-pictures/MakerFair.jpg";

const ProjectsDisplay = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      numbering: "01",
      title: "CAVE 25/24",
      img: pic1,
      alt: "syntech CAVE booth",
      backgroundColor: "#443947",
      routeTo: "01",
    },
    {
      numbering: "02",
      title: "NexTech Conference 2025",
      img: pic2,
      alt: "syntech NexTech Conference",
      backgroundColor: "#29517C",
      routeTo: "02",
    },
    {
      numbering: "03",
      title: "Imagine Hack 2025",
      img: pic3,
      alt: "syntech Imagine Hack",
      backgroundColor: "#046163",
      routeTo: "03",
    },
    {
      numbering: "04",
      title: "Maker Fair 2025",
      img: pic4,
      alt: "syntech Maker Fair",
      backgroundColor: "#89AFDC",
      routeTo: "04",
    },
  ];

  const handleTap = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-screen min-h-screen">
      <Navbar
        activeSection="proj"
        onScrollTo={{
          home: () => navigate("/", { state: { scrollTo: "home" } }),
          about: () => navigate("/", { state: { scrollTo: "about" } }),
          org: () => navigate("/", { state: { scrollTo: "org" } }),
          event: () => navigate("/", { state: { scrollTo: "event" } }),
          project: () => navigate("/", { state: { scrollTo: "proj" } }),
          contact: () => navigate("/", { state: { scrollTo: "contact" } }),
        }}
      />

      {/* Desktop: Horizontal Layout */}
      <div className="hidden md:flex h-screen overflow-hidden">
        {projects.map((project) => (
          <ProjectsBlock
            key={project.numbering}
            numbering={project.numbering}
            title={project.title}
            img={project.img}
            alt={project.alt}
            backgroundColor={project.backgroundColor}
            routeTo={project.routeTo}
          />
        ))}
      </div>

      {/* Mobile: Vertical Accordion Layout - All fit on one screen */}
      <div className="md:hidden flex flex-col h-screen pt-12">
        {projects.map((project, index) => (
          <ProjectsBlock
            key={project.numbering}
            numbering={project.numbering}
            title={project.title}
            img={project.img}
            alt={project.alt}
            backgroundColor={project.backgroundColor}
            routeTo={project.routeTo}
            isExpanded={expandedIndex === index}
            onTap={() => handleTap(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsDisplay;
