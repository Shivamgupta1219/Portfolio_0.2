import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { Download, FolderOpen } from "lucide-react";
import { useEffect, useState } from "react";
import RippleGrid from "./RippleGrid";

import Ballpit from "./Ballpit";

const roles = [
  "Web Developer",
  "Frontend Engineer",
  "Learner",
  "Problem Solver",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          // 💻 Desktop → Ballpit
          <Ballpit
            count={100}
  colors={[0x0f172a, 0x06b6d4, 0x475569]}
            gravity={0.01}
            friction={0.9875}
            wallBounce={0.95}
            followCursor={false}
          />
        ) : (
          // 📱 Mobile → FaultyTerminal
          <div className="w-full h-full">
            <RippleGrid
              enableRainbow={false}
              gridColor="#ffffff"
              rippleIntensity={1}
              gridSize={50}
              gridThickness={20}
              mouseInteraction={true}
              mouseInteractionRadius={1.8}
              opacity={0.4}
            />
          </div>
        )}
      </div>
      {/* Subtle background blobs - more refined */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-md mb-6"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-green-500"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight leading-[1.05]"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Shivam Gupta
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-14 flex items-center justify-center mb-6"
        >
          <span className="text-lg md:text-2xl font-mono text-gray-700 dark:text-gray-300">
            <span className="text-gray-400 dark:text-gray-500">{"< "}</span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
              {displayText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="text-blue-500"
            >
              |
            </motion.span>
            <span className="text-gray-400 dark:text-gray-500">{" />"}</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft elegant, performant web experiences with modern technologies —
          turning complex problems into intuitive, beautiful interfaces.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-2"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="
              group relative px-8 py-4 rounded-xl
              bg-gradient-to-r from-blue-600 to-purple-600
              text-white font-semibold
              shadow-lg shadow-blue-500/25
              hover:shadow-xl hover:shadow-blue-500/40
              transition-all duration-300
              flex items-center justify-center gap-2
              overflow-hidden
            "
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <FolderOpen className="h-5 w-5 relative z-10" />
            <span className="relative z-10">View My Work</span>
          </motion.button>

          <motion.a
            href="/Shivam_Gupta_Resume.pdf"
            download="Shivam_Gupta_Resume.pdf"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="
              px-8 py-4 rounded-xl
              border border-gray-300 dark:border-white/20
              bg-white/60 dark:bg-white/5
              backdrop-blur-lg
              text-gray-900 dark:text-white font-semibold
              hover:border-blue-500/50 hover:bg-blue-500/5
              transition-all duration-300
              flex items-center justify-center gap-2
            "
          >
            <Download className="h-5 w-5" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-gray-500 dark:text-gray-400 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-gradient-to-b from-blue-500 to-purple-500"
            />
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
