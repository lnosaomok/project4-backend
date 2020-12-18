const mongoose = require("mongoose");
const SavedRecipeSchema = mongoose.Schema({
  recipe: { type: mongoose.Schema.Types.Mixed },
  user: { type: String },
  type: { type: String },
  timetoken: { type: String },
  isRated: { type: Boolean, default: false },
});
module.exports = mongoose.model("SavedRecipe", SavedRecipeSchema);
