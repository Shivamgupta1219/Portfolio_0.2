/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Left */}
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
            <Code className="h-4 w-4" />
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
          </p>

          {/* Right */}
          <p className="text-gray-500 dark:text-gray-500 text-sm font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
