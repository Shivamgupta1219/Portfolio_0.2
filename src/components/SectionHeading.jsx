import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

// Shared editorial heading: numbered mono label, tight sans title with a
// serif italic accent, and the description set beside it on wide screens
const SectionHeading = ({
  index,
  badge,
  title,
  accent,
  description,
  className = "mb-16 md:mb-20",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className={`grid gap-6 md:grid-cols-12 md:items-end ${className}`}
  >
    <div className="md:col-span-7">
      <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {index && <span className="text-brand">{index}</span>}
        <span className="h-px w-10 bg-border" />
        {badge}
      </p>
      <h2 className="text-4xl md:text-6xl font-semibold leading-[1.02] tracking-[-0.045em] text-foreground">
        {title}{" "}
        <span className="font-serif italic font-normal tracking-[-0.01em] text-brand">
          {accent}
        </span>
      </h2>
    </div>

    {description && (
      <p className="md:col-span-5 md:pb-2 text-base md:text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
