import { useEffect, useRef, useState } from "react";
import syntech_logo from "../assets/syntech-logo 2.png";
import navigation_icon from "../assets/navigation-bar.png";
import gsap from "gsap";

const MobileNavbar = ({ onScrollTo }) => {
  const [sidebarShowing, setSidebarShowing] = useState(false);
  const dropDownMenuComponent = useRef(null);
  const linkComponent = useRef(null);
  const burgerStackIcon = useRef(null);

  const nav_links = [
    { id: 1, link_name: "About", ref: "about" },
    { id: 2, link_name: "Organization Lineup", ref: "org" },
    { id: 3, link_name: "Events", ref: "event" },
    { id: 4, link_name: "Projects", ref: "proj" },
    { id: 5, link_name: "Contact", ref: "contact" },
  ];

  const closeWhenClickOnOtherComponent = (e) => {
    // Close the sidebar if clicked outside of the dropdown menu
    if (
      !burgerStackIcon.current.contains(e.target) &&
      !dropDownMenuComponent.current.contains(e.target) &&
      sidebarShowing
    ) {
      console.log("closing the sidebar");
      handleNavigationSideBar();
      console.log("exiting the loop");
    }
  };

  useEffect(() => {
    console.log(`State of sidebar: ${sidebarShowing}`);
    window.addEventListener("mousedown", closeWhenClickOnOtherComponent);
    return () => {
      window.removeEventListener("mousedown", closeWhenClickOnOtherComponent);
    };
  }, [sidebarShowing]); // Update effect dependency to track sidebarShowing state

  const openSidemenu = () => {
    setSidebarShowing(true);
    console.log(`sidebar: ${sidebarShowing}`);
    gsap.to(".sidemenu", { yPercent: 0, duration: 0.15 });
  };

  const closeSidemenu = () => {
    console.log(`sidebar: ${sidebarShowing}`);
    setSidebarShowing(false);
    gsap.to(".sidemenu", { yPercent: -100, duration: 0.15 });
  };

  const handleNavigationSideBar = () => {
    if (sidebarShowing) {
      gsap.to(".sidebar", {
        rotation: 0,
        duration: 0.15,
      });
      closeSidemenu();
    } else {
      gsap.to(".sidebar", {
        rotation: 90,
        duration: 0.15,
      });
      openSidemenu();
    }
  };

  const handleClick = (ref) => {
    switch (ref) {
      case "about":
        onScrollTo.about();
        break;
      case "org":
        onScrollTo.org();
        break;
      case "event":
        onScrollTo.event();
        break;
      case "proj":
        onScrollTo.project();
        break;
      case "contact":
        onScrollTo.contact();
        break;
    }
  };

  return (
    <>
      <header className="bg-[rgba(255,255,255,0.7)] fixed top-0 z-[99999] w-full backdrop-blur-sm shadow-md border-none h-12 px-4 md:px-6 lg:px-[50px] flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex justify-center items-center w-auto h-12">
            <img
              ref={burgerStackIcon}
              className="sidebar h-7 w-4 object-cover"
              src={navigation_icon}
              onClick={handleNavigationSideBar}
            />
          </div>
          <img
            className="h-7 w-7 md:h-9 md:w-9 lg:h-[60px] lg:w-[60px] object-cover"
            src={syntech_logo}
            alt="SYNTECH"
          />
          <a
            onClick={onScrollTo.home}
            className="font-Inter tracking-tighter font-[600] cursor-pointer text-lg md:text-xl lg:text-3xl"
          >
            SYNTECH
          </a>
        </div>
      </header>
      <div
        ref={dropDownMenuComponent}
        className={`sidemenu flex flex-col bg-[rgba(255,255,255,0.7)] w-auto h-auto top-12 fixed backdrop-blur-xs z-[9999] rounded-b-sm ${
          !sidebarShowing
            ? `transition-opacity duration-[150ms] opacity-0 pointer-events-none`
            : `transition-opacity duration-[150ms] opacity-100`
        }`}
      >
        {nav_links.map((link) => (
          <div
            key={link.id}
            ref={linkComponent}
            onClick={() => handleClick(link.ref)}
            className="flex w-auto h-10 px-2 text-center justify-center items-center hover:bg-[rgba(208,208,208,0.7)] text-[10px] border-b-[0.5px] border-[#1F2022] cursor-pointer"
          >
            <nav className="font-Poppins font-medium">{link.link_name}</nav>
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileNavbar;
