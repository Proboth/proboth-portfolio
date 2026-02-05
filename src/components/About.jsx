import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 bg-white  dark:bg-gray-900 before:absolute before:inset-0
    before:bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]
    before:opacity-0 dark:before:opacity-100
    before:pointer-events-none "  relative overflow-hidden py-24 >
      <div className="max-w-5xl mx-auto  px-6">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            A brief overview of my background and experience.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-900 dark:text-white leading-relaxed mb-6">
              I am a graduate Full Stack Developer with over
              <span className="font-medium text-gray-900 dark:text-white"> 5 years of professional experience </span>
              in the web development industry. I specialize in building scalable,
              high-performance applications with a strong focus on clean architecture
              and user experience.
            </p>

            <p className="text-gray-900 dark:text-white leading-relaxed">
              I have worked across multiple industries and collaborated with
              multinational teams, delivering solutions for diverse business
              requirements while maintaining high engineering standards.
            </p>
          </motion.div>

          {/* Right highlights */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <li className="border-l-2 border-black dark:border-white  pl-4 text-gray-900 dark:text-white">
              5+ years of hands-on experience in web development
            </li>
            <li className="border-l-2 border-black dark:border-white pl-4 text-gray-900 dark:text-white">
              Experience working with multinational clients and teams
            </li>
            <li className="border-l-2 border-black dark:border-white  pl-4 text-gray-900 dark:text-white">
              Strong background across multiple industries and domains
            </li>
            <li className="border-l-2 border-black dark:border-white pl-4 text-gray-900 dark:text-white">
              Focused on scalable architecture and maintainable code
            </li>
          </motion.ul>

        </div>

      </div>
    </section>
  );
}

export default About;
