import { motion } from "framer-motion";

/* =========================
   SAFE ICON IMPORTS ONLY
========================= */

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaPhp,
  FaWordpress,
  FaJoomla,
  FaServer,
  FaCloud,
  FaChartLine,
  FaGlobe,
  FaTools,
  FaGitAlt,
  FaGithub,
  FaTerminal,
  FaBug,
  FaSearch,
  FaGoogle,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiMoodle,
  SiCloudflare,
  SiDocker,
  SiPostman,
  SiJira,
} from "react-icons/si";

/* =========================
   SKILL DATA
========================= */

const frontendSkills = [
  { name: "React", icon: FaReact },
  { name: "JavaScript (ES6+)", icon: FaJs },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3 / SCSS", icon: FaCss3Alt },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

const backendSkills = [
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "PHP", icon: FaPhp },
  { name: "REST APIs", icon: FaServer },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
];

const cmsSkills = [
  { name: "WordPress (Custom Theme Development)", icon: FaWordpress },
  { name: "Joomla (Custom Development)", icon: FaJoomla },
  { name: "Moodle LMS", icon: SiMoodle },
  { name: "CMS Management", icon: FaTools },
];

const devopsSkills = [
  { name: "DNS Management", icon: FaGlobe },
  { name: "Basic DevOps", icon: SiDocker },
  { name: "Server Configuration", icon: FaServer },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "Cloud Hosting", icon: FaCloud },
];

const seoSkills = [
  { name: "SEO Optimization", icon: FaChartLine },
  { name: "SEMrush", icon: FaSearch },
  { name: "Google Analytics", icon: FaGoogle },
  { name: "Website Traffic Analysis", icon: FaChartLine },
  { name: "Website Crawling & Audits", icon: FaTools },
];

const toolsSkills = [
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "VS Code", icon: FaCode },        // SAFE
  { name: "Postman", icon: SiPostman },
  { name: "LambdaTest", icon: FaBug },      // SAFE
  { name: "Jira", icon: SiJira },
  { name: "Terminal / CLI", icon: FaTerminal },
];

/* =========================
   REUSABLE SKILL GROUP
========================= */

const SkillGroup = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
      {title}
    </h3>

    <ul className="space-y-4">
      {skills.map(({ name, icon: Icon }) => (
        <li
          key={name}
          className="flex items-center gap-4 text-gray-700 dark:text-gray-300
                     hover:text-black dark:hover:text-white transition-colors"
        >
          <Icon className="text-xl text-gray-400" />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

/* =========================
   SKILLS SECTION
========================= */

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28 bg-gray-50 dark:bg-gray-900  before:absolute before:inset-0
    before:bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]
    before:opacity-0 dark:before:opacity-100
    before:pointer-events-none scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-20 bg-gradient-to-r from-indigo-500 to-purple-500" />

          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-5">
            Technologies, platforms, and tools I use to build scalable,
            production-ready applications.
          </p>
        </motion.div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <SkillGroup title="Frontend" skills={frontendSkills} />
          <SkillGroup title="Backend" skills={backendSkills} />
          <SkillGroup title="CMS & Custom Development" skills={cmsSkills} />
          <SkillGroup title="DevOps & Infrastructure" skills={devopsSkills} />
          <SkillGroup title="SEO, Analytics & Growth" skills={seoSkills} />
          <SkillGroup title="Tools & Workflow" skills={toolsSkills} />
        </div>

      </div>
    </section>
  );
}
