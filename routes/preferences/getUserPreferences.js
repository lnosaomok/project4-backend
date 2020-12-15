const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const auth = require("../../middleware/auth");

router.get("/", auth, async (req, res) => {
  let user = await User.findById(req.user.id);

  if (!user) return res.status(404).json({ msg: "User not found" });
  try {
    const user = await User.findById(req.user.id)
      .select("-password")
      .select("-username")
      .select("-_id");
    res.json(user);
  } catch (err) {
    console.error("message", err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
