import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import profileImg from "../assets/profile.png";

function Hero() {
  /* ================= PARALLAX ================= */
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 600], [0, 120]);
  const yMedium = useTransform(scrollY, [0, 600], [0, 220]);

  /* ================= TYPING ROLE ================= */
  const roles = [
    "Full Stack Developer",
    "Frontend Engineer",
    "Backend Engineer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let charIndex = 0;

    const typing = setInterval(() => {
      setDisplayText(currentRole.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === currentRole.length) {
        clearInterval(typing);
        setTimeout(() => {
          setDisplayText("");
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1200);
      }
    }, 70);

    return () => clearInterval(typing);
  }, [roleIndex]);

  /* ================= STAGGER VARIANTS ================= */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-16
                 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* ================= PARALLAX BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          style={{ y: ySlow }}
          className="absolute top-[-35%] left-1/2 -translate-x-1/2
                     w-[900px] h-[900px]
                     bg-indigo-500/20 dark:bg-indigo-500/30
                     rounded-full blur-[160px]"
        />

        <motion.div
          style={{ y: yMedium }}
          className="absolute top-[20%] left-[10%]
                     w-[600px] h-[600px]
                     bg-purple-500/20 dark:bg-purple-500/30
                     rounded-full blur-[140px]"
        />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        {/* Profile Image */}
 <motion.div
  variants={item}
  className="relative mx-auto mb-8 w-32 h-32 rounded-full overflow-hidden"
>
  <img
    src={profileImg}
    alt="Proboth Ravihara"
    className="w-full h-full object-cover
               object-[50%_25%]
               scale-120
               transition-transform duration-500
               hover:scale-135"
/>
</motion.div>


        {/* Intro */}
        <motion.p
          variants={item}
          className="text-sm tracking-widest uppercase
                     text-gray-500 dark:text-gray-400"
        >
          Hello, I’m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={item}
          className="mt-4 text-5xl md:text-6xl font-extrabold
                     bg-gradient-to-r from-gray-900 to-gray-600
                     dark:from-white dark:to-gray-300
                     bg-clip-text text-transparent"
        >
          PROBOTH RAVIHARA
        </motion.h1>

        {/* Accent underline */}
        <motion.div
          variants={item}
          className="mx-auto mt-4 h-[2px] w-24
                     bg-gradient-to-r from-indigo-500 to-purple-500"
        />

        {/* Typing Role */}
        <motion.h2
          variants={item}
          className="mt-6 text-xl md:text-2xl
                     text-gray-700 dark:text-gray-300
                     min-h-[2.5rem]"
        >
          <span className="text-indigo-600 dark:text-indigo-400">
            {displayText}
          </span>
          <span className="ml-1 animate-pulse">|</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-6 max-w-xl mx-auto
                     text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          I build scalable, high-performance web applications — crafting clean
          user interfaces with React and building reliable backend systems
          with modern APIs and databases.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-10 flex justify-center gap-6"
        >
         <a
  href="#projects"
  onClick={() => {
    if (window.gtag) {
      window.gtag('event', 'view_projects_click', {
        event_category: 'engagement',
        event_label: 'View Projects Button'
      });
    }
  }}
  className="px-6 py-3 rounded-md font-medium
             bg-gradient-to-r from-indigo-600 to-purple-600
             text-white shadow-lg
             hover:shadow-indigo-500/40
             hover:-translate-y-1 hover:scale-[1.02]
             transition-all duration-300"
>
  View Projects
</a>


<a
  href={`${import.meta.env.BASE_URL}Proboth_Ravihara_Resume_new.pdf`}
  download
  onClick={() => {
    if (window.gtag) {
      window.gtag('event', 'resume_download', {
        event_category: 'engagement',
        event_label: 'Resume Download'
      });
    }
  }}
  className="px-6 py-3 rounded-md font-medium
             bg-gradient-to-r from-indigo-600 to-purple-600
             text-white shadow-lg
             hover:shadow-indigo-500/40
             hover:-translate-y-1 hover:scale-[1.02]
             transition-all duration-300"
>
  Download Resume
</a>









        </motion.div>

        {/* Scroll Indicator */}
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ 
    y: [0, 10, 0],
    opacity: [0.6, 1, 0.6]
  }}
  transition={{
    duration: 1.6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="mt-16 flex flex-col items-center
             text-xs tracking-widest
             text-gray-500 dark:text-gray-400"
>
           <span>SCROLL</span>
  <span className="mt-2 text-lg">↓</span>
</motion.div>
</motion.div>
    </section>
  );
}



export default Hero;
