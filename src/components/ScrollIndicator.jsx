import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.6,
  });

  return (
    <div className="pointer-events-none fixed right-8 top-0 h-full flex items-start z-30">
      <div className="relative w-[3px] h-full bg-gray-200 dark:bg-gray-700 rounded-full">

        {/* Animated fill */}
        <motion.div
          style={{ scaleY: smooth }}
          className="origin-top absolute top-0 left-0 w-full h-full
                     bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600
                     rounded-full"
        />

        {/* Moving glowing dot */}
        <motion.div
          style={{ top: smooth }}
          className="absolute left-1/2 -translate-x-1/2
                     w-4 h-4 rounded-full
                     bg-blue-400 shadow-lg shadow-blue-400/60"
        />
      </div>
    </div>
  );
}
