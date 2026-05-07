import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon?: ReactNode;
  number?: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  number,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {number && <span className="card-number">{number}</span>}

      {icon && <div className="service-icon">{icon}</div>}

      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}