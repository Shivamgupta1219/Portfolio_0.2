/* eslint-disable no-unused-vars */
import { useInView, motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  BookOpen,
  Briefcase,
  Code2,
  GraduationCap,
  Sparkles,
  Zap,
  Heart,
  Target,
  Coffee,
  Moon,
  Book,
  Gamepad2,
} from "lucide-react";
import CountUp from "./CountUp";
import profileImg from "../assets/ShivamGupta_img.jpeg";
const timeline = [
  {
    icon: GraduationCap,
    title: "Learning Journey",
    description: "Started with HTML & CSS, fell in love with code",
    year: "2021",
    color: "from-blue-400 to-cyan-500",
    achievement: "First 'Hello World' felt like magic",
  },
  {
    icon: Code2,
    title: "Building Projects",
    description: "Created 20+ projects to sharpen skills",
    year: "2022",
    color: "from-purple-400 to-pink-500",
    achievement: "Learned by breaking things (a lot)",
  },
  {
    icon: BookOpen,
    title: "Deep Diving",
    description: "Mastered React, Node.js & modern tools",
    year: "2023",
    color: "from-orange-400 to-red-500",
    achievement: "Documentation became my best friend",
  },
  {
    icon: Briefcase,
    title: "Going Pro",
    description: "Ready to make an impact in the industry",
    year: "2024",
    color: "from-green-400 to-emerald-500",
    achievement: "Building products that matter",
  },
];

const coreValues = [
  {
    icon: Sparkles,
    title: "Clean Code",
    description: "Writing code that humans can read",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Adapting to new tech quickly",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Heart,
    title: "User-Focused",
    description: "Design with empathy and purpose",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Turning challenges into solutions",
    color: "from-purple-400 to-indigo-500",
  },
];

const funFacts = [
  {
    icon: Coffee,
    title: "Coffee Addict",
    fact: "Debug sessions run on caffeine and determination",
    stat: "5+ cups/day",
  },
  {
    icon: Moon,
    title: "Night Owl",
    fact: "Best code happens after midnight",
    stat: "Peak hours: 10PM-2AM",
  },
  {
    icon: Book,
    title: "Eternal Student",
    fact: "Always learning something new",
    stat: "3+ courses/year",
  },
  {
    icon: Gamepad2,
    title: "Gamer",
    fact: "Gaming breaks boost productivity",
    stat: "Strategy games FTW",
  },
];

const stats = [
  { label: "Real Projects Built", value: 5, suffix: "+", icon: "🚀" },
  { label: "Coffee Consumed", value: 2000, suffix: "+", icon: "☕" },
  { label: "Code Lines", value: 100000, suffix: "+", icon: "💻" },
  { label: "Hours Learning", value: 5000, suffix: "+", icon: "📚" },
];

const TimelineItem = ({ item, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2 * index + 0.3, duration: 0.6 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-6 items-start">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0 relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors"></div>
          <item.icon className="h-8 w-8 text-white relative z-10" />
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-800 group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-3">
              <h4
                className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
              >
                {item.title}
              </h4>
              <span
                className={`px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-bold shadow-md`}
              >
                {item.year}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              {item.description}
            </p>

            {/* Achievement badge */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={
                isHovered
                  ? { opacity: 1, height: "auto" }
                  : { opacity: 0, height: 0 }
              }
              className="overflow-hidden"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 italic pt-2 border-t border-gray-200 dark:border-gray-700">
                <span>✨</span>
                <span>{item.achievement}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Connecting line */}
      {index < timeline.length - 1 && (
        <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-700"></div>
      )}
    </motion.div>
  );
};

const ValueCard = ({ value, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 h-full">
        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`}
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
        ></motion.div>

        <div className="relative z-10">
          <motion.div
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.6 }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}
          >
            <value.icon className="h-6 w-6 text-white" />
          </motion.div>

          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {value.title}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {value.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FunFactCard = ({ fact, index, isInView }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
      className="perspective-1000"
    >
      <motion.div
        className="relative w-full h-48 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 h-full flex flex-col items-center justify-center shadow-xl text-white">
            <fact.icon className="h-12 w-12 mb-3" />
            <h4 className="text-lg font-bold text-center">{fact.title}</h4>
            <p className="text-xs opacity-80 mt-2">Click to reveal</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="bg-white dark:bg-gray-900 border-2 border-purple-500 rounded-2xl p-6 h-full flex flex-col justify-center shadow-xl">
            <p className="text-sm text-gray-700 dark:text-gray-300 text-center mb-3 italic">
              "{fact.fact}"
            </p>
            <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
              <span>📊</span>
              <span>{fact.stat}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="relative py-15 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black"
    >
      {/* Animated background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 blur-3xl rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 blur-3xl rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 50%)`,
          backgroundSize: "100% 100%",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
              style={{
                fontFamily: "'Playfair Display', 'Crimson Text', serif",
              }}
            >
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              A passionate developer crafting digital experiences with code and
              creativity
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8 mb-20">
            {/* Profile Card - Spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-shadow duration-500">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <motion.div
                      className="relative w-48 h-48 mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Animated ring */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ padding: "4px" }}
                      >
                        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
                      </motion.div>

                      {/* Profile picture */}
                      <div className="absolute inset-1 rounded-full overflow-hidden border-4 border-white dark:border-gray-900">
                        <img
                          src={profileImg}
                          alt="Shivam Gupta"
                          className="w-full h-full object-cover object-[20%_-30%] scale-125 hover:scale-150 transition duration-500"
                        />
                      </div>

                      {/* Status indicator */}
                      <motion.div
                        className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      ></motion.div>
                    </motion.div>
                  </div>

                  {/* Name & Title */}
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                      Shivam Gupta
                    </h3>
                    <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-3">
                      Full Stack Developer
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      Self-taught developer passionate about building beautiful,
                      functional web applications that solve real problems with
                      clean, scalable code.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md border border-gray-100 dark:border-gray-700"
                      >
                        <div className="text-2xl mb-1">{stat.icon}</div>
                 <div className="text-2xl font-bold text-gray-900 dark:text-white">
  <CountUp
    from={0}
    to={stat.value}
    duration={2}
    separator=","
    startCounting={isInView}
  />
  {stat.suffix}
</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all"
                    onClick={() => {
                      document.getElementById("contact").scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    Let's Build Something Amazing 🚀
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Timeline & Values - Spans 3 columns */}
            <div className="lg:col-span-3 space-y-12">
              {/* Journey Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                  <span className="text-4xl">🗺️</span>
                  My Journey
                </h3>
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <TimelineItem
                      key={item.year}
                      item={item}
                      index={index}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Core Values */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                  <span className="text-4xl">💎</span>
                  Core Values
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {coreValues.map((value, index) => (
                    <ValueCard
                      key={value.title}
                      value={value}
                      index={index}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Fun Facts Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white flex items-center justify-center gap-3">
              <span className="text-4xl">🎭</span>
              Behind The Code
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
              Click the cards to discover what makes me tick
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {funFacts.map((fact, index) => (
                <FunFactCard
                  key={fact.title}
                  fact={fact}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>

          {/* Personal Philosophy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1 }}
            className="mt-20 text-center"
          >
            <blockquote
              className="text-2xl md:text-4xl font-light italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              style={{
                fontFamily: "'Playfair Display', 'Crimson Text', serif",
              }}
            >
              "Code is not just about making things work—
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                it's about crafting experiences
              </span>
              <br />
              that people love to use."
            </blockquote>
            <p className="text-gray-500 dark:text-gray-500 mt-4 text-sm">
              — My Philosophy
            </p>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
