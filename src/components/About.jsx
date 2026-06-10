import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-10 border-y border-zinc-800 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        
        {/* Left */}
        <div>
          <span className="block mb-3 text-xs uppercase tracking-[2px] text-zinc-500">
            Who I Am
          </span>

          <h2 className="text-4xl font-bold text-white mb-5">
            About Me
          </h2>

          <p className="text-zinc-400 leading-8 text-sm mb-4">
            I'm a MERN Stack Developer fresher with hands-on experience building
            full-stack web applications. I'm passionate about writing clean,
            efficient code and creating seamless user experiences that make an
            impact.
          </p>

          <p className="text-zinc-400 leading-8 text-sm mb-4">
            Currently a BCA graduate from H.N.B. Garhwal University (2025), I'm
            eager to contribute my technical skills in a professional
            environment and continuously grow as a developer.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-zinc-500">
                Location
              </span>
              <span className="text-sm text-zinc-400">
                Rishikesh, Uttarakhand
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-zinc-500">
                Email
              </span>
              <span className="text-sm text-zinc-400">
                rahulraturi84@gmail.com
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-zinc-500">
                Phone
              </span>
              <span className="text-sm text-zinc-400">
                +91 6398115169
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-zinc-500">
                Status
              </span>
              <span className="text-sm text-green-400 font-medium">
                Open to Work
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          
          {/* Approach */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-4">
            <h4 className="text-sm uppercase tracking-widest text-zinc-400 font-semibold mb-5">
              My Approach
            </h4>

            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="text-xs font-bold text-zinc-500">
                  01
                </span>

                <div>
                  <h5 className="text-white font-semibold text-sm mb-1">
                    Understand Requirements
                  </h5>

                  <p className="text-zinc-400 text-sm leading-6">
                    Analyse project goals and user needs before writing a single
                    line of code.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-xs font-bold text-zinc-500">
                  02
                </span>

                <div>
                  <h5 className="text-white font-semibold text-sm mb-1">
                    Build Clean Architecture
                  </h5>

                  <p className="text-zinc-400 text-sm leading-6">
                    Design scalable, component-based structures for frontend and
                    backend.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-xs font-bold text-zinc-500">
                  03
                </span>

                <div>
                  <h5 className="text-white font-semibold text-sm mb-1">
                    Deliver Responsive UIs
                  </h5>

                  <p className="text-zinc-400 text-sm leading-6">
                    Ensure pixel-perfect, mobile-first experiences across all
                    devices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h4 className="text-sm uppercase tracking-widest text-zinc-400 font-semibold mb-5">
              Education
            </h4>

            <div className="space-y-5">
              <div className="flex gap-4">
                <span className="text-xs font-bold text-zinc-500 w-10">
                  2025
                </span>

                <div>
                  <h5 className="text-white font-semibold text-sm">
                    B.C.A. — H.N.B. Garhwal University
                  </h5>

                  <p className="text-zinc-400 text-sm">
                    Bachelor of Computer Applications
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-xs font-bold text-zinc-500 w-10">
                  2022
                </span>

                <div>
                  <h5 className="text-white font-semibold text-sm">
                    Class 12 (ICSE) — Modern School, Rishikesh
                  </h5>

                  <p className="text-zinc-400 text-sm">
                    Senior Secondary Education
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-xs font-bold text-zinc-500 w-10">
                  2020
                </span>

                <div>
                  <h5 className="text-white font-semibold text-sm">
                    Class 10 (ICSE) — Modern School, Rishikesh
                  </h5>

                  <p className="text-zinc-400 text-sm">
                    Secondary Education
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;