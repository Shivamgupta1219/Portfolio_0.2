import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Left */}
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <Code className="h-4 w-4" />
            </motion.span>
            Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-flex"
            >
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </motion.span>
            by{" "}
            <span className="text-gray-900 dark:text-white font-semibold">
              Shivam
            </span>
          </motion.p>

          {/* Right */}
          <motion.p
            className="text-gray-500 dark:text-gray-500 text-sm font-mono"
            whileHover={{ x: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
