const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/auth");

router.post("/api/v1/auth/register", register);
router.post("/api/v1/auth/login", login);

module.exports = router;
