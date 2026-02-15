import { motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";


// Project images
import project2 from "../assets/projects/PMS.png";

const projects = [
  {
    title: "The Coral Residences Maldives",
    description: "Custom Wordpress Theme Develop fully Admin Function",
    image: null,
    tech: ["PHP", "Sass", "MySQL", "WordPress", "Bootstrap"],
    liveUrl: "https://coralresidences.com/",
  },
  {
    title: "PMS System",
    description: "Hotel and Resorts",
    image: project2,
    tech: ["PHP", "Tailwind CSS", "MySQL", "JavaScript", "CodeIgniter 4"],
    liveUrl: null,
  },
  {
    title: "Aura Maldives",
    description: "Custom Wordpress Theme Develop fully Admin Function",
    image: null,
    tech: ["PHP", "Sass", "MySQL", "WordPress", "Bootstrap"],
    liveUrl: "https://aura-maldives.com/",
  },
  {
    title: "DirectFlights",
    description: "Flight Booking and Travel Agency Website",
    image: null,
    tech: ["WordPress", "CSS", "JavaScript"],
    liveUrl: "https://directflights.net/",
  },
  {
    title: "Ezy Healthcare",
    description: "Medical tourism website",
    image: null,
    tech: ["WordPress", "CSS", "JavaScript"],
    liveUrl: "https://ezyhealthcare.net/",
  },
  {
    title: "Ezy Travellers",
    description: "Travel Agency Website",
    image: null,
    tech: ["WordPress", "CSS", "JavaScript"],
    liveUrl: "https://ezytravellers.com/",
  },
  {
    title: "EDUK8U",
    description: "Educational Website",
    image: null,
    tech: ["WordPress", "CSS", "JavaScript"],
    liveUrl: "https://www.eduk8u.com/",
  },
  {
    title: "RD Entertainments",
    description: "Entertainments Website",
    image: null,
    tech: ["WordPress", "CSS", "JavaScript"],
    liveUrl: "https://rd-entertainments.com/",
  },
];

function Projects() {
  const [visible, setVisible] = useState(6);

  return (
    <section
      id="projects"
      className="py-28 bg-white dark:bg-gray-900 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Projects
            </h2>
<div className="mx-auto mt-4 h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-purple-500" />

            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Selected real-world projects with production-grade architecture.
            </p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <Reveal delay={0.2}>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, visible).map((project, index) => (
             <TiltCard
  className="
    group relative rounded-2xl overflow-hidden
    bg-gradient-to-br from-white to-gray-50
    dark:from-gray-800 dark:to-gray-900
    border border-gray-200/60 dark:border-gray-700/60
    shadow-sm hover:shadow-2xl
    transition-all duration-300
  "
>

                {/* Image */}
                <div className="relative h-44 overflow-hidden"style={{ transform: "translateZ(30px)" }}
>
                  <img
                    loading="lazy"
                    src={
                      project.liveUrl
                        ? `https://api.microlink.io/?screenshot=true&meta=false&embed=screenshot.url&url=${encodeURIComponent(
                            project.liveUrl
                          )}`
                        : project.image || "/fallback.png"
                    }
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = project.image || "/fallback.png";
                    }}
                  />

                  {/* Hover Overlay */}
                  {project.liveUrl && (
                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t from-black/80 via-black/40 to-transparent
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                        flex items-center justify-center
                      "
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          px-5 py-2 text-sm font-medium rounded-full
                          bg-white/90 backdrop-blur
                          text-gray-900
                          hover:bg-white transition
                        "
                      >
                        Live Preview →
                      </a>
                    </div>
                  )}
                </div>

                {/* Content */}
               <div className="p-6 relative z-10" style={{ transform: "translateZ(30px)" }}>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="
                          text-[11px] px-3 py-1 rounded-full
                          bg-gray-200/70 dark:bg-gray-700/60
                          text-gray-700 dark:text-gray-300
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]
                    opacity-0 group-hover:opacity-100
                    transition duration-300
                  "
                />
              </TiltCard>

            ))}
          </div>
        </Reveal>

        {/* Load More Button */}
        {visible < projects.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setVisible((v) => v + 3)}
              className="
                px-8 py-3 rounded-md
                bg-black text-white
                hover:bg-gray-800
                dark:bg-white dark:text-black dark:hover:bg-gray-200
                transition
              "
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
