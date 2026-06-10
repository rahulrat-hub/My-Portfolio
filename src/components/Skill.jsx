import React from "react";

const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose"],
  },
  {
    title: "Authentication",
    skills: ["JWT", "bcrypt"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-5 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] uppercase tracking-[3px] font-semibold text-zinc-500 mb-3">
            What I Know
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Skills
          </h2>

          <p className="text-zinc-400">
            My technical toolkit for building modern web apps
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="
                bg-zinc-900
                border
                border-zinc-800
                rounded-3xl
                p-6
                hover:border-zinc-700
                transition-all
                duration-300
              "
            >
              <span className="block text-[11px] uppercase tracking-[3px] font-bold text-zinc-500 mb-5">
                {group.title}
              </span>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      px-4
                      py-2
                      text-sm
                      rounded-lg
                      bg-zinc-800
                      border
                      border-zinc-700
                      text-zinc-300
                      hover:text-white
                      hover:border-zinc-500
                      transition
                    "
                  >
                    {skill}
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

export default Skills;