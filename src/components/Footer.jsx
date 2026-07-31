import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative bg-gray-300 dark:bg-[#020617] overflow-hidden">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-600/40 to-transparent"></div>

      <div className="absolute top-0 left-20 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold">
              Mukesh <span className="text-gradient">Gujjar</span>
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md">
              Technical Lead specializing in WordPress, Laravel, PHP and
              MySQL. Building scalable platforms and leading engineering
              teams.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mmgujjar13"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl glass hover:-translate-y-1 hover:glow transition-all"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/mukesh-gujjar-95958293"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl glass hover:-translate-y-1 hover:glow transition-all"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="mailto:gurjarmukeshgls@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-xl glass hover:-translate-y-1 hover:glow transition-all"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        <div className="my-8 border-t border-black/10 dark:border-white/10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Mukesh Gujjar. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>

          <a
            href="#home"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:scale-110 transition"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
