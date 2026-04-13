/* eslint-disable no-unused-vars */
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

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
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {name}
        </span>
        <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
          {level}%
        </span>
      </div>

      <div className="h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>

      
    </div>
  );
};

const floatingIcons = ["⚛️", "📦", "🎨", "🔥", "🐙", "🚀"];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="relative py-15 overflow-hidden bg-white dark:bg-black"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      </div>
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${20 + (index % 3) * 30}%`,
              top: `${15 + Math.floor(index / 3) * 35}%`,
            }}
            animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {icon}
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Technologies and tools I use to build modern applications
          </p>

          {/* Skill Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.2 }}
                className="
relative group rounded-2xl p-6
bg-white/60 dark:bg-white/5
backdrop-blur-xl
border border-white/20
shadow-lg hover:shadow-2xl
transition-all duration-500
hover:-translate-y-2
"
              >
                <h3
                  className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>

                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={catIndex * 0.2 + skillIndex * 0.1}
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
