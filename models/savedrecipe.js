const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const savedrecipeSchema = Schema({
  savedrecipe: { type: mongoose.Schema.Types.Mixed },
  user: { type: String },
});
const savedrecipe = mongoose.model("SAVEDRECIPE", savedrecipeSchema);
module.exports = savedrecipe;
