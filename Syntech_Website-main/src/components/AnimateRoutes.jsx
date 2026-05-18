import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import App from "../App.jsx";
import ProjectsDisplay from "./ProjectsDisplay.jsx";
import CaveDetails from "./project details/CaveDetails.jsx";
import NextTechDetails from "./project details/NexTechDetails.jsx";
import ImagineHackDetails from "./project details/ImagineHackDetails.jsx";
import MakerFairDetails from "./project details/MakerFairDetails.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <App />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <ProjectsDisplay />
            </motion.div>
          }
        />
        <Route
          path="/projects/01"
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <CaveDetails />
            </motion.div>
          }
        />
        <Route
          path="/projects/02"
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <NextTechDetails />
            </motion.div>
          }
        />
        <Route
          path="/projects/03"
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <ImagineHackDetails />
            </motion.div>
          }
        />
        <Route
          path="/projects/04"
          element={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <MakerFairDetails />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
