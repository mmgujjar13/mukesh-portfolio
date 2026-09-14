import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Atlas Content Management System (ACMS)",
    subtitle: "Proprietary Modular CMS Framework",
    overview:
      "A highly scalable, custom Content Management System framework built entirely on Laravel, in-house at Atlassoftweb, designed for complex educational institutions.",
    problem:
      "The client needed the content-management flexibility of WordPress, but demanded the strict MVC architecture, security and performance of Laravel to support enterprise-scale expansion.",
    solution: [
      {
        label: "Core Architecture",
        text: "Engineered a modular CMS platform directly inspired by WordPress core architecture (Hooks, Custom Post Types, Taxonomies), secured in Laravel.",
      },
      {
        label: "Dynamic Modules",
        text: "Built an extensible system featuring a dynamic routing engine, media manager and a custom Module Manager.",
      },
      {
        label: "DevOps & Performance",
        text: "Integrated Redis caching, asynchronous Queues and automated CI/CD workflows using GitHub Actions for seamless deployments.",
      },
    ],
    tech: ["Laravel (MVC)", "PHP", "MySQL", "Redis", "GitHub Actions"],
  },
  {
    title: "AMC Service Management Platform",
    subtitle: "B2B Enterprise AMC Platform",
    overview:
      "A comprehensive, in-house enterprise application built at Atlassoftweb to track, manage and automate Annual Maintenance Contracts for high-volume corporate clients.",
    problem:
      "The organization was struggling with manual contract tracking, lack of client transparency, and server-side timeouts when generating and exporting large internal audit and service reports.",
    solution: [
      {
        label: "System Architecture",
        text: "Designed a secure, decoupled backend structure using Laravel from scratch, with a strict Role-Based Access Control (RBAC) engine.",
      },
      {
        label: "Workflow Automation",
        text: "Built a centralized support ticket system with precise manual time-tracking for internal audits.",
      },
      {
        label: "Performance Engineering",
        text: "Integrated Laravel Queues and background jobs via Redis, and used PHP Generators (cursor()) to process large data chunks safely without breaking server limits.",
      },
    ],
    tech: ["Laravel 11/12", "MySQL", "Redis Queues", "AWS EC2"],
  },
  {
    title: "HelloNemo — Veterinary Telehealth",
    subtitle: "Custom OOP Telehealth Solution",
    overview:
      "A proprietary, end-to-end telehealth consultation platform connecting verified veterinarians with pet parents for real-time virtual appointments.",
    problem:
      "The client was overly reliant on bloated third-party plugins that caused security vulnerabilities and slow page-load times.",
    solution: [
      {
        label: "Custom Framework",
        text: "Architected a custom WordPress theme entirely from scratch using core OOP concepts and native hooks/filters.",
      },
      {
        label: "API Integrations",
        text: "Integrated the Google Meet API for automated video scheduling and the Stripe API for split payouts via webhooks.",
      },
      {
        label: "Server Automation",
        text: "Configured automated Cron jobs to handle appointment confirmations, cancel idle booking slots and manage dispute resolutions.",
      },
    ],
    tech: ["Custom WordPress (OOP)", "Google Meet API", "Stripe API", "Cron Jobs"],
  },
  {
    title: "Intro — Queer Desi Dating",
    subtitle: "High-Concurrency Matchmaking Portal",
    overview:
      "A bespoke matchmaking and networking portal featuring advanced profile discovery and a custom real-time communication infrastructure.",
    problem:
      "The platform needed complex profile filtering based on strict privacy settings, plus a secure real-time chat infrastructure capable of handling high concurrent loads.",
    solution: [
      {
        label: "Advanced Filtering",
        text: "Engineered a customized WordPress architecture using advanced taxonomies for deep, multi-layered profile filtering.",
      },
      {
        label: "Custom Page Architecture",
        text: "Developed custom page templates optimized for profile viewing, match discovery and secure onboarding.",
      },
      {
        label: "Real-Time Chat Infrastructure",
        text: "Bypassed heavy server-polling to build a dedicated WhatsApp-style chat infrastructure, supporting 200+ concurrent users.",
      },
    ],
    tech: ["Custom WordPress Theme", "AJAX", "Custom Taxonomies"],
  },
];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative py-20 lg:py-32 bg-white dark:bg-slate-900 overflow-hidden"
    >
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-600/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="skills px-4 py-2 rounded-full text-sm font-medium">
            Deep Dives
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Case <span className="text-gradient">Studies</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A closer look at how I approach architecture and problem-solving
            as Technical Lead — from in-house platforms to client-facing
            products.
          </p>
        </motion.div>

        <div className="space-y-10">
          {caseStudies.map((study, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-3xl p-6 sm:p-8 lg:p-10"
            >
              <span className="text-xs font-mono text-blue-500 dark:text-blue-400 tracking-wide uppercase">
                Case Study {i + 1}
              </span>

              <h3 className="text-2xl lg:text-3xl font-bold mt-2">{study.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">{study.subtitle}</p>

              <p className="text-gray-600 dark:text-gray-400 mb-6">{study.overview}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  The Problem
                </h4>
                <p className="text-gray-600 dark:text-gray-400">{study.problem}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  My Solution as Tech Lead
                </h4>
                <ul className="space-y-3">
                  {study.solution.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-blue-500 dark:text-blue-400 font-bold shrink-0">
                        ▹
                      </span>
                      <p className="text-gray-600 dark:text-gray-400">
                        <strong className="text-black dark:text-white">
                          {item.label}:
                        </strong>{" "}
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {study.tech.map((tech, idx) => (
                  <span key={idx} className="skills px-3 py-1 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10 max-w-2xl mx-auto">
          Specific client names and proprietary source code have been
          redacted to comply with NDAs. I'm happy to discuss the
          architectural logic and problem-solving approach in a technical
          interview.
        </p>
      </div>
    </section>
  );
}
