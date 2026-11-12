import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { ArrowUpRight, Github } from "lucide-react";
import betterparker from "../assets/better_parker.png";
import campusCvImg from "../assets/CampusCV.png";
import relproImg from "../assets/relpro_group.jpg";
import SectionHeading from "./SectionHeading";

const categories = ["All", "Full Stack", "Data Analysis", "Freelance"];

// Newest first; the first project is featured full-width under "All"
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
    title: "Campus CV — Major Project BCA",
    description:
      "A full-stack AI-powered resume builder that helps students create professional resumes with smart suggestions and customizable templates.",
    category: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    image: campusCvImg,
    github: "https://github.com/Shivamgupta1219/Major_Project_BCA",
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
];

const hasLink = (url) => Boolean(url) && url !== "#";

const ProjectCard = ({ project, featured, index }) => {
  const primaryLink = hasLink(project.demo) ? project.demo : project.github;
  // Imported images resolve to a URL; anything else is an emoji placeholder
  const isImage = project.image.includes("/");

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group ${featured ? "md:col-span-2" : ""}`}
    >
      <div className="h-full flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-[border-color,box-shadow] duration-500 hover:border-foreground/15 hover:shadow-2xl hover:shadow-black/5">
        {/* Preview */}
        <a
          href={hasLink(primaryLink) ? primaryLink : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className={`relative block overflow-hidden bg-muted ${
            featured ? "aspect-[16/10] md:aspect-[2/1]" : "aspect-[16/10]"
          }`}
        >
          {isImage ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <div className="absolute inset-0 bg-grid" />
              <span className="relative text-7xl transition-transform duration-700 group-hover:scale-110">
                {project.image}
              </span>
            </div>
          )}

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {project.isFreelance && (
              <span className="rounded-full bg-background/85 backdrop-blur px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                Client work
              </span>
            )}
            {hasLink(project.demo) && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-background/85 backdrop-blur px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Live
              </span>
            )}
          </div>

          {hasLink(primaryLink) && (
            <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-foreground text-background opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          )}
        </a>

        {/* Details */}
        <div
          className={`flex flex-1 flex-col gap-6 p-6 md:p-8 ${
            featured ? "md:flex-row md:items-end md:justify-between" : ""
          }`}
        >
          <div className="flex-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {String(index + 1).padStart(2, "0")} · {project.category}
            </p>
            <h3
              className={`mt-3 font-semibold tracking-[-0.03em] text-foreground ${
                featured ? "text-2xl md:text-4xl" : "text-2xl"
              }`}
            >
              {project.title}
            </h3>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/75"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 gap-2">
            {hasLink(project.demo) && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors duration-300 hover:bg-brand hover:text-brand-foreground"
              >
                Visit live
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {hasLink(project.github) && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-foreground/30"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Feature the newest project under "All", and stretch any card that
  // would otherwise sit alone in the last row
  const isFeatured = (index) => {
    const leadFeatured = activeFilter === "All";
    if (leadFeatured && index === 0) return true;
    const rest = filteredProjects.length - (leadFeatured ? 1 : 0);
    const position = index - (leadFeatured ? 1 : 0);
    return rest % 2 === 1 && position === rest - 1;
  };

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-background py-28 md:py-36"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="02"
          badge="Selected work"
          title="Things I've"
          accent="shipped"
          description="A curated selection of client work and personal builds — showcasing my technical skills, design sensibility, and problem-solving approach."
          className="mb-12"
        />

        {/* Filter tabs with a sliding ink pill */}
        <div className="mb-10 inline-flex max-w-full overflow-x-auto rounded-full border border-border bg-card/60 p-1 shadow-sm">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeFilter === category && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{category}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                featured={isFeatured(index)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
