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
import ClickSpark from "../components/ClickSpark";
import { BRAND_COLORS } from "../context/theme";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader: name and a progress line, then the curtain lifts */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          >
            <div className="w-64 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif italic text-5xl leading-none text-foreground"
              >
                Shivam Gupta
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-3 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground"
              >
                Full Stack Developer
              </motion.p>
              <div className="mt-8 h-px w-full overflow-hidden bg-border">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.3, ease: [0.65, 0, 0.35, 1] }}
                  className="h-full origin-left bg-brand"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Layout - mounted as the loader fades so entrance animations are seen */}
      {!isLoading && (
        <ClickSpark
          sparkColor={BRAND_COLORS}
          sparkSize={10}
          sparkRadius={22}
          sparkCount={10}
          duration={450}
        >
          <div className="min-h-screen bg-background text-foreground overflow-x-clip">
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
        </ClickSpark>
      )}
    </>
  );
};

export default Index;
