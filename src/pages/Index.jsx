/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ExperienceSection from "../components/ExperienceSection";
// import EasterEgg from "../components/EasterEgg";

const Index = () => {
  const [isDark, setIsDark] = useState(
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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);
  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  return (
    <>
      {/* Page Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-6xl mb-4"
              >
                ⚡
              </motion.div>

              <h2 className="text-2xl font-bold text-blue-500 font-mono">
                {"<Loading />"}
              </h2>
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
