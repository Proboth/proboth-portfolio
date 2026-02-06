import { motion } from "framer-motion";
import { useState } from "react";

// Project images
import project1 from "../assets/projects/project1.svg";
import project2 from "../assets/projects/project2.svg";
import project3 from "../assets/projects/project3.svg";
// import more projects as needed

const projects = [
  {
    title: "The Coral Residences Maldives",
    description:
      "Custom Wordpress Theme Develop fully Admin Function  ",
    image: project1,
    tech: ["php", "Sass", "MySQL","Wordpress","Bootstrap",],
    liveUrl: "https://coralresidences.com/",
  },
      {
    title: "PMS System",
    description:
      "Hotel and Resorts",
    image: project2,
    tech: ["PHP", "CSS3 / Tailwind CSS","MYSQL","JavaScript (ES6+)","PHP (CodeIgniter 4)"],
    liveUrl: "https://ezytravellers.com/",
  },
  {
    title: "Aura Maldives",
    description:
      "Custom Wordpress Theme Develop fully Admin Function",
    image: project1,
    tech: ["php", "Sass", "MySQL","Wordpress","Bootstrap",],
    liveUrl: "https://aura-maldives.com/",
  },
  {
    title: "DirectFlights",
    description:
      "Flight Booking and Travel Agency Website",
    image: project1,
    tech: ["Wordpress", "css", "Javascript",],
    liveUrl: "https://directflights.net/",
  },
    {
    title: "Ezy Healthcare",
    description:
      "Medical tourism website",
    image: project1,
    tech: ["Wordpress", "css", "Javascript",],
    liveUrl: "https://ezyhealthcare.net/",
  },

    {
    title: "Ezy Travellers",
    description:
      "Travel Agency Website",
    image: project1,
    tech: ["Wordpress", "css", "Javascript",],
    liveUrl: "https://ezytravellers.com/",
  },

 
];

function Projects() {
  const [visible, setVisible] = useState(6);

  return (
    <section
      id="projects"
      className="py-28 bg-white dark:bg-gray-900 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Projects
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Selected real-world projects with production-grade architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visible).map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="
                group relative rounded-2xl overflow-hidden
                bg-gradient-to-br from-white to-gray-50
                dark:from-gray-800 dark:to-gray-900
                border border-gray-200/60 dark:border-gray-700/60
                shadow-sm hover:shadow-2xl
                hover:-translate-y-1.5
                transition-all duration-300
              "
            >
              {/* Image + Preview Overlay */}
              <div className="relative h-40 overflow-hidden rounded-t-2xl">
    
        <img
  src={`https://api.microlink.io/?screenshot=true&meta=false&embed=screenshot.url&url=${encodeURIComponent(
    project.liveUrl
  )}`}
  alt={project.title}
  loading="lazy"
  className="
    w-full h-full object-cover
    group-hover:scale-110
    transition-transform duration-700
  "
/>
                {/* Hover Overlay */}
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
                      hover:bg-white
                      transition
                    "
                  >
                    Live Preview →
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">
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
                        tracking-wide
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle Glow */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]
                  opacity-0 group-hover:opacity-100 transition
                "
              />
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        {visible < projects.length && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setVisible((v) => v + 3)}
              className="
                px-8 py-3 rounded-md
                bg-black text-white
                hover:bg-gray-800
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
