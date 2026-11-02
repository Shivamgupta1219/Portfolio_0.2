import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/theme";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={(e) => toggleTheme({ x: e.clientX, y: e.clientY })}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={isDark ? "Switch to day mode" : "Switch to dark mode"}
      title={isDark ? "Day mode" : "Dark mode"}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-border bg-card/70 backdrop-blur-lg text-foreground shadow-sm hover:border-violet-500/40 hover:shadow-violet-500/20 hover:shadow-lg transition-[border-color,box-shadow] ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 18, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -18, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex"
        >
          {isDark ? (
            <Moon className="h-[18px] w-[18px] text-violet-300" />
          ) : (
            <Sun className="h-[18px] w-[18px] text-amber-500" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
