import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { ChevronLeft, ChevronRight } from "lucide-react"; // for icons

import IMG1 from "../assets/carousel-pictures/NexTechConference.png";
import IMG2 from "../assets/carousel-pictures/ImagineHack.png";
import IMG3 from "../assets/carousel-pictures/CAVEbooth.png";
import IMG4 from "../assets/carousel-pictures/Present1.png";
import IMG5 from "../assets/carousel-pictures/Present2.png";

const CarouselComp = () => {
  const slides = [IMG1, IMG2, IMG3, IMG4, IMG5];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [emblaRef, setEmblaRef] = React.useState(null);

  React.useEffect(() => {
    if (!emblaRef) return;

    const onSelect = () => {
      setActiveIndex(emblaRef.selectedScrollSnap());
    };

    emblaRef.on("select", onSelect);
    onSelect();

    return () => {
      emblaRef.off("select", onSelect);
    };
  }, [emblaRef]);

  return (
    <div className="w-full flex flex-col justify-center items-center pb-6">
      <Carousel
        opts={{ loop: true, align: "center" }}
        //plugins={[Autoplay({ delay: 4000 })]}
        className="w-full max-w-5xl mt-8"
        setApi={setEmblaRef}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem
              key={index}
              className="basis-auto flex justify-center items-center"
            >
              <div className="w-[65vw] h-[30vh] md:h-[50vh] overflow-hidden rounded-3xl shadow-md ">
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => emblaRef?.scrollPrev()}
            className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black hover:bg-black/20 transition cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full border-2 border-black transition-all ${
                  activeIndex === index ? "bg-black" : "bg-transparent"
                }`}
                onClick={() => emblaRef?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => emblaRef?.scrollNext()}
            className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black hover:bg-black/20 transition cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
