import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const parentVariants = (backgroundColor) => ({
  rest: { scale: 1, backgroundColor: "#F5F5F5" },
  hover: {
    scale: 1.05,
    backgroundColor: backgroundColor,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.04,
      backgroundColor: { type: "tween", duration: 0.3, ease: "easeInOut" },
    },
  },
});

// Mobile parent variants with height expansion
const mobileParentVariants = (
  backgroundColor,
  isExpanded,
  isOtherExpanded
) => ({
  collapsed: {
    backgroundColor: "#F5F5F5",
    height: isOtherExpanded ? "10vh" : "25vh",
    transition: {
      height: { type: "spring", stiffness: 300, damping: 30 },
      backgroundColor: { duration: 0.3 },
    },
  },
  expanded: {
    backgroundColor: backgroundColor,
    height: "50vh",
    transition: {
      height: { type: "spring", stiffness: 300, damping: 30 },
      when: "beforeChildren",
      staggerChildren: 0.04,
      backgroundColor: { type: "tween", duration: 0.3, ease: "easeInOut" },
    },
  },
});

const numberVariants = {
  rest: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  hover: {
    y: -20,
    opacity: 0,
    scale: 1,
    transition: { duration: 0.2 },
  },
  collapsed: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  collapsedHidden: {
    y: 0,
    opacity: 1,
    scale: 0.6,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  expanded: {
    y: -15,
    opacity: 0,
    scale: 1,
    transition: { duration: 0.2 },
  },
};

const imageBoxVariants = {
  rest: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3 },
  },
  hover: {
    opacity: 1,
    height: "60vh",
    transition: { type: "spring", stiffness: 250, damping: 25 },
  },
  collapsed: {
    opacity: 0,
    height: 0,
    transition: {
      opacity: { duration: 0.2 },
      height: { type: "spring", stiffness: 300, damping: 30, delay: 0.1 },
    },
  },
  collapsedHidden: {
    opacity: 0,
    height: 0,
    transition: {
      height: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.15 },
    },
  },
  expanded: {
    opacity: 1,
    height: "25vh",
    transition: {
      height: { type: "spring", stiffness: 250, damping: 25 },
      opacity: { duration: 0.3, delay: 0.15 },
    },
  },
};

const titleVariants = {
  rest: {
    y: 0,
    color: "#000000",
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  hover: {
    y: 20,
    color: "#ffffff",
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  collapsed: {
    y: 0,
    color: "#000000",
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  collapsedHidden: {
    y: 0,
    color: "#000000",
    opacity: 1,
    scale: 0.7,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  expanded: {
    y: 15,
    color: "#ffffff",
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

const buttonVariants = {
  rest: {
    opacity: 0,
    y: 0,
    transition: { duration: 0.2 },
  },
  hover: {
    opacity: 1,
    y: 10,
    transition: { duration: 0.2 },
  },
  collapsed: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.2 },
  },
  collapsedHidden: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.2 },
  },
  expanded: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.2 },
  },
};

const ProjectsBlock = ({
  numbering,
  title,
  img,
  alt,
  backgroundColor,
  routeTo,
  isExpanded,
  isOtherExpanded,
  onTap,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    const animateState = isExpanded
      ? "expanded"
      : isOtherExpanded
      ? "collapsedHidden"
      : "collapsed";

    return (
      <motion.div
        className="w-full flex flex-col justify-center items-center px-4 cursor-pointer overflow-hidden"
        variants={mobileParentVariants(
          backgroundColor,
          isExpanded,
          isOtherExpanded
        )}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
        onTap={onTap}
      >
        {/* numbering */}
        <motion.h1
          className="text-[#1BA98F] font-bold my-3"
          style={{ fontSize: isOtherExpanded ? "1.5rem" : "2.25rem" }}
          variants={numberVariants}
          animate={animateState}
        >
          {numbering}
        </motion.h1>

        {/* disappearing / appearing image */}
        <motion.div
          className="w-[70vw] overflow-hidden rounded-xl shadow-md"
          variants={imageBoxVariants}
          animate={animateState}
        >
          <img
            src={img}
            alt={alt}
            className="w-full h-full object-cover pointer-events-none"
          />
        </motion.div>

        {/* project title */}
        <motion.h2
          className="font-bold text-center my-2"
          style={{ fontSize: isOtherExpanded ? "0.875rem" : "1.125rem" }}
          variants={titleVariants}
          animate={animateState}
        >
          {title}
        </motion.h2>

        {/* button with fade in on expansion */}
        <motion.div
          variants={buttonVariants}
          className="mt-4 mb-4"
          animate={animateState}
        >
          <Button
            asChild
            className="bg-[#6750A4] text-white hover:bg-[#7361a1] rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Link
              to={`/projects/${routeTo}`}
              className="flex items-center gap-2"
            >
              View More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    );
  }

  // Desktop version
  return (
    <motion.div
      className="w-full h-screen flex flex-col justify-center items-center hover:border-r-2 border-[#494b4bae]"
      variants={parentVariants(backgroundColor)}
      initial={false}
      animate="rest"
      whileHover="hover"
    >
      {/* numbering */}
      <motion.h1
        className="text-[#1BA98F] text-7xl font-bold my-[5vh]"
        variants={numberVariants}
      >
        {numbering}
      </motion.h1>

      {/* disappearing / appearing image */}
      <motion.div
        className="w-[20vw] overflow-hidden rounded-xl shadow-md"
        variants={imageBoxVariants}
      >
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover pointer-events-none"
        />
      </motion.div>

      {/* project title */}
      <motion.h2 className="text-2xl font-bold" variants={titleVariants}>
        {title}
      </motion.h2>

      {/* button with fade in on hover */}
      <motion.div variants={buttonVariants}>
        <Button
          asChild
          className="my-[5vh] bg-[#6750A4] text-white hover:bg-[#7361a1] rounded-3xl"
        >
          <Link to={`/projects/${routeTo}`} className="flex items-center gap-2">
            View More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsBlock;
