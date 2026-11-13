import { useEffect, useRef, useState } from "react";
import {
  motion, // eslint-disable-line no-unused-vars
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import betterparker from "../assets/better_parker.png";
import campusCvImg from "../assets/CampusCV.png";
import relproImg from "../assets/relpro_group.jpg";
import SectionHeading from "./SectionHeading";

// Newest first. Each project has its own accent for its glow and number.
const projects = [
  {
    id: 5,
    title: "Relpro Group",
    tagline: "Real estate, built on trust.",
    description:
      "A multi-page website for a Meerut-based real estate developer, showcasing plotted colonies, residences and commercial parks across Delhi-NCR, with project and location pages, a gallery, and an enquiry form with WhatsApp contact.",
    category: "Freelance",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    image: relproImg,
    github: "#",
    demo: "https://www.relprogroup.co.in/",
    isFreelance: true,
    accent: "#c9a46b",
  },
  {
    id: 1,
    title: "Better Parker",
    tagline: "Cinematic realty with an AI concierge.",
    description:
      "A premium Dubai real estate website built as a freelance project. Designed with a cinematic aesthetic, smooth animations, and an integrated AI assistant (Jini) to help users find properties.",
    category: "Freelance",
    tech: ["MERN stack", "Vercel"],
    image: betterparker,
    github: "#",
    demo: "https://better-paker.vercel.app/",
    isFreelance: true,
    accent: "#38bdf8",
  },
  {
    id: 2,
    title: "Campus CV",
    tagline: "Resumes that get students hired.",
    description:
      "A full-stack AI-powered resume builder that helps students create professional resumes with smart suggestions and customizable templates. Built as my BCA major project.",
    category: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    image: campusCvImg,
    github: "https://github.com/Shivamgupta1219/Major_Project_BCA",
    demo: "https://major-project-bca.vercel.app/",
    accent: "#8b5cf6",
  },
  {
    id: 4,
    title: "Customer Trend Analysis",
    tagline: "Turning customer data into decisions.",
    description:
      "Interactive dashboard for analyzing customer behavior and market trends with data visualization.",
    category: "Data Analysis",
    tech: ["React", "D3.js", "CSS", "Python"],
    image: "📊",
    github:
      "https://github.com/Shivamgupta1219/Customer-Behavior-Dashboard-Data-Analysis-",
    demo: "#",
    accent: "#10b981",
  },
];

const GITHUB_PROFILE = "https://github.com/Shivamgupta1219";

const hasLink = (url) => Boolean(url) && url !== "#";
const pad = (n) => String(n).padStart(2, "0");
const hostOf = (url) => {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const ProjectCard = ({ project, index, total, progress, stacked, reduceMotion }) => {
  const cardRef = useRef(null);
  const primaryLink = hasLink(project.demo) ? project.demo : project.github;
  const linked = hasLink(primaryLink);
  // Imported images resolve to a URL; anything else is an emoji placeholder
  const isImage = project.image.includes("/");

  // Cards shrink back a little as the ones after them stack on top
  const targetScale = 1 - (total - 1 - index) * 0.05;
  const scale = useTransform(
    progress,
    [index / total, 1],
    [1, stacked ? targetScale : 1],
  );

  // Screenshot settles from a slight zoom as the card arrives
  const { scrollYProgress: arrival } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(arrival, [0, 1], reduceMotion ? [1, 1] : [1.15, 1]);

  // "Visit" bubble that trails the cursor over the preview
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const bubbleX = useSpring(pointerX, { stiffness: 400, damping: 32 });
  const bubbleY = useSpring(pointerY, { stiffness: 400, damping: 32 });
  const [hovering, setHovering] = useState(false);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set(e.clientX - rect.left);
    pointerY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={cardRef}
      className="mb-8 md:mb-[12vh] last:mb-0 md:sticky"
      style={{ top: `calc(6.5rem + ${index * 22}px)` }}
    >
      <motion.article
        style={{ scale, transformOrigin: "top center" }}
        className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-black/[0.07]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full opacity-25 blur-[110px]"
          style={{ background: project.accent }}
        />

        <div className="relative grid md:grid-cols-12 gap-8 md:gap-10 p-5 sm:p-7 md:p-10">
          {/* Story */}
          <div className="order-2 md:order-1 md:col-span-5 flex flex-col">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span>
                <span style={{ color: project.accent }}>{pad(index + 1)}</span>
                {" / "}
                {pad(total)}
              </span>
              <span>{project.isFreelance ? "Client work" : project.category}</span>
            </div>

            <h3 className="mt-6 md:mt-10 text-3xl md:text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.045em] text-foreground">
              {project.title}
            </h3>
            <p className="mt-2 font-serif italic text-xl md:text-2xl text-muted-foreground">
              {project.tagline}
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-foreground/75"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 md:mt-auto md:pt-10 flex flex-wrap gap-2">
              {hasLink(project.demo) && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors duration-300 hover:bg-brand hover:text-brand-foreground"
                >
                  Visit live
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-45" />
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
                  Source code
                </a>
              )}
            </div>
          </div>

          {/* Preview in a browser frame */}
          <div className="order-1 md:order-2 md:col-span-7">
            <a
              href={linked ? primaryLink : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              onPointerMove={handlePointerMove}
              onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
              onPointerLeave={() => setHovering(false)}
              className={`group/preview relative block overflow-hidden rounded-2xl border border-border bg-muted shadow-lg shadow-black/5 ${
                linked ? "md:cursor-none" : ""
              }`}
            >
              <div className="flex items-center gap-3 border-b border-border bg-background/80 px-4 py-2.5 backdrop-blur">
                <span className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </span>
                <span className="flex-1 truncate rounded-md bg-muted px-3 py-1 text-center font-mono text-[11px] text-muted-foreground">
                  {linked ? hostOf(primaryLink) : "coming soon"}
                </span>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden">
                {isImage ? (
                  <motion.img
                    src={project.image}
                    alt={`${project.title} homepage`}
                    loading="lazy"
                    style={{ scale: imageScale }}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="absolute inset-0 bg-grid" />
                    <div
                      aria-hidden="true"
                      className="absolute h-40 w-40 rounded-full opacity-30 blur-3xl"
                      style={{ background: project.accent }}
                    />
                    <span className="relative text-8xl transition-transform duration-700 group-hover/preview:scale-110 group-hover/preview:-rotate-6">
                      {project.image}
                    </span>
                  </div>
                )}
              </div>

              {linked && (
                <motion.span
                  aria-hidden="true"
                  style={{ x: bubbleX, y: bubbleY }}
                  animate={{ scale: hovering ? 1 : 0, opacity: hovering ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="pointer-events-none absolute left-0 top-0 -ml-12 -mt-12 hidden md:grid h-24 w-24 place-items-center rounded-full bg-brand text-sm font-medium text-brand-foreground shadow-xl shadow-brand/30"
                >
                  <span className="flex items-center gap-1">
                    Visit <ArrowUpRight className="h-4 w-4" />
                  </span>
                </motion.span>
              )}
            </a>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const ProjectSection = () => {
  const stackRef = useRef(null);
  const reduceMotion = useReducedMotion();
  // Cards only pin and stack on wider screens; phones scroll them normally
  const [isWide, setIsWide] = useState(
    () => window.matchMedia("(min-width: 768px)").matches,
  );
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => setIsWide(e.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    // overflow-clip (not hidden) so the sticky cards keep working
    <section
      id="projects"
      className="relative isolate overflow-clip bg-background py-28 md:py-36"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="02"
          badge="Selected work"
          title="Things I've"
          accent="shipped"
          description="Client work and personal builds — scroll through the stack to see what each one does and how it's built."
        />

        <div ref={stackRef}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
              progress={scrollYProgress}
              stacked={isWide && !reduceMotion}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <motion.a
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group mt-20 md:mt-28 flex items-center justify-between gap-6 border-y border-border py-8"
        >
          <span className="text-2xl md:text-4xl font-semibold tracking-[-0.035em] text-foreground">
            More experiments on{" "}
            <span className="font-serif italic font-normal text-brand">GitHub</span>
          </span>
          <span className="grid h-12 w-12 md:h-16 md:w-16 shrink-0 place-items-center rounded-full border border-border transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-brand-foreground">
            <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default ProjectSection;
