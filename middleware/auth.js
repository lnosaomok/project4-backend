const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = function (req, res, next) {
  //get token from the header

  const token = req.header("x-auth-token");

  //check if no token

  if (!token) {
    return res.status(401).json({ msg: "No Token, auth denied" });
  }

  try {
    /// payload is stored in decoded variable
    const decoded = jwt.verify(token, process.env.jwtSecret);

    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
