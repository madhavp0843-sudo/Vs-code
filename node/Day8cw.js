const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");

const app = express();
const upload = multer({ dest: "uploads/" });
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-app-password"
  }
});
app.post("/upload", upload.single("file"), (req, res) => {
  transporter.sendMail({
    from: "your-email@gmail.com",
    to: "friend@example.com",
    subject: "File Uploaded",
    text: "A file has been uploaded successfully."
  });
  res.send("File uploaded and email sent successfully!");
});
app.listen(3000, () => console.log("Server running"));