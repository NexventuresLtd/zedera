// components/ClientLogos.tsx
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Logo = {
  name: string;
  image?: string;   // path to image (public folder or absolute URL)
  alt?: string;     // alt text (recommended)
  href?: string;    // optional link to client's site
};

type ClientLogosProps = {
  logos?: Logo[];
  /**
   * Optionally override Tailwind grid columns classes.
   * Default: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
   */
  gridClassName?: string;
};

const defaultLogos: Logo[] = [
  { name: "Client 1", image: "/landscape1.png", alt: "Client 1 logo", href: "/" },
  { name: "Client 2", image: "/landscape1.png", alt: "Client 2 logo" },
  { name: "Client 3", image: "/landscape1.png", alt: "Client 3 logo" },
  { name: "Client 4", image: "/landscape1.png", alt: "Client 4 logo" },
  { name: "Client 5", image: "/landscape1.png", alt: "Client 5 logo" },
  { name: "Client 6", image: "/landscape1.png", alt: "Client 6 logo" }
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.12
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

/**
 * ClientLogos
 *
 * - Reveals when scrolled into view (uses react-intersection-observer).
 * - Uses Framer Motion for staggered reveal & hover animations.
 * - Accepts a `logos` prop to supply logos; falls back to `defaultLogos`.
 */
const ClientLogos: React.FC<ClientLogosProps> = ({
  logos = defaultLogos,
  gridClassName = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center"
}) => {
  // useInView returns a ref callback (assignable to ref prop) and boolean inView
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25
  });

  return (
    <motion.div
      // cast is safe — motion components forward refs; the callback ref from useInView is compatible
      ref={ref as React.Ref<HTMLDivElement>}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={gridClassName}
      role="list"
      aria-label="Client logos"
    >
      {logos.map((logo, i) => {
        const content = (
          <div
            className="h-16 w-32 flex items-center justify-center rounded-md p-2"
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #89B8CA",
              boxShadow: "0 4px 6px rgba(30, 86, 108, 0.08)"
            }}
            aria-hidden={!logo.image ? undefined : "false"}
          >
            {logo.image ? (
              // regular img tag so this works in CRA / Vite / Next.js (if Next, you can swap for next/image)
              <img
                src={logo.image}
                alt={logo.alt ?? logo.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                decoding="async"
                // small inline style to prevent overflow in weird layouts
                style={{ display: "block", maxHeight: "3.25rem", maxWidth: "8rem" }}
              />
            ) : (
              // fallback text if no image provided
              <span className="font-medium" style={{ color: "#367589" }}>
                {logo.name}
              </span>
            )}
          </div>
        );

        return (
          <motion.div
            key={`${logo.name}-${i}`}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex justify-center"
            role="listitem"
          >
            {logo.href ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${logo.name} website`}
                className="focus:outline-none"
                // ensure anchor contents don't shrink inside grid
                style={{ display: "inline-block" }}
              >
                {content}
              </a>
            ) : (
              content
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ClientLogos;
