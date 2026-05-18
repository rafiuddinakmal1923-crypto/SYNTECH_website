import { useEffect, useRef, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = ({ onScrollTo, activeSection }) => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

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
      <div>
        {deviceWidth <= 800 ? (
          <MobileNavbar onScrollTo={onScrollTo} activeSection={activeSection} />
        ) : (
          <DesktopNavbar
            onScrollTo={onScrollTo}
            activeSection={activeSection}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
