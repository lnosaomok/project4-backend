const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  diet: { type: String, default: "" },
  channels: { type: Array },
  fatMacro: { type: Number, default: 0 },
  carbsMacro: { type: Number, default: 0 },
  proteinMacro: { type: Number, default: 0 },
  sugarMacro: { type: Number, default: 0 },
  calories: { type: Number, default: 0 },
});

module.exports = mongoose.model("User", UserSchema);
