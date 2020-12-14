const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  main_diet: { type: String, default: "" },
  fatMacro: { type: Number, default: 0 },
  carbsMcro: { type: Number, default: 0 },
  proteinMacro: { type: Number, default: 0 },
  sugarMacro: { type: Number, default: 0 },
  caloriesNumber: { type: Number, default: 0 },
});

module.exports = mongoose.model("User", UserSchema);
