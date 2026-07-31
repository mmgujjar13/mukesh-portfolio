import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { FaPaperPlane } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Case Studies", id: "case-studies" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "case-studies",
        "projects",
        "contact",
      ];
      const scrollPos = window.scrollY + 200;
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && scrollPos >= section.offsetTop) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition ${
          scrolled ? "bg-white/80 dark:bg-black/80 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
          {/* LOGO */}
          {isHomePage ? (
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">MG</span>
              </div>
              <div className="hidden md:block">
                <h1 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition">
                  Mukesh
                </h1>
                <p className="text-xs text-gray-500">Technical Lead</p>
              </div>
            </a>
          ) : (
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold">MG</span>
              </div>
              <div className="hidden md:block">
                <h1 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition">
                  Mukesh
                </h1>
                <p className="text-xs text-gray-500">Technical Lead</p>
              </div>
            </Link>
          )}

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-6">
            {menuItems.map((item) => {
              const section = item.id;

              return isHomePage ? (
                <a
                  key={item.id}
                  href={`#${section}`}
                  className={`relative pb-1 group ${
                    activeSection === section
                      ? "text-blue-600"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ${
                      activeSection === section ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              ) : (
                <HashLink
                  key={item.id}
                  smooth
                  to={`/#${section}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
                >
                  {item.label}
                </HashLink>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {isHomePage ? (
              <a
                href="#contact"
                className="hidden lg:block btn-gradient px-6 py-2.5 rounded-xl text-white"
              >
                Hire Me
              </a>
            ) : (
              <HashLink
                smooth
                to="/#contact"
                className="hidden lg:block btn-gradient px-6 py-2.5 rounded-xl text-white"
              >
                Hire Me
              </HashLink>
            )}

            {isHomePage ? (
              <a
                href="#contact"
                className="lg:hidden w-11 h-11 rounded-xl btn-gradient flex items-center justify-center text-white"
              >
                <FaPaperPlane size={16} />
              </a>
            ) : (
              <HashLink
                smooth
                to="/#contact"
                className="lg:hidden w-11 h-11 rounded-xl btn-gradient flex items-center justify-center text-white"
              >
                <FaPaperPlane size={16} />
              </HashLink>
            )}

            <button
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
              className="lg:hidden w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
            >
              <div className="space-y-1">
                <span className="block w-5 h-0.5 bg-current"></span>
                <span className="block w-5 h-0.5 bg-current"></span>
                <span className="block w-5 h-0.5 bg-current"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setOpen(false)} />

        <div className="absolute right-0 top-0 h-full w-[85%] bg-white dark:bg-slate-950 shadow-2xl p-8">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-3xl"
          >
            ×
          </button>

          <div className="flex flex-col items-center mt-12 mb-10">
            <img
              src="/profile.svg"
              alt="Mukesh Gujjar"
              className="w-24 h-24 rounded-full border-4 border-blue-600 object-cover"
            />
            <h3 className="mt-4 text-xl font-bold">Mukesh Gujjar</h3>
            <p className="text-gray-500 text-sm">Technical Lead</p>
          </div>

          <div className="space-y-2">
            {menuItems.map((item) => {
              const section = item.id;

              return isHomePage ? (
                <a
                  key={item.id}
                  href={`#${section}`}
                  onClick={() => setOpen(false)}
                  className={`block p-4 rounded-xl transition ${
                    activeSection === section
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                      : "hover:bg-gray-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <HashLink
                  key={item.id}
                  smooth
                  to={`/#${section}`}
                  onClick={() => setOpen(false)}
                  className="block p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800"
                >
                  {item.label}
                </HashLink>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-blur top-10 left-10"></div>
      <div className="bg-blur bottom-10 right-10"></div>
    </>
  );
}
