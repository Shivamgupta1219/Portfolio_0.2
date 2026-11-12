import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "Softiwa Technology",
    role: "Full Stack Developer",
    duration: "Jan 2026 — Present",
    current: true,
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

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-background py-28 md:py-36"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="01"
          badge="Experience"
          title="Where I've been"
          accent="building"
          description="Real-world experience shipping production-grade applications and collaborating with cross-functional teams."
        />

        {/* One editorial row per role: dates on the left, details on the right */}
        <ol className="border-t border-border">
          {experiences.map((exp, index) => (
            <motion.li
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-b border-border"
            >
              {/* Accent rule that grows on hover */}
              <span className="absolute left-0 top-[-1px] h-px w-0 bg-brand transition-all duration-700 group-hover:w-full" />

              <div className="md:col-span-3">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {exp.duration}
                </p>
                <p className="mt-3 text-sm font-medium text-foreground">
                  {exp.company}
                </p>
                {exp.current && (
                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Current role
                  </span>
                )}
              </div>

              <div className="md:col-span-9">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.035em] text-foreground transition-colors duration-300 group-hover:text-brand">
                    {exp.role}
                  </h3>
                  {exp.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand">
                      ↑ {exp.badge}
                    </span>
                  )}
                </div>

                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                <ul className="mt-7 grid sm:grid-cols-2 gap-x-10 gap-y-3">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
