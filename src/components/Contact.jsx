import React, { useState } from "react";
import axios from 'axios'

function Contact() {
  
const [name, setname] = useState("")

  const [email, setemail] = useState("")

  const [message, setmessage] = useState("")

const [sent, setsent] = useState(false)

  const sendMessage = async (e) =>{
      e.preventDefault()

      console.log("Button Clicked")
 try{
  let messageinfomation = await axios.post("https://my-portfolio-backend-x7oc.onrender.com/contact", {
      name, 
      email, 
      message,
    })

    console.log(messageinformation.data)

   alert("message sent")
     setSent(true);

    setname("");
    setemail("");
    setmessage("");
 }catch (error) {
    console.log(error);
     console.log(error.response?.data);
  console.log(error.message);
  }
  }

  return (
    <section
      id="contact"
      className="py-24 px-5 md:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] uppercase tracking-[3px] font-semibold text-zinc-500 mb-3">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Contact
          </h2>

          <p className="text-zinc-400">
            Interested in working together? Let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Connect
            </h3>

            <p className="text-zinc-400 leading-8 mb-8">
              I'm currently open to full-time roles, internships,
              and freelance projects. Feel free to reach out!
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">

              <a
                href="mailto:rahulraturi84@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                  📧
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-zinc-500">
                    Email
                  </p>

                  <p className="text-zinc-300">
                    rahulraturi84@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+916398115169"
                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                  📱
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-zinc-500">
                    Phone
                  </p>

                  <p className="text-zinc-300">
                    +91 6398115169
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                  📍
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[2px] text-zinc-500">
                    Location
                  </p>

                  <p className="text-zinc-300">
                    Rishikesh, Uttarakhand
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition"
              >
                LinkedIn
              </a>

            </div>
          </div>

          {/* Right Side Form */}
          <form
            onSubmit={sendMessage}
            className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-3xl
              p-8
              space-y-5
            "
          >
            <div>
              <label className="block text-xs uppercase tracking-[2px] text-zinc-500 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e)=>setname(e.target.value)}
                required
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-zinc-950
                  border
                  border-zinc-800
                  text-white
                  placeholder:text-zinc-500
                  focus:outline-none
                  focus:border-zinc-600
                "
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[2px] text-zinc-500 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                required
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-zinc-950
                  border
                  border-zinc-800
                  text-white
                  placeholder:text-zinc-500
                  focus:outline-none
                  focus:border-zinc-600
                "
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[2px] text-zinc-500 mb-2">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e)=>setmessage(e.target.value)}
                required
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-zinc-950
                  border
                  border-zinc-800
                  text-white
                  placeholder:text-zinc-500
                  resize-none
                  focus:outline-none
                  focus:border-zinc-600
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full
                py-3
                rounded-xl
                bg-white
                text-black
                font-semibold
                hover:opacity-90
                transition
                cursor-pointer
              "
            >
              {sent ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;