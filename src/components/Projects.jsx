import { motion } from "framer-motion";

const projects = [
  {
    title: "Global Logistics Networks",
    category: "WordPress Theme Development",
    company: "AiO, AON, Mega Move, Seahawk",
    duration: "2023 - 2024",
    desc: "Custom themes across four global logistics network portals, with membership registration, member directories and AGM event booking.",
    technologies: ["WordPress", "PHP", "Membership Workflows"],
    highlights: [
      "Directed engineering across four logistics network portals.",
      "Implemented membership registration workflows and global member directories.",
      "Built 1:1 AGM event booking systems.",
    ],
  },
  {
    title: "Italian EdTech Platforms",
    category: "Dedicated Technical Lead",
    company: "EpiCode, BeamMeUp, Brainteractive, PCTO",
    duration: "2021 - Present",
    desc: "Dedicated technical point of contact directing engineering across four educational platforms in Italy — direct client communication (via Skype chat) from 2021-2023, with ongoing contributions through Atlassoftweb's client engagement since 2023.",
    technologies: ["BuddyBoss", "LearnDash", "Stripe", "Monaco Editor"],
    highlights: [
      "Oversaw BuddyBoss and LearnDash customization for learning management, coaching and recruitment.",
      "Directed tailored CRM, recruitment and KPI modules for Tutor, Coach and Admin roles.",
      "Directed integration of a frontend Monaco Editor for live coding practice.",
      "Directed custom Stripe gateways for course enrollments.",
      "Continued contributing to these platforms through Atlassoftweb's ongoing client engagement, including active work as recently as this month.",
    ],
  },
  {
    title: "East Cape Game Management (ECGMA)",
    category: "WordPress Membership Portal",
    company: "WordPress Developer",
    duration: "2020",
    desc: "A membership portal with complex approval workflows for NARFO certification, integrating LearnDash for assessments.",
    technologies: ["WordPress", "LearnDash", "PHP"],
    highlights: [
      "Owned build of NARFO certification approval workflows.",
      "Integrated LearnDash for theory assessments plus a custom practical-assessment upload module.",
      "Automated recurring payment verification, PDF invoice generation and renewal notifications.",
    ],
  },
  {
    title: "More WordPress Websites",
    category: "CMS Web Development",
    company: "Atlassoftweb & Centricwebsolution",
    duration: "2016 - Present",
    desc: "100+ additional WordPress site builds, migrations and custom themes delivered across healthcare, education and corporate sectors — including a theme submitted to the official WordPress.org directory.",
    technologies: ["WordPress", "PHP", "ACF", "WooCommerce"],
    highlights: [
      "Built and submitted the MMG Academy Edu theme to WordPress.org.",
      "Delivered 100+ site builds, migrations and deployments with zero data loss.",
      "Converted complex PSD/HTML designs into pixel-perfect responsive themes.",
    ],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-transparent relative overflow-hidden"
    >
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-center mb-20">
            <span className="skills px-5 py-2 rounded-full text-sm font-medium">
              Portfolio
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-5">
              Other <span className="text-gradient">Platforms & Projects</span>
            </h2>

            <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
              More of the 90+ platforms shipped using Laravel, WordPress, PHP,
              AWS and Stripe across healthcare, education, logistics and
              membership domains for clients in the US, UK and Italy.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-blue-600/30 transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-blue-500/20 via-blue-600/20 to-blue-500/20 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-center px-4">
                  {project.title}
                </h3>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md text-white">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-blue-400">
                    {project.company}
                  </span>
                  <span className="text-xs text-gray-500">{project.duration}</span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">
                  {project.desc}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.slice(0, 4).map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-blue-400 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="skills px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
