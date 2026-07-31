import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaDownload,
  FaBriefcase,
} from "react-icons/fa";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 pt-32 overflow-hidden bg-white text-black dark:bg-black dark:text-white transition-colors duration-500"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-3 bg-gray-100 dark:bg-white/10 backdrop-blur-lg px-5 py-2 rounded-full text-sm">
              <FaBriefcase className="text-green-500 w-2 h-2 animate-ping" />
              Open to Remote Opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
              <span className="block text-gray-600 dark:text-gray-400 text-xl mb-2">
                Hey there! I'm
              </span>
              Mukesh Gujjar
            </h1>

            <div className="flex gap-2 justify-center lg:justify-start text-2xl font-semibold">
              <div className="text-2xl font-bold flex gap-2">
                <span>I'm a</span>
                <TypeAnimation
                  sequence={[
                    "Technical Lead",
                    2000,
                    "Senior Backend Developer",
                    2000,
                    "Laravel Developer",
                    2000,
                    "WordPress Developer",
                    2000,
                    "PHP Developer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="text-gradient"
                />
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              Leading engineering teams and delivering enterprise WordPress
              and Laravel platforms — 90+ shipped across healthcare,
              education, logistics and membership domains for clients in the
              US, UK and Italy.
            </p>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {["Laravel", "WordPress", "PHP", "AWS", "React.js", "Team Leadership"].map(
                (s, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm"
                  >
                    {s}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:scale-105 transition"
              >
                View Work →
              </a>

              <a
                href="/Mukesh_Gujjar_Resume.pdf"
                download
                className="px-6 py-3 border border-gray-400 dark:border-gray-500 rounded-xl flex items-center gap-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                <FaDownload />
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://linkedin.com/in/mukesh-gujjar-95958293"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover-glow"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover-glow"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:gurjarmukeshgls@gmail.com"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover-glow"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE (IMAGE + FLOATING CARDS) */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative flex justify-center items-center">
              <div className="absolute w-[550px] h-[550px] rounded-full bg-blue-600/20 blur-3xl"></div>

              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full p-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 animate-pulse">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-900">
                  <img
                    src="/profile.png"
                    alt="Mukesh Gujjar"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="hidden md:block absolute top-20 -left-14 glass px-5 py-4 rounded-2xl float z-20">
                  <h4 className="font-bold text-xl">10+</h4>
                  <p className="text-xs">Years Exp.</p>
                </div>

                <div className="hidden md:block absolute -top-10 left-10 glass px-5 py-4 rounded-2xl float z-20">
                  <h4 className="font-bold text-xl">90+</h4>
                  <p className="text-xs">Projects</p>
                </div>

                <div className="hidden md:block absolute bottom-12 -left-16 glass px-5 py-4 rounded-2xl float z-20">
                  <h4 className="font-bold text-xl">₹1.8Cr+</h4>
                  <p className="text-xs">Revenue Delivered</p>
                </div>

                <div className="hidden md:block absolute bottom-0 right-4 glass px-5 py-4 rounded-2xl float z-20">
                  <h4 className="font-bold text-xl">5</h4>
                  <p className="text-xs">Team Size</p>
                </div>

                <div className="hidden md:block absolute -top-5 right-[-205px] hidden 2xl:block float z-30">
                  <div className="glass rounded-3xl p-5 w-[290px] shadow-2xl">
                    <div className="flex gap-2 mb-4">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-green-400 text-sm">Open to Opportunities</span>
                    </div>

                    <div className="font-mono text-sm leading-8">
                      <p>
                        <span className="text-blue-400">const</span>{" "}
                        <span className="text-blue-400">lead</span> = {"{"}
                      </p>
                      <p className="pl-5">
                        name:
                        <span className="text-green-400"> "Mukesh"</span>,
                      </p>
                      <p className="pl-5">
                        role:
                        <span className="text-blue-300"> "Technical Lead"</span>,
                      </p>
                      <p className="pl-5">
                        experience:
                        <span className="text-yellow-400"> "10+ Years"</span>,
                      </p>
                      <p className="pl-5">
                        status:
                        <span className="text-emerald-400"> "Open to Work"</span>
                      </p>
                      <p>{"}"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-blur top-10 left-10"></div>
      <div className="bg-blur bottom-10 right-10"></div>
    </section>
  );
}
