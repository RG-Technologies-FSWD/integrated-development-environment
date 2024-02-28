const express = require("express");
const {
  signup,
  login,
  ForgetPasswordController,
  ResetPasswordGet,
  ResetPasswordPost,
} = require("../controller/auth.controller.js");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/reset-password", ForgetPasswordController);
router.get("/reset-password/:id/:token", ResetPasswordGet);
router.post("/reset-password/:id/:token", ResetPasswordPost);
//router.post("/logout", logout);

module.exports = router;
