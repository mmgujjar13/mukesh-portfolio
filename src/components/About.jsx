import { motion } from "framer-motion";
import {
  FaBolt,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaPaperPlane,
} from "react-icons/fa";

export function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium">
            About Me
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Know More{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Technical Lead building modern, high-performance platforms with WordPress and Laravel.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>

            <img
              src="/profile.png"
              alt="Mukesh Gujjar"
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 glass px-5 py-4 rounded-2xl z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-white">
                  <FaBolt />
                </div>
                <div>
                  <h4 className="text-xl font-bold">10+</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              A Technical Lead specializing in WordPress, Laravel &amp; PHP
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a Technical Lead with 10+ years leading engineering teams and
              delivering enterprise WordPress and Laravel platforms. I led a
              cross-functional team of five — developers, UI and QA — at
              Atlassoftweb, owning architecture decisions, release management
              and mentorship across a 90+ platform delivery track record in
              healthcare, education, logistics and membership domains. I'm
              currently freelance and actively exploring senior/lead full-time
              roles.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I've generated ₹1.8Cr+ in annual revenue through project
              delivery, earning Atlassoftweb's Highest Revenue Generator award
              in 2022, 2024 and Key Contributor in 2025. On the technical side,
              I've driven a 40% page-load improvement (2.0s → 1.2s),
              closed SQL injection and XSS vulnerabilities across production sites,
              and scaled AWS EC2 infrastructure supporting a WordPress Multisite network of 40+
              active subdomains at 99.9% uptime.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I designed two Laravel platforms from the ground up — Atlas CMS,
              a modular CMS inspired by WordPress core architecture, and an
              AMC service management platform — and directed custom Stripe
              payment gateway builds for clients in the UK, US and Italy, with
              deployment automated via Redis queues, cron jobs and GitHub
              Actions CI/CD.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Whether you need a developer to build a platform from scratch,
              modernize an existing system, or lead a team through delivery, I
              focus on clean, maintainable code and solutions that actually
              hold up in production.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: <FaUser />, title: "Name", value: "Mukesh Gujjar" },
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  value: "gurjarmukeshgls@gmail.com",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Location",
                  value: "Surat, Gujarat, India",
                },
                {
                  icon: <FaBriefcase />,
                  title: "Availability",
                  value: "Freelance — Immediately Available for Interviews",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/60 dark:bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>
                    <p className="font-semibold break-all text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              <FaPaperPlane />
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
