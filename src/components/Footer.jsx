import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { ArrowUp, ArrowUpRight } from "lucide-react";

const pageLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Shivamgupta1219" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/shivam-gupta-42087a255/" },
  { name: "Email", href: "mailto:sgshivamgupta206@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-3xl md:text-4xl font-semibold leading-tight tracking-[-0.035em] text-foreground">
              Have an idea?{" "}
              <span className="font-serif italic font-normal text-brand">
                Let's make it real.
              </span>
            </p>
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors duration-300 hover:bg-brand hover:text-brand-foreground"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/80 transition-colors hover:text-brand"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("mailto:")
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    className="group inline-flex items-center gap-1 text-foreground/80 transition-colors hover:text-brand"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Shivam Gupta · Built with React & Tailwind CSS
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground sm:self-auto"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full border border-border transition-colors group-hover:border-foreground/30">
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>

      {/* Oversized wordmark that rises into view */}
      <motion.p
        aria-hidden="true"
        initial={{ y: "40%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none select-none whitespace-nowrap text-center font-serif italic leading-[0.8] text-[19vw] tracking-[-0.04em] text-foreground/[0.06] -mb-[0.12em]"
      >
        Shivam Gupta
      </motion.p>
    </footer>
  );
};

export default Footer;
