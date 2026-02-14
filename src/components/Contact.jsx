import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact
          </h2>
          <p className="text-gray-900 dark:text-white">
            Interested in working together or discussing a project?
          </p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          {/* Email */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-900 dark:text-white mb-2">
              Email
            </p>
            <a
              href="mailto:raviharaproboth94@gmail.com"
              className="text-lg text-gray-900 dark:text-white hover:underline" >
              raviharaproboth94@gmail.com
            </a>
          </div>

          {/* WhatsApp */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-900 dark:text-white mb-2">
              WhatsApp
            </p>
            <a
              href="https://wa.me/94772428396"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-900 dark:text-white hover:underline">
              +94 772 428 396
            </a>
          </div>
        </motion.div>
        <a
  href="https://www.linkedin.com/in/proboth-ravihara-84131818b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkudWt3EdSpegQsWHomM9KQ%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-8 px-6 py-3
             bg-indigo-600 text-white rounded-md
             hover:bg-indigo-700 transition"
>
  View More on LinkedIn
</a>


      </div>
    </section>
  );
}

export default Contact;
