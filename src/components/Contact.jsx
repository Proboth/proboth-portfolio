import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

function Contact() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[820px] h-[820px] rounded-full blur-[140px] bg-indigo-500/10 dark:bg-indigo-500/15" />
        <div className="absolute top-40 -left-24 w-[520px] h-[520px] rounded-full blur-[120px] bg-sky-500/10 dark:bg-sky-500/15" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Contact
          </h2>
             <div className="mx-auto mt-4 h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-purple-500" />
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Interested in working together or discussing a project? Let’s connect.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative rounded-3xl p-6 md:p-10
                     bg-white/70 dark:bg-gray-900/60
                     border border-gray-200/70 dark:border-gray-700/60
                     shadow-xl backdrop-blur"
        >
          {/* Top row */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Email */}
            <motion.a
              variants={item}
              href="mailto:raviharaproboth94@gmail.com"
              className="group rounded-2xl p-5
                         bg-white/60 dark:bg-gray-800/50
                         border border-gray-200/70 dark:border-gray-700/60
                         hover:border-indigo-400/60 dark:hover:border-indigo-400/50
                         hover:-translate-y-0.5 transition
                         flex items-start gap-4"
            >
              <span className="shrink-0 rounded-xl p-2.5
                               bg-indigo-500/10 dark:bg-indigo-400/10
                               border border-indigo-500/10 dark:border-indigo-400/10">
                <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
              </span>

              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <p className="mt-1 font-medium text-gray-900 dark:text-white truncate">
                  raviharaproboth94@gmail.com
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Send me an email anytime
                </p>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              variants={item}
              href="https://wa.me/94772428396"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-5
                         bg-white/60 dark:bg-gray-800/50
                         border border-gray-200/70 dark:border-gray-700/60
                         hover:border-sky-400/60 dark:hover:border-sky-400/50
                         hover:-translate-y-0.5 transition
                         flex items-start gap-4"
            >
              <span className="shrink-0 rounded-xl p-2.5
                               bg-sky-500/10 dark:bg-sky-400/10
                               border border-sky-500/10 dark:border-sky-400/10">
                <Phone className="w-5 h-5 text-sky-600 dark:text-sky-300" />
              </span>

              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                  WhatsApp
                </p>
                <p className="mt-1 font-medium text-gray-900 dark:text-white">
                  +94 772 428 396
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Quick chat & project details
                </p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              variants={item}
              href="https://www.linkedin.com/in/proboth-ravihara-84131818b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-5
                         bg-white/60 dark:bg-gray-800/50
                         border border-gray-200/70 dark:border-gray-700/60
                         hover:border-indigo-400/60 dark:hover:border-indigo-400/50
                         hover:-translate-y-0.5 transition
                         flex items-start gap-4"
            >
              <span className="shrink-0 rounded-xl p-2.5
                               bg-indigo-500/10 dark:bg-indigo-400/10
                               border border-indigo-500/10 dark:border-indigo-400/10">
                <Linkedin className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
              </span>

              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                  LinkedIn
                </p>
                <p className="mt-1 font-medium text-gray-900 dark:text-white">
                  View my profile
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Work history & recommendations
                </p>
              </div>
            </motion.a>
          </div>

          {/* CTA row */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="mailto:raviharaproboth94@gmail.com?subject=Project%20Inquiry"
              className="px-6 py-3 rounded-md font-medium
                         bg-gradient-to-r from-indigo-600 to-purple-600
                         text-white shadow-lg
                         hover:shadow-indigo-500/40
                         hover:-translate-y-0.5 hover:scale-[1.01]
                         transition-all duration-300 text-center"
            >
              Email Me
            </a>

            <a
              href="https://wa.me/94772428396"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md font-medium
                         bg-white/80 dark:bg-gray-800/70
                         border border-gray-200/70 dark:border-gray-700/60
                         text-gray-900 dark:text-white
                         hover:border-indigo-400/60 dark:hover:border-indigo-400/50
                         hover:-translate-y-0.5 hover:scale-[1.01]
                         transition-all duration-300 text-center"
            >
              WhatsApp Message
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
