import React from "react";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-16 px-5 md:px-10 overflow-hidden"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 relative z-10">

        {/* Left */}
        <div className="flex-1 text-center lg:text-left">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for Opportunities
          </div>

          <h1 className="font-bold leading-none mb-6">
            <span className="block text-zinc-400 text-xl mb-3">
              I am Rahul
            </span>

            <span className="block text-white text-5xl md:text-7xl">
              MERN Stack
            </span>

            <span className="block text-white text-5xl md:text-7xl">
              Developer
            </span>
          </h1>

          <p className="max-w-xl text-zinc-400 leading-8 mb-10 mx-auto lg:mx-0">
            Building full-stack web applications using MongoDB,
            Express.js, React.js & Node.js. Passionate about
            clean code and seamless user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:opacity-80 transition"
            >
              Download CV
            </a>

            <button
              onClick={() => scrollTo("projects")}
              className="px-6 py-3 border border-zinc-700 rounded-full text-white hover:bg-zinc-900 transition"
            >
              View Projects
            </button>
          </div>

          {/* Social */}
          <div className="flex justify-center lg:justify-start gap-3">
            <a
              href="mailto:rahulraturi84@gmail.com"
              className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center hover:bg-zinc-900"
            >
              📧
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center hover:bg-zinc-900"
            >
              💻
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center hover:bg-zinc-900"
            >
              🔗
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:block">
          <div className="relative w-[320px] h-[320px]">

            {/* Avatar */}
            <div className="w-[280px] h-[280px] rounded-[40px] border border-zinc-800 bg-zinc-900 flex items-center justify-center">
              <span className="text-7xl font-bold text-zinc-700">
                RR
              </span>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute bottom-5 -left-5 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-sm text-zinc-300 animate-bounce">
              ⚡ MERN Stack
            </div>

            {/* Floating Card 2 */}
            <div className="absolute top-5 -right-5 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900 text-sm text-zinc-300 animate-bounce">
              🚀 2+ Projects
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto mt-16 border border-zinc-800 bg-zinc-900 rounded-3xl p-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-2xl font-bold text-white">
              BCA
            </h3>
            <p className="text-zinc-400 text-sm">
              H.N.B. Garhwal University
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">
              2+
            </h3>
            <p className="text-zinc-400 text-sm">
              Projects Built
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">
              Full Stack
            </h3>
            <p className="text-zinc-400 text-sm">
              MERN Developer
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">
              Open
            </h3>
            <p className="text-zinc-400 text-sm">
              To Opportunities
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;