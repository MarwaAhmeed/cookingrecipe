const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = (body) => {
  return User.create(body);
};

const login = async (body) => {
  let { userEmail, password } = body;
  const user = await User.findOne({ userEmail });
  const valid = await bcrypt.compare(password, user.password);
  const userName = user.userName;
  const userPassword = user.password;
  const userId = user._id;
  console.log("auth Controllers", userId);
  console.log("auth Controllers", userPassword);
  if (!valid) {
    throw "UN_AUTH";
  } else {
    return {
      token: jwt.sign(
        {
          userEmail,
          userId: user.id,
        },
        "gytrfdtrdjtfyuhnjinkjklsaaolkyygydssiphazemh",
        { expiresIn: "1d" }
      ),
      userEmail,
      userName,
      userId,
    };
  }
};


module.exports = {
  register,
  login,
};
