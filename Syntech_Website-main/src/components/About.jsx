import "../index.css";
import ScatteredSyntech from "./ScatteredSyntech";

const About = (props) => {
  let ref_id = props.propRef;
  let id = props.id;

  return (
    <>
      <section>
        <div
          id={id}
          ref={ref_id}
          className="w-screen h-auto px-4 mb-[10vh] md:px-[50px] pt-1 md:pt-[100px]"
        >
          <div className="w-full h-auto mt-[10vh] mb-[30vh] md:mt-0 md:mb-[70vh] flex items-center justify-center">
            <div className="transform scale-[0.35] sm:scale-50 md:scale-75 lg:scale-90 xl:scale-100">
              <ScatteredSyntech
                className="justify-center items-center"
                adjustLeft={-555}
                adjustTop={-300}
                adjustWidth={0}
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col-2 items-center-safe justify-around text-teal-500 font-Poppins text-5xl font-bold">
            <h2>MISSION</h2>
            <h2>VISION</h2>
          </div>
          <div className="hidden md:flex flex-col-2 items-center-safe justify-around text-center text-white font-Poppins text-m">
            <p className="px-[25vh] py-[5vh]">
              "To become a hub for sharing knowledge about technology & a source
              of technological creativity"
            </p>
            <p className="px-[25vh] py-[5vh]">
              "To foster learning & awareness of technology & it's application
              in today's world"
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Mission Section */}
            <div className="mt-8 mb-12">
              <div className="text-teal-500 font-Poppins text-4xl font-bold text-center mb-6">
                <h2>MISSION</h2>
              </div>
              <div className="text-center text-white font-Poppins text-auto">
                <p className="px-4 py-4">
                  "To become a hub for sharing knowledge about technology & a
                  source of technological creativity"
                </p>
              </div>
            </div>

            {/* Vision Section */}
            <div className="mt-8">
              <div className="text-teal-500 font-Poppins text-4xl font-bold text-center mb-6">
                <h2>VISION</h2>
              </div>
              <div className="text-center text-white font-Poppins text-auto">
                <p className="px-4 py-4">
                  "To foster learning & awareness of technology & it's
                  application in today's world"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
