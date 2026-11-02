import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { Download, FolderOpen } from "lucide-react";
import { useEffect, useState } from "react";
import Ballpit from "./Ballpit";
import Aurora from "./Aurora";
import BlurText from "./BlurText";
import GradientText from "./GradientText";
import Magnet from "./Magnet";
import { BRAND_COLORS, useTheme } from "../context/theme";

const roles = [
  "Web Developer",
  "Frontend Engineer",
  "Learner",
  "Problem Solver",
];

// Background colors per theme
const AURORA_COLORS = {
  dark: ["#4f46e5", "#a855f7", "#ec4899"],
  light: ["#a5b4fc", "#f0abfc", "#c4b5fd"],
};
const BALL_COLORS = {
  dark: [0x312e81, 0x7c3aed, 0x0f172a],
  light: [0xc7d2fe, 0xe9d5ff, 0xffffff],
};

const HeroSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
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
            setIsDeleting(true);
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
      // Pause on the full word before deleting it
      isDeleting ? 50 : displayText.length === currentRole.length ? 2000 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Read the width up front so phones never mount the desktop Ballpit
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

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
      className="min-h-screen pt-28 pb-28 flex items-center justify-center relative isolate overflow-hidden bg-background"
    >
      {/* Background: aurora glow everywhere, ball pit on desktop */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={AURORA_COLORS[theme]}
          lightMode={!isDark}
          amplitude={1.1}
          blend={0.6}
          speed={0.6}
          opacity={isDark ? 0.9 : 0.75}
          className="absolute inset-0"
        />
        {!isMobile && (
          // Ballpit reads its colors once, so remount it when the theme changes
          <Ballpit
            key={theme}
            count={90}
            colors={BALL_COLORS[theme]}
            gravity={0.01}
            friction={0.9875}
            wallBounce={0.95}
            followCursor={false}
            className="absolute inset-0"
          />
        )}
      </div>

      {/* Soft glow behind the text and a fade into the next section */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(900px,100vw)] h-[520px] rounded-full bg-background/50 blur-3xl" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-background/60 backdrop-blur-md mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-medium text-foreground/80">
            Available for opportunities
          </span>
        </motion.div>

        <h1 className="font-bold mb-6 text-foreground tracking-tight leading-[1.02]">
          <BlurText
            as="span"
            text="Hi, I'm"
            trigger="load"
            delay={120}
            className="justify-center text-3xl md:text-5xl lg:text-6xl text-muted-foreground font-semibold mb-2"
          />
          <motion.span
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="block text-6xl md:text-8xl lg:text-9xl"
          >
            <GradientText colors={BRAND_COLORS} animationSpeed={7} glow={isDark ? 0.35 : 0}>
              Shivam Gupta
            </GradientText>
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="h-14 flex items-center justify-center mb-4"
        >
          <span className="text-lg md:text-2xl font-mono text-foreground/80">
            <span className="text-muted-foreground">{"< "}</span>
            <span className="bg-gradient-to-r from-brand-1 to-brand-2 bg-clip-text text-transparent font-semibold">
              {displayText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="text-brand-2"
            >
              |
            </motion.span>
            <span className="text-muted-foreground">{" />"}</span>
          </span>
        </motion.div>

        <BlurText
          text="I craft elegant, performant web experiences with modern technologies — turning complex problems into intuitive, beautiful interfaces."
          trigger="load"
          delay={35}
          blur={8}
          distance={20}
          className="justify-center text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-2"
        >
          <Magnet padding={60} magnetStrength={5} wrapperClassName="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="
                group relative w-full px-8 py-4 rounded-2xl
                bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500
                text-white font-semibold
                shadow-lg shadow-violet-500/30
                hover:shadow-xl hover:shadow-violet-500/40
                transition-shadow duration-300
                flex items-center justify-center gap-2
                overflow-hidden
              "
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <FolderOpen className="h-5 w-5 relative z-10" />
              <span className="relative z-10">View My Work</span>
            </motion.button>
          </Magnet>

          <Magnet padding={60} magnetStrength={5} wrapperClassName="w-full sm:w-auto">
            <motion.a
              href="/Shivam_Gupta_Resume.pdf"
              download="Shivam_Gupta_Resume.pdf"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="
                w-full px-8 py-4 rounded-2xl
                border border-border
                bg-background/60
                backdrop-blur-lg
                text-foreground font-semibold
                hover:border-violet-500/50 hover:bg-violet-500/5
                transition-colors duration-300
                flex items-center justify-center gap-2
              "
            >
              <Download className="h-5 w-5" />
              Download Resume
            </motion.a>
          </Magnet>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-gradient-to-b from-brand-1 to-brand-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
