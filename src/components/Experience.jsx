import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const workHistory = [
  {
    company: "Self-Employed",
    role: "Freelance Full-Stack Developer (Laravel/WordPress)",
    period: "Jul 2026 - Present",
    location: "Surat, Gujarat",
    skills: ["Laravel", "WordPress", "Freelance"],
    points: [
      "Engaged as an independent freelance developer, including a current 3-month contract with former employer Atlassoftweb (through Sept 2026), continuing ownership of the AMC platform and modular CMS architecture built in-house.",
      "Taking on additional freelance client work in Laravel and WordPress development while pursuing a full-time senior/lead role.",
    ],
  },
  {
    company: "Atlassoftweb",
    role: "Technical Lead — WordPress & Laravel",
    period: "Apr 2021 - Jun 2026",
    location: "Ahmedabad, Gujarat",
    skills: ["Laravel", "WordPress", "AWS", "Redis", "CI/CD"],
    points: [
      "Lead a cross-functional team of 5 (3 WordPress developers, 1 UI developer, 1 QA engineer), delivering 90+ WordPress and Laravel projects.",
      "Architected two internal Laravel platforms from the ground up: an AMC management system and a modular CMS inspired by WordPress core architecture.",
      "Generated ₹1.8Cr+ in annual revenue through project delivery, earning the Highest Revenue Generator award in 2022, 2024 and 2025.",
      "Scaled and secured AWS EC2 infrastructure supporting a WordPress Multisite network of 40+ active subdomains.",
      "Drove a 40% page-load improvement (2.0s → 1.2s) and closed SQL injection/XSS vulnerabilities across production sites.",
      "Directed custom Stripe payment gateway builds for UK, US and Italian platforms, with deployment automated via Redis queues, cron jobs and GitHub Actions CI/CD.",
    ],
  },
  {
    company: "Atlassoftweb",
    role: "Senior WordPress Developer",
    period: "Apr 2020 - Apr 2021",
    location: "Ahmedabad, Gujarat",
    skills: ["WordPress", "ACF Pro", "WooCommerce"],
    points: [
      "Architected flexible, client-manageable content structures using ACF Pro for enterprise clients.",
      "Built custom WooCommerce extensions for dynamic pricing and advanced shipping logic at high-volume stores.",
      "Maintained 99.9% uptime across the full client portfolio.",
    ],
  },
  {
    company: "Centricwebsolution",
    role: "WordPress Developer",
    period: "2016 - Apr 2020",
    location: "Ahmedabad, Gujarat",
    skills: ["WordPress", "PHP", "Custom Themes"],
    points: [
      "Delivered 100+ WordPress site builds, migrations and deployments with zero data loss.",
      "Converted complex PSD/HTML designs into pixel-perfect, fully responsive custom WordPress themes.",
    ],
  },
];

const education = [
  {
    degree: "MCA",
    field: "Master of Computer Application",
    college: "GLS Institute Of Computer Technology, Ahmedabad",
    location: "Ahmedabad, Gujarat",
    year: "2011 - 2014",
  },
  {
    degree: "BCA",
    field: "Bachelor of Computer Application",
    college: "Smt. J.J. Kundaliya College, Rajkot",
    location: "Rajkot, Gujarat",
    year: "2008 - 2011",
  },
];

const awards = [
  {
    title: "Key Contributor",
    institute: "Atlassoftweb",
    year: "Nov 2025",
    description: "Recognized for outstanding contribution to team delivery and technical direction.",
  },
  {
    title: "Highest Revenue Generator",
    institute: "Atlassoftweb",
    year: "Nov 2022, Nov 2024",
    description: "Awarded for project delivery contributing ₹1.8Cr+ in annual revenue.",
  },
  {
    title: "Make a Difference Award",
    institute: "Atlassoftweb",
    year: "Nov 2021",
    description: "Recognized for impact beyond assigned role and responsibilities.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-gray-300 text-black dark:bg-[#020617] dark:text-white overflow-hidden"
    >
      <div className="bg-blur top-10 left-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="skills px-4 py-2 rounded-full bg-white/10 text-sm font-medium">
            Experience
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Work <span className="text-gradient">Experience</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            My professional journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-500 flex items-center justify-center">
                <FaBriefcase />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Work History</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  10+ Years Experience
                </p>
              </div>
            </div>

            <div className="relative border-l-2 border-blue-600/30 ml-4">
              {workHistory.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="relative ml-8 mb-10"
                >
                  <div className="absolute -left-11 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-4 border-white dark:border-slate-900" />

                  <div className="glass p-6 rounded-2xl hover:glow transition">
                    <span className="text-xs text-blue-400 font-medium">
                      {job.period}
                    </span>
                    <h4 className="text-xl font-bold mt-2">{job.role}</h4>
                    <p className="text-gradient font-medium">{job.company}</p>
                    {job.location && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        📍 {job.location}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-4 space-y-2">
                      {job.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 dark:text-gray-400 flex gap-2"
                        >
                          <span className="text-green-400">✓</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Education</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Academic Background
                </p>
              </div>
            </div>

            <div className="relative border-l-2 border-blue-500/30 ml-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="relative ml-8 mb-10"
                >
                  <div className="absolute -left-11 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 border-4 border-white dark:border-slate-900" />

                  <div className="glass p-6 rounded-2xl hover:glow transition">
                    <span className="text-xs text-blue-300 font-medium">{edu.year}</span>
                    <h4 className="text-xl font-bold mt-2">{edu.degree}</h4>
                    <p className="text-gradient">{edu.field}</p>
                    <p className="mt-3 text-sm">{edu.college}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      📍 {edu.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white text-xl">
                  🏆
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Awards &amp; Recognition</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Company Awards
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {awards.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -8 }}
                    className="glass rounded-3xl p-6 hover:glow transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"></div>

                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-2xl">
                        🏅
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs bg-yellow-500/10 border border-yellow-500/20 text-yellow-500">
                        {cert.year}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold mb-2">{cert.title}</h4>
                    <p className="text-gradient font-medium mb-4">{cert.institute}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
