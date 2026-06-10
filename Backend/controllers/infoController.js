import transporter from "../config/mailer.js";

export let HomeRoute = (req,res)=>{
res.send("Backend Running")
}

import transporter from "../config/mailer.js";

export const contactPost = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ msg: "All fields required" });
    }

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Portfolio Contact",
      html: `
        <h2>New Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      msg: "Email sent successfully",
    });

  } catch (error) {
    console.log("EMAIL ERROR:", error);

    return res.status(500).json({
      success: false,
      msg: "Email failed",
      error: error.message,
    });
  }
};