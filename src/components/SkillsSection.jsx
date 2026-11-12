import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import {
  FaAngular,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { Webhook } from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML / CSS", level: 95, icon: FaHtml5 },
      { name: "JavaScript", level: 90, icon: SiJavascript },
      { name: "React.js", level: 88, icon: FaReact },
      { name: "Angular.js", level: 70, icon: FaAngular },
      { name: "Tailwind CSS", level: 90, icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85, icon: FaNodeJs },
      { name: "Express", level: 82, icon: SiExpress },
      { name: "MongoDB", level: 78, icon: SiMongodb },
      { name: "Java", level: 55, icon: FaJava },
      { name: "SQL", level: 70, icon: SiMysql },
      { name: "REST APIs", level: 88, icon: Webhook },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git / GitHub", level: 92, icon: FaGithub },
      { name: "VS Code", level: 95, icon: VscVscode },
      { name: "Figma", level: 50, icon: FaFigma },
    ],
  },
];

// Honest buckets instead of precise-looking percentages
const levelOf = (value) =>
  value >= 85
    ? { label: "Advanced", dots: 3 }
    : value >= 70
      ? { label: "Proficient", dots: 2 }
      : { label: "Familiar", dots: 1 };

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-background py-28 md:py-36"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="03"
          badge="Skills"
          title="My everyday"
          accent="toolkit"
          description="Technologies and tools I leverage to craft modern, scalable applications — from interface to database."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: catIndex * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="#fb6a2c"
                className="h-full rounded-3xl p-6 md:p-7"
              >
                <div className="mb-6 flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {category.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="space-y-1">
                  {category.skills.map((skill) => {
                    const level = levelOf(skill.level);
                    return (
                      <li
                        key={skill.name}
                        className="group/skill -mx-2 flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-muted"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-background text-foreground/70 transition-colors group-hover/skill:text-brand">
                          <skill.icon className="h-5 w-5" />
                        </span>
                        <span className="flex-1 text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                            {level.label}
                          </span>
                          <span className="flex gap-1" aria-label={level.label}>
                            {[1, 2, 3].map((dot) => (
                              <span
                                key={dot}
                                className={`h-1.5 w-1.5 rounded-full ${
                                  dot <= level.dots ? "bg-brand" : "bg-border"
                                }`}
                              />
                            ))}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Motto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-foreground"
        >
          Code. <span className="font-serif italic font-normal text-brand">Learn.</span>{" "}
          Improve. <span className="font-serif italic font-normal text-brand">Repeat.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default SkillsSection;
