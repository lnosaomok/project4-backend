const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const auth = require("../../middleware/auth");
///Update User Prefrences

router.post("/", auth, async (req, res) => {
  let user = await User.findById(req.user.id);

  if (!user) return res.status(404).json({ msg: "User not found" });

  try {
    await User.findByIdAndUpdate(req.user.id, {
      $set: {
        carbsMacro: req.body.carbsMacro,
      },
    });

    await User.findByIdAndUpdate(req.user.id, {
      $set: {
        fatMacro: req.body.fatMacro,
      },
    });

    await User.findByIdAndUpdate(req.user.id, {
      $set: {
        proteinMacro: req.body.proteinMacro,
      },
    });

    await User.findByIdAndUpdate(req.user.id, {
      $set: {
        sugarMacro: req.body.sugarMacro,
      },
    });

    await User.findByIdAndUpdate(req.user.id, {
      $set: {
        diet: req.body.diet,
      },
    });

    await User.findByIdAndUpdate(req.user.id, {
      $set: {
        calories: req.body.calories,
      },
    });

    await User.findByIdAndUpdate(req.user.id, {
      $set: {
        channels: req.body.channels,
      },
    });
    let userAfterSave = await User.findById(req.user.id);
    req.user.id = userAfterSave;
  } catch (err) {
    console.error("message", err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
