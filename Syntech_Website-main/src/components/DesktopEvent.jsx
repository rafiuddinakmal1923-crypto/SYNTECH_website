import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data_source from "./PastEvent.js";
import ImageCarousel from "./ImageCarousel";

gsap.registerPlugin(ScrollTrigger);

const DesktopEvent = (props) => {
  let ref_id = props.ref_id;
  let id = props.id;

  const containerRef = useRef(null);
  const progressBarRef = useRef(null);
  const textContainerRef = useRef(null);

  const [activeSection, setActiveSection] = useState(0);
  const activeRef = useRef(0); //mirror state in a ref to let react keep up with rendering
  useEffect(() => {
    activeRef.current = activeSection;
  }, [activeSection]);

  const sections = data_source.map((event) => ({
    //maps the datasource into sections becomes array
    id: event.id,
    title: event.name,
    description: event.description,
    images: event.images,
  }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const progressBar = progressBarRef.current;
      const textContainer = textContainerRef.current;
      if (!container || !progressBar || !textContainer) return;

      gsap.set(textContainer, { y: 0 });
      const total = sections.length;

      // kill any prior trigger with same id (hot-reload safety)
      ScrollTrigger.getById("org-main")?.kill();
      //scroll trigger is to track the panels scrolled by calculating how many viewport worths of pixel have been scrolled, always rounds to an integer for indexing section[] array
      ScrollTrigger.create({
        id: "org-main",
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          console.log(self.progress);
          const p = self.progress;
          const panels = p * (total - 1); // fractional index
          const y = -panels * window.innerHeight; // slide text stack
          gsap.set(textContainer, { y });
          gsap.set(progressBar, { height: `${p * 100}%` });

          // Swap when the text panel is nearest to center
          const nearest = Math.max(0, Math.min(total - 1, Math.round(panels)));

          // compare against ref to avoid stale closure
          if (nearest !== activeRef.current) {
            //only update the active section when the nearest is not the same as the active section
            setActiveSection(nearest);
          }
        },
      });

      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("load", onResize);
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("load", onResize);
        window.removeEventListener("resize", onResize);
        ScrollTrigger.getById("org-main")?.kill();
        Array.from(textContainer.children).forEach((_, idx) =>
          ScrollTrigger.getById(`org-card-${idx}`)?.kill()
        );
      };
    }, containerRef);

    return () => ctx.revert();
    // do NOT depend on activeSection to avoid re-creating the trigger every scroll
  }, [sections.length]);

  return (
    <section>
      <div
        ref={ref_id}
        id={id}
        className="pt-12 md:pt-[50px] lg:pt-[60px] bg-black"
      >
        <div className="flex w-full h-auto text-white justify-center">
          <h1 className="font-extrabold text-3xl md:text-4xl lg:text-7xl leading-tight tracking-tight">
            Past{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#8456cf] to-[#8d63d2]">
              EVENTS
            </span>
          </h1>
        </div>

        <div
          ref={containerRef}
          className={`relative bg-black text-white`}
          style={{ minHeight: `${sections.length * 100}vh` }}
        >
          <div className="sticky top-0 h-screen flex items-stretch">
            {/* LEFT: Progress bar */}
            <div className="w-16 flex items-center justify-center bg-black">
              <div className="relative w-1 h-2/5 bg-white/15 rounded-full overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="w-full bg-gradient-to-t from-[#787CFE] via-[#4854CE] to-[#172D9D] rounded-full"
                  style={{ height: "0%" }}
                />
              </div>
            </div>

            {/* MIDDLE: Text panels */}
            <div className="flex-1 overflow-hidden">
              <div
                ref={textContainerRef}
                className="relative will-change-transform"
                style={{ height: `${sections.length * 100}vh` }}
              >
                {sections.map((section) => (
                  <div
                    key={section.id}
                    className="h-screen flex flex-col justify-center px-10 lg:px-16"
                  >
                    <div className="max-w-2xl space-y-5">
                      <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                        {section.title}
                      </h2>
                      <p className="text-xl leading-relaxed text-white/80">
                        {section.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/*right most panel*/}
            <div className="w-1/2 bg-black flex items-center justify-center relative overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
                <ImageCarousel images={sections[activeSection].images} />
                {/*when activeSection ref changes, it passes in an array into the carousel component, then carousel component process and renders it*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopEvent;
