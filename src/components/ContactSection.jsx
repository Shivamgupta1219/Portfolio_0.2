import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  ArrowUpRight,
  Check,
  CheckCircle,
  Copy,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";

const EMAIL = "sgshivamgupta206@gmail.com";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@Shivamgupta1219",
    href: "https://github.com/Shivamgupta1219",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "in/shivam-gupta",
    href: "https://www.linkedin.com/in/shivam-gupta-42087a255/",
  },
  {
    icon: Mail,
    label: "Email",
    handle: EMAIL,
    href: `mailto:${EMAIL}`,
  },
];

const inputClass =
  "w-full mt-2 px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/70 outline-none transition-[border-color,box-shadow] duration-300 focus:border-brand focus:ring-4 focus:ring-brand/15";
const labelClass =
  "font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground";

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const updateField = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setError("");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }
    if (formData.message.trim().length < 10) {
      setError("Message must be at least 10 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing");
      setError(`The form is unavailable right now — please email ${EMAIL}.`);
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Email error:", error);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-background py-28 md:py-36"
    >
      {/* One warm glow behind the form */}
      <div
        aria-hidden="true"
        className="absolute -z-10 right-[-10%] top-1/3 h-[520px] w-[520px] rounded-full bg-brand/10 blur-[140px]"
      />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          index="05"
          badge="Contact"
          title="Let's build something"
          accent="together"
          description="Have a project in mind or want to collaborate? Drop a message and I'll get back within 24 hours."
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Direct channels */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className={labelClass}>Prefer email?</p>
            <div className="mt-3 flex items-center gap-2 rounded-2xl border border-border bg-card p-2 pl-4 shadow-sm">
              <Mail className="h-4 w-4 shrink-0 text-brand" />
              <a
                href={`mailto:${EMAIL}`}
                className="flex-1 truncate text-sm font-medium text-foreground hover:text-brand transition-colors"
              >
                {EMAIL}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 rounded-xl bg-muted px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <p className={`${labelClass} mt-10`}>Find me online</p>
            <ul className="mt-3 border-t border-border">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    {...(social.href.startsWith("mailto:")
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex items-center gap-4 border-b border-border py-4 transition-colors"
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-brand" />
                    <span className="font-medium text-foreground">{social.label}</span>
                    <span className="flex-1 truncate text-right text-sm text-muted-foreground">
                      {social.handle}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:text-foreground" />
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Usually replies within 24 hours
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <SpotlightCard spotlightColor="#fb6a2c" className="rounded-3xl p-6 md:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle className="mb-6 h-16 w-16 text-emerald-500" />
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    Message sent
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                      className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400"
                    >
                      {error}
                    </motion.div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className={labelClass}>
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={updateField("name")}
                        maxLength="100"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className={labelClass}>
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={updateField("email")}
                        maxLength="255"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows="6"
                      placeholder="Tell me about your project…"
                      value={formData.message}
                      onChange={updateField("message")}
                      maxLength="1000"
                      className={`${inputClass} resize-none`}
                    />
                    <p className="mt-1.5 text-right font-mono text-[11px] text-muted-foreground">
                      {formData.message.length}/1000
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3.5 font-medium text-background transition-colors duration-300 hover:bg-brand hover:text-brand-foreground disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isLoading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/30 border-t-background" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
