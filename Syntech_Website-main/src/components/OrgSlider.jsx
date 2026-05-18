import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import president from "../assets/org_chart/president.png";
import secretary from "../assets/org_chart/secretaries.png";
import treasurer from "../assets/org_chart/treasurer.png";
import vice_president from "../assets/org_chart/vice_president.png";
import event_management from "../assets/org_chart/event_management.png";
import logistics from "../assets/org_chart/logistics.png";
import medpro from "../assets/org_chart/medpro.png";
import technical from "../assets/org_chart/technical.png";
import advisor from "../assets/org_chart/advisor.png";
import public_relations from "../assets/org_chart/public_relations.png";

const OrgSlider = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const [numOfSlides, setNumOfSlides] = useState(3);
  const [arrow, setArrow] = useState(true);

  // NEW: which card is “open” (shows overlay) on touch
  const [openId, setOpenId] = useState(null);

  // Desktop can hover; most phones can’t
  const canHover =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(hover: hover)").matches;

  useEffect(() => {
    const getDeviceWidth = () => {
      setDeviceWidth(window.innerWidth);
      console.log(`Device width: ${deviceWidth}`);
    };
    getDeviceWidth(); //call the function when mounted
    if (deviceWidth <= 800) {
      setNumOfSlides(1);
      setArrow(false);
    }
  }, []);

  const sections = [
    {
      id: 1,
      title: "President",
      image: president,
      email: { "Tham Qi Lien": "qi_24005432@utp.edu.my" },
    },
    {
      id: 2,
      title: "Vice President",
      image: vice_president,
      email: { "Lewin Khoo Zhen Xiong" : "lewin_24004552@utp.edu.my" },
    },
    {
      id: 3,
      title: "Secretary",
      image: secretary,
      email: {
        "Ahmad Ammir Harees": "ahmad_24005785@utp.edu.my",
        "Qurratu": "qurratu_24006080@utp.edu.my",
      },
    },
    {
      id: 4,
      title: "Treasurer",
      image: treasurer,
      email: { "Kelvin Law Yun Hong": "kelvin_24006009@utp.edu.my" },
    },
    {
      id: 5,
      title: "Technical",
      image: technical,
      email: {
        "Muhammad Akmal": "muhammad_24006013@utp.edu.my",
        "Va liant Chen": "va_24006012@utp.edu.my",
      },
    },
    {
      id: 6,
      title: "Event Management",
      image: event_management,
      email: {
        "Nicholas Ling Bing Zhi": "nicholas_24006107@utp.edu.my",
        "Sobena Ramachanthirarao": "sobena_22010905@utp.edu.my",
      },
    },
    {
      id: 7,
      title: "Med Pro",
      image: medpro,
      email: {
        "Nurliyana Farhanah": "nurliyana_24006257@utp.edu.my",
        "Muhammad Faris Najmi": "muhammad_22011981@utp.edu.my",
      },
    },
    {
      id: 8,
      title: "Logistics",
      image: logistics,
      email: {
        "Nor Fatin Zulaikha": "nor_22011385@utp.edu.my",
        "Siti Nur Amalina": "siti_24006421@utp.edu.my",
      },
    },
    {
      id: 9,
      title: "Public Relations",
      image: public_relations,
      email: {
        "Exin Tok": "exin_24005904@utp.edu.my",
        "Nur Zahidah Husna": "nur_24006180@utp.edu.my",
      },
    },
    {
      id: 10,
      title: "Advisor",
      image: advisor,
      email: {
        "Dr Ahmad Sobri": "sobri.hashim@utp.edu.my",
      },
    },
  ];

  const Arrow = ({ onClick, dir }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 bg-white/90 duration-200 hover:bg-zinc-400 shadow cursor-pointer
                  rounded-full p-2 backdrop-blur border border-black/10 transition-colors
                  ${
                    dir === "next"
                      ? "lg:right-[-20px] xl:right-[-60px]"
                      : "lg:left-[-20px] xl:left-[-60px]"
                  }`}
      type="button"
    >
      {dir === "next" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M8 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 5l-7 7 7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );

  const settings = {
    mobileFirst: true,
    infinite: true,
    slidesToShow: numOfSlides,
    slidesToScroll: 1,
    arrows: arrow,
    dots: true,
    lazyLoad: false,
    touchThreshold: 8, // helps distinguish tap vs drag
    beforeChange: () => setOpenId(null), // close overlay when swiping slides
    nextArrow: <Arrow dir="next" />,
    prevArrow: <Arrow dir="prev" />,
    dotsClass: "slick-dots !bottom-[-40px]",
    responsive: [
      {
        breakpoint: 640, // ≥640px (sm)
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // ≥1024px (lg)
        settings: {
          slidesToShow: 3,
          arrows: false,
          centerMode: false,
        },
      },
    ],
  };

  // Inline "email + copy" item (tooltip at the bottom)
  const EmailItem = ({ name, emailAddr }) => {
    const [label, setLabel] = useState("Copy");
    const [hovered, setHovered] = useState(false);

    const handleCopy = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      try {
        await navigator.clipboard.writeText(emailAddr);
        setLabel("Email Copied!");
        setTimeout(() => setLabel("Copy"), 1200);
      } catch {
        setLabel("Failed");
        setTimeout(() => setLabel("Copy"), 1200);
      }
    };

    // Reserved space (px) for the bottom tooltip when visible
    const SPACER_H = 42; // slightly larger to allow margin below email

    return (
      <div
        className="text-center inline-flex flex-col items-center"
        onTouchStart={() => setHovered(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        tabIndex={0}
      >
        {/* Main content */}
        <div className="flex flex-col items-center gap-1">
          <div className="text-white/90 text-xs md:text-sm font-light">
            {name}
          </div>
          <a
            href={`mailto:${emailAddr}`}
            className="text-white text-[10px] md:text-base font-medium hover:underline break-all"
          >
            {emailAddr}
          </a>
        </div>

        {/* Animated spacer BELOW the content; reveals the tooltip under it */}
        <div
          className="relative w-full"
          style={{
            height: hovered ? SPACER_H : 0,
            transition: "height 200ms ease",
          }}
        >
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy email"
            className="absolute left-1/2 -translate-x-1/2 top-2
                     text-xs md:text-sm px-3 py-1 rounded-lg border border-white/25
                     bg-white/10 backdrop-blur hover:bg-white/20 text-white
                     shadow-sm whitespace-nowrap
                     transition duration-200"
            style={{
              opacity: hovered ? 1 : 0,
              transform: `translateY(${hovered ? 0 : 4}px)`,
            }}
          >
            {label}
          </button>
        </div>
      </div>
    );
  };

  // Render email list using EmailItem
  const renderEmail = (email) => (
    <div className="space-y-2">
      {Object.entries(email).map(([name, emailAddr]) => (
        <EmailItem key={name} name={name} emailAddr={emailAddr} />
      ))}
    </div>
  );

  return (
    <section className="w-full py-6 pb-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Slider {...settings}>
          {sections.map((data) => {
            const isOpen = openId === data.id;
            return (
              <div key={data.id} className="px-1.5 md:px-2">
                <figure
                  className="org-card relative w-full h-80 sm:h-60 md:h-72 lg:h-80 xl:h-96
                   rounded-2xl shadow-md transition-all duration-300
                   cursor-pointer flex items-center justify-center"
                  // Desktop hover
                  onPointerEnter={() => {
                    if (canHover) setOpenId(data.id);
                  }}
                  onPointerLeave={() => {
                    if (canHover) setOpenId(null);
                  }}
                  // Mobile/touch toggle
                  onTouchEnd={() => {
                    setOpenId(data.id);
                  }}
                  onClick={() => {
                    setOpenId((prev) => (prev === data.id ? null : data.id));
                  }}
                >
                  <div
                    className="relative group inline-flex h-full max-w-full rounded-2xl
                     border-2 border-cyan-400 items-center justify-center overflow-hidden"
                  >
                    <img
                      src={data.image}
                      alt={data.title}
                      className={`block h-full w-auto max-w-full object-contain transition duration-300
                        ${isOpen ? "blur-sm" : "group-hover:blur-sm"}`}
                      loading="eager"
                    />

                    {/* Overlay is now state-driven, with hover fallback on desktop */}
                    <div
                      className={`
                      absolute inset-0 bg-black/60 flex items-center justify-center p-4
                      transition-opacity duration-300
                      ${
                        isOpen
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }
                    `}
                      // tap anywhere on overlay to close
                      onTouchEnd={() => setOpenId(null)}
                      style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    >
                      <div className="text-center space-y-3">
                        <h3 className="text-white text-lg md:text-xl font-bold">
                          {data.title}
                        </h3>
                        <div>{renderEmail(data.email)}</div>
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default OrgSlider;
