import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

import "../index.css";
import linkedIn from "../assets/icons8-linkedin/icons8-linkedin.svg";
import instagram from "../assets/icons8-instagram/icons8-instagram-48.svg";
const syntech_vid = "https://res.cloudinary.com/dxgspijmf/video/upload/q_30/v1779072885/Syntech_Vid_xuztik.mp4";

const Home = (props) => {
  let ref_id = props.propRef;
  let id = props.id;

  const linkedInRef = useRef(null);
  const instaRef = useRef(null);

  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    const addHoverAnimation = (el) => {
      const underline = el.querySelector(".underline-span");

      el.addEventListener("mouseenter", () => {
        gsap.to(underline, {
          width: "100%",
          duration: 0.2,
          ease: "power2.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(underline, { width: "0%", duration: 0.2, ease: "power2.in" });
      });
    };

    //check if the component has been mounted
    if (linkedInRef.current) addHoverAnimation(linkedInRef.current);
    if (instaRef.current) addHoverAnimation(instaRef.current);
  }, []);

  const handleClick = (url) => {
    window.open(url); // open in new tab
  };

  const videoRef = useRef(null);

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        video.muted = false; // unmute when visible
      } else {
        video.muted = true; // mute when scrolled away
      }
    },
    { threshold: 0.3 } // triggers when 30% of video is visible
  );

  observer.observe(video);
  return () => observer.disconnect();
}, []);

  useEffect(() => {
    const getDeviceWidth = () => {
      setDeviceWidth(window.innerWidth);
      console.log(`Device width: ${deviceWidth}`);
    };
    getDeviceWidth(); //call the function when mounted
    window.addEventListener("resize", getDeviceWidth);
    return () => {
      removeEventListener("resize", getDeviceWidth);
    };
  }, []);
  return (
    <>
      <section>
        <div
          id={id}
          ref={ref_id}
          className="relative flex flex-col md:flex-row justify-between w-screen h-auto md:h-screen pt-12 pb-12 md:pt-[50px] lg:pt-[60px] md:px-[50px] text-white font-Poppins font-bold"
        >
          {/* Left column */}
          <div className="flex flex-col w-full md:w-1/2 px-6 z-[999]">
            <h1 className="mt-12 md:mt-[18vh] text-5xl">Welcome to</h1>
            <h1 className="mb-4 text-6xl md:text-8xl">SYNTECH</h1>

            <div className="my-2 md:my-4 flex flex-row w-full h-auto gap-3 md:gap-4">
              {/* LinkedIn */}
              <div
                ref={linkedInRef}
                className="flex flex-row w-auto justify-center items-center gap-2 md:gap-3 hover:cursor-pointer relative"
                onClick={() => {
                  handleClick(
                    "https://www.linkedin.com/company/syntech-organization/"
                  );
                }}
              >
                <img src={linkedIn} className="w-5 h-5 md:w-10 md:h-10" />
                <a className="text-xs md:text-[15px] text-gray-400 font-Poppins font-light relative">
                  SYNTECH's LinkedIn
                  <span className="underline-span absolute left-0 -bottom-1 h-[2px] bg-gray-400 block w-0"></span>
                </a>
              </div>

              {/* Instagram */}
              <div
                ref={instaRef}
                className="flex flex-row w-auto justify-center items-center gap-2 md:gap-3 hover:cursor-pointer relative"
                onClick={() => {
                  handleClick("https://www.instagram.com/utpsyntech/");
                }}
              >
                <img src={instagram} className="w-5 h-5 md:w-10 md:h-10" />
                <a className="text-xs md:text-[15px] text-gray-400 font-Poppins font-light relative">
                  SYNTECH's Instagram
                  <span className="underline-span absolute left-0 -bottom-1 h-[2px] bg-gray-400 block w-0"></span>
                </a>
              </div>
            </div>

            <h2 className="text-base md:text-lg font-Poppins font-light">
              First Technology Club in UTP
            </h2>
            <h2 className="text-base md:text-lg font-Poppins font-light">
              “Tech Hub That Trains Youth To Innovate Through Technology
              Creativity”
            </h2>
          </div>
          {/* Right column — Responsive video */}
          {deviceWidth <= 800 ? (
            <div>
              {/*frosted glass to cover the video, overlay for the text contents for home.jsx*/}
              <div className="w-full h-full absolute top-0">
                <div className="bg-[rgb(0,0,0,0.8)] h-full w-full absolute"></div>
                <video
                  className="h-full w-full object-cover"
                  src={syntech_vid}
                  autoPlay
                  muted
                  loop
                  preload = "auto"
                  playsInline
                />
              </div>
            </div>
          ) : (
            <div className="w-full md:w-1/2 mt-[10px] md:mt-[10vh] flex items-start justify-center">
              <div className="relative w-full max-w-[900px] aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  ref={videoRef}
                  src={syntech_vid}
                  autoPlay
                  muted        // start muted (browser requires this for autoplay)
                  loop
                  playsInline
                  preload="metadata"
                  // poster="/path/to/optional-poster.jpg"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
