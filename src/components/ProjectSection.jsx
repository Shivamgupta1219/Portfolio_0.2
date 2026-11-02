import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import betterparker from "../assets/better_parker.png";      
import campusCvImg from "../assets/CampusCV.png";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import relproImg from "../assets/relpro_group.jpg";
const categories = [
  "All",
  // "Frontend",
  // "Backend",
  "Full Stack",
  "Data Analysis",
  "Freelance",
];
const projects = [
  {
    id: 5,
    title: "Relpro Group — Builders & Developers",
    description:
      "A multi-page website for a Meerut-based real estate developer, showcasing plotted colonies, residences and commercial parks across Delhi-NCR, with project and location pages, a gallery, and an enquiry form with WhatsApp contact.",
    category: "Freelance",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    image: relproImg,
    github: "#",
    demo: "https://www.relprogroup.co.in/",
    isFreelance: true,
  },
  {
    id: 1,
    title: "Better Parker — Realty is Reality",
    description:
      "A premium Dubai real estate website built as a freelance project. Designed with a cinematic aesthetic, smooth animations, and an integrated AI assistant (Jini) to help users find properties.",
    category: "Freelance",
    tech: ["MERN stack", "Vercel"],
    image: betterparker,
    github: "#",
    demo: "https://better-paker.vercel.app/",
    isFreelance: true,
  },
  {
    id: 2,
    title: "Campus CV - Major Project BCA",
    description:
      "A full-stack AI-powered resume builder that helps students create professional resumes with smart suggestions and customizable templates.",
    category: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    image: campusCvImg,
    github:
      "https://github.com/Shivamgupta1219/Major_Project_BCA",
    demo: "https://major-project-bca.vercel.app/",
  },

  {
    id: 4,
    title: "Customer Trend Analysis",
    description:
      "Interactive dashboard for analyzing customer behavior and market trends with data visualization.",
    category: "Data Analysis",
    tech: ["React", "D3.js", "CSS", "Python"],
    image: "📊",
    github:
      "https://github.com/Shivamgupta1219/Customer-Behavior-Dashboard-Data-Analysis-",
    demo: "#",
  },
  // {
  //   id: 5,
  //   title: "Task Management App",
  //   description:
  //     "Kanban-style project management with real-time collaboration features.",
  //   category: "Frontend",
  //   tech: ["React", "Tailwind", "Firebase"],
  //   image: "📋",
  //   github: "#",
  //   demo: "#",
  // },
];
const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-background relative isolate overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            badge="Portfolio"
            title="Featured"
            accent="Projects"
            description="A curated selection of projects showcasing my technical skills, design sensibility, and problem-solving approach."
            className="mb-12"
          />

          {/* Filters with animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-blue-500/50"
                      : "border border-gray-300 dark:border-white/20 text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:shadow-md"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <SpotlightCard
                  spotlightColor="#a855f7"
                  spotlightSize={320}
                  className="p-0 rounded-2xl h-full flex flex-col transition-transform duration-500 hover:-translate-y-1.5"
                >
                  {/* Preview - with proper aspect ratio */}
                  <div className="relative w-full aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                    {typeof project.image === "string" && project.image.length > 5 ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    ) : (
                      <motion.div
                        className="text-7xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        {project.image}
                      </motion.div>
                    )}

                    {/* Freelance Badge */}
                    {project.isFreelance && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold flex items-center gap-1 shadow-lg"
                      >
                        💼 Freelance
                      </motion.div>
                    )}

                    {/* Live Badge for projects with direct demo links */}
                    {project.demo && project.demo !== "#" && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute top-3 right-3 px-3 py-1 rounded-full bg-green-500/90 backdrop-blur text-white text-xs font-bold flex items-center gap-1.5 shadow-lg"
                      >
                        <motion.span
                          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                        Live
                      </motion.div>
                    )}

                    {/* Hover buttons */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center gap-3">
                      {project.github && project.github !== "#" && (
                        <motion.a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.github}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 text-sm rounded-lg bg-black/70 backdrop-blur text-white flex items-center gap-2 hover:bg-black transition-all"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </motion.a>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <motion.a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={project.demo}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 text-white flex items-center gap-2 shadow-lg transition-all"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Visit Live
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span
                        className={`text-xs font-mono px-2 py-1 rounded-full whitespace-nowrap ${
                          project.isFreelance
                            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                            : "bg-blue-500/10 text-blue-500"
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Direct Visit Link - Always Visible for live projects */}
                    {project.demo && project.demo !== "#" && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="text-sm text-blue-500 hover:text-purple-500 font-medium mb-3 flex items-center gap-1 group/link"
                      >
                        Visit Project
                        <ExternalLink className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                      </motion.a>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

          {/* View More */}
          {/* <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-lg border border-blue-500/40 text-blue-500 hover:bg-blue-500/10 transition flex items-center gap-2 mx-auto">
              <Layers className="h-5 w-5" />
              View All Projects
            </button>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
