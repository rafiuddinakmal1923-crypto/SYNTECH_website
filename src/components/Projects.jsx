import React from "react";
import CarouselComp from "./CarouselComp";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const Projects = (props) => {
  let ref_id = props.propRef;
  let id = props.id;
  return (
    <>
      <section>
        <div
          id={id}
          ref={ref_id}
          className="flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-b from-black/100 via-[70%] to-[#5A1CB4]/100 to-[75%]"
        >
          <h1 className="flex justify-center items-center pb-3 text-[#e5e5e5] font-Poppins font-extrabold text-3xl md:text-4xl lg:text-7xl leading-tight tracking-tight">
            Our Projects
          </h1>
          <CarouselComp />
          <Button
            asChild
            className="mb-3 font-Poppins font-semibold bg-[#6750A4] leading-tight text-white hover:bg-[#7361a1] rounded-3xl"
          >
            <Link to="/projects" className="flex items-center gap-2 ">
              VIEW MORE
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Projects;
