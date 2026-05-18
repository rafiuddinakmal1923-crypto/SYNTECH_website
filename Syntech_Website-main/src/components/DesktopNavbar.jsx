import { useEffect, useRef, useState } from "react";
import syntech_logo from "../assets/syntech-logo 2.png";

const DesktopNavbar = ({ onScrollTo, activeSection }) => {
  const linkBase =
    "relative z-10 px-3 py-2 rounded-md text-[rgba(0,0,0,0.65)] transition-colors duration-200 cursor-pointer";
  const linkHover = "hover:text-black";

  // Refs to each link so we can measure position/width
  const refs = {
    about: useRef(null),
    org: useRef(null),
    event: useRef(null),
    proj: useRef(null),
    contact: useRef(null),
  };

  // Animated indicator style
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const key =
      activeSection === "home" ||
      activeSection === "about" ||
      activeSection === "org" ||
      activeSection === "event" ||
      activeSection === "proj" ||
      activeSection === "contact"
        ? activeSection
        : "about"; // fallback if home is active

    if (activeSection == "home") {
      console.log(`current active section is ${activeSection}`);
      setIndicator({ left: 0, width: 0, opacity: 0 });
    }
    const el = refs[key]?.current;
    if (!el) return;

    const { offsetLeft, offsetWidth } = el;
    if (activeSection == "contact") {
      console.log(`current active section ${activeSection}`);
      setIndicator({ left: offsetLeft, width: offsetWidth, opacity: 0 });
    } else {
      setIndicator({ left: offsetLeft, width: offsetWidth, opacity: 1 });
    }
  }, [activeSection]);

  // Keep in place on resize
  useEffect(() => {
    const handle = () => {
      const key =
        activeSection === "about" ||
        activeSection === "org" ||
        activeSection === "event" ||
        activeSection === "proj" ||
        activeSection === "contact"
          ? activeSection
          : "about"; //checks if activeSection is the above condition, if not put the grey container at default which is about
      const el = refs[key]?.current;
      if (!el) return;
      const { offsetLeft, offsetWidth } = el;
      setIndicator((prev) => ({
        ...prev,
        left: offsetLeft,
        width: offsetWidth,
      }));
    };
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [activeSection]);
  return (
    <>
      <header
        className="
            bg-[rgba(255,255,255,0.7)]
            fixed top-0 z-[99999] w-full backdrop-blur-sm shadow-md border-none
            h-12 md:h-[50px] lg:h-[60px]
            px-4 md:px-6 lg:px-[50px]
            flex items-center justify-between
          "
      >
        {/* Left brand */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            className="h-7 w-7 md:h-9 md:w-9 lg:h-[60px] lg:w-[60px] object-cover"
            src={syntech_logo}
            alt="SYNTECH"
          />
          <a
            onClick={onScrollTo.home}
            className="
                font-Inter tracking-tighter font-[600] cursor-pointer
                text-lg md:text-xl lg:text-3xl
              "
          >
            SYNTECH
          </a>
        </div>

        {/* Right nav */}
        <div className="flex items-center h-full">
          <nav>
            <ul
              className="
                  relative flex items-center font-Inter font-[500]
                  gap-x-3 md:gap-x-4 lg:gap-x-[20px]
                  text-sm md:text-base lg:text-lg
                "
            >
              {/* Sliding pill (hidden on small) */}
              <span
                className="hidden sm:block absolute top-1/2 -translate-y-1/2
                            h-7 md:h-8 lg:h-9 rounded-md bg-black/10
                            transition-all duration-300 ease-out"
                style={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: indicator.opacity,
                }}
              />

              {/* Hide all except contact on small */}
              <li className="hidden sm:block">
                <a
                  ref={refs.about}
                  onClick={onScrollTo.about}
                  className={`${linkBase} ${linkHover} ${
                    activeSection === "about" ? "text-black" : ""
                  }`}
                >
                  About
                </a>
              </li>
              <li className="hidden sm:block">
                <a
                  ref={refs.org}
                  onClick={onScrollTo.org}
                  className={`${linkBase} ${linkHover} ${
                    activeSection === "org" ? "text-black" : ""
                  }`}
                >
                  Organisation Lineup
                </a>
              </li>
              <li className="hidden sm:block">
                <a
                  ref={refs.event}
                  onClick={onScrollTo.event}
                  className={`${linkBase} ${linkHover} ${
                    activeSection === "event" ? "text-black" : ""
                  }`}
                >
                  Events
                </a>
              </li>
              <li className="hidden sm:block">
                <a
                  ref={refs.proj}
                  onClick={onScrollTo.project}
                  className={`${linkBase} ${linkHover} ${
                    activeSection === "proj" ? "text-black" : ""
                  }`}
                >
                  Projects
                </a>
              </li>

              {/* Always visible Contact */}
              <li>
                <a
                  ref={refs.contact}
                  onClick={onScrollTo.contact}
                  className="
                      relative z-10 rounded-lg px-3 py-1.5 md:py-2
                      bg-[#35A392] hover:bg-[#2A8375]
                      text-white transition-colors duration-200 cursor-pointer
                      text-sm md:text-base lg:text-lg
                    "
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default DesktopNavbar;
