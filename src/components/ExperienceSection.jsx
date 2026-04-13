/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
export default function ExperienceSection() {
  const experiences = [
    {
      company: "Softiwa Technology",
      role: "Frontend Developer Intern",
      duration: "2025 — Present",
      description:
        "Working as a Frontend Developer contributing to production-grade applications and building scalable UI systems.",
      points: [
        "Built responsive UI using Angular.js & Tailwind CSS",
        "Integrated REST APIs and managed data flow",
        "Improved performance with lazy loading",
        "Maintained clean and reusable codebase",
        "Worked on real client projects with deadlines",
      ],
      tech: ["Angular.js", "Tailwind CSS", "JavaScript", "REST APIs", "Git"],
    },
  ];
  return (
    <section
      id="experience"
      className="py-16 bg-white text-black dark:bg-black dark:text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-500 font-mono mb-2">02 — WORK HISTORY</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Internship
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Real-world experience building production-grade applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 w-[2px] h-full bg-blue-500/30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12 mb-12"
            >
              {/* Dot */}
              <div className="absolute left-0 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-black"></div>

              {/* Card */}
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-blue-500 text-sm font-mono uppercase">
                    {exp.company}
                  </p>

                  <span className="text-xs bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full">
                    {exp.duration}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {exp.role}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-400 text-sm flex gap-2"
                    >
                      <span className="text-blue-500">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-md bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300"
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
