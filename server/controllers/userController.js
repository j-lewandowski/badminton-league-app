import userModel from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const User = userModel;

// @Desc  Login user
// @Route /api/users/login
// @Access Public
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.exists({ email });

  if (userExist) {
    const user = await User.findOne({ email });
    const passwordsMatch = await user.matchPasswords(password);

    if (passwordsMatch) {
      res.status(202).json({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        token: await generateToken(user._id),
      });
    }
  } else {
    res.status(404).json({ message: "User not found!" });
  }
};

// @Desc  Register user
// @Route /api/users
// @Access Public
export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password1, password2 } = req.body;

  const userExist = await User.exists({ email });

  if (userExist) {
    res.status(400).json({ message: "User already exists!" });
  } else {
    if (password1 === password2) {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: password1,
      });

      res.status(201).json({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: await generateToken(user._id),
      });

      console.log(user);
    } else {
      res.status(406).json({ message: "Passwords must match" });
    }
  }
};
