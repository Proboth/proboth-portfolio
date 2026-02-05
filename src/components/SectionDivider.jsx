import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <div className="relative mb-1 flex justify-center">
      {/* Line */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="origin-left h-px w-80
                   bg-gradient-to-r
                   from-transparent via-gray-400 to-transparent
                   dark:via-gray-400"
      />

      {/* Center dot */}
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="absolute -top-1 w-2 h-2 rounded-full
                   bg-indigo-500 dark:bg-indigo-400"
      />
    </div>
  );
}

export default SectionDivider;
