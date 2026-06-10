import React from "react";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  
  return (
    <footer className="border-t border-zinc-800 bg-black py-8 px-5 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">

        {/* Logo */}
        <button
          onClick={scrollTop}
          className="
            w-10 h-10
            rounded-full
            border border-zinc-700
            bg-zinc-900
            flex items-center justify-center
            text-white font-bold
            uppercase
            hover:border-zinc-500
            transition
          "
        >
          rr
        </button>

        {/* Text */}
        <p className="text-sm text-zinc-500 text-center">
          Built with React.js by{" "}
          <span className="text-zinc-300 font-medium">
            Rahul Raturi
          </span>
        </p>

        {/* Copyright */}
        <p className="text-xs text-zinc-500 text-center">
          © {new Date().getFullYear()} All Rights Reserved
        </p>

      </div>
    </footer>
  );
}

export default Footer;