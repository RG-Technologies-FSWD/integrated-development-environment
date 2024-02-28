const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/auth.model.js");
const nodemailer = require("nodemailer");
const ejs = require("ejs");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const isPresent = await User.findOne({ email });
    if (isPresent) {
      return res.status(401).send("email already exist");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "user registered successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email id" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign(
      { userId: user._id, name: user.username, email: user.email },
      "RGTECH_IDE_6779",
      {
        expiresIn: "7days",
      }
    );
    // res.cookie("rgtech-ide-token", token, { httpOnly: true });
    return res.status(200).json({ message: "Login successful", token: token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const ForgetPasswordController = async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User Not Exists!!" });
    }
    const secret = "RGTECH_IDE_6779" + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `https://integrated-development-environment.onrender.com/v1/reset-password/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rgtechconsult@gmail.com",
        pass: "ntkx xezc nyzx ifep",
      },
    });
    var mailOptions = {
      from: "rgtechconsult@gmail.com",
      to: email,
      subject: "Password Reset",
      text: `Hello,\n\nWe received a request to reset your password. Click the link below to reset it:\n${link}\n\nIf you didn't request a password reset, please ignore this email.`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.json({ error: error });
      } else {
        res.json({ "Email sent": info.response });
      }
    });
  } catch (error) {
    res.send(error.message);
  }
};

const ResetPasswordGet = async (req, res) => {
  const { id, token } = req.params;
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = "RGTECH_IDE_6779" + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    if (verify) {
      res.render("index", { email: verify.email, status: "Not Verified" });
    }
  } catch (error) {
    console.log(error.message);
    res.send("Not Verified");
  }
};

const ResetPasswordPost = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = "RGTECH_IDE_6779" + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    console.log(error);
    res.send({ status: "Something Went Wrong" });
  }
};

// const logout = (req, res) => {
//   res.clearCookie("rgtech-ide-token");
//   res.status(200).json({ message: "Logout successful" });
// };

module.exports = {
  signup,
  login,
  ForgetPasswordController,
  ResetPasswordGet,
  ResetPasswordPost,
};
