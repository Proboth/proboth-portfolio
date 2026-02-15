import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import profileImg from "../assets/profile.png";
import CubeScene from "../components/CubeScene";
import HeroScrollGate from "../components/HeroScrollGate"; // if you're using it


function Hero() {
  /* ================= PARALLAX ================= */
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 600], [0, 120]);
  const yMedium = useTransform(scrollY, [0, 600], [0, 220]);

  /* ================= TYPING ROLE ================= */
  const roles = ["Full Stack Developer", "Frontend Engineer", "Backend Engineer"];
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
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center
                 pt-20 md:pt-24
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
        className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">
            <div className="max-w-xl mx-auto lg:mx-0">
              {/* Profile Image */}
              <motion.div
                variants={item}
                className="relative mx-auto lg:mx-0 mb-7 w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden"
              >
                <img
                  src={profileImg}
                  alt="Proboth Ravihara"
                  className="w-full h-full object-cover object-[50%_25%] scale-120
                             transition-transform duration-500 hover:scale-135"
                />
              </motion.div>

              {/* Intro */}
              <motion.p
                variants={item}
                className="text-xs md:text-sm tracking-[0.25em] uppercase
                           text-gray-500 dark:text-gray-400"
              >
                Hello, I’m
              </motion.p>

              {/* Name */}
              <motion.h1
                variants={item}
                className="mt-4 text-5xl md:text-6xl font-extrabold leading-[1.05]
                           bg-gradient-to-r from-gray-900 to-gray-600
                           dark:from-white dark:to-gray-300
                           bg-clip-text text-transparent"
              >
                PROBOTH <br className="hidden lg:block" />
                RAVIHARA
              </motion.h1>

              {/* Accent underline */}
              <motion.div
                variants={item}
                className="mx-auto lg:mx-0 mt-4 h-[2px] w-24
                           bg-gradient-to-r from-indigo-500 to-purple-500"
              />

              {/* Typing Role */}
              <motion.h2
                variants={item}
                className="mt-6 text-lg md:text-2xl
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
                className="mt-5 text-base md:text-lg
                           text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                I build scalable, high-performance web applications — crafting clean
                user interfaces with React and building reliable backend systems
                with modern APIs and databases.
              </motion.p>

              {/* Buttons + Scroll Indicator Wrapper */}
              <motion.div
                variants={item}
                className="mt-9 flex flex-col items-center lg:items-start"
              >
                {/* Buttons row */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a
                    href="#projects"
                    onClick={() => {
                      if (window.gtag) {
                        window.gtag("event", "view_projects_click", {
                          event_category: "engagement",
                          event_label: "View Projects Button",
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
                        window.gtag("event", "resume_download", {
                          event_category: "engagement",
                          event_label: "Resume Download",
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
                </div>

                {/* Scroll Indicator - centered under BOTH buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-8 flex flex-col items-center
                             text-[10px] tracking-[0.25em]
                             text-gray-500 dark:text-gray-400"
                >
                  <span>SCROLL</span>
                  <span className="mt-2 text-lg tracking-normal">↓</span>
                </motion.div>
              </motion.div>
            </div>
          </div>

{/* RIGHT SIDE - Cube Scene */}
<motion.div variants={item} className="w-full flex justify-center lg:justify-end">
  <div
    className="
      w-full
      max-w-[360px] sm:max-w-[420px] md:max-w-[520px]
      lg:max-w-[560px] xl:max-w-[620px]
      h-[300px] sm:h-[380px] md:h-[520px]
      lg:h-[560px] xl:h-[620px]
    "
  >
  
      <CubeScene />

  </div>
</motion.div>



        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
