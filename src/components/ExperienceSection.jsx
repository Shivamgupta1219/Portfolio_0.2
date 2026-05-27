import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Softiwa Technology",
      role: "Full Stack Developer",
      duration: " JAN 2026 — Present",
      badge: "Promoted",
      description:
        "Promoted from Frontend Developer Intern to Full Stack Developer. Now contributing across the full stack — building scalable UI systems, designing APIs, and shipping production-grade features end-to-end.",
      points: [
        "Promoted to Full Stack role after demonstrating strong frontend impact",
        "Building end-to-end features across frontend, backend & database layers",
        "Designing and integrating REST APIs with secure auth and validation",
        "Crafting responsive, accessible UIs with Angular.js & Tailwind CSS",
        "Optimizing performance with lazy loading and code-splitting",
        "Collaborating with clients on real-world projects with tight deadlines",
      ],
      tech: [
        "Angular.js",
        "Spring Boot",
        "Java",
        "PostgreSQL",
        "Tailwind CSS",
        "REST APIs",
        "Git",
        
      ],
    },
    {
      company: "Softiwa Technology",
      role: "Frontend Developer Intern",
      duration: "2025",
      description:
        "Started as a Frontend Developer Intern, contributing to production-grade applications and building scalable, reusable UI systems.",
      points: [
        "Built responsive UI using Angular.js & Tailwind CSS",
        "Integrated REST APIs and managed application data flow",
        "Improved performance with lazy loading techniques",
        "Maintained a clean, reusable, and well-documented codebase",
        "Delivered real client projects within strict deadlines",
      ],
      tech: ["Angular.js", "Tailwind CSS", "JavaScript", "REST APIs", "Git"],
    },
  ];
  return (
    <section
      id="experience"
      className="py-24 bg-white text-black dark:bg-black dark:text-white relative overflow-hidden"
    >
      {/* Background Glow - more subtle */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-mono text-blue-500 tracking-widest uppercase">
              Work History
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world experience building production-grade applications and
            collaborating with cross-functional teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 w-[2px] h-full bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-12 mb-12 group"
            >
              {/* Dot - more polished */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="absolute left-0 top-3 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-white dark:border-black shadow-lg shadow-blue-500/50"
              >
                <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30" />
              </motion.div>

              {/* Card */}
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-7 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-500">
                <div className="flex flex-wrap justify-between items-center mb-3 gap-2">
                  <p className="text-blue-500 text-sm font-mono uppercase tracking-wider font-semibold">
                    {exp.company}
                  </p>

                  <span className="text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 px-3 py-1 rounded-full font-medium">
                    {exp.duration}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {exp.role}
                  </h3>
                  {exp.badge && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold shadow-lg shadow-green-500/30"
                    >
                      <span className="text-sm leading-none">↑</span>
                      {exp.badge}
                    </motion.span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-5 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2.5 mb-5">
                  {exp.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="text-gray-600 dark:text-gray-400 text-sm flex gap-3 items-start"
                    >
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-white/5">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-md bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 font-medium hover:bg-blue-500/10 hover:text-blue-500 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
