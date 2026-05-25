import { useInView, motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { useRef, useState, useEffect } from "react";
import {
  FaNodeJs,
  FaGithub,
  FaAngular,
  FaReact,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
  SiMysql
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-cyan-400 to-blue-500",
    skills: [
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 88 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    color: "from-green-400 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Tools & Others",
    color: "from-purple-400 to-pink-500",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 70 },
      { name: "Figma", level: 75 },
      { name: "Linux", level: 72 },
    ],
  },
];

const SkillBar = ({ name, level, color, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5, duration: 0.6 }}
          className="text-sm font-mono text-gray-500 dark:text-gray-400"
        >
          {isInView && <CountUpSkill value={level} />}%
        </motion.span>
      </div>

      <div className="h-3 rounded-full overflow-hidden bg-gray-200 dark:bg-white/10 shadow-sm">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color} shadow-lg`}
        />
      </div>
    </motion.div>
  );
};

const CountUpSkill = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < value ? prev + 1 : value));
    }, 20);
    return () => clearInterval(interval);
  }, [value]);

  return count;
};

const floatingIcons = [
  FaReact,
  FaNodeJs,
  FaGithub,
  FaAngular,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  SiTailwindcss,
  SiMongodb,
  SiMysql
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden bg-white dark:bg-black"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      {/* Subtle floating tech icons - reduced opacity and count */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.slice(0, 6).map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute opacity-[0.04] dark:opacity-[0.06]"
            style={{
              left: `${10 + (index % 3) * 35}%`,
              top: `${15 + Math.floor(index / 3) * 50}%`,
            }}
            animate={{ y: [0, -30, 0], rotate: [0, 5, -5, 0] }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-24 h-24 text-blue-500" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-mono text-blue-500 tracking-widest uppercase">
                Skills
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Technical{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I leverage to craft modern, scalable
              applications
            </p>
          </div>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="
                  relative group rounded-2xl p-7
                  bg-white/60 dark:bg-white/[0.03]
                  backdrop-blur-xl
                  border border-gray-200 dark:border-white/10
                  shadow-lg hover:shadow-2xl hover:shadow-blue-500/10
                  hover:border-blue-500/30
                  transition-all duration-500
                "
              >
                {/* Gradient accent on top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${category.color}`}
                />

                <h3
                  className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent tracking-tight`}
                >
                  {category.title}
                </h3>

                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={catIndex * 0.15 + skillIndex * 0.1}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <blockquote className="text-2xl md:text-3xl font-light italic text-gray-600 dark:text-gray-400">
              "Code. <span className="text-blue-500">Learn.</span> Improve.{" "}
              <span className="text-blue-500">Repeat.</span>"
            </blockquote>
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
};

export default SkillsSection;
