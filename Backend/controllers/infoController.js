import transporter from "../config/mailer.js";

// Function ko BAHAR define karo
const sanitize = (str) => String(str).replace(/</g, "&lt;").replace(/>/g, "&gt;");

export let HomeRoute = (req, res) => {
  res.send("Backend Running");
};

export let contactPost = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    let { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, msg: "All fields are required" });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Portfolio Contact",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>📩 New Portfolio Contact</h2>
          <hr>
          <p><strong>Name:</strong> ${sanitize(name)}</p>
          <p><strong>Email:</strong> ${sanitize(email)}</p>
          <p><strong>Message:</strong> ${sanitize(message)}</p>
        </div>
      `,
    });

    res.status(200).json({
      success: true,
      msg: "Email Sent Successfully",
    });

  } catch (error) {
    console.log("full error", error);
    res.status(500).json({
      success: false,
      msg: "Email Sending Failed",
    });
  }
};