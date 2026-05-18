import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data_source from "./PastEvent";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";

const MobileEventCarousel = () => {
  const reactSlickArrow = useRef(null);
  const [index, setIndex] = useState(0);
  //map data source
  const sections = data_source.map((event) => ({
    //maps the datasource into sections becomes array
    id: event.id,
    title: event.name,
    description: event.description,
    images: event.images,
  }));

  //set index of the last slide in this case which is 5
  const last = sections.length - 1;

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (i) => setIndex(i), //refer react-slick SlideChangeHook doc
    speed: 300, //slide scroll spped
    arrows: false, //to remove white bar
  };

  const handleClick = (data) => {
    if (data == "prev") {
      reactSlickArrow.current.slickPrev();
    } else {
      reactSlickArrow.current.slickNext();
    }
  };
  return (
    <>
      <section className="w-auto">
        <Slider ref={reactSlickArrow} {...settings}>
          {sections.map((data) => (
            <div key={data.id} className="flex w-full h-auto items-center justify-center mt-10">
              <div className="flex flex-col w-80 h-auto bg-[#191919] rounded-2xl mx-auto pt-3">
                <div className="px-3">
                  <div className="h-auto w-auto text-xl font-medium mb-1">
                    {data.title}
                  </div>
                  <div className="h-auto w-auto text-[16px] font-Poppins font-light">
                    {data.description}
                  </div>
                </div>
                <div className="h-auto w-full mt-8">
                  <img src={data.images[0]} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex flex-row w-full h-auto justify-between mt-5 pb-5 px-30">
          <button
            onClick={() => handleClick("prev")}
            disabled={index === 0}
            className={`${
              index === 0
                ? "disabled:opacity-20 flex text-white border-solid w-10 h-10 border-gray-600 border-2 rounded-4xl text-wrap items-center justify-center transition-colors duration-150 ease-out active:border-white [touch-action:manipulation] pointer-events-none"
                : "flex text-white border-solid w-10 h-10 border-gray-600 border-2 rounded-4xl text-wrap items-center justify-center transition-colors duration-150 ease-out active:border-white [touch-action:manipulation]"
            }`}
          >
            <ArrowLeft />
          </button>
          <div className="flex justify-center items-center">
            {index + 1} / {sections.length}
          </div>
          <button
            onClick={() => handleClick("next")}
            disabled={index === last}
            className={`${
              index === last
                ? "disabled:opacity-20 flex text-white border-solid w-10 h-10 border-gray-600 border-2 rounded-4xl text-wrap items-center justify-center transition-colors duration-150 ease-out active:border-white [touch-action:manipulation] pointer-events-none"
                : "flex text-white border-solid w-10 h-10 border-gray-600 border-2 rounded-4xl text-wrap items-center justify-center transition-colors duration-150 ease-out active:border-white [touch-action:manipulation]"
            }`}
          >
            <ArrowRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default MobileEventCarousel;
