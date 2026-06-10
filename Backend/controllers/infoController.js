import transporter from "../config/mailer.js";

export let contactPost = async (req, res) => {
  try {
    let { name, email, message } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Portfolio Contact",
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>📩 New Portfolio Contact</h2>
          <hr>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
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