import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 bg-white dark:bg-gray-900  before:absolute before:inset-0
    before:bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]
    before:opacity-0 dark:before:opacity-100
    before:pointer-events-none scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-purple-500" />

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            A brief overview of my professional journey and experience.
          </p>
        </motion.div>

        {/* ===== Content Grid ===== */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - Main Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a Full Stack Developer with over
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                {" "}5+ years of professional experience{" "}
              </span>
              building scalable, high-performance web applications.
            </p>

            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              My expertise lies in crafting clean user interfaces, designing
              maintainable backend systems, and delivering production-ready
              solutions across multiple industries.
            </p>

            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              I collaborate with multinational teams and focus on building
              reliable systems with modern development practices.
            </p>
          </motion.div>

          {/* RIGHT SIDE - Premium Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              "5+ years of hands-on development experience",
              "Worked with multinational teams",
              "Experience across multiple industries",
              "Strong focus on scalable architecture",
            ].map((item, i) => (
              <div
                key={i}
                className="
                  p-6 rounded-2xl
                  bg-gray-50 dark:bg-gray-800
                  border border-gray-200 dark:border-gray-700
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <div className="w-2 h-2 rounded-full bg-indigo-500 mb-4" />
                <p className="text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
