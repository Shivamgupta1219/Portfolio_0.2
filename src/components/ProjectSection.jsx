/* eslint-disable no-unused-vars */
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Layers } from "lucide-react";
import { motion } from "framer-motion";

import campusCvImg from "../assets/CampusCV.png";
const categories = ["All", "Frontend", "Backend", "Full Stack", "Data Analysis"];
const projects = [
  {
    id: 1,
    title: "AI Resume Builder (Capmus CV)",
    description:
      "A full-featured online store with cart, payments, and admin dashboard.",
    category: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: campusCvImg,
    github: "https://github.com/Shivamgupta1219/AI-resume-builder-Minor-project-College-",
    demo: "#",

  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Kanban-style project management with real-time collaboration.",
    category: "Frontend",
    tech: ["React", "Tailwind", "Firebase"],
    image: "📋",
    github: "#",
    demo: "#",
  },
 {
  id: 3,
  title: "Customer Trend Analysis",
  description: "Interactive dashboard for analyzing customer behavior and market trends.",
  category: "Data Analysis",
  tech: ["React", "D3.js", "CSS", "Python"],
  image: "📊",
  github: "https://github.com/Shivamgupta1219/Customer-Behavior-Dashboard-Data-Analysis-",
  demo: "#",
  analysis: "#", 
}

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
    <section id="projects" className="py-15 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            My <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            A collection of projects that showcase my skills
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition
                  ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      : "border border-gray-300 dark:border-white/20 text-gray-600 dark:text-gray-400 hover:border-blue-500"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

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
                <div className="bg-gray-100 dark:bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden h-full flex flex-col">
                  {/* Preview */}
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative">
                   <div className="h-48 overflow-hidden rounded-t-2xl">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
  />
</div>

                    {/* Hover buttons */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <a
                          target="_blank"
                          href={project.github}
                        className="px-4 py-2 text-sm rounded-lg bg-black/70 text-white flex items-center gap-2 hover:bg-black"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                      <a
                        target="_blank"
                        href={project.demo}
                        className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                        {/* ✅ NEW DATA ANALYSIS BUTTON */}
  {/* {project.analysis && (
    <a
      target="_blank"
      href={project.analysis}
      className="px-4 py-2 text-sm rounded-lg bg-green-500 text-white flex items-center gap-2 hover:bg-green-600"
    >
      📊 Analysis
    </a>
  )} */}
                    </div>
                    
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono text-blue-500 bg-blue-500/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-md bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-lg border border-blue-500/40 text-blue-500 hover:bg-blue-500/10 transition flex items-center gap-2 mx-auto">
              <Layers className="h-5 w-5" />
              View All Projects
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
