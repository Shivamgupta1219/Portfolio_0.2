import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import {
  ArrowRight,
  Book,
  BookOpen,
  Briefcase,
  Code2,
  Coffee,
  Gamepad2,
  GraduationCap,
  Heart,
  Moon,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import CountUp from "./CountUp";
import SectionHeading from "./SectionHeading";
import profileImg from "../assets/ShivamGupta_img.jpeg";

const timeline = [
  {
    icon: GraduationCap,
    title: "Learning Journey",
    description: "Started with HTML & CSS, fell in love with code",
    year: "2021",
    achievement: "First 'Hello World' felt like magic",
  },
  {
    icon: Code2,
    title: "Building Projects",
    description: "Created 20+ projects to sharpen skills",
    year: "2022",
    achievement: "Learned by breaking things (a lot)",
  },
  {
    icon: BookOpen,
    title: "Deep Diving",
    description: "Mastered React, Node.js & modern tools",
    year: "2023",
    achievement: "Documentation became my best friend",
  },
  {
    icon: Briefcase,
    title: "Going Pro",
    description: "Ready to make an impact in the industry",
    year: "2024",
    achievement: "Building products that matter",
  },
];

const coreValues = [
  { icon: Sparkles, title: "Clean Code", description: "Writing code that humans can read" },
  { icon: Zap, title: "Fast Learner", description: "Adapting to new tech quickly" },
  { icon: Heart, title: "User-Focused", description: "Design with empathy and purpose" },
  { icon: Target, title: "Problem Solver", description: "Turning challenges into solutions" },
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
    stat: "Peak hours: 10PM–2AM",
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
  { label: "Real projects built", value: 5, suffix: "+" },
  { label: "Coffee consumed", value: 2000, suffix: "+" },
  { label: "Lines of code", value: 100000, suffix: "+" },
  { label: "Hours learning", value: 5000, suffix: "+" },
];

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};
const ease = [0.22, 1, 0.36, 1];

const SubHeading = ({ children }) => (
  <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
    {children}
  </p>
);

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-clip bg-background py-28 md:py-36"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="04"
          badge="About"
          title="A little"
          accent="about me"
          description="A passionate developer crafting digital experiences with code and creativity."
        />

        <div className="grid lg:grid-cols-12 gap-14 lg:gap-12">
          {/* Profile column, pinned while the story scrolls */}
          <motion.aside
            {...reveal}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-5 lg:sticky lg:top-28 self-start"
          >
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={profileImg}
                  alt="Shivam Gupta"
                  loading="lazy"
                  className="h-full w-full object-cover object-[50%_18%] grayscale-[25%] transition duration-700 hover:grayscale-0 hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 md:p-7">
                <p className="font-serif italic text-3xl leading-none text-foreground">
                  Shivam Gupta
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Full Stack Developer
                </p>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Self-taught developer passionate about building beautiful,
                  functional web applications that solve real problems with
                  clean, scalable code.
                </p>

                <dl className="mt-6 grid grid-cols-2 border-t border-l border-border">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse border-b border-r border-border p-4"
                    >
                      <dt className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        {stat.label}
                      </dt>
                      <dd className="text-2xl font-semibold tracking-tight text-foreground">
                        <CountUp from={0} to={stat.value} duration={2} separator="," />
                        <span className="text-brand">{stat.suffix}</span>
                      </dd>
                    </div>
                  ))}
                </dl>

                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3.5 font-medium text-background transition-colors duration-300 hover:bg-brand hover:text-brand-foreground"
                >
                  Let's collaborate
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.aside>

          <div className="lg:col-span-7 space-y-16">
            {/* Journey */}
            <div>
              <SubHeading>My journey</SubHeading>
              <ol className="relative border-l border-border ml-1.5">
                {timeline.map((item, index) => (
                  <motion.li
                    key={item.year}
                    {...reveal}
                    transition={{ delay: index * 0.08, duration: 0.7, ease }}
                    className="group relative pl-8 pb-10 last:pb-0"
                  >
                    <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-border transition-colors duration-300 group-hover:bg-brand" />
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-mono text-sm text-brand">{item.year}</span>
                      <h3 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground">
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                    <p className="mt-1.5 font-serif italic text-lg text-foreground/70">
                      “{item.achievement}”
                    </p>
                  </motion.li>
                ))}
              </ol>
            </div>

            {/* Values */}
            <div>
              <SubHeading>What I value</SubHeading>
              <div className="grid sm:grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    {...reveal}
                    transition={{ delay: index * 0.06, duration: 0.6, ease }}
                    className="group rounded-2xl border border-border bg-card p-5 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-brand/40"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand">
                      <value.icon className="h-5 w-5" />
                    </span>
                    <h4 className="mt-4 font-semibold tracking-tight text-foreground">
                      {value.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fun facts */}
            <div>
              <SubHeading>Behind the code</SubHeading>
              <div className="grid sm:grid-cols-2 gap-4">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={fact.title}
                    {...reveal}
                    transition={{ delay: index * 0.06, duration: 0.6, ease }}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-5"
                  >
                    <fact.icon className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                    <div>
                      <h4 className="font-semibold tracking-tight text-foreground">
                        {fact.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">{fact.fact}</p>
                      <p className="mt-3 inline-flex rounded-full bg-muted px-2.5 py-0.5 font-mono text-[11px] text-foreground/80">
                        {fact.stat}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <motion.figure
          {...reveal}
          transition={{ duration: 0.9, ease }}
          className="mt-28 md:mt-36 text-center"
        >
          <blockquote className="mx-auto max-w-4xl text-3xl md:text-5xl font-semibold leading-[1.15] tracking-[-0.035em] text-foreground">
            “Code is not just about making things work — it's about{" "}
            <span className="font-serif italic font-normal text-brand">
              crafting experiences
            </span>{" "}
            that people love to use.”
          </blockquote>
          <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            — My philosophy
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default AboutSection;
