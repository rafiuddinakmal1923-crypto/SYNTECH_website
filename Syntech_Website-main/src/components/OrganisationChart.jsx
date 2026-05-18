import OrgSlider from "./OrgSlider";


const OrganisationChart = (props) => {
  let ref_id = props.propRef;
  let id = props.id;

  return (
    <>
      <section>
        <div ref={ref_id} id={id} className="flex flex-col gap-y-4 pb-20 sm:gap-y-6 md:gap-y-10 pt-12 md:pt-[50px] lg:pt-[60px] bg-black md:min-h-screen">
          <div className="flex w-full h-auto text-white justify-center">
            <h1 className="font-extrabold text-xl md:text-4xl lg:text-7xl leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-400 to-green-300">
                SYNTECH{" "}
              </span>
              Organization's Lineup
            </h1>
          </div>
          {/*slider section*/}
          <div className="w-full flex justify-center mt-2 sm:mt-4 md:mt-0 md:flex-1 md:items-center">
            <OrgSlider />
          </div>
        </div>
      </section>
    </>
  );
};

export default OrganisationChart;
