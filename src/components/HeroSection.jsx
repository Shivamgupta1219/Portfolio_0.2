/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpen } from "lucide-react";
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
      {/* Background blobs */}
      <div className="absolute inset-0">
        {["🚀", "💻", "🔥", "😎", "⚡"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{ y: [0, -30, 0], rotate: [0, 15, -15, 0] }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
            }}
          >
            {emoji}
          </motion.div>
        ))}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-blue-500 font-mono text-lg mb-4"
        >
          Hello World! 👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Shivam Gupta
          </span>
          <br />
        </motion.h1>

        <div className="h-14 flex items-center justify-center mb-8">
          <span className="text-xl md:text-2xl font-mono bg-black/5 dark:bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
            {"< "}
            <span className="text-blue-500 font-semibold">{displayText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="text-blue-500"
            >
              |
            </motion.span>
            {" />"}
          </span>
        </div>

        {/* Buttons */}

        <div className="flex flex-col sm:flex-row gap-4 justify-center m-5">
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            {/* View Projects */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="
      px-8 py-4 rounded-xl
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white font-semibold
      shadow-lg hover:shadow-2xl
      transition-all duration-300
      flex items-center gap-2
    "
            >
              <FolderOpen className="h-5 w-5" />
              Explore My Work 🚀
            </motion.button>

            {/* Hire Me */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("../src/assets/Shivam_Gupta_Resume.pdf", "_blank")}
              className="
      px-8 py-4 rounded-xl
      border border-blue-500/30
      bg-white/10 dark:bg-white/5
      backdrop-blur-lg
      text-blue-600 dark:text-blue-400
      hover:bg-blue-500/10
      hover:shadow-lg
      transition-all duration-300
      flex items-center gap-2
    "
            >
              <Download className="h-5 w-5" />
              Resume 💬
            </motion.button>
          </div>
        </div>
      </div>

      <motion.div className="absolute bottom-6 left-0 w-full pointer-events-none overflow-hidden">
        <motion.div
          className="flex items-end gap-5"
          animate={{ x: ["-20%", "110%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {/* 🧍 Character */}
          <div className="relative flex items-end gap-1">
            {/* Head */}
            <motion.div
              className="w-6 h-6 bg-yellow-300 rounded-full relative flex items-center justify-center"
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            >
              {/* Eyes */}
              <div className="absolute top-2 left-1 w-1 h-1 bg-black rounded-full"></div>
              <div className="absolute top-2 right-1 w-1 h-1 bg-black rounded-full"></div>

              {/* Mouth (panic) */}
              <div className="absolute bottom-1 w-2 h-1 bg-black rounded-full"></div>
            </motion.div>

            {/* Body */}
            <div className="w-3 h-10 bg-blue-500 rounded-md relative">
              {/* Laptop */}
              <motion.div
                className="absolute -right-6 top-1 w-7 h-4 bg-gray-800 border border-gray-600 rounded-sm"
                animate={{ rotate: [-20, 20, -20] }}
                transition={{ duration: 0.2, repeat: Infinity }}
              />
            </div>

            {/* Legs */}
            <motion.div
              className="absolute -bottom-2 left-0 w-3 h-5 bg-gray-700 rounded"
              animate={{ rotate: [40, -40, 40] }}
              transition={{ duration: 0.2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 left-3 w-3 h-5 bg-gray-700 rounded"
              animate={{ rotate: [-40, 40, -40] }}
              transition={{ duration: 0.2, repeat: Infinity }}
            />

            {/* Sweat */}
            <motion.div
              className="absolute -top-2 left-5 w-1 h-2 bg-blue-400 rounded-full"
              animate={{ y: [0, 5, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </div>

          {/* 💬 Speech Bubble */}
          <motion.div
            className="bg-white dark:bg-black border border-gray-300 dark:border-white/20 px-4 py-2 rounded-xl shadow-xl text-sm font-semibold"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            Bug detected...
            <br />
            <span className="block text-xs text-red-500 mt-1 animate-pulse">
              ALERT: BUG BUG BUG
            </span>
          </motion.div>

          <motion.div
            className="w-3 h-3 bg-red-500 rounded-full shadow-lg"
            animate={{
              x: [-10, 10, -10],
              y: [0, -5, 0],
            }}
            transition={{ duration: 0.4, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
