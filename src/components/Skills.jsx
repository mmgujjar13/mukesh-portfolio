import { motion } from "framer-motion";
import {
  FaTools,
  FaGitAlt,
  FaWordpress,
  FaLaptopCode,
  FaPhp,
  FaReact,
  FaAws,
} from "react-icons/fa";
import { SiLaravel, SiMysql, SiRedis } from "react-icons/si";

const skills = [
  { name: "WordPress & PHP", value: 95 },
  { name: "Laravel & MySQL", value: 92 },
  { name: "Team Leadership & Architecture", value: 90 },
  { name: "AWS & DevOps (CI/CD, Redis)", value: 85 },
  { name: "React.js & JavaScript (ES6+)", value: 82 },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gray-300 text-black dark:bg-[#020617] dark:text-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="skills px-4 py-2 rounded-full bg-white/10 text-sm font-medium">
            Skills
          </span>

          <h2 className="text-4xl font-bold mt-4">
            My <span className="text-gradient">Expertise</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT - PROGRESS */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
              <FaLaptopCode className="text-blue-400" />
              Technical Skills
            </h3>

            <div className="space-y-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span className="text-gradient font-semibold">{skill.value}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT - TOOLS */}
          <div className="glass rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
              <FaTools className="text-blue-400" />
              Tools &amp; Technologies
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                { icon: <FaPhp className="text-blue-400" />, name: "PHP" },
                { icon: <SiLaravel className="text-red-500" />, name: "Laravel" },
                { icon: <FaWordpress className="text-blue-500" />, name: "WordPress" },
                { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
                { icon: <FaReact className="text-blue-400" />, name: "React.js" },
                { icon: <FaAws className="text-orange-400" />, name: "AWS" },
                { icon: <SiRedis className="text-red-400" />, name: "Redis" },
                { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
              ].map((tool, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative overflow-hidden glass rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-5 flex flex-col items-center justify-center text-center cursor-pointer border border-white/10 hover:border-blue-600/50 min-h-[90px] sm:min-h-[110px] lg:min-h-[120px]"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-500/10 via-blue-600/10 to-blue-500/10" />

                  <div className="relative z-10 flex items-center justify-center text-3xl sm:text-4xl w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 transition-all duration-300 group-hover:scale-125">
                    {tool.icon}
                  </div>

                  <p className="relative z-10 text-xs sm:text-sm font-medium text-black dark:text-gray-300 group-hover:text-gray-500 dark:group-hover:text-white">
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="font-bold text-lg mb-5">Backend &amp; Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Laravel",
                "WordPress Core",
                "WooCommerce",
                "ACF Pro",
                "BuddyBoss",
                "LearnDash",
                "REST APIs",
                "GraphQL",
                "Webhooks",
                "Tailwind CSS",
                "JavaScript (ES6+)",
                "React.js",
                "jQuery",
                "AJAX",
              ].map((skill, i) => (
                <span key={i} className="skills px-4 py-2 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="font-bold text-lg mb-5">Tools &amp; Professional Skills</h3>
            <div className="flex flex-wrap gap-3 mb-5">
              {[
                "Git",
                "GitHub / Bitbucket",
                "Composer",
                "NPM",
                "Postman",
                "cPanel / WHM",
                "Apache2",
                "MariaDB",
              ].map((tool, i) => (
                <span key={i} className="skills px-4 py-2 rounded-full text-sm">
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Team Leadership",
                "Architecture & Delivery",
                "Release Management",
                "Code Review",
                "Mentoring",
              ].map((skill, i) => (
                <span key={i} className="skills px-4 py-2 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
