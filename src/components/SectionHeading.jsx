import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import ShinyText from "./ShinyText";
import GradientText from "./GradientText";
import { BRAND_COLORS, useTheme } from "../context/theme";

// Shared heading for every section: shiny badge, title with a flowing gradient accent
const SectionHeading = ({ badge, title, accent, description, className = "mb-16" }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`text-center ${className}`}
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/5 backdrop-blur-sm mb-5">
        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-1 to-brand-2 animate-pulse" />
        <ShinyText
          text={badge}
          color={isDark ? "#a5b4fc" : "#6366f1"}
          shineColor={isDark ? "#ffffff" : "#e879f9"}
          speed={3}
          className="text-xs font-mono tracking-[0.2em] uppercase"
        />
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-foreground">
        {title}{" "}
        <GradientText colors={BRAND_COLORS} animationSpeed={6}>
          {accent}
        </GradientText>
      </h2>

      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
