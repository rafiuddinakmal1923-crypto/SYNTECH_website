import "./index.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import OrganisationChart from "./components/OrganisationChart";
import Event from "./components/Event";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useRef, useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router";
import Credit from "./components/Credit";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const orgRef = useRef(null);
  const projRef = useRef(null);
  const eventRef = useRef(null);
  const footerRef = useRef(null);

  const location = useLocation();

  const [isHomeVisible, setHomeVisible] = useState(undefined);
  const [activeSection, setActiveSection] = useState("home");

  const observer_bg_config = {
    root: null,
    threshold: 0,
  };

  const observer_navbar_config = {
    root: null,
    threshold: 0, // any overlap
    rootMargin: "-45% 0px -55% 0px", // treat the center as the trigger zone
  };

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const refMap = {
        home: homeRef,
        about: aboutRef,
        org: orgRef,
        proj: projRef,
        event: eventRef,
        contact: contactRef,
      };
      const targetRef = refMap[location.state.scrollTo];
      if (targetRef && targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  useEffect(() => {
    const observer_background = new IntersectionObserver(([entries]) => {
      if (!entries.isIntersecting) {
        console.log("Home out of view");
        setHomeVisible(false);
      } else {
        console.log("Home in view");
        setHomeVisible(true);
      }
      console.log(entries);
    }, observer_bg_config);

    observer_background.observe(homeRef.current);

    const observer_navbar = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`${entry.target.id} is in view!`);
          setActiveSection(entry.target.id); //get id of each component
        }
      });
    }, observer_navbar_config);

    const observed_components = [
      homeRef,
      aboutRef,
      orgRef,
      projRef,
      eventRef,
      contactRef,
    ];
    observed_components.forEach((component) => {
      if (component.current) observer_navbar.observe(component.current);
    });
  }, []);

  return (
    <>
      <Toaster containerStyle={{top: 80}} /> {/*move the notification around from top refer react toaster for indepths explanation*/}
      <Navbar
        activeSection={activeSection}
        onScrollTo={{
          home: () => homeRef.current.scrollIntoView({ behavior: "smooth" }),
          about: () => aboutRef.current.scrollIntoView({ behavior: "smooth" }),
          org: () => orgRef.current.scrollIntoView({ behavior: "smooth" }),
          event: () => eventRef.current.scrollIntoView({ behavior: "smooth" }),
          project: () => projRef.current.scrollIntoView({ behavior: "smooth" }),
          contact: () =>
            contactRef.current.scrollIntoView({ behavior: "smooth" }),
        }}
      />

      {/*have a black background that is vp height and width with opacity 0, when home exits view port, set opacity 100*/}
      <div
        className={`bg-black h-auto md:min-h-screen w-full overflow-x-hidden ${
          isHomeVisible
            ? "transition-colors duration-300 ease-in bg-fixed bg-gradient-to-b from-[#239498]/100 from-[-50%] md:from-[15%] via-[#1b1a1a]/100 to-black/100"
            : "transition-colors duration-300 ease-in bg-fixed bg-gradient-to-b from-[#239498]/0 from-[-50%] md:from-[15%] via-[#1b1a1a]/0 to-black/0"
        }`}
      >
        <div>
          <Home propRef={homeRef} id="home" />
          <About propRef={aboutRef} id="about" />
        </div>
      </div>

      <OrganisationChart propRef={orgRef} id="org" />
      <Event propRef={eventRef} id="event" />
      <Projects propRef={projRef} id="proj" />
      <Contact propRef={contactRef} id="contact" />
      <Footer propRef={footerRef} id="footer" />
      <Credit />
    </>
  );
}

export default App;
