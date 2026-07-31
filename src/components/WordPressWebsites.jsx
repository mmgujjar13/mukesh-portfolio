import { HashLink } from "react-router-hash-link";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CursorGlow } from "./CursorGlow";

// Add your real client sites here — name, live URL, and a short description.
const websites = [
  {
    name: "MMG Academy Edu",
    url: "https://wordpress.org/themes/",
    description:
      "A WordPress theme built and submitted to the official WordPress.org theme directory, designed for education-sector sites.",
  },
  {
    name: "Add your site name",
    url: "#",
    description: "Replace with a real client site and a short description of the build.",
  },
  {
    name: "Add your site name",
    url: "#",
    description: "Replace with a real client site and a short description of the build.",
  },
];

export default function WordPressWebsites() {
  return (
    <>
      <Navbar />
      <CursorGlow />

      <section className="min-h-screen pt-32 pb-20 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <HashLink
            to="/"
            className="inline-flex items-center gap-2 mb-8 text-blue-400 hover:text-blue-300 transition"
          >
            <FaArrowLeft />
            Back to Portfolio
          </HashLink>

          <div className="text-center mb-16">
            <span className="skills px-5 py-2 rounded-full text-sm font-medium">
              Portfolio
            </span>

            <h1 className="text-5xl font-bold mt-5">
              WordPress <span className="text-gradient">Websites</span>
            </h1>

            <p className="max-w-3xl mx-auto mt-5 text-gray-600 dark:text-gray-400">
              Across <strong>Atlassoftweb</strong> and <strong>Centricwebsolution</strong>,
              I've delivered 100+ WordPress site builds, migrations and custom
              themes across healthcare, education and corporate domains using
              custom themes, plugins, ACF Pro and PHP — with zero data loss.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websites.map((site, i) => (
              <div
                key={i}
                className="glass rounded-3xl p-8 border border-white/10 hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-2xl font-bold text-white mb-6">
                  {site.name.charAt(0)}
                </div>

                <h3 className="text-2xl font-bold mb-4">{site.name}</h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {site.description}
                </p>

                {site.url !== "#" && (
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Visit Website
                    <FaExternalLinkAlt size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
