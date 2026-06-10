import React from "react";

const services = [
  {
    title: "Full Stack Development",
    desc: "End-to-end web apps using MongoDB, Express.js, React.js, and Node.js with clean REST APIs.",
    tags: ["MERN Stack", "REST APIs"],
    icon: "⚙️",
  },
  {
    title: "Frontend Development",
    desc: "Responsive, pixel-perfect UIs using React.js, Tailwind CSS, and Bootstrap with component-based design.",
    tags: ["React.js", "Tailwind CSS"],
    icon: "🎨",
  },
  {
    title: "Backend & APIs",
    desc: "Scalable Node.js + Express backends with JWT authentication, bcrypt, and MongoDB database management.",
    tags: ["Node.js", "JWT Auth"],
    icon: "🔧",
  },
  {
    title: "Database Design",
    desc: "MongoDB schema design with Mongoose, optimized queries, and proper data modelling for web applications.",
    tags: ["MongoDB", "Mongoose"],
    icon: "🗄️",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="py-24 px-5 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-semibold tracking-[2px] uppercase text-zinc-500 mb-3">
            What I Do
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Services
          </h2>

          <p className="text-zinc-400">
            Building scalable full-stack solutions
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:-translate-y-1 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="text-3xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-7 mb-5">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300"
                  >
                    {tag}
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

export default Services;