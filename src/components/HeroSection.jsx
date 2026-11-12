import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { ArrowRight, ArrowUpRight, Download, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaAngular, FaGitAlt, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
} from "react-icons/si";
import RotatingText from "./RotatingText";
import Magnet from "./Magnet";
import profileImg from "../assets/ShivamGupta_img.jpeg";
import { BRAND, useTheme } from "../context/theme";

const rotatingWords = ["fast", "scalable", "accessible", "delightful"];

const stats = [
  { value: "5+", label: "Projects shipped" },
  { value: "2", label: "Freelance clients" },
  { value: "1+ yr", label: "Industry experience" },
];

const techStack = [
  { name: "React", icon: FaReact },
  { name: "Angular", icon: FaAngular },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: SiJavascript },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
];

const formatIndiaTime = () =>
  new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(new Date());

// Each child fades up out of a blur, one after another
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeroSection = () => {
  const { theme } = useTheme();
  const backdropRef = useRef(null);
  const [time, setTime] = useState(formatIndiaTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatIndiaTime()), 30000);
    return () => clearInterval(id);
  }, []);

  // Light up the grid around the cursor without re-rendering
  const handlePointerMove = (e) => {
    const el = backdropRef.current;
    if (!el || e.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    el.style.setProperty("--spot", "1");
  };
  const handlePointerLeave = () => {
    backdropRef.current?.style.setProperty("--spot", "0");
  };

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative isolate overflow-hidden bg-background min-h-screen flex flex-col justify-center pt-32 md:pt-36"
    >
      {/* Backdrop: hairline grid, cursor-lit grid, one warm glow, grain */}
      <div
        ref={backdropRef}
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none [--spot:0]"
      >
        <div className="absolute inset-0 bg-grid" />
        <div
          className="absolute inset-0 bg-grid transition-opacity duration-500 [--border:var(--brand)]"
          style={{
            opacity: "calc(var(--spot) * 0.55)",
            maskImage:
              "radial-gradient(circle 260px at var(--mx, 50%) var(--my, 40%), #000, transparent)",
          }}
        />
        <div className="absolute -top-48 right-[-15%] w-[680px] h-[680px] rounded-full bg-brand/15 blur-[140px]" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[520px] h-[520px] rounded-full bg-brand-2/10 blur-[140px]" />
        <div className="noise-overlay" />
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        {/* Intro */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 pl-2.5 pr-3.5 py-1 rounded-full border border-border bg-card/70 backdrop-blur text-sm font-medium text-foreground shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new projects
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[clamp(2.9rem,7.2vw,6rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-foreground"
          >
            {/* Three fixed lines so the rotating word never reflows the layout */}
            <span className="block">I build</span>
            <span className="flex">
              <RotatingText
                texts={rotatingWords}
                highlight
                highlightColor={BRAND[theme]}
                rotationInterval={2400}
                staggerDuration={0.02}
                staggerFrom="last"
                mainClassName="font-semibold"
              />
            </span>
            <span className="block font-serif italic font-normal tracking-[-0.02em] pr-2">
              web experiences<span className="text-brand">.</span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            I'm <span className="text-foreground font-medium">Shivam Gupta</span>,
            a full-stack developer at Softiwa Technology. I take products from
            idea to production — pixel-perfect interfaces in React and Angular,
            backed by secure APIs in Node.js and Spring Boot.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <Magnet padding={50} magnetStrength={6} wrapperClassName="w-full sm:w-auto">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-medium shadow-lg shadow-foreground/10 hover:bg-brand hover:text-brand-foreground transition-colors duration-300"
              >
                View my work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Magnet>
            <Magnet padding={50} magnetStrength={6} wrapperClassName="w-full sm:w-auto">
              <a
                href="/Shivam_Gupta_Resume.pdf"
                download="Shivam_Gupta_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border bg-card/60 backdrop-blur text-foreground font-medium hover:border-foreground/30 transition-colors duration-300"
              >
                <Download className="h-4 w-4" />
                Download résumé
              </a>
            </Magnet>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-14 grid grid-cols-3 max-w-lg divide-x divide-border border-y border-border"
          >
            {stats.map((stat) => (
              // Value shown above its label
              <div key={stat.label} className="py-4 px-4 first:pl-0 flex flex-col-reverse">
                <dt className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-muted-foreground mt-1">
                  {stat.label}
                </dt>
                <dd className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative mx-auto w-full max-w-[18rem] sm:max-w-[22rem]"
        >
          <div className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-border bg-card shadow-2xl shadow-black/10 rotate-[2deg] hover:rotate-0 transition-transform duration-700 ease-out">
            <img
              src={profileImg}
              alt="Shivam Gupta"
              className="h-full w-full object-cover object-[50%_20%] grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.03] transition duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 pt-16 bg-gradient-to-t from-black/75 via-black/30 to-transparent text-white">
              <p className="font-serif italic text-3xl leading-none">
                Shivam Gupta
              </p>
              <p className="mt-2 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white/75">
                <MapPin className="h-3 w-3" />
                India · {time} IST
              </p>
            </div>
          </div>

          {/* Floating "currently" card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:block absolute -left-14 top-[14%] w-56 rounded-2xl border border-border bg-card/90 backdrop-blur-xl p-4 shadow-xl"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Currently
            </p>
            <p className="mt-1.5 text-sm font-semibold text-foreground leading-snug">
              Full Stack Developer
            </p>
            <p className="text-sm text-muted-foreground">@ Softiwa Technology</p>
            <p className="mt-2.5 inline-flex items-center gap-1 rounded-full bg-brand/10 px-2 py-0.5 text-[11px] font-medium text-brand">
              ↑ Promoted Jan 2026
            </p>
          </motion.div>

          {/* Spinning "open to work" sticker */}
          <a
            href="#contact"
            aria-label="Open to work — get in touch"
            className="group/sticker absolute -right-3 sm:-right-8 -bottom-8 w-28 h-28 rounded-full bg-brand text-brand-foreground shadow-xl shadow-brand/30 grid place-items-center hover:scale-105 transition-transform"
          >
            <motion.svg
              viewBox="0 0 100 100"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <defs>
                <path
                  id="sticker-circle"
                  d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                />
              </defs>
              <text className="fill-current font-mono text-[9px] uppercase tracking-[0.32em]">
                <textPath href="#sticker-circle">
                  Open to work • Let's talk •
                </textPath>
              </text>
            </motion.svg>
            <ArrowUpRight className="h-7 w-7 transition-transform duration-300 group-hover/sticker:rotate-45" />
          </a>
        </motion.div>
      </div>

      {/* Tech strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="relative mt-24 border-y border-border bg-card/40 py-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
      >
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech.name}-${i}`}
              aria-hidden={i >= techStack.length}
              className="flex items-center gap-2.5 pr-12 whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors"
            >
              <tech.icon className="h-5 w-5" />
              <span className="font-medium">{tech.name}</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
