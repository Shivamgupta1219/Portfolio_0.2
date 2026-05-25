import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ExperienceSection from "../components/ExperienceSection";

const Index = () => {
  const [isDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Page Loading Animation - Professional minimalist loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden"
          >
            {/* Subtle background gradient */}
            <div className="absolute inset-0">
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative text-center"
            >
              {/* Logo with elegant animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  delay: 0.1,
                }}
                className="mb-8 inline-block"
              >
                <div className="relative w-20 h-20 mx-auto">
                  {/* Outer rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500"
                  />
                  {/* Inner counter-rotating ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-2 rounded-full border-2 border-transparent border-b-pink-500 border-l-blue-500"
                  />
                  {/* Center text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-mono">
                      SG
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Name */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl font-semibold text-white tracking-wider"
              >
                Shivam Gupta
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-sm text-gray-400 font-mono mt-2 tracking-widest uppercase"
              >
                Loading Portfolio
              </motion.p>

              {/* Progress dots */}
              <div className="flex items-center justify-center gap-1.5 mt-6">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-blue-500"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Layout */}
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white overflow-x-hidden">
        <Navbar />

        <main>
          <HeroSection />
          <ExperienceSection />
          <ProjectSection />
          <SkillsSection />
          <AboutSection />

          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
