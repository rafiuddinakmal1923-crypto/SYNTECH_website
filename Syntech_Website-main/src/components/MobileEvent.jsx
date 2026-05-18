import MobileEventCarousel from "./MobileEventCarousel";

const MobileEvent = (props) => {
  let ref_id = props.ref_id;
  let id = props.id;
  return (
    <>
      <section>
        <div
          ref={ref_id}
          id={id}
          className="pt-12 md:pt-[50px] lg:pt-[60px] bg-black"
        >
          <div className="flex w-full h-auto text-white justify-center">
            <h1 className="font-extrabold text-3xl leading-tight tracking-tight">
              Past{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#8456cf] to-[#8d63d2]">
                EVENTS
              </span>
            </h1>
          </div>
          <div className="text-white">
            <MobileEventCarousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileEvent;
