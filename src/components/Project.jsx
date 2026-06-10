import React, { useState } from "react";

const projects = [
  {
    title: "Gym Community Website",
    desc: "A comprehensive fitness platform with services, memberships, and community features. Built with React hooks (useState, useEffect) for a dynamic, interactive UI with scalable component-based architecture.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT"],
    highlights: [
      "Scalable component-based architecture",
      "React hooks for dynamic UI",
      "Responsive across all devices",
      "REST API integration with backend",
    ],
    type: "Full Stack",
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "Clothing E-Commerce Website",
    desc: "A responsive e-commerce app featuring product listings, filters, and a shopping cart with reusable components and state management.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "MongoDB"],
    highlights: [
      "Product listings with filters",
      "Shopping cart functionality",
      "Mobile-first performance",
      "Clean UI navigation",
    ],
    type: "Frontend",
    github: "https://github.com/",
    live: "#",
  },
];

function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-5 md:px-10 bg-zinc-950 border-y border-zinc-800"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] uppercase tracking-[3px] font-semibold text-zinc-500 mb-3">
            My Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Projects
          </h2>

          <p className="text-zinc-400">
            Full-stack applications built from scratch
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`
                bg-zinc-900
                border
                rounded-3xl
                p-8
                transition-all
                duration-300
                ${
                  hovered === index
                    ? "border-zinc-600 -translate-y-1"
                    : "border-zinc-800"
                }
              `}
            >
              {/* Top */}
              <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">

                <div>
                  <span className="inline-block text-[11px] uppercase tracking-[3px] font-bold text-zinc-500 mb-2">
                    {project.type}
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 leading-7 max-w-2xl">
                    {project.desc}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-300 text-sm hover:bg-zinc-700 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl border border-zinc-700 bg-zinc-800 text-zinc-300 text-sm hover:bg-zinc-700 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {project.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-zinc-400 text-sm"
                  >
                    <span className="text-zinc-500">→</span>
                    {item}
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-5 border-t border-zinc-800">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      px-3
                      py-1.5
                      text-xs
                      rounded-lg
                      bg-zinc-800
                      border
                      border-zinc-700
                      text-zinc-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;