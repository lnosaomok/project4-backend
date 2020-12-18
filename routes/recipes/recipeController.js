const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const auth = require("../../middleware/auth");
const SavedRecipe = require("../../models/savedrecipes");

router.post("/", auth, async (req, res) => {
  const { recipe, type, timetoken } = req.body;
  const user = req.user.id;
  try {
    await SavedRecipe.create(
      { recipe, user, type, timetoken },
      (err, savedRecipe) => {}
    );
    //res.json(savedRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/", auth, async (req, res) => {
  try {
    let savedRecipes = await SavedRecipe.find({
      user: req.user.id,
    });
    res.json(savedRecipes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.post("/update", auth, async (req, res) => {
  console.log(req.body);
  try {
    await SavedRecipe.findByIdAndUpdate(req.body.id, {
      $set: {
        isRated: true,
      },
    });
  } catch (err) {
    console.error("message", err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
