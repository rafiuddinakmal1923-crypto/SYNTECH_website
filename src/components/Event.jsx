import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DesktopEvent from "./DesktopEvent.jsx";
import MobileEvent from "./MobileEvent.jsx";

gsap.registerPlugin(ScrollTrigger);

const Event = (props) => {
  let ref_id = props.propRef;
  let id = props.id;

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
          <MobileEvent ref_id={ref_id} id={id} />
        ) : (
          <DesktopEvent ref_id={ref_id} id={id} />
        )}
      </div>
    </>
  );
};

export default Event;
